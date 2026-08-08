function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 text-sm py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          
          {/* VAK Group Brand Column */}
          <div className="space-y-3">
            <div className="text-2xl font-black text-white tracking-tight">
              VAK <span className="text-[#F7C900]">GROUP</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Premier manufacturing & industrial engineering force in Central India. Specializing in Cement Silos, Bulker Feeding Systems & Woven Wire Mesh Screens.
            </p>
          </div>

          {/* Product Categories Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 border-b border-[#F7C900] pb-1 w-fit">
              Product Categories
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li>• Cement & Fly Ash Silo Tanks</li>
              <li>• Silo Accessories & Aerators</li>
              <li>• Bulker Feeding Root Blowers</li>
              <li>• Screw Conveyors (168 & 219 mm ID)</li>
              <li>• Anti-Clog & Knapex Wiremesh</li>
              <li>• Vibro Motors & Geared Motors</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 border-b border-[#F7C900] pb-1 w-fit">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              <li><a href="#" className="hover:text-[#F7C900]">Home</a></li>
              <li><a href="#about" className="hover:text-[#F7C900]">About Us</a></li>
              <li><a href="#products" className="hover:text-[#F7C900]">Products</a></li>
              <li><a href="#industries" className="hover:text-[#F7C900]">Industries</a></li>
              <li><a href="#why-choose" className="hover:text-[#F7C900]">Why Choose VAK</a></li>
              <li><a href="#careers" className="hover:text-[#F7C900]">Careers</a></li>
              <li><a href="#contact" className="hover:text-[#F7C900]">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3 border-b border-[#F7C900] pb-1 w-fit">
              Contact VAK Group
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <p><span className="text-white font-bold">Sales:</span> +91 9977003608, 9977003978</p>
              <p><span className="text-white font-bold">Service & Parts:</span> +91 7880106776</p>
              <p><span className="text-white font-bold">Offices:</span> Bhopal | Indore | Raipur</p>
              <p><span className="text-white font-bold">Manufacturing:</span> Unit 1 & Unit 2</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 text-center text-xs text-gray-500">
          © 2026 VAK Group. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer