function PartnerSection() {
  const partnerLogos = [
    'https://www.redstarwiremesh.com/data/watermark/main/20250515/6825946040131_.webp',
    'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1acabe29_.webp',
    'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1acdd010_.webp',
    'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad0ea31_.webp',
    'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad424f4_.webp',
    'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad7f1a8_.webp',
  ]

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Trusted Partner & Global Exporter
        </h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Supplying high-wear screening media to over <span className="text-amber-600 font-bold">70 countries</span> worldwide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 pt-6 items-center">
          {partnerLogos.map((url, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-lg h-20 flex items-center justify-center">
              <img src={url} alt="Partner" className="max-h-10 object-contain grayscale hover:grayscale-0 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
