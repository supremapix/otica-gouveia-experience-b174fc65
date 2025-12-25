import React from 'react';
import { MessageCircle, Phone, Clock, Sparkles, Gift, Truck } from 'lucide-react';

interface NeighborhoodCTAProps {
  neighborhoodName: string;
  whatsappUrl: string;
}

const NeighborhoodCTA: React.FC<NeighborhoodCTAProps> = ({ neighborhoodName, whatsappUrl }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium animate-bounce">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Oferta Especial para {neighborhoodName}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight">
          Pronto para Cuidar da Sua Visão?
        </h2>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-white/90 text-center mb-8 sm:mb-10 max-w-2xl mx-auto">
          Fale com nossa equipe agora pelo WhatsApp e descubra as melhores opções em óculos para você no {neighborhoodName}!
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm sm:text-base">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Primeira Compra -10%</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm sm:text-base">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Entrega Grátis*</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white text-primary hover:bg-white/95 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Falar no WhatsApp Agora</span>
          </a>
          
          <a
            href="tel:+554131140663"
            className="group bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
            <span>(41) 3114-0663</span>
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-center justify-center gap-2 text-white/80 text-sm sm:text-base">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Segunda a sexta, 9h às 18h | Sábado até 13h</span>
        </div>

        {/* Urgency Message */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-white/70 text-xs sm:text-sm">
            *Entrega grátis para compras acima de R$ 250,00 no {neighborhoodName} e região
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodCTA;
