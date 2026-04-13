"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function CTA() {
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

    const section = document.getElementById("cta")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" className="relative border-t border-border py-20 sm:py-28 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03499e] via-[#0066cc] to-[#00b4d8] animate-gradient" />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float delay-300" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 shadow-lg transition-all duration-700 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <Sparkles className="h-3.5 w-3.5 text-white animate-pulse-glow" />
            <span className="text-sm font-medium text-white/90">Get Started</span>
          </div>

          <h2 className={`text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100 opacity-100' : 'opacity-0'}`}>
            Start with Clarity. Scale with Confidence.
          </h2>
          
          <p className={`mx-auto mt-4 max-w-xl text-lg text-white/90 transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-200 opacity-100' : 'opacity-0'}`}>
            Successful digital transformation begins with clarity — not software. We empower organizations
            to move forward with confidence, control, and transparency.
          </p>
          
          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300 opacity-100' : 'opacity-0'}`}>
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-8 text-base font-medium text-[#03499e] shadow-xl transition-all hover:bg-white/90 hover:shadow-2xl hover:scale-105 sm:w-auto"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/solutions"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-medium text-white shadow-xl transition-all hover:bg-white/20 hover:border-white/50 hover:shadow-2xl hover:scale-105 sm:w-auto"
            >
              View Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
