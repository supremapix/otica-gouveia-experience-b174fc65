import VisitGuide from './VisitGuide';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
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
import PrescriptionNotice from "@/components/PrescriptionNotice";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";
import { ChevronRight } from "lucide-react";
import { NeighborhoodData } from "@/data/neighborhoodContent";
import { Link } from "react-router-dom";

interface NeighborhoodPageProps {
  data: NeighborhoodData;
}

const NeighborhoodPage = ({ data }: NeighborhoodPageProps) => {
  const whatsappMessage = encodeURIComponent(`Olá! Vim do site e gostaria de saber mais sobre óculos para ${data.name}.`);
  const whatsappUrl = `https://wa.me/5541991610663?text=${whatsappMessage}`;

  const isMainUnit = true;
  const address = 'R. Nicola Pellanda, 1286 - Umbará, Curitiba - PR';

  const breadcrumbData = createBreadcrumbSchema([
    { name: "Início", url: "https://www.gouveiacuritiba.com.br" },
    { name: `Ótica ${data.name}`, url: `https://www.gouveiacuritiba.com.br${data.slug}` }
  ]);

  const opticalStoreData = createOpticalStoreSchema(data.name);
  const localBusinessData = createLocalBusinessSchema(data.name);
  const structuredData = [breadcrumbData, opticalStoreData];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <EnhancedSEO
        title={`Ótica Gouveia | Visita de ${data.name} à loja no Umbará`}
        description={`Mora em ${data.name}? Planeje sua visita à Ótica Gouveia, Rua Nicola Pellanda, 1286, Umbará. Consulte catálogo, contato e etapas para comprar óculos.`}
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
         <VisitGuide name={data.name} city={data.type === "cidade"} />
         {/* Galeria de Imagens — logo após o Hero */}
         <ImageGallery neighborhoodName={data.name} />

         {/* Por Que Escolher a Gouveia */}
         <WhyChooseSection neighborhoodName={data.name} />

         {/* Serviços + Como Funciona + Diferenciais */}
         <ServicesSection neighborhoodName={data.name} />

         {/* Como Comprar Online */}
         <HowToBuySection neighborhoodName={data.name} />

         {/* Aviso: Grau = Presencial / Sol = Online */}
         <PrescriptionNotice />
        {/* Mapa de Área de Entrega */}
        <DeliveryAreaMap neighborhoodName={data.name} />

        {/* FAQ Premium 155 Perguntas */}
        <LocalFAQSection neighborhoodName={data.name} />

        {/* Dicas de Saúde Visual */}
        <HealthTipsSection />

        {/* FAQ Local (mantido) */}


        {/* CTA Final */}
        <FinalCTASection 
          neighborhoodName={data.name} 
          whatsappUrl={whatsappUrl} 
        />
      </main>

      <Footer />
      <FloatingButtonsGroup />
      
    </div>
  );
};

export default NeighborhoodPage;
