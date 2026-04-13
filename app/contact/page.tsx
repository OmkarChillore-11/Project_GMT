import type { Metadata } from "next"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us | GMT - GrowMore Technocrats Consulting LLP",
  description: "Get in touch with GMT consulting experts. Contact us for ERP, CRM, HRMS, and business consulting services. Reach out today.",
}

export default function ContactPage() {
  return <ContactForm />
}
