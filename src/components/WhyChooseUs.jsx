const reasons = [
  {
    title: 'Longer Service Life & More Stable Performance',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/693141e2c4d7e_.webp',
    text: 'Red Star Wire Mesh places strong emphasis on selecting premium raw materials and ensuring strict quality control. Our screens last significantly longer than typical factory screens.',
  },
  {
    title: 'Strong Supply Chain Capability & Reliable Delivery',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/6931420eac92a_.webp',
    text: 'Red Star has a complete in-house production system and ample inventory, ensuring fast and reliable deliveries—even for urgent orders.',
  },
  {
    title: 'Custom Solutions & On-Site Performance Upgrades',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20251204/69314226e3328_.webp',
    text: 'Red Star not only provides standard screens, but also delivers customized solutions based on customer requirements.',
  },
]

function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#ea6622] font-semibold text-sm">WHY CHOOSE US</span>
            <h2 className="text-3xl font-bold mt-1">Few Reasons Why You Choose Us.</h2>
          </div>
          <button className="bg-[#ea6622] text-white px-6 py-2 rounded text-sm font-medium">
            View More
          </button>
        </div>

        <div className="space-y-8">
          {reasons.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded grid grid-cols-1 md:grid-cols-2 gap-6 items-center border border-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded"
              />
              <div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 italic leading-relaxed">• {item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs