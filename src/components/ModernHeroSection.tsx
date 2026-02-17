import { useState, useEffect, useCallback } from 'react';
import { MapPin, Phone, Calendar, Clock, Star, CheckCircle, ChevronRight, MessageCircle, Truck, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
];

interface SlideData {
  badge: string;
  badgeIcon: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  ctaStyle: 'primary' | 'green';
}

const ModernHeroSection = ({ 
  neighborhoodName, 
  isMainUnit = false,
  address,
  whatsappUrl,
  phoneNumber = "+554131140663"
}: ModernHeroSectionProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const slides: SlideData[] = [
    {
      badge: 'ENTREGA GRÁTIS',
      badgeIcon: '🚚',
      title: `Entrega Grátis no ${neighborhoodName}`,
      subtitle: 'Comprando R$ 250+ levamos até você!',
      description: 'Óculos completos • Lentes de contato • Acessórios — entrega em até 24h',
      ctaText: 'PEDIR ENTREGA GRÁTIS',
      ctaUrl: whatsappUrl,
      ctaStyle: 'primary',
    },
    {
      badge: 'TECNOLOGIA EXCLUSIVA',
      badgeIcon: '⚡',
      title: 'Visioffice 3 no Seu Bairro',
      subtitle: 'Medição de alta precisão',
      description: 'Lentes digitais personalizadas com tecnologia Essilor em minutos',
      ctaText: 'AGENDAR MEDIÇÃO',
      ctaUrl: whatsappUrl,
      ctaStyle: 'primary',
    },
    {
      badge: '2ª VIA COM 50% OFF',
      badgeIcon: '💎',
      title: 'Promoção Especial',
      subtitle: 'Quebrou ou perdeu?',
      description: 'Fazemos a 2ª via das suas lentes com desconto especial para moradores do ' + neighborhoodName,
      ctaText: 'SEGUNDA VIA DESCONTO',
      ctaUrl: whatsappUrl,
      ctaStyle: 'green',
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const slide = slides[currentSlide];

  const features = [
    { icon: Clock, text: 'Seg a Sex: 9h às 18h | Sáb: 9h às 13h' },
    { icon: CheckCircle, text: 'Estacionamento Fácil' },
    { icon: CheckCircle, text: 'Aceitamos Planos de Saúde' },
  ];

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Coluna esquerda - Conteúdo com slides */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Badge de localização */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {isMainUnit ? 'Nossa Loja Física' : `Atendemos ${neighborhoodName}`}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full animate-pulse">
                <span className="text-sm font-bold text-accent-foreground">
                  {slide.badgeIcon} {slide.badge}
                </span>
              </div>
            </div>

            {/* Título dinâmico por slide */}
            <div className="space-y-4" key={currentSlide}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                {slide.title.includes(neighborhoodName) ? (
                  <>
                    {slide.title.split(neighborhoodName)[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                      {neighborhoodName}
                    </span>
                    {slide.title.split(neighborhoodName)[1]}
                  </>
                ) : (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                    {slide.title}
                  </span>
                )}
              </h1>
              
              <p className="text-lg md:text-2xl text-accent font-semibold animate-fade-in">
                {slide.subtitle}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in">
                {slide.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 max-w-fit">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="font-bold text-foreground">4.9/5</p>
                <p className="text-xs text-muted-foreground">+500 avaliações</p>
              </div>
            </div>

            {/* CTA dinâmico */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className={`group shadow-lg transition-all duration-300 text-base h-14 px-8 rounded-full ${
                  slide.ctaStyle === 'green'
                    ? 'bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-green-500/30'
                    : 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground shadow-accent/30'
                }`}
              >
                <a href={slide.ctaUrl} target="_blank" rel="noopener noreferrer">
                  {slide.ctaText}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="group border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground h-14 px-8 rounded-full"
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </a>
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-10 bg-accent'
                      : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Features rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Imagem */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <div
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Ótica Gouveia ${neighborhoodName}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              ))}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Badge entrega grátis flutuante */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold shadow-lg animate-pulse">
                🚚 Entrega Grátis*
              </div>

              {isMainUnit && address && (
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Nosso Endereço</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{address}</p>
                    </div>
                  </div>
                </div>
              )}

              {!isMainUnit && (
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <p className="font-bold text-sm">Fale pelo WhatsApp</p>
                      <p className="text-xs opacity-90">Resposta em minutos</p>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;
