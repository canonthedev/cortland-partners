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
    "Litigation",
    "Corporate & Commercial Law",
    "Property & Real Estate",
    "Financial Services Regulation",
    "Estate Administration",
    "Intellectual Property",
    "Family Law",
    "Employment Law",
    "Insolvency & Debt Recovery",
    "Maritime & Shipping Law",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">
                Law Firm in Lagos, Trusted Legal Services for Corporate and Property Law
              </h1>
              <p className="text-lg text-muted-foreground mb-2 font-medium">A full-service Nigerian law firm providing corporate, property, regulatory, and dispute resolution services.</p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Cortland Partners is a full-service law firm headquartered in Lagos, Nigeria, providing strategic legal solutions across corporate, property, regulatory, and dispute resolution matters.
              </p>
              <div className="mb-6 p-6 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm font-medium mb-3">Why Trust Us</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✔ Experienced Team of 15+ legal professionals</li>
                  <li>✔ Expertise in corporate law, real estate and litigation</li>
                  <li>✔ Cross border transaction experience</li>
                  <li>✔ Trusted by Nigeria's Leading Corporations and Financial Institutions</li>
                  <li>✔ Free Initial Legal Consultation</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <a
                  href="tel:+2348147940885"
                  className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-sm hover:bg-muted transition-colors"
                >
                  Contact us (2348147940885)
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

      {/* WHO WE ARE Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            Cortland Partners is a full-service law firm headquartered in Lagos, Nigeria, providing strategic legal solutions across corporate, property, regulatory, and dispute resolution matters.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all font-medium"
          >
            Read More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-4">Our Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              We offer comprehensive legal services across key practice areas to serve your unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 p-6 bg-background rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium mb-1 text-sm">{service}</h3>
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

      {/* MEET THE TEAM Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-8">Meet the Team</h2>
          <div className="bg-background border border-border rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-light mb-3">Ibitayo Akinkuolie - Partner</h3>
            <h4 className="text-accent font-medium text-sm mb-4">Profile</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ibitayo is a commercially astute lawyer with a strong focus on foreign investment, corporate advisory, and market entry strategy. He advises multinational corporations, investors, and high-growth businesses on establishing and structuring operations in Nigeria and across Africa, with particular emphasis on regulatory compliance, risk management, and commercial efficiency.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all font-medium"
            >
              Read more <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SECTOR EXPERTISE Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-8">Our Sector Expertise</h2>
          <ul className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Advised on a USD 3 million foreign investment into Nigeria's real estate sector.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Advised on acquisition of a Ghanaian cocoa licensing company valued at GHS 1.5 million.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <span>Represented financial institutions in debt recovery and security enforcement matters.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6 text-balance">Need expert legal guidance in Lagos?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Cortland Partners NG offers a free initial consultation with experienced attorneys. We'll discuss your legal needs and provide professional advice tailored to your situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
