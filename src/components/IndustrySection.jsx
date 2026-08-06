const industryList = [
  {
    name: 'Mining Industry',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250514/68242c5f250bc_.webp',
    description: 'Mine screen is the core link connecting mining, mineral processing and resource utilization.',
  },
  {
    name: 'Construction',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef045257e1_.webp',
    description: 'Mineral screens play a vital role in the construction industry and aggregate production.',
  },
  {
    name: 'Energy Sector',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef01d889d7_.webp',
    description: 'The application of mining screens in the energy field is extensive and critical.',
  },
  {
    name: 'Industrial Applications',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef0307e7b2_.webp',
    description: 'Mining screens are used throughout raw material processing and waste recycling.',
  },
  {
    name: 'Recycling Industry',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250815/689ef0570e9f4_.webp',
    description: 'Mineral screening machines are essential key equipment in the recycling industry.',
  },
  {
    name: 'Water Treatment',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250909/68bfd375309a1_.webp',
    description: 'Mineral screens play a vital role in physical screening and impurity interception.',
  },
]

function IndustrySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-[#090909] mb-3">Industry</h2>
        <p className="text-gray-600 mb-10 max-w-[800px]">
          Red Star Wire Mesh serves the global mining and aggregate industries, covering mining, coal, quarry, chemical, metallurgical and other sectors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industryList.map((item, index) => (
            <div key={index} className="bg-[#f5f5f5] p-4 rounded hover:shadow-md transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="text-right text-[#ea6622] font-bold">➜</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default IndustrySection