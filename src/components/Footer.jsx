import vakLogo from '../assets/VAK_logo.jpg'

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 text-sm border-t-4 border-[#F7C900]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Footer Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-gray-800 gap-6">
          <div className="bg-white px-4 py-2 rounded shadow-md">
            <img
              src={vakLogo}
              alt="VAK GROUP Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="flex items-center space-x-4 text-lg">
            <a
              href="https://wa.me/919977003608"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-[#2F353B] hover:bg-[#F7C900] hover:text-[#0A0A0A] rounded-full flex items-center justify-center transition-colors text-white"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="tel:+919977003608"
              className="w-10 h-10 bg-[#2F353B] hover:bg-[#F7C900] hover:text-[#0A0A0A] rounded-full flex items-center justify-center transition-colors text-white"
              title="Call Us"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="mailto:sales@vakgroup.com"
              className="w-10 h-10 bg-[#2F353B] hover:bg-[#F7C900] hover:text-[#0A0A0A] rounded-full flex items-center justify-center transition-colors text-white"
              title="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 pb-8">
          
          {/* Company Brief Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base border-l-4 border-[#F7C900] pl-3">
              VAK GROUP
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Central India's premier industrial manufacturing and heavy engineering force specializing in high-durability Cement & Fly Ash Silos, Woven Wire Mesh Screens, Bulker Feeding Root Blowers, Screw Conveyors, and Silo Accessories.
            </p>
          </div>

          {/* Product Categories Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base border-l-4 border-[#F7C900] pl-3">
              Products Range
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="#products" className="hover:text-[#F7C900] transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#F7C900]"></i>
                  Silo Tanks (100T, 150T, 200T)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F7C900] transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#F7C900]"></i>
                  Silo Accessories (Cosben/Wam)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F7C900] transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#F7C900]"></i>
                  Bulker Feeding Root Blowers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F7C900] transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#F7C900]"></i>
                  Screw Conveyors (168 & 219 mm ID)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F7C900] transition-colors flex items-center gap-1.5">
                  <i className="fa-solid fa-chevron-right text-[10px] text-[#F7C900]"></i>
                  Anti-Clog & Knapex Wiremesh
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base border-l-4 border-[#F7C900] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><a href="#" className="hover:text-[#F7C900] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F7C900] transition-colors">About VAK Group</a></li>
              <li><a href="#products" className="hover:text-[#F7C900] transition-colors">Equipment & Products</a></li>
              <li><a href="#installations" className="hover:text-[#F7C900] transition-colors">Recent Installations</a></li>
              <li><a href="#why-choose" className="hover:text-[#F7C900] transition-colors">Why Choose Us</a></li>
              <li><a href="#careers" className="hover:text-[#F7C900] transition-colors">Careers (Sales Executive)</a></li>
              <li><a href="#contact" className="hover:text-[#F7C900] transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base border-l-4 border-[#F7C900] pl-3">
              Contact Sales
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <i className="fa-solid fa-phone text-[#F7C900] mt-0.5"></i>
                <div>
                  <div className="font-bold text-white">Sales Inquiries:</div>
                  <div>+91 9977003608, 9977003978</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <i className="fa-solid fa-wrench text-[#F7C900] mt-0.5"></i>
                <div>
                  <div className="font-bold text-white">Service & Spare Parts:</div>
                  <div>+91 7880106776</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-[#F7C900] mt-0.5"></i>
                <div>
                  <div className="font-bold text-white">Offices & Plant:</div>
                  <div>Mandideep Plant | Indore | Bhopal | Raipur</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#050505] py-5 border-t border-gray-800 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 VAK Group (VAK Industries). All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#F7C900] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7C900] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#F7C900] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer