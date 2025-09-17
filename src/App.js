import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;