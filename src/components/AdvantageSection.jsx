function AdvantageSection(){
  const foundations =[
    {
      title: 'Corporate Vision',
      text: 'Leadership in the cement silo industry and screen wire meshes, achieved through innovative, sustainable infrastructure solutions and anchored by a world-class, empowered workforce.',
      icon: '👁️',
    },
    {
      title: 'Corporate Mission',
      text: 'To maximize customer satisfaction as our ultimate aim by delivering high-quality products, deploying the latest manufacturing technologies, and nurturing a continuously trained team.',
      icon: '🎯',
    },
    {
      title: 'People & Culture Policy',
      text: 'We believe in developing, empowering, and elevating our people. Continuous technical and operational training is an essential part of our corporate DNA.',
      icon: '👥',
    },
    {
      title: 'Quality Assurance Framework',
      text: 'Every product is engineered at our state-of-the-art facility, utilizing quality-approved materials and undergoing multi-phase quality inspections approved by top-tier buyers.',
      icon: '🔬',
    },
  ]

  return(
    <section className="py-20 bg-[#2F353B] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-[#F7C900] text-[#0A0A0A] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            CORPORATE FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The VAK Advantage
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our vision, mission, and quality standards guiding Central India's premier industrial manufacturing force.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foundations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] p-8 rounded-xl border border-gray-700 space-y-3 hover:border-[#F7C900] transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#F7C900]">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AdvantageSection
