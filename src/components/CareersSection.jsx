function CareersSection() {
  const positions = [
    {
      title: 'Industrial Sales Executive',
      location: 'Central India (Bhopal / Indore / Mandideep)',
      type: 'Full-Time Heavy Engineering',
      desc: 'Experience in cement silos, heavy machinery, or aggregate wire mesh sales preferred.',
      icon: 'fa-solid fa-briefcase'
    },
    {
      title: 'Silo Structural Design Engineer',
      location: 'Mandideep Manufacturing Plant',
      type: 'Full-Time CAD & Structural',
      desc: 'Proficient in Auto-CAD, structural steel calculation, and IS quality standard compliance.',
      icon: 'fa-solid fa-drafting-compass'
    }
  ]

  return (
    <section id="careers" className="py-24 bg-[#0D0F12] border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest">
            <i className="fa-solid fa-user-gear"></i>
            <span>People & Culture DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Build Your Career With <span className="text-[#F7C900]">VAK Group</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We believe in developing, empowering, and elevating our people. Continuous technical and operational training is an essential part of our corporate DNA.
          </p>
        </div>

        {/* Culture & Training Values Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-[#151921] border border-gray-800 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-lg mb-2">
              <i className="fa-solid fa-[#F7C900] fa-graduation-cap"></i>
            </div>
            <h3 className="text-base font-bold text-white font-display">Continuous Technical Training</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Rigorous workforce development ensuring up-to-date engineering mastery.</p>
          </div>

          <div className="p-6 bg-[#151921] border border-gray-800 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-lg mb-2">
              <i className="fa-solid fa-[#F7C900] fa-people-roof"></i>
            </div>
            <h3 className="text-base font-bold text-white font-display">Empowered Workforce</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Zero-excuse service culture where initiative and innovation are elevated.</p>
          </div>

          <div className="p-6 bg-[#151921] border border-gray-800 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-lg mb-2">
              <i className="fa-solid fa-[#F7C900] fa-[#F7C900] fa-award"></i>
            </div>
            <h3 className="text-base font-bold text-white font-display">IS Quality Excellence</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Multi-phase quality inspection standards approved by top-tier industrial buyers.</p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {positions.map((pos, idx) => (
            <div
              key={idx}
              className="bg-[#151921] border border-gray-800 hover:border-[#F7C900]/50 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all shadow-lg"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#F7C900] text-[#0D0F12] text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
                    Open Position
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{pos.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display flex items-center">
                  <i className={`${pos.icon} text-[#F7C900] mr-2 text-base`}></i>
                  {pos.title}
                </h3>
                <p className="text-xs text-gray-400 flex items-center">
                  <i className="fa-solid fa-location-dot text-gray-500 mr-1.5"></i>
                  {pos.location}
                </p>
                <p className="text-xs text-gray-300">{pos.desc}</p>
              </div>

              <a
                href={`https://wa.me/919977003608?text=Hello%20VAK%20Group,%20I%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(pos.title)}%20position.`}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-6 bg-[#F7C900] hover:bg-yellow-400 text-[#0D0F12] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center space-x-2"
              >
                <span>Apply On WhatsApp</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CareersSection
