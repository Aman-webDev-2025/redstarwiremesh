function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-[#2F353B] text-[#F7C900] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            CAREERS AT VAK GROUP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight">
            Build Your Career With Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are always looking for passionate professionals to join our industrial engineering workforce.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded">
              1 Open Position
            </span>
            <h3 className="text-xl font-bold text-[#0A0A0A]">Sales Executive</h3>
            <p className="text-gray-600 text-sm">
              Location: Central India (Bhopal / Indore / Raipur) | Full-Time
            </p>
            <p className="text-gray-500 text-xs">
              Experience in industrial machinery, cement silos, or wire mesh sales preferred.
            </p>
          </div>

          <a
            href="https://wa.me/919977003608?text=Hi%2C%20I%20am%20interested%20in%20the%20Sales%20Executive%20position."
            target="_blank"
            rel="noreferrer"
            className="bg-[#0A0A0A] text-[#F7C900] hover:bg-[#2F353B] font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Apply Now ➔
          </a>
        </div>

      </div>
    </section>
  )
}

export default CareersSection
