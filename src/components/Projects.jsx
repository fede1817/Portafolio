import React from 'react';
import { BsFillPrinterFill } from "react-icons/bs";
import { FaPersonCirclePlus } from "react-icons/fa6";


const Projects = () => {
  const projects = [
    {
      title: 'RICOH PRINTER MANAGER DEMO',
      description: 'RINTER MANAGER es una aplicación desarrollada con React (frontend) y Node.js (backend) que permite monitorear y administrar impresoras en red. El sistema utiliza la API SNMP para obtener información en tiempo real sobre los niveles de tóner, detectar cambios de cartuchos, y mantener un contador de tóneres de reserva. Además, el programa realiza comprobaciones de conectividad mediante ping para mostrar el estado de red de cada impresora.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'API SNMP'],
      image: <BsFillPrinterFill />,
      github: 'https://github.com/fede1817/RICOH-PRINTER-MANAGER-demo-',
      demo: 'https://ricoh-printer-manager-demo.vercel.app/',
      featured: true
    },
    {
      title: 'VALIDADOR DE CENSO',
      description: 'Aplicación de productividad con sincronización en tiempo real y notificaciones push.',
      technologies: ['React', 'API REST'],
      image: <FaPersonCirclePlus />,
      github: 'https://github.com/fede1817/VALIDADOR-DE-CENSO',
      demo: 'https://validador-de-censo.vercel.app/',
      featured: true
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de control con métricas en tiempo real, gráficos interactivos y reportes automáticos.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
      image: '📊',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Red Social Educativa',
      description: 'Plataforma social para estudiantes y educadores con foros y recursos compartidos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '👥',
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Algunos de los proyectos donde he aplicado mis habilidades en desarrollo y soluciones empresariales
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-2xl overflow-hidden shadow-2xl card-hover border border-gray-700 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className={`p-8 flex items-center justify-center ${
                  project.featured ? 'md:w-1/3' : 'md:w-2/5'
                }`}>
                  <div className="text-8xl">
                    {project.image}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 ${
                  project.featured ? 'md:w-2/3' : 'md:w-3/5'
                }`}>
                  {project.featured && (
                    <span className="inline-block bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Proyecto Destacado
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github"></i>
                      <span>Código</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-6">
            ¿Interesado en ver más proyectos?
          </p>
          <a
            href="https://github.com/fede1817"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
          >
            <i className="fab fa-github"></i>
            Ver más en GitHub
          </a>
        </div>

        {/* Sección adicional */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Metodología de Trabajo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Análisis</h4>
              <p className="text-gray-300">Estudio de requisitos y planificación</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Desarrollo</h4>
              <p className="text-gray-300">Implementación con mejores prácticas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Entrega</h4>
              <p className="text-gray-300">Despliegue y soporte continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;