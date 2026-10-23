import EditorialHero from '../components/EditorialHero';
import VisitGuide from '../components/VisitGuide';
import { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import DesktopHeroSlider from '../components/DesktopHeroSlider';
import MarqueeBar from '../components/MarqueeBar';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';

import SEO from '../components/SEO';
import InfiniteNeighborhoodSlider from '../components/InfiniteNeighborhoodSlider';
import VisiofficeSection from '../components/VisiofficeSection';
import PrescriptionNotice from '../components/PrescriptionNotice';
import NeighborhoodsSection from '../components/NeighborhoodsSection';
import TipsSection from '../components/HealthTipsSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FloatingButtonsGroup from '../components/FloatingButtonsGroup';
import FAQCTASection from '../components/FAQCTASection';
import { createOrganizationSchema, createWebsiteSchema, createLocalBusinessSchema } from '../utils/schemas';

// Simple error boundary component
const ErrorBoundary = ({ children, fallback, componentName }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(`Error in component ${componentName}:`, error);
      setHasError(true);
      return true;
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, [componentName]);

  if (hasError) {
    return fallback || <div className="p-4 text-destructive">Error loading {componentName}</div>;
  }

  return children;
};

// Component loader with error handling
const ComponentLoader = ({ component: Component, name }) => {
  return (
    <ErrorBoundary 
      componentName={name} 
      fallback={<div className="p-4 text-destructive">Error loading {name}</div>}
    >
      <Suspense fallback={<div className="p-4">Loading {name}...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

const Index = () => {
  const [pageError, setPageError] = useState(null);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createOrganizationSchema(),
      createWebsiteSchema(),
      createLocalBusinessSchema("Umbar�")
    ]
  };

  // Observa��o: o viewport n�o � sobrescrito aqui de prop�sito.
  // Bloquear o zoom (`user-scalable=no`) prejudica a acessibilidade do
  // p�blico da melhor idade e penaliza a nota de acessibilidade/SEO.


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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <h2 className="text-2xl font-bold text-destructive mb-4">Oops! Algo deu errado.</h2>
          <p className="text-muted-foreground mb-6">{pageError}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
         title="�tica Gouveia Umbar� - �culos de Grau, Sol e Lentes em Curitiba"
         description="�tica Gouveia no Umbar�, Curitiba - �culos de grau, sol e lentes de contato. Atendemos Umbar�, S�tio Cercado, Xaxim e regi�o. Qualidade e tradi��o h� anos."
         keywords="�tica umbar�, �tica curitiba, �culos grau umbar�, �culos sol curitiba, lentes contato curitiba, �tica gouveia umbar�"
         canonicalUrl="/"
        structuredData={combinedSchema}
        ogType="website"
      />
      
      <Navbar />

      
      <main id="main-content" className="gv-home">
      <EditorialHero />
      <section id="products">
        <ErrorBoundary componentName="Products" fallback={<div className="p-4">Error</div>}>
          <Products />
        </ErrorBoundary>
      </section>
      <section id="about">
        <ErrorBoundary componentName="About" fallback={<div className="p-4">Error</div>}>
          <About />
        </ErrorBoundary>
      </section>
      
      <section id="services">
        <ErrorBoundary componentName="Services" fallback={<div className="p-4">Error</div>}>
          <Services />
        </ErrorBoundary>
      </section>

      <ErrorBoundary componentName="VisiofficeSection" fallback={<div className="p-4">Error</div>}>
        <VisiofficeSection />
      </ErrorBoundary>

      <PrescriptionNotice />
      


      
      <VisitGuide />
      <InfiniteNeighborhoodSlider />
      
      <ErrorBoundary componentName="Testimonials" fallback={<div className="p-4">Error</div>}>
        <Testimonials />
      </ErrorBoundary>

      <ErrorBoundary componentName="TipsSection" fallback={<div className="p-4">Error</div>}>
        <TipsSection />
      </ErrorBoundary>

      <ErrorBoundary componentName="FAQCTASection" fallback={<div className="p-4">Error</div>}>
        <FAQCTASection />
      </ErrorBoundary>
      
      <section id="contact">
        <ErrorBoundary componentName="Contact" fallback={<div className="p-4">Error</div>}>
          <Contact />
        </ErrorBoundary>
      </section>
      
      <ErrorBoundary componentName="Instagram" fallback={<div className="p-4">Error</div>}>
        <Instagram />
      </ErrorBoundary>
      
      <details className="gv-archive"><summary>Veja tamb�m as imagens de apresenta��o da Gouveia</summary><DesktopHeroSlider /><div className="gouveia-hero-mobile"><HeroSlider /></div><MarqueeBar /></details>
      </main>
      <Footer />
      

      <FloatingButtonsGroup />
      
    </div>
  );
};

export default Index;
