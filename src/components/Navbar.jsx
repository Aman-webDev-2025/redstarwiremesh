import { useState } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2F353B] text-white shadow-md">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#0A0A0A] text-xs py-2 px-6 border-b border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-gray-300">
          <div className="flex items-center space-x-6">
            <span>📍 Offices: Bhopal | Indore | Raipur</span>
            <span>📞 Sales: 9977003608, 9977003978</span>
            <span>🛠️ Service & Parts: 7880106776</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919977003608"
              target="_blank"
              rel="noreferrer"
              className="text-[#F7C900] font-bold hover:underline"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* VAK GROUP Brand Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="bg-white px-3 py-1.5 rounded flex items-center shadow-sm">
            <div className="text-xl font-black tracking-tight text-[#0A0A0A]">
              VAK <span className="text-[#F7C900]">GROUP</span>
            </div>
          </div>
        </a>

        {/* Menu Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold">
          <a href="#" className="text-[#F7C900] font-bold">HOME</a>
          <a href="#about" className="hover:text-[#F7C900] transition-colors">ABOUT US</a>
          <a href="#products" className="hover:text-[#F7C900] transition-colors">PRODUCTS</a>
          <a href="#industries" className="hover:text-[#F7C900] transition-colors">INDUSTRIES</a>
          <a href="#why-choose" className="hover:text-[#F7C900] transition-colors">WHY VAK</a>
          <a href="#careers" className="hover:text-[#F7C900] transition-colors">CAREERS</a>
          <a href="#contact" className="hover:text-[#F7C900] transition-colors">CONTACT</a>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919977003608"
            target="_blank"
            rel="noreferrer"
            className="bg-[#F7C900] text-[#0A0A0A] hover:bg-yellow-400 font-bold px-5 py-2.5 rounded text-xs uppercase tracking-wider transition-colors shadow"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-white focus:outline-none"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-gray-800 px-6 py-4 space-y-3 text-sm font-semibold">
          <a href="#" className="block text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>HOME</a>
          <a href="#about" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>ABOUT US</a>
          <a href="#products" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>PRODUCTS</a>
          <a href="#industries" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>INDUSTRIES</a>
          <a href="#why-choose" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>WHY VAK</a>
          <a href="#careers" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>CAREERS</a>
          <a href="#contact" className="block hover:text-[#F7C900]" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
        </div>
      )}
    </header>
  )
}

export default Navbar