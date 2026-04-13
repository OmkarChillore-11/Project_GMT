import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Building2, HardHat, Factory, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries | GMT - GrowMore Technocrats Consulting LLP",
  description: "Industry-focused ERP advisory for Real Estate, Contracting & Projects, Discrete Manufacturing, and Process Manufacturing verticals.",
}

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "The real estate industry operates in a highly complex environment involving multiple projects, long cash cycles, regulatory compliance, and diverse stakeholders. An integrated ERP system enables real estate organizations to centralize operations, gain real-time project insights, control cash flows, and ensure compliance.",
    segments: [
      "Real Estate Developers (Residential, Commercial & Mixed-Use)",
      "Real Estate Consultancy Firms",
      "Leasing & Facility Management Companies",
    ],
    workflow: "Land Acquisition → Project Planning → Construction & Billing → Sales / Leasing → Collections → Facility Management → Financial Reporting",
    modules: [
      { name: "Project Management", benefits: ["Project-wise budgeting and cost breakdown", "Milestone-based planning and progress tracking", "Budget vs actual cost monitoring in real time", "Change order and variation management"] },
      { name: "Sales & CRM", benefits: ["Real-time unit inventory and availability tracking", "Booking, allotment, and cancellation management", "Broker/channel partner commission tracking", "Customer lifecycle management"] },
      { name: "Finance & Accounting", benefits: ["Project-wise P&L and balance sheet", "Revenue recognition aligned with milestones", "GST compliance", "Customer collections and receivables tracking"] },
      { name: "Procurement", benefits: ["Material requirement planning based on schedules", "Vendor and rate contract management", "Purchase order and GRN tracking", "Integration with project costing"] },
      { name: "Facility Management", benefits: ["CAM billing and recovery management", "Preventive and reactive maintenance", "Service request and ticket management", "Asset and equipment maintenance tracking"] },
    ],
  },
  {
    icon: HardHat,
    title: "Contracting & Project-Based Organizations",
    description: "Contracting and project-driven businesses operate in a highly complex environment involving tight margins, multiple sites, subcontractors, material-intensive execution, and strict timelines. An integrated ERP system enables contracting organizations to plan, execute, and control projects in real time.",
    segments: [
      "EPC (Engineering, Procurement & Construction) Companies",
      "Civil & Infrastructure Contractors",
      "Project Portfolio Management Firms",
      "Solar & Renewable Energy",
      "Road & Bridges Contractors",
      "MEP & HVAC Services",
      "Metro & Railway Contractors",
    ],
    workflow: "Tendering → Project Estimation & BOQ → Contract Award → Project Planning & Scheduling (WBS) → Procurement → Asset & Equipment Planning → Site Execution → Subcontracting & Work Certification → Progress Billing & RA Bills → Collections & Retention → Project Closure & Profitability Analysis",
    modules: [
      { name: "Project Controls", benefits: ["WBS-based project planning and budgeting", "Activity-wise cost allocation", "Real-time budget vs actual tracking", "Margin monitoring at project, package, and activity level"] },
      { name: "Procurement & Contracts", benefits: ["BOQ-based procurement planning", "Vendor and subcontractor onboarding", "Contract-wise procurement and billing control", "Subcontractor RA bills and certifications"] },
      { name: "Finance", benefits: ["Project-wise P&L and cost center accounting", "Mobilization advance tracking", "Retention money management", "Progress billing (RA bills) and certification linkage"] },
      { name: "HR & Payroll", benefits: ["Site-wise manpower deployment and attendance", "Skill-based labor allocation", "Payroll linked to attendance and shifts", "Statutory compliance (PF, ESIC, labor laws)"] },
      { name: "Equipment Management", benefits: ["Equipment planning and allocation across projects", "Utilization tracking (idle vs productive time)", "Preventive and breakdown maintenance", "Fuel consumption and operating cost tracking"] },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing (Discrete)",
    description: "Manufacturing organizations operate in an environment defined by production efficiency, cost control, quality compliance, and on-time delivery. An integrated ERP system enables manufacturers to synchronize planning, execution, and financial control, providing real-time visibility across the shop floor.",
    segments: [
      "LED Manufacturing",
      "Electrical & Electronics",
      "Industrial Products",
      "Rubber Manufacturing",
      "Engineering & Capital Goods",
    ],
    workflow: "Sales Order → Production Planning → Procurement → Manufacturing → Quality → Dispatch → Invoicing",
    modules: [
      { name: "Production Planning & Control", benefits: ["MRP based on sales orders and forecasts", "Machine and labour capacity planning", "Production scheduling and work order management", "Bottleneck identification and load balancing"] },
      { name: "Inventory Management", benefits: ["RM, WIP, and Finished Goods tracking", "Multi-location and warehouse management", "Batch / serial number tracking", "Reorder level and safety stock management"] },
      { name: "Quality Management", benefits: ["Incoming, in-process, and final inspection", "Quality parameters and acceptance criteria", "Rejection, rework, and deviation tracking", "Vendor and process quality analysis"] },
      { name: "Finance & Costing", benefits: ["Product-wise and batch-wise costing", "Standard vs actual cost variance analysis", "Overhead allocation (labour, machine, utilities)", "Real-time profitability reporting"] },
      { name: "Sales & Distribution", benefits: ["Sales order management and promise-date control", "Production-linked dispatch planning", "Credit control and receivables tracking", "Customer service and order status visibility"] },
    ],
  },
  {
    icon: Factory,
    title: "Process Manufacturing",
    description: "Process manufacturing industries operate in environments where product quality, regulatory compliance, batch consistency, and traceability are critical. An integrated ERP system enables process manufacturers to control batch operations end-to-end, ensure regulatory adherence, and optimize yields.",
    segments: [
      "Chemicals",
      "Pharmaceuticals",
      "FMCG / Food & Beverage",
    ],
    workflow: "Formulation → Batch Planning → Production → Quality Control → Compliance → Packaging → Distribution",
    modules: [
      { name: "Batch Management", benefits: ["Lot-wise and batch-wise tracking across supply chain", "Shelf-life and expiry date management", "Batch genealogy from raw material to finished goods", "Recall-ready traceability for compliance"] },
      { name: "Quality & Compliance", benefits: ["In-process, incoming, and final quality inspections", "Quality deviation and non-conformance management", "Regulatory compliance tracking", "Audit trails and documentation control"] },
      { name: "Production", benefits: ["Formula and recipe management", "Batch-wise production planning and execution", "Yield and variance analysis", "Process loss and wastage tracking"] },
      { name: "Inventory", benefits: ["Expiry-driven inventory control (FEFO/FIFO)", "Stock segregation by quality status", "Multi-location inventory visibility", "Batch-wise inventory valuation"] },
      { name: "Sales & Distribution", benefits: ["Channel-wise and region-wise sales control", "Batch and expiry-aware dispatch", "Pricing, discounts, and schemes management", "Distributor and customer credit control"] },
    ],
  },
]

export default function IndustriesPage() {
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
              Industries We <span className="text-[#03499e]">Serve</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Industry-focused ERP advisory built around real operational workflows. We don't start with
              software modules — we start with how your business actually runs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section
          key={industry.title}
          className={`border-t border-border py-20 sm:py-28 ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#03499e]/10">
                <industry.icon className="h-7 w-7 text-[#03499e]" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {industry.title}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </div>

            {/* Segments */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground">Segments Covered</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {industry.segments.map((segment) => (
                  <span key={segment} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                    {segment}
                  </span>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="mb-8 rounded-xl border border-border bg-background p-6">
              <h3 className="text-lg font-semibold text-foreground">Typical Industry Workflow</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{industry.workflow}</p>
            </div>

            {/* ERP Modules */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-foreground">Key ERP Modules & Benefits</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {industry.modules.map((mod) => (
                  <div key={mod.name} className="rounded-xl border border-border bg-background p-6">
                    <h4 className="font-semibold text-foreground">{mod.name}</h4>
                    <ul className="mt-4 space-y-2">
                      {mod.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 shrink-0 text-[#03499e] mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="border-t border-border bg-[#03499e] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Looking for industry-specific ERP guidance?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Speak to GMT Consulting and move forward with confidence. We understand how your business actually runs.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-[#03499e] transition-colors hover:bg-white/90 sm:w-auto"
              >
                Talk to an Expert
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
