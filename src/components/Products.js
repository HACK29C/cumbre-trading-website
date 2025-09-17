import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const categories = [
    {
      title: 'Frutas Tropicales',
      image: 'https://utfs.io/f/2vMRHqOYUHc0aaatm56MlP2v6X8etJWq7p3rj1iK9VwYu4nQ',
      examples: 'Mango, piña, aguacate, uchuva, banano, entre otras.',
      description: 'Frutas seleccionadas en su punto óptimo de maduración, con procesos de empaque que mantienen su frescura y sabor natural hasta llegar a destino.'
    },
    {
      title: 'Verduras Frescas',
      image: 'https://utfs.io/f/2vMRHqOYUHc0cGs7YXxLlIki8fCRNnvUyWdBhcZQKOVp6M0G',
      examples: 'Tomate, pimentón, brócoli, espinaca, lechuga, etc.',
      description: 'Verduras cultivadas bajo prácticas sostenibles, garantizando frescura y nutrición para mercados exigentes en todo el mundo.'
    },
    {
      title: 'Legumbres y Granos',
      image: 'https://utfs.io/f/2vMRHqOYUHc0ksKMd17fYZlcpNaeLVjJvm95wniIQo8GFd7H',
      examples: 'Arveja fresca, fríjol, lenteja, garbanzo.',
      description: 'Ofrecemos legumbres de alta calidad, cultivadas con trazabilidad y clasificadas para cumplir con normas internacionales de exportación.'
    },
    {
      title: 'Productos Procesados y Congelados',
      image: 'https://utfs.io/f/2vMRHqOYUHc0QUL68ghQiykWjlXTqU1cwIADob6V2r5N0P3R',
      examples: 'Pulpa de frutas, vegetales congelados, snacks naturales.',
      description: 'Soluciones prácticas y listas para exportación que mantienen todas las propiedades nutricionales, ideales para cadenas de distribución internacionales.'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2E343E] mb-6">Nuestros Productos</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En CUMBRE TRADING S.A.S nos especializamos en la exportación de productos agrícolas frescos, congelados o refrigerados, asegurando siempre calidad, frescura y trazabilidad en cada embarque. Trabajamos de la mano con productores locales que siguen prácticas responsables, para que cada envío cumpla con los estándares internacionales y garantice la confianza de nuestros clientes en cualquier mercado del mundo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#2E343E] mb-3">{category.title}</h3>
                <p className="text-gray-600 font-medium mb-2">{category.examples}</p>
                <p className="text-gray-700 leading-relaxed">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;