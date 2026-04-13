"use client"

import { Shield, Target, Eye, Handshake } from "lucide-react"
import { useEffect, useState } from "react"

const principles = [
  {
    icon: Shield,
    title: "Vendor Neutral",
    description: "We do not sell software or promote specific platforms. Our recommendations are based solely on business fit and value.",
  },
  {
    icon: Target,
    title: "Business First",
    description: "We start with how your business actually runs, then align technology solutions to your processes — not the other way around.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "Clear scope, responsibilities, and expectations at every stage. No hidden agendas, no conflicting interests.",
  },
  {
    icon: Handshake,
    title: "Stakeholder Alignment",
    description: "We bridge the gap between business teams, vendors, and implementation partners to ensure smooth collaboration.",
  },
]

export function Testimonials() {
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

    const section = document.getElementById("testimonials")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials" className="border-t border-border bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#03499e]/5 blur-3xl animate-pulse-glow" />
        <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-[#00b4d8]/5 blur-3xl animate-pulse-glow delay-300" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
          <p className="text-sm font-medium uppercase tracking-wider text-[#03499e]">Our Principles</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Sets Us Apart
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Guided by objectivity, integrity, and business-focused outcomes.
          </p>
        </div>

        {/* Principle Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-8 shadow-lg transition-all duration-700 hover-lift ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#03499e]/10 transition-transform duration-300 group-hover:scale-110">
                <principle.icon className="h-6 w-6 text-[#03499e]" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
