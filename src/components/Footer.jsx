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
              <li>Metal Woven Wire Mesh Screen</li>
              <li>Piano Wire Screens</li>
              <li>Clog-Resistant Self-Cleaning Mesh</li>
              <li>Polyurethane Screen Panel</li>
              <li>Perforated Plate</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li>Home</li>
              <li>Products</li>
              <li>Industries</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-bold mb-3">Contact Us</h4>
            <div className="space-y-2 text-xs">
              <p><span className="text-white font-semibold">Email:</span> info@redstarwiremesh.com</p>
              <p><span className="text-white font-semibold">WhatsApp:</span> +86 13253247773</p>
              <p><span className="text-white font-semibold">Phone:</span> +86 13253247773</p>
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