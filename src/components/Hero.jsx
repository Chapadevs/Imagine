import Navigation from './Navigation'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100 overflow-hidden">
      {/* Sky and clouds background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200">
        {/* Cloud layer 1 */}
        <div className="absolute top-20 left-10 w-72 h-24 bg-white opacity-60 rounded-full blur-xl"></div>
        <div className="absolute top-20 left-32 w-64 h-20 bg-white opacity-50 rounded-full blur-xl"></div>
        <div className="absolute top-16 left-48 w-56 h-28 bg-white opacity-55 rounded-full blur-xl"></div>
        
        {/* Cloud layer 2 */}
        <div className="absolute top-32 right-20 w-80 h-28 bg-white opacity-55 rounded-full blur-xl"></div>
        <div className="absolute top-28 right-32 w-72 h-24 bg-white opacity-50 rounded-full blur-xl"></div>
        <div className="absolute top-36 right-44 w-64 h-32 bg-white opacity-60 rounded-full blur-xl"></div>
        
        {/* Cloud layer 3 - middle */}
        <div className="absolute top-48 left-1/3 w-96 h-32 bg-white opacity-50 rounded-full blur-xl"></div>
        <div className="absolute top-44 left-1/3 w-80 h-28 bg-white opacity-45 rounded-full blur-xl"></div>
        <div className="absolute top-52 left-1/3 w-88 h-36 bg-white opacity-55 rounded-full blur-xl"></div>
        
        {/* Cloud layer 4 - lower */}
        <div className="absolute top-64 left-1/4 w-72 h-24 bg-white opacity-40 rounded-full blur-xl"></div>
        <div className="absolute top-60 left-1/4 w-64 h-28 bg-white opacity-45 rounded-full blur-xl"></div>
        <div className="absolute top-68 left-1/4 w-68 h-20 bg-white opacity-50 rounded-full blur-xl"></div>
      </div>
      
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        {/* Services Label */}
        <p className="text-dark-blue text-sm uppercase tracking-wider mb-6 font-sans">
          DESIGN • BRANDING • MARKETING
        </p>
        
        {/* Main Title */}
        <h1 className="text-dark-blue mb-2">
          <span className="block text-7xl md:text-8xl font-serif font-bold">IMAGINE</span>
          <span className="block text-6xl md:text-7xl font-script font-medium mt-2">Concept</span>
        </h1>
        
        {/* Tagline */}
        <div className="mt-8 mb-12 max-w-2xl">
          <p className="text-dark-blue text-lg md:text-xl mb-2">
            Transformamos ideias em experiências visuais memoráveis.
          </p>
          <p className="text-dark-blue text-lg md:text-xl">
            Design estratégico para marcas que querem ir além.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="bg-dark-blue text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-opacity-90 transition-all shadow-lg">
            Solicitar Orçamento
          </button>
          <button className="bg-white text-dark-blue border-2 border-dark-blue px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-50 transition-all shadow-lg">
            Ver Portfólio
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

