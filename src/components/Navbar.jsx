import React from 'react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Portafolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-left font-medium transition-all ${
                    activeSection === item.id
                      ? 'text-primary bg-blue-50 rounded'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;