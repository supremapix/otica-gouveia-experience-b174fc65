import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';

const OticaCampoDeSantana = () => {
  return (
    <>
      <EnhancedSEO
        title="Ótica no Campo de Santana - Curitiba | Ótica Gouveia"
        description="Ótica no Campo de Santana com exames de vista gratuitos, armações de qualidade e lentes especializadas."
        canonicalUrl="/otica-campo-de-santana"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica no Campo de Santana
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua ótica de confiança no Campo de Santana
            </p>
          </div>
        </section>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default OticaCampoDeSantana;
