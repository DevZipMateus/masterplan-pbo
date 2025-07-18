
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#727272' }}>
      <div className="relative z-10">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          
          {/* Sections with the new gray background */}
          <div style={{ backgroundColor: '#727272' }}>
            <Services />
            <AboutUs />
            <EgestorERP />
            <Contact />
          </div>
        </main>
        
        <Footer />
        <FloatingButton />
      </div>
    </div>
  );
};

export default Index;
