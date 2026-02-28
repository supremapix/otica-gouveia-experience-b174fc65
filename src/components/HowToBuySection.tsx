import { Send, ShoppingBag, ScanLine, MapPin } from 'lucide-react';

interface HowToBuySectionProps {
  neighborhoodName: string;
}

const steps = [
  {
    icon: Send,
    number: '1',
    title: 'Agende pelo WhatsApp',
    description: 'Entre em contato pelo WhatsApp ou telefone e agende seu atendimento na loja.',
  },
  {
    icon: ShoppingBag,
    number: '2',
    title: 'Traga Sua Receita',
    description: 'Venha à loja no Umbará com a receita do seu oftalmologista e escolha sua armação.',
  },
  {
    icon: ScanLine,
    number: '3',
    title: 'Medição com Visioffice 3',
    description: 'Realizamos a medição digital precisa no seu rosto — leva apenas 5 minutos.',
  },
  {
    icon: MapPin,
    number: '4',
    title: 'Retire e Teste na Loja',
    description: 'Quando seus óculos ficarem prontos, venha à loja para retirar e testar se ficaram perfeitos.',
  },
];

const HowToBuySection = ({ neighborhoodName }: HowToBuySectionProps) => {
  const whatsappUrl = `https://wa.me/554199161663?text=${encodeURIComponent(`Olá! Moro no ${neighborhoodName} e gostaria de agendar um atendimento.`)}`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Passo a Passo
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Como Adquirir Seus Óculos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Em 4 passos simples, seus óculos ficam prontos — retire na loja com ajuste perfeito
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary md:hidden" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 mb-10 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-0 md:ml-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  <div className="p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <step.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg min-h-[56px]"
          >
            <Send className="w-5 h-5" />
            Agendar Atendimento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
