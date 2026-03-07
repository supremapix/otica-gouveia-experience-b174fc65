import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
import BackToTop from "@/components/BackToTop";
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
    { num: "1", icon: "📱", titulo: "Envie sua Receita", desc: "Para óculos de grau, envie a receita do oftalmologista pelo WhatsApp. Para óculos de sol e lentes de contato, basta nos contatar!" },
    { num: "2", icon: "👓", titulo: "Escolha seus Óculos", desc: "Óculos de sol e lentes de contato: escolha online pelo WhatsApp. Óculos de grau: venha à loja no Umbará para escolher a armação." },
    { num: "3", icon: "📐", titulo: "Medição Presencial (Grau)", desc: "Para lentes de grau, compareça à loja para medição com Visioffice 3. Óculos de sol e lentes de contato não precisam dessa etapa." },
    { num: "4", icon: "🚚", titulo: "Receba em Casa", desc: "Entregamos no Sítio Cercado via motoboy! Compras acima de R$ 250 com entrega inclusa." },
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/otica-gouveia-armacoes.webp" alt="Entregas Sítio Cercado" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/otica-sitio-cercado" className="hover:text-white">Sítio Cercado</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Atendimento no Sítio Cercado</span>
            </nav>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white mb-4 animate-pulse backdrop-blur-sm"
              style={{ backgroundColor: 'hsla(var(--primary), 0.9)' }}>
              📍 LOJAS NO PINHEIRINHO E UMBARÁ — ATENDEMOS O SÍTIO CERCADO
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] text-white">
              Ótica Gouveia —<br />
              <span style={{ color: 'hsl(var(--primary))' }} className="brightness-150">Atendimento para o Sítio Cercado</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              Nossas lojas ficam no Pinheirinho e Umbará. Para óculos de grau, traga sua receita e venha à loja para medição presencial.
              Óculos de sol e lentes de contato: consulte pelo WhatsApp!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
                style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}>
                💬 FALAR NO WHATSAPP
              </a>
              <a href="tel:+554131140663"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
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
              O processo é 100% seguro: você envia a receita pelo WhatsApp <strong>(41) 99161-0663</strong>. 
              <strong>Para óculos de grau, é necessário comparecer presencialmente à loja no Umbará</strong> para 
              medição com Visioffice 3 — garantindo que suas lentes fiquem perfeitas. Após a confecção, entregamos via motoboy no Sítio Cercado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Já para <strong>óculos de sol sem grau e lentes de contato</strong>, todo o processo pode ser feito 
              <strong> pelo WhatsApp sem sair de casa</strong>! Escolha o modelo, pague por PIX ou cartão, e receba via motoboy.
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
      <FloatingButtonsGroup />
      <BackToTop />
    </>
  );
};

export default EntregasSitioCercado;
