
import React from 'react';
import { ArrowRight, CheckCircle, Instagram, Users, Heart, MessageCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/1aef00f8-553e-484f-bb1f-71204338dc8d.png)'
      }} />
      
      {/* Increased overlay opacity for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Background decorative elements with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-white/3 to-transparent rounded-full" />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Content - Now fully centered */}
          <div className="w-full max-w-4xl">
            <div className="inline-block bg-white/90 text-gray-900 font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 animate-fade-in shadow-md">
              Mais de 15 anos de experiência
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6 animate-fade-in px-2" style={{
              animationDelay: '0.1s',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              Transforme a gestão financeira da sua{' '}
              <span className="text-accent" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>empresa</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 animate-fade-in text-white/95 max-w-2xl mx-auto px-2" style={{
              animationDelay: '0.2s',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
            }}>
              Soluções eficientes para gestão financeira com tecnologia, experiência e 
              comprometimento total com o seu sucesso.
            </p>
            
            {/* Key Benefits with improved contrast */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 animate-fade-in justify-center px-2" style={{
              animationDelay: '0.3s'
            }}>
              <div className="flex items-center text-white justify-center" style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
              }}>
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                }} />
                <span className="text-xs sm:text-sm md:text-base font-medium">Transparência total</span>
              </div>
              <div className="flex items-center text-white justify-center" style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
              }}>
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                }} />
                <span className="text-xs sm:text-sm md:text-base font-medium">Tecnologia avançada</span>
              </div>
              <div className="flex items-center text-white justify-center" style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
              }}>
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} style={{
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                }} />
                <span className="text-xs sm:text-sm md:text-base font-medium">Suporte dedicado</span>
              </div>
            </div>
            
            {/* CTA Buttons with enhanced contrast */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in max-w-sm sm:max-w-md mx-auto justify-center px-2" style={{
              animationDelay: '0.4s'
            }}>
              <a href="https://wa.me/5516997882208" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-white/95 text-masterplan-teal px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-medium inline-flex items-center justify-center group text-sm sm:text-base min-h-[44px]" aria-label="Entrar em contato via WhatsApp">
                <span>Fale conosco agora</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <a href="https://wa.me/5516997882208" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 text-white border border-white/40 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-medium inline-flex items-center justify-center text-sm sm:text-base min-h-[44px] backdrop-blur-sm" aria-label="Conhecer nossos serviços via WhatsApp" style={{
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
              }}>
                Nossos serviços
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
