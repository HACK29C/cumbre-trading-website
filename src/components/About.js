import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2E343E] mb-6">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            CUMBRE TRADING S.A.S es tu aliado estratégico en consultoría para comercio internacional y exportaciones agrícolas. 
            Con años de experiencia, ayudamos a productores y empresas a expandir sus mercados globales con eficiencia y respaldo total.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"
          >
            <Target className="w-12 h-12 text-[#95AD29] mb-4" />
            <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Misión</h3>
            <p className="text-gray-600 text-center">
              Facilitar exportaciones agrícolas seguras y eficientes, impulsando el crecimiento sostenible de nuestros clientes en mercados internacionales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"
          >
            <Eye className="w-12 h-12 text-[#4E6156] mb-4" />
            <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Visión</h3>
            <p className="text-gray-600 text-center">
              Ser líderes en consultoría de exportaciones, reconocidos por nuestra innovación y compromiso con la calidad en la cadena agroexportadora.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl"
          >
            <Heart className="w-12 h-12 text-[#95AD29] mb-4" />
            <h3 className="text-xl font-semibold text-[#2E343E] mb-2">Valores</h3>
            <p className="text-gray-600 text-center">
              Integridad, eficiencia, sostenibilidad y excelencia en cada paso del proceso de exportación.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-[#95AD29]/5 to-[#4E6156]/5 rounded-3xl p-8 border border-[#95AD29]/20"
        >
          <h3 className="text-2xl font-bold text-[#2E343E] mb-6 text-center">Nuestra Información</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-semibold text-gray-700 mb-1">Dirección:</p>
              <p>Avenida Panamericana Norte #6 Este 2-10, Ipiales – Nariño – Colombia</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Teléfono:</p>
              <p>+57 300 6817175</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Email:</p>
              <p>contacto@cumbretrading.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-1">Web:</p>
              <p>www.cumbretrading.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;