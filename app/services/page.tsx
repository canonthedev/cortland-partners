import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Services | Corporate Law, Litigation, Real Estate | Cortland Partners NG",
  description:
    "Professional legal services including corporate law, litigation, property law, estate administration, and more. Trusted by Nigeria's leading corporations.",
  keywords: ["legal services Lagos", "corporate law Nigeria", "litigation services", "real estate law", "estate administration"],
  alternates: {
    canonical: "https://www.cortlandpartnersng.com/services",
  },
  openGraph: {
    title: "Legal Services | Corporate Law, Litigation, Real Estate | Cortland Partners NG",
    description:
      "Professional legal services including corporate law, litigation, property law, estate administration, and more. Trusted by Nigeria's leading corporations.",
    type: "website",
    url: "https://www.cortlandpartnersng.com/services",
  },
}

export default function Services() {
  const services = [
    {
      name: "Litigation",
      description: "Cortland Partners litigation practice is distinguished by its ability to provide legal advocacy with precision and directness. We specialize in navigating substantive law and intricate court procedural rules across jurisdictions to protect the structural and financial interests of our clients. We represent corporate entities, financial institutions, and private investors in a broad spectrum of contentious matters, including complex real estate litigation, enforcement of secured credit instruments, shareholder disputes and breach of contract claims.",
    },
    {
      name: "Corporate & Commercial Law",
      description: "Cortland Partners provides a comprehensive suite of corporate & commercial legal services designed to facilitate the seamless operation of business entities. We act as strategic advisors to diverse clients, offering guidance on company formation, governance, drafting of complex commercial agreements, contracts and memorandum of understanding. Our practice ensures that every transaction is executed with statutory precision and creates a robust legal foundation for our clients.",
    },
    {
      name: "Financial Services Regulation",
      description: "Our firm is at the forefront of the evolving financial technology and banking regulatory space in Nigeria. We assist financial institutions and fintech innovators in navigating licensing requirements set by the Central Bank of Nigeria, including AML compliance, data protection standards, and NOTAP registrations. By offering a proactive approach to regulatory changes, we ensure our clients remain compliant in a high-pressure oversight environment.",
    },
    {
      name: "Estate Administration & Probate",
      description: "We offer a sensitive and disciplined approach to the management of private wealth and the orderly devolution of estates. Our services encompass the entire lifecycle of estate planning, including drafting of testamentary instruments and establishment of family trusts designed to preserve assets across generations. In the administrative phase, we navigate the complexities of the Probate Registry to secure Letters of Administration or Grants of Probate with efficiency.",
    },
    {
      name: "Legal Advisory Services",
      description: "The firm has a legal advisory arm that serves as general counsel for clients requiring strategic guidance on day-to-day operations. We provide legal opinions, predictive analysis on legislative trends and their potential impact on client portfolios. Our advisory work is grounded in exhaustive research and a multi-tiered vetting process, ensuring that every memorandum or risk assessment is properly tested for accuracy.",
    },
    {
      name: "Property & Real Estate Law",
      description: "The firm maintains a premier property practice focused on the engineering of secure land transactions and the perfection of titles. We handle the complexities of property transactions, specializing in the drafting and registration of Deeds of Assignment, Leases, Legal Mortgages amongst others. Our team conducts rigorous due diligence to verify root of title and resolve historical encumbrances, ensuring real estate investments are fortified against future litigation.",
    },
    {
      name: "Arbitration & Alternative Dispute Resolution",
      description: "Our firm recognizes the value of time and commercial confidentiality; our ADR practice offers a sophisticated alternative to litigation. We represent clients in arbitration, mediation, and negotiation proceedings, focusing on swift resolution of commercial disputes without protracted timelines. Our practitioners are skilled in the art of strategic compromise, leveraging technical strengths to reach settlements that protect our clients' interests.",
    },
    {
      name: "Intellectual Property Law",
      description: "The firm safeguards the intangible assets that drive modern commerce, including trademarks, patents, and copyrights. Our IP practice is dedicated to the registration and enforcement of intellectual property rights, ensuring our clients' innovations and brand identities are protected from infringement. We advise on licensing agreements, franchising, and commercialization of creative works.",
    },
    {
      name: "Family Law",
      description: "Our family law practice provides professional and discreet representation in matters involving matrimonial causes, child custody, and maintenance. We approach these high-stakes personal issues with a focus on achieving equitable outcomes through disciplined advocacy and negotiation. We handle complex divorce proceedings involving multi-jurisdictional assets and facilitate adoption processes with legal objectivity.",
    },
    {
      name: "Employment Law",
      description: "Our firm advises employers and executives on the intricate legalities of the workplace. We draft robust employment contracts, manage termination and redundancy procedures, and ensure compliance with the Labour Act and National Industrial Court decisions. We provide guidance on workplace policies, trade union relations, and employee benefits to mitigate risks of industrial action or wrongful dismissal claims.",
    },
    {
      name: "Insolvency & Debt Recovery",
      description: "Our firm's insolvency practice is designed to manage the recovery of distressed assets and restructuring of debt obligations for both creditors and debtors. We utilize aggressive demand strategies and formal insolvency proceedings, including receiverships and liquidations, to maximize recovery. We are experts in enforcement of judgment debts and activation of security interests, ensuring creditors can recover capital with minimal slippage.",
    },
    {
      name: "Maritime & Shipping Law",
      description: "We provide specialized legal support to the maritime sector, navigating the complex regulatory environment of Nigerian admiralty jurisdiction. Our services include advising on ship financing, vessel registration, and resolution of maritime liens and cargo claims. We assist clients in complying with the Cabotage Act and NIMASA regulations, handling collision disputes and drafting charter party agreements.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-sm font-semibold text-primary">Comprehensive Legal Services</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance text-foreground">
            Legal Services That <span className="text-primary">Drive Results</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            From corporate transactions to complex litigation, our experienced lawyers in Lagos deliver practical, strategic legal solutions tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Quick Service Cards */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">Our Practice Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Descriptions */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-16 text-center">Service Details</h2>
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={`detail-${index}`}
                  className="pb-16 border-b border-primary/10 last:border-b-0 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl text-lg">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Let&apos;s Solve Your Legal Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every legal matter is unique. Our experienced attorneys will work with you to understand your situation and provide tailored solutions.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Schedule Free Consultation <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
