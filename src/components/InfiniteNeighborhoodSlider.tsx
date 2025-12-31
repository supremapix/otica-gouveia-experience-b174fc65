import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Truck } from 'lucide-react';

interface Neighborhood {
  name: string;
  slug: string;
  isMainUnit?: boolean;
  city?: string;
}

const neighborhoods: Neighborhood[] = [
  // Unidades principais - destacadas
  { name: 'Sítio Cercado', slug: '/otica-sitio-cercado', isMainUnit: true, city: 'Curitiba' },
  { name: 'Pinheirinho', slug: '/loja-de-oculos-no-pinheirinho', isMainUnit: true, city: 'Curitiba' },
  { name: 'Umbará', slug: '/otica-umbara', isMainUnit: true, city: 'Curitiba' },
  // Bairros vizinhos
  { name: 'CIC', slug: '/otica-cic', city: 'Curitiba' },
  { name: 'Boqueirão', slug: '/otica-boqueirao', city: 'Curitiba' },
  { name: 'Xaxim', slug: '/otica-xaxim', city: 'Curitiba' },
  { name: 'Campo Comprido', slug: '/otica-campo-comprido', city: 'Curitiba' },
  { name: 'Cajuru', slug: '/otica-cajuru', city: 'Curitiba' },
  { name: 'Portão', slug: '/otica-portao', city: 'Curitiba' },
  { name: 'Capão Raso', slug: '/otica-capao-raso', city: 'Curitiba' },
  { name: 'Novo Mundo', slug: '/otica-novo-mundo', city: 'Curitiba' },
  { name: 'Tatuquara', slug: '/otica-tatuquara', city: 'Curitiba' },
];

const InfiniteNeighborhoodSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);

  // Duplicar items para loop infinito
  const duplicatedItems = [...neighborhoods, ...neighborhoods, ...neighborhoods];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const itemWidth = 280; // largura do card + gap
    const totalWidth = neighborhoods.length * itemWidth;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= 0.8; // velocidade do scroll
        
        // Reset position para criar loop infinito perfeito
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current = 0;
        }
        
        if (slider) {
          slider.style.transform = `translateX(${positionRef.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Truck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Entrega Grátis acima de R$250</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Atendemos Toda Curitiba e Região
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Clique no seu bairro e confira as condições especiais
          </p>
        </div>
      </div>

      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Gradientes laterais para fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-6 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {duplicatedItems.map((neighborhood, index) => (
            <Link
              key={`${neighborhood.slug}-${index}`}
              to={neighborhood.slug}
              className={`
                group relative flex-shrink-0 w-[240px] md:w-[260px] p-4 md:p-5 rounded-2xl
                transition-all duration-300 ease-out
                ${neighborhood.isMainUnit 
                  ? 'bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30' 
                  : 'bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10'
                }
                hover:scale-105 hover:-translate-y-1
              `}
            >
              {/* Badge de unidade principal */}
              {neighborhood.isMainUnit && (
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  Loja
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className={`
                  p-2.5 rounded-xl transition-colors
                  ${neighborhood.isMainUnit 
                    ? 'bg-white/20' 
                    : 'bg-primary/10 group-hover:bg-primary/20'
                  }
                `}>
                  <MapPin className={`w-5 h-5 ${neighborhood.isMainUnit ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className={`
                    font-bold text-base md:text-lg truncate
                    ${neighborhood.isMainUnit ? 'text-white' : 'text-foreground group-hover:text-primary'}
                    transition-colors
                  `}>
                    {neighborhood.name}
                  </h3>
                  <p className={`
                    text-sm mt-0.5
                    ${neighborhood.isMainUnit ? 'text-white/80' : 'text-muted-foreground'}
                  `}>
                    {neighborhood.city}
                  </p>
                  {neighborhood.isMainUnit && (
                    <span className="inline-block mt-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      Visite-nos
                    </span>
                  )}
                </div>
              </div>

              {/* Decoração de hover */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${neighborhood.isMainUnit 
                  ? 'bg-gradient-to-t from-black/10 to-transparent' 
                  : 'bg-gradient-to-t from-primary/5 to-transparent'
                }
              `} />
            </Link>
          ))}
        </div>
      </div>

      {/* Indicador de pausa */}
      <div className="text-center mt-6">
        <p className="text-xs text-muted-foreground">
          {isPaused ? '⏸ Pausado - Clique em um bairro' : '◀ Passe o mouse para pausar'}
        </p>
      </div>
    </section>
  );
};

export default InfiniteNeighborhoodSlider;
