function AboutSection(){
  return(
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side */}
        <div>
          <span className="text-[#ea6622] font-semibold text-sm">RED STAR WIRE MESH</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            The World's <span className="text-[#ea6622]">Top 10</span> Mines Screen & Panels Suppliers
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Red Star Wire Mesh Manufacturing Co., Ltd. focuses on the production of mining screens and screening media, backed by extensive experience and a strong global presence. We deliver efficient and durable screening solutions worldwide.
          </p>
        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-4 hover:shadow-orange-300 hover:shadow-2xl">
          <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-2xl">
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc16e30c5_.webp"
              alt="Icon"
              className="h-8 mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-[#ea6622] hover:text-orange-500">1989</div>
            <div className="text-sm text-gray-500">Established in</div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-2xl">
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc2381da1_.webp"
              alt="Icon"
              className="h-8 mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-[#ea6622] hover:text-orange-500">70+</div>
            <div className="text-sm text-gray-500">Exporting Countries</div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-2xl">
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc3076cf8_.webp"
              alt="Icon"
              className="h-8 mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-[#ea6622] hover:text-orange-500">370+</div>
            <div className="text-sm text-gray-500">Employees</div>
          </div>

          <div className="bg-white p-6 rounded shadow-sm text-center hover:shadow-2xl">
            <img
              src="https://www.redstarwiremesh.com/data/watermark/main/20250516/6826dc3dacca6_.webp"
              alt="Icon"
              className="h-8 mx-auto mb-2"
            />
            <div className="text-2xl font-bold text-[#ea6622] hover:text-orange-500">58000 m²</div>
            <div className="text-sm text-gray-500">Factory Area</div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutSection