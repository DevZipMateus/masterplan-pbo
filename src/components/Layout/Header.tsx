
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
    handleNavClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      {/* Contact Info Bar - Better responsive behavior */}
      <div className="bg-masterplan-teal text-white py-1.5 sm:py-2 px-2 sm:px-4 hidden md:block">
        <div className="container mx-auto max-w-7xl flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="mailto:matheus@masterplanbpo.com.br" className="flex items-center gap-1 sm:gap-2 hover:text-masterplan-light-blue transition-colors">
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden lg:inline">matheus@masterplanbpo.com.br</span>
              <span className="lg:hidden">Email</span>
            </a>
            <a href="tel:+5516997882208" className="flex items-center gap-1 sm:gap-2 hover:text-masterplan-light-blue transition-colors">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span>(16) 99788-2208</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href="https://www.linkedin.com/company/masterplanbpofinanceiro/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-masterplan-light-blue transition-colors p-1"
              aria-label="Acesse nosso LinkedIn"
            >
              <Linkedin size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a 
              href="https://www.instagram.com/masterplanbpofinanceiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-masterplan-light-blue transition-colors p-1"
              aria-label="Acesse nosso Instagram"
            >
              <Instagram size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Content - Better responsive spacing */}
      <div className="px-3 sm:px-4 lg:px-8 overflow-visible">
        <div className="container mx-auto max-w-7xl overflow-visible">
          <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 lg:h-24 overflow-visible">
            {/* Logo - Better responsive scaling */}
            <div className="relative flex-shrink-0 overflow-visible">
              <Link to="/" className="transition-all duration-300 transform hover:scale-[1.02] block relative z-10" aria-label="Ir para página inicial" onClick={handleScrollToTop}>
                <img 
                  src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
                  alt="Masterplan BPO Financeiro - Soluções eficientes para gestão financeira" 
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto transition-all duration-300 relative" 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation - Better spacing */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-8" role="navigation" aria-label="Menu principal">
              <button onClick={handleScrollToTop} className="nav-link text-sm xl:text-base">Início</button>
              <a href="#sobre" className="nav-link text-sm xl:text-base">Sobre</a>
              <a href="#servicos" className="nav-link text-sm xl:text-base">Serviços</a>
              <a href="#contato" className="nav-link text-sm xl:text-base">Contato</a>
            </nav>
            
            {/* Mobile Menu Button - Better touch target */}
            <button className="lg:hidden text-masterplan-gray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Better responsive design */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 flex flex-col space-y-1 border-t mt-2" role="navigation" aria-label="Menu mobile">
            <button onClick={handleScrollToTop} className="px-3 sm:px-4 py-3 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center text-left">
              Início
            </button>
            <a href="#sobre" className="px-3 sm:px-4 py-3 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Sobre
            </a>
            <a href="#servicos" className="px-3 sm:px-4 py-3 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Serviços
            </a>
            <a href="#contato" className="px-3 sm:px-4 py-3 text-sm sm:text-base text-masterplan-gray hover:text-primary hover:bg-gray-50 rounded-md transition-colors min-h-[44px] flex items-center" onClick={handleNavClick}>
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
