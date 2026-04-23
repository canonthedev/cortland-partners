import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Ibitayo Akinkuolie",
      role: "Partner",
      bio: "Commercially astute legal practitioner with extensive experience in litigation, banking, and financial services. Strategic thinker with proven courtroom expertise and solution-driven approach.",
      image: "/images/ibitayo.jpg",
    },
    {
      name: "Rachel Michael",
      role: "Associate",
      bio: "Expert in corporate law, contract negotiations, and business advisory. Brings deep knowledge in commercial transactions and regulatory compliance matters.",
      image: "/images/rachel.png",
    },
    {
      name: "Morayo Ogunba",
      role: "Secretary",
      bio: "Efficient administrative professional ensuring smooth operations and excellent client service. Maintains highest standards of confidentiality and professionalism.",
      image: "/images/morayo.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance">Our Team</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Highly motivated and client-focused professionals with deep expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="w-full h-80 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 overflow-hidden border border-border/50">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-light mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-accent font-light text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Meet with our team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation with one of our experienced attorneys today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-black font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            Schedule Consultation <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
