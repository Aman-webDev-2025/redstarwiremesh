import { useState, useEffect } from 'react'
import vakLogo from '../assets/VAK_logo.jpg'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'top-products', 'about', 'products', 'installations', 'why-choose', 'careers', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        if (sectionId === 'home' && window.scrollY < 300) {
          setActiveSection('home')
          break
        }
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#' },
    { id: 'top-products', label: 'PRODUCTS', href: '#top-products' },
    { id: 'about', label: 'ABOUT US', href: '#about' },
    { id: 'installations', label: 'INSTALLATIONS', href: '#installations' },
    { id: 'why-choose', label: 'WHY VAK', href: '#why-choose' },
    { id: 'careers', label: 'CAREERS', href: '#careers' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F12]/95 backdrop-blur-md text-white shadow-xl border-b border-gray-800">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#050505] text-xs py-2 px-6 border-b border-gray-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <i className="fa-solid fa-location-dot text-[#FFC000] mr-1.5"></i>
              Mandideep Factory | Indore Office | Bhopal Office
            </span>
            <span className="flex items-center">
              <i className="fa-solid fa-phone text-[#FFC000] mr-1.5"></i>
              Sales: +91 9977003608, 9977003978
            </span>
            <span className="flex items-center">
              <i className="fa-solid fa-wrench text-[#FFC000] mr-1.5"></i>
              Service & Parts: +91 7880106776
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919977003608"
              target="_blank"
              rel="noreferrer"
              className="text-[#FFC000] font-bold hover:underline flex items-center"
            >
              <i className="fa-brands fa-whatsapp mr-1.5 text-base"></i>
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* VAK GROUP Brand Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="bg-white px-3 py-1.5 rounded-xl flex items-center shadow-md hover:opacity-95 transition-opacity">
            <img
              src={vakLogo}
              alt="VAK GROUP Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
        </a>

        {/* Dynamic Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-black tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`pb-1 transition-all duration-200 border-b-2 ${
                  isActive
                    ? 'text-[#FFC000] border-[#FFC000]'
                    : 'text-gray-300 border-transparent hover:text-[#FFC000] hover:border-[#FFC000]/50'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919977003608"
            target="_blank"
            rel="noreferrer"
            className="bg-[#FFC000] text-[#0D0F12] hover:bg-yellow-400 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg glow-gold flex items-center space-x-1.5"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>Request Quote</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white focus:outline-none text-2xl p-1"
        >
          {mobileMenuOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F12] border-t border-gray-800 px-6 py-4 space-y-3 text-xs font-black tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`block py-1 ${
                activeSection === link.id ? 'text-[#FFC000]' : 'text-gray-300 hover:text-[#FFC000]'
              }`}
              onClick={() => {
                setActiveSection(link.id)
                setMobileMenuOpen(false)
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar