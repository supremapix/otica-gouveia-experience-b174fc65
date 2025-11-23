
import { useEffect, useState, useRef } from 'react';
import { Eye, Phone, MapPin, Star, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroImage = "/lovable-uploads/otica-gouveia-fachada.png";

  return (
    <div 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-brand-gray-900 via-brand-gray-800 to-brand-red/20" 
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gray-900/95 via-brand-gray-900/90 to-brand-gray-900/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div 
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red mb-6 animate-fade-in">
                <Star className="w-4 h-4 fill-brand-red" />
                <span className="text-sm font-semibold">Mais de 40 anos de tradição</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                Ótica Gouveia
                <br/>
                <span className="bg-gradient-to-r from-brand-red to-red-400 bg-clip-text text-transparent">
                  Cuidando da Sua Visão
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '400ms' }}>
                Óculos de grau, sol e lentes de contato com qualidade, tecnologia e atendimento personalizado em Curitiba.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '600ms' }}>
                <a 
                  href="https://api.whatsapp.com/send?phone=554131140663&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-red hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-red/50 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Fale Conosco Agora</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <Eye className="w-5 h-5" />
                  <span>Nossos Produtos</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: '800ms' }}>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-brand-red mb-1">40+</div>
                  <div className="text-sm text-gray-400">Anos de Tradição</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-brand-red mb-1">5.000+</div>
                  <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
                </div>
                <div className="text-center sm:text-left col-span-2 sm:col-span-1">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-brand-red text-brand-red" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">Avaliação 5 Estrelas</div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div 
              className={`space-y-4 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              {/* Contact Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Fale Conosco</h3>
                    <a 
                      href="tel:+554131140663" 
                      className="text-gray-300 hover:text-brand-red transition-colors text-lg font-medium"
                    >
                      (41) 3114-0663
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Atendimento personalizado</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Nossa Localização</h3>
                    <p className="text-gray-300">Rua Nicola Pellanda, 1286</p>
                    <p className="text-gray-400 text-sm">Pinheirinho - Curitiba/PR</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/20 rounded-xl group-hover:scale-110 transition-transform">
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-gray-600 text-sm mb-2 font-medium">Role para explorar</span>
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
