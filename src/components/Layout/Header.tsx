
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' : 'bg-white py-3 sm:py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02]" aria-label="Ir para página inicial">
            <img 
              src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
              alt="Masterplan BPO Financeiro - Soluções eficientes para gestão financeira" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 lg:space-x-4" role="navigation" aria-label="Menu principal">
            <Link to="/" className="nav-link text-base lg:text-lg">Início</Link>
            <a href="#sobre" className="nav-link text-base lg:text-lg">Sobre</a>
            <a href="#servicos" className="nav-link text-base lg:text-lg">Serviços</a>
            <a href="#contato" className="nav-link text-base lg:text-lg">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-masterplan-gray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col space-y-3 border-t mt-4" role="navigation" aria-label="Menu mobile">
          <Link to="/" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Início</Link>
          <a href="#sobre" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Sobre</a>
          <a href="#servicos" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Serviços</a>
          <a href="#contato" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
