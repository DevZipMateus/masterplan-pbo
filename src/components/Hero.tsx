
import React from 'react';
import { ArrowRight, CheckCircle, Instagram, Users, Heart, MessageCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'url(/lovable-uploads/1aef00f8-553e-484f-bb1f-71204338dc8d.png)'
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-masterplan-teal/40" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-white/20 text-black font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in">
              Mais de 15 anos de experiência
            </div>
            
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-black leading-tight mb-4 sm:mb-6 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              Transforme a gestão financeira da sua{' '}
              <span className="text-[#0707f5]">empresa</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 animate-fade-in text-gray-950 max-w-2xl mx-auto lg:mx-0"
              style={{ animationDelay: '0.2s' }}
            >
              Soluções eficientes para gestão financeira com tecnologia, experiência e 
              comprometimento total com o seu sucesso.
            </p>
            
            {/* Key Benefits */}
            <div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in justify-center lg:justify-start"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center text-black/80 justify-center sm:justify-start">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Transparência total</span>
              </div>
              <div className="flex items-center text-black/80 justify-center sm:justify-start">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Tecnologia avançada</span>
              </div>
              <div className="flex items-center text-black/80 justify-center sm:justify-start">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={18} />
                <span className="text-sm sm:text-base">Suporte dedicado</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in max-w-md mx-auto lg:mx-0"
              style={{ animationDelay: '0.4s' }}
            >
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-white/90 text-masterplan-teal px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm font-medium inline-flex items-center justify-center group text-sm sm:text-base"
                aria-label="Entrar em contato via WhatsApp"
              >
                <span>Fale conosco agora</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-transparent hover:bg-white/10 text-black border border-black/30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-black/50 shadow-sm font-medium inline-flex items-center justify-center text-sm sm:text-base"
                aria-label="Conhecer nossos serviços via WhatsApp"
              >
                Nossos serviços
              </a>
            </div>
          </div>
          
          {/* Right Column - Instagram Section */}
          <div 
            className="w-full lg:w-1/2 animate-fade-in mt-8 lg:mt-0"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Instagram showcase */}
              <div className="bg-gradient-to-br from-white/20 to-accent/20 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <Instagram className="text-pink-500 mr-2 sm:mr-3" size={isMobile ? 20 : 24} />
                      <span className="text-sm sm:text-lg font-bold text-masterplan-gray">@masterplan_financas</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-masterplan-gray">
                      <Users className="mr-1" size={isMobile ? 14 : 16} />
                      <span>5.2k</span>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-masterplan-gray">Dicas financeiras diárias</span>
                      <Heart className="text-red-500" size={isMobile ? 14 : 16} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-masterplan-gray">Stories exclusivos</span>
                      <MessageCircle className="text-masterplan-teal" size={isMobile ? 14 : 16} />
                    </div>
                    <p className="text-xs text-masterplan-gray">Engajamento em crescimento</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2 sm:mr-3" />
                    <span className="text-xs sm:text-sm font-medium text-masterplan-gray">Conteúdo Exclusivo</span>
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-masterplan-dark-gray mb-1 sm:mb-2">Todos constantes</div>
                  <div className="text-xs sm:text-sm text-masterplan-gray">Dicas de gestão financeira</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div 
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-4 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center">
                  <Instagram className="text-pink-500 mr-1 sm:mr-2" size={isMobile ? 14 : 16} />
                  <span className="text-xs sm:text-sm font-medium text-masterplan-gray">Siga-nos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
