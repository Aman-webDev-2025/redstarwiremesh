const industryList = [
  {
    name: 'Mining Industry',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250514/68242c5f250bc_.webp',
    description: 'Mine screen is the core link connecting mining, mineral processing and resource utilization.',
    badge: 'Mineral Processing',
  },
  {
    name: 'Construction',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef045257e1_.webp',
    description: 'Mineral screens play a vital role in sand and gravel aggregate production and concrete prep.',
    badge: 'Sand & Aggregates',
  },
  {
    name: 'Energy Sector',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef01d889d7_.webp',
    description: 'Extensive application in coal processing, oil, gas, shale gas, and geothermal energy.',
    badge: 'Coal & Oil Gas',
  },
  {
    name: 'Industrial Applications',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef0307e7b2_.webp',
    description: 'Mining screens are used throughout raw material processing, manufacturing and sorting.',
    badge: 'Raw Material Processing',
  },
  {
    name: 'Recycling Industry',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef0570e9f4_.webp',
    description: 'Mineral screening machines enable efficient waste sorting, resource purification and reduction.',
    badge: 'Waste & Circular Economy',
  },
  {
    name: 'Water Treatment',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250909/68bfd375309a1_.webp',
    description: 'Physical screening, impurity interception and process protection in liquid separation.',
    badge: 'Filtration & Separation',
  },
]

function IndustrySection() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest block mb-2">
              SECTOR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Industries Served Worldwide
            </h2>
          </div>
          <p className="text-slate-600 max-w-xl text-sm leading-relaxed">
            Red Star Wire Mesh serves global mining, coal, quarrying, chemical, and metallurgical processing, delivering maximum screening throughput.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industryList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-600 font-semibold text-sm hover:text-amber-700 transition-colors"
                >
                  Learn More <span className="ml-1">➔</span>
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