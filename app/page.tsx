"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const services = [
    "Litigation & Dispute Resolution",
    "Corporate & Commercial Law",
    "Financial Services Regulation",
    "Real Estate & Property Law",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">
                Premier Legal Services for Nigeria's Leading Organizations
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cortland Partners is a leading law firm comprised of dynamic and highly skilled legal professionals.
                Headquartered in Yaba, Lagos, with a network of over 15 seasoned legal practitioners across Nigeria and
                the United Kingdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
                >
                  Schedule Consultation <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href="tel:+234814794885"
                  className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-sm hover:bg-muted transition-colors"
                >
                  +234 814 794 0885
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg overflow-hidden">
                <img
                  src="/images/nigerian-20legal-20practice.jpg"
                  alt="Nigerian Supreme Court"
                  className="w-full h-full object-cover rounded-lg border-2 border-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              We offer comprehensive legal services across key practice areas to serve your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">{service}</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert guidance on {service.toLowerCase()} matters with proven track record.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all font-medium"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-balance">Ready to discuss your legal needs?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact Cortland Partners today for a free consultation with one of our experienced attorneys.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
