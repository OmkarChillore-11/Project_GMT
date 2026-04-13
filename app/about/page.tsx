import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Target, Eye, Shield, Users, CheckCircle, Handshake, Building2, Factory, HardHat } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | GMT - GrowMore Technocrats Consulting LLP",
  description: "Learn about GMT Consulting - an independent ERP advisory firm dedicated to helping organizations make unbiased and value-driven technology decisions.",
}

const whyGMT = [
  {
    icon: Building2,
    title: "Industry-Focused Expertise",
    description: "Deep domain exposure across Real Estate, Projects & Manufacturing verticals with understanding of industry-specific processes and compliance.",
  },
  {
    icon: Target,
    title: "Structured Decision Framework",
    description: "A proven framework for ERP selection and alignment that reduces decision fatigue and ensures objective evaluation.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Clarity and governance throughout the ERP journey to reduce implementation risk, cost overruns, and vendor bias.",
  },
  {
    icon: Users,
    title: "Business-First Mindset",
    description: "Technology supports strategy. We ensure every decision is driven by business needs, not short-term trends or vendor influence.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#03499e]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#03499e]/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-[#03499e]">GMT</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              GrowMore Technocrats (GMT) Consulting LLP is an ERP advisory firm dedicated to helping
              organizations make unbiased and value-driven technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* About GMT Overview */}
      <section className="border-t border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We guide businesses through the critical stages of ERP, CRM, and HRMS selection, alignment,
              and implementation, ensuring technology investments deliver measurable and sustainable business value.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With strong domain exposure across Real Estate, Contracting, Projects, and Manufacturing
              verticals, GMT brings a deep understanding of industry-specific processes, compliance requirements,
              and operational complexities. This enables us to recommend solutions that are not only technically
              sound, but also practical, scalable, and aligned with real business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[#03499e]">Who We Are</p>
              <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Independent ERP Advisors & Business Technology Consultants
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We are independent ERP advisors and business technology consultants who operate solely
                in the interest of our clients. Unlike ERP vendors or system integrators, GMT does not sell
                software or promote specific platforms.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We act as a neutral advisor and trusted partner, working closely with leadership teams,
                functional heads, and project stakeholders to understand organizational processes, pain
                points, and long-term aspirations. Our role is to bring clarity, structure, and governance to
                complex ERP decision-making initiatives.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#03499e]">100%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Vendor Neutral</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#03499e]">4+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Industry Verticals</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#03499e]">0</p>
                    <p className="mt-1 text-sm text-muted-foreground">Software Sold</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#03499e]">100%</p>
                    <p className="mt-1 text-sm text-muted-foreground">Client Interest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#03499e]/10">
                <Eye className="h-7 w-7 text-[#03499e]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To be a trusted ERP advisory and mediation partner for organizations across industries,
                recognized for objectivity, integrity, and business-focused outcomes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#03499e]/10">
                <Target className="h-7 w-7 text-[#03499e]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Help organizations select the right-fit ERP, CRM, and HRMS solutions",
                  "Reduce implementation risk, cost overruns, and decision fatigue",
                  "Ensure technology decisions are driven by business needs, not vendor bias",
                  "Maximize return on digital and ERP investments",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#03499e] mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Mediator Approach */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-[#03499e]">Our Approach</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ERP Mediator Approach
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              In today's digital landscape, organizations are often overwhelmed by a crowded ecosystem
              of ERP vendors, system integrators, and technology platforms. GMT was founded to bring
              clarity, objectivity, and structure to this complexity.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Define Requirements",
                description: "Define clear and precise business requirements based on how your business actually runs.",
              },
              {
                icon: Eye,
                title: "Evaluate Objectively",
                description: "Objectively evaluate multiple ERP, CRM, and HRMS options without vendor bias.",
              },
              {
                icon: Handshake,
                title: "Align Stakeholders",
                description: "Align customers, ERP vendors, and implementation partners for smooth collaboration.",
              },
              {
                icon: Shield,
                title: "Ensure Accountability",
                description: "Ensure accountability across all stakeholders with transparency and governance.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#03499e]/10">
                  <item.icon className="h-6 w-6 text-[#03499e]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-muted-foreground">
            Our approach ensures that every technology decision is guided by business requirements,
            operational realities, and long-term growth objectives, rather than short-term trends or
            vendor influence.
          </p>
        </div>
      </section>

      {/* Why GMT */}
      <section className="border-t border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why GMT
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Organizations choose GrowMore Technocrats Consulting LLP because we offer:
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {whyGMT.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border bg-background p-6">
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#03499e]/10">
                  <item.icon className="h-6 w-6 text-[#03499e]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg text-muted-foreground">
              At GMT, we believe successful digital transformation begins with clarity — not software.
              We empower organizations to move forward with confidence, control, and transparency,
              turning complex ERP decisions into structured, business-led outcomes that support long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-[#03499e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work With a Trusted ERP Advisor?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Connect with GMT Consulting for independent, vendor-neutral ERP, CRM, and HRMS
              advisory. Your technology decisions deserve objectivity and clarity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-[#03499e] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
