import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Analista IT",
      company: "Surcomercial",
      period: "2024 - Presente",
      description: [
        "Desarrollo de aplicaciones web con React y React Native",
        "Integración de sistemas con SAP y soluciones ERP",
        "Optimización de procesos empresariales mediante soluciones tecnológicas",
        "Consultoría en implementación de módulos SAP",
        "Implementación de APIs REST para integración con sistemas existentes",
        "Soporte al usuario final",
        "Help desk a travez de tickets",
        "Modificaciones de cartera de cliente, vendedores, gestion de invetario entre otros procesos a travez de SAP",
        "Reportes BI",
      ],
      technologies: [
        "GLPI",
        "React",
        "React Native",
        "SAP",
        "Node.js",
        "PostgreSQL",
        "GIT",
      ],
      type: "current",
    },
    {
      id: 2,
      title: "Soporte tecnico IT",
      company: "COMPU-LYSEIS",
      period: "2021 - 2023",
      description: [
        "Soporte al usuario final",
        "Administracion de dominios",
        "Help Desk a travez de tickets",
        "Capacitación a equipos en nuevas tecnologías",
        "Manteniemiento de equipos informaticos",
        "Mantenimiento de redes empresariales",
        "Gestion de inventario",
      ],
      technologies: [
        "UVdesk",
        "Windows Server Active Directory",
        "OCS iventory",
        "Linux",
        "Phyton",
        "Django",
      ],
      type: "previous",
    },
    {
      id: 3,
      title: "Soporte IT",
      company: "LEZ NETWORK",
      period: "2019 - 2021",
      description: [
        "Soporte al usuario final",
        "Administracion de usuarios de dominios",
        "Help Desk a travez de tickets",
        "Manteniemiento de equipos informaticos",
        "Gestion de inventario",
      ],
      technologies: [
        "Faveo Helpdesk",
        "Windows Server Active Directory",
        "Oficce",
        "Meet",
      ],
      type: "previous",
    },
  ];

  const getTimelinePosition = (index) => {
    return index % 2 === 0 ? "left" : "right";
  };

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experiencia <span className="gradient-text">Laboral</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Mi trayectoria profesional combinando desarrollo tecnológico con
          soluciones empresariales
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
                  getTimelinePosition(index) === "left"
                    ? "md:flex-row-reverse"
                    : ""
                } items-center`}
              >
                {/* Punto en la línea */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>

                {/* Contenido */}
                <div
                  className={`md:w-1/2 ${
                    getTimelinePosition(index) === "left"
                      ? "md:pr-12"
                      : "md:pl-12"
                  } mb-8 md:mb-0`}
                >
                  <div
                    className={`bg-gray-800 rounded-2xl p-8 shadow-2xl card-hover border border-gray-700 ${
                      experience.type === "current" ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {/* Badge de trabajo actual */}
                    {experience.type === "current" && (
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
                        <li
                          key={idx}
                          className="flex items-start text-gray-300"
                        >
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
      </div>
    </section>
  );
};

export default Experience;
