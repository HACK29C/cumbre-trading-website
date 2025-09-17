import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2E343E] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start"
          >
            <img
              src="https://utfs.io/f/2vMRHqOYUHc0OP8ZZRWwHMo3kKrdGO2gqByb0CvhnIYi8Pxl"
              alt="Cumbre Trading Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm">
              Exporta Con Respaldo, Crece con Eficiencia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#95AD29]">Contacto</h3>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={16} />
              <span>Avenida Panamericana Norte #6 Este 2-10, Ipiales – Nariño – Colombia</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} />
              <span>+57 300 6817175</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} />
              <span>contacto@cumbretrading.com</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-[#95AD29]">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#95AD29] transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#95AD29] transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#95AD29] transition">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-400">© 2025 CUMBRE TRADING S.A.S. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;