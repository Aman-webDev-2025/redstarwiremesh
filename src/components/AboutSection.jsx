function AboutSection() {
  const statsList = [
    {
      num: '1989',
      label: 'Established Year',
      desc: 'Over 36 years of screen manufacturing experience',
      icon: 'https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc16e30c5_.webp',
    },
    {
      num: '70+',
      label: 'Export Countries',
      desc: 'Supplying North America, Europe, Australia & Africa',
      icon: 'https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc2381da1_.webp',
    },
    {
      num: '370+',
      label: 'Skilled Workforce',
      desc: 'Dedicated R&D engineers & technical support',
      icon: 'https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc3076cf8_.webp',
    },
    {
      num: '58,000 m²',
      label: 'Factory Area',
      desc: 'Heavy industrial manufacturing plant & warehouse',
      icon: 'https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc3dacca6_.webp',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-amber-100 text-amber-800 text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded">
              ABOUT RED STAR WIRE MESH
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Top 10 Global Mining Screen & Panel Manufacturer
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Red Star Wire Mesh Manufacturing Co., Ltd. focuses on engineering precision screen media for high-wear aggregate and mineral processing plants. Backed by state-of-the-art weaving looms, polyurethane molding facilities, and ISO-certified quality assurance systems.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Learn About Our Manufacturing Process ➔
              </a>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statsList.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-amber-500/50 transition-colors"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="h-10 mb-4 object-contain"
                />
                <div className="text-3xl font-extrabold text-amber-600 mb-1">
                  {stat.num}
                </div>
                <div className="text-base font-bold text-slate-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection