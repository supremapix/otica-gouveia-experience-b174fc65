import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ImageGallery from "@/components/ImageGallery";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Quero%20solicitar%20entrega%20de%20%C3%B3culos%20no%20S%C3%ADtio%20Cercado%20de%20Curitiba.";

const EntregasSitioCercado = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.gouveiacuritiba.com.br/entregas-sitio-cercado-curitiba",
    "name": "Ótica Gouveia — Entregas Grátis no Sítio Cercado Curitiba",
    "description": "Entrega grátis de óculos no Sítio Cercado, Curitiba (PR). Compras acima de R$ 250 entregues na sua casa. Óculos de grau, sol e lentes de contato com tecnologia Visioffice 3.",
    "url": "https://www.gouveiacuritiba.com.br/entregas-sitio-cercado-curitiba",
    "telephone": "+554131140663",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Nicola Pellanda, 1286",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81880-000",
      "addressCountry": "BR"
    },
    "areaServed": "Sítio Cercado, Curitiba, PR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Entrega Grátis de Óculos",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Entrega Grátis de Óculos no Sítio Cercado" },
        "price": "0",
        "priceCurrency": "BRL",
        "eligibleTransactionVolume": { "@type": "PriceSpecification", "minPrice": "250", "priceCurrency": "BRL" }
      }]
    }
  };

  const passos = [
    { num: "1", icon: "📱", titulo: "Envie sua Receita", desc: "Tire uma foto da sua receita de óculos e envie pelo WhatsApp. Nossa equipe analisa em minutos." },
    { num: "2", icon: "👓", titulo: "Escolha seus Óculos", desc: "Veja opções de armações e lentes que combinam com você. Enviamos fotos e vídeos para facilitar a escolha." },
    { num: "3", icon: "💳", titulo: "Pague com Segurança", desc: "PIX, cartão em até 10x ou transferência. Só liberamos após confirmação do pagamento." },
    { num: "4", icon: "🚚", titulo: "Receba em Casa", desc: "Entregamos no Sítio Cercado com nosso motoboy parceiro. Grátis para compras acima de R$ 250!" },
  ];

  return (
    <>
      <Helmet>
        <title>Entrega de Óculos no Sítio Cercado Curitiba | Ótica Gouveia</title>
        <meta name="description" content="Ótica Gouveia: loja no Umbará com entrega via motoboy no Sítio Cercado, Curitiba (PR). Compras acima de R$ 250 com entrega inclusa. Óculos de grau, sol e lentes de contato." />
        <meta name="keywords" content="entrega óculos sítio cercado, ótica entrega em casa sítio cercado, óculos a domicílio sítio cercado curitiba, ótica delivery curitiba, motoboy óculos curitiba" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/entregas-sitio-cercado-curitiba" />
        <meta property="og:title" content="Delivery de Óculos no Sítio Cercado | Ótica Gouveia — Loja no Umbará" />
        <meta property="og:description" content="Loja no Umbará com entrega via motoboy no Sítio Cercado. Compras acima de R$ 250 com entrega inclusa. Peça pelo WhatsApp!" />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/entregas-sitio-cercado-curitiba" />
        <meta property="og:image" content="https://www.gouveiacuritiba.com.br/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="bg-gradient-to-br from-[#001440] to-[#003399] text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/otica-sitio-cercado" className="hover:text-white">Sítio Cercado</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Entregas no Sítio Cercado</span>
            </nav>
            <span className="inline-block bg-[#25D366] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">
              🏍️ LOJA NO UMBARÁ — MOTOBOY ENTREGA NO SÍTIO CERCADO
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Ótica Gouveia — Delivery Óptico<br />
              <span className="text-[#FFD700]">no Sítio Cercado · Curitiba (PR)</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              Nossa loja fica no Umbará. Compre pelo WhatsApp e receba seus óculos de grau, sol e lentes de contato 
              via motoboy no Sítio Cercado. Compras acima de R$ 250 com entrega inclusa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#1ebe5a] transition-all shadow-lg">
                🏍️ PEDIR ENTREGA VIA MOTOBOY
              </a>
              <a href="tel:+554131140663"
                className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#FFD700] hover:text-[#001440] transition-all">
                📞 (41) 3114-0663
              </a>
            </div>
          </div>
        </section>

        {/* GALERIA DE FOTOS */}
        <ImageGallery neighborhoodName="Sítio Cercado" />

        {/* DESTAQUE DELIVERY */}
        <section className="py-10 bg-[#FFD700]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-[#001440] font-black text-xl md:text-2xl">
              🏍️ DELIVERY ÓPTICO para o Sítio Cercado — compras acima de <span className="underline">R$ 250</span> com entrega inclusa
            </p>
            <p className="text-[#001440]/80 mt-2">Loja no Umbará • Entregamos também em Ganchinho, Tatuquara e Campo de Santana</p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">Como Funciona a Entrega no Sítio Cercado</h2>
            <p className="text-center text-gray-600 mb-12">Simples e seguro — após o pedido, informamos a data de entrega</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {passos.map((p) => (
                <div key={p.num} className="text-center">
                  <div className="w-16 h-16 bg-[#001440] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {p.num}
                  </div>
                  <div className="text-3xl mb-2">{p.icon}</div>
                  <h3 className="font-bold text-[#001440] mb-2">{p.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTEÚDO SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#001440] mb-4">Entrega de Óculos no Sítio Cercado — A Ótica que Vai até Você</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Ótica Gouveia</strong> é pioneira em <strong>entrega de óculos no Sítio Cercado, Curitiba (PR)</strong>. 
              Sabemos que o dia a dia corrido dos moradores do bairro nem sempre permite uma visita à loja, 
              por isso criamos um serviço de <strong>entrega domiciliar de óculos</strong> prático e acessível.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              O processo é 100% seguro: você envia a receita pelo WhatsApp <strong>(41) 99161-0663</strong>, 
               nossa equipe faz uma curadoria de armações dentro do seu perfil e orçamento, 
               você aprova pelo WhatsApp, realiza o pagamento (PIX, cartão ou transferência) 
               e após a fabricação, informamos a data exata da entrega dos seus óculos no Sítio Cercado. O prazo de fabricação pode variar conforme o tipo de lente e tratamento escolhido.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para garantir a qualidade das lentes entregues, utilizamos o <strong>Visioffice 3 da Essilor</strong> — 
              equipamento de medição de alta precisão — na fabricação de todos os óculos. 
              Isso garante que mesmo sem uma visita presencial, suas lentes sejam fabricadas com os parâmetros corretos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Além do Sítio Cercado, também fazemos entregas nos bairros vizinhos: 
              <strong> Ganchinho, Umbará, Tatuquara, Campo de Santana e Pinheirinho</strong>. 
              Para compras acima de <strong>R$ 250,00</strong>, a entrega via motoboy já está inclusa. 
              Para pedidos abaixo deste valor, consulte nossa taxa de entrega pelo WhatsApp.
            </p>
          </div>
        </section>

        {/* GARANTIAS */}
        <section className="py-12 bg-[#001440] text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black mb-8">Nossas Garantias na Entrega</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: "✅", titulo: "Garantia de Adaptação", desc: "Não se adaptou? Refazemos as lentes sem custo adicional." },
                { icon: "📦", titulo: "Entrega Segura", desc: "Óculos embalados com proteção para chegarem perfeitos." },
                { icon: "🔄", titulo: "Troca Facilitada", desc: "Problema na entrega? Buscamos e trocamos sem burocracia." },
              ].map(g => (
                <div key={g.titulo} className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-3">{g.icon}</div>
                  <h3 className="font-bold mb-2">{g.titulo}</h3>
                  <p className="text-white/70 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
                🏍️ SOLICITAR ENTREGA VIA MOTOBOY
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default EntregasSitioCercado;
