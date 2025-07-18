
import React from 'react';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/12256";

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden" style={{ backgroundColor: '#727272' }}>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Two-column layout - Better responsive stacking */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 mb-10 sm:mb-12 lg:mb-16">
          
          {/* Left column - Header Text */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <a 
              href={egestorLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                Sistema de gestão empresarial
              </h2>
            </a>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-400 font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="lg:w-1/2 animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-cyan-100 p-1">
              <video 
                className="w-full aspect-video object-cover rounded-lg" 
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
        </div>
        
        {/* CTA Button - Better responsive sizing and positioning */}
        <div className="flex justify-center animate-fade-in">
          <a 
            href={egestorLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <button className="w-full py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] border-2 border-cyan-400 text-lg sm:text-xl lg:text-2xl min-h-[56px] sm:min-h-[64px] lg:min-h-[72px] relative overflow-hidden group">
              <span className="relative z-10">Teste grátis</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
