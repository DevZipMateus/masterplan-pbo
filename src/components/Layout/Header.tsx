
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Menu, X } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 sm:py-2' : 'bg-white py-2 sm:py-3'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row md:space-x-6 text-xs sm:text-sm text-masterplan-gray mb-2 md:mb-0 items-center space-y-1 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <a 
              href="mailto:matheus@masterplanbpo.com.br" 
              className="flex items-center hover:text-primary transition-colors duration-300"
              aria-label="Enviar email para matheus@masterplanbpo.com.br"
            >
              <Mail size={14} className="mr-1.5 sm:mr-2 flex-shrink-0" />
              <span className="break-all sm:break-normal">matheus@masterplanbpo.com.br</span>
            </a>
            <a 
              href="tel:+5516997882208" 
              className="flex items-center hover:text-primary transition-colors duration-300 whitespace-nowrap"
              aria-label="Ligar para (16) 99788-2208"
            >
              <Phone size={14} className="mr-1.5 sm:mr-2 flex-shrink-0" />
              (16) 99788-2208
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 sm:space-x-4">
            <a 
              href="https://www.linkedin.com/company/masterplan-bpo-financeiro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-masterplan-gray hover:text-primary transition-colors duration-300"
              aria-label="Acesse nosso LinkedIn"
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a 
              href="https://www.instagram.com/masterplanbpofinanceiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-masterplan-gray hover:text-primary transition-colors duration-300"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02]" aria-label="Ir para página inicial">
            <img 
              src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
              alt="Masterplan BPO Financeiro - Soluções eficientes para gestão financeira" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2" role="navigation" aria-label="Menu principal">
            <Link to="/" className="nav-link text-sm lg:text-base">Início</Link>
            <a href="#sobre" className="nav-link text-sm lg:text-base">Sobre</a>
            <a href="#servicos" className="nav-link text-sm lg:text-base">Serviços</a>
            <a href="#contato" className="nav-link text-sm lg:text-base">Contato</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-masterplan-gray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-1.5 sm:p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col space-y-2 sm:space-y-3 border-t mt-3 sm:mt-4" role="navigation" aria-label="Menu mobile">
          <Link to="/" className="px-3 sm:px-4 py-2 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Início</Link>
          <a href="#sobre" className="px-3 sm:px-4 py-2 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Sobre</a>
          <a href="#servicos" className="px-3 sm:px-4 py-2 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Serviços</a>
          <a href="#contato" className="px-3 sm:px-4 py-2 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
