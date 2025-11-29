import React from "react";

const Skills = () => {
  const skills = [
    // Tecnologías de desarrollo
    { name: "JavaScript", icon: "fab fa-js", level: 90, color: "primary" },
    { name: "React", icon: "fab fa-react", level: 85, color: "cyan" },
    {
      name: "React Native",
      icon: "fas fa-mobile-alt",
      level: 80,
      color: "blue",
    },
    { name: "Node.js", icon: "fab fa-node-js", level: 75, color: "green" },

    // SAP & ERP
    { name: "SAP", icon: "fas fa-cogs", level: 80, color: "accent" },
    {
      name: "Sistemas ERP",
      icon: "fas fa-network-wired",
      level: 85,
      color: "purple",
    },
    {
      name: "Integración API",
      icon: "fas fa-plug",
      level: 80,
      color: "indigo",
    },

    // Bases de datos y herramientas
    { name: "PostgreSQL", icon: "fas fa-database", level: 70, color: "blue" },
    { name: "Git/GitHub", icon: "fab fa-git-alt", level: 85, color: "primary" },
    { name: "Python", icon: "fab fa-python", level: 75, color: "green" },
    { name: "HTML/CSS", icon: "fab fa-html5", level: 95, color: "accent" },
    { name: "Power BI", icon: "fas fa-chart-bar", level: 95, color: "yellow" },
  ];
  const getGradientClass = (color) => {
    const gradients = {
      primary: "from-primary to-primary",
      accent: "from-accent to-accent",
      cyan: "from-cyan-400 to-cyan-500",
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      indigo: "from-indigo-500 to-indigo-600",
      purple: "from-purple-500 to-purple-600",
      yellow: "from-yellow-500 to-yellow-600",
    };
    return gradients[color] || "from-primary to-accent";
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Mis <span className="gradient-text">Habilidades</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino para crear soluciones
          innovadoras
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-2xl card-hover border border-gray-700"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${getGradientClass(
                    skill.color
                  )} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <i className={`${skill.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${getGradientClass(
                      skill.color
                    )} transition-all duration-1000`}
                  ></div>
                </div>

                <span className="text-gray-300 font-semibold"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Desarrollo Moderno + Soluciones Empresariales
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Combino el desarrollo de aplicaciones modernas con React y React
              Native con experiencia en sistemas SAP y ERP, ofreciendo
              soluciones integrales que conectan interfaces de usuario
              intuitivas con sistemas empresariales robustos.
            </p>
          </div>
        </div>

        {/* Categorías de habilidades */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-code text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Frontend</h4>
            <p className="text-gray-300">React, React Native, JavaScript</p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-server text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Backend</h4>
            <p className="text-gray-300">
              Node.js, Python, APIs, Bases de datos
            </p>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-2xl border border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cogs text-white text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">ERP & SAP</h4>
            <p className="text-gray-300">
              Sistemas empresariales e integración
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
