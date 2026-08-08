function FloatingContact() {
  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      <a
        href="https://wa.me/919977003608?text=Hi%2C%20I%20want%20to%20enquire%20about%20VAK%20Group%20products."
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 bg-[#F7C900] text-[#0A0A0A] rounded-full flex items-center justify-center text-lg shadow-lg hover:scale-110 transition-transform font-bold"
        title="Enquire on WhatsApp"
      >
        💬
      </a>
      <a
        href="tel:+919977003608"
        className="w-10 h-10 bg-[#2F353B] text-white rounded-full flex items-center justify-center text-sm shadow-lg hover:bg-gray-700 transition-colors font-bold"
        title="Call Sales: +91 9977003608"
      >
        📞
      </a>
      <a
        href="#contact"
        className="w-10 h-10 bg-[#2F353B] text-white rounded-full flex items-center justify-center text-sm shadow-lg hover:bg-gray-700 transition-colors font-bold"
        title="Contact Offices"
      >
        ✉️
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center text-sm shadow-lg hover:bg-[#F7C900] hover:text-[#0A0A0A] transition-colors font-bold"
        title="Back to Top"
      >
        ▲
      </button>
    </div>
  )
}

export default FloatingContact
