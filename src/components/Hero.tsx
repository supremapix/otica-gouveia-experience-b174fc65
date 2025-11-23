
import { useEffect, useState, useRef } from 'react';
import { Eye, Phone, MapPin, Star, Clock, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroImage = "/lovable-uploads/otica-gouveia-fachada.png";

  // Criar partículas flutuantes
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-gray-900 via-brand-gray-800 to-brand-gray-900" 
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/95 via-brand-gray-900/90 to-brand-gray-900/80" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-brand-red/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-red/20 rounded-full blur-3xl animate-pulse opacity-60" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '2s' }} />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Spotlight Effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Badge with Sparkle Effect */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-6 animate-fade-in backdrop-blur-sm hover:scale-105 transition-transform">
                <Star className="w-4 h-4 fill-brand-red animate-pulse" />
                <span className="text-sm font-semibold">Mais de 40 anos de tradição</span>
                <Sparkles className="w-4 h-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Main Heading with Gradient Animation */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                Ótica Gouveia
                <br/>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-brand-red via-red-400 to-brand-red bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Cuidando da Sua Visão
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent animate-shimmer" />
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '400ms' }}>
                Óculos de grau, sol e lentes de contato com qualidade, tecnologia e atendimento personalizado em Curitiba.
              </p>

              {/* CTA Buttons with Hover Effects */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '600ms' }}>
                <a 
                  href="https://api.whatsapp.com/send?phone=554131140663&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-red/50 hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Fale Conosco Agora</span>
                </a>
                <a 
                  href="#products" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Nossos Produtos</span>
                </a>
              </div>

              {/* Trust Indicators with Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '800ms' }}>
                <div className="text-center sm:text-left group hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-red to-red-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                    40+
                  </div>
                  <div className="text-sm text-gray-400">Anos de Tradição</div>
                </div>
                <div className="text-center sm:text-left group hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand-red to-red-400 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                    5.000+
                  </div>
                  <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
                </div>
                <div className="text-center sm:text-left col-span-2 sm:col-span-1 group hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="w-5 h-5 fill-brand-red text-brand-red group-hover:scale-110 transition-transform" 
                        style={{ transitionDelay: `${star * 50}ms` }}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">Avaliação 5 Estrelas</div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards with Enhanced Effects */}
            <div 
              className={`space-y-4 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              {/* Contact Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      Fale Conosco
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </h3>
                    <a 
                      href="tel:+554131140663" 
                      className="text-gray-300 hover:text-brand-red transition-colors text-lg font-medium block"
                    >
                      (41) 3114-0663
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Atendimento personalizado</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-brand-red group-hover:animate-bounce" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Nossa Localização</h3>
                    <p className="text-gray-300">Rua Nicola Pellanda, 1286</p>
                    <p className="text-gray-400 text-sm">Pinheirinho - Curitiba/PR</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Clock className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-gray-300">Sábado: 8h às 16h</p>
                    <p className="text-gray-400 text-sm mt-1">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
      
      {/* Scroll Indicator with Animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-gray-600 text-sm mb-2 font-medium">Role para explorar</span>
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
