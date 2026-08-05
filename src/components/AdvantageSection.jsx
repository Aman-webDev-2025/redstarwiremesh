const tabs =[
  'Solution',
  'Reputation',
  'Transportation',
  'R&D Team',
  'Certification',
  'Complete Range',
  'After-sales Service',
]

function AdvantageSection(){
  return(
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center mb-8">Our Advantage</h2>

        {/* Advantage Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((name, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-[#ea6622] transition-colors cursor-pointer"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Advantage Box */}
        <div className="bg-gray-800 p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Red Star produces a wide range of screens, providing customers with a one-stop purchasing solution
            </h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>(1) Red Star has a complete range of screens, providing customers with a one-stop purchasing solution.</p>
              <p>(2) Red Star can produce various specifications of wire woven screens, self-cleaning screens, polyurethane screen plates, perforated screen plates, stainless steel screens.</p>
              <p>(3) Among screen manufacturers in China, few companies can achieve such a rich product line as Red Star.</p>
            </div>
          </div>

          <div>
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250515/68259365781bb_.webp"
              alt="Solution Image"
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default AdvantageSection
