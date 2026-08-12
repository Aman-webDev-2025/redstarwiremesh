import mainImage4 from '../assets/extracted/main_image4.jpeg'
import crusher1 from '../assets/extracted/crusher_img_1.jpg'
import silo7 from '../assets/extracted/silo_img_7.jpg'
import silo4 from '../assets/extracted/silo_img_4.jpg'
import crusher16 from '../assets/extracted/crusher_img_16.jpg'
import crusher13 from '../assets/extracted/crusher_img_13.jpg'

const featuredProducts = [
  {
    title: 'Cement & Fly Ash Silos',
    category: 'Storage Infrastructure',
    capacity: '50T to 500T Capacity',
    desc: 'High-durability IS 2062 Grade Steel Plate storage silos engineered for heavy cement and fly ash bulk storage.',
    image: mainImage4,
    badge: 'IS Quality Norms'
  },
  {
    title: 'Anti-Clog PU Wire Mesh Screens',
    category: 'Screening Media',
    capacity: '+25% to 50% Output Yield',
    desc: 'Self-vibrating polyurethane strip screens that eliminate damp material blinding and screen clogging.',
    image: crusher1,
    badge: 'Self-Cleaning'
  },
  {
    title: 'Bulker Feeding Root Blowers',
    category: 'Pneumatic Conveying',
    capacity: '20T - 60T / Hour Transfer',
    desc: 'High pressure roots blower units designed for continuous pneumatic feeding of cement into silos.',
    image: silo7,
    badge: 'Heavy Pressure'
  },
  {
    title: 'Cosben / WAM Silo Accessories',
    category: 'Safety & Automation',
    capacity: '273mm ID Butterfly Valves',
    desc: 'Italian-standard butterfly valves, spring loaded pressure relief valves, aeration pads & dust collectors.',
    image: silo4,
    badge: 'Italian Standard'
  },
  {
    title: 'Opel Dust-Proof Conveyor Rollers',
    category: 'Conveyor Components',
    capacity: 'NBC Bearings & EN8 Shaft',
    desc: 'Heavy-duty conveyor rollers with multi-labrynth dust-proof sealing and 1-year full replacement warranty.',
    image: crusher16,
    badge: '1 Year Warranty'
  },
  {
    title: 'Suspended Overband Magnets',
    category: 'Crusher Protection',
    capacity: '500mm - 800mm Belts',
    desc: 'Permanent magnetic tramp iron separators installed above conveyor belts to protect cone crushers.',
    image: crusher13,
    badge: 'Zero Maintenance'
  }
]

function IndustrySection() {
  return (
    <section id="top-products" className="py-24 bg-[#151921] border-t border-b border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#0D0F12] bg-[#FFC000] font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-md">
            FLAGSHIP PRODUCT SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Our Featured <span className="text-[#FFC000]">Engineering Products</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Engineered at our state-of-the-art Mandideep production facility in strict compliance with standard Indian IS quality norms.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((item, idx) => (
            <div
              key={idx}
              className="group bg-[#0D0F12] border border-gray-800 hover:border-[#FFC000]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-80"></div>
                  
                  <span className="absolute top-3 left-3 bg-[#FFC000] text-[#0D0F12] text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[10px] bg-black/80 backdrop-blur-sm text-gray-300 px-2.5 py-1 rounded font-bold border border-gray-800">
                    {item.capacity}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="text-[11px] font-bold text-[#FFC000] uppercase tracking-wider">{item.category}</div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FFC000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0 border-t border-gray-800/50 mt-4 flex items-center justify-between">
                <a
                  href="#products"
                  className="text-xs font-bold text-[#FFC000] hover:text-yellow-400 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <span>View Full Technical Specs</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndustrySection