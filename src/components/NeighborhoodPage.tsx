import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedSEO from "@/components/EnhancedSEO/EnhancedSEO";
import ModernHeroSection from "@/components/ModernHeroSection";
import ImageGallery from "@/components/ImageGallery";
import ServicesSection from "@/components/ServicesSection";
import LocalFAQSection from "@/components/LocalFAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import DeliveryAreaMap from "@/components/DeliveryAreaMap";
import WhyChooseSection from "@/components/WhyChooseSection";
import PremiumFAQ from "@/components/PremiumFAQ";
import HealthTipsSection from "@/components/HealthTipsSection";
import HowToBuySection from "@/components/HowToBuySection";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";
import { ArrowUp, ChevronRight } from "lucide-react";
import { NeighborhoodData } from "@/data/neighborhoodContent";
import { Link } from "react-router-dom";

interface NeighborhoodPageProps {
  data: NeighborhoodData;
}

const NeighborhoodPage = ({ data }: NeighborhoodPageProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const whatsappMessage = encodeURIComponent(`Olá! Vim do site e gostaria de saber mais sobre óculos para ${data.name}.`);
  const whatsappUrl = `https://wa.me/554199161663?text=${whatsappMessage}`;

  const isMainUnit = ['Pinheirinho', 'Sítio Cercado', 'Umbará'].includes(data.name);
  const address = data.name === 'Pinheirinho' ? 'R. Nicola Pellanda, 1286 - Pinheirinho, Curitiba - PR' : undefined;

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

  const breadcrumbData = createBreadcrumbSchema([
    { name: "Início", url: "https://www.gouveiacuritiba.com.br" },
    { name: `Ótica ${data.name}`, url: `https://www.gouveiacuritiba.com.br${data.slug}` }
  ]);

  const opticalStoreData = createOpticalStoreSchema(data.name);
  const localBusinessData = createLocalBusinessSchema(data.name);
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <EnhancedSEO
        title={data.title}
        description={data.metaDescription}
        canonicalUrl={data.slug}
        keywords={data.keywords.join(", ")}
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />

      {/* Breadcrumb */}
      <nav className="bg-muted/50 border-b border-border py-3 mt-[var(--header-height)]" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-foreground font-medium">Ótica {data.name}</li>
          </ol>
        </div>
      </nav>
      
      {/* Hero com Slides Promocionais */}
      <ModernHeroSection
        neighborhoodName={data.name}
        isMainUnit={isMainUnit}
        address={address}
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Por Que Escolher a Gouveia */}
        <WhyChooseSection neighborhoodName={data.name} />

        {/* Serviços + Como Funciona + Diferenciais */}
        <ServicesSection neighborhoodName={data.name} />

        {/* Como Comprar Online */}
        <HowToBuySection neighborhoodName={data.name} />

        {/* Galeria de Imagens */}
        <ImageGallery neighborhoodName={data.name} />

        {/* Mapa de Área de Entrega */}
        <DeliveryAreaMap neighborhoodName={data.name} />

        {/* FAQ Premium 155 Perguntas */}
        <PremiumFAQ neighborhoodName={data.name} />

        {/* Dicas de Saúde Visual */}
        <HealthTipsSection />

        {/* FAQ Local (mantido) */}
        <LocalFAQSection neighborhoodName={data.name} />

        {/* CTA Final */}
        <FinalCTASection 
          neighborhoodName={data.name} 
          whatsappUrl={whatsappUrl} 
        />
      </main>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 z-40 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default NeighborhoodPage;
