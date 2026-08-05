function ProjectsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <div className="space-x-2">
            <span className="bg-[#ea6622] text-white px-4 py-1.5 rounded text-sm cursor-pointer">
              Metal woven screens
            </span>
            <span className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded text-sm hover:bg-gray-200 cursor-pointer">
              Self-cleaning screens
            </span>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-gray-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-gray-200">
          <img
            src="https://www.redstarwiremesh.com/data/watermark/main/20250815/689eea5b1bb02_.webp"
            alt="Project image"
            className="w-full h-72 object-cover rounded"
          />
          <div>
            <span className="text-xs font-bold text-[#ea6622] uppercase">Metal woven screens</span>
            <h3 className="text-xl font-bold mt-1 mb-3">
              Jinyu Jidong Cement Inner Mongolia Company's annual output of 3 million tons aggregate production line
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Jidong Cement is a subsidiary of Beijing Jinyu Group. The project is located in Baotou, Inner Mongolia. It uses waste rock stripped from Jujinshan Mine to produce green high-performance commercial mixed materials.
            </p>
            <button className="bg-[#ea6622] text-white px-5 py-2 rounded text-sm">
              View More
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection