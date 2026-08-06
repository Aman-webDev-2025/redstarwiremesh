const newsData = [
  {
    title: 'AIMEX AUSTRALIA',
    date: 'Aug. 10, 2025',
    image: 'https://www.redstarwiremesh.com/data/watermark/main/20250810/68983a8a5968b_.webp',
    summary: 'Red Star Wire Mesh exhibited high-performance screening solutions at the Asia-Pacific International Mining Exhibition in Australia.',
  },
  {
    title: 'Red Star Wire Mesh Expands Production Line',
    date: 'Jul. 22, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    summary: 'To meet growing demand, Red Star has commissioned automated heavy-duty weaving looms.',
  },
  {
    title: 'Trends in Screening Media 2025',
    date: 'Jun. 15, 2025',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    summary: 'Self-cleaning harp screens and polyurethane composite media continue rapid adoption.',
  },
]

function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Latest News</h2>
          <p className="text-gray-600 max-w-[700px] mx-auto text-sm">
            We regularly share updates on our factory operations, industry trends, and global exhibitions with customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white rounded p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded mb-4"
                />
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
              </div>
              <div className="text-xs text-[#ea6622] font-semibold border-t pt-3">
                📅 {item.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default NewsSection
