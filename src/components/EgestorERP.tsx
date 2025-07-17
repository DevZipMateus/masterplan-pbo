
import React from 'react';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/12256";

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10">
          {/* Left column - Header Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 animate-fade-in">
            <a 
              href={egestorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Sistema de gestão empresarial
              </h2>
            </a>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-lg mx-auto lg:mx-0">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl animate-fade-in border border-white/20">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
            >
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a 
            href={egestorLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full max-w-xs sm:max-w-sm"
          >
            <button className="w-full py-2.5 sm:py-3 bg-green-400 hover:bg-green-500 text-gray-800 font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] border border-green-300 text-sm sm:text-base">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
