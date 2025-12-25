import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye, Truck, Package, Stethoscope, MessageCircle } from 'lucide-react';

interface SEOContentBlocksProps {
  neighborhoodName: string;
  whatsappUrl: string;
}

const SEOContentBlocks: React.FC<SEOContentBlocksProps> = ({ neighborhoodName, whatsappUrl }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const blocks = [
    {
      id: 1,
      icon: Eye,
      title: `Por Que Escolher a Ótica Gouveia no ${neighborhoodName}?`,
      image: "/lovable-uploads/otica-gouveia-expositor.webp",
      content: `A Ótica Gouveia é referência em qualidade e atendimento personalizado no bairro ${neighborhoodName} em Curitiba. Com anos de experiência no mercado óptico, oferecemos as melhores marcas de armações de grau e óculos de sol, além de lentes de alta tecnologia para todas as necessidades visuais.

Nossa equipe é formada por profissionais especializados que realizam atendimento individualizado, ajudando você a escolher a armação ideal para seu rosto e estilo de vida. Trabalhamos com marcas reconhecidas como Ray-Ban, Oakley, Chilli Beans, Arnette e muitas outras opções nacionais e importadas.

Realizamos exames de vista completos com equipamentos modernos, garantindo precisão no diagnóstico e na confecção das suas lentes. Oferecemos lentes monofocais, multifocais, anti-reflexo, fotocromáticas e com proteção UV, todas personalizadas conforme sua receita oftalmológica.

Para moradores do ${neighborhoodName}, oferecemos entrega gratuita para compras acima de R$ 250,00. Você pode escolher seus óculos com calma e receber em casa sem custo adicional.`,
      cta: "Agendar Horário",
      ctaUrl: whatsappUrl
    },
    {
      id: 2,
      icon: Truck,
      title: `Entrega Grátis no ${neighborhoodName}: Como Funciona?`,
      image: "/lovable-uploads/otica-gouveia-armacoes.webp",
      content: `A Ótica Gouveia facilita sua vida com entrega gratuita no bairro ${neighborhoodName} para compras acima de R$ 250,00. Nosso serviço de delivery óptico foi pensado para oferecer comodidade sem comprometer a qualidade do atendimento.

O processo é simples e rápido. Primeiro, você entra em contato conosco pelo WhatsApp, telefone ou visita nossa loja física no CIC. Nossa equipe apresenta as opções de armações e lentes disponíveis, ajudando você a escolher o modelo ideal.

Após a escolha da armação, analisamos sua receita oftalmológica e recomendamos as melhores lentes para seu caso. Trabalhamos com lentes de diversos tipos: monofocais, multifocais progressivas, anti-reflexo e com filtro de luz azul.

Com o pedido confirmado, suas lentes são confeccionadas em laboratório especializado. Assim que seus óculos ficarem prontos, agendamos a entrega no ${neighborhoodName} em horário conveniente para você.`,
      cta: "Fazer Pedido",
      ctaUrl: whatsappUrl
    },
    {
      id: 3,
      icon: Package,
      title: "Marcas e Produtos Disponíveis",
      image: "/lovable-uploads/otica-gouveia-rayban.webp",
      content: `Na Ótica Gouveia, você encontra um portfólio completo de marcas nacionais e internacionais, garantindo opções para todos os gostos, estilos e orçamentos. Nossa curadoria de produtos prioriza qualidade, design e durabilidade.

Óculos de Sol: Trabalhamos com Ray-Ban, conhecida por modelos icônicos como Aviador e Wayfarer; Oakley, referência em óculos esportivos; Chilli Beans, marca brasileira acessível; e Arnette para visual despojado.

Armações de Grau: Oferecemos armações em acetato, metal, titânio e materiais hipoalergênicos. Modelos para todos os formatos de rosto: redondo, quadrado, oval, triangular e alongado.

Lentes Oftálmicas: Trabalhamos com Essilor, Zeiss, Hoya e Lenscope. Disponibilizamos lentes anti-reflexo, fotocromáticas, policarbonato e lentes blue light para proteção digital.

Todos os produtos contam com garantia do fabricante e garantia de adaptação da Ótica Gouveia.`,
      cta: "Ver Catálogo",
      ctaUrl: whatsappUrl
    },
    {
      id: 4,
      icon: Stethoscope,
      title: `Exame de Vista e Saúde Ocular no ${neighborhoodName}`,
      image: "/lovable-uploads/otica-gouveia-vitrine.webp",
      content: `A saúde dos seus olhos merece atenção especializada. Na Ótica Gouveia, oferecemos exames de vista completos com equipamentos de última geração e profissionais qualificados para atender moradores do ${neighborhoodName}.

Quando fazer exame de vista: Recomenda-se realizar exame oftalmológico anualmente. Crianças devem fazer o primeiro exame antes dos 3 anos. Pessoas acima de 40 anos precisam de acompanhamento regular para detectar presbiopia.

Sintomas importantes: Dores de cabeça frequentes, dificuldade para enxergar, visão embaçada, necessidade de apertar os olhos, lacrimejamento excessivo, sensibilidade à luz e fadiga ocular.

O exame completo inclui: avaliação da acuidade visual, medição do grau, teste de percepção de cores, exame de campo visual, avaliação da pressão intraocular e análise da saúde geral dos olhos.

Após o exame, você recebe sua receita atualizada e orientações personalizadas sobre as melhores lentes para seu caso.`,
      cta: "Agendar Exame",
      ctaUrl: whatsappUrl
    }
  ];

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % blocks.length;
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + blocks.length) % blocks.length;
    scrollToSlide(prev);
  };

  // Update current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const slideWidth = sliderRef.current.offsetWidth;
        const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth);
        setCurrentSlide(newSlide);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo Sobre Óculos no {neighborhoodName}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Informações completas sobre nossos serviços, produtos e entrega gratuita
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8">
          {blocks.map((block) => (
            <article 
              key={block.id} 
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-border"
            >
              <div className="relative h-48 xl:h-56 overflow-hidden">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-primary p-2 rounded-lg">
                    <block.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-5 xl:p-6">
                <h3 className="text-lg xl:text-xl font-bold text-foreground mb-3">{block.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-6">
                  {block.content.split('\n\n')[0]}
                </p>
                <a
                  href={block.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  {block.cta}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary hover:text-white text-foreground p-2 rounded-full transition-all duration-300"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blocks.map((block) => (
              <article 
                key={block.id} 
                className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] snap-center mx-2"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border h-full">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="bg-primary p-2 rounded-lg">
                        <block.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-bold text-foreground mb-3">{block.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                      {block.content.split('\n\n')[0]}
                    </p>
                    <a
                      href={block.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {block.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {blocks.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para bloco ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentBlocks;
