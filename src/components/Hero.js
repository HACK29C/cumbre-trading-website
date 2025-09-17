import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-white flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#95AD29]/5 to-[#4E6156]/5"></div>
      <img
        src="https://images.unsplash.com/photo-1558618047-3c8c76ca6e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Exportación agrícola"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-[#95AD29]">CUMBRE</span>
            <br />
            <span className="text-[#4E6156]">TRADING S.A.S</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            "Exporta Con Respaldo, Crece con Eficiencia"
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#95AD29] to-[#4E6156] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto"
          >
            Contáctanos
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;