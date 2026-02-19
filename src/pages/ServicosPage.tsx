import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import VisiofficeSection from '../components/VisiofficeSection';
import HowToBuySection from '../components/HowToBuySection';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20%C3%93tica%20Gouveia.";

const services = [
  {
    icon: '🎯',
    title: 'Medição Visioffice 3',
    description: 'Tecnologia de ponta da Essilor para medição precisa da distância pupilar, altura de montagem, ângulo pantoscópico e muito mais. Lentes perfeitamente calibradas para o seu rosto em minutos.',
    features: ['Distância pupilar exata', 'Altura de montagem ideal', 'Ângulo pantoscópico', 'Distância de leitura', 'Resultados em segundos'],
    badge: '⚡ EXCLUSIVO',
    cta: 'Agendar Medição',
    msg: 'Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20medi%C3%A7%C3%A3o%20com%20Visioffice%203.',
  },
  {
    icon: '🥽',
    title: 'Lentes de Alta Precisão',
    description: 'Trabalhamos com as melhores marcas de lentes do mercado: Essilor (Varilux, Crizal), Zeiss, Hoya. Lentes monofocais, multifocais, anti-reflexo, blue control e fotossensíveis.',
    features: ['Lentes multifocais Varilux', 'Tratamento anti-reflexo Crizal', 'Filtro blue control', 'Lentes fotossensíveis Transitions', 'Alto índice (1.67, 1.74, 1.76)'],
    badge: '💎 PREMIUM',
    cta: 'Ver Opções de Lentes',
    msg: 'Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20lentes%20dispon%C3%ADveis.',
  },
  {
    icon: '👓',
    title: 'Armações para Todos os Estilos',
    description: 'Mais de 500 modelos em estoque: Ray-Ban, Oakley, Ana Hickmann, Victor Hugo, Sabrina Sato, coleções infantis e muito mais. Consultoras de estilo para ajudar na escolha ideal.',
    features: ['Ray-Ban & Oakley originais', 'Ana Hickmann Collection', 'Victor Hugo Eyewear', 'Linha infantil resistente', 'Novos modelos toda semana'],
    badge: '🕶️ 500+ MODELOS',
    cta: 'Ver Catálogo',
    msg: 'Ol%C3%A1!%20Gostaria%20de%20ver%20as%20arma%C3%A7%C3%B5es%20dispon%C3%ADveis.',
  },
  {
    icon: '🔧',
    title: 'Manutenção e Ajustes',
    description: 'Conserto e ajuste profissional de óculos. Troca de plaquetas, parafusos, solda em armações metálicas, limpeza profissional ultrassônica e ajuste de haste.',
    features: ['Ajuste de armação grátis', 'Troca de plaquetas e parafusos', 'Limpeza ultrassônica', 'Solda em armações metálicas', 'Conserto de hastes'],
    badge: '🛠️ GRÁTIS AJUSTE',
    cta: 'Solicitar Conserto',
    msg: 'Ol%C3%A1!%20Preciso%20de%20manuten%C3%A7%C3%A3o%20nos%20meus%20%C3%B3culos.',
  },
  {
    icon: '🚚',
    title: 'Entrega Grátis em Casa',
    description: 'Compras acima de R$250 têm frete grátis para toda Curitiba e região. Receba seus óculos completos (armação + lentes) em casa ou no trabalho, de segunda a sexta-feira.',
    features: ['Frete grátis a partir de R$250', 'Entrega em 24–48h', 'Curitiba e Região Metropolitana', 'Seg a Sex, horário comercial', 'Rastreamento da entrega'],
    badge: '🚚 FRETE GRÁTIS',
    cta: 'Pedir com Entrega',
    msg: 'Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20com%20entrega%20em%20casa.',
  },
  {
    icon: '💳',
    title: 'Facilidade de Pagamento',
    description: 'Parcelamos em até 10x sem juros no cartão de crédito. PIX com desconto à vista. Condições especiais para aposentados, estudantes e professores.',
    features: ['Até 10x sem juros no cartão', 'PIX com desconto', '50% desconto 2ª via', 'Condições para aposentados', 'Consulte nossas promoções'],
    badge: '💰 10x SEM JUROS',
    cta: 'Consultar Condições',
    msg: 'Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20as%20formas%20de%20pagamento.',
  },
];

const ServicosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Serviços — Ótica Gouveia Curitiba | Lentes, Armações e Visioffice 3"
        description="Conheça todos os serviços da Ótica Gouveia Curitiba: medição Visioffice 3, lentes premium, armações de grife, manutenção, ajustes e entrega grátis."
        keywords="serviços ótica curitiba, visioffice 3 curitiba, lentes progressivas curitiba, conserto óculos curitiba, manutenção óculos"
        canonicalUrl="/servicos"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(221,100%,26%) 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: 'hsla(48,100%,50%,0.15)', color: 'hsl(48,100%,50%)', border: '1px solid hsla(48,100%,50%,0.3)' }}>
            ✨ O QUE OFERECEMOS
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Serviços <span style={{ color: 'hsl(48,100%,50%)' }}>Especializados</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Da medição precisa com Visioffice 3 até a entrega na sua casa — tudo o que você precisa para enxergar melhor, no mesmo lugar.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
          >
            💬 Falar com especialista
          </a>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{s.icon}</div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'hsla(221,100%,26%,0.1)', color: 'hsl(221,100%,26%)' }}>
                    {s.badge}
                  </span>
                </div>
                <h2 className="text-xl font-black text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">{s.description}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-[14px] text-foreground">
                      <span style={{ color: 'hsl(142,70%,49%)' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=5541991610663&text=${s.msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: 'hsl(221,100%,26%)', color: 'white' }}
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visioffice */}
      <VisiofficeSection />

      {/* Como Comprar */}
      <HowToBuySection neighborhoodName="Curitiba" />

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default ServicosPage;
