import { Helmet } from 'react-helmet-async';
import { MapPin, Eye, Star, Shield, Clock, Heart } from 'lucide-react';
import { useInView } from '../utils/animations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import FloatingActions from '../components/FloatingActions';
import FAQ from '../components/FAQ';
import EnhancedHero from '../components/EnhancedHero';
import EnhancedSEO from '../components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData } from '../components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema } from '../utils/schemas';

const LojaOculosPinheirinho = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20%C3%B3culos%20no%20Pinheirinho.";

  // SEO Schema
  const breadcrumbSchema = createBreadcrumbStructuredData([
    { name: "Ótica Gouveia", url: "https://www.gouveiacuritiba.com.br/" },
    { name: "Pinheirinho", url: "https://www.gouveiacuritiba.com.br/loja-de-oculos-no-pinheirinho" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createOpticalStoreSchema("Pinheirinho"),
      createLocalBusinessSchema("Pinheirinho"),
      breadcrumbSchema
    ]
  };

  const popularProducts = [
    { name: "Óculos de Grau Ray-Ban", price: "Consulte-nos!", category: "Premium" },
    { name: "Óculos de Sol Oakley", price: "Consulte-nos!", category: "Esportivo" },
    { name: "Lentes de Contato Acuvue", price: "Consulte-nos!", category: "Mensal" },
    { name: "Óculos Infantil Disney", price: "Consulte-nos!", category: "Kids" },
    { name: "Óculos Multifocais Zeiss", price: "Consulte-nos!", category: "Progressive" }
  ];

  const advantages = [
    { icon: Eye, title: "Atendimento Especializado", desc: "Consulta completa com optometrista qualificado" },
    { icon: Star, title: "Marcas Premium", desc: "Ray-Ban, Oakley, Prada e outras marcas de luxo" },
    { icon: Shield, title: "Garantia Estendida", desc: "12 meses de garantia em todos os produtos" },
    { icon: Clock, title: "Atendimento Ágil", desc: "Entrega em até 7 dias úteis" },
    { icon: Heart, title: "Facilidades de Pagamento", desc: "Diversas formas de pagamento disponíveis" }
  ];

  return (
    <>
      <EnhancedSEO
        title="Loja de Óculos no Pinheirinho Curitiba - Ótica Gouveia"
        description="Ótica Gouveia no Pinheirinho - Óculos de grau, sol e lentes de contato. Atendemos toda região do Pinheirinho em Curitiba com qualidade e tradição."
        keywords="ótica pinheirinho, óculos pinheirinho curitiba, exame vista pinheirinho, loja óculos pinheirinho, ótica gouveia pinheirinho, óculos grau pinheirinho"
        canonicalUrl="/loja-de-oculos-no-pinheirinho"
        structuredData={combinedSchema}
      />

      <div className="min-h-screen">
        <Navbar />
        
        <EnhancedHero
          title="Ótica no Pinheirinho"
          subtitle="Sua ótica de confiança no coração do Pinheirinho com atendimento especializado e produtos de qualidade"
          location="Pinheirinho - Curitiba"
          backgroundImage="/hero-background.jpg"
          whatsappUrl={whatsappUrl}
        />

        {/* Vídeo do Bairro */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
              Conheça o Pinheirinho
            </h2>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/19iSaNHFoa0"
                  title="Conheça o Pinheirinho - Curitiba"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
                Ótica Gouveia no Pinheirinho
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-gray-900 mb-6">
                    Cuidando da Visão dos Moradores do Pinheirinho
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed mb-6">
                    O Pinheirinho é um dos bairros mais tradicionais e desenvolvidos de Curitiba, conhecido por sua infraestrutura completa e qualidade de vida. A Ótica Gouveia está estrategicamente localizada para atender não apenas os moradores do Pinheirinho, mas também das regiões vizinhas como Capão Raso, Xaxim e Augusta.
                  </p>
                  <p className="text-brand-gray-600 leading-relaxed">
                    Nossa missão é proporcionar saúde visual de qualidade para toda a comunidade, oferecendo desde exames gratuitos até as mais modernas tecnologias em lentes e armações. Entendemos as necessidades específicas dos moradores da região e adaptamos nossos serviços para oferecer o melhor atendimento.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brand-red/5 to-brand-blue/5 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-brand-gray-900 mb-4">Por que escolher a Ótica Gouveia?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Localização privilegiada no Pinheirinho</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Atendimento personalizado e humanizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Preços acessíveis para toda família</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Facilidade de acesso e estacionamento</span>
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
              Produtos Mais Procurados no Pinheirinho
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
                    Saiba Mais WhatsApp
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
              Vantagens Exclusivas da Ótica Gouveia
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

        {/* Promoções */}
        <section className="section-padding bg-gradient-to-r from-brand-red to-brand-blue text-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Promoções Especiais Pinheirinho</h2>
              <p className="text-xl opacity-90">Ofertas exclusivas para moradores da região</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Combo Família</h3>
                <p className="text-lg mb-6">Consulte-nos sobre condições especiais!</p>
                <ul className="space-y-2 mb-6">
                  <li>• Atendimento completo para toda família</li>
                  <li>• Lentes antirreflexo incluídas</li>
                  <li>• Garantia estendida de 12 meses</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Aproveitar Oferta
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Lentes de Contato</h3>
                <p className="text-lg mb-6">50% OFF na segunda caixa + consulta gratuita</p>
                <ul className="space-y-2 mb-6">
                  <li>• Todas as marcas disponíveis</li>
                  <li>• Teste de adaptação gratuito</li>
                  <li>• Acompanhamento profissional</li>
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

        {/* CTA Final */}
        <section className="section-padding bg-brand-gray-900 text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-6">Visite Nossa Loja no Pinheirinho</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Venha conhecer nossa estrutura completa e descubra por que somos a ótica preferida do Pinheirinho
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

        <FAQ />
      </div>

      <Footer />
      <FloatingActions />
      <WhatsAppFloat />
    </>
  );
};

export default LojaOculosPinheirinho;