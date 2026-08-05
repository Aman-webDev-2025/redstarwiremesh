import Navbar from './components/Navbar'
import Hero from './components/Hero'
import IndustrySection from './components/IndustrySection'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import AdvantageSection from './components/AdvantageSection'
import ProjectsSection from './components/ProjectsSection'
import ChallengeSection from './components/ChallengeSection'
import NewsSection from './components/NewsSection'
import PartnerSection from './components/PartnerSection'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <div className="bg-white text-[#090909] font-sans min-h-screen relative selection:bg-[#ea6622] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <IndustrySection />
        <AboutSection />
        <WhyChooseUs />
        <AdvantageSection />
        <ProjectsSection />
        <ChallengeSection />
        <NewsSection />
        <PartnerSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}

export default App