import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import FAQ from "@/components/FAQ";
import FloatingActions from "@/components/FloatingActions";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedSEO from "@/components/EnhancedSEO/EnhancedSEO";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";
import { ArrowUp, Phone, Mail, MessageCircle, MapPin, Clock, Check, Eye, Glasses, Sun } from "lucide-react";
import { NeighborhoodData } from "@/data/neighborhoodContent";

interface NeighborhoodPageProps {
  data: NeighborhoodData;
}

const NeighborhoodPage = ({ data }: NeighborhoodPageProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const whatsappMessage = encodeURIComponent(`Olá! Vim do site e gostaria de saber mais sobre óculos para ${data.name}.`);
  const whatsappUrl = `https://wa.me/554131140663?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Structured Data para SEO
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Início", url: "https://www.gouveiacuritiba.com.br" },
    { name: `Ótica ${data.name}`, url: `https://www.gouveiacuritiba.com.br${data.slug}` }
  ]);

  const opticalStoreData = createOpticalStoreSchema(data.name);
  const localBusinessData = createLocalBusinessSchema(data.name);
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  // Serviços oferecidos
  const services = [
    { icon: Eye, title: "Exame de Vista Gratuito", description: "Avaliação completa da sua visão sem custo" },
    { icon: Glasses, title: "Óculos de Grau", description: "Armações modernas das melhores marcas" },
    { icon: Sun, title: "Óculos de Sol", description: "Proteção UV com estilo e qualidade" },
    { icon: Check, title: "Lentes de Contato", description: "Diversas opções para seu conforto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EnhancedSEO
        title={data.title}
        description={data.metaDescription}
        canonicalUrl={data.slug}
        keywords={data.keywords.join(", ")}
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />
      
      <EnhancedHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        location={data.name}
        backgroundImage="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png"
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Seção Principal - Sobre a Ótica no Bairro */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8">
              Ótica de Confiança para {data.type === 'cidade' ? '' : 'o'} {data.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="order-2 md:order-1">
                <img 
                  src="/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png" 
                  alt={`Ótica Gouveia atendendo ${data.name}`}
                  className="rounded-lg shadow-lg w-full"
                  loading="lazy"
                />
                
                {/* Informações do Local */}
                <div className="mt-6 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-brand-red" />
                    Informações para {data.name}
                  </h3>
                  <ul className="space-y-3 text-brand-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Distância:</strong> {data.distanceFromStore}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Entrega:</strong> Via motoboy para compras acima de R$ 250</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Horário:</strong> Seg-Sex 8h-18h | Sáb 8h-16h</span>
                    </li>
                  </ul>
                  
                  {data.nearbyLandmarks.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-brand-gray-600">
                        <strong>Pontos de referência:</strong> {data.nearbyLandmarks.join(", ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="order-1 md:order-2 space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                {data.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                
                <div className="bg-brand-red/5 border-l-4 border-brand-red p-4 rounded-r-lg mt-6">
                  <p className="text-brand-gray-900 font-medium">
                    {data.characteristics}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Serviços */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 text-center">
              Nossos Serviços para {data.name}
            </h2>
            <p className="text-lg text-brand-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Atendimento completo em produtos ópticos com mais de 40 anos de tradição
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                    <service.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Vídeo */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Conheça a Ótica Gouveia
            </h2>
            <p className="text-lg text-brand-gray-600 text-center mb-8">
              Veja como trabalhamos para oferecer o melhor atendimento para {data.name}
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/gDEeiCvn89Q"
                title="Vídeo sobre a Ótica Gouveia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4 text-center">
              Entre em Contato
            </h2>
            <p className="text-lg text-brand-gray-600 text-center mb-8">
              Atendemos {data.type === 'cidade' ? 'moradores de' : 'o bairro'} {data.name} com entrega via motoboy
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-center text-sm">(41) 99161-0663</p>
              </a>
              
              <a 
                href="tel:+554131140663"
                className="flex flex-col items-center justify-center bg-brand-red hover:bg-red-700 text-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Phone size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-center text-sm">(41) 3114-0663</p>
              </a>
              
              <a 
                href="mailto:contato@gouveiacuritiba.com.br"
                className="flex flex-col items-center justify-center bg-brand-gray-900 hover:bg-brand-gray-800 text-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Mail size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">E-mail</h3>
                <p className="text-center text-sm">Envie sua mensagem</p>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-brand-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default NeighborhoodPage;
