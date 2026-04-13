"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

const menuBlocks = [
  {
    title: "ERP Selection & Vendor Evaluation",
    description: "Choosing the right ERP is a strategic business decision...",
    items: [
      "Business requirement assessment",
      "Process and gap analysis",
      "ERP shortlisting",
      "Functional/technical evaluation",
      "Decision support",
    ],
    outcome: "Right-fit ERP with reduced risk and higher ROI",
    accentColor: "from-[#03499e] to-[#0066cc]",
    outcomeBg: "bg-blue-50",
    outcomeBorder: "border-[#03499e]/20",
    outcomeText: "text-[#03499e]",
    checkColor: "text-[#03499e]",
  },
  {
    title: "ERP Mediation & Advisory",
    description: "As a neutral ERP mediator, GMT ensures alignment between customers, vendors, and partners.",
    items: [
      "Eliminate vendor bias",
      "Bring clarity in scope",
      "Resolve misalignment",
      "Govern ERP initiatives",
    ],
    outcome: "Smooth collaboration and controlled ERP journeys",
    accentColor: "from-[#0066cc] to-[#00b4d8]",
    outcomeBg: "bg-sky-50",
    outcomeBorder: "border-[#0066cc]/20",
    outcomeText: "text-[#0066cc]",
    checkColor: "text-[#0066cc]",
  },
  {
    title: "Implementation Oversight & Governance",
    description: "GMT provides independent oversight to ensure implementations stay on track.",
    items: [
      "Implementation monitoring",
      "Scope/timeline governance",
      "Risk identification",
      "Alignment between teams",
    ],
    outcome: "Predictable delivery with fewer surprises",
    accentColor: "from-[#00b4d8] to-[#03499e]",
    outcomeBg: "bg-cyan-50",
    outcomeBorder: "border-[#00b4d8]/20",
    outcomeText: "text-[#00b4d8]",
    checkColor: "text-[#00b4d8]",
  },
  {
    title: "CRM & HRMS Advisory",
    description: "Beyond ERP, we advise organizations on selecting CRM and HRMS solutions.",
    items: [
      "CRM selection",
      "HRMS selection",
      "Integration alignment with ERP ecosystems",
    ],
    outcome: "Unified digital landscape supporting people and customers",
    accentColor: "from-[#03499e] to-[#00b4d8]",
    outcomeBg: "bg-indigo-50",
    outcomeBorder: "border-[#03499e]/20",
    outcomeText: "text-[#03499e]",
    checkColor: "text-[#03499e]",
  },
]

export function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <Link
        href="/services"
        className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[#03499e] group inline-flex items-center gap-1"
      >
        Services
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

        <div className="w-[900px] rounded-2xl border border-border/50 bg-white p-6 shadow-2xl shadow-black/5">
          {/* 4-column grid */}
          <div className="grid grid-cols-4 gap-5">
            {menuBlocks.map((block, index) => (
              <div
                key={index}
                className="group/block rounded-xl border border-border/40 bg-white p-5 transition-all duration-300 hover:border-[#03499e]/30 hover:shadow-lg hover:shadow-[#03499e]/5"
              >
                {/* Title with gradient accent */}
                <div className="mb-3 flex items-start gap-2.5">
                  <div
                    className={`mt-0.5 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b ${block.accentColor}`}
                  />
                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {block.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {block.description}
                </p>

                {/* Checkmark list */}
                <ul className="mb-4 space-y-2">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${block.checkColor}`}
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Outcome box */}
                <div
                  className={`rounded-lg border ${block.outcomeBorder} ${block.outcomeBg} px-3.5 py-2.5`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Outcome
                  </p>
                  <p className={`mt-0.5 text-xs font-semibold leading-snug ${block.outcomeText}`}>
                    {block.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
            <p className="text-xs text-muted-foreground">
              Explore our full range of ERP consulting services
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-4 py-2 text-xs font-medium text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              View All Services
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
