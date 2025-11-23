import React from 'react';
import { useInView } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData } from '@/components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema } from '@/utils/schemas';

const OticaSantaQuiteria = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: 'Santa Quitéria', url: 'https://www.gouveiacuritiba.com.br/otica-santa-quiteria' }
  ]);

  const opticalStoreData = createOpticalStoreSchema('Santa Quitéria');
  const localBusinessData = createLocalBusinessSchema('Santa Quitéria');
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista em Santa Quitéria.";

  const products = [
    { name: "Óculos de Sol", description: "Proteção e estilo para seus olhos." },
    { name: "Óculos de Grau", description: "Correção visual com conforto e elegância." },
    { name: "Lentes de Contato", description: "Liberdade e praticidade para o seu dia a dia." },
  ];

  const advantages = [
    { title: "Exames de Vista Gratuitos", description: "Avaliação completa da sua visão." },
    { title: "Atendimento Personalizado", description: "Profissionais qualificados para cuidar de você." },
    { title: "Variedade de Marcas", description: "As melhores marcas e modelos em um só lugar." },
  ];

  return (
    <>
      <EnhancedSEO
        title="Ótica em Santa Quitéria - Curitiba | Ótica Gouveia"
        description="Ótica em Santa Quitéria com exames de vista gratuitos, armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado."
        keywords="ótica santa quitéria, óculos santa quitéria, exame de vista santa quitéria, ótica curitiba"
        canonicalUrl="/otica-santa-quiteria"
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: 'Santa Quitéria', url: '/otica-santa-quiteria' }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica em Santa Quitéria
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua ótica de confiança em Santa Quitéria com exames de vista gratuitos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📱 Agendar pelo WhatsApp
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Ligar Agora
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default OticaSantaQuiteria;
