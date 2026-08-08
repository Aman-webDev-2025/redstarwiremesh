function Hero() {
  return (
    <section className="relative w-full min-h-[600px] bg-[#0A0A0A] text-white pt-28 md:pt-36 flex items-center overflow-hidden">
      {/* Background Image / Plant Overlay */}
      <div className="absolute inset-0 opacity-30 bg-cover bg-center">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1600&q=80"
          alt="VAK Group Plant Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#F7C900] text-[#0A0A0A] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded shadow">
            <span>🏗️ Happy Customers: 850+ | Est. 2013</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Engineered Silos. Empowered Teams. <span className="text-[#F7C900]">Concrete Results.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            VAK Group is Central India's premier industrial manufacturing force specializing in Cement Silos, Fly Ash Silos, Woven Wire Mesh Screens, Bulker Feeding Systems, and precision accessories.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919977003608"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-[#F7C900] text-[#0A0A0A] hover:bg-yellow-400 font-bold px-7 py-3.5 rounded text-sm uppercase tracking-wider transition-colors shadow-lg"
            >
              [+ Buy Product] Enquire Now on WhatsApp ➔
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-[#2F353B] hover:bg-gray-700 text-white font-bold px-7 py-3.5 rounded text-sm border border-gray-600 transition-colors"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero