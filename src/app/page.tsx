import Hero from "@/app/components/hero"
import ServicesSection from "@/app/components/services-section"
import TestimonialsSection from "@/app/components/TestimonialsSection"
// import CtaSection from "@/components/cta-section"
import ContactInfo from "@/app/components/ContactInfo"

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      {/* <CtaSection /> */}
      <ContactInfo />
    </div>
  )
}



