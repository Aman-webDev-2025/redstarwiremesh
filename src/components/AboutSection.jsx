function AboutSection(){
  const pillars =[
    {
      title: 'Value (Economic & Structural Assets)',
      text: 'Optimizing total cost of ownership. We engineer industrial security with high-grade raw materials and structurally sound configurations outlasting standard market alternatives.',
    },
    {
      title: 'Attitude (Uncompromising Service & Promise Delivery)',
      text: 'Customer-first philosophy with a zero-excuse mindset. Our team works proactively to ensure promises are flawlessly fulfilled on time, every single time.',
    },
    {
      title: 'Knowledge (Continuous Training & Excellence)',
      text: 'Deep domain expertise and continuous operational training empowering our workforce to design, build, and maintain high-durability industrial infrastructure.',
    },
  ]

  return(
    <section id="about" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Main Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="bg-[#2F353B] text-[#F7C900] text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
              ABOUT VAK GROUP
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] leading-tight">
              Premier Industrial Manufacturing & Engineering Force in Central India
            </h2>

            <p className="text-gray-600 leading-relaxed text-base">
              VAK Group stands as a premier manufacturing force specializing in high-durability material handling and advanced bulk storage infrastructures. Established in 2013, we have scaled operations to become a leading manufacturer of Cement Silos, Fly Ash Silos, Woven Wire Mesh Screens, Bulker Feeding Root Blowers, and precision silo accessories.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Every product is engineered at our state-of-the-art production facility, utilizing quality-approved materials and undergoing rigorous multi-phase testing in compliance with standard IS norms.
            </p>
          </div>

          {/* 4 Stat Boxes */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl font-black text-[#0A0A0A]">2013</div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-1">Established Year</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl font-black text-[#F7C900]">850+</div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-1">Happy Customers</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl font-black text-[#0A0A0A]">2</div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-1">Manufacturing Units</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <div className="text-3xl font-black text-[#0A0A0A]">3</div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-1">Offices (Bhopal, Indore, Raipur)</div>
            </div>
          </div>
        </div>

        {/* Tri-Pillar Mindset */}
        <div className="bg-[#2F353B] text-white p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl font-black text-center mb-10 text-[#F7C900]">
            Our Tri-Pillar Mindset (V-A-K)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="bg-[#0A0A0A] p-6 rounded-xl border border-gray-700">
                <h4 className="text-lg font-bold text-[#F7C900] mb-3">{p.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection