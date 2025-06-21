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
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

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

    // Simulate loading time for animation purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleGlobalError = (event) => {
      console.error("Global error:", event.error);
      setPageError(event.error?.message || "Unknown error occurred");
      event.preventDefault(); // Prevent default error handling
    };

    window.addEventListener('error', handleGlobalError);
    return () => window.removeEventListener('error', handleGlobalError);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-2xl font-bold text-brand-gray-900">Ótica Gouveia</h2>
          <p className="text-brand-gray-600">Carregando experiência...</p>
        </div>
      </div>
    );
  }

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
