import { useState, useEffect, useCallback } from 'react';
import oticaHeroAsset from '../assets/otica-hero.jpg.asset.json';
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20%C3%93tica%20Gouveia%20e%20gostaria%20de%20um%20or%C3%A7amento%20%F0%9F%98%8A";

const slides = [
  {
    badge: 'OFERTA ESPECIAL',
    badgeIcon: Star,
    title: 'Óculos Completos',
    subtitle: 'Armação + Lentes a partir de R$ 199,90',
    description: 'Lentes digitais com precisão Visioffice 3 da Essilor. Venha à loja no Umbará e Pinheirinho!',
    cta1: { label: 'PEDIR ORÇAMENTO', href: WHATSAPP_URL, icon: MessageCircle },
    cta2: { label: 'VER PROMOÇÕES', href: '#products' },
    image: '/lovable-uploads/otica-gouveia-vitrine.webp',
  },
  {
    badge: 'TECNOLOGIA EXCLUSIVA',
    badgeIcon: Star,
    title: 'Medição de Alta Precisão',
    subtitle: 'Visioffice 3 Essilor — Lentes Perfeitas Para Você',
    description: 'Medição digital em 5 minutos. Traga sua receita e venha à loja para lentes sob medida.',
    cta1: { label: 'AGENDAR MEDIÇÃO', href: WHATSAPP_URL, icon: Phone },
    cta2: { label: 'SAIBA MAIS', href: '#services' },
    image: '/lovable-uploads/otica-gouveia-armacoes.webp',
  },
  {
    badge: 'MELHOR IDADE',
    badgeIcon: MapPin,
    title: 'Atendimento Especial para Você',
    subtitle: 'Carinho e paciência — sua visão merece o melhor',
    description: 'R. Nicola Pellanda, 1286 — Pinheirinho. Traga sua receita, escolha com calma e retire com ajuste perfeito.',
    cta1: { label: 'COMO CHEGAR', href: 'https://maps.app.goo.gl/GhqcM45P9vZA8jMN9', icon: MapPin },
    cta2: { label: 'LIGAR AGORA', href: 'tel:+554131140663' },
    image: '/lovable-uploads/otica-gouveia-expositor.webp',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-bleed background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      
      {/* Red accent overlay */}
      <div className="absolute inset-0 mix-blend-multiply opacity-20" style={{ backgroundColor: 'hsl(var(--primary))' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="max-w-3xl py-24" key={current}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 animate-fade-in backdrop-blur-sm"
            style={{ backgroundColor: 'hsla(var(--primary), 0.95)', border: '1px solid hsla(0, 0%, 100%, 0.25)' }}
          >
            <slide.badgeIcon className="w-5 h-5 text-white" />
            <span className="text-base font-bold text-white tracking-wide">
              {slide.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-black text-white leading-[1.1] mb-5 animate-fade-in"
            style={{ fontSize: 'clamp(40px, 6.5vw, 78px)', animationDelay: '0.1s' }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="font-bold mb-5 text-white animate-fade-in"
            style={{ fontSize: 'clamp(20px, 3vw, 30px)', animationDelay: '0.2s', lineHeight: 1.4 }}
          >
            {slide.subtitle}
          </p>

          {/* Description */}
          <p className="text-white/90 mb-8 max-w-xl animate-fade-in"
            style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.7, animationDelay: '0.3s' }}
          >
            {slide.description}
          </p>

          {/* CTAs - botões grandes para melhor idade */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={slide.cta1.href}
              target={slide.cta1.href.startsWith('http') ? '_blank' : undefined}
              rel={slide.cta1.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-3 px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl text-primary-foreground"
              style={{ backgroundColor: 'hsl(var(--primary))', minHeight: '64px', fontSize: '19px' }}
            >
              {slide.cta1.icon && <slide.cta1.icon className="w-6 h-6" />}
              {slide.cta1.label}
            </a>
            {slide.cta2 && (
              <a
                href={slide.cta2.href}
                target={slide.cta2.href.startsWith('http') ? '_blank' : undefined}
                rel={slide.cta2.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center px-8 rounded-full font-bold transition-all duration-300 hover:scale-105 border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm"
                style={{ minHeight: '64px', fontSize: '19px' }}
              >
                {slide.cta2.label}
              </a>
            )}
          </div>

          {/* Atalhos rápidos - acessibilidade melhor idade */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a
              href="tel:+554131140663"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3 text-white font-semibold hover:bg-white/25 transition-all"
              style={{ minHeight: '56px', fontSize: '16px' }}
            >
              <Phone className="w-5 h-5" /> Ligar agora
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3 text-white font-semibold hover:bg-white/25 transition-all"
              style={{ minHeight: '56px', fontSize: '16px' }}
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3 text-white font-semibold hover:bg-white/25 transition-all"
              style={{ minHeight: '56px', fontSize: '16px' }}
            >
              <MapPin className="w-5 h-5" /> Como chegar
            </a>
          </div>

          {/* Google Rating */}
          <div className="mt-6 flex items-center gap-3 text-white animate-fade-in flex-wrap" style={{ animationDelay: '0.6s' }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold">4.9 no Google</span>
            <span className="text-base opacity-80">(+200 avaliações reais)</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110" aria-label="Slide anterior">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110" aria-label="Próximo slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
