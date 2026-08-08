function WhyChooseUs() {
  const reasons = [
    {
      title: 'Uncompromised Value',
      desc: 'High-grade raw materials and structurally sound designs optimize total cost of ownership.',
      icon: '💰',
    },
    {
      title: 'Absolute Promise Delivery',
      desc: 'Customer-first philosophy with a zero-excuse mindset to ensure promises are fulfilled on time.',
      icon: '🛡️',
    },
    {
      title: 'Continuous Training',
      desc: 'Technical and operational training is embedded in our DNA, empowering our workforce.',
      icon: '🎓',
    },
    {
      title: 'Meticulous Quality',
      desc: 'Strict compliance with Indian Standard (IS) codes, backed by multi-phase quality inspections.',
      icon: '📋',
    },
    {
      title: 'Elite After-Sales',
      desc: 'Deep technical domain knowledge ensures reliable, ongoing lifecycle infrastructure support.',
      icon: '⚙️',
    },
    {
      title: 'Industry Experience',
      desc: 'Serving critical heavy infrastructure, construction, and mining sectors since 2013.',
      icon: '🏢',
    },
  ]

  return (
    <section id="why-choose" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-[#F7C900] text-[#0A0A0A] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            WHY CHOOSE VAK GROUP?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
            6 Reasons Why Industry Leaders Choose Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Delivering heavy engineering solutions backed by rigorous Indian Standard compliance and proactive customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs