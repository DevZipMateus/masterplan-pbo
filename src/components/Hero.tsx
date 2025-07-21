
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-16 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10 lg:pt-32 lg:pb-16 xl:pt-36 xl:pb-20 relative overflow-hidden min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(/lovable-uploads/1aef00f8-553e-484f-bb1f-71204338dc8d.png)'
      }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Background decorative elements - Better responsive positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 sm:top-16 md:top-20 right-4 sm:right-8 md:right-10 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-72 xl:h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-8 sm:bottom-16 md:bottom-20 left-4 sm:left-8 md:left-10 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-96 xl:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-5xl">
            {/* Logo - Better responsive scaling */}
            <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-16 animate-fade-in">
              <img 
                src="/lovable-uploads/31734b9a-712d-4ca4-9857-2d5292d0be11.png" 
                alt="Masterplan BPO Financeiro" 
                className="h-24 sm:h-32 md:h-40 lg:h-52 xl:h-64 w-auto mx-auto filter drop-shadow-lg"
              />
            </div>
            
            {/* Badge - Better responsive text */}
            <div className="inline-block bg-white/90 text-gray-900 font-medium px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 animate-fade-in shadow-md" style={{
              animationDelay: '0.1s'
            }}>
              Mais de 15 anos de experiência
            </div>
            
            {/* Main Title - Better responsive typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8 animate-fade-in px-2 sm:px-0" style={{
              animationDelay: '0.2s',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
            }}>
              Transforme a gestão financeira da sua{' '}
              <span className="text-accent" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>empresa</span>
            </h1>
            
            {/* Subtitle - Better responsive text */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in text-white/95 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0" style={{
              animationDelay: '0.3s',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
            }}>
              Soluções eficientes para gestão financeira com tecnologia, experiência e 
              comprometimento total com o seu sucesso.
            </p>
            
            {/* Key Benefits - Better mobile stacking */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10 lg:mb-12 animate-fade-in justify-center items-center" style={{
              animationDelay: '0.4s'
            }}>
              {[
                "Transparência total",
                "Tecnologia avançada", 
                "Suporte dedicado"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-white" style={{
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)'
                }}>
                  <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} style={{
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                  }} />
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons - Better responsive design */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 animate-fade-in justify-center items-center max-w-2xl mx-auto px-2 sm:px-0" style={{
              animationDelay: '0.5s'
            }}>
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto bg-white hover:bg-white/95 text-masterplan-teal px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-semibold inline-flex items-center justify-center group text-sm sm:text-base md:text-lg lg:text-xl min-h-[48px] sm:min-h-[52px] md:min-h-[56px]" 
                aria-label="Entrar em contato via WhatsApp"
              >
                <span>Fale conosco agora</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#servicos" 
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/40 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg font-semibold inline-flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl min-h-[48px] sm:min-h-[52px] md:min-h-[56px] backdrop-blur-sm" 
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
