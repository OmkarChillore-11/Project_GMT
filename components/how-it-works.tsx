"use client"

import Link from "next/link"
import { ArrowRight, Search, ClipboardCheck, Handshake, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Define Requirements",
    description: "We begin by understanding how your business actually runs. We define clear and precise business requirements, conduct process and gap analysis, and map operational realities to technology needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Evaluate Objectively",
    description: "We objectively evaluate multiple ERP, CRM, and HRMS options across functional, technical, and commercial dimensions — with no vendor bias. Our structured frameworks ensure the right-fit solution.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Align Stakeholders",
    description: "We align customers, ERP vendors, and implementation partners to ensure clarity in scope, responsibilities, and expectations. Misalignment between business and technology teams is resolved early.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    icon: Shield,
    title: "Govern & Oversee",
    description: "We provide independent implementation oversight — monitoring milestones, governing scope, timeline, and cost, and ensuring accountability across all stakeholders through the entire lifecycle.",
    color: "from-green-500 to-emerald-500",
  },
]

export function HowItWorks() {
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

    const section = document.getElementById("how-it-works")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="border-t border-border bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#03499e]/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-[#00b4d8]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <p className="text-sm font-medium uppercase tracking-wider text-[#03499e]">Our Approach</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ERP Mediator Approach
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Our structured approach ensures every technology decision is guided by business requirements,
            operational realities, and long-term growth objectives — not vendor influence.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-[#03499e] to-transparent lg:block" />
              )}
              
              <div className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}>
                {/* Icon container with gradient */}
                <div className={`group relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#03499e] bg-gradient-to-br ${step.color} shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-6`}>
                  <step.icon className="h-10 w-10 text-white" />
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                {/* Number badge */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#03499e] text-xs font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Decorative element */}
                <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r ${step.color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in delay-500 opacity-100' : 'opacity-0'}`}>
          <Link
            href="/contact"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-8 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Start Your ERP Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
