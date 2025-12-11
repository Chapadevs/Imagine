function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-dark-blue font-serif text-xl md:text-2xl font-bold">
        IMAGINE CONCEPT
      </div>
      
      {/* Navigation Links */}
      <div className="hidden md:flex gap-8 text-dark-blue font-sans text-sm md:text-base">
        <a href="#inicio" className="hover:opacity-70 transition-opacity">Início</a>
        <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfólio</a>
        <a href="#servicos" className="hover:opacity-70 transition-opacity">Serviços</a>
        <a href="#contato" className="hover:opacity-70 transition-opacity">Contato</a>
        <a href="#orcamento" className="hover:opacity-70 transition-opacity">Orçamento</a>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden text-dark-blue">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}

export default Navigation

