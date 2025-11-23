import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';

const OticaCascatinha = () => {
  return (
    <>
      <EnhancedSEO
        title="Ótica na Cascatinha - Curitiba | Ótica Gouveia"
        description="Ótica na Cascatinha com exames de vista gratuitos, armações de qualidade e lentes especializadas."
        canonicalUrl="/otica-cascatinha"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica na Cascatinha
            </h1>
          </div>
        </section>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default OticaCascatinha;
