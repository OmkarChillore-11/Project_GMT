import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle, Search, Handshake, Eye, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | GMT - GrowMore Technocrats Consulting LLP",
  description: "Independent ERP, CRM & HRMS advisory services. GMT offers end-to-end advisory and mediation to help organizations select, align, and implement the right-fit enterprise solutions.",
}

const services = [
  {
    icon: Search,
    title: "ERP Selection & Vendor Evaluation",
    description: "Choosing the right ERP is a strategic business decision, not just a technology purchase. GMT helps organizations identify and evaluate ERP solutions that best align with their industry, scale, processes, and growth plans.",
    features: [
      "Business requirement assessment",
      "Process and gap analysis",
      "ERP shortlisting across multiple vendors",
      "Functional, technical, and commercial evaluation",
      "Decision support and recommendation",
    ],
    outcome: "Right-fit ERP with reduced risk and higher ROI.",
  },
  {
    icon: Handshake,
    title: "ERP Mediation & Advisory",
    description: "As a neutral ERP mediator, GMT ensures alignment between customers, ERP vendors, and implementation partners throughout the decision and execution lifecycle.",
    features: [
      "Eliminate vendor bias and conflicting interests",
      "Bring clarity in scope, responsibilities, and expectations",
      "Resolve misalignment between business and technology teams",
      "Govern ERP initiatives with transparency and accountability",
    ],
    outcome: "Smooth collaboration and controlled ERP journeys.",
  },
  {
    icon: Eye,
    title: "Implementation Oversight & Governance",
    description: "ERP failures often occur not due to software — but due to poor governance and misaligned execution. GMT provides independent oversight to ensure implementations stay on track.",
    features: [
      "Implementation monitoring and milestone reviews",
      "Scope, timeline, and cost governance",
      "Risk identification and mitigation",
      "Alignment between business users and implementation teams",
    ],
    outcome: "Predictable delivery with fewer surprises.",
  },
  {
    icon: Users,
    title: "CRM & HRMS Advisory",
    description: "Beyond ERP, we advise organizations on selecting and aligning CRM and HRMS solutions that integrate seamlessly with core business operations.",
    features: [
      "CRM selection for sales, service, and customer engagement",
      "HRMS selection for workforce management and compliance",
      "Integration alignment with ERP ecosystems",
    ],
    outcome: "Unified digital landscape supporting people and customers.",
  },
]

export default function ServicesPage() {
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
              Our <span className="text-[#03499e]">Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Independent ERP, CRM & HRMS Advisory Services — end-to-end advisory and mediation
              to help organizations select, align, and implement the right-fit enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our services are designed to reduce risk, improve decision quality, and ensure long-term
            business value.
          </p>
          <p className="mt-4 text-lg font-medium text-foreground">
            We do not implement or sell software. We advise, evaluate, and govern — so your technology
            decisions remain objective and business-led.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-t border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-[#03499e]/50 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#03499e]/10">
                  <service.icon className="h-7 w-7 text-[#03499e]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 shrink-0 text-[#03499e]" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-lg bg-[#03499e]/5 px-4 py-3">
                  <p className="text-sm font-medium text-[#03499e]">
                    Outcome: {service.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-[#03499e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for clarity before committing to an ERP decision?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Speak to GMT Consulting and move forward with confidence.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-[#03499e] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Request Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
