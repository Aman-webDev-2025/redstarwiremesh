function ChallengeSection() {
  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span className="bg-amber-600/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
          DIRECT MANUFACTURER INQUIRY
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          What's Your Screening Challenge?
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Need assistance selecting mesh aperture, wire diameter, or custom polyurethane panels for your vibrating decks? Our technical engineers are ready to help.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:sales@redstarwiremesh.com"
            className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg transition-colors"
          >
            ✉️ Contact Us Now
          </a>
          <a
            href="tel:+8613253247773"
            className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-base px-8 py-3.5 rounded-lg border border-slate-700 transition-colors"
          >
            📞 Call Technical Support
          </a>
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection
