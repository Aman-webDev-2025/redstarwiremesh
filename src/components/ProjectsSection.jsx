import { useState } from 'react'

import silo1 from '../assets/extracted/silo_img_1.jpg'
import silo2 from '../assets/extracted/silo_img_2.jpg'
import silo8 from '../assets/extracted/silo_img_8.jpg'
import silo9 from '../assets/extracted/silo_img_9.jpg'
import silo12 from '../assets/extracted/silo_img_12.jpg'
import silo13 from '../assets/extracted/silo_img_13.jpg'

const galleryItems = [
  {
    id: 1,
    title: '200T Cement Silo Assembly at Concrete Batching Plant',
    category: 'Silo Projects',
    location: 'Mandideep Industrial Sector',
    image: silo1,
    description: 'Heavy welded steel 200T cement silo equipped with Cosben pressure relief valves, aeration pads, and level sensors.'
  },
  {
    id: 2,
    title: 'Fly Ash & Slag Storage Silo Twin Complex',
    category: 'Silo Projects',
    location: 'Central India Infrastructure Site',
    image: silo2,
    description: 'Dual welded heavy-gauge steel storage silos with integrated dust collection and pneumatic fill lines.'
  },
  {
    id: 3,
    title: 'Bulker Feeding Roots Blower Skid Platform Base',
    category: 'Bulk Storage Systems',
    location: 'Indore Concrete Hub',
    image: silo8,
    description: 'High pressure pneumatic bulker feeding blower unit mounted on modular heavy ISMB skid base frame.'
  },
  {
    id: 4,
    title: 'Modular ISMB Structural Skid Platform Base',
    category: 'Bulk Storage Systems',
    location: 'Bhopal Ready-Mix Plant',
    image: silo9,
    description: 'Heavy structural steel skid platform base engineered for rapid site deployment, mobility, and foundation stabilization.'
  },
  {
    id: 5,
    title: 'Multi-Silo Bulk Storage Complex (Fly Ash & Cement)',
    category: 'Silo Projects',
    location: 'Regional Infrastructure Project',
    image: silo12,
    description: 'Custom CAD structural design twin silo assembly with integrated dust extraction and pneumatic fill lines.'
  },
  {
    id: 6,
    title: '300T Cement Silo Site Erection & CAD Layout',
    category: 'Silo Projects',
    location: 'Mandideep Plant Unit 2',
    image: silo13,
    description: 'High durability bolted cement silo site installation executed under strict IS quality compliance.'
  }
]

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['All', 'Silo Projects', 'Bulk Storage Systems']

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )

  return (
    <section id="installations" className="py-24 bg-[#151921] border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-gray-800 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest mb-3">
              <i className="fa-solid fa-[#F7C900] fa-images"></i>
              <span>Field Silo & Storage Executions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
              Site Installations & <span className="text-[#F7C900]">Silo Projects</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#F7C900] text-[#0D0F12] border-[#F7C900] shadow'
                    : 'bg-[#0D0F12] text-gray-400 border-gray-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group bg-[#0D0F12] border border-gray-800 hover:border-[#F7C900] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-80"></div>
                  
                  <span className="absolute top-3 left-3 bg-[#0D0F12]/80 border border-gray-700 text-[#F7C900] text-[10px] font-black uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                    {item.category}
                  </span>

                  <span className="absolute bottom-3 left-3 text-xs font-semibold text-gray-300 flex items-center">
                    <i className="fa-solid fa-location-dot text-[#F7C900] mr-1.5 text-xs"></i>
                    {item.location}
                  </span>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-[#F7C900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs text-[#F7C900] font-bold">
                <span>View High-Res Photo</span>
                <i className="fa-solid fa-expand text-xs group-hover:scale-125 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full bg-[#151921] border border-gray-800 rounded-2xl overflow-hidden p-6 space-y-4 text-white" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#F7C900] text-[#0D0F12] rounded mr-2">
                  {selectedImage.category}
                </span>
                <span className="text-lg font-bold font-display">{selectedImage.title}</span>
              </div>
              <button onClick={() => setSelectedImage(null)} className="w-8 h-8 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="h-96 rounded-xl overflow-hidden border border-gray-800 bg-black">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain" />
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400 pt-2">
              <span className="flex items-center">
                <i className="fa-solid fa-location-dot text-[#F7C900] mr-1.5"></i>
                {selectedImage.location}
              </span>
              <span>VAK Group Mandideep Production Asset</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection