import { useState } from 'react'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    productCategory: 'Cement & Fly Ash Silo',
    location: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const text = `Hello VAK Group,%0A%0A*New Website Quote Request*%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0ACompany: ${encodeURIComponent(formData.company)}%0AProduct: ${encodeURIComponent(formData.productCategory)}%0ALocation: ${encodeURIComponent(formData.location)}%0ANotes: ${encodeURIComponent(formData.notes)}`
    window.open(`https://wa.me/919977003608?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="py-24 bg-[#0D0F12] border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest">
            <i className="fa-solid fa-headset"></i>
            <span>Direct Industrial Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Request Custom <span className="text-[#F7C900]">Drawing & Quote</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Reach out directly to our sales, engineering design, or aftermarket service division.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Sales Division */}
          <div className="bg-[#151921] border border-gray-800 p-6 rounded-2xl space-y-4 hover:border-[#F7C900]/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-xl border border-[#F7C900]/30">
              <i className="fa-solid fa-phone-volume"></i>
            </div>
            <h3 className="text-xl font-bold font-display text-white">Sales & Enquiries</h3>
            <p className="text-xs text-gray-400">Direct Sales & Drawing Request Lines:</p>
            <div className="space-y-1 font-mono text-sm text-[#F7C900] font-bold">
              <div>+91 9977003608</div>
              <div>+91 9977003978</div>
            </div>
            <div className="text-[11px] text-gray-500 font-semibold">Available Mon - Sat (9:00 AM - 7:00 PM)</div>
          </div>

          {/* Card 2: Service & Spares */}
          <div className="bg-[#151921] border border-gray-800 p-6 rounded-2xl space-y-4 hover:border-[#F7C900]/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-xl border border-[#F7C900]/30">
              <i className="fa-solid fa-wrench"></i>
            </div>
            <h3 className="text-xl font-bold font-display text-white">Service & Parts Division</h3>
            <p className="text-xs text-gray-400">Aftermarket Support & Accessories Spares:</p>
            <div className="space-y-1 font-mono text-sm text-white font-bold">
              <div>+91 7880106776</div>
            </div>
            <div className="text-[11px] text-gray-500 font-semibold">24/7 Site Support for Installed Silos & Screens</div>
          </div>

          {/* Card 3: Manufacturing Units & Offices */}
          <div className="bg-[#151921] border border-gray-800 p-6 rounded-2xl space-y-4 hover:border-[#F7C900]/40 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#F7C900]/10 text-[#F7C900] flex items-center justify-center text-xl border border-[#F7C900]/30">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h3 className="text-xl font-bold font-display text-white">Offices & Plant Locations</h3>
            <div className="space-y-1 text-xs text-gray-300">
              <div><span className="font-bold text-[#F7C900]">Plant Unit 1 & 2:</span> Mandideep Industrial Area</div>
              <div><span className="font-bold text-white">Corporate Offices:</span> Indore | Bhopal | Raipur</div>
            </div>
            <div className="text-[11px] text-gray-500 font-semibold">Central India Heavy Engineering Facilities</div>
          </div>

        </div>

        {/* Form & Map / Direct Action Section */}
        <div className="max-w-4xl mx-auto bg-[#151921] border border-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative glow-gold">
          
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-2">
            <h3 className="text-2xl font-bold font-display text-white">
              Instant Quote & <span className="text-[#F7C900]">CAD Drawing Request</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Fill out the parameters below to receive site drawings and commercial offers directly on WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#0D0F12] border border-[#F7C900]/40 rounded-2xl text-center space-y-4">
              <div className="w-14 h-14 bg-[#F7C900]/20 text-[#F7C900] rounded-full flex items-center justify-center text-2xl mx-auto border border-[#F7C900]">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="text-xl font-bold text-white">Quote Request Transmitted!</h4>
              <p className="text-xs text-gray-300">Opening WhatsApp connection with VAK Group engineering sales desk...</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#F7C900] underline font-semibold"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Your Name / Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98260XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Company / Firm Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Infracon Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Required Product Category *</label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                  >
                    <option value="Cement & Fly Ash Silo">Cement & Fly Ash Silo (50T - 500T)</option>
                    <option value="Anti-Clog Wire Mesh Screen">Anti-Clog PU Strip Wire Mesh Screen</option>
                    <option value="Bulker Feeding Root Blower">Bulker Feeding Root Blower System</option>
                    <option value="Cosben Silo Accessories">Cosben / WAM Silo Accessories</option>
                    <option value="Crusher Telemetry System">Crusher Efficiency Telemetry System</option>
                    <option value="Suspended Overband Magnet">Suspended Overband Magnet</option>
                    <option value="Opel Conveyor Rollers">Opel Dust-Proof Rollers & Bearings</option>
                    <option value="Steel Bridge / Insert Plates">Steel Bridge / Insert Plates / Cable Trays</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Plant Location / City</label>
                <input
                  type="text"
                  placeholder="e.g. Mandideep / Indore / Nagpur site"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">Specific Requirements / Notes</label>
                <textarea
                  rows="3"
                  placeholder="Mention desired silo capacity, mesh aperture size, or site layout details..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0D0F12] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F7C900]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#F7C900] hover:bg-yellow-400 text-[#0D0F12] font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                <span>Submit & Get Instant WhatsApp Offer</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  )
}

export default ContactSection
