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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-08%20at%2010.24.13-ihXz9IjdTWcX16PjmtFoVwdGBYuJEx.jpeg",
    },
    {
      name: "Oluwatomilade Adegunju",
      role: "Associate",
      bio: "Oluwatomilade is a newly called Nigerian lawyer whose experience spans corporate and commercial transactions, dispute resolution, legal research, regulatory compliance, and policy development. Through internships and practical legal training, she has developed a strong foundation in providing legal support across both transactional and contentious matters while working with leading law firms and the courts.\n\nBeyond her legal practice experience, Oluwatomilade has demonstrated strong leadership and advocacy through national and international extracurricular engagements. She was a member of the winning team at the 2024 Philip C. Jessup International Law Moot Court Competition (Nigerian National Rounds), where she strengthened her legal research, written advocacy, and oral advocacy skills. She has also served in leadership roles at the Lagos Model United Nations, including Chair of the International Labour Organization Committee and Vice Chair of the General Assembly Second Committee, where she facilitated committee sessions, guided delegates through complex international policy discussions, and produced comprehensive research materials.\n\nThese experiences have equipped her with strong analytical, drafting, advocacy, and problem-solving skills, as well as the ability to work effectively in collaborative, fast-paced legal environments. She is committed to delivering practical legal solutions while continuing to develop expertise across diverse areas of legal practice.",
      image: "/images/oluwatomilade.jpg",
    },
    {
      name: "Rachael Michael",
      role: "Senior Associate",
      bio: "Rachael is a dedicated legal professional with comprehensive experience in corporate law, transactional matters, and business advisory. She brings strategic thinking and meticulous attention to detail to every matter she handles, ensuring clients receive practical and effective legal solutions.\n\nWith a strong track record of managing complex commercial transactions and regulatory matters, Rachael is committed to delivering excellence across diverse areas of legal practice. Her proactive approach and collaborative working style make her a valuable asset to the Cortland Partners team.",
      image: "/images/rachael-michael.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-sm font-semibold text-primary">Expert Legal Team</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
            Meet the Experts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Highly motivated, client-focused professionals with deep expertise and an unwavering commitment to legal excellence and innovation.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-8 overflow-hidden rounded-2xl border border-border hover:border-primary/40 transition-all duration-300">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
                  <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-lg">
                    <p className="text-sm font-semibold text-primary">{member.role}</p>
                  </div>
                  <div className="text-muted-foreground leading-relaxed space-y-3 pt-2">
                    {member.bio.split('\n').map((paragraph, i) => (
                      paragraph.trim() && <p key={i} className="text-sm">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">15+</p>
              <p className="text-muted-foreground">Experienced Legal Professionals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Successful Legal Matters</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">USD 3M+</p>
              <p className="text-muted-foreground">Transaction Value Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">Ready to Connect?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a consultation with one of our experienced attorneys and discover how we can help with your legal needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Schedule Consultation <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
