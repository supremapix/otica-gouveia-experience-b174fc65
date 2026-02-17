const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20agendar%20uma%20medi%C3%A7%C3%A3o%20com%20Visioffice%203.%20Pode%20me%20ajudar?";

const features = [
  { icon: '🎯', title: 'Distância Pupilar', desc: 'Medição exata da distância entre seus olhos para alinhamento perfeito das lentes' },
  { icon: '📏', title: 'Altura de Montagem', desc: 'Determinamos o ponto ideal da lente em sua armação para máximo conforto' },
  { icon: '📖', title: 'Distância de Leitura', desc: 'Calibramos a área de leitura das lentes multifocais com precisão cirúrgica' },
  { icon: '📐', title: 'Ângulo Pantoscópico', desc: 'Medimos o ângulo da armação no seu rosto para correção perfeita da visão' },
  { icon: '⚡', title: 'Resultado em Segundos', desc: 'Em apenas alguns segundos obtemos todas as suas medidas sem precisar de exame de vista' },
  { icon: '✅', title: 'Adaptação Garantida', desc: 'Suas lentes ficam cientificamente perfeitas para o seu rosto e estilo de vida' },
];

const VisiofficeSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'hsl(225, 100%, 13%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-2 rounded-pill text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: 'hsla(48,100%,50%,0.15)', color: 'hsl(48,100%,50%)', border: '1px solid hsla(48,100%,50%,0.3)' }}
          >
            EXCLUSIVIDADE ÓTICA GOUVEIA
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white text-center mb-4">
          Medidas de Alta Precisão com Visioffice 3
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto" style={{ color: 'hsl(200, 80%, 70%)' }}>
          O mesmo equipamento de óticas premium do mundo, agora na sua região
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/70 text-[15px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl p-6 mb-10" style={{ backgroundColor: 'hsla(48,100%,50%,0.1)', border: '1px solid hsla(48,100%,50%,0.3)' }}>
          <p className="text-white/90 text-[15px] leading-relaxed">
            <strong style={{ color: 'hsl(48,100%,50%)' }}>⚠️ Importante:</strong> A Ótica Gouveia <strong>NÃO realiza exames de vista</strong>. Para obter sua receita, consulte um oftalmologista. Porém, com o Visioffice 3, garantimos que suas lentes sejam fabricadas com a maior precisão possível a partir da sua receita médica.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-pill font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl"
            style={{ backgroundColor: 'hsl(48, 100%, 50%)', color: 'hsl(225, 100%, 13%)' }}
          >
            AGENDAR MEDIÇÃO GRATUITA
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisiofficeSection;
