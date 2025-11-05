import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Desarrollador Full Stack & Consultor SAP",
      company: "Empresa Actual",
      period: "2023 - Presente",
      description: [
        "Desarrollo de aplicaciones web con React y React Native",
        "Integración de sistemas con SAP y soluciones ERP",
        "Optimización de procesos empresariales mediante soluciones tecnológicas",
        "Consultoría en implementación de módulos SAP"
      ],
      technologies: ["React", "React Native", "SAP", "Node.js", "PostgreSQL"],
      type: "current"
    },
    {
      id: 2,
      title: "Desarrollador Full Stack",
      company: "Empresa Anterior",
      period: "2021 - 2023",
      description: [
        "Desarrollo de aplicaciones empresariales con React y Node.js",
        "Implementación de APIs REST para integración con sistemas existentes",
        "Colaboración en migración de sistemas legacy a soluciones modernas",
        "Capacitación a equipos en nuevas tecnologías"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "Docker"],
      type: "previous"
    },
    {
      id: 3,
      title: "Desarrollador Frontend",
      company: "Startup Tecnológica",
      period: "2020 - 2021",
      description: [
        "Desarrollo de interfaces de usuario con React",
        "Implementación de diseño responsive y accesible",
        "Colaboración con equipo de diseño para mejorar UX/UI",
        "Optimización de performance de aplicaciones web"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Redux", "Git"],
      type: "previous"
    },
    {
      id: 4,
      title: "Practicante de Desarrollo",
      company: "Universidad / Empresa",
      period: "2019 - 2020",
      description: [
        "Introducción al desarrollo web y móvil",
        "Apoyo en proyectos de desarrollo interno",
        "Aprendizaje de metodologías ágiles",
        "Desarrollo de habilidades en JavaScript y frameworks modernos"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "React", "Git"],
      type: "previous"
    }
  ];

  const getTimelinePosition = (index) => {
    return index % 2 === 0 ? 'left' : 'right';
  };

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experiencia <span className="gradient-text">Laboral</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Mi trayectoria profesional combinando desarrollo tecnológico con soluciones empresariales
        </p>

        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-accent h-full hidden md:block"></div>

          {/* Items de experiencia */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  getTimelinePosition(index) === 'left' ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Punto en la línea */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>

                {/* Contenido */}
                <div className={`md:w-1/2 ${
                  getTimelinePosition(index) === 'left' ? 'md:pr-12' : 'md:pl-12'
                } mb-8 md:mb-0`}>
                  <div className={`bg-gray-800 rounded-2xl p-8 shadow-2xl card-hover border border-gray-700 ${
                    experience.type === 'current' ? 'ring-2 ring-primary' : ''
                  }`}>
                    {/* Badge de trabajo actual */}
                    {experience.type === 'current' && (
                      <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                        Trabajo Actual
                      </span>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-primary font-semibold text-lg">
                          {experience.company}
                        </p>
                      </div>
                      <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>

                    {/* Descripción */}
                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <i className="fas fa-check text-accent mt-1 mr-3 text-sm"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Espacio para la versión móvil */}
                <div className="md:hidden w-full">
                  <div className="flex justify-center my-4">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección adicional de logros */}
        <div className="mt-20 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Logros Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">+15 Proyectos</h4>
              <p className="text-gray-400">Entregados exitosamente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">+10 Clientes</h4>
              <p className="text-gray-400">Satisfechos con mis soluciones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">40% Optimización</h4>
              <p className="text-gray-400">En procesos empresariales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;