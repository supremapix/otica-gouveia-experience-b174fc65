import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
import BackToTop from "@/components/BackToTop";
import ImageGallery from "@/components/ImageGallery";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Quero%20ver%20op%C3%A7%C3%B5es%20de%20%C3%B3culos%20com%20bom%20pre%C3%A7o%20na%20%C3%93tica%20Gouveia.";

const OticaBarataCuritiba = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.gouveiacuritiba.com.br/otica-barata-curitiba",
    "name": "Ótica Barata em Curitiba | Ótica Gouveia",
    "description": "Ótica com preços acessíveis em Curitiba. Óculos completos a partir de R$ 199,90. Parcelamos em 10x sem juros. Entrega grátis em toda Curitiba para compras acima de R$ 250.",
    "url": "https://www.gouveiacuritiba.com.br/otica-barata-curitiba",
    "telephone": "+554131140663",
    "priceRange": "R$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Nicola Pellanda, 1286",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81880-000",
      "addressCountry": "BR"
    },
    "areaServed": "Curitiba, PR"
  };

  const ofertas = [
    { categoria: "Óculos Completos Monofocal", preco: "A partir de R$ 199,90", descricao: "Armação + lentes monofocais com anti-reflexo. Necessário trazer receita e vir à loja para medição presencial com Visioffice 3." },
    { categoria: "Óculos Completos Multifocal", preco: "A partir de R$ 499,90", descricao: "Armação + lentes progressivas digitais. Necessário comparecer presencialmente para medição com Visioffice 3." },
    { categoria: "Óculos de Sol com Grau", preco: "A partir de R$ 299,90", descricao: "Armação de sol + lentes graduadas. Necessário trazer receita e fazer medição presencial na loja." },
    { categoria: "Lentes de Contato", preco: "A partir de R$ 89,90/cx", descricao: "Peça pelo WhatsApp sem precisar vir à loja! Lentes descartáveis mensais. Entrega via motoboy." },
  ];

  return (
    <>
      <Helmet>
        <title>Ótica Barata em Curitiba | Óculos Baratos com Qualidade | Gouveia</title>
        <meta name="description" content="Ótica barata em Curitiba com qualidade garantida. Óculos completos a partir de R$ 199,90. Parcelamos em 10x sem juros. Ray-Ban, Oakley e muito mais. Entrega grátis acima de R$ 250." />
        <meta name="keywords" content="ótica barata curitiba, óculos barato curitiba, óculos de grau barato curitiba, onde comprar óculos barato curitiba, ótica acessível curitiba, óculos bom e barato curitiba, promoção óculos curitiba" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/otica-barata-curitiba" />
        <meta property="og:title" content="Ótica Barata em Curitiba | Óculos a partir de R$ 199,90 | Gouveia" />
        <meta property="og:description" content="Óculos de qualidade com os melhores preços de Curitiba. Parcelamos em 10x sem juros. Entrega grátis." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/otica-barata-curitiba" />
        <meta property="og:image" content="https://www.gouveiacuritiba.com.br/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/otica-gouveia-vitrine.webp" alt="Ótica Barata Curitiba" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Ótica Barata em Curitiba</span>
            </nav>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white mb-4 animate-pulse backdrop-blur-sm"
              style={{ backgroundColor: 'hsla(var(--primary), 0.9)' }}>
              💰 ÓCULOS COMPLETOS A PARTIR DE R$ 199,90
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] text-white">
              Ótica Barata em Curitiba<br />
              <span style={{ color: 'hsl(var(--primary))' }} className="brightness-150">com Qualidade Garantida</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-4 max-w-2xl">
              Preço acessível com qualidade superior. Lentes digitais, tecnologia Visioffice 3 e marcas reconhecidas.
            </p>
            <p className="text-sm text-white/60 mb-8 max-w-2xl">
              👓 Óculos de grau: traga sua receita e venha à loja para medição presencial.
              🕶️ Óculos de sol e lentes de contato: consulte pelo WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 text-white"
                style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}>
                💬 VER PREÇOS AGORA
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

        {/* TABELA DE PREÇOS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">Nossos Preços — Transparência Total</h2>
            <p className="text-center text-gray-600 mb-12">Sem surpresas. Preço justo e qualidade garantida em tudo que oferecemos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ofertas.map((o) => (
                <div key={o.categoria} className="bg-white border-2 border-[#FFD700] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#001440]">{o.categoria}</h3>
                    <span className="text-[#001440] font-black text-sm bg-[#FFD700] px-3 py-1 rounded-full whitespace-nowrap ml-2">{o.preco}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{o.descricao}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-[#001440] underline hover:text-blue-700 transition-colors">
                    Consultar disponibilidade →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">*Preços sujeitos à disponibilidade. Consulte condições especiais para aposentados e estudantes.</p>
          </div>
        </section>

        {/* FORMAS DE PAGAMENTO */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-black text-center text-[#001440] mb-8">Formas de Pagamento Flexíveis</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-4xl mb-3">💳</div>
                <h3 className="font-bold text-[#001440] mb-2">Cartão em 10x</h3>
                <p className="text-gray-600 text-sm">Parcelamos em até 10x sem juros nos principais cartões de crédito.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#FFD700]">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-[#001440] mb-2">PIX com Desconto</h3>
                <p className="text-gray-600 text-sm">Pague no PIX e ganhe desconto especial. Consulte o percentual com nossa equipe.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="text-4xl mb-3">💵</div>
                <h3 className="font-bold text-[#001440] mb-2">Dinheiro à Vista</h3>
                <p className="text-gray-600 text-sm">Pagamento em dinheiro com condições diferenciadas. Pergunte sobre convênios.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEÚDO SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#001440] mb-4">Ótica Barata em Curitiba — Qualidade que Cabe no Bolso</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Procurar uma <strong>ótica barata em Curitiba</strong> não significa abrir mão de qualidade. 
              A <strong>Ótica Gouveia</strong> oferece os <strong>melhores preços de óculos em Curitiba</strong> combinados 
              com tecnologia de ponta e atendimento especializado. Com mais de 40 anos no mercado, 
              conseguimos negociar diretamente com laboratórios e fornecedores para repassar a economia para você.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nossos <strong>óculos completos de grau</strong> começam em <strong>R$ 199,90</strong> — 
              armação + lentes monofocais com tratamento anti-reflexo. <strong>Para confeccionar óculos de grau, 
              é necessário trazer sua receita médica e comparecer presencialmente à loja</strong> para 
              que possamos realizar a medição precisa com o <strong>Visioffice 3 da Essilor</strong>. 
              Essa etapa garante que as lentes fiquem perfeitamente alinhadas aos seus olhos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Já para <strong>óculos de sol sem grau</strong> e <strong>lentes de contato</strong>, 
              você pode pedir pelo WhatsApp sem precisar vir à loja! Enviamos fotos dos modelos 
              disponíveis e entregamos via motoboy no conforto da sua casa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para quem busca <strong>marcas premium com preço justo</strong>, temos Ray-Ban, Oakley e outras 
              marcas reconhecidas com condições de pagamento facilitadas. Parcelamos em até 
              <strong> 10x sem juros</strong> no cartão de crédito e oferecemos <strong>desconto no PIX</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nossa loja fica na <strong>Rua Nicola Pellanda, 1286 — Umbará, Curitiba</strong>. 
              Após a compra na loja, entregamos via motoboy em toda Curitiba — compras acima de R$ 250 
              com entrega inclusa. <strong>Óculos de sol e lentes de contato</strong> podem ser pedidos 
              diretamente pelo WhatsApp e recebidos em casa sem necessidade de visita presencial.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#001440] text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-black mb-3">Peça Seu Orçamento Grátis!</h2>
            <p className="text-white/80 mb-6">Sem compromisso. Nossa equipe encontra a melhor opção para seu bolso.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
              💬 QUERO PREÇOS ACESSÍVEIS
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

export default OticaBarataCuritiba;
