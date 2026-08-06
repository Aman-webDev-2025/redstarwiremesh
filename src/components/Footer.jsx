function Footer() {
  return (
    <footer className="bg-[#090d16] text-slate-400 text-sm py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Company Brand Column */}
          <div className="space-y-4">
            <div className="bg-white p-2 rounded w-fit">
              <img
                src="https://www.redstarwiremesh.com/logo2.png"
                alt="Red Star Wire Mesh Logo"
                className="h-9 object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Red Star Wire Mesh Manufacturing Co., Ltd. – Professional mining screen mesh manufacturer supplying woven wire screens, self-cleaning media, and polyurethane panels globally.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-amber-600 pb-1 w-fit">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Metal Woven Wire Mesh Screen</li>
              <li>• Piano Wire Screens</li>
              <li>• Clog-Resistant Self-Cleaning Screen</li>
              <li>• Polyurethane Screen Panel</li>
              <li>• Fine Aperture Polyurethane Media</li>
              <li>• Steel-Reinforced Polyurethane Panel</li>
              <li>• Perforated Screen Plate</li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-amber-600 pb-1 w-fit">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-amber-500">Home</a></li>
              <li><a href="#products" className="hover:text-amber-500">Products</a></li>
              <li><a href="#industries" className="hover:text-amber-500">Industries</a></li>
              <li><a href="#about" className="hover:text-amber-500">About Us</a></li>
              <li><a href="#cases" className="hover:text-amber-500">Field Cases</a></li>
              <li><a href="#news" className="hover:text-amber-500">News & Exhibitions</a></li>
              <li><a href="#contact" className="hover:text-amber-500">Contact Sales</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-amber-600 pb-1 w-fit">
              Contact Sales
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p><span className="font-bold text-white block">Email:</span> sales@redstarwiremesh.com</p>
              <p><span className="font-bold text-white block">WhatsApp / Phone:</span> +86 13253247773</p>
              <p><span className="font-bold text-white block">Factory Address:</span> Anping County, Hebei Province, China</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            Copyright © {new Date().getFullYear()} Red Star Wire Mesh Manufacturing Co., Ltd. All Rights Reserved.
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-amber-500">Sitemap</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer