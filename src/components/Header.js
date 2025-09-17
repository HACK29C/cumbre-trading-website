import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-200/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img
            src="https://utfs.io/f/2vMRHqOYUHc0OP8ZZRWwHMo3kKrdGO2gqByb0CvhnIYi8Pxl"
            alt="Cumbre Trading Logo"
            className="h-10 w-auto"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#95AD29] to-[#4E6156] bg-clip-text text-transparent">
              CUMBRE TRADING S.A.S
            </h1>
            <p className="text-xs text-gray-600">NIT: 1004533320-1</p>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#95AD29] font-medium transition-colors">
            Inicio
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#95AD29] font-medium transition-colors">
            Sobre Nosotros
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#95AD29] font-medium transition-colors">
            Servicios
          </button>
          <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#95AD29] font-medium transition-colors">
            Productos
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#95AD29] font-medium transition-colors">
            Contacto
          </button>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <nav className="flex flex-col gap-4 px-4 py-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#95AD29] py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#95AD29] py-2">
              Sobre Nosotros
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#95AD29] py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#95AD29] py-2">
              Productos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#95AD29] py-2">
              Contacto
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;