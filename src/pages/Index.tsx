import { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import OnlineCounter from '../components/OnlineCounter';
import SEO from '../components/SEO';
import { createOrganizationSchema, createWebsiteSchema, createLocalBusinessSchema } from '../utils/schemas';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Simple error boundary component
const ErrorBoundary = ({ children, fallback, componentName }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(`Error in component ${componentName}:`, error);
      setHasError(true);
      return true; // Prevents the error from bubbling up
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, [componentName]);

  if (hasError) {
    return fallback || <div className="p-4 text-red-500">Error loading {componentName}</div>;
  }

  return children;
};

// Component loader with error handling
const ComponentLoader = ({ component: Component, name }) => {
  return (
    <ErrorBoundary 
      componentName={name} 
      fallback={<div className="p-4 text-red-500">Error loading {name}</div>}
    >
      <Suspense fallback={<div className="p-4">Loading {name}...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

const Index = () => {
  const [pageError, setPageError] = useState(null);
  const isMobile = useIsMobile();

  // SEO Schema
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationSchema(),
      createWebsiteSchema(),
      createLocalBusinessSchema("Curitiba")
    ]
  };

  useEffect(() => {
    // Add viewport meta tag to prevent user scaling/zooming on mobile
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    } else {
      const newMetaViewport = document.createElement('meta');
      newMetaViewport.name = 'viewport';
      newMetaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(newMetaViewport);
    }
  }, []);

  useEffect(() => {
    const handleGlobalError = (event) => {
      console.error("Global error:", event.error);
      setPageError(event.error?.message || "Unknown error occurred");
      event.preventDefault();
    };

    window.addEventListener('error', handleGlobalError);
    return () => window.removeEventListener('error', handleGlobalError);
  }, []);

  if (pageError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-brand-red mb-4">Oops! Algo deu errado.</h2>
          <p className="text-brand-gray-700 mb-6">{pageError}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-brand-red text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO 
        title="Ótica Gouveia - Óculos de Grau, Sol e Lentes em Curitiba"
        description="Ótica Gouveia em Curitiba - Óculos de grau, sol e lentes de contato. Atendemos Pinheirinho, Umbará e região. Qualidade e tradição há anos."
        keywords="ótica curitiba, óculos grau curitiba, óculos sol curitiba, lentes contato curitiba, ótica pinheirinho, ótica umbará, ótica gouveia"
        canonicalUrl="/"
        structuredData={combinedSchema}
        ogType="website"
      />
      
      <ErrorBoundary 
        componentName="Navbar"
        fallback={<div className="p-4 text-red-500">Error loading Navbar</div>}
      >
        <Navbar />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Hero"
        fallback={<div className="p-4 text-red-500">Error loading Hero</div>}
      >
        <Hero />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="About"
        fallback={<div className="p-4 text-red-500">Error loading About</div>}
      >
        <About />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Services"
        fallback={<div className="p-4 text-red-500">Error loading Services</div>}
      >
        <Services />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Products"
        fallback={<div className="p-4 text-red-500">Error loading Products</div>}
      >
        <Products />
      </ErrorBoundary>
      
      {/* Bairros e Cidades Atendidos */}
      <section id="regioes" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Atendemos Curitiba e Região Metropolitana
            </h2>
            <p className="text-lg text-brand-gray-700 max-w-3xl mx-auto">
              Vendemos online com entrega via motoboy para compras acima de R$ 250,00. Você também pode retirar em nossa loja no Pinheirinho, próxima ao Condor Umbará.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-6 text-center">
              Bairros de Curitiba
            </h3>
            {isMobile ? (
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {[
                    { name: 'Pinheirinho', slug: '/loja-de-oculos-no-pinheirinho' },
                    { name: 'Sítio Cercado', slug: '/otica-sitio-cercado' },
                    { name: 'Umbará', slug: '/otica-umbara' },
                    { name: 'CIC', slug: '/otica-cic' },
                    { name: 'Cajuru', slug: '/otica-cajuru' },
                    { name: 'Boqueirão', slug: '/otica-boqueirao' },
                    { name: 'Hauer', slug: '/otica-hauer' },
                    { name: 'Centro', slug: '/otica-centro' },
                    { name: 'Batel', slug: '/otica-batel' },
                    { name: 'Água Verde', slug: '/otica-agua-verde' },
                    { name: 'Bigorrilho', slug: '/otica-bigorrilho' },
                    { name: 'Portão', slug: '/otica-portao' },
                    { name: 'Xaxim', slug: '/otica-xaxim' },
                    { name: 'Santa Felicidade', slug: '/otica-santa-felicidade' },
                    { name: 'Bacacheri', slug: '/otica-bacacheri' },
                    { name: 'Rebouças', slug: '/otica-reboucas' },
                    { name: 'Neo Ville', slug: '/otica-neo-ville' },
                    { name: 'Vila Sandra', slug: '/otica-vila-sandra' },
                    { name: 'Vila Formosa', slug: '/otica-vila-formosa' },
                    { name: 'Cristo Rei', slug: '/otica-cristo-rei' },
                    { name: 'Ecoville', slug: '/otica-ecoville' },
                    { name: 'Jardim Botânico', slug: '/otica-jardim-botanico' },
                    { name: 'Juvevê', slug: '/otica-juveve' },
                    { name: 'Capão Raso', slug: '/otica-capao-raso' },
                    { name: 'Jardim das Américas', slug: '/otica-jardim-das-americas' },
                    { name: 'Novo Mundo', slug: '/otica-novo-mundo' },
                    { name: 'Tarumã', slug: '/otica-taruma' },
                    { name: 'Tatuquara', slug: '/otica-tatuquara' },
                    { name: 'Campo Comprido', slug: '/otica-campo-comprido' },
                    { name: 'Hugo Lange', slug: '/otica-hugo-lange' },
                    { name: 'Tingui', slug: '/otica-tingui' },
                    { name: 'Mercês', slug: '/otica-merces' },
                    { name: 'Cabral', slug: '/otica-cabral' },
                    { name: 'Alto da XV', slug: '/otica-alto-da-xv' },
                    { name: 'Guabirotuba', slug: '/otica-guabirotuba' },
                    { name: 'Parolin', slug: '/otica-parolin' },
                    { name: 'Abranches', slug: '/otica-abranches' },
                    { name: 'Uberaba', slug: '/otica-uberaba' },
                    { name: 'Vila Izabel', slug: '/otica-vila-izabel' },
                    { name: 'Alto da Glória', slug: '/otica-alto-da-gloria' },
                    { name: 'Pilarzinho', slug: '/otica-pilarzinho' },
                    { name: 'Santa Cândida', slug: '/otica-santa-candida' },
                    { name: 'Atuba', slug: '/otica-atuba' },
                    { name: 'Bairro Alto', slug: '/otica-bairro-alto' },
                    { name: 'Boa Vista', slug: '/otica-boa-vista' },
                    { name: 'Bom Retiro', slug: '/otica-bom-retiro' },
                    { name: 'Orleans', slug: '/otica-orleans' },
                    { name: 'Lindóia', slug: '/otica-lindoia' },
                    { name: 'São João', slug: '/otica-sao-joao' },
                  ].map((bairro) => (
                    <CarouselItem key={bairro.slug} className="basis-1/2">
                      <a
                        href={bairro.slug}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group mx-2 block"
                      >
                        <h4 className="font-semibold text-brand-gray-900 group-hover:text-brand-red transition-colors">
                          {bairro.name}
                        </h4>
                        <p className="text-sm text-brand-gray-600 mt-1">Ótica</p>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Pinheirinho', slug: '/loja-de-oculos-no-pinheirinho' },
                  { name: 'Sítio Cercado', slug: '/otica-sitio-cercado' },
                  { name: 'Umbará', slug: '/otica-umbara' },
                  { name: 'CIC', slug: '/otica-cic' },
                  { name: 'Cajuru', slug: '/otica-cajuru' },
                  { name: 'Boqueirão', slug: '/otica-boqueirao' },
                  { name: 'Hauer', slug: '/otica-hauer' },
                  { name: 'Centro', slug: '/otica-centro' },
                  { name: 'Batel', slug: '/otica-batel' },
                  { name: 'Água Verde', slug: '/otica-agua-verde' },
                  { name: 'Bigorrilho', slug: '/otica-bigorrilho' },
                  { name: 'Portão', slug: '/otica-portao' },
                  { name: 'Xaxim', slug: '/otica-xaxim' },
                  { name: 'Santa Felicidade', slug: '/otica-santa-felicidade' },
                  { name: 'Bacacheri', slug: '/otica-bacacheri' },
                  { name: 'Rebouças', slug: '/otica-reboucas' },
                  { name: 'Neo Ville', slug: '/otica-neo-ville' },
                  { name: 'Vila Sandra', slug: '/otica-vila-sandra' },
                  { name: 'Vila Formosa', slug: '/otica-vila-formosa' },
                  { name: 'Cristo Rei', slug: '/otica-cristo-rei' },
                  { name: 'Ecoville', slug: '/otica-ecoville' },
                  { name: 'Jardim Botânico', slug: '/otica-jardim-botanico' },
                  { name: 'Juvevê', slug: '/otica-juveve' },
                  { name: 'Capão Raso', slug: '/otica-capao-raso' },
                  { name: 'Jardim das Américas', slug: '/otica-jardim-das-americas' },
                  { name: 'Novo Mundo', slug: '/otica-novo-mundo' },
                  { name: 'Tarumã', slug: '/otica-taruma' },
                  { name: 'Tatuquara', slug: '/otica-tatuquara' },
                  { name: 'Campo Comprido', slug: '/otica-campo-comprido' },
                  { name: 'Hugo Lange', slug: '/otica-hugo-lange' },
                  { name: 'Tingui', slug: '/otica-tingui' },
                  { name: 'Mercês', slug: '/otica-merces' },
                  { name: 'Cabral', slug: '/otica-cabral' },
                  { name: 'Alto da XV', slug: '/otica-alto-da-xv' },
                  { name: 'Guabirotuba', slug: '/otica-guabirotuba' },
                  { name: 'Parolin', slug: '/otica-parolin' },
                  { name: 'Abranches', slug: '/otica-abranches' },
                  { name: 'Uberaba', slug: '/otica-uberaba' },
                  { name: 'Vila Izabel', slug: '/otica-vila-izabel' },
                  { name: 'Alto da Glória', slug: '/otica-alto-da-gloria' },
                  { name: 'Pilarzinho', slug: '/otica-pilarzinho' },
                  { name: 'Santa Cândida', slug: '/otica-santa-candida' },
                  { name: 'Atuba', slug: '/otica-atuba' },
                  { name: 'Bairro Alto', slug: '/otica-bairro-alto' },
                  { name: 'Boa Vista', slug: '/otica-boa-vista' },
                  { name: 'Bom Retiro', slug: '/otica-bom-retiro' },
                  { name: 'Orleans', slug: '/otica-orleans' },
                  { name: 'Lindóia', slug: '/otica-lindoia' },
                  { name: 'São João', slug: '/otica-sao-joao' },
                ].map((bairro) => (
                  <a
                    key={bairro.slug}
                    href={bairro.slug}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
                  >
                    <h4 className="font-semibold text-brand-gray-900 group-hover:text-brand-red transition-colors">
                      {bairro.name}
                    </h4>
                    <p className="text-sm text-brand-gray-600 mt-1">Ótica</p>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-brand-gray-900 mb-6 text-center">
              Cidades da Região Metropolitana
            </h3>
            {isMobile ? (
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {[
                    { name: 'Araucária', slug: '/otica-araucaria' },
                    { name: 'Colombo', slug: '/otica-colombo' },
                    { name: 'Pinhais', slug: '/otica-pinhais' },
                    { name: 'São José dos Pinhais', slug: '/otica-sao-jose-dos-pinhais' },
                    { name: 'Fazenda Rio Grande', slug: '/otica-fazenda-rio-grande' },
                    { name: 'Piraquara', slug: '/otica-piraquara' },
                    { name: 'Campo Largo', slug: '/otica-campo-largo' },
                    { name: 'Almirante Tamandaré', slug: '/otica-almirante-tamandare' },
                    { name: 'Quatro Barras', slug: '/otica-quatro-barras' },
                    { name: 'Mandirituba', slug: '/otica-mandirituba' },
                    { name: 'Campina Grande do Sul', slug: '/otica-campina-grande-do-sul' },
                    { name: 'Adrianópolis', slug: '/otica-adrianopolis' },
                    { name: 'Balsa Nova', slug: '/otica-balsa-nova' },
                    { name: 'Contenda', slug: '/otica-contenda' },
                    { name: 'Lapa', slug: '/otica-lapa' },
                    { name: 'Bocaiúva do Sul', slug: '/otica-bocaiuva-do-sul' },
                    { name: 'Itaperuçu', slug: '/otica-itaperucu' },
                    { name: 'Rio Branco do Sul', slug: '/otica-rio-branco-do-sul' },
                    { name: 'Campo Magro', slug: '/otica-campo-magro' },
                    { name: 'Tijucas do Sul', slug: '/otica-tijucas-do-sul' },
                    { name: 'Agudos do Sul', slug: '/otica-agudos-do-sul' },
                    { name: 'Campo do Tenente', slug: '/otica-campo-do-tenente' },
                    { name: 'Cerro Azul', slug: '/otica-cerro-azul' },
                    { name: 'Doutor Ulysses', slug: '/otica-doutor-ulysses' },
                    { name: 'Piên', slug: '/otica-pien' },
                    { name: 'Quitandinha', slug: '/otica-quitandinha' },
                    { name: 'Rio Negro', slug: '/otica-rio-negro' },
                    { name: 'Tunas do Paraná', slug: '/otica-tunas-do-parana' },
                  ].map((cidade) => (
                    <CarouselItem key={cidade.slug} className="basis-1/2">
                      <a
                        href={cidade.slug}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group mx-2 block"
                      >
                        <h4 className="font-semibold text-brand-gray-900 group-hover:text-brand-red transition-colors">
                          {cidade.name}
                        </h4>
                        <p className="text-sm text-brand-gray-600 mt-1">RMC</p>
                      </a>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'Araucária', slug: '/otica-araucaria' },
                  { name: 'Colombo', slug: '/otica-colombo' },
                  { name: 'Pinhais', slug: '/otica-pinhais' },
                  { name: 'São José dos Pinhais', slug: '/otica-sao-jose-dos-pinhais' },
                  { name: 'Fazenda Rio Grande', slug: '/otica-fazenda-rio-grande' },
                  { name: 'Piraquara', slug: '/otica-piraquara' },
                  { name: 'Campo Largo', slug: '/otica-campo-largo' },
                  { name: 'Almirante Tamandaré', slug: '/otica-almirante-tamandare' },
                  { name: 'Quatro Barras', slug: '/otica-quatro-barras' },
                  { name: 'Mandirituba', slug: '/otica-mandirituba' },
                  { name: 'Campina Grande do Sul', slug: '/otica-campina-grande-do-sul' },
                  { name: 'Adrianópolis', slug: '/otica-adrianopolis' },
                  { name: 'Balsa Nova', slug: '/otica-balsa-nova' },
                  { name: 'Contenda', slug: '/otica-contenda' },
                  { name: 'Lapa', slug: '/otica-lapa' },
                  { name: 'Bocaiúva do Sul', slug: '/otica-bocaiuva-do-sul' },
                  { name: 'Itaperuçu', slug: '/otica-itaperucu' },
                  { name: 'Rio Branco do Sul', slug: '/otica-rio-branco-do-sul' },
                  { name: 'Campo Magro', slug: '/otica-campo-magro' },
                  { name: 'Tijucas do Sul', slug: '/otica-tijucas-do-sul' },
                  { name: 'Agudos do Sul', slug: '/otica-agudos-do-sul' },
                  { name: 'Campo do Tenente', slug: '/otica-campo-do-tenente' },
                  { name: 'Cerro Azul', slug: '/otica-cerro-azul' },
                  { name: 'Doutor Ulysses', slug: '/otica-doutor-ulysses' },
                  { name: 'Piên', slug: '/otica-pien' },
                  { name: 'Quitandinha', slug: '/otica-quitandinha' },
                  { name: 'Rio Negro', slug: '/otica-rio-negro' },
                  { name: 'Tunas do Paraná', slug: '/otica-tunas-do-parana' },
                ].map((cidade) => (
                  <a
                    key={cidade.slug}
                    href={cidade.slug}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
                  >
                    <h4 className="font-semibold text-brand-gray-900 group-hover:text-brand-red transition-colors">
                      {cidade.name}
                    </h4>
                    <p className="text-sm text-brand-gray-600 mt-1">RMC</p>
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-brand-gray-700 mb-6">
              📍 Nossa loja fica no Pinheirinho, próxima ao Condor Umbará<br />
              🚚 Entrega via motoboy para compras acima de R$ 250,00<br />
              🛒 Compre online e retire em nossa loja física
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20óculos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Consulte-nos pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      <ErrorBoundary
        componentName="Testimonials"
        fallback={<div className="p-4 text-red-500">Error loading Testimonials</div>}
      >
        <Testimonials />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Contact"
        fallback={<div className="p-4 text-red-500">Error loading Contact</div>}
      >
        <Contact />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Instagram"
        fallback={<div className="p-4 text-red-500">Error loading Instagram</div>}
      >
        <Instagram />
      </ErrorBoundary>
      
      <ErrorBoundary 
        componentName="Footer"
        fallback={<div className="p-4 text-red-500">Error loading Footer</div>}
      >
        <Footer />
      </ErrorBoundary>
      
      {/* Online Counter */}
      <OnlineCounter />
      
      {/* WhatsApp Fixed Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20conhecer%20o%20Visioffice%203.%20Pode%20me%20ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Contato por WhatsApp"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 bg-brand-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-brand-red transition-all hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
