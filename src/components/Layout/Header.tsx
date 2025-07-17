
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-3'}`}>
      {/* Top Bar with Contact Info and Social Media */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-3 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-masterplan-gray mb-2 md:mb-0 items-center">
            <a 
              href="mailto:matheus@masterplanbpo.com.br" 
              className="flex items-center hover:text-primary transition-colors duration-300 mb-1 md:mb-0"
              aria-label="Enviar email para matheus@masterplanbpo.com.br"
            >
              <Mail size={16} className="mr-2" />
              matheus@masterplanbpo.com.br
            </a>
            <a 
              href="tel:+5516997882208" 
              className="flex items-center hover:text-primary transition-colors duration-300 whitespace-nowrap"
              aria-label="Ligar para (16) 99788-2208"
            >
              <Phone size={16} className="mr-2" />
              (16) 99788-2208
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/79718799/admin/dashboard/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-masterplan-gray hover:text-primary transition-colors duration-300"
              aria-label="Acesse nosso LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://www.instagram.com/masterplanbpofinanceiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-masterplan-gray hover:text-primary transition-colors duration-300"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram size={18} />
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
              className="h-10 md:h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Menu principal">
            <Link to="/" className="nav-link">Início</Link>
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#contato" className="nav-link">Contato</a>
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
        <nav className="container-custom py-4 flex flex-col space-y-3 border-t mt-4" role="navigation" aria-label="Menu mobile">
          <Link to="/" className="px-4 py-2 text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Início</Link>
          <a href="#sobre" className="px-4 py-2 text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Sobre</a>
          <a href="#servicos" className="px-4 py-2 text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Serviços</a>
          <a href="#contato" className="px-4 py-2 text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors" onClick={handleNavClick}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
