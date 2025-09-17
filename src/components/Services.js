import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Truck, Search, FileText } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Planeación de Exportaciones',
      description: 'Desarrollamos estrategias personalizadas para ingresar a mercados internacionales con éxito garantizado.'
    },
    {
      icon: FileText,
      title: 'Asesoría en Trámites Aduaneros y Fitosanitarios',
      description: 'Te guiamos en todos los permisos y certificaciones necesarias para una exportación sin complicaciones.'
    },
    {
      icon: Truck,
      title: 'Gestión Logística y Cadena de Frío',
      description: 'Coordinamos el transporte y preservamos la frescura de tus productos desde el origen hasta el destino.'
    },
    {
      icon: Search,
      title: 'Estudios de Mercado Internacional',
      description: 'Analizamos oportunidades y tendencias para maximizar el potencial de tus productos agrícolas.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2E343E] mb-6">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para que tu negocio agrícola llegue más lejos con confianza y eficiencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <Icon className="w-12 h-12 text-[#95AD29] mb-4" />
                <h3 className="text-xl font-semibold text-[#2E343E] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;