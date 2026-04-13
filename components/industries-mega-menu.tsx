"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"

const industries = [
  {
    title: "Real Estate",
    description: "Centralize operations, control cash flows, and ensure compliance for complex projects.",
    segments: ["Developers", "Consultancy Firms", "Leasing & Facility Management"],
    focusAreas: ["Project Management", "Sales & CRM", "Finance", "Procurement"],
    href: "/industries#real-estate",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Contracting & Project-Based",
    description: "Plan, execute, and control projects in real-time despite tight margins and strict timelines.",
    segments: ["EPC", "Civil & Infrastructure", "Solar & Renewable", "MEP Services"],
    focusAreas: ["Project Controls", "Procurement & Contracts", "Equipment Management"],
    href: "/industries#contracting",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    title: "Manufacturing (Discrete)",
    description: "Synchronize planning, execution, and financial control for shop floor efficiency.",
    segments: ["LED", "Electrical & Electronics", "Industrial Products", "Capital Goods"],
    focusAreas: ["Production Planning & Control", "Inventory", "Quality Management"],
    href: "/industries#manufacturing",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Process Manufacturing",
    description: "Control batch operations end-to-end, optimize yields, and ensure regulatory adherence.",
    segments: ["Chemicals", "Pharmaceuticals", "FMCG / Food & Beverage"],
    focusAreas: ["Batch Management", "Quality & Compliance", "Yield Tracking"],
    href: "/industries#process",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
]

export function IndustriesMegaMenu() {
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
        href="/industries"
        className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-[#03499e] group inline-flex items-center gap-1"
      >
        Industries
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

        <div className="w-[960px] rounded-2xl border border-border/50 bg-white p-6 shadow-2xl shadow-black/5">
          {/* Header */}
          <div className="mb-5">
            <h2 className="text-lg font-bold text-[#03499e]">Industries We Serve</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tailored ERP &amp; technology advisory for industry-specific challenges
            </p>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={industry.href}
                className="group/card rounded-xl border border-border/40 bg-white p-5 transition-all duration-300 hover:border-[#03499e]/30 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-[#03499e]/5 hover:-translate-y-0.5"
              >
                {/* Icon + Title */}
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#03499e]/10 text-[#03499e] transition-colors duration-300 group-hover/card:bg-[#03499e]/15">
                    {industry.icon}
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {industry.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-4 text-xs leading-relaxed text-gray-500">
                  {industry.description}
                </p>

                {/* Segments */}
                <div className="mb-3">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#03499e]/60">
                    Segments
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.segments.map((segment, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-md bg-[#03499e]/5 px-2 py-0.5 text-[11px] font-medium text-[#03499e]/80"
                      >
                        {segment}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focus Areas */}
                <div>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#03499e]/60">
                    Key Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.focusAreas.map((area, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-md border border-[#03499e]/15 px-2 py-0.5 text-[11px] font-medium text-gray-600"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-4">
            <p className="text-xs text-muted-foreground">
              Discover how we drive transformation across industries
            </p>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-4 py-2 text-xs font-medium text-white shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              View All Industries
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
