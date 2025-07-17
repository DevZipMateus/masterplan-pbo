
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import EgestorERP from '../components/EgestorERP';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: 'url(/lovable-uploads/6b3f494d-f3be-450a-ac0f-f3b3bcebba3a.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay for better content readability */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <AboutUs />
          <EgestorERP />
          <Contact />
        </main>
        
        <Footer />
        <FloatingButton />
      </div>
    </div>
  );
};

export default Index;
