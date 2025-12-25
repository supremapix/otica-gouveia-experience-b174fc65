import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedSEO from "@/components/EnhancedSEO/EnhancedSEO";
import NeighborhoodHero from "@/components/NeighborhoodHero";
import ImageGallery from "@/components/ImageGallery";
import SEOContentBlocks from "@/components/SEOContentBlocks";
import NeighborhoodFAQ from "@/components/NeighborhoodFAQ";
import DeliveryAreaMap from "@/components/DeliveryAreaMap";
import NeighborhoodCTA from "@/components/NeighborhoodCTA";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";
import { ArrowUp } from "lucide-react";
import { NeighborhoodData } from "@/data/neighborhoodContent";

interface NeighborhoodPageProps {
  data: NeighborhoodData;
}

const NeighborhoodPage = ({ data }: NeighborhoodPageProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const whatsappMessage = encodeURIComponent(`Olá! Vim do site e gostaria de saber mais sobre óculos para ${data.name}.`);
  const whatsappUrl = `https://wa.me/554199161663?text=${whatsappMessage}`;

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
      
      <NeighborhoodHero
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        location={data.name}
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Galeria de Imagens */}
        <ImageGallery neighborhoodName={data.name} />

        {/* 4 Blocos de Conteúdo SEO */}
        <SEOContentBlocks neighborhoodName={data.name} whatsappUrl={whatsappUrl} />

        {/* Mapa de Área de Entrega */}
        <DeliveryAreaMap neighborhoodName={data.name} />

        {/* FAQ Personalizado */}
        <NeighborhoodFAQ neighborhoodName={data.name} />

        {/* CTA Final */}
        <NeighborhoodCTA neighborhoodName={data.name} whatsappUrl={whatsappUrl} />
      </main>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default NeighborhoodPage;
