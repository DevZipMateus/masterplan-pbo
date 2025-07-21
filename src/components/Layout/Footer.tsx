
import React from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-masterplan-dark-gray text-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Company Info - Better responsive layout */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <img 
                src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
                alt="Masterplan BPO Financeiro" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mb-4 sm:mb-6"
              />
              <p className="text-gray-300 leading-relaxed max-w-lg text-sm sm:text-base md:text-lg">
                Especialistas em BPO Financeiro, oferecendo soluções completas para 
                otimizar a gestão financeira de empresas de todos os portes.
              </p>
            </div>
            
            {/* Social Links - Better responsive spacing */}
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6">
              <a 
                href="https://www.linkedin.com/company/masterplanbpofinanceiro/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-2.5 sm:p-3 md:p-4 rounded-lg group"
                aria-label="Acesse nosso LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/masterplanbpofinanceiro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-2.5 sm:p-3 md:p-4 rounded-lg group"
                aria-label="Acesse nosso Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Contact Information - Better mobile layout with more space */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-semibold mb-4 sm:mb-6 lg:mb-8">Contato</h3>
            <ul className="space-y-3 sm:space-y-4 md:space-y-6">
              <li className="flex items-start group">
                <Phone className="mr-2 sm:mr-3 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" size={16} />
                <a 
                  href="tel:+5516997882208" 
                  className="hover:text-primary transition-colors text-sm sm:text-base md:text-lg"
                  aria-label="Ligar para (16) 99788-2208"
                >
                  (16) 99788-2208
                </a>
              </li>
              <li className="flex items-start group">
                <Mail className="mr-2 sm:mr-3 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" size={16} />
                <div className="min-w-0 flex-1">
                  <a 
                    href="mailto:matheus@masterplanbpo.com.br" 
                    className="hover:text-primary transition-colors text-sm sm:text-base md:text-lg leading-relaxed block break-words"
                    aria-label="Enviar email para matheus@masterplanbpo.com.br"
                  >
                    matheus@masterplanbpo.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm md:text-base text-gray-400 gap-3 sm:gap-4 md:gap-0">
            <p>© {new Date().getFullYear()} Masterplan BPO Financeiro. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
