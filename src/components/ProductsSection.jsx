import { useState } from 'react'

function ProductsSection() {
  const [activeTab, setActiveTab] = useState('concrete')

  const concreteProducts = [
    {
      name: 'Silo Tank',
      desc: 'Heavy-duty storage tank with Ladder, Feed Pipe, Handrail, Tank Body & Reinforced Legs.',
      icon: '🛢️',
    },
    {
      name: 'Silo Accessories',
      desc: 'Top Air Filter, Bottom Air Filter, Butterfly Valve, Pressure Relief Valve & Vibratory Bin Aerators.',
      icon: '⚙️',
    },
    {
      name: 'Bulker Feeding System',
      desc: 'Roots blower feeding system engineered for fast, efficient pneumatic cement bulker loading.',
      icon: '🚚',
    },
    {
      name: 'Screw Conveyor',
      desc: 'High-torque cement screw conveyors available in 168 mm ID & 219 mm ID models.',
      icon: '🌀',
    },
    {
      name: 'Skid Platform & Spares',
      desc: 'Heavy structural skid platforms for quick site deployment and complete replacement spares.',
      icon: '🏗️',
    },
  ]

  const crusherProducts = [
    {
      name: 'Anti Clog Wiremesh & Buster',
      desc: 'Self-cleaning anti-clogging screen mesh designed to eliminate blinding in moist screening.',
      icon: '🕸️',
    },
    {
      name: 'Knapex Wiremesh',
      desc: 'High-tensile manganese steel woven wire mesh for heavy quarry & mining screen decks.',
      icon: '⛏️',
    },
    {
      name: 'Crusher Efficiency Improvement System',
      desc: 'Integrated system optimizing material flow, reducing recirculating loads and wear.',
      icon: '📈',
    },
    {
      name: 'Vibro Motor & Geared Motor',
      desc: 'Heavy-duty vibrating motors and industrial gearboxes for continuous screen deck operation.',
      icon: '⚡',
    },
    {
      name: 'Opel Make Rollers & Motorised Pulley',
      desc: 'Precision conveyor rollers, motorized pulleys, magnetic separators, insert plates & cable trays.',
      icon: '🔄',
    },
  ]

  const activeList = activeTab === 'concrete' ? concreteProducts : crusherProducts

  return (
    <section id="products" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="bg-[#2F353B] text-[#F7C900] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            PRODUCT RANGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
            Industrial Equipment & Screening Solutions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose between Concrete/Silo equipment and Crusher/Wire Mesh product lines.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('concrete')}
            className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'concrete'
                ? 'bg-[#F7C900] text-[#0A0A0A] shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🏗️ Concrete & Silo Category
          </button>
          <button
            onClick={() => setActiveTab('crusher')}
            className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${
              activeTab === 'crusher'
                ? 'bg-[#F7C900] text-[#0A0A0A] shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ⛏️ Crusher & Wire Mesh Category
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeList.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <a
                href="https://wa.me/919977003608"
                target="_blank"
                rel="noreferrer"
                className="bg-[#2F353B] text-white hover:bg-[#F7C900] hover:text-[#0A0A0A] font-bold py-2.5 px-4 rounded text-xs uppercase tracking-wider text-center transition-colors"
              >
                [+ Buy Product] Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProductsSection
