import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center gradient-bg">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hola, soy <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Desarrollador
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Full Stack Developer especializado en React, React Native y tecnologías modernas
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                >
                  Ver Proyectos
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  Contactar
                </button>
              </div>
            </div>
          </div>

          {/* Image/Icon */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-float">
                <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white text-8xl"></i>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-pink-400 rounded-full opacity-25 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white animate-bounce"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;