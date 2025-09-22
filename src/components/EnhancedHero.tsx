import React from 'react';
import { Star, Phone, MessageCircle } from 'lucide-react';

interface EnhancedHeroProps {
  title: string;
  subtitle: string;
  location: string;
  backgroundImage?: string;
  whatsappUrl?: string;
  phoneNumber?: string;
}

const EnhancedHero: React.FC<EnhancedHeroProps> = ({
  title,
  subtitle,
  location,
  backgroundImage = '/hero-background.jpg',
  whatsappUrl = "https://wa.me/5541999123456",
  phoneNumber = "+5541999123456"
}) => {
  return (
    <section 
      className="relative pt-24 pb-20 px-4 min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      
      {/* Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Localização Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
          <span className="text-white text-sm font-medium">📍 {location}</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
          {subtitle}
        </p>

        {/* Rating Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
          <div className="flex items-center space-x-1 mr-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold">4.9</span>
          <span className="text-white/80 ml-2">• Mais de 1000 avaliações</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            <span>Agendar pelo WhatsApp</span>
          </a>
          
          <a
            href={`tel:${phoneNumber}`}
            className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/30 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span>Ligar Agora</span>
          </a>

          <a
            href="https://tinyurl.com/5n6zau9b"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Star className="w-5 h-5 group-hover:animate-spin" />
            <span>Avaliar Agora</span>
          </a>
        </div>

        {/* Features Destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-white font-semibold mb-2">Exame Gratuito</h3>
            <p className="text-white/80 text-sm">Avaliação completa da sua visão sem custo</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="text-white font-semibold mb-2">Entrega Rápida</h3>
            <p className="text-white/80 text-sm">Seus óculos prontos em até 7 dias úteis</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-white font-semibold mb-2">12x Sem Juros</h3>
            <p className="text-white/80 text-sm">Parcele sua compra com facilidade</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;