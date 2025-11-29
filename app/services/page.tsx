import { ArrowRight } from "lucide-react"
import Link from "next/link"

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
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Comprehensive legal services across multiple practice areas, tailored to meet your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 border-t border-border">
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Need legal assistance?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss which service best suits your legal needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Get in Touch <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
