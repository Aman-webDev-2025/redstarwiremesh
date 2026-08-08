function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="bg-[#F7C900] text-[#0A0A0A] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Contact VAK Group Today
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Reach out to our sales, service, or parts department for inquiries, quotations, and site support.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Sales Card */}
          <div className="bg-[#2F353B] p-6 rounded-xl border border-gray-700 space-y-3">
            <div className="text-3xl">📞</div>
            <h3 className="text-xl font-bold text-[#F7C900]">Sales Department</h3>
            <p className="text-gray-300 text-sm">Direct Phone Inquiry:</p>
            <div className="space-y-1 font-mono text-sm text-white font-bold">
              <p>• +91 9977003608</p>
              <p>• +91 9977003978</p>
            </div>
          </div>

          {/* Service & Parts Card */}
          <div className="bg-[#2F353B] p-6 rounded-xl border border-gray-700 space-y-3">
            <div className="text-3xl">🛠️</div>
            <h3 className="text-xl font-bold text-[#F7C900]">Service & Parts</h3>
            <p className="text-gray-300 text-sm">Support & Spare Parts Inquiry:</p>
            <div className="space-y-1 font-mono text-sm text-white font-bold">
              <p>• Service: +91 7880106776</p>
              <p>• Parts: +91 7880106776</p>
            </div>
          </div>

          {/* Regional Offices Card */}
          <div className="bg-[#2F353B] p-6 rounded-xl border border-gray-700 space-y-3">
            <div className="text-3xl">📍</div>
            <h3 className="text-xl font-bold text-[#F7C900]">Regional Offices & Units</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p><span className="text-white font-bold">Offices:</span> Bhopal | Indore | Raipur</p>
              <p><span className="text-white font-bold">Manufacturing:</span> Unit 1 & Unit 2</p>
            </div>
          </div>
        </div>

        {/* WhatsApp & Contact Action Banner */}
        <div className="bg-[#2F353B] rounded-2xl p-8 border border-gray-700 text-center max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-white">Have a Project Inquiry or Custom Requirement?</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Connect directly with our sales & engineering team on WhatsApp for instant catalogs, prices, and specs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/919977003608?text=Hi%2C%20I%20want%20to%20enquire%20about%20VAK%20Group%20products."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#F7C900] text-[#0A0A0A] hover:bg-yellow-400 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider transition-colors shadow"
            >
              💬 Write To Us On WhatsApp
            </a>
            <a
              href="tel:+919977003608"
              className="inline-flex items-center justify-center bg-[#0A0A0A] text-white hover:bg-gray-800 font-bold px-8 py-3.5 rounded text-sm uppercase tracking-wider border border-gray-700 transition-colors"
            >
              📞 Call Sales (+91 9977003608)
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
