import { CheckCircle, Award, Users, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Cortland Partners NG | Professional Law Firm Lagos",
  description:
    "Learn about Cortland Partners NG, a full-service law firm in Lagos with 15+ legal professionals. We specialize in corporate law, litigation, and real estate legal services.",
  keywords: ["about law firm", "Cortland Partners", "legal firm Lagos", "corporate lawyers Nigeria"],
  openGraph: {
    title: "About Cortland Partners NG | Professional Law Firm Lagos",
    description:
      "Learn about Cortland Partners NG, a full-service law firm in Lagos with 15+ legal professionals. We specialize in corporate law, litigation, and real estate legal services.",
    type: "website",
  },
}

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Delivering Excellence",
      description: "High-quality, result-oriented services tailored to your unique legal needs",
    },
    {
      icon: Users,
      title: "Constant Communication",
      description: "Regular updates and transparent dialogue on all matters",
    },
    {
      icon: CheckCircle,
      title: "Ethical Standards",
      description: "Transparent billing practices with no hidden fees and strict anti-corruption policies",
    },
    {
      icon: Heart,
      title: "Pro Bono Commitment",
      description: "Significant pro bono work and free legal advice to underserved communities",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">About Cortland Partners NG – Law Firm in Lagos, Nigeria</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Cortland Partners NG is a professional full-service law firm based in Lagos, Nigeria, dedicated to providing exceptional legal services to Nigeria's leading organizations, corporations, and individuals. With 15+ experienced legal professionals, we specialize in corporate law, real estate, litigation, and business advisory.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-light mb-8">Who We Are</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Cortland Partners is comprised of dynamic and highly skilled legal professionals dedicated to
                  providing exceptional, reliable, and comprehensive legal services. Headquartered in Yaba, Lagos, we
                  have a network of over 15 seasoned legal practitioners across Nigeria and the United Kingdom.
                </p>
                <p>
                  We are privileged to act as external solicitors to several corporate and financial clients, including
                  leading commercial banks, where we routinely advise on debt recovery, regulatory compliance, and
                  dispute resolution.
                </p>
                <p>
                  Our expertise spans civil and criminal litigation, corporate advisory, financial services regulation,
                  estate administration, real estate transactions, and international law matters.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <img
                src="/images/nigerian-20legal-20practice.jpg"
                alt="Legal Practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
                >
                  <Icon size={32} className="text-accent mb-4" />
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-12">Why Choose Cortland Partners NG?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-muted/30 border border-border rounded-lg">
              <h3 className="text-xl font-light mb-4">Experience & Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes seasoned lawyers with deep expertise in corporate law, real estate, litigation, and regulatory compliance. We serve Nigeria's leading corporations and financial institutions.
              </p>
            </div>
            <div className="p-8 bg-muted/30 border border-border rounded-lg">
              <h3 className="text-xl font-light mb-4">Client-Focused Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We listen carefully to understand your needs and provide tailored legal solutions. Regular communication and transparency are at the core of how we work with our clients.
              </p>
            </div>
            <div className="p-8 bg-muted/30 border border-border rounded-lg">
              <h3 className="text-xl font-light mb-4">Results-Driven Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering practical, strategic legal advice that protects your interests and achieves your goals. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Ready to work with experienced lawyers in Lagos?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact Cortland Partners NG today for a free consultation. We'll discuss your legal needs and how we can help achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
