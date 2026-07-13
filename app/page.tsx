'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Award, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-scales-of-justice.jpg"
            alt="Scales of Justice - Legal Excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight text-foreground">
              Strategic Legal Excellence for Nigeria&apos;s Leading Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Corporate law, Property & Real Estate, Litigation & Dispute Resolution, and Regulatory Services in Lagos
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400 pt-6 border-t border-primary/30">
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span> 15+ Legal Professionals
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span> Lagos-Based
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">●</span> Client-Focused Excellence
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              EXPLORE PRACTICE AREAS
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold hover:bg-primary/10 transition-all duration-300"
            >
              SCHEDULE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-bold text-sm tracking-widest">WHO WE ARE</p>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                  International Standards. Local Expertise.
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cortland Partners is a full-service law firm headquartered in Lagos, Nigeria. We combine international best practices with deep local market knowledge to deliver strategic legal solutions across corporate, property, regulatory, and dispute resolution matters.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Legal Professionals</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Successful Transactions</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground">Practice Areas</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/team-meeting.png"
                alt="Cortland Partners team"
                className="w-full h-96 object-cover border-4 border-primary/30"
              />
              <div className="absolute inset-0 border border-primary/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-primary font-bold text-sm tracking-widest">OUR EXPERTISE</p>
            <h2 className="text-5xl md:text-6xl font-bold">Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal solutions across core practice areas designed to solve your most complex business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Corporate & Commercial Law', desc: 'Mergers & acquisitions, corporate advisory, commercial transactions' },
              { title: 'Property & Real Estate', desc: 'Property transactions, real estate development, conveyancing' },
              { title: 'Litigation & Dispute Resolution', desc: 'Commercial litigation, arbitration, mediation, enforcement' },
              { title: 'Regulatory & Financial Services', desc: 'Regulatory compliance, financial services advisory' },
              { title: 'Business Advisory', desc: 'Strategic business guidance, compliance, risk management' },
              { title: 'Tax & Structuring', desc: 'Tax advisory, corporate structuring, transaction tax planning' }
            ].map((area) => (
              <Link
                key={area.title}
                href="/services"
                className="group p-8 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 space-y-4"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h3>
                  <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all hover:text-primary/80"
            >
              VIEW ALL PRACTICE AREAS
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-primary font-bold text-sm tracking-widest">OUR APPROACH</p>
            <h2 className="text-5xl md:text-6xl font-bold">Why Choose Cortland Partners</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Deep Local Knowledge', desc: 'Intimate understanding of Nigerian legal landscape' },
              { icon: Users, title: 'Multidisciplinary Team', desc: 'Experts across all practice areas, seamless collaboration' },
              { icon: Zap, title: 'Client-Centric Solutions', desc: 'Strategic approach tailored to your specific objectives' },
              { icon: CheckCircle2, title: 'Proven Results', desc: 'Track record of successful complex transactions' }
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="group p-8 bg-background border border-primary/30 hover:border-primary transition-all duration-300 text-center space-y-4">
                <div className="flex justify-center">
                  <Icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Transactions Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-primary font-bold text-sm tracking-widest">EXPERTISE IN ACTION</p>
            <h2 className="text-5xl md:text-6xl font-bold">Notable Transactions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'USD 3M investment advisory for real estate sector in Nigeria',
              'Cross-border acquisition of GHS 1.5M Ghanaian cocoa licensing company',
              'Financial institution representation in debt recovery matters',
              'Corporate restructuring and M&A advisory for tech startups',
              'Regulatory compliance and licensing for fintech ventures',
              'Property development legal advisory for major projects'
            ].map((transaction, idx) => (
              <div key={idx} className="p-8 bg-card border border-primary/30 hover:border-primary transition-all duration-300 space-y-4">
                <CheckCircle2 size={28} className="text-primary" />
                <p className="text-base leading-relaxed">{transaction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-primary font-bold text-sm tracking-widest">OUR TEAM</p>
            <h2 className="text-5xl md:text-6xl font-bold">Meet the Partners</h2>
          </div>

          <div className="relative">
            <img
              src="/images/team-meeting.png"
              alt="Cortland Partners team"
              className="w-full h-96 object-cover border-4 border-primary/30 mb-12"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Ibitayo Akinkuolie',
                role: 'Partner',
                bio: 'Commercially astute lawyer with strong focus on foreign investment, corporate advisory, and market entry strategy.'
              },
              {
                name: 'Adeyinka Binuyo',
                role: 'Partner',
                bio: 'Over a decade of experience in corporate law, dispute resolution, and regulatory compliance across Africa.'
              }
            ].map((partner) => (
              <Link
                key={partner.name}
                href="/team"
                className="group p-8 bg-background border border-primary/30 hover:border-primary transition-all duration-300 space-y-4"
              >
                <p className="text-primary font-bold text-xs tracking-widest">{partner.role}</p>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{partner.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{partner.bio}</p>
                <div className="pt-4 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  VIEW PROFILE <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              VIEW FULL TEAM
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background border-y border-primary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get expert legal guidance with a free consultation. Our experienced attorneys will discuss your needs and provide tailored strategic advice.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-5 bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            SCHEDULE CONSULTATION
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
