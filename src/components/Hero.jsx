import { useState, useEffect } from 'react'

import mainImage2 from '../assets/extracted/main_image2.png'
import mainImage4 from '../assets/extracted/main_image4.jpeg'
import silo1 from '../assets/extracted/silo_img_1.jpg'
import heroFallback from '../assets/hero.png'

const heroBackgrounds = [
  { img: mainImage4, title: 'Mandideep Silo Assembly Unit' },
  { img: mainImage2, title: 'Twin Fly Ash Storage Complex' },
  { img: silo1, title: 'Concrete Batching Plant Silo Infrastructure' }
]

function Hero() {
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen bg-[#0D0F12] text-white pt-28 md:pt-36 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Full Hero Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroBackgrounds.map((bg, idx) => (
          <img
            key={idx}
            src={bg.img}
            alt={bg.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 scale-105 ${
              idx === bgIndex ? 'opacity-65' : 'opacity-0'
            }`}
            onError={(e) => {
              e.target.src = heroFallback
            }}
          />
        ))}

        {/* Premium Multi-Layer Dark Industrial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F12] via-[#0D0F12]/85 to-[#0D0F12]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-[#0D0F12]/70 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#F7C900_1px,transparent_1px)] [background-size:40px_40px] opacity-10 z-10 pointer-events-none"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Hero Copy */}
          <div className="lg:col-span-8 space-y-7">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#F7C900] text-[#0D0F12] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-xl glow-gold">
              <i className="fa-solid fa-award text-sm"></i>
              <span>Premier Industrial Manufacturing & Engineering Force (Est. 2013)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] font-display text-white tracking-tight">
              Engineered Silos. <br />
              Empowered Teams. <br />
              <span className="text-[#F7C900] drop-shadow-md">Concrete Results.</span>
            </h1>

            {/* Sub-headline Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              Central India's leading manufacturer of Cement & Fly Ash Silos, Woven Wire Mesh Screens, Bulker Feeding Root Blowers, and precision accessories — manufactured at our Mandideep Plant Unit in compliance with standard IS quality norms.
            </p>

            {/* Division Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-card p-4 rounded-xl border border-gray-800 space-y-1">
                <div className="text-xs font-bold text-[#F7C900] flex items-center">
                  <i className="fa-solid fa-warehouse text-xs mr-1.5"></i>
                  VAK Silos & Tanks
                </div>
                <div className="text-xs text-gray-300">50T to 500T Capacity</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-gray-800 space-y-1">
                <div className="text-xs font-bold text-[#F7C900] flex items-center">
                  <i className="fa-solid fa-border-all text-xs mr-1.5"></i>
                  Anti-Clog Screens
                </div>
                <div className="text-xs text-gray-300">25%-50% Production Boost</div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-gray-800 space-y-1">
                <div className="text-xs font-bold text-[#F7C900] flex items-center">
                  <i className="fa-solid fa-microchip text-xs mr-1.5"></i>
                  Crusher Telemetry
                </div>
                <div className="text-xs text-gray-300">Mobile App Monitoring</div>
              </div>
            </div>

            {/* Hero CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919977003608?text=Hello%20VAK%20Group,%20I%20am%20looking%20for%20a%20quotation%20and%20drawings."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-[#F7C900] hover:bg-yellow-400 text-[#0D0F12] font-black px-8 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-2xl glow-gold group"
              >
                <i className="fa-brands fa-whatsapp text-lg mr-2"></i>
                <span>Enquire Now On WhatsApp</span>
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center bg-gray-900/90 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm border border-gray-700 hover:border-[#F7C900] transition-all backdrop-blur-md"
              >
                <span>Explore Catalog & Specs</span>
              </a>
            </div>

          </div>

          {/* Right Plant Spec Glass Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-card p-6 rounded-3xl border border-gray-800 shadow-2xl space-y-5 glow-gold">
              
              <div className="relative h-52 rounded-2xl overflow-hidden border border-gray-800 group">
                <img
                  src={heroBackgrounds[bgIndex].img}
                  alt="VAK Plant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-[#F7C900] text-[#0D0F12] text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                  📍 {heroBackgrounds[bgIndex].title}
                </span>
              </div>

              {/* Background Slide Indicator dots */}
              <div className="flex justify-center space-x-2">
                {heroBackgrounds.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setBgIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === bgIndex ? 'w-8 bg-[#F7C900]' : 'w-2 bg-gray-700'
                    }`}
                  />
                ))}
              </div>

              {/* Key Quick Specs Summary */}
              <div className="space-y-2 text-xs text-gray-300 pt-2 border-t border-gray-800">
                <div className="font-bold text-white text-sm">Industrial Deployment Standards</div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-circle-check text-[#F7C900]"></i>
                  <span>50T to 500T Cement & Fly Ash Silos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-circle-check text-[#F7C900]"></i>
                  <span>IS 2062 Grade Steel CAD Site Drawings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-circle-check text-[#F7C900]"></i>
                  <span>100+ Tier-1 Infrastructure Clients</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero