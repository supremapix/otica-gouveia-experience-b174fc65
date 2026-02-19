import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import VisiofficeSection from '../components/VisiofficeSection';
import { Handshake, Gem, Heart, Microscope, Truck, BadgeCheck, Glasses, MessageCircle, Navigation } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa.%20Pode%20me%20ajudar?";

const stats = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '10.000+', label: 'Clientes Satisfeitos' },
  { value: '500+', label: 'Modelos em Estoque' },
  { value: '4.9★', label: 'Avaliação no Google' },
];

const team = [
  { name: 'Equipe Especializada', role: 'Atendimento & Consultoria', desc: 'Mais de 15 anos ajudando clientes a encontrarem a lente e armação perfeita.' },
  { name: 'Técnicos Certificados', role: 'Montagem & Ajustes', desc: 'Profissionais treinados pelas melhores marcas do mercado óptico.' },
  { name: 'Consultoras de Estilo', role: 'Moda Eyewear', desc: 'Ajudamos você a escolher o modelo ideal para seu rosto e estilo de vida.' },
];

const values = [
  { Icon: Handshake, title: 'Confiança', desc: 'Relacionamentos duradouros baseados em transparência e honestidade.' },
  { Icon: Gem, title: 'Qualidade', desc: 'Apenas produtos e marcas de excelência: Essilor, Zeiss, Hoya, Ray-Ban, Oakley.' },
  { Icon: Heart, title: 'Cuidado', desc: 'Cada cliente é único. Atendimento personalizado do início ao fim.' },
  { Icon: Microscope, title: 'Tecnologia', desc: 'Visioffice 3 da Essilor — o mesmo equipamento das óticas premium do mundo.' },
  { Icon: Truck, title: 'Conveniência', desc: 'Entrega grátis para compras acima de R$250 em Curitiba e região.' },
  { Icon: BadgeCheck, title: 'Garantia', desc: 'Garantia total de adaptação ou devolvemos seu dinheiro.' },
];

const SobrePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre a Ótica Gouveia — Nossa História e Valores | Curitiba"
        description="Conheça a história da Ótica Gouveia Curitiba. Mais de 15 anos de tradição, tecnologia Visioffice 3 e atendimento especializado no Pinheirinho e região."
        keywords="sobre ótica gouveia, história ótica gouveia, equipe ótica curitiba, valores ótica gouveia"
        canonicalUrl="/sobre"
      />
      <Navbar />

      {/* Hero */}
      <section
        className="pt-32 pb-20 px-4 text-white"
        style={{ background: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(221,100%,26%) 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
            style={{ backgroundColor: 'hsla(48,100%,50%,0.15)', color: 'hsl(48,100%,50%)', border: '1px solid hsla(48,100%,50%,0.3)' }}>
            <Gem className="w-4 h-4" /> NOSSA HISTÓRIA
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Sobre a <span style={{ color: 'hsl(48,100%,50%)' }}>Ótica Gouveia</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Mais de 15 anos cuidando da visão de famílias em Curitiba com tecnologia de ponta, marcas premium e atendimento que vai além do esperado.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl font-black mb-1" style={{ color: 'hsl(221,100%,26%)' }}>{s.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'hsl(221,100%,26%)' }}>NOSSA TRAJETÓRIA</span>
              <h2 className="text-3xl md:text-4xl font-black mt-2 mb-6 text-foreground">
                Uma história de<br /><span style={{ color: 'hsl(221,100%,26%)' }}>dedicação e visão</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-[16px]">
                <p>
                  A <strong className="text-foreground">Ótica Gouveia</strong> nasceu no coração do Pinheirinho, em Curitiba, com uma missão simples e poderosa: oferecer a melhor experiência óptica para quem não precisaria se deslocar até o centro da cidade para ter acesso ao que há de mais moderno.
                </p>
                <p>
                  Ao longo de mais de <strong className="text-foreground">15 anos</strong>, conquistamos a confiança de mais de 10.000 famílias em Curitiba e região metropolitana. Cada cliente que entra pela nossa porta é tratado como único, com atenção total às suas necessidades visuais e preferências de estilo.
                </p>
                <p>
                  Investimos continuamente em tecnologia — como o <strong className="text-foreground">Visioffice 3 da Essilor</strong>, equipamento de medição de alta precisão que garante lentes perfeitamente calibradas para o seu rosto — e em um mix de produtos cuidadosamente selecionado, com as marcas mais renomadas do mercado.
                </p>
                <p>
                  Hoje, além da loja física no Pinheirinho, atendemos toda a região com <strong className="text-foreground">entrega gratuita</strong> para compras acima de R$250, aproximando a qualidade premium de quem vive nos bairros e cidades da Grande Curitiba.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
              >
                <MessageCircle className="w-5 h-5" /> Falar com a equipe
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-56 shadow-lg">
                  <img src="/lovable-uploads/otica-gouveia-fachada.png" alt="Fachada da Ótica Gouveia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden h-40 shadow-lg">
                  <img src="/lovable-uploads/otica-gouveia-vitrine.webp" alt="Vitrine Ótica Gouveia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-40 shadow-lg">
                  <img src="/lovable-uploads/otica-gouveia-expositor.webp" alt="Expositor de óculos" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-2xl overflow-hidden h-56 shadow-lg">
                  <img src="/lovable-uploads/otica-gouveia-armacoes.webp" alt="Armações Ótica Gouveia" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(210,40%,98%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'hsl(221,100%,26%)' }}>O QUE NOS MOVE</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground">Nossos Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'hsla(221,100%,26%,0.1)' }}>
                  <v.Icon className="w-7 h-7" style={{ color: 'hsl(221,100%,26%)' }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'hsl(221,100%,26%)' }}>PESSOAS</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-12 text-foreground">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: 'hsla(221,100%,26%,0.1)' }}>
                  <Glasses className="w-8 h-8" style={{ color: 'hsl(221,100%,26%)' }} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: 'hsl(221,100%,26%)' }}>{t.role}</p>
                <p className="text-muted-foreground text-[15px]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visioffice */}
      <VisiofficeSection />

      {/* CTA Final */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-foreground mb-4">Venha nos Conhecer!</h2>
          <p className="text-muted-foreground mb-8 text-[16px]">
            R. Nicola Pellanda, 1286 — Pinheirinho, Curitiba – PR<br />
            Seg–Sex: 9h às 18h | Sáb: 9h às 13h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'hsl(142,70%,49%)', color: 'white' }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 border-2"
              style={{ borderColor: 'hsl(221,100%,26%)', color: 'hsl(221,100%,26%)' }}
            >
              <Navigation className="w-5 h-5" /> Como Chegar
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
};

export default SobrePage;
