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
      <section className="pt-28 pb-32 px-6 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/40 rounded-full">
                  <p className="text-sm font-bold text-primary tracking-wide">EXPERT LEGAL SERVICES</p>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
                  Legal Excellence. <span className="text-primary">African Standard.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
                  Strategic legal guidance for corporate, property, regulatory and dispute resolution matters across Nigeria and Africa. At Cortland Partners, we set the standard for excellence.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
                    <p className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">15+</p>
                    <p className="text-sm text-muted-foreground">Legal Professionals</p>
                  </div>
                  <div className="p-4 border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
                    <p className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">100+</p>
                    <p className="text-sm text-muted-foreground">Client Matters</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-black font-bold rounded hover:shadow-2xl transition-all duration-300 transform hover:scale-105 tracking-wide"
                >
                  SCHEDULE CONSULTATION
                </Link>
                <a
                  href="tel:+2348147940885"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary text-primary font-bold rounded hover:bg-primary/10 transition-all duration-300 tracking-wide"
                >
                  CALL NOW
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-primary/50 to-transparent rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-secondary to-background rounded-lg overflow-hidden border border-primary/50 hover:border-primary transition-all duration-300">
                <img
                  src="/images/hero-luxury.png"
                  alt="Luxury law firm office"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-24 px-6 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed font-light">
              Cortland Partners is a full-service law firm headquartered in Lagos, Nigeria, providing strategic legal solutions across corporate, property, regulatory, and dispute resolution matters. We combine meticulous attention to detail with innovative thinking.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all font-bold text-lg hover:text-primary/80 group tracking-wide"
          >
            LEARN MORE <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Our Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl font-light">
              Comprehensive legal solutions across core practice areas designed to solve your most complex business challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="group p-6 bg-background rounded border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded group-hover:bg-primary/30 transition-colors duration-300">
                    <CheckCircle size={20} className="text-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">{service}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all font-bold text-lg hover:text-primary/80 group tracking-wide"
            >
              VIEW ALL SERVICES <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM Section */}
      <section className="py-24 px-6 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Meet the Team</h2>
          <div className="bg-background border border-primary/30 rounded p-8 hover:border-primary hover:shadow-2xl transition-all duration-300">
            <div className="space-y-4 mb-6">
              <h3 className="text-2xl font-bold text-foreground">Ibitayo Akinkuolie</h3>
              <div className="inline-block px-4 py-1.5 bg-primary/20 rounded">
                <p className="text-sm font-bold text-primary tracking-wide">PARTNER</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              Ibitayo is a commercially astute lawyer with a strong focus on foreign investment, corporate advisory, and market entry strategy. He advises multinational corporations, investors, and high-growth businesses on establishing and structuring operations in Nigeria and across Africa, with particular emphasis on regulatory compliance, risk management, and commercial efficiency.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all font-bold hover:text-primary/80 group tracking-wide"
            >
              VIEW FULL TEAM <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SECTOR EXPERTISE Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Notable Transactions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-secondary border border-primary/30 rounded hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-light">USD 3M investment advisory for real estate sector in Nigeria</p>
            </div>
            <div className="p-8 bg-secondary border border-primary/30 rounded hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-light">Cross-border acquisition of GHS 1.5M Ghanaian cocoa licensing company</p>
            </div>
            <div className="p-8 bg-secondary border border-primary/30 rounded hover:border-primary hover:shadow-xl transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-light">Financial institution representation in debt recovery matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-secondary border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Get expert legal guidance with a free consultation. Our experienced attorneys will discuss your needs and provide tailored strategic advice tailored to your situation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
          >
            SCHEDULE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  )
}
