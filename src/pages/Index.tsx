import { useState, useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Instagram from '../components/Instagram';
import Footer from '../components/Footer';
import OnlineCounter from '../components/OnlineCounter';
import SEO from '../components/SEO';
import InfiniteNeighborhoodSlider from '../components/InfiniteNeighborhoodSlider';
import VisiofficeSection from '../components/VisiofficeSection';
import NeighborhoodsSection from '../components/NeighborhoodsSection';
import TipsSection from '../components/TipsSection';
import WhatsAppFloat from '../components/WhatsAppFloat';
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
      createLocalBusinessSchema("Curitiba")
    ]
  };

  useEffect(() => {
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
        title="Ótica Gouveia - Óculos de Grau, Sol e Lentes em Curitiba"
        description="Ótica Gouveia em Curitiba - Óculos de grau, sol e lentes de contato. Atendemos Pinheirinho, Umbará e região. Qualidade e tradição há anos."
        keywords="ótica curitiba, óculos grau curitiba, óculos sol curitiba, lentes contato curitiba, ótica pinheirinho, ótica umbará, ótica gouveia"
        canonicalUrl="/"
        structuredData={combinedSchema}
        ogType="website"
      />
      
      <Navbar />
      
      {/* Hero with padding for fixed header */}
      <ErrorBoundary componentName="HeroSlider" fallback={<div className="p-4">Error loading Hero</div>}>
        <HeroSlider />
      </ErrorBoundary>
      
      <ErrorBoundary componentName="About" fallback={<div className="p-4">Error</div>}>
        <About />
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Services" fallback={<div className="p-4">Error</div>}>
        <Services />
      </ErrorBoundary>

      <ErrorBoundary componentName="VisiofficeSection" fallback={<div className="p-4">Error</div>}>
        <VisiofficeSection />
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Products" fallback={<div className="p-4">Error</div>}>
        <Products />
      </ErrorBoundary>

      <ErrorBoundary componentName="NeighborhoodsSection" fallback={<div className="p-4">Error</div>}>
        <NeighborhoodsSection />
      </ErrorBoundary>
      
      <InfiniteNeighborhoodSlider />
      
      <ErrorBoundary componentName="Testimonials" fallback={<div className="p-4">Error</div>}>
        <Testimonials />
      </ErrorBoundary>

      <ErrorBoundary componentName="TipsSection" fallback={<div className="p-4">Error</div>}>
        <TipsSection />
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Contact" fallback={<div className="p-4">Error</div>}>
        <Contact />
      </ErrorBoundary>
      
      <ErrorBoundary componentName="Instagram" fallback={<div className="p-4">Error</div>}>
        <Instagram />
      </ErrorBoundary>
      
      <Footer />
      
      <OnlineCounter />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
