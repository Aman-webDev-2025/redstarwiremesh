const chooseReasons = [
  {
    title: 'Longer Service Life & Wear Resistance',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/693141e2c4d7e_.webp',
    bullets: [
      'High-tensile manganese steel and premium polyurethane materials.',
      'Significantly lower downtime in high-abrasion ore and quarry environments.',
      'Consistent mesh opening stability prevents clogging and blinding.',
    ],
  },
  {
    title: 'Complete Supply Chain & Fast Delivery',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/6931420eac92a_.webp',
    bullets: [
      'In-house weaving, polyurethane molding, and raw material inventory.',
      'Reliable international shipping for urgent order turnarounds.',
      'Prevent unplanned plant shutdowns waiting for replacement screens.',
    ],
  },
  {
    title: 'Custom Engineering & On-Site Upgrades',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/69314226e3328_.webp',
    bullets: [
      'Tailored wire diameter optimization and increased open area.',
      'Self-cleaning harp screen configurations for moist sticky materials.',
      'Custom hook designs fitting all major vibrating screen decks worldwide.',
    ],
  },
]

function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-600 font-extrabold text-xs tracking-widest uppercase">
            WHY RED STAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Advantages for Quarry & Mining Operators
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Delivering engineered screening media built for extreme fatigue resistance, maximum throughput, and cost savings per ton.
          </p>
        </div>

        <div className="space-y-10">
          {chooseReasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 relative overflow-hidden rounded-xl h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <span className="text-amber-600 font-bold mr-2">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs