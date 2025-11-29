"use server"

import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

interface ConsultationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  legalMatter: string
  message: string
}

async function sendEmail(to: string, subject: string, html: string) {
  const mailgunApiKey = process.env.MAILGUN_API_KEY
  const mailgunDomain = process.env.MAILGUN_DOMAIN
  const fromEmail = process.env.MAILGUN_FROM_EMAIL || "noreply@cortlandpartners.com"

  if (!mailgunApiKey || !mailgunDomain) {
    console.error("[v0] Mailgun configuration missing")
    return false
  }

  try {
    const response = await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${mailgunApiKey}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        from: fromEmail,
        to,
        subject,
        html,
      }).toString(),
    })

    return response.ok
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return false
  }
}

export async function submitConsultation(data: ConsultationData) {
  try {
    // Insert into database
    const result = await sql(
      `INSERT INTO consultations (first_name, last_name, email, phone, legal_matter, message, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING id`,
      [data.firstName, data.lastName, data.email, data.phone, data.legalMatter, data.message],
    )

    // Send confirmation email to client
    const clientEmailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank You for Your Inquiry</h2>
          <p>Dear ${data.firstName},</p>
          <p>We have received your consultation request and will get back to you within 24 hours.</p>
          <h3>Your Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Legal Matter:</strong> ${data.legalMatter}</li>
          </ul>
          <p>Best regards,<br>Cortland Partners Legal Team</p>
        </body>
      </html>
    `

    await sendEmail(data.email, "Consultation Request Received - Cortland Partners", clientEmailHtml)

    // Send notification to firm
    const firmEmailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Consultation Request</h2>
          <h3>Client Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Legal Matter:</strong> ${data.legalMatter}</li>
          </ul>
          <h3>Message:</h3>
          <p>${data.message}</p>
        </body>
      </html>
    `

    const firmEmail = process.env.CORTLAND_EMAIL || "info@cortlandpartnersng.com"
    await sendEmail(firmEmail, "New Consultation Request", firmEmailHtml)

    return {
      success: true,
      message: "Your consultation request has been submitted. We will contact you shortly!",
    }
  } catch (error) {
    console.error("[v0] Consultation submission error:", error)
    return {
      success: false,
      error: "Failed to submit consultation request",
    }
  }
}
