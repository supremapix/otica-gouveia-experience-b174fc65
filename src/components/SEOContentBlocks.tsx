import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Glasses, Truck, Eye, ShoppingBag } from 'lucide-react';

interface SEOBlock {
  id: string;
  title: string;
  image: string;
  content: string[];
  ctaText: string;
  ctaLink: string;
  icon: React.ReactNode;
}

interface SEOContentBlocksProps {
  neighborhoodName: string;
  whatsappUrl: string;
}

const SEOContentBlocks: React.FC<SEOContentBlocksProps> = ({ neighborhoodName, whatsappUrl }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blocks: SEOBlock[] = [
    {
      id: 'por-que-escolher',
      title: `Por Que Escolher a Ótica Gouveia no ${neighborhoodName}?`,
      image: '/lovable-uploads/otica-gouveia-fachada.png',
      content: [
        `A Ótica Gouveia é referência em qualidade e atendimento personalizado no bairro ${neighborhoodName} em Curitiba. Com anos de experiência no mercado óptico, oferecemos as melhores marcas de armações de grau e óculos de sol, além de lentes de alta tecnologia para todas as necessidades visuais.`,
        `Nossa equipe é formada por profissionais especializados que realizam atendimento individualizado, ajudando você a escolher a armação ideal para seu rosto e estilo de vida. Trabalhamos com marcas reconhecidas como Ray-Ban, Oakley, Chilli Beans, Arnette e muitas outras opções nacionais e importadas.`,
        `Realizamos exames de vista completos com equipamentos modernos, garantindo precisão no diagnóstico e na confecção das suas lentes. Oferecemos lentes monofocais, multifocais, anti-reflexo, fotocromáticas e com proteção UV, todas personalizadas conforme sua receita oftalmológica.`,
        `Para moradores do ${neighborhoodName}, oferecemos uma vantagem especial: entrega gratuita para compras acima de R$ 250,00. Você pode escolher seus óculos com calma, seja visitando nossa loja física ou pelo WhatsApp, e receber em casa sem custo adicional de frete.`,
        `Além da qualidade dos produtos, prezamos pelo pós-venda. Oferecemos ajustes gratuitos, limpeza de lentes, troca de parafusos e garantia em todos os nossos produtos. Nossa missão é cuidar da sua saúde visual com responsabilidade e dedicação.`,
        `Visite a Ótica Gouveia no Pinheirinho e descubra por que somos a escolha de centenas de famílias do ${neighborhoodName} e região. Agende seu horário pelo WhatsApp (41) 99161-0663 ou venha conhecer nossa loja pessoalmente.`
      ],
      ctaText: 'Agendar Horário no WhatsApp',
      ctaLink: whatsappUrl,
      icon: <Glasses className="w-6 h-6" />
    },
    {
      id: 'entrega-gratis',
      title: `Entrega Grátis no ${neighborhoodName}: Como Funciona?`,
      image: '/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png',
      content: [
        `A Ótica Gouveia facilita sua vida com entrega gratuita no bairro ${neighborhoodName} para compras acima de R$ 250,00. Nosso serviço de delivery óptico foi pensado para oferecer comodidade sem comprometer a qualidade do atendimento.`,
        `O processo é simples e rápido. Primeiro, você entra em contato conosco pelo WhatsApp, telefone ou visita nossa loja física no Pinheirinho. Nossa equipe apresenta as opções de armações e lentes disponíveis, ajudando você a escolher o modelo ideal. Se preferir, podemos enviar fotos e vídeos dos produtos pelo WhatsApp para facilitar sua decisão.`,
        `Após a escolha da armação, analisamos sua receita oftalmológica e recomendamos as melhores lentes para seu caso. Trabalhamos com lentes de diversos tipos: monofocais para miopia ou hipermetropia, multifocais progressivas para presbiopia, lentes anti-reflexo para redução de fadiga ocular, e lentes com filtro de luz azul para quem passa muito tempo em frente a telas.`,
        `Com o pedido confirmado e o pagamento aprovado, suas lentes são confeccionadas em laboratório especializado, processo que leva de 3 a 7 dias úteis dependendo do tipo de lente. Assim que seus óculos ficarem prontos, agendamos a entrega no ${neighborhoodName} em horário conveniente para você.`,
        `A entrega é realizada por nossa equipe ou parceiros de confiança, com todos os cuidados para garantir que seus óculos cheguem em perfeito estado. Na entrega, você pode testar o produto, tirar dúvidas e, se necessário, agendar ajustes posteriores sem custo adicional.`,
        `Aproveite essa facilidade e peça seus óculos novos sem sair de casa. Entre em contato agora mesmo!`
      ],
      ctaText: 'Fazer Pedido pelo WhatsApp',
      ctaLink: whatsappUrl,
      icon: <Truck className="w-6 h-6" />
    },
    {
      id: 'marcas-produtos',
      title: 'Marcas e Produtos Disponíveis na Ótica Gouveia',
      image: '/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png',
      content: [
        `Na Ótica Gouveia, você encontra um portfólio completo de marcas nacionais e internacionais, garantindo opções para todos os gostos, estilos e orçamentos. Nossa curadoria de produtos prioriza qualidade, design e durabilidade.`,
        `Óculos de Sol: Trabalhamos com as principais marcas do mercado, incluindo Ray-Ban, conhecida mundialmente por seus modelos icônicos como Aviador e Wayfarer; Oakley, referência em óculos esportivos com tecnologia de lentes polarizadas; Chilli Beans, marca brasileira que combina estilo e preço acessível; e Arnette, perfeita para quem busca visual despojado e moderno.`,
        `Armações de Grau: Nosso catálogo inclui armações clássicas e contemporâneas. Oferecemos armações em acetato, metal, titânio e materiais hipoalergênicos. Modelos para todos os formatos de rosto: redondo, quadrado, oval, triangular e alongado. Nossa equipe especializada ajuda você a identificar qual formato de armação valoriza melhor suas características faciais.`,
        `Lentes Oftálmicas: Trabalhamos com os melhores laboratórios do Brasil, oferecendo lentes Essilor, Zeiss, Hoya e Lenscope. Disponibilizamos lentes com diversos tratamentos: anti-reflexo para eliminar reflexos indesejados, fotocromáticas que escurecem ao sol, policarbonato resistente a impactos, lentes de alto índice para receitas elevadas, e lentes blue light para proteção contra luz azul de dispositivos digitais.`,
        `Lentes de Contato: Além de óculos, trabalhamos com lentes de contato gelatinosas para correção de miopia, hipermetropia e astigmatismo. Marcas disponíveis: Acuvue, Biomedics e Air Optix.`,
        `Todos os produtos contam com garantia do fabricante e garantia de adaptação da Ótica Gouveia. Consulte condições.`
      ],
      ctaText: 'Ver Catálogo Completo',
      ctaLink: whatsappUrl,
      icon: <ShoppingBag className="w-6 h-6" />
    },
    {
      id: 'exame-vista',
      title: `Exame de Vista e Saúde Ocular no ${neighborhoodName}`,
      image: '/lovable-uploads/2c1f65c4-9adc-49d1-ad2f-ec9b7af09704.png',
      content: [
        `A saúde dos seus olhos merece atenção especializada. Na Ótica Gouveia, oferecemos exames de vista completos com equipamentos de última geração e profissionais qualificados para atender moradores do ${neighborhoodName} e toda região de Curitiba.`,
        `Quando fazer exame de vista: Recomenda-se realizar exame oftalmológico anualmente, mesmo sem sintomas aparentes. Crianças devem fazer o primeiro exame antes dos 3 anos de idade. Pessoas acima de 40 anos precisam de acompanhamento regular para detectar presbiopia (vista cansada) e outras condições relacionadas à idade.`,
        `Sintomas que indicam necessidade de exame: Dores de cabeça frequentes, especialmente ao final do dia; dificuldade para enxergar de longe ou de perto; visão embaçada ou duplicada; necessidade de apertar os olhos para focar; lacrimejamento excessivo; sensibilidade à luz; fadiga ocular após uso de computador ou celular.`,
        `O que avaliamos no exame: O exame de vista completo na Ótica Gouveia inclui avaliação da acuidade visual, medição do grau de miopia, hipermetropia, astigmatismo ou presbiopia, teste de percepção de cores, exame de campo visual periférico, avaliação da pressão intraocular (prevenção de glaucoma), e análise da saúde geral dos olhos.`,
        `Pós-exame: Após o exame, você recebe sua receita oftalmológica atualizada e orientações personalizadas sobre as melhores lentes para seu caso. Nossa equipe explica cada item da receita e ajuda você a escolher armações adequadas ao seu grau e estilo de vida.`,
        `Agende seu exame de vista na Ótica Gouveia. Atendemos com hora marcada para sua comodidade, sem filas e com todo tempo necessário para um atendimento de qualidade.`
      ],
      ctaText: 'Agendar Meu Exame',
      ctaLink: whatsappUrl,
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    }
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo Sobre a Ótica Gouveia no {neighborhoodName}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos serviços, produtos e diferenciais para moradores do {neighborhoodName}
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
            onScroll={handleScroll}
          >
            {blocks.map((block, index) => (
              <div
                key={block.id}
                className="min-w-full snap-center px-2"
              >
                <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={block.image}
                      alt={block.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-2 rounded-full">
                      {block.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {block.title}
                    </h3>
                    <div className="text-muted-foreground text-sm space-y-3 max-h-64 overflow-y-auto">
                      {block.content.slice(0, 3).map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    <a
                      href={block.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {block.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {blocks.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
            disabled={activeIndex === 0}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(blocks.length - 1, activeIndex + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
            disabled={activeIndex === blocks.length - 1}
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {blocks.map((block) => (
            <article
              key={block.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  {block.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {block.title}
                </h3>
                <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
                  {block.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={block.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {block.ctaText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOContentBlocks;
