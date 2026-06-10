import { CheckCircle, Award, Users, Heart } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Cortland Partners NG | Professional Law Firm Lagos",
  description:
    "Learn about Cortland Partners NG, a full-service law firm in Lagos with 15+ legal professionals. We specialize in corporate law, litigation, and real estate legal services.",
  keywords: ["about law firm", "Cortland Partners", "legal firm Lagos", "corporate lawyers Nigeria"],
  alternates: {
    canonical: "https://www.cortlandpartnersng.com/about",
  },
  openGraph: {
    title: "About Cortland Partners NG | Professional Law Firm Lagos",
    description:
      "Learn about Cortland Partners NG, a full-service law firm in Lagos with 15+ legal professionals. We specialize in corporate law, litigation, and real estate legal services.",
    type: "website",
    url: "https://www.cortlandpartnersng.com/about",
  },
}

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Delivering Excellence",
      description: "At Cortland Partners we pride ourselves with a culture for excellence, exhibited by our rigorous vetting and review protocol. Each legal brief entrusted to us undergoes a multi-tiered diagnostic process, ensuring flawless results and accuracy.",
    },
    {
      icon: Users,
      title: "Constant Communication",
      description: "At the firm, communication is the cornerstone of our legal practice. We effectively bridge information gaps through regular status update letters, strategic meetings and detailed progress reports at every stage.",
    },
    {
      icon: CheckCircle,
      title: "Ethical Standards",
      description: "Our firm operates under a rigorous framework of professional integrity, ensuring that every brief is conducted with the highest level of transparency and fidelity to the law. We prioritize the avoidance of conflicts of interest and maintain strict confidentiality protocols.",
    },
    {
      icon: Heart,
      title: "Pro Bono Commitment",
      description: "Our commitment to the public good is a core pillar of our corporate identity. We maintain an active pro bono department dedicated to providing high-quality legal representation to indigent individuals and underserved communities.",
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
                  Cortland Partners is an emerging full service law firm with its headquarters in Lagos State, Nigeria, comprising over fifteen (15) seasoned lawyers with in-depth knowledge spanning across diverse legal disciplines. The firm was established to address demanding and sophisticated legal requirements across sectors. We operate with a focus on delivering precise, statutory-led solutions across diverse fields spanning real estate, secured credit transactions, litigation, finance and corporate regulatory compliance, amongst others.
                </p>
                <p>
                  Our identity is defined by a commitment to structural rigor, where legal advisory is treated as a critical component of a client's commercial infrastructure. We prioritize the mitigation of long-term risk through meticulous drafting and a deep-seated mastery of the procedural frameworks, laws and governing regulatory bodies.
                </p>
                <p>
                  The firm's operational philosophy is centered on the pursuit of technical excellence and a rejection of professional stagnation. We maintain a high-pressure work environment designed to ensure that every brief is handled with a sense of urgency and analytical depth. At Cortland Partners, we act as strategic partners dedicated to the fortification of our clients' assets and the seamless navigation of complex jurisdictional requirements.
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
