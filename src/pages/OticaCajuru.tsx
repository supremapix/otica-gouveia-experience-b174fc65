import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedHero from "@/components/EnhancedHero";
import FAQ from "@/components/FAQ";
import FloatingActions from "@/components/FloatingActions";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import EnhancedSEO from "@/components/EnhancedSEO/EnhancedSEO";
import { createBreadcrumbSchema, createOpticalStoreSchema, createLocalBusinessSchema } from "@/utils/schemas";

const OticaCajuru = () => {
  const whatsappUrl = "https://wa.me/554131140663?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20óculos%20no%20Cajuru.";

  // SEO structured data
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Início", url: "https://www.gouveiacuritiba.com.br" },
    { name: "Ótica Cajuru", url: "https://www.gouveiacuritiba.com.br/otica-cajuru" }
  ]);

  const opticalStoreData = createOpticalStoreSchema("Cajuru");
  const localBusinessData = createLocalBusinessSchema("Cajuru");

  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EnhancedSEO
        title="Ótica no Cajuru | Óculos de Grau, Sol e Lentes | Ótica Gouveia Curitiba"
        description="Atendemos o bairro Cajuru em Curitiba com óculos de grau, sol e lentes de contato. Consulte-nos! Tradição e qualidade há mais de 40 anos."
        canonicalUrl="/otica-cajuru"
        keywords="ótica cajuru, óculos cajuru, loja de óculos cajuru, ótica cajuru curitiba, óculos de grau cajuru, óculos de sol cajuru, exame de vista cajuru"
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />
      
      <EnhancedHero
        title="Ótica Gouveia no Cajuru"
        subtitle="Sua Visão em Boas Mãos"
        location="Cajuru"
        backgroundImage="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png"
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Vídeo sobre o bairro Cajuru */}
        <section className="py-12 px-4 bg-gray-50">
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
            <p className="mt-4 text-brand-gray-700 text-center">
              Tradição e qualidade em óculos, lentes e cuidados visuais. Conheça nossa loja e nossos serviços.
            </p>
          </div>
        </section>

        {/* Centro de Excelência no Cajuru */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-8 text-center">
              Centro de Excelência em Ótica no Cajuru
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-brand-red mb-4">
                  Por Que Escolher Nossa Ótica no Cajuru?
                </h3>
                <ul className="space-y-3 text-brand-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Tradição de mais de 40 anos em Curitiba</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Atendimento familiar e acolhedor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Localização estratégica próxima ao Cajuru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Grande variedade de óculos e lentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Marcas nacionais e importadas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-red mr-2">✓</span>
                    <span>Consulte nossas condições especiais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-brand-red mb-4">
                  Produtos Mais Procurados no Cajuru
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-brand-gray-900">Óculos de Grau</h4>
                    <p className="text-brand-gray-700">
                      Armações clássicas e modernas com lentes de qualidade. Consulte-nos!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900">Óculos de Sol</h4>
                    <p className="text-brand-gray-700">
                      Modelos sofisticados com proteção UV garantida. Consulte-nos!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-900">Lentes de Contato</h4>
                    <p className="text-brand-gray-700">
                      Lentes confortáveis das marcas mais confiáveis. Consulte-nos!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serviços Exclusivos */}
            <div className="bg-brand-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-brand-gray-900 mb-6 text-center">
                Serviços Especializados para o Cajuru
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">👓</div>
                  <h4 className="font-semibold text-brand-gray-900 mb-2">Exames de Vista</h4>
                  <p className="text-brand-gray-700 text-sm">
                    Avaliação completa da sua saúde ocular
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <h4 className="font-semibold text-brand-gray-900 mb-2">Ajustes Precisos</h4>
                  <p className="text-brand-gray-700 text-sm">
                    Ajuste perfeito para seu conforto visual
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💎</div>
                  <h4 className="font-semibold text-brand-gray-900 mb-2">Atendimento Personalizado</h4>
                  <p className="text-brand-gray-700 text-sm">
                    Escolha a armação ideal para seu estilo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-brand-red text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Cuidar da Sua Visão no Cajuru?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Entre em contato conosco e descubra nossas condições especiais para moradores do Cajuru e região!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                className="bg-white text-brand-red px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+554131140663"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-red transition-colors inline-flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (41) 3114-0663
              </a>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
    </div>
  );
};

export default OticaCajuru;
