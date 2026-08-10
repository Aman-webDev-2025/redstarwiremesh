import { useEffect } from 'react'

function ProductModal({ product, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#151921] border border-gray-800 rounded-2xl shadow-2xl text-white">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#151921]/95 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-[#F7C900] text-[#0D0F12] text-xs font-black rounded uppercase">
              {product.category || 'VAK Product'}
            </span>
            <h3 className="text-xl font-bold font-display text-white">{product.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Modal Content Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Product Media Column */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-xl overflow-hidden border border-gray-800 bg-[#0D0F12]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
                }}
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-[#F7C900] text-[#0D0F12] font-black text-xs px-2.5 py-1 rounded shadow">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Sub-gallery thumbnail if available */}
            {product.additionalImages && product.additionalImages.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {product.additionalImages.map((img, idx) => (
                  <div key={idx} className="h-20 rounded-lg overflow-hidden border border-gray-800 bg-gray-900">
                    <img src={img} alt={`${product.title} detail ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}

            {/* Quick Specs Highlight Box */}
            <div className="p-4 bg-[#0D0F12] border border-gray-800 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between items-center text-gray-400">
                <span>Standard Quality:</span>
                <span className="font-semibold text-white">IS Quality Compliance</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Warranty / Support:</span>
                <span className="font-semibold text-white">1 Year Full Coverage</span>
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <span>Drawing & CAD Support:</span>
                <span className="font-semibold text-[#F7C900]">Available Site Case Wise</span>
              </div>
            </div>
          </div>

          {/* Product Details & Specs Column */}
          <div className="space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Description</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{product.description}</p>
              </div>

              {/* Technical Specifications List */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Technical Specifications</h4>
                  <ul className="space-y-2 text-xs">
                    {product.specs.map((spec, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <i className="fa-solid fa-circle-check text-[#F7C900] mt-0.5"></i>
                        <span className="text-gray-200">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing & Life Expectancy Card */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-gray-900/80 rounded-xl border border-gray-800">
                <div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase">Pricing Guidance</div>
                  <div className="text-sm font-extrabold text-[#F7C900]">{product.price || 'Request Custom Quote'}</div>
                </div>
                <div>
                  <div className="text-[11px] text-gray-400 font-semibold uppercase">Service Life</div>
                  <div className="text-sm font-bold text-white">{product.life || 'Heavy Industrial Grade'}</div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919977003608?text=Hello%20VAK%20Group,%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 bg-[#F7C900] hover:bg-yellow-400 text-[#0D0F12] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Enquire On WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  onClose()
                  const contactSection = document.getElementById('contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center space-x-2"
              >
                <i className="fa-solid fa-file-signature text-[#F7C900]"></i>
                <span>Request Drawing & Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductModal
