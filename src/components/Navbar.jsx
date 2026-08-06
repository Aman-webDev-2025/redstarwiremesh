import { useState } from 'react'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] text-white shadow-lg">
      {/* Top Utility Bar */}
      <div className="bg-[#1e293b] text-xs py-2 px-6 border-b border-slate-700 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span>📍 Global Mining Screen Media Manufacturer</span>
            <span>✉️ sales@redstarwiremesh.com</span>
            <span>📞 +86 13253247773</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hover:text-amber-500 cursor-pointer">🌐 Language: English</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded shadow-sm">
            <img
              src="https://www.redstarwiremesh.com/logo.png"
              alt="Red Star Wire Mesh"
              className="h-9 object-contain"
            />
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-200">
          <a href="#" className="text-amber-500 font-bold">Home</a>
          <a href="#products" className="hover:text-amber-500 transition-colors">Products</a>
          <a href="#industries" className="hover:text-amber-500 transition-colors">Industries</a>
          <a href="#about" className="hover:text-amber-500 transition-colors">About Us</a>
          <a href="#cases" className="hover:text-amber-500 transition-colors">Cases</a>
          <a href="#resources" className="hover:text-amber-500 transition-colors">Resources</a>
          <a href="#news" className="hover:text-amber-500 transition-colors">News</a>
          <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#contact"
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-md"
          >
            Get A Quote
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-slate-200 focus:outline-none"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e293b] border-t border-slate-700 px-6 py-4 space-y-3 text-sm font-medium">
          <a href="#" className="block text-amber-500 font-bold" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#products" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="#industries" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>Industries</a>
          <a href="#about" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>About Us</a>
          <a href="#cases" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>Cases</a>
          <a href="#news" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>News</a>
          <a href="#contact" className="block text-slate-200 hover:text-amber-500" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  )
}

export default Navbar