import React, { useState, useEffect } from 'react';
import { Star, Phone, MessageCircle, MapPin, Clock, Truck } from 'lucide-react';

interface NeighborhoodHeroProps {
  title: string;
  subtitle: string;
  location: string;
  whatsappUrl: string;
  phoneNumber: string;
}

const NeighborhoodHero: React.FC<NeighborhoodHeroProps> = ({
  title,
  subtitle,
  location,
  whatsappUrl,
  phoneNumber
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/lovable-uploads/otica-gouveia-fachada.png',
      alt: `Fachada da Ótica Gouveia para ${location}`
    },
    {
      image: '/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png',
      alt: `Interior da Ótica Gouveia atendendo ${location}`
    },
    {
      image: '/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png',
      alt: `Produtos disponíveis na Ótica Gouveia para ${location}`
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Badge Entrega Grátis */}
      <div className="absolute top-24 right-4 md:top-28 md:right-8 z-20">
        <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse flex items-center gap-2">
          <Truck className="w-5 h-5" />
          <span className="font-semibold text-sm">Entrega Grátis* acima de R$ 250</span>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            <span className="text-white text-sm font-medium">{location}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            {subtitle}
          </p>

          {/* Rating */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <div className="flex items-center gap-1 mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">4.9</span>
            <span className="text-white/70 text-sm ml-2">• +1000 avaliações no Google</span>
          </div>

          {/* Store Info */}
          <div className="flex flex-wrap gap-4 mb-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-16h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                (41) 3114-0663
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
              Agende seu Exame de Vista
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border border-white/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">👁️</div>
              <h3 className="text-white font-semibold text-sm mb-1">Exame Gratuito</h3>
              <p className="text-white/70 text-xs">Avaliação completa da sua visão</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="text-white font-semibold text-sm mb-1">Entrega Grátis*</h3>
              <p className="text-white/70 text-xs">Acima de R$ 250 no {location}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="text-white font-semibold text-sm mb-1">12x Sem Juros</h3>
              <p className="text-white/70 text-xs">Parcele sua compra</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/40'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default NeighborhoodHero;
