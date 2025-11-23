import React from 'react';
import { MapPin, Eye, Star, Shield, Clock, Heart } from 'lucide-react';
import { useInView } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FloatingActions from '@/components/FloatingActions';
import FAQ from '@/components/FAQ';
import EnhancedHero from '@/components/EnhancedHero';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData } from '@/components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema } from '@/utils/schemas';

const OticaSitioCercado = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista no Sítio Cercado.";

  // SEO e Structured Data
  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: 'Sítio Cercado', url: 'https://www.gouveiacuritiba.com.br/otica-sitio-cercado' }
  ]);

  const opticalStoreData = createOpticalStoreSchema('Sítio Cercado');
  const localBusinessData = createLocalBusinessSchema('Sítio Cercado');

  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  const popularProducts = [
    { name: "Óculos de Grau Econômico", price: "Consulte-nos!", category: "Popular" },
    { name: "Óculos de Sol Infantil", price: "Consulte-nos!", category: "Kids" },
    { name: "Lentes de Contato Coloridas", price: "Consulte-nos!", category: "Fashion" },
    { name: "Óculos Multifocais", price: "Consulte-nos!", category: "Premium" },
    { name: "Armações Flexíveis", price: "Consulte-nos!", category: "Confort" }
  ];

  const advantages = [
    { icon: Eye, title: "Avaliação Completa", desc: "Atendimento detalhado da saúde ocular" },
    { icon: Star, title: "Preços Acessíveis", desc: "Óculos para toda família" },
    { icon: Shield, title: "Qualidade Garantida", desc: "Produtos testados e aprovados" },
    { icon: Clock, title: "Entrega Rápida", desc: "Pronto em até 5 dias úteis" },
    { icon: Heart, title: "Atendimento Humanizado", desc: "Cuidado especial com cada cliente" }
  ];

  return (
    <>
      <EnhancedSEO
        title="Ótica no Sítio Cercado - Curitiba | Ótica Gouveia"
        description="Ótica no Sítio Cercado com armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado."
        keywords="ótica no sítio cercado, óculos sítio cercado, exame de vista sítio cercado, ótica curitiba, lentes de grau curitiba"
        canonicalUrl="/otica-sitio-cercado"
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: 'Sítio Cercado', url: '/otica-sitio-cercado' }
        ]}
        preloadResources={[
          { href: '/hero-background.jpg', as: 'image' }
        ]}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <EnhancedHero
          title="Ótica Sítio Cercado"
          subtitle="Cuidando da visão das famílias do Sítio Cercado com carinho, qualidade e preços justos"
          location="Sítio Cercado - Curitiba"
          backgroundImage="/hero-background.jpg"
          whatsappUrl={whatsappUrl}
          phoneNumber="+5541999123456"
        />

        {/* YouTube Video Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conheça a Ótica Gouveia</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/gDEeiCvn89Q"
                  title="Ótica Gouveia - Curitiba"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Bairro */}
        <section className="section-padding bg-brand-gray-50" ref={ref as React.RefObject<HTMLDivElement>}>
          <div className="section-container">
            <div className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
                Atendendo o Sítio Cercado com Excelência
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-gray-900 mb-6">
                    Uma Ótica que Entende sua Comunidade
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed mb-6">
                    O Sítio Cercado é um bairro em constante crescimento, com uma comunidade unida e trabalhadora. A Ótica Gouveia reconhece a importância de oferecer serviços de qualidade a preços acessíveis para atender às necessidades das famílias locais. Estamos aqui para cuidar da saúde visual de toda a região.
                  </p>
                  <p className="text-brand-gray-600 leading-relaxed">
                    Nossa localização estratégica permite atender não apenas o Sítio Cercado, mas também bairros próximos como Cidade Industrial, Ganchinho e Tatuquara. Oferecemos um atendimento diferenciado, focado no bem-estar e na satisfação de cada cliente, sempre com os melhores preços da região.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brand-red/5 to-brand-blue/5 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-brand-gray-900 mb-4">Benefícios para o Sítio Cercado</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Preços especiais para moradores locais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Parcelamento facilitado sem burocracia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Atendimento em horários flexíveis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Fácil acesso por transporte público</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Mais Procurados */}
        <section className="section-padding bg-brand-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Produtos Mais Procurados no Sítio Cercado
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-sm text-brand-red font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">{product.name}</h3>
                  <div className="text-2xl font-bold text-brand-red mb-4">{product.price}</div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-red text-white py-2 px-4 rounded-lg hover:bg-brand-red/90 transition-colors block text-center"
                  >
                    Ver Oferta WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Por que Escolher a Ótica Gouveia?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-red/20 transition-colors">
                    <advantage.icon className="text-brand-red" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-brand-gray-600">{advantage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promoções Específicas */}
        <section className="section-padding bg-gradient-to-r from-brand-red to-brand-blue text-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Promoções Especiais Sítio Cercado</h2>
              <p className="text-xl opacity-90">Ofertas pensadas especialmente para sua família</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Pacote Família Econômico</h3>
                <p className="text-lg mb-6">3 óculos de grau por apenas R$ 299,00</p>
                <ul className="space-y-2 mb-6">
                  <li>• Exames gratuitos para toda família</li>
                  <li>• Lentes básicas incluídas</li>
                  <li>• Parcelamento em até 10x sem juros</li>
                  <li>• Garantia de 6 meses</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Aproveitar Promoção
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Primeiro Óculos</h3>
                <p className="text-lg mb-6">Consulte-nos para melhores condições!</p>
                <ul className="space-y-2 mb-6">
                  <li>• Ideal para primeira consulta</li>
                  <li>• Armações modernas disponíveis</li>
                  <li>• Atendimento especializado</li>
                  <li>• Ajustes e limpeza grátis</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Facilidades de Pagamento */}
        <section className="section-padding bg-brand-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Facilidades de Pagamento
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-red mb-4">0%</div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Juros</h3>
                <p className="text-brand-gray-600">Parcele em até 12x no cartão sem juros</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-red mb-4">PIX</div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Desconto</h3>
                <p className="text-brand-gray-600">10% de desconto pagando via PIX</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-brand-red mb-4">€</div>
                <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">Crediário</h3>
                <p className="text-brand-gray-600">Parcelamento próprio facilitado</p>
              </div>
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

export default OticaSitioCercado;