
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
        ? 'bottom-3 right-3' 
        : 'bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8'
    }`}>
      
      {/* Main Button - Better responsive sizing */}
      <button 
        onClick={handleMainButtonClick}
        className={`${
          isMobile 
            ? 'p-3 w-12 h-12' 
            : 'p-3 w-14 h-14 md:p-4 md:w-16 md:h-16 lg:w-18 lg:h-18'
        } rounded-full flex items-center justify-center transition-all duration-300 
          bg-primary hover:bg-primary/90 text-white
          ${isPulsing ? 'animate-pulse' : ''}
          transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl 
          min-h-[48px] min-w-[48px] md:min-h-[56px] md:min-w-[56px] lg:min-h-[64px] lg:min-w-[64px]`} 
        aria-label="Contatar via WhatsApp"
        style={{
          boxShadow: '0 8px 25px rgba(20, 184, 166, 0.4)'
        }}
      >
        <MessageCircle size={isMobile ? 18 : 20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
      </button>
    </div>
  );
};

export default FloatingButton;
