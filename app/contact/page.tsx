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
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-sm font-semibold text-primary">Let&apos;s Connect</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Have a legal question? We're here to help. Contact us directly or fill out the form below and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-foreground">Contact Information</h2>
                <div className="space-y-6">
                  <a href="tel:+234814794885" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">Phone</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">+234 814 794 0885</p>
                    </div>
                  </a>
                  <a href="mailto:info@cortlandpartnersng.com" className="flex items-center gap-4 group p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">Email</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">info@cortlandpartnersng.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1 font-medium">Address</p>
                      <p className="font-semibold text-foreground">75 Iwaya Road, Onike, Yaba, Lagos State</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0165159859223!2d3.3646!3d6.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9d5e5e5e5e5f%3A0x5d5d5d5d5d5d5d5d!2s75%20Iwaya%20Road%2C%20Onike%2C%20Yaba%2C%20Lagos%20State!5e0!3m2!1sen!2sng!4v1700000000000"
                  width="100%"
                  height="400"
                  className="rounded-xl border border-border hover:border-primary/40 transition-all duration-300"
                  style={{ border: "1px solid hsl(var(--border))" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Consultation Form */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">We're Here for You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Office Hours</h3>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Monday - Friday: 9 AM - 5 PM
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                  Saturday - Sunday: Closed
                </li>
              </ul>
            </div>
            <div className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Quick Response</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                We aim to respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            <div className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Free Consultation</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Your first consultation is completely free. Let&apos;s discuss your legal needs today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
