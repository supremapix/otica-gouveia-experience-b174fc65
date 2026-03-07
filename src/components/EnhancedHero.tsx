import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  location: string;
  backgroundImage?: string;
  whatsappUrl?: string;
  phoneNumber?: string;
}

const heroImages = [
  '/lovable-uploads/otica-gouveia-vitrine.webp',
  '/lovable-uploads/otica-gouveia-armacoes.webp',
  '/lovable-uploads/otica-gouveia-expositor.webp',
  '/lovable-uploads/otica-gouveia-rayban.webp',
  '/lovable-uploads/otica-gouveia-carolina-herrera.png',
];

const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title,
  subtitle,
  location,
  whatsappUrl = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20%C3%93tica%20Gouveia.",
  phoneNumber = "+554131140663"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Full-bleed background */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image}
            alt={`${title} - Imagem ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />

      {/* Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2.5 rounded-full transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2.5 rounded-full transition-all"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/40'
            }`}
            aria-label={`Imagem ${index + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl py-20">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20 animate-fade-in"
            style={{ backgroundColor: 'hsla(var(--primary), 0.9)' }}
          >
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-bold">{location}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 text-white leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>

          {/* Rating */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 mb-8 border border-white/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.9</span>
            <span className="text-white/70 text-sm">• +200 avaliações</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-all"
              style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
