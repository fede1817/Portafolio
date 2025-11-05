import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'frayg52@gmail.com',
      link: 'mailto:frayg52@gmail.com'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/fede1817',
      link: 'https://github.com/fede1817'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/tuusuario',
      link: 'https://linkedin.com/in/tuusuario'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Ubicación',
      value: 'Asunción, Paraguay',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Contacto</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              ¡Hablemos!
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              ¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo. 
              Estoy siempre abierto a discutir nuevas oportunidades.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <i className={`${method.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{method.title}</h4>
                    {method.link ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <i className={`fab fa-${social} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu.email@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;