
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Start pulsing effect every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 2000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide button when scrolling down (after 100px from top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); // Close menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMainButtonClick = () => {
    // Go directly to WhatsApp
    window.open('https://wa.me/5516997882208', '_blank', 'noopener,noreferrer');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false);
  };

  return (
    <div className={`fixed z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
    } ${
      isMobile 
        ? 'bottom-4 right-4' 
        : 'bottom-6 right-6 md:bottom-8 md:right-8'
    }`}>
      {/* Contact Options - Hidden for now since main button goes to WhatsApp */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5516997882208" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-white text-primary px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg shadow-lg hover:shadow-xl border border-primary/20 hover:bg-primary/5 transition-all duration-300 gap-2 sm:gap-3 font-medium group text-xs sm:text-sm whitespace-nowrap" 
          aria-label="Contatar via WhatsApp"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687" />
          </svg>
          <span className="group-hover:text-primary transition-colors">WhatsApp</span>
        </a>
      </div>
      
      {/* Main Button - Better mobile sizing */}
      <button 
        onClick={handleMainButtonClick}
        className={`${
          isMobile 
            ? 'p-3 w-14 h-14' 
            : 'p-4 w-16 h-16'
        } rounded-full flex items-center justify-center transition-all duration-300 
          bg-primary hover:bg-primary/90 text-white
          ${isPulsing ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl min-h-[56px] min-w-[56px]`} 
        aria-label="Contatar via WhatsApp"
        style={{
          boxShadow: '0 8px 25px rgba(20, 184, 166, 0.4)'
        }}
      >
        <MessageCircle size={isMobile ? 20 : 24} />
      </button>
    </div>
  );
};

export default FloatingButton;
