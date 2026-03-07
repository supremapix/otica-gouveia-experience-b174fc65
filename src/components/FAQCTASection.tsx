import { Glasses, Eye, Sun, Contact, Heart, MapPin, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20preciso%20de%20informa%C3%A7%C3%B5es.%20Pode%20me%20ajudar?";

const cards = [
  {
    icon: <Glasses className="w-9 h-9" />,
    title: "Óculos com Grau",
    desc: "Como funciona, tipos de lente e armação",
    count: "90 respostas",
  },
  {
    icon: <Eye className="w-9 h-9" />,
    title: "Exame de Vista",
    desc: "Quando fazer, o que esperar e resultado",
    count: "70 respostas",
  },
  {
    icon: <Sun className="w-9 h-9" />,
    title: "Óculos de Sol",
    desc: "Com ou sem grau, proteção e qualidade",
    count: "65 respostas",
  },
  {
    icon: <Contact className="w-9 h-9" />,
    title: "Lentes de Contato",
    desc: "Tipos, cuidados e como usar",
    count: "65 respostas",
  },
  {
    icon: <Heart className="w-9 h-9" />,
    title: "Dicas para a Melhor Idade",
    desc: "Tudo sobre visão para pessoas acima de 50 anos",
    count: "80 respostas",
  },
  {
    icon: <MapPin className="w-9 h-9" />,
    title: "Nossas Lojas",
    desc: "Pinheirinho e Umbará — onde nos encontrar",
    count: "Saiba tudo",
  },
];

const FAQCTASection = () => {
  return (
    <section id="faq-cta-section" className="py-16 md:py-24" style={{ backgroundColor: 'hsl(var(--primary))' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold rounded-full px-5 py-2 animate-pulse"
            style={{ fontSize: '16px' }}
          >
            <Glasses className="w-5 h-5" />
            CENTRAL DE DÚVIDAS
          </span>
        </div>

        {/* Title */}
        <h2
          className="text-white font-extrabold text-center mb-6 leading-tight"
          style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}
        >
          Ainda tem Dúvidas sobre Óculos<br />ou Exame de Vista?
        </h2>

        {/* Subtitle */}
        <p
          className="text-white/90 text-center max-w-2xl mx-auto mb-12"
          style={{ fontSize: '20px', lineHeight: '1.7' }}
        >
          A Ótica Gouveia preparou as respostas para as perguntas mais feitas por nossos clientes.
          Fácil de ler, fácil de entender.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {cards.map((card, i) => (
            <Link
              key={i}
              to="/faq"
              className="bg-white rounded-2xl p-7 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: 'hsl(var(--primary))' }}
                >
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ fontSize: '20px', color: '#1A1A1A' }}>
                    {card.title}
                  </h3>
                  <p className="mb-2" style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>
                    {card.desc}
                  </p>
                  <span className="inline-block font-bold rounded-lg px-3 py-1" style={{ fontSize: '14px', backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
                    {card.count}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/faq"
            className="inline-flex items-center justify-center gap-3 bg-white font-bold rounded-2xl transition-all hover:scale-105 shadow-xl mb-6"
            style={{
              color: 'hsl(var(--primary))',
              padding: '18px 40px',
              fontSize: '20px',
              minHeight: '64px',
            }}
          >
            Ver Todas as Perguntas
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="text-white/80 mb-4" style={{ fontSize: '18px' }}>
            Ou fale diretamente com a gente:
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-bold rounded-xl transition-all hover:opacity-90"
              style={{
                backgroundColor: '#25D366',
                padding: '16px 28px',
                fontSize: '18px',
                minHeight: '56px',
              }}
            >
              <MessageCircle className="w-6 h-6" />
              Falar pelo WhatsApp
            </a>
            <a
              href="tel:+554131140663"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold rounded-xl border-2 border-white/40 transition-all hover:bg-white/30"
              style={{
                padding: '16px 28px',
                fontSize: '18px',
                minHeight: '56px',
              }}
            >
              <Phone className="w-6 h-6" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQCTASection;
