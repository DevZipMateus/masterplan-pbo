import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section bg-transparent">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-masterplan-dark-gray mb-6">
            Vamos conversar sobre o <span className="text-primary">futuro financeiro</span> da sua empresa
          </h2>
          <p className="text-lg md:text-xl text-masterplan-gray leading-relaxed">
            Nossa equipe está pronta para entender suas necessidades e apresentar 
            as melhores soluções em gestão financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-heading font-bold text-masterplan-dark-gray mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-masterplan-dark-gray mb-1">Telefone</h4>
                    <a 
                      href="tel:+5516997882208" 
                      className="text-masterplan-gray hover:text-primary transition-colors"
                      aria-label="Ligar para (16) 99788-2208"
                    >
                      (16) 99788-2208
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-masterplan-dark-gray mb-1">E-mail</h4>
                    <a 
                      href="mailto:matheus@masterplanbpo.com.br" 
                      className="text-masterplan-gray hover:text-primary transition-colors"
                      aria-label="Enviar email para matheus@masterplanbpo.com.br"
                    >
                      matheus@masterplanbpo.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-masterplan-dark-gray mb-1">Endereço</h4>
                    <p className="text-masterplan-gray">
                      Rua Valdecir Rodrigues Romero, 399<br />
                      Ribeirão Preto, SP<br />
                      CEP: 14056-520
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-masterplan-dark-gray mb-1">Horário de Atendimento</h4>
                    <p className="text-masterplan-gray">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Contact */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-heading font-semibold text-masterplan-dark-gray mb-4">Contato Rápido</h4>
              <p className="text-masterplan-gray mb-4">
                Prefere falar diretamente conosco? Entre em contato via WhatsApp para atendimento imediato.
              </p>
              <a 
                href="https://wa.me/5516997882208" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center group"
                aria-label="Contatar via WhatsApp"
              >
                <svg className="mr-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
                Conversar no WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-masterplan-dark-gray mb-6">
                Envie sua Mensagem
              </h3>
              
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-masterplan-dark-gray mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-masterplan-dark-gray mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-masterplan-dark-gray mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-masterplan-dark-gray mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-masterplan-dark-gray mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical"
                    placeholder="Conte-nos sobre suas necessidades em gestão financeira..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
