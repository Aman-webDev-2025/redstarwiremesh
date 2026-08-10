import { useState } from 'react'
import ProductModal from './ProductModal'

import mainImage2 from '../assets/extracted/main_image2.png'
import mainImage4 from '../assets/extracted/main_image4.jpeg'
import mainImage5 from '../assets/extracted/main_image5.png'

import silo2 from '../assets/extracted/silo_img_2.jpg'
import silo4 from '../assets/extracted/silo_img_4.jpg'
import silo7 from '../assets/extracted/silo_img_7.jpg'
import silo8 from '../assets/extracted/silo_img_8.jpg'
import silo9 from '../assets/extracted/silo_img_9.jpg'
import silo11 from '../assets/extracted/silo_img_11.jpg'
import silo12 from '../assets/extracted/silo_img_12.jpg'
import silo13 from '../assets/extracted/silo_img_13.jpg'

import crusher1 from '../assets/extracted/crusher_img_1.jpg'
import crusher2 from '../assets/extracted/crusher_img_2.jpg'
import crusher3 from '../assets/extracted/crusher_img_3.jpg'
import crusher4 from '../assets/extracted/crusher_img_4.jpg'
import crusher5 from '../assets/extracted/crusher_img_5.jpg'
import crusher6 from '../assets/extracted/crusher_img_6.jpg'
import crusher7 from '../assets/extracted/crusher_img_7.jpg'
import crusher9 from '../assets/extracted/crusher_img_9.jpg'
import crusher11 from '../assets/extracted/crusher_img_11.jpg'
import crusher13 from '../assets/extracted/crusher_img_13.jpg'
import crusher14 from '../assets/extracted/crusher_img_14.jpg'
import crusher16 from '../assets/extracted/crusher_img_16.jpg'
import crusher19 from '../assets/extracted/crusher_img_19.jpg'
import crusher22 from '../assets/extracted/crusher_img_22.jpg'
import crusher24 from '../assets/extracted/crusher_img_24.jpg'
import crusher27 from '../assets/extracted/crusher_img_27.jpg'
import crusher28 from '../assets/extracted/crusher_img_28.jpg'

const productsData = [
  // CATEGORY: SILOS & BULK STORAGE
  {
    id: 'cement-silo',
    category: 'Silos & Storage',
    title: 'Cement & Fly Ash Storage Silo',
    tag: 'Best Seller',
    image: mainImage4,
    additionalImages: [silo2, silo13, mainImage2],
    description: 'High-durability bolted and welded heavy-gauge steel silos engineered for cement, fly ash, and slag storage. Manufactured under strict IS quality compliance with customized capacities from 50 Tons to 500 Tons.',
    specs: [
      'Capacities: 50T, 100T, 150T, 200T, 300T, 500T',
      'Structural design: Heavy-duty IS 2062 Grade Steel Plate',
      'Accessories included: Manhole, ladder, safety railing, level indicators',
      'CAD site drawing provided for every installation case',
      'Anti-corrosion primer & industrial weather-resistant coating'
    ],
    price: 'Custom Project Quote',
    life: '25+ Years Structural Life'
  },
  {
    id: 'bulker-feeding',
    category: 'Silos & Storage',
    title: 'Bulker Feeding Root Blower System',
    tag: 'High Pressure',
    image: silo7,
    additionalImages: [silo8, silo11],
    description: 'Heavy-duty pneumatic bulker feeding blower unit designed for continuous pneumatic conveying of cement and fly ash into storage silos at maximum efficiency.',
    specs: [
      'Roots Blower with heavy-duty cast iron housing',
      'Includes air filter, check valve, pressure relief valve & silencer',
      'Pneumatic transfer rate: 20 to 60 Tons per hour',
      'Energy efficient motor with thermal protection'
    ],
    price: 'Request Spec Quote',
    life: '10+ Years Heavy Duty'
  },
  {
    id: 'skid-platform',
    category: 'Silos & Storage',
    title: 'Skid Platform Heavy Storage Base',
    tag: 'Modular Unit',
    image: silo9,
    additionalImages: [silo12],
    description: 'Heavy structural steel skid platform base engineered for rapid site deployment, mobility, and foundation stabilization for silos and bulk handling units.',
    specs: [
      'Heavy ISMB structural steel beam construction',
      'Modular bolt-on layout for rapid site assembly',
      'Integrated load cell mounting points',
      'Custom site drawings and structural load analysis included'
    ],
    price: 'Based on Dimensions',
    life: '20+ Years Life'
  },
  {
    id: 'silo-accessories',
    category: 'Silos & Storage',
    title: 'Cosben / WAM Make Silo Accessories',
    tag: 'Italian Standard',
    image: silo4,
    additionalImages: [mainImage5, silo11],
    description: 'Original Cosben / WAM make Italian standard silo safety and automation accessories including 273mm ID Butterfly Valves, Pressure Relief Valves, Aeration Pads, Level Sensors, Solenoid Pulse Dust Collectors, and Bin Activators.',
    specs: [
      'Butterfly Valve: 273mm ID manual/pneumatic operation',
      'Pressure Relief Valve: Spring loaded overpressure & vacuum relief',
      'Aeration Fluidization Pads: Prevent rat-holing and material bridging',
      'Level Indicators: Rotary paddle type high/low level sensors',
      'Vibrating Bin Activator & Solenoid Pulse Dust Collector'
    ],
    price: 'Catalog Pricing Available',
    life: 'Original OEM Guarantee'
  },

  // CATEGORY: WIRE MESH & Anti-CLOG
  {
    id: 'anti-clog-mesh',
    category: 'Wire Mesh & Screens',
    title: 'Anti-Clog Wire Mesh Screen (PU Strip)',
    tag: '+25% to 50% Output',
    image: crusher1,
    additionalImages: [crusher2, crusher3],
    description: 'Revolutionary screening technology built with flexible Polyurethane (PU) strips and individual self-vibrating wires. Eliminates material blinding and sticky damp aggregate clogging completely.',
    specs: [
      'Individual wire vibration stops material clogging instantly',
      'Production output boost: 25% to 50% increase in screen yield',
      'Eliminates manual screen clearing downtime',
      'Aperture sizes: Customized from 2mm to 45mm',
      'Expected Service Life: 6 to 9 Months heavy abrasive wear'
    ],
    price: '₹25,000 / Screen (Approx)',
    life: '6 to 9 Months Continuous'
  },
  {
    id: 'anti-clog-buster',
    category: 'Wire Mesh & Screens',
    title: 'Anti-Clog Buster (Auto Hammering System)',
    tag: 'Auto Vibrating',
    image: crusher4,
    additionalImages: [crusher5],
    description: 'Automated mechanical hammering screen attachment that vibrates dynamically with the vibrating screen body, preventing material build-up in high-moisture aggregate screening.',
    specs: [
      'Auto-hammering kinetic action powered by screen vibration',
      'Yield improvement: 10% to 50% production capacity boost',
      'Easy clamp-on installation on existing screen decks',
      'Heavy wear-resistant alloy hammer heads'
    ],
    price: '₹10,000 / Meter',
    life: '6 to 9 Months'
  },
  {
    id: 'knapex-wiremesh',
    category: 'Wire Mesh & Screens',
    title: 'Knapex High Tensile Woven Wire Mesh',
    tag: 'High Tensile Steel',
    image: crusher6,
    additionalImages: [crusher7],
    description: 'Precision-woven high tensile spring steel wire mesh screens engineered for high abrasive quarrying, crushed stone screening, and mining decks.',
    specs: [
      'Material: High Carbon Spring Steel (65Mn / High Tensile)',
      'Accurate mesh opening size for exact aggregate grading',
      'Hook edge types: Standard 45 degree, overlap, wrapped edge',
      'Extremely high tensile strength resisting wire deformation'
    ],
    price: 'Direct Factory Rate',
    life: 'Long Abrasive Life'
  },

  // CATEGORY: CRUSHER & CONVEYOR SYSTEMS
  {
    id: 'crusher-efficiency-system',
    category: 'Crusher & Machinery',
    title: 'Crusher Efficiency Improvement System',
    tag: 'Mobile App Telemetry',
    image: crusher9,
    additionalImages: [crusher11],
    description: 'Smart IoT telemetry system that monitors conveyor belt speeds, motor load, feed rate, and aggregate throughput in real-time, sending instant analytics to your mobile app.',
    specs: [
      'Real-time mobile app telemetry & alert notifications',
      'Prevents belt slippage, crusher choke up & motor overload',
      'Includes 1 Year Free Software Maintenance',
      'Pricing: 1st Conveyor ₹2.0 Lakh | Subsequent Conveyors ₹1.5 Lakh'
    ],
    price: '₹2.0 Lakh / Conveyor',
    life: 'Software Subscription Included'
  },
  {
    id: 'overband-magnet',
    category: 'Crusher & Machinery',
    title: 'Overband Suspended Magnetic Separator',
    tag: 'Zero Maintenance',
    image: crusher13,
    additionalImages: [crusher14],
    description: 'Heavy magnetic separator installed above conveyor belts before metal detectors to capture tramp iron, rebar, and metal debris, preventing catastrophic cone crusher damage.',
    specs: [
      'Zero maintenance permanent magnetic circuit',
      '500mm - 650mm belt size model: ₹76,600',
      '800mm belt size model: ₹1,60,000',
      'Single time investment protecting millions in plant machinery'
    ],
    price: '₹76,600 to ₹1,60,000',
    life: 'Permanent Magnetic Life'
  },
  {
    id: 'opel-rollers',
    category: 'Crusher & Machinery',
    title: 'Opel Heavy Duty Conveyor Rollers',
    tag: '1 Year Replacement',
    image: crusher16,
    additionalImages: [crusher19],
    description: 'Coimbatore Opel make dust-proof heavy conveyor rollers fitted with original NBC bearings, EN8 steel shafts, and ERW steel piping.',
    specs: [
      'Bearings: NBC Make heavy-duty precision ball bearings',
      'Sealing: Multi-labrynth dust-proof and moisture-proof seal',
      'Shaft: Precision machined EN8 carbon steel',
      '1 Year Full Replacement Warranty'
    ],
    price: 'Wholesale Industrial Rate',
    life: '1 Year Guarantee'
  },
  {
    id: 'pulleys-motors',
    category: 'Crusher & Machinery',
    title: 'Motorised Pulleys & Vibro Motors',
    tag: 'Heavy Duty Power',
    image: crusher22,
    additionalImages: [crusher24],
    description: 'Heavy duty motorised conveyor head pulleys, geared motors, and high-frequency vibro motors designed for continuous screen deck vibration and heavy conveyor drives.',
    specs: [
      'Motorised Pulleys: Hermetically sealed internal drive unit',
      'Vibro Motors: Adjustable eccentric weights for amplitude tuning',
      'IP65 water & dust resistant enclosure',
      'High starting torque heavy copper winding'
    ],
    price: 'Quotation On Demand',
    life: 'Heavy Duty 5+ Years'
  },
  {
    id: 'steel-bridges-trays',
    category: 'Crusher & Machinery',
    title: 'Steel Bridges, Insert Plates & Cable Trays',
    tag: 'Structural Grade',
    image: crusher27,
    additionalImages: [crusher28],
    description: 'Heavy structural steel bridges for plant overhead crossings, heavy steel insert plates for civil foundations, and perforated cable tray systems.',
    specs: [
      'Steel Bridge: Basic model pricing starting at ₹12.5 Lakh',
      'Insert Plates: ₹85 / kg industrial structural steel',
      'Cable Tray 300mm: ₹9,900 / meter',
      'Cable Tray 600mm: ₹10,440 / meter'
    ],
    price: '₹85/kg to ₹12.5 Lakh',
    life: 'Structural Grade 30+ Yrs'
  }
]

function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const categories = ['All', 'Silos & Storage', 'Wire Mesh & Screens', 'Crusher & Machinery']

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="products" className="py-24 bg-[#0D0F12] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest mb-3">
              <i className="fa-solid fa-boxes-stacked"></i>
              <span>Engineering Product Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Heavy Duty Industrial <span className="text-[#F7C900]">Solutions</span>
            </h2>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm"></i>
            <input
              type="text"
              placeholder="Search silos, wiremesh, motors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151921] border border-gray-800 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#F7C900] transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-[#F7C900] text-[#0D0F12] border-[#F7C900] shadow-lg glow-gold'
                  : 'bg-[#151921] text-gray-400 border-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#151921] border border-gray-800 hover:border-[#F7C900]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative h-56 overflow-hidden bg-[#0D0F12]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151921] via-transparent to-transparent opacity-80"></div>
                  
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#F7C900] text-[#0D0F12] text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 text-[10px] bg-black/70 backdrop-blur-sm text-gray-300 px-2.5 py-1 rounded font-semibold border border-gray-800">
                    {product.category}
                  </span>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#F7C900] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Highlights Bullet Summary */}
                  <div className="pt-2 space-y-1.5 text-xs text-gray-300">
                    {product.specs.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <i className="fa-solid fa-circle-check text-[#F7C900] text-[10px]"></i>
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0 border-t border-gray-800/50 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-500 uppercase font-semibold">Pricing</div>
                  <div className="text-xs font-bold text-[#F7C900]">{product.price}</div>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 bg-gray-800 hover:bg-[#F7C900] text-gray-200 hover:text-[#0D0F12] text-xs font-bold uppercase rounded-lg transition-all flex items-center space-x-1.5"
                >
                  <span>View Specs</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

export default ProductsSection
