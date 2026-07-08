import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Team | Experienced Lawyers in Lagos | Cortland Partners NG",
  description:
    "Meet the experienced legal professionals at Cortland Partners NG. Our team includes expert attorneys in corporate law, litigation, and business advisory.",
  keywords: ["lawyers Lagos", "legal professionals Nigeria", "experienced attorneys", "law firm team"],
  alternates: {
    canonical: "https://www.cortlandpartnersng.com/team",
  },
  openGraph: {
    title: "Our Team | Experienced Lawyers in Lagos | Cortland Partners NG",
    description:
      "Meet the experienced legal professionals at Cortland Partners NG. Our team includes expert attorneys in corporate law, litigation, and business advisory.",
    type: "website",
    url: "https://www.cortlandpartnersng.com/team",
  },
}

export default function Team() {
  const team = [
    {
      name: "Ibitayo Akinkuolie",
      role: "Partner",
      bio: "Ibitayo is a commercially astute lawyer with a strong focus on foreign investment, corporate advisory, and market entry strategy. He advises multinational corporations, investors, and high-growth businesses on establishing and structuring operations in Nigeria and across Africa, with particular emphasis on regulatory compliance, risk management, and commercial efficiency. He holds an LL.B. (Second Class Upper) from the University of Lagos and was called to the Nigerian Bar upon completion of the Nigerian Law School, Abuja.\n\nHis practice spans cross-border transactions across Africa, with a client base that includes businesses and investors from Ghana, Côte d'Ivoire, Gabon, and other key jurisdictions. He has extensive experience advising on company formation, corporate governance, and complex commercial contracting, as well as navigating the legal and regulatory frameworks applicable to inbound investments.\n\nIn addition to his advisory work, Ibitayo has significant litigation and dispute resolution experience, representing clients in commercial disputes, regulatory enforcement actions, and debt recovery matters before Nigerian courts. He has acted for financial institutions, corporate entities, and private clients in high-stakes disputes, skilled in developing litigation strategy, managing contentious proceedings, and achieving commercially viable outcomes.\n\nNotable Deals & Representations:\n• Advised on acquisition of a Ghanaian cocoa licensing company valued at GHS 1.5 million, including transaction structuring, due diligence support, and cross-border regulatory considerations.\n• Acted for a foreign investor in connection with a USD 3 million investment into Nigeria's real estate sector, providing end-to-end advisory on market entry, regulatory compliance, corporate structuring, and transactional documentation.\n• Represented financial institutions and corporate clients in debt recovery and commercial litigation matters, including enforcement of security interests and recovery of non-performing loans.\n• Acted in regulatory and compliance-related disputes, advising and representing clients in engagements with regulators.",
      image: "/images/ibitayo.jpg",
    },
    {
      name: "Rachael E. Michael",
      role: "Senior Associate",
      bio: "Rachael E. Michael is a Senior Associate at the Firm with about six (6) years legal experience across diverse fields.",
      image: "/images/rachel.png",
    },
    {
      name: "Adeyinka Binuyo",
      role: "Partner",
      bio: "Adeyinka has over a decade of experience in corporate law, dispute resolution, and regulatory compliance. He holds an LL.M. in International Commercial Law and an LL.B. from the University of Northampton, graduating with Second Class Upper Division Honors. He also holds a degree in Politics and International Relations from Lead City University, Ibadan.\n\nAdeyinka was called to the Nigerian Bar after completing the Nigerian Law School, Abuja. With experience at BA Law LLP and Kunle Fagbohunka & Co., he has successfully handled complex corporate matters, including commercial transactions, litigation, and regulatory compliance. He has worked extensively with businesses facing enforcement actions and has a strong track record of successfully negotiating settlements to reduce penalties.\n\nAdeyinka's ability to manage complex negotiations with regulatory bodies has earned him a reputation for delivering results while preserving client relationships.",
      image: "/images/adeyinka.png",
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
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  {member.bio.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
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
