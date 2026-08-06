function AdvantageSection() {
  const advantageList = [
    {
      title: 'Complete Product Range',
      desc: 'One-stop purchasing for metal woven wire screens, self-cleaning screens, polyurethane panels, perforated plates, and accessories.',
    },
    {
      title: 'Global Export Reputation',
      desc: 'Exported to over 70 countries including US, Canada, Australia, Germany, and South Africa with 45%+ customer return rate.',
    },
    {
      title: 'Dedicated Shipping & Logistics',
      desc: 'Professional logistics specialists ensuring safe export packaging, sea freight custom clearance, and on-time port delivery.',
    },
    {
      title: 'Technical R&D & 18 Patents',
      desc: 'Provincialwear-resistant material engineering center holding 18 national patents and participating in China screen standards drafting.',
    },
    {
      title: 'Triple ISO Quality Certifications',
      desc: 'Certified with ISO9001 (Quality), ISO14001 (Environmental), and ISO45001 (Occupational Health & Safety) systems.',
    },
    {
      title: '24/7 Technical Customer Service',
      desc: 'Regional service hubs in Shijiazhuang, Beijing, Zhengzhou, Hangzhou, and Shanghai offering instant online video consultations.',
    },
  ]

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-500 font-extrabold text-xs tracking-widest uppercase">
            CERTIFIED EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Manufacturing Strengths
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Backed by international quality certifications, patented screen design innovations, and overseas distribution hubs.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantageList.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors space-y-3"
            >
              <div className="w-10 h-10 bg-amber-600/20 text-amber-500 rounded-lg flex items-center justify-center font-bold text-lg">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Feature Image Banner */}
        <div className="mt-12 bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-white">
              One-Stop Purchasing Solution for All Screening Media
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              From heavy manganese wire mesh to modular polyurethane dewatering screen panels, Red Star provides complete customized screen media engineered to match all vibrating deck specifications.
            </p>
          </div>
          <div className="lg:col-span-5 h-56 overflow-hidden rounded-xl">
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250515/68259365781bb_.webp"
              alt="Screening Solution"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AdvantageSection
