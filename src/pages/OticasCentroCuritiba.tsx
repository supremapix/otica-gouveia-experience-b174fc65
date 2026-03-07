import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
import BackToTop from "@/components/BackToTop";
import ImageGallery from "@/components/ImageGallery";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20%C3%B3culos%20na%20%C3%93tica%20Gouveia%20Curitiba.";

const OticasCentroCuritiba = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.gouveiacuritiba.com.br/oticas-no-centro-de-curitiba",
    "name": "Ótica Gouveia — Óticas no Centro de Curitiba",
    "description": "Ótica Gouveia em Curitiba. Óculos de grau, sol e lentes de contato com tecnologia Visioffice 3. Entrega em todo Curitiba. Melhor custo-benefício da capital.",
    "url": "https://www.gouveiacuritiba.com.br/oticas-no-centro-de-curitiba",
    "telephone": "+554131140663",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Nicola Pellanda, 1286",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81880-000",
      "addressCountry": "BR"
    },
    "areaServed": "Curitiba, PR",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "847" }
  };

  const diferenciais = [
    { icon: "🔬", titulo: "Tecnologia Visioffice 3", desc: "O mesmo equipamento de medição das grandes redes de óticas. Lentes perfeitas para o seu rosto." },
    { icon: "🚚", titulo: "Entrega em Todo Curitiba", desc: "Óculos de sol e lentes de contato: peça pelo WhatsApp. Óculos de grau: venha à loja para medição e entregamos após confecção." },
    { icon: "💰", titulo: "Melhor Preço da Cidade", desc: "Parcelamos em até 10x sem juros. Desconto para pagamento à vista no PIX." },
    { icon: "⭐", titulo: "40+ Anos de Tradição", desc: "Mais de 4 décadas cuidando da visão das famílias curitibanas com qualidade garantida." },
    { icon: "🏷️", titulo: "Marcas Reconhecidas", desc: "Ray-Ban, Oakley, Essilor, Zeiss, Hoya e muito mais. Produtos originais com garantia de fábrica." },
    { icon: "👨‍⚕️", titulo: "Equipe Especializada", desc: "Optometristas e ópticos habilitados para garantir sua visão em perfeitas condições." },
  ];

  return (
    <>
      <Helmet>
        <title>Óticas no Centro de Curitiba | Melhor Ótica de Curitiba | Gouveia</title>
        <meta name="description" content="Procurando óticas no centro de Curitiba? A Ótica Gouveia entrega em toda Curitiba. Óculos de grau, sol, lentes de contato. Tecnologia Visioffice 3. Preços justos e qualidade garantida." />
        <meta name="keywords" content="óticas no centro de curitiba, melhor ótica curitiba, ótica curitiba centro, óculos de grau curitiba, loja de óculos curitiba, ótica boa curitiba, óculos barato centro curitiba" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/oticas-no-centro-de-curitiba" />
        <meta property="og:title" content="Óticas no Centro de Curitiba | Ótica Gouveia" />
        <meta property="og:description" content="A melhor ótica de Curitiba. Óculos de grau, sol e lentes de contato com entrega em toda cidade. Tecnologia Visioffice 3." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/oticas-no-centro-de-curitiba" />
        <meta property="og:image" content="https://www.gouveiacuritiba.com.br/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/otica-gouveia-rayban.webp" alt="Óticas Centro Curitiba" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Óticas no Centro de Curitiba</span>
            </nav>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white mb-4 animate-pulse backdrop-blur-sm"
              style={{ backgroundColor: 'hsla(var(--primary), 0.9)' }}>
              ⭐ 4.9/5 — MAIS DE 840 AVALIAÇÕES POSITIVAS
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] text-white">
              Óticas no Centro de<br />
              <span style={{ color: 'hsl(var(--primary))' }} className="brightness-150">Curitiba — Gouveia</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-4 max-w-2xl">
              Referência em óculos de grau, sol e lentes de contato em Curitiba. Tecnologia Visioffice 3 e 40+ anos de tradição.
            </p>
            <p className="text-sm text-white/60 mb-8 max-w-2xl">
              👓 Óculos de grau: traga sua receita e venha à loja para medição.
              🕶️ Óculos de sol e lentes de contato: consulte pelo WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 text-primary-foreground"
                style={{ backgroundColor: 'hsl(var(--primary))' }}>
                🔍 PEDIR ORÇAMENTO
              </a>
              <a href="tel:+554131140663"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                📞 (41) 3114-0663
              </a>
            </div>
          </div>
        </section>

        {/* GALERIA DE FOTOS */}
        <ImageGallery neighborhoodName="Curitiba" />

        {/* DIFERENCIAIS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">Por Que a Gouveia é a Melhor Ótica de Curitiba?</h2>
            <p className="text-center text-gray-600 mb-12">40 anos de tradição e milhares de clientes satisfeitos em toda a capital</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diferenciais.map((d) => (
                <div key={d.titulo} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-3">{d.icon}</div>
                  <h3 className="text-lg font-bold text-[#001440] mb-2">{d.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEÚDO SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#001440] mb-4">Óticas no Centro e em Toda Curitiba — Gouveia Atende Você</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você está procurando <strong>óticas no centro de Curitiba</strong> ou em qualquer bairro da capital paranaense, 
              a <strong>Ótica Gouveia</strong> é a sua melhor escolha. Com mais de <strong>40 anos de experiência</strong> e 
              loja física no Pinheirinho (R. Nicola Pellanda, 1286), atendemos toda Curitiba com entrega em domicílio.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nossa grande vantagem sobre as redes de óticas do centro de Curitiba é a combinação de 
              <strong> atendimento personalizado</strong> com <strong> tecnologia de ponta</strong> como o 
              <strong> Visioffice 3 da Essilor</strong>. <strong>Para confeccionar óculos de grau, é necessário 
              comparecer presencialmente</strong> à nossa loja no Umbará com receita médica para medição precisa. 
              Após a confecção, entregamos via motoboy no seu bairro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Já para <strong>óculos de sol sem grau e lentes de contato</strong>, você pode comprar 
              <strong> diretamente pelo WhatsApp</strong> sem sair de casa! Enviamos fotos dos modelos, 
              você escolhe, paga e recebe tudo via motoboy. Compras acima de R$ 250 com entrega inclusa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trabalhamos com as <strong>marcas mais desejadas do mercado</strong>: Ray-Ban, Oakley, Arnette, 
              Vogue, Carolina Herrera, Empório Armani, Versace e muito mais. Também temos excelentes 
              opções para quem busca qualidade com preço acessível. 
              Venha conhecer a Ótica Gouveia — a melhor relação custo-benefício em óculos de toda Curitiba!
            </p>
          </div>
        </section>

        {/* BAIRROS ATENDIDOS */}
        <section className="py-12 bg-[#001440] text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black mb-3">Entregamos em Todos os Bairros de Curitiba</h2>
            <p className="text-white/70 mb-8">Centro, Batel, Água Verde, Sítio Cercado, Pinheirinho, Boqueirão, Cajuru e mais de 80 bairros</p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['Centro','Batel','Água Verde','Sítio Cercado','Pinheirinho','Boqueirão','Cajuru','CIC','Portão','Xaxim','Novo Mundo','Tatuquara','Hauer','Umbará','Capão Raso'].map(b => (
                <span key={b} className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">{b}</span>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
              💬 SOLICITAR ENTREGA NO MEU BAIRRO
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtonsGroup />
      <BackToTop />
    </>
  );
};

export default OticasCentroCuritiba;
