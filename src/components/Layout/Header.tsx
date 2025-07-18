
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Mail, Phone, Linkedin, Instagram } from 'lucide-react';
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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleNavClick(); // Close mobile menu if open
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      {/* Contact Info Bar - Hidden on small screens */}
      <div className="bg-masterplan-teal text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:matheus@masterplanbpo.com.br" className="flex items-center gap-2 hover:text-masterplan-light-blue transition-colors">
              <Mail size={16} />
              <span>matheus@masterplanbpo.com.br</span>
            </a>
            <a href="tel:+5516997882208" className="flex items-center gap-2 hover:text-masterplan-light-blue transition-colors">
              <Phone size={16} />
              <span>(16) 99788-2208</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/company/masterplanbpofinanceiro/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-masterplan-light-blue transition-colors p-1"
              aria-label="Acesse nosso LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="https://www.instagram.com/masterplanbpofinanceiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-masterplan-light-blue transition-colors p-1"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Main Navigation */}
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            {/* Logo - Responsive sizing */}
            <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0" aria-label="Ir para página inicial" onClick={handleScrollToTop}>
              <img src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" alt="Masterplan BPO Financeiro - Soluções eficientes para gestão financeira" className="h-52 sm:h-54 lg:h-54 w- 58 transition-all duration-300" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8" role="navigation" aria-label="Menu principal">
              <button onClick={handleScrollToTop} className="nav-link text-base xl:text-lg">Início</button>
              <a href="#sobre" className="nav-link text-base xl:text-lg">Sobre</a>
              <a href="#servicos" className="nav-link text-base xl:text-lg">Serviços</a>
              <a href="#contato" className="nav-link text-base xl:text-lg">Contato</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-masterplan-gray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1 border-t mt-2" role="navigation" aria-label="Menu mobile">
            <button onClick={handleScrollToTop} className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center text-left">
              Início
            </button>
            <a href="#sobre" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Sobre
            </a>
            <a href="#servicos" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Serviços
            </a>
            <a href="#contato" className="px-4 py-3 text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
