import aakar from '../assets/AAKAR CONSTRUCTION.png'
import apcon from '../assets/APCON INFRAWORKS PVT LTD.png'
import assure from '../assets/ASSURE INFRACON.jpg.jpeg'
import bharat from '../assets/BHARAT PAPER INDUSTRIES.png'
import concrelite from '../assets/CONCRELITE.png'
import conmat from '../assets/CONMAT.jpg.jpeg'
import highway from '../assets/HIGHWAY INFRASTRUCTURE.jpg.jpeg'
import kalyan from '../assets/KALYAN TOLL.jpg.jpeg'
import mslr from '../assets/MSLR PRIVATE LIMITED.jpg.jpeg'
import nc from '../assets/NC INFRACON.jpg.jpeg'
import pnn from '../assets/PNN INFRAPROJECTS.jpg.jpeg'
import rajdeep from '../assets/RAJDEEP CONSTRUCTIONS.jpg.jpeg'
import samdariya from '../assets/SAMDARIYA BUILDERS.jpg.jpeg'
import sanwariya from '../assets/SANWARIYA CONST..jpg.jpeg'

const partners = [
  { name: 'Aakar Construction', logo: aakar },
  { name: 'Apcon Infraworks', logo: apcon },
  { name: 'Assure Infracon', logo: assure },
  { name: 'Bharat Paper Industries', logo: bharat },
  { name: 'Concrelite', logo: concrelite },
  { name: 'Conmat', logo: conmat },
  { name: 'Highway Infrastructure', logo: highway },
  { name: 'Kalyan Toll', logo: kalyan },
  { name: 'MSLR Private Limited', logo: mslr },
  { name: 'NC Infracon', logo: nc },
  { name: 'PNN Infraprojects', logo: pnn },
  { name: 'Rajdeep Constructions', logo: rajdeep },
  { name: 'Samdariya Builders', logo: samdariya },
  { name: 'Sanwariya Construction', logo: sanwariya },
]

function PartnerSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <span className="bg-[#2F353B] text-[#F7C900] font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
          OUR VALUED CLIENTS
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">
          Trusted by Top Infrastructure & Construction Companies
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Over 850+ satisfied industrial buyers and builders rely on VAK Group.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 pt-6 items-center">
          {partners.map((item, idx) => (
            <div
              key={idx}
              className="p-3 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              title={item.name}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
