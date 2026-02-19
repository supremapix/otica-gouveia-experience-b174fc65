import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Link } from "react-router-dom";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541991610663&text=Ol%C3%A1!%20Preciso%20de%20conserto%20de%20%C3%B3culos%20no%20S%C3%ADtio%20Cercado.%20Pode%20me%20ajudar%3F";

const ConsertoOculosSitioCercado = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado",
    "name": "Ótica Gouveia — Conserto de Óculos Sítio Cercado",
    "description": "Conserto de óculos no Sítio Cercado e região. Soldagem, ajuste de armação, troca de parafusos, plaquetas e lentes. Atendemos Sítio Cercado com entrega grátis.",
    "url": "https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado",
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
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
    ],
    "areaServed": "Sítio Cercado, Curitiba, PR"
  };

  const servicos = [
    { icon: "🔧", titulo: "Ajuste de Armação", desc: "Endireitamos armações tortas, ajustamos dobradiças e plaquetas nasais para o encaixe perfeito no seu rosto." },
    { icon: "⚙️", titulo: "Troca de Parafusos", desc: "Parafusos originais para todas as marcas: Ray-Ban, Oakley, Vogue e armações nacionais." },
    { icon: "🔩", titulo: "Soldagem a Laser", desc: "Soldagem de precisão para armações metálicas quebradas. Resultado como novo sem danificar as lentes." },
    { icon: "👃", titulo: "Troca de Plaquetas", desc: "Plaquetas antialérgicas, de silicone ou anti-derrapantes. Devolvemos o conforto e a fixação dos seus óculos." },
    { icon: "🪟", titulo: "Troca de Lentes", desc: "Substituição de lentes trincadas, riscadas ou quebradas, mantendo sua graduação original." },
    { icon: "🎨", titulo: "Polimento de Lentes", desc: "Removemos riscos superficiais de lentes de policarbonato e acetato, recuperando a clareza visual." },
  ];

  return (
    <>
      <Helmet>
        <title>Conserto de Óculos Sítio Cercado Curitiba | Ótica Gouveia</title>
        <meta name="description" content="Conserto de óculos no Sítio Cercado — Curitiba. Ajuste, solda, troca de parafusos, plaquetas e lentes. Entrega grátis no bairro para compras acima de R$ 250. Ligue: (41) 3114-0663." />
        <meta name="keywords" content="conserto de óculos sítio cercado, ajuste óculos sítio cercado, solda óculos curitiba, troca parafuso óculos, ótica perto sítio cercado, conserto armação óculos curitiba zona sul" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado" />
        <meta property="og:title" content="Conserto de Óculos Sítio Cercado | Ótica Gouveia Curitiba" />
        <meta property="og:description" content="Conserto rápido de óculos no Sítio Cercado e região. Ajuste, solda, plaquetas, parafusos. Entrega grátis acima de R$ 250." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/conserto-oculos-sitio-cercado" />
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
              <span className="text-white">Conserto de Óculos — Sítio Cercado</span>
            </nav>
            <span className="inline-block bg-[#FFD700] text-[#001440] text-xs font-bold px-4 py-1.5 rounded-full mb-4 animate-pulse">
              🔧 CONSERTO RÁPIDO • ENTREGA GRÁTIS NO SÍTIO CERCADO
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              Conserto de Óculos<br />
              <span className="text-[#FFD700]">Sítio Cercado — Curitiba</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
              Ajuste, soldagem, troca de parafusos, plaquetas e lentes. Atendemos o Sítio Cercado 
              com entrega grátis para compras acima de R$ 250,00. Loja física no Pinheirinho, a 10 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg">
                💬 PEDIR CONSERTO VIA WHATSAPP
              </a>
              <a href="tel:+554131140663"
                className="inline-flex items-center gap-2 border-2 border-[#FFD700] text-[#FFD700] font-bold text-lg px-8 py-4 rounded-full hover:bg-[#FFD700] hover:text-[#001440] transition-all">
                📞 (41) 3114-0663
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-[#001440] mb-3">Serviços de Conserto Disponíveis</h2>
            <p className="text-center text-gray-600 mb-12">Resolvemos todos os problemas com seus óculos rapidamente</p>
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

        {/* DESTAQUE ENTREGA */}
        <section className="py-12 bg-[#001440] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Entrega Grátis no Sítio Cercado</h2>
            <p className="text-white/80 text-lg mb-6">
              Não precisa sair de casa! Envie foto dos seus óculos pelo WhatsApp, faça o orçamento 
              e receba o conserto entregue direto no Sítio Cercado. Grátis para compras/serviços acima de R$ 250.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD700] text-[#001440] font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-all">
              📸 ENVIAR FOTO DOS ÓCULOS AGORA
            </a>
          </div>
        </section>

        {/* CONTEÚDO SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 prose prose-lg max-w-none">
            <h2 className="text-2xl font-black text-[#001440] mb-4">Conserto de Óculos para o Sítio Cercado — Como Funciona</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>Ótica Gouveia</strong> oferece serviço completo de conserto de óculos para moradores do <strong>Sítio Cercado em Curitiba</strong>. 
              Nossa loja física fica na <strong>Rua Nicola Pellanda, 1286 — Pinheirinho</strong>, a apenas 10 minutos do Terminal Sítio Cercado. 
              Com mais de 40 anos de experiência, somos referência em manutenção e conserto de armações nas mais diversas marcas e materiais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para moradores do Sítio Cercado que não podem se deslocar, oferecemos um serviço prático: 
              envie a foto dos seus óculos pelo WhatsApp <strong>(41) 99161-0663</strong>, receba o orçamento instantâneo, 
              e combinamos a retirada e entrega diretamente no seu endereço no bairro — sem custo adicional para serviços acima de R$ 250.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Realizamos consertos em armações de <strong>acetato, metal, titânio, nylon e policarbonato</strong>. 
              Trabalhamos com soldagem a laser para fraturas em armações metálicas, garantindo um resultado resistente e esteticamente impecável. 
              Também fazemos ajuste de altura, ângulo pantoscópico e distância interpupilar para que seus óculos fiquem perfeitos no seu rosto.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O Sítio Cercado é um dos bairros que mais atendemos na zona sul de Curitiba. 
              Além dos consertos, os moradores do bairro também podem aproveitar nossos serviços completos de <strong>óculos de grau, 
              lentes digitais com tecnologia Visioffice 3, óculos de sol e lentes de contato</strong>.
              Venha nos visitar ou fale conosco pelo WhatsApp e resolva o problema dos seus óculos hoje mesmo!
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-[#001440] mb-3">Precisa Consertar Seus Óculos?</h2>
            <p className="text-gray-600 mb-6">Entre em contato agora — orçamento rápido e sem compromisso!</p>
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
      <WhatsAppFloat />
    </>
  );
};

export default ConsertoOculosSitioCercado;
