import { useState, useEffect } from 'react'

import heroImg1 from '../assets/extracted/new_ppt/image4.jpeg'
import heroImg2 from '../assets/extracted/new_ppt/image2.png'
import heroImg3 from '../assets/extracted/new_ppt/image3.png'
import fallbackImg from '../assets/hero.png'

const slides = [
  // SLIDE 1: PPT Slide 1 - Main Brand Statement & Tagline
  {
    id: 1,
    bgImage: heroImg1,
    badge: 'Premier Industrial Engineering (Est. 2013)',
    title: 'Engineered Silos. Empowered Teams. Concrete Results.',
    subtitle: "Central India's leading manufacturer of Cement & Fly Ash Silos, Woven Wire Mesh Screens, Bulker Feeding Root Blowers, and precision accessories — manufactured at our Mandideep Plant Unit in compliance with standard IS quality norms.",
    ctaPrimary: 'Enquire Now On WhatsApp',
    ctaSecondary: 'Explore Product Models',
    highlights: [
      { title: 'VAK Silos & Tanks', sub: '50T to 500T Capacity' },
      { title: 'Anti-Clog Screens', sub: '25%-50% Output Boost' },
      { title: 'Crusher Telemetry', sub: 'Mobile App Monitoring' }
    ]
  },

  // SLIDE 2: PPT Slide 2 - The VAK Advantage (Vision, Mission, People, Quality)
  {
    id: 2,
    bgImage: heroImg2,
    badge: 'The VAK Advantage',
    title: 'Leadership Anchored In Sustainable Infrastructure',
    subtitle: 'Our corporate foundation is built on uncompromising quality, continuous workforce training, and sustainable engineering excellence.',
    pillars: [
      {
        icon: 'fa-solid fa-eye',
        title: 'Our Vision',
        desc: 'Leadership in cement silo industry & screen wire meshes through innovative, sustainable infrastructure solutions.'
      },
      {
        icon: 'fa-solid fa-bullseye',
        title: 'Our Mission',
        desc: 'To maximize customer satisfaction by delivering high-quality products & latest manufacturing technologies.'
      },
      {
        icon: 'fa-solid fa-users',
        title: 'People & Culture',
        desc: 'Empowering and elevating our workforce with continuous technical training embedded in our corporate DNA.'
      },
      {
        icon: 'fa-solid fa-clipboard-check',
        title: 'Quality Assurance',
        desc: 'Multi-phase quality inspections approved by top-tier industrial buyers adhering to IS quality norms.'
      }
    ]
  },

  // SLIDE 3: PPT Slide 3 - Our Engineering Solutions (Silos, Wire Mesh, Material Handling)
  {
    id: 3,
    bgImage: heroImg3,
    badge: 'Engineering Product Solutions',
    title: 'Heavy Duty Equipment Built For Performance',
    subtitle: 'From high-capacity storage silos to self-cleaning screening media and pneumatic bulker blowers, we engineer solutions that optimize industrial plant productivity.',
    solutions: [
      {
        icon: 'fa-solid fa-warehouse',
        title: 'Advanced Storage Silos',
        desc: 'High-capacity Cement and Fly Ash Silos built to strict Indian Standard (IS 2062) quality norms with site CAD drawings.'
      },
      {
        icon: 'fa-solid fa-[#FFC000] fa-border-all',
        title: 'Industrial Wire Meshes',
        desc: 'High-durability woven wire mesh screens, self-cleaning PU strip anti-clog meshes, and specialty harp screens.'
      },
      {
        icon: 'fa-solid fa-truck-ramp-box',
        title: 'Material Handling Equipment',
        desc: 'Heavy-duty Bulker Feeding Root Blowers, Cosben silo safety accessories, and heavy structural skid bases.'
      }
    ]
  }
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-screen bg-[#0D0F12] text-white pt-28 md:pt-36 pb-20 flex items-center justify-center overflow-hidden selection:bg-[#FFC000] selection:text-[#0D0F12]"
    >
      {/* Background Image Carousel Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.bgImage}
            alt={`VAK Group Slide ${slide.id}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
              idx === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
            onError={(e) => {
              e.target.src = fallbackImg
            }}
          />
        ))}

        {/* Multi-layer Dark Industrial Gradient Overlay matching PPT #FFC000 & #0D0F12 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/85 to-[#0D0F12]/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-[#0D0F12]/70 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#FFC000_1px,transparent_1px)] [background-size:40px_40px] opacity-10 z-10 pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        {slides.map((slide, idx) => {
          if (idx !== currentSlide) return null
          return (
            <div key={slide.id} className="animate-fadeIn space-y-8">
              
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#FFC000] text-[#0D0F12] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-xl glow-gold">
                <i className="fa-solid fa-award text-sm"></i>
                <span>{slide.badge}</span>
              </div>

              {/* SLIDE 1 LAYOUT */}
              {slide.id === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-8 space-y-6">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-display text-white tracking-tight">
                      Engineered Silos. <br />
                      Empowered Teams. <br />
                      <span className="text-[#FFC000] drop-shadow-md">Concrete Results.</span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
                      {slide.subtitle}
                    </p>

                    {/* Highlights Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      {slide.highlights.map((h, i) => (
                        <div key={i} className="glass-card p-4 rounded-xl border border-gray-800 space-y-1">
                          <div className="text-xs font-bold text-[#FFC000] flex items-center">
                            <i className="fa-solid fa-circle-check text-xs mr-1.5"></i>
                            {h.title}
                          </div>
                          <div className="text-xs text-gray-300">{h.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://wa.me/919977003608?text=Hello%20VAK%20Group,%20I%20am%20looking%20for%20a%20quotation%20and%20drawings."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-[#FFC000] hover:bg-yellow-400 text-[#0D0F12] font-black px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-2xl glow-gold group"
                      >
                        <i className="fa-brands fa-whatsapp text-lg mr-2"></i>
                        <span>{slide.ctaPrimary}</span>
                        <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                      </a>
                      <a
                        href="#products"
                        className="inline-flex items-center justify-center bg-gray-900/90 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm border border-gray-700 hover:border-[#FFC000] transition-all backdrop-blur-md"
                      >
                        <span>{slide.ctaSecondary}</span>
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-4 hidden lg:block">
                    <div className="glass-card p-6 rounded-3xl border border-gray-800 shadow-2xl space-y-4 glow-gold">
                      <div className="h-56 rounded-2xl overflow-hidden border border-gray-800">
                        <img src={slide.bgImage} alt="VAK Plant" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div className="font-bold text-white text-sm">Mandideep Plant Unit 1 & 2</div>
                        <p>• High-durability cement & fly ash silos (50T - 500T)</p>
                        <p>• 100+ Tier-1 infrastructure clients across India</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 2 LAYOUT: The VAK Advantage */}
              {slide.id === 2 && (
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-display text-white">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                    {slide.pillars.map((p, i) => (
                      <div key={i} className="glass-card p-6 rounded-2xl border border-gray-800 hover:border-[#FFC000]/50 transition-all space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[#FFC000]/10 text-[#FFC000] flex items-center justify-center text-xl border border-[#FFC000]/30">
                          <i className={p.icon}></i>
                        </div>
                        <h3 className="text-lg font-bold font-display text-white">{p.title}</h3>
                        <p className="text-xs text-gray-300 leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3 LAYOUT: Engineering Product Solutions */}
              {slide.id === 3 && (
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-display text-white">
                    {slide.title}
                  </h1>
                  <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    {slide.solutions.map((s, i) => (
                      <div key={i} className="glass-card p-8 rounded-2xl border border-gray-800 hover:border-[#FFC000]/50 transition-all space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#FFC000]/10 text-[#FFC000] flex items-center justify-center text-2xl border border-[#FFC000]/30">
                          <i className={s.icon}></i>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white">{s.title}</h3>
                        <p className="text-xs text-gray-300 leading-relaxed">{s.desc}</p>
                        <a href="#products" className="inline-flex items-center text-xs font-bold text-[#FFC000] hover:underline pt-2">
                          <span>View Product Models</span>
                          <i className="fa-solid fa-arrow-right ml-1.5"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )
        })}

        {/* Carousel Navigation Controls */}
        <div className="pt-12 flex items-center justify-between border-t border-gray-800/60 mt-12">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-10 bg-[#FFC000]' : 'w-3 bg-gray-700 hover:bg-gray-500'
                }`}
                title={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next / Prev Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#FFC000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              title="Previous Slide"
            >
              <i className="fa-solid fa-chevron-left text-sm"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 hover:border-[#FFC000] text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              title="Next Slide"
            >
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero