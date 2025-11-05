import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'fab fa-js', level: 90, color: 'yellow' },
    { name: 'React', icon: 'fab fa-react', level: 85, color: 'cyan' },
    { name: 'React Native', icon: 'fas fa-mobile-alt', level: 80, color: 'blue' },
    { name: 'HTML/CSS', icon: 'fab fa-html5', level: 95, color: 'orange' },
    { name: 'Python', icon: 'fab fa-python', level: 75, color: 'green' },
    { name: 'PostgreSQL', icon: 'fas fa-database', level: 70, color: 'indigo' },
    { name: 'Git/GitHub', icon: 'fab fa-git-alt', level: 85, color: 'red' },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 75, color: 'green' }
  ];

  const getColorClass = (color) => {
    const colors = {
      yellow: 'bg-yellow-400',
      cyan: 'bg-cyan-400',
      blue: 'bg-blue-500',
      orange: 'bg-orange-500',
      green: 'bg-green-500',
      indigo: 'bg-indigo-500',
      red: 'bg-red-500'
    };
    return colors[color] || 'bg-primary';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Mis <span className="gradient-text">Habilidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-gray-100"
            >
              <div className="text-center">
                <div className={`w-16 h-16 ${getColorClass(skill.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${skill.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {skill.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div
                    className={`h-3 rounded-full ${getColorClass(skill.color)} transition-all duration-1000`}
        
                  ></div>
                </div>
                
                <span className="text-gray-600 font-semibold">
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Siempre aprendiendo
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Mantengo mis habilidades actualizadas constantemente explorando nuevas tecnologías 
              y mejores prácticas. Actualmente profundizando en Next.js, TypeScript y arquitecturas cloud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;