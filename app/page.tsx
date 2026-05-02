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
                Law Firm in Lagos – Trusted Legal Services for Corporate & Property Law
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Cortland Partners NG is a leading full-service law firm in Lagos, Nigeria, comprised of dynamic and highly skilled legal professionals. Headquartered in Yaba, Lagos, we have a network of over 15 seasoned legal practitioners across Nigeria and the United Kingdom, delivering expert guidance on corporate law, litigation, property law, and comprehensive business advisory services.
              </p>
              <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm font-medium mb-2">Why Choose Cortland Partners NG?</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ 15+ experienced legal professionals</li>
                  <li>✓ Expertise in corporate law, real estate, and litigation</li>
                  <li>✓ Trusted by Nigeria's leading corporations and financial institutions</li>
                  <li>✓ Free initial legal consultation</li>
                </ul>
              </div>
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

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-8">Professional Law Firm in Lagos, Nigeria</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cortland Partners NG is a professional law firm dedicated to providing exceptional legal services across Nigeria. Based in Lagos, we specialize in corporate law, real estate legal services, litigation, and comprehensive business advisory. Our team of experienced lawyers works with Nigeria's leading corporations, financial institutions, and individuals to navigate complex legal matters.
              </p>
              <p>
                We are privileged to act as external solicitors to several corporate and financial clients, including leading commercial banks, where we routinely advise on debt recovery, regulatory compliance, and dispute resolution. Our expertise spans civil and criminal litigation, corporate advisory, financial services regulation, estate administration, real estate transactions, and international law matters.
              </p>
              <p>
                Whether you need legal support for corporate transactions, property disputes, litigation, or business advisory, Cortland Partners NG provides reliable, ethical, and result-driven legal guidance. We pride ourselves on transparent communication, ethical standards, and delivering exceptional outcomes for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6">Our Key Practice Areas</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Corporate & Commercial Law</p>
                    <p className="text-sm text-muted-foreground">Business advisory, contracts, and corporate governance</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Real Estate & Property Law</p>
                    <p className="text-sm text-muted-foreground">Property transactions and real estate disputes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Litigation & Dispute Resolution</p>
                    <p className="text-sm text-muted-foreground">Civil and criminal litigation, arbitration, mediation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Financial Services Regulation</p>
                    <p className="text-sm text-muted-foreground">Compliance and regulatory advisory for financial institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
