
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      {/* Contact Info Bar - Hidden on mobile */}
      <div className="bg-masterplan-teal text-white py-1.5 px-3 hidden sm:block">
        <div className="container mx-auto max-w-7xl flex justify-center sm:justify-between items-center gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:matheus@masterplanbpo.com.br" className="flex items-center gap-2 hover:text-masterplan-light-blue transition-colors">
              <Mail size={14} />
              <span className="hidden md:inline">matheus@masterplanbpo.com.br</span>
            </a>
            <a href="tel:+5516997882208" className="flex items-center gap-2 hover:text-masterplan-light-blue transition-colors">
              <Phone size={14} />
              <span>(16) 99788-2208</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Navigation */}
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02]" aria-label="Ir para página inicial">
              <img 
                src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
                alt="Masterplan BPO Financeiro - Soluções eficientes para gestão financeira" 
                className="w-auto h-24 transition-all duration-300"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 lg:space-x-4" role="navigation" aria-label="Menu principal">
              <Link to="/" className="nav-link text-sm lg:text-base">Início</Link>
              <a href="#sobre" className="nav-link text-sm lg:text-base">Sobre</a>
              <a href="#servicos" className="nav-link text-sm lg:text-base">Serviços</a>
              <a href="#contato" className="nav-link text-sm lg:text-base">Contato</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-masterplan-gray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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
          <nav className="container mx-auto px-3 sm:px-4 py-4 flex flex-col space-y-2 border-t mt-2" role="navigation" aria-label="Menu mobile">
            <Link to="/" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>Início</Link>
            <a href="#sobre" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>Sobre</a>
            <a href="#servicos" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>Serviços</a>
            <a href="#contato" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
