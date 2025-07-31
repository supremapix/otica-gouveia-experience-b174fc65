import { Helmet } from 'react-helmet-async';
import { MapPin, Eye, Star, Shield, Clock, Heart, Award, Users } from 'lucide-react';
import { useInView } from '../utils/animations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import SEO from '../components/SEO';
import { createOpticalStoreSchema, createBreadcrumbSchema, createLocalBusinessSchema } from '../utils/schemas';

const OticaUmbara = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Estou%20no%20site%20*%C3%93tica%20Gouveia*%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20premium%20do%20Umbar%C3%A1.";

  // SEO Schema
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Ótica Gouveia", url: "https://www.gouveiacuritiba.com.br/" },
    { name: "Umbará", url: "https://www.gouveiacuritiba.com.br/otica-umbara" }
  ]);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      createOpticalStoreSchema("Umbará"),
      createLocalBusinessSchema("Umbará"),
      breadcrumbSchema
    ]
  };

  const popularProducts = [
    { name: "Óculos de Grau Premium", price: "R$ 199,00", category: "Premium" },
    { name: "Óculos de Sol Ray-Ban", price: "R$ 249,00", category: "Luxo" },
    { name: "Lentes Progressivas", price: "R$ 359,00", category: "Multifocal" },
    { name: "Óculos Infantil Safety", price: "R$ 89,00", category: "Kids" },
    { name: "Lentes de Contato Premium", price: "R$ 95,00", category: "Contato" }
  ];

  const advantages = [
    { icon: Eye, title: "Centro de Excelência", desc: "Equipamentos de última geração para diagnósticos precisos" },
    { icon: Award, title: "Profissionais Especializados", desc: "Optometristas com mais de 15 anos de experiência" },
    { icon: Shield, title: "Tecnologia Avançada", desc: "Lentes com as mais modernas tecnologias do mercado" },
    { icon: Users, title: "Atendimento VIP", desc: "Consultas agendadas sem pressa e com total atenção" },
    { icon: Clock, title: "Laboratório Próprio", desc: "Montagem e ajustes realizados na própria loja" },
    { icon: Heart, title: "Pós-Venda Completo", desc: "Acompanhamento e suporte contínuo após a compra" }
  ];

  return (
    <>
      <SEO 
        title="Ótica no Umbará Curitiba - Ótica Gouveia | Tecnologia e Tradição"
        description="Ótica Gouveia no Umbará oferece óculos de grau, sol e lentes com tecnologia avançada. Exame de vista gratuito e atendimento especializado em Curitiba."
        keywords="ótica umbará, óculos umbará curitiba, exame vista umbará, ótica gouveia umbará, óculos grau umbará, lentes contato umbará"
        canonicalUrl="/otica-umbara"
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
                <span className="text-brand-red font-semibold">UMBARÁ - CURITIBA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-brand-gray-900 mb-6">
                Ótica Gouveia <span className="text-brand-red">Umbará</span>
              </h1>
              <div className="bg-gradient-to-r from-brand-red to-brand-blue text-white px-6 py-3 rounded-full inline-block mb-6">
                <span className="font-semibold">🏆 CENTRO DE EXCELÊNCIA EM SAÚDE VISUAL</span>
              </div>
              <p className="text-xl text-brand-gray-600 leading-relaxed">
                Nossa unidade principal no Umbará concentra o que há de mais moderno em tecnologia, 
                equipamentos e expertise para cuidar da sua visão com excelência.
              </p>
            </div>
          </div>
        </section>

        {/* Vídeo do Bairro */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
              Conheça o Umbará
            </h2>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TijvFL9UGKU"
                  title="Conheça o Umbará - Curitiba"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Centro */}
        <section className="section-padding bg-brand-gray-50" ref={ref as React.RefObject<HTMLDivElement>}>
          <div className="section-container">
            <div className={`transition-all duration-1000 ease-out ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-3xl font-bold text-brand-gray-900 mb-8 text-center">
                Centro de Excelência no Umbará
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-brand-gray-900 mb-6">
                    O Coração da Ótica Gouveia
                  </h3>
                  <p className="text-brand-gray-600 leading-relaxed mb-6">
                    O Umbará abriga nossa unidade principal, um verdadeiro centro de excelência em saúde visual. Localizado estrategicamente para atender toda a região sul de Curitiba, incluindo Cajuru, Uberaba, Portão e Água Verde, nosso centro concentra os mais modernos equipamentos e profissionais mais experientes.
                  </p>
                  <p className="text-brand-gray-600 leading-relaxed">
                    Esta é nossa sede de inovação, onde desenvolvemos novos tratamentos, testamos as mais recentes tecnologias em lentes e oferecemos um atendimento premium que se tornou referência em Curitiba. No Umbará, cada cliente recebe um cuidado personalizado e diferenciado.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brand-red/5 to-brand-blue/5 p-8 rounded-2xl">
                  <h4 className="text-xl font-semibold text-brand-gray-900 mb-4">Diferenciais do Centro Umbará</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Autorefrator digital de última geração</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Mapeamento de retina computadorizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Laboratório próprio para montagem expressa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                      <span className="text-brand-gray-600">Sala VIP para atendimento personalizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Premium */}
        <section className="section-padding bg-brand-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Produtos Premium Disponíveis no Umbará
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-brand-red/20">
                  <div className="text-sm text-brand-red font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold text-brand-gray-900 mb-3">{product.name}</h3>
                  <div className="text-2xl font-bold text-brand-red mb-4">{product.price}</div>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-brand-gray-600">✓ Garantia estendida</div>
                    <div className="text-sm text-brand-gray-600">✓ Ajustes ilimitados</div>
                    <div className="text-sm text-brand-gray-600">✓ Acompanhamento VIP</div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-red text-white py-2 px-4 rounded-lg hover:bg-brand-red/90 transition-colors block text-center"
                  >
                    Conhecer Produto WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vantagens Exclusivas */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Vantagens Exclusivas do Centro Umbará
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

        {/* Serviços Exclusivos */}
        <section className="section-padding bg-gradient-to-r from-brand-red to-brand-blue text-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Serviços Exclusivos Centro Umbará</h2>
              <p className="text-xl opacity-90">Tecnologia e cuidado em um só lugar</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Exame Completo Premium</h3>
                <p className="text-lg mb-6">Avaliação completa com equipamentos de última geração</p>
                <ul className="space-y-2 mb-6">
                  <li>• Mapeamento de retina digital</li>
                  <li>• Teste de campo visual</li>
                  <li>• Medição de pressão ocular</li>
                  <li>• Análise de lágrima</li>
                  <li>• Consultoria personalizada</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Agendar Exame Premium
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Lentes Sob Medida</h3>
                <p className="text-lg mb-6">Tecnologia alemã para lentes personalizadas</p>
                <ul className="space-y-2 mb-6">
                  <li>• Medição pupilométrica digital</li>
                  <li>• Análise do comportamento visual</li>
                  <li>• Lentes adaptadas ao seu estilo</li>
                  <li>• Garantia de adaptação 100%</li>
                  <li>• Suporte técnico contínuo</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Consultar Lentes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologia e Inovação */}
        <section className="section-padding bg-brand-gray-50">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-brand-gray-900 mb-12 text-center">
              Tecnologia e Inovação
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-red mb-3">15+</div>
                <h3 className="font-semibold text-brand-gray-900 mb-2">Anos de Experiência</h3>
                <p className="text-sm text-brand-gray-600">Tradição em saúde visual</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-red mb-3">50+</div>
                <h3 className="font-semibold text-brand-gray-900 mb-2">Marcas Premium</h3>
                <p className="text-sm text-brand-gray-600">As melhores do mercado</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-red mb-3">24h</div>
                <h3 className="font-semibold text-brand-gray-900 mb-2">Entrega Expressa</h3>
                <p className="text-sm text-brand-gray-600">Para casos urgentes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl font-bold text-brand-red mb-3">100%</div>
                <h3 className="font-semibold text-brand-gray-900 mb-2">Satisfação</h3>
                <p className="text-sm text-brand-gray-600">Garantia de qualidade</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Premium */}
        <section className="section-padding bg-brand-gray-900 text-white">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold mb-6">Experimente o Atendimento Premium</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Venha conhecer nosso Centro de Excelência no Umbará e descubra o que é ter um cuidado verdadeiramente diferenciado com sua visão
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Agendar Consulta VIP
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

export default OticaUmbara;