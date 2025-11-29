import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fab fa-github",
      url: "https://github.com/fede1817",
      label: "GitHub",
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/fede-britez-947b28196/",
      label: "LinkedIn",
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:frayg52@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Información de copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">
              Federico Britez
            </div>
          </div>

          {/* Enlaces sociales */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-gradient-to-br from-primary to-accent transition-all duration-300 border border-gray-700 group"
                aria-label={social.label}
              >
                <i
                  className={`${social.icon} text-gray-400 group-hover:text-white text-xl transition-colors`}
                ></i>
              </a>
            ))}
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Información inferior */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 Federico Britez. Todos los derechos reservados.</p>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Hecho con <i className="fas fa-heart text-red-500 mx-1"></i>{" "}
              usando React y Tailwind CSS
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"
            >
              <i className="fas fa-chevron-up"></i>
              Volver al inicio
            </a>
          </div>
        </div>

        {/* Mensaje adicional */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            Siempre abierto a nuevas oportunidades y colaboraciones
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
