import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Moro%20perto%20do%20Terminal%20S%C3%ADtio%20Cercado%20e%20quero%20um%20or%C3%A7amento%20de%20%C3%B3culos.";

const TerminalSitioCercado = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado",
    "name": "Ótica Gouveia — Terminal Sítio Cercado Curitiba",
    "description": "Ótica próxima ao Terminal Sítio Cercado em Curitiba. Óculos de grau, sol e lentes de contato com entrega grátis no bairro. Loja no Pinheirinho, a 10 minutos.",
    "url": "https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado",
    "telephone": "+554131140663",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Nicola Pellanda, 1286",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81880-000",
      "addressCountry": "BR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": -25.5304, "longitude": -49.2926 },
    "areaServed": "Terminal Sítio Cercado, Sítio Cercado, Curitiba, PR"
  };

  return (
    <>
      <Helmet>
        <title>Ótica Terminal Sítio Cercado Curitiba | Óculos Perto do Terminal | Gouveia</title>
        <meta name="description" content="Ótica perto do Terminal Sítio Cercado em Curitiba. Óculos de grau, sol, lentes de contato e consertos. Entrega grátis no bairro. Loja no Pinheirinho — 10 min do terminal." />
        <meta name="keywords" content="ótica terminal sítio cercado, óculos perto do terminal sítio cercado, ótica zona sul curitiba, óculos de grau sítio cercado, loja de óculos sítio cercado curitiba" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado" />
        <meta property="og:title" content="Ótica perto do Terminal Sítio Cercado | Ótica Gouveia" />
        <meta property="og:description" content="Sua ótica de referência perto do Terminal Sítio Cercado em Curitiba. Entrega grátis no bairro." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado" />
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
              <span className="text-white">Terminal Sítio Cercado</span>
            </nav>
            <span className="inline-block bg-[#FFD700] text-[#001440] text-xs font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">
              📍 10 MINUTOS DO TERMINAL SÍTIO CERCADO
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Ótica Gouveia Próxima ao<br />
              <span className="text-[#FFD700]">Terminal Sítio Cercado</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              A melhor ótica da zona sul de Curitiba fica a apenas 10 minutos do Terminal Sítio Cercado. 
              Ou receba em casa — entrega grátis para compras acima de R$ 250,00!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#1ebe5a] transition-all shadow-lg">
                💬 PEDIR ORÇAMENTO AGORA
              </a>
              <a href="https://maps.app.goo.gl/GhqcM45P9vZA8jMN9" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#FFD700] hover:text-[#001440] transition-all">
                🗺️ VER NO MAPA
              </a>
            </div>
          </div>
        </section>

        {/* COMO CHEGAR */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">Como Chegar ao Terminal Sítio Cercado</h2>
            <p className="text-center text-gray-600 mb-12">Duas opções fáceis para acessar nossa loja ou receber seus óculos em casa</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <div className="text-4xl mb-4">🚌</div>
                <h3 className="text-xl font-bold text-[#001440] mb-3">De Ônibus pelo Terminal</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="bg-[#001440] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span> Saia do Terminal Sítio Cercado</li>
                  <li className="flex gap-3"><span className="bg-[#001440] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span> Pegue linha em direção ao Pinheirinho</li>
                  <li className="flex gap-3"><span className="bg-[#001440] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span> Desça próximo à R. Nicola Pellanda</li>
                  <li className="flex gap-3"><span className="bg-[#001440] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span> Nossa loja está no número 1286</li>
                </ol>
                <p className="text-sm text-gray-500 mt-4">⏱️ Tempo estimado: 10 a 15 minutos</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-[#001440] mb-3">Receba em Casa — Sem Sair!</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="bg-[#25D366] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span> Envie sua receita pelo WhatsApp</li>
                  <li className="flex gap-3"><span className="bg-[#25D366] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span> Escolha armação e lentes</li>
                  <li className="flex gap-3"><span className="bg-[#25D366] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span> Pague com segurança</li>
                  <li className="flex gap-3"><span className="bg-[#25D366] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span> Receba no Sítio Cercado gratuitamente!</li>
                </ol>
                <p className="text-sm text-gray-500 mt-4">🎁 Frete grátis para compras acima de R$ 250</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEÚDO SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-[#001440] mb-4">Sua Ótica de Referência Próxima ao Terminal Sítio Cercado</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Terminal Sítio Cercado</strong> é um dos maiores e mais movimentados terminais de transporte público de Curitiba, 
              conectando moradores do bairro a toda a capital paranaense. A <strong>Ótica Gouveia</strong>, localizada no 
              <strong> Pinheirinho (R. Nicola Pellanda, 1286)</strong>, fica a apenas uma parada de ônibus do terminal — 
              ou aproximadamente 10 minutos de carro pela Rua Izaac Ferreira da Cruz.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para moradores que utilizam o Terminal Sítio Cercado como ponto de partida para o trabalho ou compras, 
              nossa ótica é a opção mais conveniente da zona sul. Oferecemos <strong>óculos de grau completos</strong>, 
              <strong>lentes digitais com tecnologia Visioffice 3 Essilor</strong>, <strong>óculos de sol das melhores marcas</strong>, 
              <strong>lentes de contato</strong> e <strong>serviços de conserto</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para sua comodidade, também oferecemos <strong>entrega gratuita no Sítio Cercado e bairros vizinhos</strong> para compras 
              acima de R$ 250,00. Basta enviar sua receita pelo WhatsApp <strong>(41) 99161-0663</strong>, escolher seus óculos, 
              e receber em casa sem custo de entrega.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Atendemos também moradores dos bairros próximos ao Terminal Sítio Cercado: 
              <strong> Ganchinho, Umbará, Tatuquara, Campo de Santana e Pinheirinho</strong>. 
              Nossa equipe tem mais de 40 anos de experiência no mercado óptico curitibano e está pronta para 
              oferecer o melhor atendimento da região sul de Curitiba.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#001440] text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-black mb-3">Peça Seu Orçamento Agora!</h2>
            <p className="text-white/80 mb-6">Atendemos o Sítio Cercado com a qualidade que você merece.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
              💬 FALAR COM ESPECIALISTA
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default TerminalSitioCercado;
