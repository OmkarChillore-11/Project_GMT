"use client"

import Link from "next/link"
import { Search, Handshake, Eye, Users, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Search,
    title: "ERP Selection & Evaluation",
    description: "Strategic ERP selection through business requirement assessment, process analysis, and objective vendor evaluation.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Handshake,
    title: "ERP Mediation & Advisory",
    description: "Neutral mediation between customers, vendors, and implementation partners to ensure alignment and accountability.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Implementation Oversight",
    description: "Independent governance to keep implementations on track — monitoring milestones, scope, timeline, and cost.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "CRM & HRMS Advisory",
    description: "Advisory for selecting and aligning CRM and HRMS solutions that integrate seamlessly with core business operations.",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("features")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="border-t border-border bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <p className="text-sm font-medium uppercase tracking-wider text-[#03499e]">What We Do</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Independent ERP, CRM & HRMS Advisory
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Reducing risk, improving decision quality, and ensuring long-term business value
            through structured, vendor-neutral advisory.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-background p-6 shadow-lg transition-all duration-700 hover-lift hover:border-[#03499e]/50 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#03499e]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-[#03499e]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#03499e] transition-all group-hover:gap-2"
                  >
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in delay-500 opacity-100' : 'opacity-0'}`}>
          <Link
            href="/services"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-8 text-base font-medium text-foreground shadow-lg transition-all hover:border-[#03499e] hover:bg-[#03499e] hover:text-white hover:shadow-xl hover:scale-105"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
