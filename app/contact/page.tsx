"use client"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import ConsultationForm from "@/components/consultation-form"

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have a legal question or need assistance? We're here to help. Contact us directly or fill out the form
            below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light mb-12">Contact Information</h2>
              <div className="space-y-8">
                <a href="tel:+234814794885" className="flex items-center gap-4 group">
                  <Phone size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-light group-hover:text-accent transition-colors">+234 814 794 0885</p>
                  </div>
                </a>
                <a href="mailto:info@cortlandpartnersng.com" className="flex items-center gap-4 group">
                  <Mail size={24} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-light group-hover:text-accent transition-colors">info@cortlandpartnersng.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="font-light">17 Ishola Street, Off Herbert Macaulay Way, Yaba, Lagos</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-lg font-light mb-4">Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.665694614949!2d3.3629480753805337!3d6.605171093394373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9cdc519a0001%3A0x5d5d5d5d5d5d5d5d!2s17%20Ishola%20St%2C%20Yaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="350"
                  className="rounded-lg border border-border"
                  style={{ border: "1px solid hsl(var(--border))" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Consultation Form */}
            <div>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border rounded-lg">
              <h3 className="text-lg font-light mb-4">Office Hours</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Monday - Friday: 9 AM - 6 PM</li>
                <li>Saturday: 10 AM - 3 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="p-8 bg-background border border-border rounded-lg">
              <h3 className="text-lg font-light mb-4">Quick Response</h3>
              <p className="text-sm text-muted-foreground">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            <div className="p-8 bg-background border border-border rounded-lg">
              <h3 className="text-lg font-light mb-4">Consultation</h3>
              <p className="text-sm text-muted-foreground">
                Your first consultation is free. Let's discuss your legal needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
