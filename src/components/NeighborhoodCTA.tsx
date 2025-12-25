import React from 'react';
import { MessageCircle, Phone, Clock } from 'lucide-react';

interface NeighborhoodCTAProps {
  neighborhoodName: string;
  whatsappUrl: string;
}

const NeighborhoodCTA: React.FC<NeighborhoodCTAProps> = ({ neighborhoodName, whatsappUrl }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Pronto para Cuidar da Sua Visão?
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Fale com nossa equipe agora pelo WhatsApp e descubra as melhores opções em óculos para você no {neighborhoodName}!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-primary hover:bg-white/90 px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            Falar no WhatsApp Agora
          </a>
          
          <a
            href="tel:+554131140663"
            className="group bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
          >
            <Phone className="w-6 h-6" />
            (41) 3114-0663
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
          <Clock className="w-5 h-5" />
          <span>Atendimento de segunda a sexta, 8h às 18h | Sábado até 16h</span>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodCTA;
