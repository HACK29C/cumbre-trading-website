import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío (en producción, conectar a backend)
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const whatsappUrl = 'https://wa.me/573006817175?text=Hola, me interesa saber más sobre sus servicios de exportación.';

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2E343E] mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Listo para expandir tu negocio? Envíanos un mensaje o llámanos directamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#95AD29] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#95AD29] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#95AD29] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#95AD29] transition resize-none"
                  placeholder="Cuéntanos sobre tu proyecto de exportación..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                className="w-full bg-gradient-to-r from-[#95AD29] to-[#4E6156] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send size={20} />
              </motion.button>
            </form>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="block bg-green-500 text-white p-4 rounded-2xl flex items-center gap-3 font-semibold"
            >
              <Phone size={20} />
              Chatea con nosotros en WhatsApp: +57 300 6817175
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <MapPin className="w-8 h-8 text-[#95AD29] mb-4" />
              <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Dirección</h3>
              <p className="text-gray-600">Avenida Panamericana Norte #6 Este 2-10, Ipiales – Nariño – Colombia</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Mail className="w-8 h-8 text-[#4E6156] mb-4" />
              <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Email</h3>
              <p className="text-gray-600">contacto@cumbretrading.com</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <Phone className="w-8 h-8 text-[#95AD29] mb-4" />
              <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Teléfono</h3>
              <p className="text-gray-600">+57 300 6817175</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3100000000003!2d-77.64000000000001!3d0.8300000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDknNTguNyJOIDc3wrAzOCcxNC4yIFc!5e0!3m2!1ses!2sco!4v1690000000000!5m2!1ses!2sco"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Mapa de Cumbre Trading S.A.S"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;