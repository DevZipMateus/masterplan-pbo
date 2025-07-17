
import React from 'react';
import { Calculator, CreditCard, TrendingUp, FileText, Users, DollarSign, PieChart, Target } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Gestão de Contas a Pagar e Receber',
    description: 'Controle total sobre fluxo de caixa com organização e acompanhamento detalhado de todas as movimentações financeiras.',
    icon: Calculator,
    color: 'from-white/30 to-white/10',
    delay: '0s'
  },
  {
    id: 2,
    title: 'Agendamento de Pagamentos',
    description: 'Automatização e programação inteligente de pagamentos, garantindo pontualidade e otimização do fluxo de caixa.',
    icon: CreditCard,
    color: 'from-white/30 to-white/10',
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Emissão de Notas e Boletos',
    description: 'Geração automatizada de documentos fiscais e instrumentos de cobrança com total conformidade legal.',
    icon: FileText,
    color: 'from-white/30 to-white/10',
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Custos e Precificação',
    description: 'Análise detalhada de custos e estruturação de preços estratégicos para maximizar a rentabilidade.',
    icon: PieChart,
    color: 'from-white/30 to-white/10',
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Consultoria Financeira',
    description: 'Orientação especializada para tomada de decisões estratégicas e planejamento financeiro corporativo.',
    icon: Users,
    color: 'from-white/30 to-white/10',
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Análise de Viabilidade Financeira',
    description: 'Estudos completos de viabilidade para novos projetos e investimentos empresariais.',
    icon: TrendingUp,
    color: 'from-white/30 to-white/10',
    delay: '0.5s'
  },
  {
    id: 7,
    title: 'Valuation Empresarial',
    description: 'Avaliação precisa do valor de mercado da empresa para processos de fusão, aquisição ou investimento.',
    icon: Target,
    color: 'from-white/30 to-white/10',
    delay: '0.6s'
  },
  {
    id: 8,
    title: 'Finanças Pessoais',
    description: 'Gestão e planejamento financeiro personalizado para executivos e empresários.',
    icon: DollarSign,
    color: 'from-white/30 to-white/10',
    delay: '0.7s'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section bg-transparent">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-white/20 text-white font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Soluções completas em <span className="text-blue-200">BPO Financeiro</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Oferecemos um portfólio abrangente de serviços financeiros, desde gestão operacional 
            até consultoria estratégica, sempre com foco na excelência e resultados.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in card-hover border border-white/20"
              style={{ animationDelay: service.delay }}
            >
              <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-200`}>
                <service.icon className="text-cyan-700" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4">
              Pronto para transformar sua gestão financeira?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossa experiência de mais de 15 anos 
              pode otimizar os processos financeiros da sua empresa.
            </p>
            <a 
              href="https://wa.me/5516997882208" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-sm font-medium inline-flex items-center group"
              aria-label="Solicitar consultoria via WhatsApp"
            >
              <span>Solicitar Consultoria</span>
              <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
