import { Helmet } from 'react-helmet-async';
import { MapPin, Eye, Star, Shield, Clock, Heart } from 'lucide-react';
import { useInView } from '../utils/animations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import { createOpticalStoreSchema, createBreadcrumbSchema, createLocalBusinessSchema } from '../utils/schemas';

const OticaSitioCercado = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20%C3%B3culos%20no%20S%C3%ADtio%20Cercado.";

  // SEO Schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Ótica Gouveia", url: "https://www.gouveiacuritiba.com.br/" },
    { name: "Sítio Cercado", url: "https://www.gouveiacuritiba.com.br/otica-sitio-cercado" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createOpticalStoreSchema("Sítio Cercado"),
      createLocalBusinessSchema("Sítio Cercado"),
      breadcrumbSchema
    ]
  };

  const popularProducts = [
    { name: "Óculos de Grau Econômico", price: "R$ 89,00", category: "Popular" },
    { name: "Óculos de Sol Infantil", price: "R$ 45,00", category: "Kids" },
    { name: "Lentes de Contato Coloridas", price: "R$ 65,00", category: "Fashion" },
    { name: "Óculos Multifocais", price: "R$ 299,00", category: "Premium" },
    { name: "Armações Flexíveis", price: "R$ 120,00", category: "Confort" }
  ];

  const advantages = [
    { icon: Eye, title: "Exame Completo Gratuito", desc: "Avaliação detalhada da saúde ocular" },
    { icon: Star, title: "Preços Populares", desc: "Óculos acessíveis para toda família" },
    { icon: Shield, title: "Qualidade Garantida", desc: "Produtos testados e aprovados" },
    { icon: Clock, title: "Entrega Rápida", desc: "Pronto em até 5 dias úteis" },
    { icon: Heart, title: "Atendimento Humanizado", desc: "Cuidado especial com cada cliente" }
  ];

  return (
    <>
      <SEO 
        title="Ótica no Sítio Cercado Curitiba - Ótica Gouveia | Preços Populares"
        description="Ótica Gouveia atende Sítio Cercado com óculos de grau, sol e lentes. Preços populares e exame de vista gratuito para toda família. Qualidade garantida."
        keywords="ótica sítio cercado, óculos barato sítio cercado, exame vista gratuito sítio cercado, ótica gouveia sítio cercado, óculos preço popular"
        canonicalUrl="/otica-sitio-cercado"
        structuredData={combinedSchema}
      />

      <Navbar />
      
      <div className="min-h-screen bg-gradient-to-br from-brand-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/10 to-brand-blue/10"></div>
          <div className="section-container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="text-brand-red" size={24} />
                <span className="text-brand-red font-semibold">SÍTIO CERCADO - CURITIBA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-gray-900 mb-6">
                Ótica Gouveia <span className="text-brand-red">Sítio Cercado</span>
              </h1>
              <p className="text-xl text-brand-gray-600 leading-relaxed">
                Cuidando da visão das famílias do Sítio Cercado com carinho, qualidade e preços justos. 
                Sua saúde ocular é nossa prioridade.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre o Bairro */}
        <section className="section-padding bg-white" ref={ref as React.RefObject<HTMLDivElement>}>
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
                <p className="text-lg mb-6">Óculos completo a partir de R$ 89,00</p>
                <ul className="space-y-2 mb-6">
                  <li>• Ideal para primeira consulta</li>
                  <li>• Armações modernas disponíveis</li>
                  <li>• Exame de vista gratuito</li>
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

        {/* CTA Final */}
        <section className="section-padding bg-brand-gray-900 text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-6">Venha Conhecer Nossa Loja</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Estamos pertinho de você no Sítio Cercado. Venha fazer seu exame gratuito e descobrir nossas promoções exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Agendar Exame Gratuito
              </a>
              <a
                href="tel:+554131140663"
                className="border border-white hover:bg-white hover:text-brand-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Telefone: (41) 3114-0663
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default OticaSitioCercado;