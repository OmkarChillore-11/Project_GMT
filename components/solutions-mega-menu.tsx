"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

const solutionTabs = [
  {
    id: "erp",
    label: "ERP Solutions Advisory",
    heading: "ERP Solutions Advisory",
    description:
      "Navigate complex ERP landscapes with expert guidance. We help organizations select, implement, and optimize enterprise resource planning systems that align with their unique operational needs and strategic goals.",
    capabilities: [
      "ERP vendor shortlisting & evaluation",
      "Business process mapping & gap analysis",
      "Functional & technical fit assessment",
      "Implementation oversight & governance",
      "Post-go-live optimization support",
    ],
    outcome: "Right-fit ERP selection with minimized risk and accelerated time-to-value",
  },
  {
    id: "crm",
    label: "CRM Applications Advisory",
    heading: "CRM Applications Advisory",
    description:
      "Transform customer relationships through the right CRM platform. We guide organizations in selecting and deploying CRM solutions that drive engagement, streamline sales pipelines, and elevate service delivery.",
    capabilities: [
      "CRM platform landscape analysis",
      "Sales & marketing workflow assessment",
      "Customer journey mapping & requirements",
      "Vendor demonstration benchmarking",
      "Integration strategy with existing systems",
    ],
    outcome: "Unified customer view with improved conversion rates and retention",
  },
  {
    id: "hrms",
    label: "HRMS Platforms Advisory",
    heading: "HRMS Platforms Advisory",
    description:
      "Empower your workforce with the right HR technology. We advise on HRMS platforms that automate talent management, payroll, and employee engagement while ensuring compliance and scalability.",
    capabilities: [
      "HR process digitization assessment",
      "Talent management & payroll evaluation",
      "Employee self-service architecture design",
      "Compliance & regulatory alignment review",
      "Change management & adoption planning",
    ],
    outcome: "Streamlined HR operations with enhanced employee experience and compliance",
  },
  {
    id: "finance",
    label: "Finance Automation Advisory",
    heading: "Finance Automation Advisory",
    description:
      "Accelerate financial operations through intelligent automation. We help finance teams identify automation opportunities across accounting, reporting, procurement, and treasury functions.",
    capabilities: [
      "Finance process audit & automation mapping",
      "AP/AR automation feasibility analysis",
      "Financial close & reporting optimization",
      "Procure-to-pay workflow design",
      "Regulatory compliance automation",
    ],
    outcome: "Faster financial closes with reduced manual errors and improved audit readiness",
  },
  {
    id: "project",
    label: "Project Management Systems Advisory",
    heading: "Project Management Systems Advisory",
    description:
      "Deliver projects on time and within budget with the right PM toolset. We evaluate and recommend project management platforms that enhance collaboration, visibility, and resource allocation across portfolios.",
    capabilities: [
      "Portfolio & resource management assessment",
      "Agile vs. waterfall tool evaluation",
      "Collaboration & communication needs analysis",
      "Reporting & dashboard requirements design",
      "Tool integration & migration planning",
    ],
    outcome: "Improved project delivery timelines with real-time visibility into portfolio health",
  },
]

export function SolutionsMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const active = solutionTabs[activeTab]

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <Link
        href="/solutions"
        className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[#03499e] group inline-flex items-center gap-1"
      >
        Solutions
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#03499e] to-[#00b4d8] transition-all duration-300 group-hover:w-full" />
      </Link>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 transition-all duration-300 ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Invisible bridge to prevent hover gap */}
        <div className="h-3 w-full" />

        <div className="w-[780px] rounded-2xl border border-border/50 bg-white shadow-2xl shadow-black/5 overflow-hidden">
          <div className="flex">
            {/* Left Column: Vertical Tabs */}
            <div className="w-[260px] border-r border-border/40 bg-gray-50/60 p-2">
              <div className="flex flex-col gap-1">
                {solutionTabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onMouseEnter={() => setActiveTab(index)}
                    className={`relative w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                      activeTab === index
                        ? "bg-white text-[#03499e] shadow-sm"
                        : "text-muted-foreground hover:bg-white/70 hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-10">{tab.label}</span>
                    {activeTab === index && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[3px] rounded-r-full bg-gradient-to-b from-[#03499e] to-[#0066cc]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Content */}
            <div className="flex-1 p-6">
              <div
                key={active.id}
                className="animate-fade-in"
              >
                {/* Heading */}
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {active.heading}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                {/* Advisory Capabilities */}
                <div className="mb-5">
                  <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">
                    Advisory Capabilities
                  </h4>
                  <ul className="space-y-2.5">
                    {active.capabilities.map((cap, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#03499e]"
                          strokeWidth={2.5}
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome Box */}
                <div className="rounded-lg border border-[#03499e]/15 bg-blue-50/80 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#03499e]/70">
                    Outcome
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-[#03499e]">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-between border-t border-border/40 bg-gray-50/40 px-6 py-3.5">
            <p className="text-xs text-muted-foreground">
              Explore all our advisory solutions in detail
            </p>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-4 py-2 text-xs font-medium text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              View All Solutions
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
