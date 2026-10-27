"use server"

import nodemailer from "nodemailer"
import { createHmac, timingSafeEqual } from "crypto"
import { headers } from "next/headers"
import { z } from "zod"

/* -------------------------------------------------------------------------- */
/*                               Anti-spam config                              */
/* -------------------------------------------------------------------------- */

const PRACTICE_AREAS = [
  "Litigation (Civil & Criminal)",
  "Corporate & Commercial Law",
  "Financial Services Regulation",
  "Estate Administration & Probate",
  "Legal Advisory Services",
  "Property & Real Estate Law",
  "Arbitration & ADR",
  "Intellectual Property Law",
  "Family Law",
  "Employment Law",
  "Insolvency & Debt Recovery",
  "Maritime & Shipping Law",
] as const

const MIN_FILL_TIME_MS = 4_000 // humans can't fill the form in < 4s
const MAX_TOKEN_AGE_MS = 2 * 60 * 60 * 1000 // form token valid for 2h

const URL_RE = /(https?:\/\/|www\.|\[url|<a\s|\.(ru|cn|xyz|top|click|online|site|shop)\b)/i
const SPAM_WORDS_RE =
  /\b(seo|backlinks?|crypto|bitcoin|casino|viagra|cialis|porn|loan offer|forex|binary option|guest post|web ?design services|rank your website|telegram|whatsapp me)\b/i

const nameField = z
  .string()
  .trim()
  .min(1)
  .max(50)
  .refine((v) => !URL_RE.test(v) && !/[<>{}[\]\\/@]/.test(v) && !/\d{3,}/.test(v), "Invalid name")

const schema = z.object({
  firstName: nameField,
  lastName: nameField,
  email: z.string().trim().toLowerCase().email().max(120),
  phone: z
    .string()
    .trim()
    .max(25)
    .refine((v) => v === "" || /^[+\d\s()-]{7,25}$/.test(v), "Invalid phone"),
  legalMatter: z.enum(PRACTICE_AREAS),
  message: z.string().trim().min(20).max(3000),
  website: z.string().optional(), // honeypot
  formToken: z.string().min(10),
  turnstileToken: z.string().optional(),
})

function getSecret() {
  const s = process.env.FORM_SECRET || process.env.SMTP_PASS
  if (!s) throw new Error("FORM_SECRET (or SMTP_PASS) must be set")
  return s
}

function sign(value: string) {
  return createHmac("sha256", getSecret()).update(value).digest("hex")
}

/** Issued when the form loads. Proves the submitter loaded the page and waited. */
export async function getFormToken() {
  const ts = Date.now().toString()
  return `${ts}.${sign(ts)}`
}

function verifyFormToken(token: string): "ok" | "fast" | "invalid" {
  const [ts, sig] = token.split(".")
  if (!ts || !sig) return "invalid"
  const expected = sign(ts)
  const a = new Uint8Array(Buffer.from(sig))
  const b = new Uint8Array(Buffer.from(expected))
  if (a.length !== b.length || !timingSafeEqual(a, b)) return "invalid"
  const age = Date.now() - Number(ts)
  if (!Number.isFinite(age) || age > MAX_TOKEN_AGE_MS || age < 0) return "invalid"
  if (age < MIN_FILL_TIME_MS) return "fast"
  return "ok"
}

async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // Turnstile not configured -> skip (other checks still apply)
  if (!token) return false
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    })
    const data = (await res.json()) as { success?: boolean }
    return data.success === true
  } catch (err) {
    console.error("Turnstile verification failed:", err)
    return false
  }
}

// Best-effort in-memory rate limiting (per IP and per email). Resets on cold start,
// so Turnstile + the checks above are the main defence.
const attempts = new Map<string, number[]>()
function rateLimited(key: string, max: number, windowMs: number) {
  const now = Date.now()
  const list = (attempts.get(key) || []).filter((t) => now - t < windowMs)
  list.push(now)
  attempts.set(key, list)
  if (attempts.size > 5000) attempts.clear()
  return list.length > max
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// Pretend success to bots so they don't adapt.
type SubmitResult = { success: boolean; message?: string; error?: string }

const FAKE_OK: SubmitResult = {
  success: true,
  message: "Consultation request submitted successfully! We will contact you within 24 hours.",
}

/* -------------------------------------------------------------------------- */
/*                                Server action                               */
/* -------------------------------------------------------------------------- */

export async function submitConsultation(raw: unknown): Promise<SubmitResult> {
  try {
    const h = await headers()
    const ip = (h.get("x-forwarded-for")?.split(",")[0] || h.get("x-real-ip") || "unknown").trim()

    const parsed = schema.safeParse(raw)
    if (!parsed.success) {
      return { success: false, error: "Please check the form fields and try again." }
    }
    const data = parsed.data

    // 1. Honeypot (server side — bots that call the action directly can't skip it)
    if (data.website) {
      console.warn("[spam] honeypot", ip)
      return FAKE_OK
    }

    // 2. Signed time token: must have loaded the page and not submitted instantly
    const tokenStatus = verifyFormToken(data.formToken)
    if (tokenStatus === "invalid") {
      return { success: false, error: "Your session expired. Please refresh the page and try again." }
    }
    if (tokenStatus === "fast") {
      console.warn("[spam] too fast", ip)
      return FAKE_OK
    }

    // 3. Cloudflare Turnstile (if configured)
    if (!(await verifyTurnstile(data.turnstileToken, ip))) {
      return { success: false, error: "Verification failed. Please complete the security check." }
    }

    // 4. Rate limits
    if (rateLimited(`ip:${ip}`, 3, 60 * 60 * 1000) || rateLimited(`email:${data.email}`, 2, 24 * 60 * 60 * 1000)) {
      return { success: false, error: "Too many submissions. Please try again later or call us directly." }
    }

    // 5. Content heuristics
    const linkCount = (data.message.match(/https?:\/\/|www\./gi) || []).length
    if (linkCount > 1 || SPAM_WORDS_RE.test(data.message) || /[Ѐ-ӿ]{5,}/.test(data.message)) {
      console.warn("[spam] content", ip)
      return FAKE_OK
    }

    await sendConsultationEmails(data)
    return FAKE_OK
  } catch (error) {
    console.error("Consultation submission error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}

/* -------------------------------------------------------------------------- */
/*                                   Emails                                   */
/* -------------------------------------------------------------------------- */

async function sendConsultationEmails(formData: z.infer<typeof schema>) {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number.parseInt(process.env.SMTP_PORT || "465")
  const smtpSecure = process.env.SMTP_SECURE === "true"
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpFromEmail = process.env.SMTP_FROM_EMAIL
  const firmEmail = process.env.CORTLAND_EMAIL || smtpFromEmail

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFromEmail) {
    console.warn("SMTP not configured; emails not sent.")
    return
  }
  if (process.env.NODE_ENV !== "production") {
    console.log("Skipping email outside production.")
    return
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: { user: smtpUser, pass: smtpPass },
  })

  // Everything user-supplied is escaped before going into HTML.
  const f = {
    firstName: escapeHtml(formData.firstName),
    lastName: escapeHtml(formData.lastName),
    email: escapeHtml(formData.email),
    phone: escapeHtml(formData.phone || "-"),
    legalMatter: escapeHtml(formData.legalMatter),
    message: escapeHtml(formData.message).replace(/\n/g, "<br>"),
  }
  const submitted = new Date().toLocaleString("en-NG", { timeZone: "Africa/Lagos" })

  const firmEmailHtml = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fbbf24; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">New Consultation Request</h2>
      <p><strong>Client Name:</strong> ${f.firstName} ${f.lastName}</p>
      <p><strong>Email:</strong> ${f.email}</p>
      <p><strong>Phone:</strong> ${f.phone}</p>
      <p><strong>Practice Area:</strong> ${f.legalMatter}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <h3 style="color: #000;">Client Message:</h3>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #fbbf24;">${f.message}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">Submission received on ${submitted}</p>
    </div>
  `

  // Confirmation deliberately contains NO user-written text, so the form
  // can't be abused to relay spam to third-party inboxes.
  const clientEmailHtml = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fbbf24;">Cortland Partners</h2>
      <p>Hello,</p>
      <p>Thank you for reaching out to Cortland Partners. We have received your consultation request regarding <strong>${f.legalMatter}</strong>.</p>
      <p>Our legal team will review your inquiry and contact you within <strong>24 hours</strong>.</p>
      <p>For urgent matters, please call us at:</p>
      <p style="font-size: 18px; color: #fbbf24; font-weight: bold;">+234 814 794 0885</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        <strong>Cortland Partners</strong><br>
        75 Iwaya Road, Onike<br>
        Yaba, Lagos, Nigeria<br>
        Email: info@cortlandpartnersng.com
      </p>
      <p style="font-size: 11px; color: #999;">If you did not submit this request, you can safely ignore this email.</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: smtpFromEmail,
      to: firmEmail,
      replyTo: formData.email,
      subject: `New Consultation Request: ${formData.legalMatter}`,
      html: firmEmailHtml,
    })
  } catch (error) {
    console.error("Error sending firm email:", error)
  }

  try {
    await transporter.sendMail({
      from: smtpFromEmail,
      to: formData.email,
      subject: "Consultation Request Received - Cortland Partners",
      html: clientEmailHtml,
    })
  } catch (error) {
    console.error("Error sending client confirmation email:", error)
  }
}
