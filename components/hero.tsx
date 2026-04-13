"use client"

import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      {/* Enhanced background with subtle visual interest */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh orbs */}
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#03499e]/15 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#00b4d8]/8 blur-3xl animate-float delay-300" />
        <div className="absolute left-1/3 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#03499e]/8 blur-3xl animate-pulse-glow" />
        
        {/* Subtle geometric watermark lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `linear-gradient(135deg, #03499e 1px, transparent 1px), linear-gradient(225deg, #03499e 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Faint dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle, #03499e 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge with animation */}
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 shadow-lg transition-all duration-500 ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}>
            <Shield className="h-3.5 w-3.5 text-[#03499e]" />
            <span className="text-sm font-medium text-muted-foreground">Independent ERP Advisory Firm</span>
          </div>

          {/* Headline with staggered animation */}
          <h1 className={`text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-100 opacity-100' : 'opacity-0'}`}>
            Unbiased ERP, CRM & HRMS{" "}
            <span className="bg-gradient-to-r from-[#03499e] to-[#00b4d8] bg-clip-text text-transparent">
              Advisory
            </span>
          </h1>

          {/* Description with animation */}
          <p className={`mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-200 opacity-100' : 'opacity-0'}`}>
            GrowMore Technocrats (GMT) Consulting LLP is an independent ERP advisory firm. We
            help organizations select, align, and implement the right-fit enterprise solutions —
            with no vendor bias.
          </p>

          {/* CTA Buttons with animation */}
          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ${isVisible ? 'animate-fade-in-up delay-300 opacity-100' : 'opacity-0'}`}>
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#03499e] to-[#0066cc] px-8 text-base font-medium text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 sm:w-auto"
            >
              Request Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-border bg-card/50 backdrop-blur-sm px-8 text-base font-medium text-foreground shadow-lg transition-all hover:border-[#03499e] hover:bg-card hover:shadow-xl hover:scale-105 sm:w-auto"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Value props */}
          <div className={`mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 transition-all duration-700 ${isVisible ? 'animate-fade-in delay-400 opacity-100' : 'opacity-0'}`}>
            <div className="group hover-lift rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 shadow-[0_4px_20px_rgba(3,73,158,0.08)]">
              <p className="text-sm font-medium text-[#03499e]">Vendor Neutral</p>
              <p className="mt-1 text-xs text-muted-foreground">No software sales, no bias</p>
            </div>
            <div className="group hover-lift rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 shadow-[0_4px_20px_rgba(3,73,158,0.08)]">
              <p className="text-sm font-medium text-[#03499e]">Industry Focused</p>
              <p className="mt-1 text-xs text-muted-foreground">Real Estate, EPC, Manufacturing & more</p>
            </div>
            <div className="group hover-lift rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 shadow-[0_4px_20px_rgba(3,73,158,0.08)]">
              <p className="text-sm font-medium text-[#03499e]">Business First</p>
              <p className="mt-1 text-xs text-muted-foreground">Requirements before technology</p>
            </div>
            <div className="group hover-lift rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm p-5 shadow-[0_4px_20px_rgba(3,73,158,0.08)]">
              <p className="text-sm font-medium text-[#03499e]">Full Governance</p>
              <p className="mt-1 text-xs text-muted-foreground">From selection to implementation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}