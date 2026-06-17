import { Eye, Sun, Droplets, Carrot, Moon, Activity } from 'lucide-react';

import { Lightbulb } from 'lucide-react';

const tips = [
  {
    icon: Eye,
    title: 'Regra 20-20-20',
    description: 'A cada 20 minutos no computador, olhe para algo a 20 metros de distância por 20 segundos. Isso relaxa o músculo ciliar e previne cansaço visual.',
  },
  {
    icon: Sun,
    title: 'Proteção UV é Fundamental',
    description: 'Raios UV causam catarata, pterígio e degeneração macular. Use óculos de sol com proteção UV 400 sempre que sair de casa, mesmo em dias nublados.',
  },
  {
    icon: Droplets,
    title: 'Pisque Mais no Digital',
    description: 'Ao usar telas, piscamos 66% menos. Piscar espalha lágrimas e limpa os olhos. Force piscadas completas regularmente e use colírios lubrificantes se necessário.',
  },
  {
    icon: Carrot,
    title: 'Alimentação Rica em Vitamina A',
    description: 'Cenoura, espinafre, ovos e peixes ricos em ômega-3 fortalecem a visão. Antioxidantes como luteína e zeaxantina protegem contra degeneração macular.',
  },
  {
    icon: Moon,
    title: 'Sono Reparador para os Olhos',
    description: 'Durante o sono, os olhos se recuperam e produzem lágrimas. Durma 7-8 horas e mantenha o ambiente escuro.',
  },
  {
    icon: Activity,
    title: 'Exercício Também é Bom para os Olhos',
    description: 'Atividade física melhora circulação sanguínea, incluindo nos olhos. Reduz pressão intraocular e risco de glaucoma. Pratique 30min de exercício 5x por semana.',
  },
];

const HealthTipsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Lightbulb className="w-4 h-4" />
            Saúde Visual
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground mb-3 tracking-tight">
            Dicas de Saúde para Seus Olhos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cuide da sua visão com hábitos simples recomendados por especialistas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tips.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border-l-4 border-l-primary border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTipsSection;
