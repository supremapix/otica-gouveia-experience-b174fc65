import { Truck, Zap, Users, Gem } from 'lucide-react';

interface WhyChooseSectionProps {
  neighborhoodName: string;
}

const WhyChooseSection = ({ neighborhoodName }: WhyChooseSectionProps) => {
  const reasons = [
    {
      icon: Truck,
      title: 'Entrega Grátis na Sua Casa',
      description: `Compras acima de R$ 250,00 têm frete grátis para ${neighborhoodName} e bairros próximos. Receba em casa ou trabalho, de segunda a sexta.`,
    },
    {
      icon: Zap,
      title: 'Tecnologia Visioffice 3',
      description: 'O mesmo equipamento de óticas premium de São Paulo e Rio, agora no seu bairro. Medição precisa em segundos, lentes perfeitas garantidas.',
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Nossa equipe tem mais de 15 anos de experiência. Explicamos tudo sobre sua receita e ajudamos a escolher a melhor opção para seu estilo de vida.',
    },
    {
      icon: Gem,
      title: 'Qualidade Garantida',
      description: 'Trabalhamos apenas com marcas reconhecidas: Essilor, Zeiss, Hoya, Ray-Ban, Oakley. Garantia total de adaptação ou seu dinheiro de volta.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ✨ Diferenciais
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Por Que Escolher a Gouveia no{' '}
            <span className="text-primary">{neighborhoodName}</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-card rounded-3xl border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
