const logos = [
  'https://www.redstarwiremesh.com/data/watermark/main/20250515/6825946040131_.webp',
  'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1acabe29_.webp',
  'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1acdd010_.webp',
  'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad0ea31_.webp',
  'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad424f4_.webp',
  'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef1ad7f1a8_.webp',
]

function PartnerSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Partner</h2>
        <p className="text-gray-600 mb-8 max-w-[700px] mx-auto text-sm">
          Our screens are supplied to over <span className="text-[#ea6622] font-semibold">70 countries</span> worldwide with 36 years of manufacturing experience.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
          {logos.map((url, index) => (
            <div key={index} className="p-3 border rounded bg-gray-50 flex items-center justify-center h-20">
              <img src={url} alt="Partner Logo" className="max-h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
