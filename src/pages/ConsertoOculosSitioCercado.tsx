import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
import ImageGallery from "@/components/ImageGallery";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Preciso%20de%20conserto%20de%20%C3%B3culos%20no%20S%C3%ADtio%20Cercado.%20Pode%20me%20ajudar%3F";

const ConsertoOculosSitioCercado = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado",
    "name": "Avaliação de conserto de óculos para moradores do Sítio Cercado",
    "description": "Avaliação de armações e peças para moradores do Sítio Cercado, nas lojas da Ótica Gouveia no Umbará e Pinheirinho. Possibilidade de reparo, valor e prazo sob consulta.",
    "url": "https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado",
    "telephone": "+554131140663",
    "provider": { "@type": "Organization", "name": "Ótica Gouveia", "url": "https://www.gouveiacuritiba.com.br" },
    "areaServed": "Sítio Cercado, Curitiba, PR"
  };

  const servicos = [
    { icon: "🔧", titulo: "Ajuste de Armação", desc: "Consulte a avaliação do encaixe, das hastes e das dobradiças. A possibilidade de ajuste depende do material e do estado da armação." },
    { icon: "⚙️", titulo: "Parafusos e Plaquetas", desc: "Informe qual peça soltou ou se perdeu. A reposição depende da compatibilidade e da disponibilidade para o seu modelo." },
    { icon: "🔩", titulo: "Armação Quebrada", desc: "Envie fotos da armação inteira e do ponto danificado. Confirme na avaliação se existe uma opção de reparo ou se será necessária substituição." },
    { icon: "🪟", titulo: "Lentes Danificadas", desc: "Lentes trincadas, quebradas ou riscadas precisam de avaliação. Consulte as opções de substituição e os documentos necessários antes de ir à loja." },
  ];

  return (
    <>
      <Helmet>
        <title>Conserto de Óculos para Sítio Cercado | Ótica Gouveia</title>
        <meta name="description" content="Mora no Sítio Cercado? Consulte avaliação de conserto de óculos nas lojas Gouveia no Umbará e Pinheirinho. Envie fotos e confirme valor e prazo." />
        <meta name="keywords" content="conserto de óculos sítio cercado, ajuste óculos sítio cercado, solda óculos curitiba, troca parafuso óculos, ótica perto sítio cercado, conserto armação óculos curitiba zona sul" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado" />
        <meta property="og:title" content="Conserto de Óculos para Sítio Cercado | Ótica Gouveia" />
        <meta property="og:description" content="Avaliação de conserto para moradores do Sítio Cercado, nas lojas Umbará e Pinheirinho. Valor, prazo e possibilidade de reparo sob consulta." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado" />
        <meta property="og:image" content="https://www.gouveiacuritiba.com.br/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-[72px]">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/lovable-uploads/otica-gouveia-expositor.webp" alt="Conserto Óculos Sítio Cercado" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-0 mix-blend-multiply opacity-15" style={{ backgroundColor: 'hsl(var(--primary))' }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Início</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Conserto de Óculos — Sítio Cercado</span>
            </nav>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white mb-4 animate-pulse backdrop-blur-sm"
              style={{ backgroundColor: 'hsla(var(--primary), 0.9)' }}>
              🔧 AVALIAÇÃO • LOJAS NO PINHEIRINHO E UMBARÁ
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1] text-white">
              Conserto de Óculos<br />
              <span style={{ color: 'hsl(var(--primary))' }} className="brightness-150">para Sítio Cercado — Curitiba</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              Mora no Sítio Cercado e precisa avaliar seus óculos? Nossas lojas ficam no Pinheirinho e Umbará, não no Sítio Cercado. Envie fotos e confirme a unidade de atendimento antes de sair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
                style={{ backgroundColor: 'hsl(142, 70%, 49%)' }}>
                💬 PEDIR CONSERTO VIA WHATSAPP
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

        {/* SERVIÇOS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">O que você pode consultar</h2>
            <p className="text-center text-gray-600 mb-12">Cada armação precisa de avaliação. Nem todo dano permite reparo.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicos.map((s) => (
                <div key={s.titulo} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h3 className="text-lg font-bold text-[#001440] mb-2">{s.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#001440] text-white">
          <div className="max-w-4xl mx-auto px-4 space-y-5">
            <h2 className="text-2xl font-bold">Como pedir uma avaliação antes de ir à ótica</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Envie fotos nítidas dos óculos inteiros e do detalhe danificado. Informe o modelo, se souber, e o que aconteceu.</li>
              <li>Conte se uma peça caiu ou se já houve tentativa de reparo. Guarde os componentes soltos para apresentar na avaliação.</li>
              <li>Confirme a loja, o horário e se será preciso levar os óculos. Fotos ajudam no primeiro contato, mas não substituem a inspeção.</li>
              <li>Antes de autorizar, confira a solução proposta, o valor, o prazo e as condições de retirada.</li>
            </ol>
            <p>Não force hastes ou dobradiças nem aplique cola por conta própria: isso pode dificultar a avaliação e o reparo. Nenhum resultado é garantido antes de examinar a peça.</p>
            <p>Para moradores do Sítio Cercado, confirme pelo WhatsApp o endereço e o horário de retirada antes de se deslocar. A página de contato informa retirada presencial na loja.</p>
            <Link className="underline font-bold" to="/contato">Confira as lojas e os canais de contato</Link>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-[#001440] mb-3">Precisa Consertar Seus Óculos?</h2>
            <p className="text-gray-600 mb-6">Envie as informações da peça e consulte as condições de avaliação.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-[#1ebe5a] transition-all shadow-md">
                💬 FALAR NO WHATSAPP
              </a>
              <Link to="/otica-sitio-cercado"
                className="inline-flex items-center gap-2 border-2 border-[#001440] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#001440] hover:text-white transition-all">
                👁️ VER TODOS OS SERVIÇOS
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtonsGroup />

    </>
  );
};

export default ConsertoOculosSitioCercado;
