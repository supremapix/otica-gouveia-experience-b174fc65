import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useInView } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingActions from '@/components/FloatingActions';
import FAQ from '@/components/FAQ';
import EnhancedHero from '@/components/EnhancedHero';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData } from '@/components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema, createProductSchema } from '@/utils/schemas';

const LojaOculosPinheirinho15565 = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista no Pinheirinho.";

  const featuredProducts = [
    { name: "Óculos de Grau Completo", price: "Consulte-nos!", category: "Promocional", highlight: "Mais Vendido" },
    { name: "Óculos de Sol Premium", price: "Consulte-nos!", category: "Premium", highlight: "Exclusivo" },
    { name: "Lentes Multifocais", price: "Consulte-nos!", category: "Tecnologia", highlight: "Inovação" },
    { name: "Óculos Infantil Flexível", price: "Consulte-nos!", category: "Kids", highlight: "Resistente" },
    { name: "Lentes de Contato", price: "Consulte-nos!", category: "Contato", highlight: "Conforto" },
    { name: "Óculos Esportivo", price: "Consulte-nos!", category: "Sport", highlight: "Performance" }
  ];

  // SEO e Structured Data
  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: 'Pinheirinho', url: 'https://www.gouveiacuritiba.com.br/loja-de-oculos-no-pinheirinho/15565' }
  ]);

  const opticalStoreData = createOpticalStoreSchema('Pinheirinho');
  const localBusinessData = createLocalBusinessSchema('Pinheirinho');
  
  const productSchemas = featuredProducts.map(product => 
    createProductSchema({
      name: product.name,
      price: product.price,
      description: `${product.name} - ${product.highlight}`,
      category: product.category
    })
  );

  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData, ...productSchemas];


  const services = [
    { icon: 'Eye', title: "Consulta Especializada", desc: "Atendimento completo com profissionais qualificados" },
    { icon: 'Glasses', title: "Ajuste Profissional", desc: "Ajustes precisos e confortáveis" },
    { icon: 'Shield', title: "Garantia Estendida", desc: "Proteção total dos seus óculos" },
    { icon: 'Clock', title: "Entrega Expressa", desc: "Pronto em até 3 dias úteis" },
    { icon: 'Award', title: "Qualidade Certificada", desc: "Produtos aprovados e testados" },
    { icon: 'Heart', title: "Atendimento Personalizado", desc: "Cuidado especial com cada cliente" }
  ];

  return (
    <>
      <EnhancedSEO
        title="Loja de Óculos 15565 no Pinheirinho - Ótica Gouveia Curitiba"
        description="Loja de óculos no Pinheirinho, Curitiba. Ótica Gouveia oferece óculos de grau, sol e lentes com qualidade garantida e tradição."
        keywords="loja óculos pinheirinho 15565, ótica pinheirinho curitiba, óculos grau pinheirinho, exame vista gratuito pinheirinho, loja 15565"
        canonicalUrl="/loja-de-oculos-no-pinheirinho/15565"
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: 'Pinheirinho 15565', url: '/loja-de-oculos-no-pinheirinho/15565' }
        ]}
        preloadResources={[
          { href: '/hero-background.jpg', as: 'image' }
        ]}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <EnhancedHero
          title="Loja de Óculos Pinheirinho"
          subtitle="A melhor loja de óculos do Pinheirinho! Consulte nossos preços e condições especiais com garantia total"
          location="Pinheirinho - Curitiba"
          backgroundImage="/hero-background.jpg"
          whatsappUrl={whatsappUrl}
          phoneNumber="+5541999123456"
        />

        {/* YouTube Video Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conheça o Pinheirinho</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Pinheirinho - Curitiba"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos em Destaque */}
        <section className="section-padding bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
          <div className="section-container">
            <div className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
                Produtos em Destaque na Nossa Loja
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-brand-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brand-red/20">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-sm text-brand-red font-semibold">{product.category}</div>
                      <div className="bg-brand-red text-white text-xs px-2 py-1 rounded-full">{product.highlight}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">{product.name}</h3>
                    <div className="text-2xl font-bold text-brand-red mb-4">{product.price}</div>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-brand-gray-600">✓ Exame de vista incluso</div>
                      <div className="text-sm text-brand-gray-600">✓ Garantia de 6 meses</div>
                      <div className="text-sm text-brand-gray-600">✓ Ajustes gratuitos</div>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-brand-red text-white py-2 px-4 rounded-lg hover:bg-brand-red/90 transition-colors block text-center"
                    >
                      Comprar via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por que Escolher Nossa Loja */}
        <section className="section-padding bg-brand-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Por que Escolher Nossa Loja no Pinheirinho?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary text-2xl">{service.icon === 'Eye' ? '👁️' : service.icon === 'Glasses' ? '👓' : service.icon === 'Shield' ? '🛡️' : service.icon === 'Clock' ? '⏰' : service.icon === 'Award' ? '🏆' : '❤️'}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localização e Atendimento */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-brand-gray-900 mb-6">
                  Atendendo o Pinheirinho com Excelência
                </h2>
                <p className="text-brand-gray-600 leading-relaxed mb-6">
                  Nossa loja está estrategicamente localizada para atender toda a região do Pinheirinho e bairros vizinhos. 
                  Com mais de 15 anos de experiência, somos referência em qualidade, preço justo e atendimento diferenciado.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-brand-red flex-shrink-0" size={20} />
                    <span className="text-brand-gray-600">R. Nicola Pellanda, 1286 - Pinheirinho</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-brand-red flex-shrink-0" size={20} />
                    <span className="text-brand-gray-600">Seg-Sex: 9h às 18h | Sáb: 9h às 13h</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-red/5 to-brand-blue/5 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-6">Facilidades para Você</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                    <span className="text-brand-gray-600">Estacionamento gratuito na frente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                    <span className="text-brand-gray-600">Acesso fácil por transporte público</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                    <span className="text-brand-gray-600">Parcelamento em até 12x sem juros</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                    <span className="text-brand-gray-600">Desconto especial para pagamento à vista</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Promoção Especial */}
        <section className="section-padding bg-gradient-to-r from-brand-red to-brand-blue text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-6">Promoção Exclusiva Pinheirinho</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Óculos Completo</h3>
                <p className="text-lg mb-6">Consulte-nos sobre preços e condições!</p>
                <ul className="space-y-2 mb-6 text-left max-w-md mx-auto">
                  <li>• Mais de 200 modelos de armações</li>
                  <li>• Lentes antirreflexo incluídas</li>
                  <li>• Garantia de 6 meses</li>
                  <li>• Ajustes e limpeza grátis por 1 ano</li>
                  <li>• Parcelamento sem entrada</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Aproveitar Promoção
                </a>
              </div>
              <p className="text-lg opacity-90">
                Válida apenas para nossa loja do Pinheirinho. Não perca essa oportunidade!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </div>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
    </>
  );
};

export default LojaOculosPinheirinho15565;