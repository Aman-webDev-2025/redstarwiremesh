import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrySection from './components/IndustrySection'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import ProductsSection from './components/ProductsSection'
import ProjectsSection from './components/ProjectsSection'
import AdvantageSection from './components/AdvantageSection'
import PartnerSection from './components/PartnerSection'
import CareersSection from './components/CareersSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <div className="bg-[#0D0F12] text-slate-100 font-sans min-h-screen relative selection:bg-[#F7C900] selection:text-[#0D0F12]">
      <Navbar />
      <main>
        <Hero />
        <IndustrySection />
        <AboutSection />
        <WhyChooseUs />
        <ProductsSection />
        <ProjectsSection />
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