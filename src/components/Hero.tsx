
import { useEffect, useState, useRef } from 'react';
import { useParallax } from '../utils/animations';

const Hero = () => {
  const parallax = useParallax(0.04);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 500, 1);
      const translateY = scrollPosition * 0.5;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Usar a imagem de fundo
  const heroImage = "/lovable-uploads/otica-gouveia-fachada.png";

  return (
    <div 
      id="home" 
      className="relative h-screen overflow-hidden" 
      ref={heroRef}
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)`,
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container-width px-4 sm:px-6 lg:px-8 mt-16">
          <div 
            className={`max-w-xl transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in">
              Sua ótica de confiança no Umbará e Pinheirinho!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Ótica Gouveia <br/>
              <span className="text-brand-red">Excelência</span> em cuidados visuais
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-md animate-fade-up" style={{ animationDelay: '400ms' }}>
              Atendimento personalizado na melhor ótica do Umbará e Pinheirinho em Curitiba, com produtos de qualidade e preços competitivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
              <a 
                href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20conhecer%20o%20Visioffice%203.%20Pode%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Agendar Medição com Visioffice 3
              </a>
              <a href="#services" className="btn-secondary w-full sm:w-auto">
                Descobrir Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-brand-gray-700 text-sm mb-2">Deslize para baixo</span>
        <svg className="w-6 h-6 text-brand-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
