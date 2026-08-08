const industries = [
  {
    title: 'RMC (Ready Mix Concrete)',
    desc: 'Heavy-duty cement silos, bulker feeding blowers, and screw conveyors for RMC batching plants.',
    icon: '🏗️',
  },
  {
    title: 'Road Contractor / Builder',
    desc: 'Mobile skid platforms, aggregate screening meshes, and storage silos for highway & infrastructure projects.',
    icon: '🛣️',
  },
  {
    title: 'AAC Block Manufacturer',
    desc: 'High-durability flyash silos and precision accessories engineered for AAC block manufacturing lines.',
    icon: '🧱',
  },
  {
    title: 'Flyash Brick Manufacturer',
    desc: 'Bulk storage flyash silos, vibratory bin aerators, and material handling systems for brick units.',
    icon: '🏭',
  },
  {
    title: 'Precast Industry',
    desc: 'Custom engineered silos, butterfly valves, and feeding systems tailored for precast concrete plants.',
    icon: '🏢',
  },
  {
    title: 'Crusher Mining',
    desc: 'Anti-clog wiremesh, Knapex wiremesh, Vibro motors, insert plates, and crusher efficiency systems.',
    icon: '⛏️',
  },
]

function IndustrySection() {
  return (
    <section id="industries" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-[#0A0A0A] bg-[#F7C900] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            INDUSTRIES SERVED
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
            Tailored Engineering for Key Sectors
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            VAK Group manufactures specialized industrial solutions designed for heavy infrastructure, ready mix concrete, and quarry mining.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              <a
                href="https://wa.me/919977003608"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#0A0A0A] hover:text-[#F7C900] uppercase tracking-wider flex items-center gap-1"
              >
                Enquire Industry Specs ➔
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndustrySection