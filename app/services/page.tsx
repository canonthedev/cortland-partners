import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Services | Corporate Law, Litigation, Real Estate | Cortland Partners NG",
  description:
    "Professional legal services including corporate law, litigation, property law, estate administration, and more. Trusted by Nigeria's leading corporations.",
  keywords: ["legal services Lagos", "corporate law Nigeria", "litigation services", "real estate law", "estate administration"],
  openGraph: {
    title: "Legal Services | Corporate Law, Litigation, Real Estate | Cortland Partners NG",
    description:
      "Professional legal services including corporate law, litigation, property law, estate administration, and more. Trusted by Nigeria's leading corporations.",
    type: "website",
  },
}

export default function Services() {
  const services = [
    {
      name: "Litigation (Civil & Criminal)",
      description: "Comprehensive representation in disputes at all levels of court with proven courtroom expertise.",
    },
    {
      name: "Corporate & Commercial Law",
      description: "Advisory services for business transactions, corporate governance, and strategic planning.",
    },
    {
      name: "Financial Services Regulation",
      description: "Compliance and regulatory matters for financial institutions and regulated entities.",
    },
    {
      name: "Estate Administration & Probate",
      description: "Efficient management and distribution of estates with careful attention to detail.",
    },
    {
      name: "Legal Advisory Services",
      description: "Tailored legal advice across sectors and industries based on deep expertise.",
    },
    {
      name: "Property & Real Estate Law",
      description: "Handling complex transactions and disputes in the real estate sector.",
    },
    {
      name: "Arbitration & Alternative Dispute Resolution",
      description: "Expertise in resolving disputes through arbitration, mediation, and negotiation.",
    },
    {
      name: "Intellectual Property Law",
      description: "Protection of trademarks, copyrights, patents, and other IP assets.",
    },
    {
      name: "Family Law",
      description: "Representation in divorce, custody, inheritance, and family matters.",
    },
    {
      name: "Employment Law",
      description: "Advisory on labor-related issues for both employers and employees.",
    },
    {
      name: "Insolvency & Debt Recovery",
      description: "Recovery of debts and strategic advising on insolvency matters.",
    },
    {
      name: "Maritime & Shipping Law",
      description: "Handling admiralty claims and disputes in the maritime sector.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Legal Services in Lagos – Corporate Law, Real Estate & Litigation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Cortland Partners NG provides comprehensive legal services across corporate law, real estate, litigation, and business advisory. Our experienced lawyers in Lagos serve individual clients, corporations, and financial institutions with tailored legal solutions.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-6">Expert Legal Solutions Across Multiple Practice Areas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            At Cortland Partners NG, we understand that every client's legal needs are unique. Whether you're facing a complex corporate transaction, property dispute, or need litigation support, our team of skilled attorneys brings years of experience and proven expertise. We're committed to providing practical, strategic legal advice that protects your interests and achieves your goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-muted/30 border border-border rounded-lg hover:border-accent/50 transition-colors group"
              >
                <h3 className="text-xl font-light mb-3 group-hover:text-accent transition-colors">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Which service is right for you?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every legal matter is unique. Our experienced attorneys at Cortland Partners NG will work with you to understand your situation and provide tailored legal advice. Contact us today for a free initial consultation with one of our lawyers in Lagos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Schedule Your Free Consultation <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
