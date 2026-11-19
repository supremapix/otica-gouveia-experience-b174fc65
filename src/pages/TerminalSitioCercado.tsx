import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtonsGroup from "@/components/FloatingButtonsGroup";
import ImageGallery from "@/components/ImageGallery";
import PageHero from "@/components/PageHero";
import { MapPin } from "lucide-react";
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
        <meta name="description" content="Ótica perto do Terminal Sítio Cercado em Curitiba. Óculos de grau, sol, lentes de contato e consertos. Veja como planejar sua visita à loja no Umbará e o que levar para escolher seus óculos com calma." />
        <meta name="keywords" content="ótica terminal sítio cercado, óculos perto do terminal sítio cercado, ótica zona sul curitiba, óculos de grau sítio cercado, loja de óculos sítio cercado curitiba" />
        <link rel="canonical" href="https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado" />
        <meta property="og:title" content="Ótica perto do Terminal Sítio Cercado | Ótica Gouveia" />
        <meta property="og:description" content="Planeje sua visita à Ótica Gouveia no Umbará saindo do Terminal Sítio Cercado." />
        <meta property="og:url" content="https://www.gouveiacuritiba.com.br/otica-terminal-sitio-cercado" />
        <meta property="og:image" content="https://www.gouveiacuritiba.com.br/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main id="main-content" className="gv-terminal">
        <PageHero BadgeIcon={MapPin} badgeText="SÍTIO CERCADO · CURITIBA" title="Ótica Gouveia perto do" highlight="Terminal Sítio Cercado" description="Saia do terminal com o endereço certo: nossa loja fica na Rua Nicola Pellanda, 1286, no Umbará. Se preferir, fale por telefone antes de sair.">
          <a className="gv-button" href="tel:+554131140663">Ligar: (41) 3114-0663</a>
          <a className="gv-text-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Pedir orçamento pelo WhatsApp</a>
        </PageHero>
        <section className="visit-guide" aria-labelledby="terminal-visit">
          <div className="visit-heading"><h2 id="terminal-visit">Sua visita, do Terminal até a loja</h2>
          <p>A página é um guia para quem sai do Terminal Sítio Cercado. A loja não fica dentro do terminal.</p></div>
          <div className="visit-cards">
            <article><h3>1. Confira o trajeto</h3><p>Consulte as opções de ônibus ou carro para chegar à Rua Nicola Pellanda, 1286. O tempo varia conforme o horário e o transporte. Se precisar caminhar menos, confira a distância a pé na rota.</p><a href="https://www.google.com/maps/dir/?api=1&origin=Terminal+S%C3%ADtio+Cercado%2C+Curitiba&destination=Rua+Nicola+Pellanda%2C+1286%2C+Curitiba" target="_blank" rel="noopener noreferrer">Abrir trajeto no mapa</a></article>
            <article><h3>2. Separe o que levar</h3><p>Para escolher óculos de grau, leve sua receita e o par que já usa. Conte para a equipe se usa os óculos para ler, ver televisão ou sair de casa, e experimente a armação com calma.</p><Link to="/produtos">Ver armações do catálogo</Link></article>
            <article><h3>3. Tire dúvidas antes de sair</h3><p>Ligue para confirmar horários, se a armação desejada está disponível e quais ajustes podem ser avaliados na loja. Se quiser, venha acompanhado de alguém de sua confiança.</p><a href="tel:+554131140663">Ligar para a loja</a></article>
          </div>
          <div className="visit-region"><h3>Prefere receber em casa?</h3><p>Após a confecção, consulte a entrega por motoboy no Sítio Cercado. Compras acima de R$ 250 têm entrega inclusa. Confirme o prazo e as condições com a equipe antes de fechar o pedido.</p><a className="gv-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consultar entrega no WhatsApp</a></div>
        </section>
        <ImageGallery neighborhoodName="Terminal Sítio Cercado" />
      </main>

      <Footer />
      <FloatingButtonsGroup />
      
    </>
  );
};

export default TerminalSitioCercado;
