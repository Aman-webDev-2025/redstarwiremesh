import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrySection from './components/IndustrySection'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProductsSection from './components/ProductsSection'
import AdvantageSection from './components/AdvantageSection'
import PartnerSection from './components/PartnerSection'
import CareersSection from './components/CareersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <div className="bg-white text-[#0A0A0A] font-sans min-h-screen relative selection:bg-[#F7C900] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <IndustrySection />
        <AboutSection />
        <WhyChooseUs />
        <ProductsSection />
        <AdvantageSection />
        <PartnerSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App