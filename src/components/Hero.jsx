function Hero() {
  return (
    <section className="relative w-full min-h-[650px] bg-[#090d16] text-white pt-28 md:pt-36 flex items-center overflow-hidden">
      {/* Background YouTube Video Embed / Image Fallback Overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <iframe
          className="w-full h-full object-cover scale-125"
          src="https://www.youtube.com/embed/hwuIKunQBsA?autoplay=1&mute=1&loop=1&playlist=hwuIKunQBsA&controls=0"
          title="Red Star Industrial Screen Media Video"
          allow="autoplay"
        ></iframe>
      </div>

      {/* Fallback image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://www.redstarwiremesh.com/maxr.webp"
          alt="Red Star Wire Mesh Screening Media"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#090d16] via-[#090d16]/80 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-amber-600/90 text-white text-xs md:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
            <span>⚙️ 36+ Years Manufacturing Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            High Performance <span className="text-amber-500">Mining & Quarry</span> Screen Mesh
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            Supplying heavy-duty woven wire screens, self-cleaning harp mesh, polyurethane screen panels, and vibrating screen media for global mining and aggregate processing.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white text-base font-semibold px-7 py-3.5 rounded-lg shadow-lg transition-all"
            >
              Explore Products ➔
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-100 text-base font-semibold px-7 py-3.5 rounded-lg border border-slate-600 transition-all"
            >
              Request Quick Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero