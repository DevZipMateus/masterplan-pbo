
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/1aef00f8-553e-484f-bb1f-71204338dc8d.png)'
        }}
      ></div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-masterplan-teal/40"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-white/20 text-white font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              Mais de 15 anos de experiência
            </div>
            
            <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-heading font-bold text-white leading-tight mb-6 animate-fade-in`} style={{ animationDelay: '0.1s' }}>
              Transforme a gestão financeira da sua{' '}
              <span className="text-accent">empresa</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Soluções eficientes para gestão financeira com tecnologia, experiência e 
              comprometimento total com o seu sucesso.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={20} />
                <span>Transparência total</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={20} />
                <span>Tecnologia avançada</span>
              </div>
              <div className="flex items-center text-white/90">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={20} />
                <span>Suporte dedicado</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-white/90 text-masterplan-teal px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm font-medium inline-flex items-center justify-center group"
                aria-label="Entrar em contato via WhatsApp"
              >
                <span>Fale conosco agora</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#servicos" 
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm font-medium inline-flex items-center justify-center"
                aria-label="Conhecer nossos serviços"
              >
                Nossos serviços
              </a>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Main image/illustration would go here */}
              <div className="bg-gradient-to-br from-white/20 to-accent/20 rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-masterplan-teal rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-masterplan-gray">Gestão Financeira</span>
                    </div>
                    <div className="text-sm text-masterplan-gray">Automatizada</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-masterplan-gray">Contas a Pagar</span>
                      <span className="text-sm font-medium">R$ 125.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-masterplan-gray">Contas a Receber</span>
                      <span className="text-sm font-medium text-masterplan-teal">R$ 180.000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-masterplan-teal h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-masterplan-gray">Análise em Tempo Real</span>
                  </div>
                  <div className="text-2xl font-bold text-masterplan-dark-gray mb-2">95%</div>
                  <div className="text-sm text-masterplan-gray">Redução no tempo de processos</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center">
                  <CheckCircle className="text-masterplan-teal mr-2" size={16} />
                  <span className="text-sm font-medium text-masterplan-gray">Controle Total</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '3s' }}>
                <div className="flex items-center">
                  <CheckCircle className="text-accent mr-2" size={16} />
                  <span className="text-sm font-medium text-masterplan-gray">Decisões Assertivas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
