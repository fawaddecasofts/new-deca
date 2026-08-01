import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoBar from '@/components/LogoBar'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Process from '@/components/Process'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <Stats />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
      <Footer />
      <SpeedInsights />
    </main>
  )
}

