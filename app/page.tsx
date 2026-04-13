import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

const HowItWorks = dynamic(() => import("@/components/how-it-works").then(mod => mod.HowItWorks), {
  loading: () => <div className="h-96" />,
})

const Testimonials = dynamic(() => import("@/components/testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="h-80" />,
})

const CTA = dynamic(() => import("@/components/cta").then(mod => mod.CTA), {
  loading: () => <div className="h-48" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
