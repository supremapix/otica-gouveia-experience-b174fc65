import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';

const OticaSeminario = () => {
  return (
    <>
      <EnhancedSEO
        title="Ótica no Seminário - Curitiba | Ótica Gouveia"
        description="Ótica no Seminário com exames de vista gratuitos, armações de qualidade e lentes especializadas."
        canonicalUrl="/otica-seminario"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica no Seminário
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua ótica de confiança no Seminário
            </p>
          </div>
        </section>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default OticaSeminario;
