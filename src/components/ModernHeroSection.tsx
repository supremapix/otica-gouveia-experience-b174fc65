import { useState, useEffect } from 'react';
import { MapPin, Phone, Star, CheckCircle, ChevronRight, MessageCircle, ChevronLeft, Clock, Heart, Shield } from 'lucide-react';

interface ModernHeroSectionProps {
  neighborhoodName: string;
  isMainUnit?: boolean;
  address?: string;
  whatsappUrl: string;
  phoneNumber?: string;
}

const heroImages = [
  '/lovable-uploads/otica-gouveia-vitrine.webp',
  '/lovable-uploads/otica-gouveia-armacoes.webp',
  '/lovable-uploads/otica-gouveia-rayban.webp',
  '/lovable-uploads/otica-gouveia-expositor.webp',
  '/lovable-uploads/otica-gouveia-carolina-herrera.png',
  '/lovable-uploads/otica-gouveia-esportivos.webp',
];

const ModernHeroSection = ({ 
  neighborhoodName, 
  isMainUnit = false,
  address,
  whatsappUrl,
  phoneNumber = "+554131140663"
}: ModernHeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const benefits = [
    { icon: Heart, text: "Melhor Idade" },
    { icon: Clock, text: "Pinheirinho e Umbará" },
    { icon: Shield, text: "Garantia Total" },
    { icon: Star, text: "5★ Google" },
  ];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Full-bleed background images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Ótica Gouveia ${neighborhoodName} - Imagem ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Premium gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentImage ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex items-center min-h-[100svh]">
        <div className="max-w-3xl py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 animate-fade-in backdrop-blur-sm"
            style={{ backgroundColor: 'hsla(var(--primary), 0.9)', color: 'white' }}
          >
            <MapPin className="w-4 h-4" />
            <span>{isMainUnit ? 'Nossa Loja' : `Atendemos ${neighborhoodName}`} — Pinheirinho e Umbará</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ótica Gouveia{' '}
            <span style={{ color: 'hsl(var(--primary))' }} className="brightness-150">{neighborhoodName}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Atendimento carinhoso e especializado para a melhor idade. Traga sua receita, escolha com calma e retire com ajuste perfeito.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden text-white px-7 sm:px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
              style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Falar no WhatsApp</span>
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-primary text-white px-7 sm:px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>(41) 3114-0663</span>
            </a>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white text-xs sm:text-sm border border-white/10"
              >
                <benefit.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-3 text-white animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm sm:text-base font-semibold">4.9 no Google</span>
            <span className="text-xs sm:text-sm opacity-70">(+200 avaliações)</span>
          </div>

          {/* Address card for main unit */}
          {isMainUnit && address && (
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl" style={{ backgroundColor: 'hsla(var(--primary), 0.3)' }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Nosso Endereço</p>
                  <p className="text-xs text-white/80 mt-0.5">{address}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
