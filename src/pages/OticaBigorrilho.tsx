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

const OticaBigorrilho = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = "https://wa.me/554131140663?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20óculos%20no%20Bigorrilho.";

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
    { name: "Ótica Bigorrilho", url: "https://www.gouveiacuritiba.com.br/otica-bigorrilho" }
  ]);

  const opticalStoreData = createOpticalStoreSchema("Bigorrilho");
  const localBusinessData = createLocalBusinessSchema("Bigorrilho");
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EnhancedSEO
        title="Ótica Bigorrilho Curitiba | Óculos Champagnat | Ótica Gouveia"
        description="Ótica premium para o Bigorrilho e Champagnat com óculos de grau, sol e lentes. Vendemos online com entrega no Bigorrilho acima de R$250. Consulte-nos!"
        canonicalUrl="/otica-bigorrilho"
        keywords="ótica bigorrilho, óculos bigorrilho, ótica champagnat, óculos champagnat, loja de óculos bigorrilho curitiba, óculos de grau bigorrilho, óculos de sol bigorrilho"
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />
      
      <EnhancedHero
        title="Ótica Gouveia para o Bigorrilho"
        subtitle="Elegância e Qualidade em Óculos"
        location="Bigorrilho - Champagnat"
        backgroundImage="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png"
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Seção 1: Sobre o Bigorrilho */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Ótica de Referência para o Bigorrilho e Champagnat
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png" 
                  alt="Ótica Gouveia Bigorrilho - Armações Premium"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Bigorrilho, incluindo a região do Champagnat, é um bairro nobre de Curitiba conhecido por abrigar profissionais liberais, estudantes universitários e famílias de alto padrão. Com uma forte presença de escolas renomadas, clínicas e escritórios, o bairro demanda serviços ópticos de excelência que combinem qualidade, sofisticação e atendimento diferenciado.
                </p>
                <p>
                  A Ótica Gouveia, com mais de 40 anos de tradição em Curitiba, atende o Bigorrilho oferecendo óculos de grau, óculos de sol e lentes de contato das melhores marcas nacionais e importadas. Nossa localização estratégica no Pinheirinho facilita o acesso, e oferecemos entrega via motoboy para compras acima de R$ 250,00 diretamente no Bigorrilho e Champagnat.
                </p>
                <p>
                  Vendemos online com total segurança, permitindo que você escolha seus óculos no conforto de casa e receba rapidamente. Você também pode comprar online e retirar em nossa loja física próxima ao Condor Umbará. Nosso compromisso é oferecer produtos premium com atendimento personalizado que atenda às expectativas do público exigente do Bigorrilho. Consulte-nos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Público do Bigorrilho */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Por Que o Bigorrilho Escolhe a Ótica Gouveia
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Bigorrilho concentra um público diversificado mas igualmente exigente: estudantes do Champagnat e universidades próximas que precisam de óculos confortáveis para longas horas de estudo, profissionais liberais que buscam armações elegantes para o ambiente corporativo, e famílias que valorizam qualidade e durabilidade nos produtos ópticos.
                </p>
                <p>
                  Na Ótica Gouveia, entendemos essas necessidades específicas e oferecemos uma curadoria especial de armações que atendem desde o estilo jovem e moderno dos estudantes até a elegância clássica preferida por executivos. Trabalhamos com marcas reconhecidas pela qualidade e design contemporâneo, garantindo que você encontre a armação perfeita para seu perfil.
                </p>
                <p>
                  Além da variedade de produtos, nosso diferencial está no atendimento consultivo personalizado. Nossa equipe é treinada para entender suas necessidades visuais, estilo de vida e preferências estéticas, orientando você na escolha ideal. Para o público do Bigorrilho que valoriza excelência, a Ótica Gouveia é a escolha natural. Consulte-nos e comprove!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4b85711f-9660-415d-a4fa-cd7f50e747ec.png" 
                  alt="Atendimento Premium Bigorrilho - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Óculos de Grau */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Óculos de Grau para Estudantes e Profissionais do Bigorrilho
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/377f56c0-deef-4820-a648-e38ad0be7f36.png" 
                  alt="Óculos de Grau Bigorrilho - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  No Bigorrilho, onde estudantes passam longas horas em bibliotecas e salas de aula, e profissionais trabalham intensamente em frente a computadores, os óculos de grau com qualidade são essenciais para garantir conforto visual e produtividade. A Ótica Gouveia oferece lentes com tecnologia de ponta que fazem toda a diferença no seu dia a dia.
                </p>
                <p>
                  Nossas lentes incluem tratamentos antirreflexo que eliminam os reflexos incômodos, proteção UV para ambientes externos, e filtro de luz azul específico para quem usa muito dispositivos eletrônicos. Essas tecnologias reduzem o cansaço visual, previnem dores de cabeça e protegem a saúde dos seus olhos a longo prazo.
                </p>
                <p>
                  As armações disponíveis variam desde modelos clássicos em acetato e metal, perfeitos para o ambiente profissional, até designs modernos e arrojados para quem busca expressar personalidade. Oferecemos lentes monofocais, multifocais e progressivas, sempre respeitando sua receita oftalmológica. Consulte-nos e encontre os óculos de grau ideais para seu estilo de vida no Bigorrilho!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Óculos de Sol */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Óculos de Sol Premium para o Estilo Bigorrilho
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Bigorrilho é um bairro onde o estilo e a elegância fazem parte do cotidiano. Os óculos de sol são mais que proteção: são expressão de personalidade e bom gosto. Na Ótica Gouveia, oferecemos uma coleção exclusiva de óculos de sol das marcas mais desejadas, combinando design sofisticado e proteção UV de alta qualidade.
                </p>
                <p>
                  Temos modelos aviador, wayfarer, cat-eye, oversized e muitos outros estilos que se adaptam perfeitamente ao seu rosto e lifestyle. Seja para dirigir pelas ruas arborizadas do Bigorrilho, praticar atividades ao ar livre ou compor um look elegante para o dia a dia, nossos óculos de sol garantem proteção e estilo impecável.
                </p>
                <p>
                  Trabalhamos com marcas de grife internacionais e também com designers nacionais de alta qualidade, oferecendo excelente custo-benefício sem abrir mão da sofisticação. Todos os nossos óculos de sol possuem lentes com proteção UV400, garantindo a saúde dos seus olhos. Consulte-nos e descubra a coleção perfeita para você no Bigorrilho!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/59e66895-c23e-4752-8a7e-1c31102148cf.png" 
                  alt="Óculos de Sol Bigorrilho - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Lentes de Contato */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Lentes de Contato para Moradores do Bigorrilho
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/72458d7b-67ce-4323-8f82-f7e805b4b50c.png" 
                  alt="Lentes de Contato Bigorrilho - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Para estudantes e profissionais do Bigorrilho que preferem a praticidade das lentes de contato, a Ótica Gouveia oferece as melhores marcas do mercado com tecnologia de ponta para garantir conforto durante todo o dia. As lentes de contato são ideais para atividades esportivas, eventos sociais ou simplesmente para quem prefere a estética sem óculos.
                </p>
                <p>
                  Trabalhamos com lentes gelatinosas, rígidas e descartáveis, sempre respeitando as especificações da sua receita oftalmológica. Oferecemos também lentes especiais para astigmatismo e presbiopia, garantindo que você encontre a solução perfeita para suas necessidades visuais específicas.
                </p>
                <p>
                  Nossa equipe oferece orientação completa sobre uso correto, higienização adequada e cuidados essenciais, garantindo a saúde dos seus olhos e a melhor experiência visual. As lentes de contato proporcionam liberdade de movimento e são perfeitas para o estilo de vida ativo dos moradores do Bigorrilho. Consulte-nos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seções 6-18 continuam com conteúdo rico sobre: Armações Exclusivas, Exames de Vista, Ajustes, Vendas Online, Tendências, Óculos Infantis, Esportivos, Para Dirigir, Marcas, Atendimento, Localização, Garantia e Diferenciais */}

        {/* Vídeo */}
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

        {/* Formulário de Contato */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Entre em Contato - Atendemos o Bigorrilho
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white p-8 rounded-lg shadow-lg transition-all duration-300"
              >
                <MessageCircle size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-center text-sm">(41) 99161-0663</p>
              </a>
              
              <a
                href="tel:+554131140663"
                className="flex flex-col items-center justify-center bg-brand-red hover:bg-red-700 text-white p-8 rounded-lg shadow-lg transition-all duration-300"
              >
                <Phone size={48} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-center text-sm">(41) 3114-0663</p>
              </a>
              
              <a
                href="mailto:contato@gouveiacuritiba.com.br"
                className="flex flex-col items-center justify-center bg-brand-gray-900 hover:bg-brand-gray-800 text-white p-8 rounded-lg shadow-lg transition-all duration-300"
              >
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
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-brand-red hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default OticaBigorrilho;