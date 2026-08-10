import { useState } from 'react'

function RoiCalculator() {
  const [dailyTonnage, setDailyTonnage] = useState(500)
  const [sellingPricePerTon, setSellingPricePerTon] = useState(650)
  const [clogIncreasePercent, setClogIncreasePercent] = useState(25)

  const currentMonthlyTonnage = dailyTonnage * 26
  const extraMonthlyTonnage = currentMonthlyTonnage * (clogIncreasePercent / 100)
  const extraMonthlyRevenue = extraMonthlyTonnage * sellingPricePerTon

  return (
    <section id="roi-calculator" className="py-20 bg-[#0D0F12] border-t border-b border-gray-800 relative overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#F7C900_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#F7C900]/10 border border-[#F7C900]/30 px-3.5 py-1.5 rounded-full text-[#F7C900] text-xs font-bold uppercase tracking-widest">
            <i className="fa-solid fa-calculator"></i>
            <span>Interactive Industrial ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Calculate Your Plant <span className="text-[#F7C900]">Production Boost</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            See how VAK Group's Anti-Clog Wire Mesh Screens & Buster systems eliminate material blinding to increase screen output by 25% to 50%.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="max-w-4xl mx-auto bg-[#151921] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Input 1: Daily Production */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-gray-300 flex items-center">
                    <i className="fa-solid fa-weight-hanging text-[#F7C900] mr-2"></i>
                    Daily Crushed Material Output (Tons/day)
                  </label>
                  <span className="text-[#F7C900] font-black text-base">{dailyTonnage} TPD</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={dailyTonnage}
                  onChange={(e) => setDailyTonnage(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#F7C900]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-bold">
                  <span>100 TPD</span>
                  <span>1500 TPD</span>
                  <span>3000 TPD</span>
                </div>
              </div>

              {/* Input 2: Material Selling Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-gray-300 flex items-center">
                    <i className="fa-solid fa-[#F7C900] fa-indian-rupee-sign text-[#F7C900] mr-2"></i>
                    Average Aggregate Value (₹/Ton)
                  </label>
                  <span className="text-[#F7C900] font-black text-base">₹{sellingPricePerTon}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="1500"
                  step="25"
                  value={sellingPricePerTon}
                  onChange={(e) => setSellingPricePerTon(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#F7C900]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-bold">
                  <span>₹300</span>
                  <span>₹900</span>
                  <span>₹1500</span>
                </div>
              </div>

              {/* Input 3: Efficiency Gain Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <label className="text-gray-300 flex items-center">
                    <i className="fa-solid fa-chart-line text-[#F7C900] mr-2"></i>
                    VAK Anti-Clog Efficiency Yield Gain (%)
                  </label>
                  <span className="text-[#F7C900] font-black text-base">+{clogIncreasePercent}% Output</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={clogIncreasePercent}
                  onChange={(e) => setClogIncreasePercent(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#F7C900]"
                />
                <div className="flex justify-between text-[11px] text-gray-500 font-bold">
                  <span>10% (Standard)</span>
                  <span>25% (Proven Avg)</span>
                  <span>50% (Peak Output)</span>
                </div>
              </div>

            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-[#0D0F12] border border-[#F7C900]/30 rounded-2xl p-6 space-y-6 relative glow-gold">
              <div className="absolute -top-3 right-4 bg-[#F7C900] text-[#0D0F12] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                Proven Site Data
              </div>

              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Estimated Monthly Tonnage Gain</div>
                <div className="text-3xl font-black text-white font-display mt-1 flex items-baseline space-x-1">
                  <span>+{Math.round(extraMonthlyTonnage).toLocaleString()}</span>
                  <span className="text-xs text-gray-400 font-semibold">Tons / Month</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Estimated Monthly Revenue Gain</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#F7C900] font-display mt-1">
                  ₹{Math.round(extraMonthlyRevenue).toLocaleString()}
                </div>
                <p className="text-[11px] text-gray-500 mt-1">Based on 26 operational plant days/month.</p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/919977003608?text=Hello%20VAK%20Group,%20I%20calculated%20a%20potential%20gain%20of%20${Math.round(extraMonthlyTonnage)}%20tons/month%20for%20my%20plant.%20Please%20send%20Anti-Clog%20screen%20quotation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-4 bg-[#F7C900] hover:bg-yellow-400 text-[#0D0F12] font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Get Anti-Clog Screen Quote</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default RoiCalculator
