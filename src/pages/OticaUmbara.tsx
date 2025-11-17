import React from 'react';
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

const OticaUmbara = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // SEO e Structured Data
  const breadcrumbData = createBreadcrumbStructuredData([
    { name: 'Início', url: 'https://www.gouveiacuritiba.com.br/' },
    { name: 'Óticas em Curitiba', url: 'https://www.gouveiacuritiba.com.br/oticas-curitiba' },
    { name: 'Umbará', url: 'https://www.gouveiacuritiba.com.br/otica-umbara' }
  ]);

  const opticalStoreData = createOpticalStoreSchema('Umbará');
  const localBusinessData = createLocalBusinessSchema('Umbará');

  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  const whatsappUrl = "https://wa.me/5541999123456?text=Olá! Gostaria de agendar um exame de vista no Umbará.";

  // Produtos populares no bairro
  const popularProducts = [
    { nome: 'Óculos de Grau Premium', preco: 'Consulte-nos!', categoria: 'Premium' },
    { nome: 'Óculos de Sol Ray-Ban', preco: 'Consulte-nos!', categoria: 'Luxo' },
    { nome: 'Lentes Progressivas', preco: 'Consulte-nos!', categoria: 'Multifocal' },
    { nome: 'Lentes de Contato Premium', preco: 'Consulte-nos!', categoria: 'Contato' }
  ];

  // Vantagens da loja
  const advantages = [
    { icon: '🏆', title: 'Centro de Excelência', description: 'Equipamentos de última geração para diagnósticos precisos' },
    { icon: '👨‍⚕️', title: 'Profissionais Especializados', description: 'Optometristas com mais de 15 anos de experiência' },
    { icon: '🔬', title: 'Tecnologia Avançada', description: 'Lentes com as mais modernas tecnologias do mercado' },
    { icon: '⭐', title: 'Atendimento VIP', description: 'Consultas agendadas sem pressa e com total atenção' }
  ];

  return (
    <>
      <EnhancedSEO
        title="Ótica no Umbará - Curitiba | Ótica Gouveia"
        description="Ótica no Umbará com armações de qualidade e lentes especializadas. Visite a Ótica Gouveia e tenha atendimento personalizado."
        keywords="ótica no umbará, óculos umbará, exame de vista umbará, ótica curitiba, lentes de grau curitiba"
        canonicalUrl="/otica-umbara"
        structuredData={structuredData}
        breadcrumbs={[
          { name: 'Início', url: '/' },
          { name: 'Óticas em Curitiba', url: '/oticas-curitiba' },
          { name: 'Umbará', url: '/otica-umbara' }
        ]}
        preloadResources={[
          { href: '/hero-background.jpg', as: 'image' }
        ]}
      />
      
      <div className="min-h-screen">
        <Navbar />
        
        <EnhancedHero
          title="Centro de Excelência no Umbará"
          subtitle="Tecnologia avançada, equipe especializada e atendimento premium no coração do Umbará"
          location="Umbará - Curitiba"
          backgroundImage="/hero-background.jpg"
          whatsappUrl={whatsappUrl}
          phoneNumber="+5541999123456"
        />

        {/* YouTube Video Section */}
        <section className="py-16 px-4 bg-background/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Conheça o Umbará</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/TijvFL9UGKU"
                  title="Umbará - Curitiba"
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
        <section className="py-16 px-4 bg-background/50" ref={ref as React.RefObject<HTMLDivElement>}>
          <div className="container mx-auto">
            <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Centro de Excelência no Umbará
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground">
                    O Umbará abriga nossa unidade principal, um verdadeiro centro de excelência em saúde visual. 
                    Localizado estrategicamente para atender toda a região sul de Curitiba, nosso centro concentra 
                    os mais modernos equipamentos e profissionais mais experientes.
                  </p>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Esta é nossa sede de inovação, onde desenvolvemos novos tratamentos, testamos as mais recentes 
                    tecnologias em lentes e oferecemos um atendimento premium que se tornou referência em Curitiba.
                  </p>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Diferenciais do Centro Umbará</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>✓ Autorefrator digital de última geração</li>
                      <li>✓ Mapeamento de retina computadorizado</li>
                      <li>✓ Montagem expressa de qualidade</li>
                      <li>✓ Sala VIP para atendimento personalizado</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Produtos Premium Disponíveis</h3>
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

        {/* Vantagens */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Vantagens Exclusivas do Centro Umbará
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

        {/* Serviços Exclusivos */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Serviços Exclusivos Centro Umbará
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  🔬 Exame Completo Premium
                </h3>
                <p className="text-lg mb-6">
                  Avaliação completa com equipamentos de última geração
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• Mapeamento de retina digital</li>
                  <li>• Teste de campo visual</li>
                  <li>• Medição de pressão ocular</li>
                  <li>• Análise de lágrima</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
                >
                  Agendar Exame Premium
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  👓 Lentes Sob Medida
                </h3>
                <p className="text-lg mb-6">
                  Tecnologia alemã para lentes personalizadas
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li>• Medição pupilométrica digital</li>
                  <li>• Análise do comportamento visual</li>
                  <li>• Lentes adaptadas ao seu estilo</li>
                  <li>• Garantia de adaptação 100%</li>
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
                >
                  Consultar Lentes
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Premium */}
        <section className="py-16 px-4 bg-primary text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experimente o Atendimento Premium
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Venha conhecer nosso Centro de Excelência no Umbará e descubra o cuidado diferenciado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                💬 Agendar Consulta VIP
              </a>
              <a
                href="tel:+5541999123456"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                📞 Ligar: (41) 99912-3456
              </a>
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

export default OticaUmbara;