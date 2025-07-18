
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16 xl:pt-36 xl:pb-20 relative overflow-hidden min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/1aef00f8-553e-484f-bb1f-71204338dc8d.png)'
      }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-5xl">
            {/* Badge */}
            <div className="inline-block bg-white/90 text-gray-900 font-medium px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base mb-6 sm:mb-8 animate-fade-in shadow-md">
              Mais de 15 anos de experiência
            </div>
            
            {/* Main Title - Improved responsive typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6 sm:mb-8 animate-fade-in" style={{
              animationDelay: '0.1s',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              Transforme a gestão financeira da sua{' '}
              <span className="text-accent" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>empresa</span>
            </h1>
            
            {/* Subtitle - Better spacing and sizing */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 sm:mb-10 lg:mb-12 animate-fade-in text-white/95 max-w-4xl mx-auto leading-relaxed" style={{
              animationDelay: '0.2s',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
            }}>
              Soluções eficientes para gestão financeira com tecnologia, experiência e 
              comprometimento total com o seu sucesso.
            </p>
            
            {/* Key Benefits - Better mobile layout */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12 animate-fade-in justify-center items-center" style={{
              animationDelay: '0.3s'
            }}>
              {[
                "Transparência total",
                "Tecnologia avançada", 
                "Suporte dedicado"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-white" style={{
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
                }}>
                  <CheckCircle className="text-accent mr-3 flex-shrink-0" size={20} style={{
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                  }} />
                  <span className="text-base sm:text-lg lg:text-xl font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Better responsive design */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 animate-fade-in justify-center items-center max-w-2xl mx-auto" style={{
              animationDelay: '0.4s'
            }}>
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-white hover:bg-white/95 text-masterplan-teal px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-semibold inline-flex items-center justify-center group text-base sm:text-lg lg:text-xl min-h-[52px] sm:min-h-[56px]" 
                aria-label="Entrar em contato via WhatsApp"
              >
                <span>Fale conosco agora</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#servicos" 
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/40 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-semibold inline-flex items-center justify-center text-base sm:text-lg lg:text-xl min-h-[52px] sm:min-h-[56px] backdrop-blur-sm" 
                aria-label="Ver nossos serviços" 
                style={{
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                }}
              >
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
