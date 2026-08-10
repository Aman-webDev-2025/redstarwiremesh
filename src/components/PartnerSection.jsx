import aakarLogo from '../assets/AAKAR CONSTRUCTION.png'
import apconLogo from '../assets/APCON INFRAWORKS PVT LTD.png'
import assureLogo from '../assets/ASSURE INFRACON.jpg.jpeg'
import bharatLogo from '../assets/BHARAT PAPER INDUSTRIES.png'
import concreliteLogo from '../assets/CONCRELITE.png'
import conmatLogo from '../assets/CONMAT.jpg.jpeg'
import highwayLogo from '../assets/HIGHWAY INFRASTRUCTURE.jpg.jpeg'
import kalyanLogo from '../assets/KALYAN TOLL.jpg.jpeg'
import mslrLogo from '../assets/MSLR PRIVATE LIMITED.jpg.jpeg'
import ncLogo from '../assets/NC INFRACON.jpg.jpeg'
import pnnLogo from '../assets/PNN INFRAPROJECTS.jpg.jpeg'
import rajdeepLogo from '../assets/RAJDEEP CONSTRUCTIONS.jpg.jpeg'
import samdariyaLogo from '../assets/SAMDARIYA BUILDERS.jpg.jpeg'
import sanwariyaLogo from '../assets/SANWARIYA CONST..jpg.jpeg'
import vakLogo from '../assets/VAK_logo.jpg'

const partnerLogos = [
  { name: 'Aakar Construction', img: aakarLogo, category: 'Infrastructure & Engineering' },
  { name: 'Apcon Infraworks', img: apconLogo, category: 'Highway & Bridge' },
  { name: 'Assure Infracon', img: assureLogo, category: 'Heavy Construction' },
  { name: 'Bharat Paper Industries', img: bharatLogo, category: 'Industrial Packaging' },
  { name: 'Concrelite', img: concreliteLogo, category: 'Ready-Mix Concrete' },
  { name: 'Conmat', img: conmatLogo, category: 'Batching Plant Systems' },
  { name: 'Highway Infrastructure', img: highwayLogo, category: 'Road & Toll Infrastructure' },
  { name: 'Kalyan Toll Infrastructure', img: kalyanLogo, category: 'Mega Highways' },
  { name: 'MSLR Private Limited', img: mslrLogo, category: 'Mining & Aggregate' },
  { name: 'NC Infracon', img: ncLogo, category: 'Civil Infrastructure' },
  { name: 'PNN Infraprojects', img: pnnLogo, category: 'Heavy Earthmoving' },
  { name: 'Rajdeep Constructions', img: rajdeepLogo, category: 'Commercial Engineering' },
  { name: 'Samdariya Builders', img: samdariyaLogo, category: 'Commercial Builders' },
  { name: 'Sanwariya Construction', img: sanwariyaLogo, category: 'Urban Infrastructure' },
  { name: 'VAK Group', img: vakLogo, category: 'Parent Enterprise' },
]

function PartnerSection() {
  return (
    <section id="partners" className="py-20 bg-[#151921] border-t border-b border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest">
          <i className="fa-solid fa-handshake-simple"></i>
          <span>Trusted Industry Partners</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Chosen By India's <span className="text-[#F7C900]">Infrastructure Giants</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Over 100+ tier-1 contractors, ready-mix concrete suppliers, and mining conglomerates rely on VAK Group silos and woven wire mesh screens.
        </p>
      </div>

      {/* Infinite Logo Slider Container */}
      <div className="relative w-full overflow-hidden py-6 bg-[#0D0F12]/60 border-y border-gray-800">
        {/* Left & Right Shadow Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0F12] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0F12] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee flex items-center space-x-8">
          {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 group relative bg-[#151921] border border-gray-800 hover:border-[#F7C900] px-6 py-4 rounded-xl transition-all duration-300 shadow-md flex items-center space-x-4 min-w-[240px]"
            >
              <div className="h-12 w-16 flex items-center justify-center bg-white p-1 rounded-lg">
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-white group-hover:text-[#F7C900] transition-colors">{partner.name}</div>
                <div className="text-[10px] text-gray-400 font-semibold">{partner.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
