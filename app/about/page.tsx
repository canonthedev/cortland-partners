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
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-sm font-semibold text-primary">Full-Service Law Firm</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
            About <span className="text-primary">Cortland Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A full-service law firm in Lagos with 15+ experienced legal professionals specializing in corporate law, real estate, litigation, and business advisory.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Cortland Partners is an emerging full service law firm with its headquarters in Lagos State, Nigeria, comprising over fifteen (15) seasoned lawyers with in-depth knowledge spanning across diverse legal disciplines. The firm was established to address demanding and sophisticated legal requirements across sectors.
                </p>
                <p>
                  Our identity is defined by a commitment to structural rigor, where legal advisory is treated as a critical component of a client's commercial infrastructure. We prioritize the mitigation of long-term risk through meticulous drafting and a deep-seated mastery of the procedural frameworks.
                </p>
                <p>
                  We maintain a high-pressure work environment designed to ensure that every brief is handled with a sense of urgency and analytical depth. At Cortland Partners, we act as strategic partners dedicated to the fortification of our clients' assets.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative h-96 rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <img
                  src="/images/nigerian-20legal-20practice.jpg"
                  alt="Legal Practice"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-foreground">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-foreground">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Experience & Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team includes seasoned lawyers with deep expertise in corporate law, real estate, litigation, and regulatory compliance. We serve Nigeria's leading corporations.
              </p>
            </div>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Client-Focused Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We listen carefully to understand your needs and provide tailored legal solutions. Regular communication and transparency are core to our practice.
              </p>
            </div>
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">Results-Driven Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering practical, strategic legal advice that protects your interests and achieves your goals. Your success is ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contact Cortland Partners NG today for a free consultation. We'll discuss your legal needs and how we can help achieve your goals.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
