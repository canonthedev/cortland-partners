"use server"

import nodemailer from "nodemailer"

export async function submitConsultation(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  legalMatter: string
  message: string
}) {
  try {
    // Send emails via Nodemailer
    await sendConsultationEmails(formData)

    return {
      success: true,
      message: "Consultation request submitted successfully! We will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("[v0] Consultation submission error:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}

async function sendConsultationEmails(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  legalMatter: string
  message: string
}) {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number.parseInt(process.env.SMTP_PORT || "465")
  const smtpSecure = process.env.SMTP_SECURE === "true"
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpFromEmail = process.env.SMTP_FROM_EMAIL
  const cortlandEmail = process.env.CORTLAND_EMAIL

  console.log("[v0] SMTP Config Check:", {
    hasHost: !!smtpHost,
    hasPort: !!smtpPort,
    hasUser: !!smtpUser,
    hasPass: !!smtpPass,
    hasFromEmail: !!smtpFromEmail,
  })

  // If SMTP credentials are not configured, log and return gracefully
  if (!smtpHost || !smtpUser || !smtpPass || !smtpFromEmail) {
    console.warn(
      "[v0] SMTP not configured. Consultation saved but emails not sent. Please configure: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL",
    )
    return
  }

  if (process.env.NODE_ENV !== "production") {
    console.log("[v0] Skipping email in preview environment. Emails will be sent when deployed to Vercel.")
    return
  }

  const firmEmail = cortlandEmail || smtpFromEmail

  let transporter
  try {
    transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
    console.log("[v0] Nodemailer transporter created successfully")
  } catch (error) {
    console.error("[v0] Failed to create Nodemailer transporter:", error)
    return
  }

  const firmEmailHtml = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fbbf24; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
        New Consultation Request
      </h2>
      <p><strong>Client Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Practice Area:</strong> ${formData.legalMatter}</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <h3 style="color: #000;">Client Message:</h3>
      <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #fbbf24;">
        ${formData.message.replace(/\n/g, "<br>")}
      </p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        Submission received on ${new Date().toLocaleString()}
      </p>
    </div>
  `

  const clientEmailHtml = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #fbbf24;">Cortland Partners</h2>
      <p>Dear ${formData.firstName},</p>
      <p>Thank you for reaching out to Cortland Partners. We have received your consultation request and appreciate the opportunity to assist you.</p>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #000;">Request Details:</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Practice Area:</strong> ${formData.legalMatter}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      </div>

      <p>Our legal team will review your inquiry carefully and contact you within <strong>24 hours</strong> to discuss your matter and schedule a consultation.</p>
      
      <p>If you have any urgent matters or need to reach us sooner, please call us at:</p>
      <p style="font-size: 18px; color: #fbbf24; font-weight: bold;">+234 814 794 0885</p>

      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
      <p style="font-size: 12px; color: #666;">
        <strong>Cortland Partners</strong><br>
        17, Ishola Street, Off Herbert Macaulay way<br>
        Yaba, Lagos, Nigeria<br>
        Email: info@cortlandpartnersng.com
      </p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: smtpFromEmail,
      to: firmEmail,
      subject: `New Consultation Request from ${formData.firstName} ${formData.lastName}`,
      html: firmEmailHtml,
    })
    console.log("[v0] Firm email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending firm email:", error)
  }

  try {
    await transporter.sendMail({
      from: smtpFromEmail,
      to: formData.email,
      subject: "Consultation Request Received - Cortland Partners",
      html: clientEmailHtml,
    })
    console.log("[v0] Client confirmation email sent successfully")
  } catch (error) {
    console.error("[v0] Error sending client confirmation email:", error)
  }
}
