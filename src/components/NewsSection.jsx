function NewsSection() {
  const newsList = [
    {
      title: 'AIMEX AUSTRALIA Mining Exhibition Showcase',
      date: 'Aug 10, 2025',
      image: 'https://www.redstarwiremesh.com/data/watermark/main/20250810/68983a8a5968b_.webp',
      summary: 'Red Star Wire Mesh showcased next-gen self-cleaning harp screens and polyurethane panels at AIMEX Australia.',
      category: 'Exhibition',
    },
    {
      title: 'Expansion of Automated Heavy-Duty Weaving Line',
      date: 'Jul 22, 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      summary: 'Commissioned new high-speed hydraulic weaving looms to double output capacity for North American export orders.',
      category: 'Company News',
    },
    {
      title: '2025 Trends in Aggregate Screening Efficiency',
      date: 'Jun 15, 2025',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      summary: 'Self-cleaning screens and composite polyurethane media adoption rises across European and Australian quarries.',
      category: 'Industry Trends',
    },
  ]

  return (
    <section id="news" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-600 font-extrabold text-xs tracking-widest uppercase">
            COMPANY UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest News & Global Exhibitions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Regular updates on our manufacturing plant operations, international mining expos, and screen media technological innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-xs font-semibold text-amber-600">
                    📅 {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a href="#contact" className="text-amber-600 font-bold text-xs hover:underline">
                  Read Article ➔
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default NewsSection
