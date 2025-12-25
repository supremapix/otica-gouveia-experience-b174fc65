import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ChevronLeft, ChevronRight, Star, Truck, Clock, Shield } from 'lucide-react';

interface NeighborhoodHeroProps {
  title: string;
  subtitle: string;
  location: string;
  whatsappUrl: string;
  phoneNumber: string;
}

const heroImages = [
  "/lovable-uploads/otica-gouveia-expositor.webp",
  "/lovable-uploads/otica-gouveia-armacoes.webp",
  "/lovable-uploads/otica-gouveia-vitrine.webp",
  "/lovable-uploads/otica-gouveia-rayban.webp",
  "/lovable-uploads/otica-gouveia-esportivos.webp",
  "/lovable-uploads/otica-gouveia-carolina-herrera.png",
];

const NeighborhoodHero: React.FC<NeighborhoodHeroProps> = ({
  title,
  subtitle,
  location,
  whatsappUrl,
  phoneNumber,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const benefits = [
    { icon: Truck, text: "Entrega Grátis*" },
    { icon: Clock, text: "Atendimento Rápido" },
    { icon: Shield, text: "Garantia Total" },
    { icon: Star, text: "5★ Avaliações" },
  ];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden pt-[56px] md:pt-[104px]">
      {/* Background Slider */}
      <div className="absolute inset-0 top-[56px] md:top-[104px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Ótica Gouveia ${location} - Imagem ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-104px)]">
        <div className="max-w-3xl py-8 sm:py-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Atendemos {location} e região</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>

          {/* Free Delivery Banner */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl mb-6 sm:mb-8 inline-flex items-center gap-3 shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Truck className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
            <div>
              <p className="font-bold text-sm sm:text-base">ENTREGA GRÁTIS* no {location}</p>
              <p className="text-xs sm:text-sm opacity-90">*Compras acima de R$ 250</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Falar no WhatsApp</span>
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-primary text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
              <span>(41) 3114-0663</span>
            </a>
          </div>

          {/* Benefits Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white text-xs sm:text-sm"
              >
                <benefit.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Google Rating */}
          <div className="mt-6 sm:mt-8 flex items-center gap-3 text-white animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm sm:text-base font-medium">4.9 no Google</span>
            <span className="text-xs sm:text-sm opacity-70">(+200 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodHero;
