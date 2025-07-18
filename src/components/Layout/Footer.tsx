
import React from 'react';
import { Phone, Mail, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-masterplan-dark-gray text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/d9796e93-d2bb-4c59-9858-2a31f9c0e391.png" 
                alt="Masterplan BPO Financeiro" 
                className="h-32 w-auto mb-4"
              />
              <p className="text-gray-300 leading-relaxed max-w-md">
                Especialistas em BPO Financeiro, oferecendo soluções completas para 
                otimizar a gestão financeira de empresas de todos os portes.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/masterplanbpofinanceiro/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-3 rounded-lg group"
                aria-label="Acesse nosso LinkedIn"
              >
                <Linkedin size={20} className="group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/masterplanbpofinanceiro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary transition-colors duration-300 p-3 rounded-lg group"
                aria-label="Acesse nosso Instagram"
              >
                <Instagram size={20} className="group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Phone className="mr-3 mt-1 flex-shrink-0 text-primary group-hover:text-white transition-colors" size={18} />
                <a 
                  href="tel:+5516997882208" 
                  className="hover:text-primary transition-colors"
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
                    className="hover:text-primary transition-colors text-sm leading-relaxed block"
                    aria-label="Enviar email para matheus@masterplanbpo.com.br"
                  >
                    matheus@masterplanbpo.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span>Início</span>
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span>Sobre Nós</span>
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span>Serviços</span>
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors duration-300 inline-flex items-center group">
                  <span>Contato</span>
                  <ExternalLink size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Masterplan BPO Financeiro. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
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
