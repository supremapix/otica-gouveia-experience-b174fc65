import { Eye, Glasses, Sun, Shield, Award, Users, Clock, Truck } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: 'Exames de Vista',
    description: 'Equipamentos modernos e profissionais qualificados para cuidar da sua saúde ocular',
    highlight: 'Gratuito',
  },
  {
    icon: Glasses,
    title: 'Óculos de Grau',
    description: 'Armações das melhores marcas com lentes personalizadas para sua necessidade',
    highlight: 'Parcelamos',
  },
  {
    icon: Sun,
    title: 'Óculos de Sol',
    description: 'Proteção UV garantida com as marcas mais desejadas do mercado',
    highlight: 'Originais',
  },
];

const steps = [
  {
    number: '01',
    title: 'Agende Online',
    description: 'Via WhatsApp ou telefone, escolha o melhor horário para você',
    icon: Clock,
  },
  {
    number: '02',
    title: 'Exame Completo',
    description: 'Realize seu exame de vista com nossos profissionais',
    icon: Eye,
  },
  {
    number: '03',
    title: 'Escolha Seu Óculos',
    description: 'Milhares de armações para encontrar a ideal',
    icon: Glasses,
  },
  {
    number: '04',
    title: 'Receba em Casa',
    description: 'Entrega grátis acima de R$250 ou retire na loja',
    icon: Truck,
  },
];

const differentials = [
  { icon: Award, title: '+40 Anos', description: 'de Tradição' },
  { icon: Users, title: '+10.000', description: 'Clientes Atendidos' },
  { icon: Shield, title: 'Garantia', description: 'Total' },
  { icon: Truck, title: 'Entrega', description: 'Grátis*' },
];

interface ServicesSectionProps {
  neighborhoodName: string;
}

const ServicesSection = ({ neighborhoodName }: ServicesSectionProps) => {
  return (
    <>
      {/* Diferenciais */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="p-3 bg-white/10 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <p className="text-xl md:text-2xl font-bold">{item.title}</p>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Tudo que Você Precisa em{' '}
              <span className="text-primary">{neighborhoodName}</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Oferecemos uma experiência completa em cuidados visuais, 
              com qualidade e preços justos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 md:p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    {service.highlight}
                  </span>
                </div>

                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Simples e Rápido
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Em 4 passos simples você cuida da sua visão
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
                )}

                <div className="relative flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all">
                  {/* Número */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>

                  <div className="p-4 bg-primary/10 rounded-2xl mb-4 mt-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
