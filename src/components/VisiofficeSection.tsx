import { Target, Ruler, BookOpen, Compass, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20agendar%20uma%20medi%C3%A7%C3%A3o%20com%20Visioffice%203.%20Pode%20me%20ajudar?';

const features = [
  { Icon: Target, title: 'Distância Pupilar', desc: 'Medição exata da distância entre seus olhos para alinhamento perfeito das lentes' },
  { Icon: Ruler, title: 'Altura de Montagem', desc: 'Determinamos o ponto ideal da lente em sua armação para máximo conforto' },
  { Icon: BookOpen, title: 'Distância de Leitura', desc: 'Calibramos a área de leitura das lentes multifocais com precisão cirúrgica' },
  { Icon: Compass, title: 'Ângulo Pantoscópico', desc: 'Medimos o ângulo da armação no seu rosto para correção perfeita da visão' },
  { Icon: Zap, title: 'Resultado em Segundos', desc: 'Em poucos segundos obtemos todas as suas medidas, sem necessidade de exame de vista' },
  { Icon: CheckCircle2, title: 'Adaptação Garantida', desc: 'Suas lentes ficam cientificamente perfeitas para o seu rosto e estilo de vida' },
];

const VisiofficeSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-red via-brand-red to-[hsl(0,75%,32%)] overflow-hidden">
      {/* Decorative overlays */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-5">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-white text-brand-red shadow-lg">
            Exclusividade Ótica Gouveia
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white text-center mb-4">
          Medidas de Alta Precisão com Visioffice 3
        </h2>
        <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90">
          O mesmo equipamento das óticas premium do mundo, agora pertinho de você
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-brand-red" strokeWidth={2.2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="rounded-2xl p-5 md:p-6 mb-10 bg-white/10 backdrop-blur-sm border border-white/25">
          <p className="text-white text-[15px] md:text-base leading-relaxed flex gap-3">
            <AlertTriangle className="w-6 h-6 flex-shrink-0 text-white mt-0.5" />
            <span>
              <strong className="font-bold">Importante:</strong> A Ótica Gouveia <strong>NÃO realiza exames de vista</strong>. Para obter sua receita, consulte um oftalmologista. Com o Visioffice 3, garantimos que suas lentes sejam fabricadas com a maior precisão possível a partir da sua receita médica.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl bg-white text-brand-red hover:bg-gray-50"
            style={{ minHeight: '56px' }}
          >
            AGENDAR MEDIÇÃO GRATUITA
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisiofficeSection;
