function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090909] text-white">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[90px] px-6">
        
        {/* Logo */}
        <div className="bg-white p-3 rounded">
          <a href="#">
            <img
              src="https://www.redstarwiremesh.com/logo.png"
              alt="Red Star Wire Mesh"
              className="h-10 object-contain"
            />
          </a>
        </div>

        {/* Menu Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          <a href="#" className="text-[#ea6622] font-bold">Home</a>
          <a href="#" className="hover:text-[#ea6622]">Products</a>
          <a href="#" className="hover:text-[#ea6622]">Industries</a>
          <a href="#" className="hover:text-[#ea6622]">About Us</a>
          <a href="#" className="hover:text-[#ea6622]">Cases</a>
          <a href="#" className="hover:text-[#ea6622]">Resource</a>
          <a href="#" className="hover:text-[#ea6622]">News</a>
          <a href="#" className="hover:text-[#ea6622]">Contact Us</a>
        </nav>

        {/* Right side items */}
        <div className="flex items-center space-x-4 text-sm">
          <span className="cursor-pointer hover:text-[#ea6622]">🔍</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-[#ea6622]">🌐 English ▼</span>
        </div>

      </div>
    </header>
  )
}

export default Navbar