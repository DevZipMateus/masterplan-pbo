
import React from 'react';
import { Phone, Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-masterplan-dark-gray text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Better responsive layout */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
                alt="Masterplan BPO Financeiro" 
                className="h-24 sm:h-28 lg:h-32 w-auto mb-6"
              />
              <p className="text-gray-300 leading-relaxed max-w-lg text-base sm:text-lg">
                Especialistas em BPO Financeiro, oferecendo soluções completas para 
                otimizar a gestão financeira de empresas de todos os portes.
              </p>
            </div>
            
            {/* Social Links - Better spacing */}
            <div className="flex space-x-4 sm:space-x-6">
              <a 
                href="https://www.linkedin.com/company/masterplanbpofinanceiro/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-3 sm:p-4 rounded-lg group"
                aria-label="Acesse nosso LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-white transition-colors sm:w-6 sm:h-6" />
              </a>
              <a 
                href="https://www.instagram.com/masterplanbpofinanceiro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-3 sm:p-4 rounded-lg group"
                aria-label="Acesse nosso Instagram"
              >
                <Instagram size={20} className="group-hover:text-white transition-colors sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact Information - Better mobile layout */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 lg:mb-8">Contato</h3>
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start group">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" size={18} />
                <a 
                  href="tel:+5516997882208" 
                  className="hover:text-primary transition-colors text-base sm:text-lg"
                  aria-label="Ligar para (16) 99788-2208"
                >
                  (16) 99788-2208
                </a>
              </li>
              <li className="flex items-start group">
                <Mail className="mr-3 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" size={18} />
                <div className="min-w-0 flex-1">
                  <a 
                    href="mailto:matheus@masterplanbpo.com.br" 
                    className="hover:text-primary transition-colors text-base sm:text-lg leading-relaxed block whitespace-nowrap overflow-hidden text-ellipsis"
                    aria-label="Enviar email para matheus@masterplanbpo.com.br"
                  >
                    matheus@masterplanbpo.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 lg:mb-8">Links Rápidos</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { name: 'Início', href: '#' },
                { name: 'Sobre Nós', href: '#sobre' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Contato', href: '#contato' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-primary transition-colors duration-300 inline-flex items-center group text-base sm:text-lg"
                  >
                    <span>{link.name}</span>
                    <ExternalLink size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-400 gap-4 md:gap-0">
            <p>© {new Date().getFullYear()} Masterplan BPO Financeiro. Todos os direitos reservados.</p>
            <div className="flex items-center space-x-4 sm:space-x-6">
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
