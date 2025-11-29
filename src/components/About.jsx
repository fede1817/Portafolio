import React from "react";

const About = () => {
  const stats = [
    { number: "3+", label: "Años de Experiencia" },
    { number: "8+", label: "Tecnologías" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Sobre <span className="gradient-text">Mí</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3"></div>
              <div className="w-80 h-80 bg-gray-800 rounded-2xl absolute top-4 left-4 -rotate-3 flex items-center justify-center border border-gray-700">
                <i className="fas fa-laptop-code text-white text-8xl"></i>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-white mb-6">
              Desarrollador & Consultor SAP
            </h3>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Soy un desarrollador JR con especialización en{" "}
                <strong className="text-primary">React, React Native</strong> y
                amplia experiencia en{" "}
                <strong className="text-accent">sistemas SAP y ERP</strong>.
                Combino el desarrollo moderno de aplicaciones con soluciones
                empresariales robustas.
              </p>
              <p>
                Mi expertise incluye la integración de aplicaciones web/móviles
                con sistemas SAP, desarrollo de interfaces personalizadas y
                optimización de procesos empresariales mediante soluciones
                tecnológicas innovadoras.
              </p>
              <p>
                Me apasiona transformar necesidades complejas en soluciones
                intuitivas y funcionales, siempre enfocado en la experiencia del
                usuario y las mejores prácticas tanto en desarrollo como en
                implementación de sistemas empresariales.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección adicional de especializaciones */}
        <div className="mt-20 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Desarrollo Full Stack
              </h4>
              <p className="text-gray-300">
                React, React Native, Node.js, APIs REST y bases de datos
                modernas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Sistemas SAP & ERP
              </h4>
              <p className="text-gray-300">
                Consultoría, implementación e integración de sistemas
                empresariales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Soluciones Integrales
              </h4>
              <p className="text-gray-300">
                Combinación de desarrollo ágil con soluciones empresariales
                robustas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
