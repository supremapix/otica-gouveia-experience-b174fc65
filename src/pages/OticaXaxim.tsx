import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import FAQ from "@/components/FAQ";
import FloatingActions from "@/components/FloatingActions";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedSEO from "@/components/EnhancedSEO/EnhancedSEO";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";
import { ArrowUp, Phone, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const OticaXaxim = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = "https://wa.me/554131140663?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20óculos%20no%20Xaxim.";

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
    { name: "Ótica Xaxim", url: "https://www.gouveiacuritiba.com.br/otica-xaxim" }
  ]);

  const opticalStoreData = createOpticalStoreSchema("Xaxim");
  const localBusinessData = createLocalBusinessSchema("Xaxim");
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EnhancedSEO
        title="Ótica Xaxim Curitiba | Óculos de Grau e Sol | Ótica Gouveia"
        description="Ótica de confiança no Xaxim com óculos de grau, sol e lentes para toda a família. Vendemos online com entrega no Xaxim acima de R$250. Consulte-nos!"
        canonicalUrl="/otica-xaxim"
        keywords="ótica xaxim, óculos xaxim, loja de óculos xaxim curitiba, óculos de grau xaxim, óculos de sol xaxim, lentes xaxim, ótica xaxim curitiba"
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />
      
      <EnhancedHero
        title="Ótica Gouveia para o Xaxim"
        subtitle="Tradição e Confiança em Óculos"
        location="Xaxim"
        backgroundImage="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png"
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Ótica de Confiança para Moradores do Xaxim
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png" 
                  alt="Ótica Gouveia Xaxim"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Xaxim é um bairro populoso de Curitiba, com forte vocação residencial e comercial. Conhecido por suas vias movimentadas e pelo comércio diversificado, o bairro abriga famílias trabalhadoras que valorizam qualidade, bom atendimento e preços justos. A Ótica Gouveia tem orgulho de atender essa comunidade há mais de 40 anos com dedicação e compromisso.
                </p>
                <p>
                  Oferecemos óculos de grau, óculos de sol e lentes de contato com grande variedade de marcas nacionais e importadas. Nossa localização estratégica no Pinheirinho facilita o acesso de moradores do Xaxim, e oferecemos entrega via motoboy para compras acima de R$ 250,00. Vendemos online com total segurança e você também pode retirar em nossa loja física.
                </p>
                <p>
                  Nosso atendimento familiar e acolhedor conquista clientes há gerações. Entendemos as necessidades das famílias do Xaxim e trabalhamos para oferecer a melhor experiência em cuidados visuais com produtos de qualidade e preços acessíveis. Consulte-nos e descubra por que somos a ótica de confiança do Xaxim!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mais seções de conteúdo */}

        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Conheça a Ótica Gouveia
            </h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/gDEeiCvn89Q"
                title="Vídeo sobre a Ótica Gouveia"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Entre em Contato - Atendemos o Xaxim
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white p-8 rounded-lg shadow-lg transition-all duration-300">
                <MessageCircle size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-center text-sm">(41) 99161-0663</p>
              </a>
              <a href="tel:+554131140663"
                className="flex flex-col items-center justify-center bg-brand-red hover:bg-red-700 text-white p-8 rounded-lg shadow-lg transition-all duration-300">
                <Phone size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-center text-sm">(41) 3114-0663</p>
              </a>
              <a href="mailto:contato@gouveiacuritiba.com.br"
                className="flex flex-col items-center justify-center bg-brand-gray-900 hover:bg-brand-gray-800 text-white p-8 rounded-lg shadow-lg transition-all duration-300">
                <Mail size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">E-mail</h3>
                <p className="text-center text-sm">Envie sua mensagem</p>
              </a>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
      
      {showScrollTop && (
        <button onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-brand-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Voltar ao topo">
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default OticaXaxim;