import React from 'react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Proyectos Completados' },
    { number: '3+', label: 'Años de Experiencia' },
    { number: '8+', label: 'Tecnologías' },
    { number: '5+', label: 'Clientes Satisfechos' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Sobre <span className="gradient-text">Mí</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-3"></div>
              <div className="w-80 h-80 bg-gray-800 rounded-2xl absolute top-4 left-4 -rotate-3 flex items-center justify-center">
                <i className="fas fa-laptop-code text-white text-8xl"></i>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Desarrollador Full Stack Apasionado
            </h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Soy un desarrollador full stack especializado en crear aplicaciones web y móviles 
                modernas y eficientes. Mi stack principal incluye React, React Native, Node.js, 
                Python y PostgreSQL.
              </p>
              <p>
                Me apasiona transformar ideas complejas en interfaces intuitivas y funcionales, 
                siempre enfocado en la experiencia del usuario y las mejores prácticas de desarrollo.
              </p>
              <p>
                Cuando no estoy programando, me gusta aprender nuevas tecnologías, contribuir a 
                proyectos open source y mantenerme actualizado con las últimas tendencias del desarrollo web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;