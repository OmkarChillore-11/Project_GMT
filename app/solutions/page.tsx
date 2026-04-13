import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle, Layers, Database, Workflow, LineChart, BarChart3, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | GMT - GrowMore Technocrats Consulting LLP",
  description: "Enterprise Solutions Advisory — ERP, CRM, HRMS, Finance & Project Systems aligned to business outcomes. Independent, vendor-neutral advisory from GMT.",
}

const solutions = [
  {
    icon: Layers,
    title: "ERP Solutions Advisory",
    description: "ERP is the backbone of any organization's digital ecosystem. Choosing the wrong ERP — or choosing it the wrong way — often leads to cost overruns, delays, and failed implementations. GMT helps organizations make confident ERP decisions.",
    capabilities: [
      "Business process assessment & requirement definition",
      "Industry-aligned ERP shortlisting",
      "Functional, technical, and commercial evaluation",
      "Vendor and implementation partner alignment",
      "Risk mitigation and governance support",
    ],
    outcome: "Right-fit ERP aligned to business workflows with reduced implementation risk and higher ROI.",
  },
  {
    icon: Database,
    title: "CRM Applications Advisory",
    description: "CRM systems play a critical role in managing leads, customers, channels, and service operations. However, CRM failures often occur due to poor process alignment and over-customization. GMT helps organizations select and align CRM platforms.",
    capabilities: [
      "Sales pipeline and lead management",
      "Channel partner and broker tracking",
      "Customer lifecycle and service management",
      "Integration with ERP and finance systems",
    ],
    outcome: "CRM solutions that support your sales and service operations without over-customization.",
  },
  {
    icon: Workflow,
    title: "HRMS Platforms Advisory",
    description: "As organizations scale, managing people, compliance, and productivity becomes increasingly complex. HRMS systems must align with organizational structure, labor laws, and operational realities.",
    capabilities: [
      "Workforce and attendance management",
      "Payroll processing and statutory compliance",
      "Site-wise or department-wise manpower control",
      "Integration with finance and project costing",
    ],
    outcome: "HRMS that scales with your organization while maintaining compliance across locations.",
  },
  {
    icon: BarChart3,
    title: "Finance Automation Advisory",
    description: "Finance systems are no longer limited to accounting — they are critical for control, compliance, and decision-making. GMT helps organizations automate and strengthen financial operations through the right platforms.",
    capabilities: [
      "Finance process assessment and automation roadmap",
      "Project-wise and cost-center accounting alignment",
      "Compliance, audit, and reporting readiness",
      "Integration with ERP, CRM, HRMS, and projects",
    ],
    outcome: "Automated finance operations with improved control, compliance, and decision-making.",
  },
  {
    icon: LineChart,
    title: "Project Management Systems Advisory",
    description: "For project-driven organizations — such as real estate, contracting, EPC, and engineering firms — project control is critical to profitability. GMT advises on project management systems that enable effective project governance.",
    capabilities: [
      "WBS-based planning and scheduling",
      "Project cost and margin control",
      "Resource, asset, and equipment tracking",
      "Billing, certification, and closure alignment",
    ],
    outcome: "Project control systems that drive profitability and governance across complex projects.",
  },
]

export default function SolutionsPage() {
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
              Enterprise Solutions <span className="text-[#03499e]">Advisory</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              ERP, CRM, HRMS, Finance & Project Systems — Aligned to Business Outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            GMT provides independent, vendor-neutral advisory services to help organizations select,
            align, and govern the right enterprise applications.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We act as a trusted mediator between business stakeholders and technology providers —
            ensuring solutions are chosen based on process fit, scalability, and measurable business
            value, not sales influence.
          </p>
          <p className="mt-4 text-lg font-medium text-foreground">
            At GMT, we don't recommend platforms first. We understand your business, define
            requirements, and then align the right solutions to your goals.
          </p>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, index) => (
        <section
          key={solution.title}
          className={`border-t border-border py-20 sm:py-28 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#03499e]/10">
                  <solution.icon className="h-8 w-8 text-[#03499e]" />
                </div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {solution.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {solution.description}
                </p>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="rounded-xl border border-border bg-card p-8">
                  <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#03499e]">Advisory Capabilities</p>
                  <ul className="space-y-3">
                    {solution.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-[#03499e]" />
                        <span className="text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-lg bg-[#03499e]/5 px-4 py-3">
                    <p className="text-sm font-medium text-[#03499e]">
                      Outcome: {solution.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Advisory Advantage */}
      <section className="border-t border-border bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Advisory Advantage
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What sets GMT apart is our ERP Mediator approach:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Vendor-neutral and unbiased",
              "Industry-focused advisory",
              "Business-first requirement definition",
              "Structured evaluation frameworks",
              "Alignment between business, vendors, and partners",
              "Independent advisory — your interests come first, always",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-background p-6">
                <Shield className="h-6 w-6 shrink-0 text-[#03499e]" />
                <span className="text-muted-foreground">{item}</span>
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
              Find the Right Solution for Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Our experts will help you choose the perfect enterprise solution based on your unique
              requirements and business goals. Objectively. Without bias.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-[#03499e] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Get a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-8 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
