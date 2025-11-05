import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Hecho con <i className="fas fa-heart text-red-500 mx-1"></i> usando React y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;