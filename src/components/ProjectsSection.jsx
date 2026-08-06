function ProjectsSection() {
  const projectCases = [
    {
      title: "Jinyu Jidong Cement Inner Mongolia 3 Million Ton Aggregate Production Line",
      category: "Metal Woven Wire Screens",
      image: "https://www.redstarwiremesh.com/data/watermark/main/20250815/689eea5b1bb02_.webp",
      desc: "Jidong Cement (subsidiary of Beijing Jinyu Group) operates an annual output of 3 million tons of aggregate. Located in Baotou, Inner Mongolia, Red Star supplied heavy-duty woven wire screens for waste rock recycling.",
    },
    {
      title: "Yankuang Energy Thermal Coal Screen Maintenance & Replacement",
      category: "Self-Cleaning Harp Screens",
      image: "https://www.redstarwiremesh.com/data/watermark/main/20250815/689eeb36b9053_.webp",
      desc: "Yankuang Energy Group is a leading Chinese thermal coal producer with 160 million tons annual capacity. Red Star supplied custom self-cleaning screen panels for wet fine coal separation.",
    },
  ]

  return (
    <section id="cases" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-amber-600 font-extrabold text-xs tracking-widest uppercase">
            PROVEN FIELD PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Global Case Studies
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Real-world screening installations across major cement groups, coal processing plants, and mining operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCases.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-600 font-bold text-sm hover:text-amber-700"
                >
                  View Project Details ➔
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection