function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      category: 'BRANDING',
      title: 'Aroma Coffee',
      description: 'Identidade visual completa para cafeteria artesanal',
      bgColor: 'bg-yellow-100',
      letter: 'A'
    },
    {
      id: 2,
      category: 'DESIGN DIGITAL',
      title: 'TechFlow',
      description: 'UI/UX para aplicativo de gestão empresarial',
      bgColor: 'bg-blue-100',
      letter: 'T'
    },
    {
      id: 3,
      category: 'MARKETING',
      title: 'Verde Vida',
      description: 'Campanha integrada para marca sustentável',
      bgColor: 'bg-green-100',
      letter: 'V'
    }
  ]

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs uppercase tracking-wider mb-4 font-sans font-medium">
            NOSSO TRABALHO
          </p>
          <h2 className="text-dark-blue text-4xl md:text-5xl font-serif mb-4">
            Projetos em <span className="italic">Destaque</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Cada projeto é uma história única. Conheça alguns dos trabalhos que nos orgulhamos de ter desenvolvido.
          </p>
        </div>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-t-3xl rounded-b-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Top colored section with letter */}
              <div className={`${project.bgColor} h-64 flex items-center justify-center relative`}>
                <span className="text-9xl font-bold text-gray-200 opacity-40 absolute">
                  {project.letter}
                </span>
              </div>
              
              {/* Bottom white section with details */}
              <div className="p-6">
                <p className="text-blue-600 text-xs uppercase tracking-wider mb-2 font-sans font-medium">
                  {project.category}
                </p>
                <h3 className="text-dark-blue text-2xl font-serif mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

