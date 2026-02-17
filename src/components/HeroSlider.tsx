import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20%C3%93tica%20Gouveia%20e%20gostaria%20de%20um%20or%C3%A7amento%20%F0%9F%98%8A";

const slides = [
  {
    badge: '🔥 OFERTA ESPECIAL',
    title: 'Óculos Completos',
    subtitle: 'Armação + Lentes a partir de R$ 199,90',
    description: 'Lentes digitais com precisão Visioffice 3 da Essilor',
    cta1: { label: 'PEDIR ORÇAMENTO', href: WHATSAPP_URL },
    cta2: { label: 'VER PROMOÇÕES', href: '#products' },
    image: '/lovable-uploads/otica-gouveia-carolina-herrera.png',
    gradient: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(221,100%,30%) 100%)',
  },
  {
    badge: '⚡ TECNOLOGIA EXCLUSIVA',
    title: 'Medição de Alta Precisão',
    subtitle: 'Visioffice 3 Essilor — Lentes Perfeitas Para Você',
    features: [
      'Distância pupilar exata',
      'Altura de montagem precisa',
      'Ângulo pantoscópico',
      'Em segundos, sua medida ideal',
    ],
    cta1: { label: 'SAIBA MAIS', href: '#services' },
    image: '/lovable-uploads/4a29b99c-56aa-418b-be88-b850f3f0cc76.png',
    gradient: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(225,80%,22%) 100%)',
  },
  {
    badge: '📍 SUA ÓTICA EM CURITIBA',
    title: 'Sua Ótica em Curitiba',
    subtitle: 'Pinheirinho • Boqueirão • Cajuru • Bairros próximos',
    description: 'Atendemos toda a região de Curitiba com qualidade e tecnologia',
    cta1: { label: 'COMO CHEGAR', href: 'https://maps.app.goo.gl/GhqcM45P9vZA8jMN9' },
    image: '/lovable-uploads/otica-gouveia-fachada.png',
    gradient: 'linear-gradient(135deg, hsl(225,100%,13%) 0%, hsl(221,80%,20%) 100%)',
    overlay: true,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimKey((k) => k + 1);
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
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: slide.gradient }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image for slide 3 */}
      {slide.overlay && (
        <div className="absolute inset-0">
          <img src={slide.image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: 'hsla(225,100%,13%,0.75)' }} />
        </div>
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh]">
          {/* Left Content */}
          <div key={animKey} className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-pill mb-6 animate-badge-pulse"
              style={{ backgroundColor: 'hsla(48, 100%, 50%, 0.15)', border: '1px solid hsla(48, 100%, 50%, 0.3)' }}
            >
              <span className="text-sm font-bold" style={{ color: 'hsl(48, 100%, 50%)' }}>
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="font-bold mb-4" 
              style={{ fontSize: 'clamp(18px, 3vw, 32px)', color: 'hsl(48, 100%, 50%)' }}
            >
              {slide.subtitle}
            </p>

            {/* Description or Features */}
            {slide.description && (
              <p className="text-white/90 text-lg mb-8 max-w-xl">{slide.description}</p>
            )}
            {slide.features && (
              <ul className="space-y-3 mb-8">
                {slide.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-lg">
                    <span style={{ color: 'hsl(48, 100%, 50%)' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={slide.cta1.href}
                target={slide.cta1.href.startsWith('http') ? '_blank' : undefined}
                rel={slide.cta1.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center px-8 py-4 rounded-pill font-bold text-base transition-all duration-300 hover:scale-105 shadow-xl"
                style={{ 
                  backgroundColor: slide.cta1.label === 'COMO CHEGAR' ? 'hsl(142, 70%, 49%)' : 'hsl(48, 100%, 50%)', 
                  color: slide.cta1.label === 'COMO CHEGAR' ? '#fff' : 'hsl(225, 100%, 13%)' 
                }}
              >
                {slide.cta1.label}
              </a>
              {slide.cta2 && (
                <a
                  href={slide.cta2.href}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-pill font-bold text-base transition-all duration-300 hover:scale-105"
                  style={{ border: '2px solid hsl(48, 100%, 50%)', color: 'hsl(48, 100%, 50%)' }}
                >
                  {slide.cta2.label}
                </a>
              )}
            </div>
          </div>

          {/* Right Image */}
          {!slide.overlay && (
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Indicators & Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Slide anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setAnimKey((k) => k + 1); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
                style={i === current ? { backgroundColor: 'hsl(48, 100%, 50%)' } : {}}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Próximo slide">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-sm mb-2 font-medium">Role para explorar</span>
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;
