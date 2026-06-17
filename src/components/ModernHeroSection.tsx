import { MapPin, Phone, Star, MessageCircle } from 'lucide-react';
import heroFaq from '../assets/hero-faq.webp';

interface ModernHeroSectionProps {
  neighborhoodName: string;
  isMainUnit?: boolean;
  address?: string;
  whatsappUrl: string;
  phoneNumber?: string;
}

const ModernHeroSection = ({ 
  neighborhoodName, 
  isMainUnit = false,
  address,
  whatsappUrl,
  phoneNumber = "+554131140663"
}: ModernHeroSectionProps) => {
  const benefits = [
    { text: "Melhor Idade" },
    { text: "Pinheirinho e Umbará" },
    { text: "Garantia Total" },
    { text: "5★ Google" },
  ];

  return (
    <section
      className="relative pt-32 pb-24 px-4 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroFaq})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlays para legibilidade e identidade vermelha/preta */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 45%, hsla(0,75%,42%,0.78) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, hsla(0,75%,42%,0.55) 0%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex items-center">
        <div className="max-w-3xl py-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 animate-fade-in"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(6px)' }}
          >
            <MapPin className="w-4 h-4" />
            <span>{isMainUnit ? 'Nossa Loja' : `Atendemos ${neighborhoodName}`} — Pinheirinho e Umbará</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ótica Gouveia{' '}
            <span className="text-white relative inline-block">
              {neighborhoodName}
              <span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-white" />
            </span>
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
              className="group text-white px-7 sm:px-8 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105"
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
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-3 text-white animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
              ))}
            </div>
            <span className="text-sm sm:text-base font-semibold">4.9 no Google</span>
            <span className="text-xs sm:text-sm opacity-70">(+200 avaliações)</span>
          </div>

          {/* Address card for main unit */}
          {isMainUnit && address && (
            <div className="mt-6 flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="p-2 rounded-xl" style={{ backgroundColor: 'hsla(var(--primary), 0.3)' }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Nosso Endereço</p>
                <p className="text-xs text-white/80 mt-0.5">{address}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
