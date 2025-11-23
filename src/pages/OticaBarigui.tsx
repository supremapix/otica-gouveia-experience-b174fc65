import React from 'react';
import { useInView } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import EnhancedSEO from '@/components/EnhancedSEO/EnhancedSEO';
import { createBreadcrumbStructuredData } from '@/components/EnhancedSEO/utils';
import { createOpticalStoreSchema, createLocalBusinessSchema } from '@/utils/schemas';

const OticaBarigui = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: 'Barigui', url: 'https://www.gouveiacuritiba.com.br/otica-barigui' }
  ]);

  const opticalStoreData = createOpticalStoreSchema('Barigui');
  const localBusinessData = createLocalBusinessSchema('Barigui');
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista no Barigui.";

  const popularProducts = [
    { nome: 'Óculos de Grau Feminino', preco: 'A partir de R$ 199', categoria: 'Armações' },
    { nome: 'Óculos de Sol Masculino', preco: 'A partir de R$ 159', categoria: 'Solares' },
    { nome: 'Lentes de Contato', preco: 'A partir de R$ 89', categoria: 'Lentes' },
    { nome: 'Óculos Infantil', preco: 'A partir de R$ 149', categoria: 'Infantil' }
  ];

  const advantages = [
    { icon: '👁️', title: 'Exame de Vista Gratuito', description: 'Realizamos exames completos sem custo para você' },
    { icon: '🚚', title: 'Entrega Rápida', description: 'Receba seus óculos em até 7 dias úteis' },
    { icon: '💳', title: 'Parcelamento Flexível', description: 'Parcele em até 10x sem juros no cartão' },
    { icon: '🏆', title: 'Garantia Estendida', description: '2 anos de garantia em todos os produtos' }
  ];

  return (
    <>
      <EnhancedSEO
        title="Ótica no Barigui - Curitiba | Ótica Gouveia"
        description="Ótica no Barigui com exames de vista gratuitos, armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado."
        keywords="ótica no barigui, óculos barigui, exame de vista barigui, ótica curitiba, lentes de grau curitiba"
        canonicalUrl="/otica-barigui"
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: 'Barigui', url: '/otica-barigui' }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navbar />
        
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ótica no Barigui
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Sua ótica de confiança no Barigui com exames de vista gratuitos e atendimento especializado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📱 Agendar pelo WhatsApp
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Ligar Agora
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-background/50" ref={ref as React.RefObject<HTMLElement>}>
          <div className="container mx-auto">
            <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Atendendo o Barigui com Excelência
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    A Ótica Gouveia no Barigui oferece atendimento especializado para toda a região, 
                    com uma equipe experiente e produtos de alta qualidade para cuidar da sua visão.
                  </p>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Realizamos exames de vista gratuitos e oferecemos as melhores marcas de armações 
                    e lentes, sempre com o melhor preço da região.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Por que escolher nossa ótica no Barigui?</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Localização privilegiada no Barigui</li>
                      <li>✓ Atendimento personalizado e humanizado</li>
                      <li>✓ Produtos com garantia e qualidade</li>
                      <li>✓ Preços acessíveis e parcelamento facilitado</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Produtos Mais Procurados</h3>
                  <div className="grid gap-4">
                    {popularProducts.map((product, index) => (
                      <div key={index} className="bg-background/80 p-4 rounded-lg">
                        <h4 className="font-semibold">{product.nome}</h4>
                        <p className="text-primary font-bold">{product.preco}</p>
                        <span className="text-sm text-muted-foreground">{product.categoria}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Vantagens Exclusivas no Barigui
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-background/50 rounded-lg">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Promoções Especiais Barigui
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                🎯 Oferta Exclusiva Barigui
              </h3>
              <p className="text-lg mb-6">
                Na compra de qualquer armação, ganhe <strong>50% de desconto</strong> nas lentes!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                *Promoção válida apenas para moradores do Barigui mediante comprovação de endereço.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                Aproveitar Promoção
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Visite Nossa Ótica no Barigui
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Estamos prontos para cuidar da sua visão com carinho e profissionalismo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                💬 Conversar no WhatsApp
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Ligar: (41) 99912-3456
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default OticaBarigui;