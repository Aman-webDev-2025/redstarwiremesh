function Footer(){
  return(
    <footer className="bg-[#090909] text-gray-400 text-sm py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          
          {/* Logo */}
          <div>
            <img
              src="https://www.redstarwiremesh.com/logo2.png"
              alt="Red Star Wire Mesh Logo"
              className="h-10 object-contain mb-3"
            />
            <p className="text-xs text-gray-500">
              Red Star Wire Mesh - your trusted partner in global mining and aggregate screening.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-3">Products</h4>
            <ul className="space-y-1 text-xs">
              <li className="hover:text-orange-300">Metal Woven Wire Mesh Screen</li>
              <li className="hover:text-orange-300">Piano Wire Screens</li>
              <li className="hover:text-orange-300">Clog-Resistant Self-Cleaning Mesh</li>
              <li className="hover:text-orange-300">Polyurethane Screen Panel</li>
              <li className="hover:text-orange-300">Perforated Plate</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li className="hover:text-orange-300">Home</li>
              <li className="hover:text-orange-300">Products</li>
              <li className="hover:text-orange-300">Industries</li>
              <li className="hover:text-orange-300">About Us</li>
              <li className="hover:text-orange-300">Contact Us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-3">Contact Us</h4>
            <div className="space-y-2 text-xs">
              <p className="hover:text-orange-300"><span className="text-white font-semibold">Email:</span> info@redstarwiremesh.com</p>
              <p className="hover:text-orange-300"><span className="text-white font-semibold">WhatsApp:</span> +86 13253247773</p>
              <p className="hover:text-orange-300"><span className="text-white font-semibold">Phone:</span> +86 13253247773</p>
            </div>
          </div>

        </div>

        <div className="pt-6 text-center text-xs text-gray-500">
          Copyright © Red Star Wire Mesh Manufacturing Co., Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer