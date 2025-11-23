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

const OticaBatel = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = "https://wa.me/554131140663?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20óculos%20no%20Batel.";

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

  // SEO structured data
  const breadcrumbData = createBreadcrumbSchema([
    { name: "Início", url: "https://www.gouveiacuritiba.com.br" },
    { name: "Ótica Batel", url: "https://www.gouveiacuritiba.com.br/otica-batel" }
  ]);

  const opticalStoreData = createOpticalStoreSchema("Batel");
  const localBusinessData = createLocalBusinessSchema("Batel");
  const structuredData = [breadcrumbData, opticalStoreData, localBusinessData];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EnhancedSEO
        title="Ótica no Batel Curitiba | Óculos de Grau e Sol de Luxo | Ótica Gouveia"
        description="Ótica de referência no Batel atendendo executivos e moradores com óculos de grau, sol e lentes premium. Armações de luxo nacionais e importadas. Consulte-nos! Entrega para o Batel."
        canonicalUrl="/otica-batel"
        keywords="ótica batel, óculos batel, loja de óculos batel curitiba, óculos de grau batel, óculos de sol batel, armações de luxo batel, ray ban batel, oakley batel, ótica premium batel"
        structuredData={structuredData}
        ogType="website"
      />
      
      <Navbar />
      
      <EnhancedHero
        title="Ótica Gouveia para o Batel"
        subtitle="Sofisticação e Qualidade em Ótica"
        location="Batel"
        backgroundImage="/lovable-uploads/9cb88b28-e372-46cb-9604-f84bf0bed383.png"
        whatsappUrl={whatsappUrl}
        phoneNumber="+554131140663"
      />

      <main className="flex-grow">
        {/* Seção 1: Sobre o Batel */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Ótica de Referência para o Bairro Batel em Curitiba
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/2c54c0af-f957-4477-b0ec-ea572976132f.png" 
                  alt="Ótica Gouveia - Armações Premium para o Batel"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Batel é reconhecido como um dos bairros mais sofisticados de Curitiba, abrigando executivos, profissionais liberais e famílias que valorizam qualidade e exclusividade. A Ótica Gouveia tem orgulho de atender essa região com mais de 40 anos de tradição, oferecendo óculos de grau, óculos de sol e lentes de contato das melhores marcas nacionais e importadas.
                </p>
                <p>
                  Nossa localização estratégica no Pinheirinho facilita o acesso de moradores do Batel, e oferecemos entrega via motoboy para compras acima de R$ 250,00. Você também pode comprar online e retirar em nossa loja física, localizada próxima ao Condor Umbará. Vendemos online com toda segurança e comodidade que você merece.
                </p>
                <p>
                  Nosso compromisso é oferecer atendimento personalizado, produtos de alta qualidade e a melhor experiência em cuidados com a visão. No Batel, onde a excelência é padrão, a Ótica Gouveia se destaca como referência em óculos e lentes premium. Consulte-nos para conhecer nossas condições especiais!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2: Por Que o Batel Escolhe a Ótica Gouveia */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Por Que Executivos e Moradores do Batel Confiam na Ótica Gouveia
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O público do Batel é exigente e busca não apenas produtos de qualidade, mas também atendimento diferenciado. Na Ótica Gouveia, você encontra uma curadoria especial de armações que combinam design contemporâneo, conforto e durabilidade. Trabalhamos com marcas renomadas que atendem ao estilo sofisticado dos moradores do bairro.
                </p>
                <p>
                  Além disso, nossa equipe é treinada para oferecer consultoria personalizada, ajudando você a escolher a armação ideal para seu rosto, estilo de vida e necessidades visuais. Seja para uso diário no escritório, eventos sociais ou atividades ao ar livre, temos a solução perfeita para você.
                </p>
                <p>
                  Com mais de 40 anos de experiência no mercado óptico de Curitiba, a Ótica Gouveia conquistou a confiança de milhares de clientes pela qualidade, transparência e compromisso com a satisfação. No Batel, bairro que valoriza tradição e inovação, somos a escolha natural para quem busca excelência em óculos e lentes.
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4b85711f-9660-415d-a4fa-cd7f50e747ec.png" 
                  alt="Atendimento Premium Ótica Gouveia para o Batel"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Óculos de Grau para o Batel */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Óculos de Grau Premium para Profissionais do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/377f56c0-deef-4820-a648-e38ad0be7f36.png" 
                  alt="Óculos de Grau para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Para executivos e profissionais do Batel que passam longas horas em frente ao computador, os óculos de grau são essenciais para garantir conforto visual e produtividade. Na Ótica Gouveia, oferecemos lentes com tratamentos antirreflexo, proteção UV e filtro de luz azul, ideais para o ambiente corporativo moderno.
                </p>
                <p>
                  Nossas armações de grau combinam elegância e funcionalidade. Temos modelos clássicos em acetato e metal, perfeitos para o ambiente profissional, além de opções mais modernas e despojadas para o dia a dia. Todas as armações são cuidadosamente selecionadas para garantir durabilidade e estilo atemporal.
                </p>
                <p>
                  As lentes podem ser personalizadas de acordo com sua receita e estilo de vida. Oferecemos lentes monofocais, multifocais e progressivas, sempre com tecnologia de ponta para garantir a melhor experiência visual. Consulte-nos para conhecer todas as opções disponíveis e encontrar a solução ideal para você no Batel!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 4: Óculos de Sol para o Batel */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Óculos de Sol de Luxo para o Estilo Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  No Batel, onde o estilo é parte da identidade do bairro, os óculos de sol são muito mais que um acessório: são uma declaração de personalidade e bom gosto. A Ótica Gouveia oferece uma coleção exclusiva de óculos de sol das marcas mais desejadas do mercado, combinando design sofisticado e proteção UV de alta qualidade.
                </p>
                <p>
                  Temos modelos aviador, wayfarer, cat-eye e muitos outros estilos que se adaptam perfeitamente ao seu rosto e ao seu lifestyle. Seja para dirigir, praticar esportes ou simplesmente compor um look elegante para o dia a dia no bairro, nossos óculos de sol garantem proteção e estilo.
                </p>
                <p>
                  Além das armações de grife, também trabalhamos com modelos nacionais de alta qualidade, oferecendo excelente custo-benefício sem abrir mão da sofisticação. Todos os nossos óculos de sol possuem lentes com proteção UV400, garantindo a saúde dos seus olhos. Consulte-nos e descubra a coleção perfeita para você no Batel!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/59e66895-c23e-4752-8a7e-1c31102148cf.png" 
                  alt="Óculos de Sol Premium para o Batel - Ótica Gouveia"
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
              Lentes de Contato para Moradores do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/72458d7b-67ce-4323-8f82-f7e805b4b50c.png" 
                  alt="Lentes de Contato para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Para quem prefere a praticidade e liberdade das lentes de contato, a Ótica Gouveia oferece as melhores marcas do mercado, com tecnologia de ponta para garantir conforto durante todo o dia. Atendemos moradores do Batel que buscam lentes de contato para uso diário, esportivo ou para ocasiões especiais.
                </p>
                <p>
                  Trabalhamos com lentes gelatinosas, rígidas e descartáveis, sempre respeitando as especificações da sua receita oftalmológica. Nossa equipe oferece orientação completa sobre uso, higienização e cuidados, garantindo a saúde dos seus olhos e a melhor experiência visual.
                </p>
                <p>
                  As lentes de contato são ideais para quem pratica atividades físicas, trabalha com apresentações ou simplesmente prefere a estética sem óculos. Consulte-nos para conhecer todas as opções disponíveis e encontrar as lentes ideais para o seu estilo de vida no Batel!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6: Armações de Luxo */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Armações de Luxo e Design Exclusivo para o Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Batel é um bairro que respira sofisticação, e nossa coleção de armações reflete exatamente esse espírito. Na Ótica Gouveia, você encontra modelos exclusivos de acetato italiano, titânio e aço inoxidável, materiais nobres que garantem durabilidade e conforto máximo.
                </p>
                <p>
                  Trabalhamos com designers nacionais e internacionais que criam armações verdadeiramente únicas, perfeitas para quem busca se destacar com elegância. Seja para o ambiente corporativo ou para eventos sociais no bairro, temos a armação ideal que expressa sua personalidade e estilo.
                </p>
                <p>
                  Além da estética impecável, todas as nossas armações de luxo passam por rigoroso controle de qualidade. Oferecemos ajustes personalizados para garantir o caimento perfeito no seu rosto, proporcionando conforto durante todo o dia. Consulte-nos e descubra as armações mais desejadas para o público do Batel!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/8a300cb4-5614-40c2-adcb-ea81b6994e40.png" 
                  alt="Armações de Luxo para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 7: Exames de Vista */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Indicação de Exames de Vista para Moradores do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/e1ecf008-b212-460b-ac86-aaa84894d67e.png" 
                  alt="Exames de Vista para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  A saúde ocular é fundamental para manter a qualidade de vida e produtividade, especialmente para profissionais do Batel que passam longas horas em frente ao computador. Embora não realizemos exames de vista em nossa ótica, oferecemos indicações de oftalmologistas de confiança próximos ao bairro Batel.
                </p>
                <p>
                  Recomendamos que você realize exames de vista regularmente, pelo menos uma vez por ano, para detectar precocemente problemas como miopia, hipermetropia, astigmatismo e presbiopia. Com a receita em mãos, nossa equipe na Ótica Gouveia estará pronta para ajudá-lo a escolher os óculos perfeitos.
                </p>
                <p>
                  Além disso, orientamos sobre a importância de lentes com tratamentos especiais, como filtro de luz azul para quem trabalha muito tempo em telas, e proteção UV para quem se expõe ao sol. Consulte-nos para receber indicações de profissionais e conhecer nossas soluções ópticas para o Batel!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 8: Ajustes e Manutenção */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Ajustes e Manutenção de Óculos para o Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Manter seus óculos sempre em perfeito estado é essencial para garantir conforto e visão nítida. Na Ótica Gouveia, oferecemos serviços de ajuste e manutenção para moradores do Batel, garantindo que suas armações estejam sempre com o caimento ideal e as lentes limpas e protegidas.
                </p>
                <p>
                  Nossos profissionais realizam ajustes de hastes, troca de parafusos, limpeza profunda e polimento de lentes. Também orientamos sobre os cuidados diários que você deve ter com seus óculos para prolongar a vida útil e manter a qualidade visual.
                </p>
                <p>
                  Se você adquiriu seus óculos em outra ótica e precisa de ajustes, também estamos à disposição. Nossa prioridade é garantir que você tenha a melhor experiência visual possível. Consulte-nos e agende seu ajuste para manter seus óculos sempre impecáveis!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/e2d4b47a-9617-4e72-9f26-50170c88e9a0.png" 
                  alt="Ajustes de Óculos para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 9: Vendas Online e Entregas */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Compre Online e Receba no Batel com Segurança
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/313dd361-4d84-445f-9985-e941bb363e87.png" 
                  alt="Vendas Online para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Pensando na comodidade dos moradores do Batel, a Ótica Gouveia oferece vendas online com entrega via motoboy para compras acima de R$ 250,00. Você pode navegar pelo nosso catálogo, escolher seus óculos favoritos e receber em casa ou no escritório com total segurança e rapidez.
                </p>
                <p>
                  Nosso sistema de vendas online é seguro e prático. Após a compra, você recebe atualizações sobre o status do pedido e pode acompanhar a entrega em tempo real. Para quem prefere experimentar pessoalmente, também oferecemos a opção de comprar online e retirar em nossa loja no Pinheirinho, próxima ao Condor Umbará.
                </p>
                <p>
                  Seja qual for sua preferência, garantimos a mesma qualidade de atendimento e produtos que nos tornaram referência há mais de 40 anos. Consulte-nos pelo WhatsApp, telefone ou e-mail e descubra como é fácil e seguro comprar seus óculos online para entrega no Batel!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 10: Tendências em Óculos */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Tendências em Óculos para o Público do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O Batel é um bairro que está sempre antenado nas últimas tendências de moda e estilo. Na Ótica Gouveia, acompanhamos de perto as novidades do mercado óptico internacional e trazemos para você as armações e modelos mais desejados do momento.
                </p>
                <p>
                  Atualmente, as tendências incluem armações oversized, que trazem presença e personalidade, modelos retrô inspirados nos anos 70 e 80, e armações minimalistas em metal para quem busca elegância discreta. As cores também estão em alta: tons terrosos, azul marinho e acetatos translúcidos são os favoritos da temporada.
                </p>
                <p>
                  Além do design, a tecnologia das lentes também evolui constantemente. Lentes fotocromáticas, que escurecem ao sol, e lentes com filtro de luz azul para uso em telas estão entre as mais procuradas por profissionais do Batel. Consulte-nos e descubra as tendências que combinam com seu estilo!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/40a418ff-3ca5-4179-978b-9c5888b8d04b.png" 
                  alt="Tendências em Óculos para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 11: Óculos para Crianças */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Óculos Infantis para Famílias do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/48cc47c3-a484-4afb-9f9e-fc1b26e5d095.png" 
                  alt="Óculos Infantis para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Sabemos que muitas famílias residem no Batel e buscam cuidar da saúde visual dos pequenos desde cedo. Na Ótica Gouveia, temos uma linha especial de óculos infantis, com armações leves, resistentes e coloridas que conquistam as crianças e tranquilizam os pais.
                </p>
                <p>
                  Nossas armações infantis são desenvolvidas com materiais flexíveis e antialérgicos, garantindo conforto e segurança durante todo o dia. As lentes são resistentes a impactos, ideais para a rotina ativa das crianças, e oferecemos tratamentos especiais para proteção UV e antirreflexo.
                </p>
                <p>
                  Além disso, nossa equipe é treinada para atender os pequenos com paciência e carinho, tornando a escolha dos óculos uma experiência divertida e positiva. Consulte-nos e traga seus filhos para conhecer nossa coleção infantil perfeita para famílias do Batel!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 12: Óculos Esportivos */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Óculos Esportivos para o Estilo de Vida Ativo do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Moradores do Batel são conhecidos por manter um estilo de vida ativo e saudável, frequentando academias, praticando corrida, ciclismo e outros esportes. Para essas atividades, os óculos esportivos são essenciais para garantir proteção, conforto e performance visual.
                </p>
                <p>
                  Na Ótica Gouveia, oferecemos óculos esportivos com lentes polarizadas, que eliminam o reflexo e proporcionam visão nítida mesmo em condições de alta luminosidade. As armações são leves, ergonômicas e possuem sistemas de fixação que garantem estabilidade durante os movimentos.
                </p>
                <p>
                  Temos modelos específicos para ciclismo, corrida, natação e outros esportes, sempre com tecnologia de ponta e design moderno. Se você é adepto de atividades ao ar livre, consulte-nos e descubra os óculos esportivos ideais para o seu treino no Batel e região!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/74d8f6cb-dfbb-4388-82b9-f012acfbadcc.png" 
                  alt="Óculos Esportivos para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 13: Óculos para Dirigir */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Óculos Especiais para Dirigir no Batel e Curitiba
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/78fd2b6e-8019-4120-9d13-9550297ccac7.png" 
                  alt="Óculos para Dirigir para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Dirigir com segurança exige visão nítida e confortável, especialmente em condições adversas como chuva, neblina ou sol forte. Para os motoristas do Batel que circulam diariamente pelas vias de Curitiba, a Ótica Gouveia oferece óculos especiais para direção, com lentes polarizadas e antirreflexo.
                </p>
                <p>
                  As lentes polarizadas eliminam o reflexo do asfalto molhado e dos para-brisas de outros veículos, proporcionando visão clara e reduzindo o cansaço visual. Além disso, o tratamento antirreflexo evita os halos de luz causados por faróis de outros carros à noite.
                </p>
                <p>
                  Temos armações discretas e elegantes, perfeitas para usar tanto na direção quanto no dia a dia. Se você passa muitas horas ao volante, consulte-nos e descubra como nossos óculos para dirigir podem aumentar sua segurança e conforto visual no trânsito do Batel e Curitiba!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 14: Marcas Disponíveis */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Marcas de Prestígio para o Público do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Na Ótica Gouveia, trabalhamos com as marcas mais desejadas do mercado nacional e internacional. Nosso portfólio inclui armações clássicas, modernas e de vanguarda, sempre com o compromisso de oferecer qualidade e autenticidade para o público exigente do Batel.
                </p>
                <p>
                  Entre as marcas disponíveis, temos opções que atendem desde o estilo corporativo elegante até looks mais despojados para o fim de semana. Todas as armações passam por rigoroso controle de qualidade e são acompanhadas de certificado de autenticidade e garantia do fabricante.
                </p>
                <p>
                  Além das marcas de grife, também oferecemos armações de designers nacionais que combinam design exclusivo e preços acessíveis, sem abrir mão da sofisticação. Consulte-nos para conhecer todas as marcas disponíveis e encontrar a armação perfeita para o seu estilo no Batel!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/893390c7-51de-4f3a-97ac-9489c25925eb.png" 
                  alt="Marcas de Óculos para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 15: Atendimento Personalizado */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Atendimento Personalizado para Moradores do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/9f9ebc43-0457-4fdb-8dca-d73cf2b9e790.png" 
                  alt="Atendimento Personalizado para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  O que diferencia a Ótica Gouveia no atendimento aos moradores do Batel é a nossa capacidade de oferecer consultoria personalizada. Entendemos que cada cliente tem necessidades visuais únicas, estilo próprio e expectativas específicas. Por isso, dedicamos tempo para conhecer você e ajudá-lo a fazer a melhor escolha.
                </p>
                <p>
                  Nossa equipe é composta por profissionais experientes que estudam constantemente as novidades do mercado óptico. Oferecemos análise de formato de rosto, indicação de armações que valorizem suas características e orientações sobre tratamentos de lentes ideais para seu estilo de vida.
                </p>
                <p>
                  Além disso, mantemos contato pós-venda para garantir sua satisfação. Se você tiver qualquer dúvida ou precisar de ajustes, estamos sempre à disposição. Esse compromisso com o atendimento é o que nos torna referência para o público exigente do Batel há mais de 40 anos. Consulte-nos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 16: Localização e Acesso */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Localização Estratégica e Fácil Acesso para o Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Embora nossa loja física esteja localizada no Pinheirinho, próxima ao Condor Umbará, oferecemos facilidades especiais para moradores do Batel. A distância entre os bairros é pequena e o acesso é rápido pelas principais vias de Curitiba, tornando a visita conveniente para quem mora ou trabalha no Batel.
                </p>
                <p>
                  Para sua comodidade, oferecemos entrega via motoboy para compras acima de R$ 250,00 diretamente no Batel. Você também pode comprar online e escolher entre receber em casa ou retirar em nossa loja. Nossa prioridade é facilitar seu acesso aos melhores produtos ópticos.
                </p>
                <p>
                  Além disso, disponibilizamos atendimento por WhatsApp, telefone e e-mail, permitindo que você tire dúvidas, consulte preços e até mesmo escolha seus óculos sem sair de casa. Consulte-nos e descubra como é fácil ter acesso à qualidade da Ótica Gouveia mesmo morando no Batel!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/a16bdfa8-f87b-4ca6-84c5-1311998e3299.png" 
                  alt="Localização para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção 17: Garantia e Qualidade */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6">
              Garantia e Qualidade para o Público Exigente do Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/cb5792fa-09cd-48d9-96ee-80bd8e1a29ee.png" 
                  alt="Garantia e Qualidade para o Batel - Ótica Gouveia"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Quando você adquire um produto na Ótica Gouveia, está investindo em qualidade garantida. Todos os nossos óculos e lentes vêm acompanhados de certificado de autenticidade e garantia do fabricante, oferecendo total segurança e tranquilidade para moradores do Batel que valorizam produtos premium.
                </p>
                <p>
                  Nosso compromisso com a qualidade vai além da venda. Realizamos verificações rigorosas antes de entregar seus óculos, garantindo que as lentes estejam perfeitamente centralizadas, as hastes ajustadas e todos os detalhes em perfeito estado. Se houver qualquer problema, estamos prontos para resolver rapidamente.
                </p>
                <p>
                  Com mais de 40 anos de tradição em Curitiba, construímos nossa reputação baseada na confiança e satisfação dos clientes. Para o público exigente do Batel, oferecemos não apenas produtos de qualidade, mas também a segurança de um atendimento comprometido com a excelência. Consulte-nos!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 18: Diferenciais da Ótica Gouveia */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-6 text-center">
              Por Que a Ótica Gouveia é a Escolha Certa para o Batel
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-brand-gray-700 text-lg leading-relaxed">
                <p>
                  Ao escolher a Ótica Gouveia para cuidar da sua visão no Batel, você se beneficia de uma combinação única de tradição, qualidade e atendimento personalizado. Há mais de 40 anos, atendemos famílias curitibanas com compromisso inabalável com a satisfação do cliente.
                </p>
                <p>
                  Nossos diferenciais incluem: vasto portfólio de marcas nacionais e importadas, lentes com tecnologia de ponta, atendimento consultivo personalizado, vendas online com entrega no Batel, garantia e suporte pós-venda, e preços justos com transparência total. Consulte-nos para conhecer nossas condições especiais!
                </p>
                <p>
                  No Batel, onde a excelência é o padrão, a Ótica Gouveia se destaca como a escolha natural para quem busca não apenas óculos, mas uma experiência completa de cuidado visual. Entre em contato conosco pelo WhatsApp, telefone ou e-mail e descubra por que somos a ótica de confiança para o público sofisticado do Batel!
                </p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/e5648b15-71af-463e-9d97-c7b893f4d150.png" 
                  alt="Diferenciais da Ótica Gouveia para o Batel"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

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
              Entre em Contato - Atendemos o Batel
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
      
      {/* Botão Voltar ao Topo */}
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

export default OticaBatel;