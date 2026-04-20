import CustomCursor from '@/components/CustomCursor'
import LoadingScreen from '@/components/LoadingScreen'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import PortfolioSection from '@/sections/PortfolioSection'
import PartnersSection from '@/sections/PartnersSection'
import AboutSection from '@/sections/AboutSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/* Page load animation */}
      <LoadingScreen />

      {/* Custom animated cursor */}
      <CustomCursor />

      {/* Smooth scroll wrapper */}
      <SmoothScroll>
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main content */}
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <PartnersSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </SmoothScroll>
    </>
  )
}
