import { Phone, MessageCircle, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FinalCTASectionProps {
  neighborhoodName: string;
  whatsappUrl: string;
  phoneNumber?: string;
}

const FinalCTASection = ({ 
  neighborhoodName, 
  whatsappUrl,
  phoneNumber = "+554131140663"
}: FinalCTASectionProps) => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      
      {/* Decorações */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Promoção Especial
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Agende Seu Exame de Vista{' '}
            <span className="text-accent">Grátis</span> no {neighborhoodName}
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Não deixe para depois! Cuide da sua visão com quem tem mais de 40 anos de experiência. 
            Atendimento imediato via WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild
              size="lg"
              className="group bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 h-16 px-10 text-lg font-bold rounded-2xl"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-3" />
                Agendar pelo WhatsApp
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="group border-2 border-white/30 hover:border-white bg-white/10 backdrop-blur-sm text-white h-16 px-10 text-lg rounded-2xl"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-6 h-6 mr-3" />
                (41) 3114-0663
              </a>
            </Button>
          </div>

          {/* Informações da loja */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm md:text-base">
                R. Nicola Pellanda, 1286 - Pinheirinho
              </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30" />
            <div className="text-white/80 text-sm md:text-base">
              Seg a Sex: 9h-18h | Sáb: 9h-13h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
