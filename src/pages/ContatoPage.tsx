import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20%C3%93tica%20Gouveia%20e%20gostaria%20de%20atendimento.";

const businessHours = [
  { day: 'Segunda-feira', hours: '09:00–18:00', open: true },
  { day: 'Terça-feira', hours: '09:00–18:00', open: true },
  { day: 'Quarta-feira', hours: '09:00–18:00', open: true },
  { day: 'Quinta-feira', hours: '09:00–18:00', open: true },
  { day: 'Sexta-feira', hours: '09:00–18:00', open: true },
  { day: 'Sábado', hours: '09:00–13:00', open: true },
  { day: 'Domingo', hours: 'Fechado', open: false },
];

const channels = [
  { icon: '💬', label: 'WhatsApp', value: '(41) 99161-0663', href: WHATSAPP_URL, desc: 'Resposta rápida em minutos', external: true },
  { icon: '📞', label: 'Telefone', value: '(41) 3114-0663', href: 'tel:+554131140663', desc: 'Atendimento Seg–Sex 9h–18h', external: false },
  { icon: '📍', label: 'Endereço', value: 'R. Nicola Pellanda, 1286', href: 'https://maps.app.goo.gl/GhqcM45P9vZA8jMN9', desc: 'Pinheirinho, Curitiba – PR', external: true },
  { icon: '📸', label: 'Instagram', value: '@gouveiaoticacuritiba', href: 'https://www.instagram.com/gouveiaoticacuritiba/', desc: 'Novidades e promoções', external: true },
];

const faqs = [
  { q: 'Fazem exame de vista?', a: 'Não realizamos exames de vista. Para sua receita, consulte um oftalmologista. Com a receita em mãos, fabricamos suas lentes com precisão usando o Visioffice 3.' },
  { q: 'Qual o prazo para ficarem os óculos?', a: 'Lentes em estoque: 3 a 5 dias úteis. Lentes especiais ou importadas: 7 a 15 dias úteis. Informamos o prazo exato no ato da compra.' },
  { q: 'Fazem entrega em domicílio?', a: 'Sim! Entregamos gratuitamente para compras acima de R$250 em Curitiba e Região Metropolitana. Agendamos a entrega por WhatsApp.' },
  { q: 'Aceitam plano de saúde?', a: 'Consultamos o reembolso do seu plano. Muitos planos cobrem parte do valor. Entre em contato e verificamos juntos!' },
];

const ContatoPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Ol%C3%A1!%20Meu%20nome%20%C3%A9%20${encodeURIComponent(formData.name)}.%20${encodeURIComponent(formData.message)}%20Meu%20telefone%3A%20${encodeURIComponent(formData.phone)}`;
    window.open(`https://api.whatsapp.com/send?phone=5541991610663&text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato — Ótica Gouveia Curitiba | WhatsApp, Telefone e Endereço"
        description="Entre em contato com a Ótica Gouveia Curitiba. WhatsApp (41) 99161-0663, telefone (41) 3114-0663. R. Nicola Pellanda, 1286 — Pinheirinho. Seg–Sex 9h–18h."
        keywords="contato ótica gouveia, telefone ótica gouveia, whatsapp ótica gouveia, endereço ótica pinheirinho curitiba"
        canonicalUrl="/contato"
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
            📞 FALE CONOSCO
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Entre em <span style={{ color: 'hsl(48,100%,50%)' }}>Contato</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos prontos para atender você! Escolha o canal que preferir.
          </p>
        </div>
      </section>

      {/* Canais de Contato */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className="group p-6 rounded-2xl border border-border/50 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="text-4xl mb-3">{c.icon}</div>
                <div className="font-bold text-foreground mb-1">{c.label}</div>
                <div className="font-semibold text-sm mb-2" style={{ color: 'hsl(221,100%,26%)' }}>{c.value}</div>
                <div className="text-muted-foreground text-xs">{c.desc}</div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-black text-foreground mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Seu nome *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 text-foreground"
                    style={{ '--tw-ring-color': 'hsl(221,100%,26%)' } as React.CSSProperties}
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 text-foreground"
                    placeholder="(41) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Mensagem *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 text-foreground resize-none"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
                  style={{ backgroundColor: 'hsl(48,100%,50%)', color: 'hsl(225,100%,13%)' }}
                >
                  💬 Enviar pelo WhatsApp
                </button>
              </form>
            </div>

            {/* Horário + Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5" style={{ color: 'hsl(221,100%,26%)' }} />
                  <h3 className="text-lg font-bold text-foreground">Horário de Funcionamento</h3>
                </div>
                <ul className="space-y-2">
                  {businessHours.map((h, i) => (
                    <li key={i} className="flex justify-between py-2 border-b border-border/30 last:border-0">
                      <span className="text-muted-foreground text-sm">{h.day}</span>
                      <span className={`font-bold text-sm ${h.open ? '' : 'text-destructive'}`}
                        style={h.open ? { color: 'hsl(221,100%,26%)' } : {}}>
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6" style={{ backgroundColor: 'hsla(221,100%,26%,0.06)', border: '1px solid hsla(221,100%,26%,0.2)' }}>
                <MapPin className="w-6 h-6 mb-3" style={{ color: 'hsl(221,100%,26%)' }} />
                <h3 className="font-bold text-foreground mb-1">Nossa Loja</h3>
                <p className="text-muted-foreground text-sm mb-3">R. Nicola Pellanda, 1286 — Pinheirinho, Curitiba – PR, 81880-000</p>
                <a
                  href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold hover:underline"
                  style={{ color: 'hsl(221,100%,26%)' }}
                >
                  📍 Abrir no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="px-4 pb-0 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.2486917075837!2d-49.292339524408596!3d-25.500941637619383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbd13da9c8b1%3A0x5a6cf2204b045a1c!2sR.%20Nicola%20Pellanda%2C%201286%20-%20Pinheirinho%2C%20Curitiba%20-%20PR%2C%2081880-000!5e0!3m2!1spt-BR!2sbr!4v1695655841619!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Ótica Gouveia"
            />
          </div>
        </div>
      </section>

      {/* FAQ rápido */}
      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(210,40%,98%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-foreground">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border/50">
                <h3 className="font-bold text-foreground mb-2">❓ {f.q}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
              style={{ backgroundColor: 'hsl(142,70%,49%)', color: 'white' }}
            >
              💬 Ainda tem dúvidas? Fale conosco
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

export default ContatoPage;
