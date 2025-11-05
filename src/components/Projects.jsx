import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce React',
      description: 'Plataforma completa de comercio electrónico con carrito, checkout y panel administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'App Móvil de Tareas',
      description: 'Aplicación de productividad con sincronización en tiempo real y notificaciones push.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: '📱',
      github: '#',
      demo: '#',
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Mis <span className="gradient-text">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100 ${
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
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      Proyecto Destacado
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github"></i>
                      <span>Código</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
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
          <p className="text-gray-600 text-lg mb-6">
            ¿Interesado en ver más proyectos?
          </p>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
          >
            <i className="fab fa-github"></i>
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;