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
      <section className="pt-28 pb-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                  <p className="text-sm font-semibold text-primary">Lagos-Based Legal Practice</p>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
                  Legal Excellence. <span className="text-primary">Modern Solutions.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Strategic legal guidance for corporate, property, regulatory and dispute resolution matters across Nigeria and Africa.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                    <p className="text-2xl font-bold text-primary mb-1">15+</p>
                    <p className="text-sm text-muted-foreground">Legal Professionals</p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                    <p className="text-2xl font-bold text-primary mb-1">100+</p>
                    <p className="text-sm text-muted-foreground">Client Matters</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="tel:+2348147940885"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-primary/30 text-foreground font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
                >
                  Call: +234 814 794 0885
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <img
                  src="/images/nigerian-20legal-20practice.jpg"
                  alt="Nigerian legal practice"
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Who We Are</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Cortland Partners is a full-service law firm headquartered in Lagos, Nigeria, providing strategic legal solutions across corporate, property, regulatory, and dispute resolution matters.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all font-semibold text-lg hover:text-primary/80 group"
          >
            Read More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES Section */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive legal services across core practice areas designed to solve your most complex challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="group p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle size={20} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{service}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold text-lg hover:text-primary/80 group"
            >
              View All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM Section */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Meet the Team</h2>
          <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4 mb-6">
              <h3 className="text-2xl font-bold text-foreground">Ibitayo Akinkuolie</h3>
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg">
                <p className="text-sm font-semibold text-primary">Partner</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ibitayo is a commercially astute lawyer with a strong focus on foreign investment, corporate advisory, and market entry strategy. He advises multinational corporations, investors, and high-growth businesses on establishing and structuring operations in Nigeria and across Africa, with particular emphasis on regulatory compliance, risk management, and commercial efficiency.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-3 text-primary hover:gap-5 transition-all font-semibold hover:text-primary/80 group"
            >
              View Full Team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR SECTOR EXPERTISE Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">Sector Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-medium">USD 3M investment advisory for real estate sector in Nigeria</p>
            </div>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-medium">Cross-border acquisition of GHS 1.5M Ghanaian cocoa licensing company</p>
            </div>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <CheckCircle size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-muted-foreground leading-relaxed font-medium">Financial institution representation in debt recovery matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary/5 border-t-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get expert legal guidance with a free consultation. Our experienced attorneys will discuss your needs and provide tailored advice.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
