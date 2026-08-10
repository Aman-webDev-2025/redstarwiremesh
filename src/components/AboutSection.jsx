import { useState } from 'react'

function AboutSection() {
  const [activePillar, setActivePillar] = useState('value')

  const pillars = {
    value: {
      title: 'Value (V) — Economic & Structural Assets',
      subtitle: 'Preserving Client Capital Over Decades',
      text: 'Value at VAK Group means optimizing the total cost of ownership for our industrial clients. We do not just build off-the-shelf products; we engineer industrial security. By selecting high-grade raw materials (IS 2062 Grade Steel Plates) and integrating structurally sound configurations, our silos and wire meshes outlast standard market alternatives, directly preserving client capital over decades of heavy deployment.',
      icon: 'fa-solid fa-coins',
      points: [
        'Optimized Total Cost of Ownership (TCO)',
        'Heavy-gauge IS 2062 certified structural steel plate',
        'Custom drawing & structural engineering for every site case'
      ]
    },
    attitude: {
      title: 'Attitude (A) — Uncompromising Service & Promise Delivery',
      subtitle: 'Zero-Excuse Mindset & On-Time Execution',
      text: 'Attitude at VAK Group is defined by an absolute commitment to client success, built on the core principle that the customer is always right. We embrace a resilient, deeply proactive service attitude where every possible effort is made to ensure that the promises we make are flawlessly fulfilled. No matter how complex the engineering or operational challenge, our team works with a zero-excuse mindset to deliver exactly what was agreed upon, on time, every single time.',
      icon: 'fa-solid fa-shield-halved',
      points: [
        'Flawless promise fulfillment & deadline commitment',
        'Customer-first zero-excuse problem resolution',
        'Direct phone & WhatsApp technical support lines'
      ]
    },
    knowledge: {
      title: 'Knowledge (K) — Continuous Training & Engineering Excellence',
      subtitle: 'World-Class Technical Expertise',
      text: 'Knowledge at VAK Group is anchored in our core belief of imparting continuous, rigorous technical training to our workforce. This constant development empowers our team with up-to-date engineering expertise, enabling them to design and build highly cost-effective, long-lasting industrial products. Furthermore, this deep technical knowledge ensures we provide exceptional, reliable after-sales support over the entire asset lifecycle.',
      icon: 'fa-solid fa-graduation-cap',
      points: [
        'Continuous workforce training embedded in corporate DNA',
        'Up-to-date manufacturing technologies & CNC precision',
        'Expert after-sales technical maintenance support'
      ]
    }
  }

  return (
    <section id="about" className="py-24 bg-[#0D0F12] border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Main Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest">
              <i className="fa-solid fa-landmark"></i>
              <span>About VAK Group</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
              Central India's Premier <span className="text-[#F7C900]">Manufacturing Force</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              VAK Group stands as a premier manufacturing and industrial engineering force in Central India, specializing in high-durability material handling and advanced bulk storage infrastructures. Established in 2013, we have scaled operations to become a leading manufacturer and supplier of heavy-duty solutions, including Cement and Fly Ash Silos, high-durability woven wire mesh screens, Bulker Feeding Root Blowers, and precision silo accessories.
            </p>

            <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
              Every product is engineered at our state-of-the-art production facility in Mandideep Industrial Area, utilizing quality-approved materials and undergoing rigorous testing to ensure strict compliance with standard IS quality norms.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 bg-[#151921] border border-gray-800 rounded-xl space-y-1">
                <div className="text-2xl font-black text-[#F7C900] font-display">IS Quality Norms</div>
                <div className="text-xs text-gray-400 font-semibold">Strict Standard Compliance</div>
              </div>
              <div className="p-4 bg-[#151921] border border-gray-800 rounded-xl space-y-1">
                <div className="text-2xl font-black text-white font-display">100+ Corporate Clients</div>
                <div className="text-xs text-gray-400 font-semibold">Tier-1 Contractors & RMC</div>
              </div>
            </div>
          </div>

          {/* Vision, Mission & Quality Framework Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Vision Card */}
            <div className="p-6 bg-[#151921] border border-gray-800 hover:border-[#F7C900]/40 rounded-2xl space-y-3 transition-colors shadow-lg">
              <div className="flex items-center space-x-3 text-[#F7C900]">
                <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 flex items-center justify-center text-lg border border-[#F7C900]/30">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3 className="text-xl font-bold font-display text-white">Corporate Vision</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Leadership in the cement silo industry and screen wire meshes, achieved through innovative, sustainable infrastructure solutions and anchored by a world-class, empowered workforce dedicated to absolute customer satisfaction.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 bg-[#151921] border border-gray-800 hover:border-[#F7C900]/40 rounded-2xl space-y-3 transition-colors shadow-lg">
              <div className="flex items-center space-x-3 text-[#F7C900]">
                <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 flex items-center justify-center text-lg border border-[#F7C900]/30">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-bold font-display text-white">Corporate Mission</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To maximize customer satisfaction as our ultimate aim by delivering high-quality products, deploying the latest manufacturing technologies, and nurturing a highly motivated, continuously trained team of professionals.
              </p>
            </div>

            {/* Quality Assurance Framework */}
            <div className="p-6 bg-[#151921] border border-gray-800 hover:border-[#F7C900]/40 rounded-2xl space-y-3 transition-colors shadow-lg">
              <div className="flex items-center space-x-3 text-[#F7C900]">
                <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 flex items-center justify-center text-lg border border-[#F7C900]/30">
                  <i className="fa-solid fa-clipboard-check"></i>
                </div>
                <h3 className="text-xl font-bold font-display text-white">Quality Assurance Framework</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Meticulous workforce training backed by multi-phase quality inspections approved by top-tier industrial buyers, ensuring flawless structural stability and wear performance.
              </p>
            </div>

          </div>

        </div>

        {/* Interactive Tri-Pillar Mindset Showcase */}
        <div className="bg-[#151921] border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative glow-gold">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black text-[#F7C900] uppercase tracking-widest">
              Core Enterprise Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Driven By Our <span className="text-[#F7C900]">Tri-Pillar Mindset (V-A-K)</span>
            </h3>
          </div>

          {/* Pillar Selector Buttons */}
          <div className="flex justify-center gap-3 mb-10">
            {Object.keys(pillars).map((key) => (
              <button
                key={key}
                onClick={() => setActivePillar(key)}
                className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center space-x-2 border ${
                  activePillar === key
                    ? 'bg-[#F7C900] text-[#0D0F12] border-[#F7C900] shadow-md'
                    : 'bg-[#0D0F12] text-gray-400 border-gray-800 hover:text-white'
                }`}
              >
                <i className={pillars[key].icon}></i>
                <span>{key.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Active Pillar Card Display */}
          <div className="bg-[#0D0F12] border border-gray-800 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[#F7C900] text-xs font-bold uppercase">
                <i className={pillars[activePillar].icon}></i>
                <span>{pillars[activePillar].subtitle}</span>
              </div>
              <h4 className="text-2xl font-bold font-display text-white">
                {pillars[activePillar].title}
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {pillars[activePillar].text}
              </p>
              <div className="pt-3 space-y-2">
                {pillars[activePillar].points.map((pt, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-gray-200">
                    <i className="fa-solid fa-circle-check text-[#F7C900]"></i>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-[#151921] border border-gray-800 rounded-xl text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-3xl border border-[#F7C900]/30">
                <i className={pillars[activePillar].icon}></i>
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">VAK Core Pillar</div>
              <div className="text-xs text-gray-400">Standardized across all Mandideep & Indore operations</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection