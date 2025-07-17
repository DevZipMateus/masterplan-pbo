
import React from 'react';
import { CheckCircle, Target, Heart, Shield, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Transparência',
    description: 'Atuamos com clareza e ética em todas as etapas do processo.'
  },
  {
    icon: Heart,
    title: 'Comprometimento',
    description: 'Estamos ao lado do cliente em cada desafio, como verdadeiros parceiros de negócio.'
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Buscamos constantemente novas tecnologias e práticas para otimizar a gestão financeira.'
  },
  {
    icon: CheckCircle,
    title: 'Confiança',
    description: 'Garantimos segurança e sigilo total das informações financeiras.'
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Entregamos resultados com qualidade, precisão e foco na melhoria contínua.'
  }
];

const AboutUs = () => {
  return (
    <section id="sobre" className="section bg-transparent">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6 animate-fade-in">
              Sobre a Masterplan
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-masterplan-dark-gray mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transformando a gestão financeira há{' '}
              <span className="text-primary">mais de 15 anos</span>
            </h2>
            
            <div className="space-y-6 text-lg text-masterplan-gray leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p>
                A <strong className="text-masterplan-dark-gray">Masterplan BPO Financeiro</strong> nasceu com o propósito de transformar a forma como empresas lidam com sua gestão financeira. Com uma equipe formada por profissionais com mais de 15 anos de experiência no mercado financeiro, unimos conhecimento técnico, visão estratégica e tecnologia para oferecer soluções completas.
              </p>
              
              <p>
                Nossa <strong className="text-primary">missão</strong> é simplificar a rotina financeira dos nossos clientes, garantindo controle, organização e informações confiáveis para decisões mais assertivas.
              </p>
              
              <p>
                Acreditamos que uma boa gestão financeira é a base para o crescimento sustentável de qualquer empresa e estamos aqui para construir esse caminho ao seu lado.
              </p>
            </div>
            
            {/* Key Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-masterplan-gray">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-masterplan-gray">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-masterplan-gray">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Values */}
          <div className="lg:w-1/2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-8">
                <Target className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-heading font-bold text-masterplan-dark-gray">Nossos Valores</h3>
              </div>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div 
                    key={value.title} 
                    className="flex items-start group animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm mr-4 group-hover:shadow-md transition-shadow duration-300">
                      <value.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-masterplan-dark-gray mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-masterplan-gray leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white shadow-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
            Nossa Missão
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
            "Simplificar a rotina financeira dos nossos clientes, garantindo controle, organização e informações confiáveis para decisões mais assertivas, sendo verdadeiros parceiros no crescimento sustentável de cada empresa."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
