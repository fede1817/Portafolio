import React, { useState } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Configuración de EmailJS (debes reemplazar con tus propios datos)
    const serviceID = "service_s93n65d";
    const templateID = "template_csznlyc";
    const userID = "nqtGfvc2Ocm9fdmtj";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "frayg52@gmail.com",
        },
        userID
      )
      .then(
        (result) => {
          setIsLoading(false);
          Swal.fire({
            title: "¡Mensaje Enviado!",
            text: "Te contactaré pronto. Gracias por escribirme.",
            icon: "success",
            background: "#1f2937",
            color: "#fff",
            confirmButtonColor: "#3b82f6",
            confirmButtonText: "¡Genial!",
            customClass: {
              popup: "sweet-alert-dark",
              title: "sweet-alert-title",
              confirmButton: "sweet-alert-button",
            },
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsLoading(false);
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
            icon: "error",
            background: "#1f2937",
            color: "#fff",
            confirmButtonColor: "#ef4444",
            confirmButtonText: "Entendido",
            customClass: {
              popup: "sweet-alert-dark",
              title: "sweet-alert-title",
              confirmButton: "sweet-alert-button",
            },
          });
        }
      );
  };

  const handlePhoneClick = () => {
    // Copiar número al portapapeles
    navigator.clipboard
      .writeText("0976530067")
      .then(() => {
        Swal.fire({
          title: "¡Número copiado!",
          text: "El número 0976530067 ha sido copiado al portapapeles",
          icon: "success",
          background: "#1f2937",
          color: "#fff",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "¡Genial!",
          timer: 3000,
          customClass: {
            popup: "sweet-alert-dark",
            title: "sweet-alert-title",
            confirmButton: "sweet-alert-button",
          },
        });
      })
      .catch(() => {
        // Fallback si no funciona clipboard
        Swal.fire({
          title: "Número de teléfono",
          html: `
            <p class="text-gray-300 mb-4">Mi número de teléfono:</p>
            <p class="text-xl font-bold text-primary">+595 981 555555</p>
            <p class="text-sm text-gray-400 mt-2">(Paraguay)</p>
          `,
          background: "#1f2937",
          color: "#fff",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Cerrar",
          customClass: {
            popup: "sweet-alert-dark",
            title: "sweet-alert-title",
            confirmButton: "sweet-alert-button",
          },
        });
      });
  };

  const contactMethods = [
    {
      icon: "fas fa-phone-alt",
      title: "Teléfono",
      value: "0976530067",
      link: null,
      action: handlePhoneClick,
      copyable: true,
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "frayg52@gmail.com",
      link: "mailto:frayg52@gmail.com",
      action: null,
      copyable: false,
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      value: "github.com/fede1817",
      link: "https://github.com/fede1817",
      action: null,
      copyable: false,
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      value: "www.linkedin.com/in/federico-britez-947b28196",
      link: "http://www.linkedin.com/in/federico-britez-947b28196",
      action: null,
      copyable: false,
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Ubicación",
      value: "Asunción, Paraguay",
      link: null,
      action: null,
      copyable: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Contacto</span>
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Hablemos y creemos algo increíble juntos
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6">¡Hablemos!</h3>
            <p className="text-gray-300 text-lg mb-8">
              ¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar
              contigo. Estoy siempre abierto a discutir nuevas oportunidades.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <i className={`${method.icon} text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-white">
                      {method.title}
                    </h4>
                    {method.link ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                      >
                        {method.value}
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                    ) : method.action ? (
                      <button
                        onClick={method.action}
                        className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2 group"
                      >
                        {method.value}
                        {method.copyable && (
                          <i className="fas fa-copy text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        )}
                      </button>
                    ) : (
                      <p className="text-gray-300">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
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
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800 ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Sección adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Por qué trabajar juntos?
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Combino <span className="text-primary">desarrollo técnico</span>{" "}
              con
              <span className="text-accent"> comprensión empresarial</span> para
              crear soluciones que no solo funcionan perfectamente, sino que
              también resuelven problemas reales de negocio.
            </p>
          </div>
        </div>
      </div>

      {/* Estilos personalizados para SweetAlert */}
      <style jsx>{`
        .sweet-alert-dark {
          background: #1f2937 !important;
          border-radius: 16px !important;
          border: 1px solid #374151 !important;
        }
        .sweet-alert-title {
          color: #fff !important;
          font-size: 1.5rem !important;
          font-weight: bold !important;
        }
        .sweet-alert-button {
          border-radius: 8px !important;
          font-weight: 600 !important;
          padding: 0.75rem 1.5rem !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
