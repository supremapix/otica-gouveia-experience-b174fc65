
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LojaOculosPinheirinho from "./pages/LojaOculosPinheirinho";
import LojaOculosPinheirinho15565 from "./pages/LojaOculosPinheirinho15565";
import OticaSitioCercado from "./pages/OticaSitioCercado";
import OticaUmbara from "./pages/OticaUmbara";
import OticaCIC from "./pages/OticaCIC";
import OticaCajuru from "./pages/OticaCajuru";
import OticaBoqueirao from "./pages/OticaBoqueirao";
import OticaHauer from "./pages/OticaHauer";
import OticaCentro from "./pages/OticaCentro";
import OticaBatel from "./pages/OticaBatel";
import OticaAguaVerde from "./pages/OticaAguaVerde";
import OticaBigorrilho from "./pages/OticaBigorrilho";
import OticaPortao from "./pages/OticaPortao";
import OticaXaxim from "./pages/OticaXaxim";
import OticaSantaFelicidade from "./pages/OticaSantaFelicidade";
import OticaBacacheri from "./pages/OticaBacacheri";
import OticaAraucaria from "./pages/OticaAraucaria";
import OticaColombo from "./pages/OticaColombo";
import OticaPinhais from "./pages/OticaPinhais";
import OticaSaoJoseDosPinhais from "./pages/OticaSaoJoseDosPinhais";
import OticaFazendaRioGrande from "./pages/OticaFazendaRioGrande";
import OticaReboucas from "./pages/OticaReboucas";
import OticaNeoVille from "./pages/OticaNeoVille";
import OticaVilaSandra from "./pages/OticaVilaSandra";
import OticaVilaFormosa from "./pages/OticaVilaFormosa";
import OticaPiraquara from "./pages/OticaPiraquara";
import OticaCampoLargo from "./pages/OticaCampoLargo";
import OticaAlmiranteTamandare from "./pages/OticaAlmiranteTamandare";
import OticaQuatroBarras from "./pages/OticaQuatroBarras";
import OticaMandirituba from "./pages/OticaMandirituba";
import OticaCampinaGrandeDoSul from "./pages/OticaCampinaGrandeDoSul";
import OticaCristoRei from "./pages/OticaCristoRei";
import OticaEcoville from "./pages/OticaEcoville";
import OticaJardimBotanico from "./pages/OticaJardimBotanico";
import OticaJuveve from "./pages/OticaJuveve";
import OticaCapaoRaso from "./pages/OticaCapaoRaso";
import OticaJardimDasAmericas from "./pages/OticaJardimDasAmericas";
import OticaNovoMundo from "./pages/OticaNovoMundo";
import OticaTaruma from "./pages/OticaTaruma";
import OticaTatuquara from "./pages/OticaTatuquara";
import OticaCampoComprido from "./pages/OticaCampoComprido";
import OticaHugoLange from "./pages/OticaHugoLange";
import OticaTingui from "./pages/OticaTingui";
import OticaMerces from "./pages/OticaMerces";
import OticaCabral from "./pages/OticaCabral";
import OticaAltoDaXV from "./pages/OticaAltoDaXV";
import OticaGuabirotuba from "./pages/OticaGuabirotuba";
import OticaParolin from "./pages/OticaParolin";
import OticaAdrianopolis from "./pages/OticaAdrianopolis";
import OticaBalsaNova from "./pages/OticaBalsaNova";
import OticaContenda from "./pages/OticaContenda";
import OticaLapa from "./pages/OticaLapa";
import OticaAbranches from "./pages/OticaAbranches";
import OticaUberaba from "./pages/OticaUberaba";
import OticaVilaIzabel from "./pages/OticaVilaIzabel";
import OticaAltoDaGloria from "./pages/OticaAltoDaGloria";
import OticaPilarzinho from "./pages/OticaPilarzinho";
import OticaSantaCandida from "./pages/OticaSantaCandida";
import OticaBocaiuvaDoSul from "./pages/OticaBocaiuvaDoSul";
import OticaItaperucu from "./pages/OticaItaperucu";
import OticaRioBrancoDoSul from "./pages/OticaRioBrancoDoSul";
import OticaCampoMagro from "./pages/OticaCampoMagro";
import OticaTijucasDoSul from "./pages/OticaTijucasDoSul";
import OticaAtuba from "./pages/OticaAtuba";
import OticaBairroAlto from "./pages/OticaBairroAlto";
import OticaBoaVista from "./pages/OticaBoaVista";
import OticaBomRetiro from "./pages/OticaBomRetiro";
import OticaOrleans from "./pages/OticaOrleans";
import OticaAgudosDoSul from "./pages/OticaAgudosDoSul";
import OticaCampoDoTenente from "./pages/OticaCampoDoTenente";
import OticaCerroAzul from "./pages/OticaCerroAzul";
import OticaDoutorUlysses from "./pages/OticaDoutorUlysses";
import OticaPien from "./pages/OticaPien";
import OticaQuitandinha from "./pages/OticaQuitandinha";
import OticaRioNegro from "./pages/OticaRioNegro";
import OticaTunasDoParana from "./pages/OticaTunasDoParana";
import OticaLindoia from "./pages/OticaLindoia";
import OticaSaoJoao from "./pages/OticaSaoJoao";
import OticaFanny from "./pages/OticaFanny";
import OticaSaoFrancisco from "./pages/OticaSaoFrancisco";
import OticaBarigui from "./pages/OticaBarigui";
import OticaCentroCivico from "./pages/OticaCentroCivico";
import OticaCapaoDaImbuia from "./pages/OticaCapaoDaImbuia";
import OticaSantaQuiteria from "./pages/OticaSantaQuiteria";
import OticaMossungue from "./pages/OticaMossungue";
import OticaSeminario from "./pages/OticaSeminario";
import OticaBarreirinha from "./pages/OticaBarreirinha";
import OticaSantoInacio from "./pages/OticaSantoInacio";
import OticaSaoLourenco from "./pages/OticaSaoLourenco";
import OticaRiviera from "./pages/OticaRiviera";
import OticaCampoDeSantana from "./pages/OticaCampoDeSantana";
import OticaAugusta from "./pages/OticaAugusta";
import OticaCascatinha from "./pages/OticaCascatinha";
import OticaVilaGuaira from "./pages/OticaVilaGuaira";
import OticaGanchinho from "./pages/OticaGanchinho";
import OticaFazendinha from "./pages/OticaFazendinha";
import OticaPinheirinho from "./pages/OticaPinheirinho";
import ConsertoOculosSitioCercado from "./pages/ConsertoOculosSitioCercado";
import TerminalSitioCercado from "./pages/TerminalSitioCercado";
import OticasCentroCuritiba from "./pages/OticasCentroCuritiba";
import OticaBarataCuritiba from "./pages/OticaBarataCuritiba";
import EntregasSitioCercado from "./pages/EntregasSitioCercado";
import { getRedirectPath } from "./utils/redirects";

const queryClient = new QueryClient();

// Component to handle scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Redirect handler component
const RedirectHandler = () => {
  const location = useLocation();
  const redirectPath = getRedirectPath(location.pathname);
  
  if (redirectPath) {
    // If we have a redirect, go to the new path but preserve query parameters
    return <Navigate to={`${redirectPath}${location.search}`} replace />;
  }
  
  // If no redirect is found, show the 404 page
  return <NotFound />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/loja-de-oculos-no-pinheirinho" element={<LojaOculosPinheirinho />} />
            <Route path="/loja-de-oculos-no-pinheirinho/15565" element={<LojaOculosPinheirinho15565 />} />
            <Route path="/loja-de-oculos-no-pinheirinho/15565/" element={<LojaOculosPinheirinho15565 />} />
            <Route path="/otica-pinheirinho" element={<LojaOculosPinheirinho />} />
            <Route path="/otica-sitio-cercado" element={<OticaSitioCercado />} />
            <Route path="/otica-umbara" element={<OticaUmbara />} />
            <Route path="/otica-cic" element={<OticaCIC />} />
            <Route path="/otica-cajuru" element={<OticaCajuru />} />
            <Route path="/otica-boqueirao" element={<OticaBoqueirao />} />
            <Route path="/otica-hauer" element={<OticaHauer />} />
            <Route path="/otica-centro" element={<OticaCentro />} />
            <Route path="/otica-batel" element={<OticaBatel />} />
            <Route path="/otica-agua-verde" element={<OticaAguaVerde />} />
            <Route path="/otica-bigorrilho" element={<OticaBigorrilho />} />
            <Route path="/otica-portao" element={<OticaPortao />} />
            <Route path="/otica-xaxim" element={<OticaXaxim />} />
            <Route path="/otica-santa-felicidade" element={<OticaSantaFelicidade />} />
            <Route path="/otica-bacacheri" element={<OticaBacacheri />} />
            <Route path="/otica-araucaria" element={<OticaAraucaria />} />
            <Route path="/otica-colombo" element={<OticaColombo />} />
            <Route path="/otica-pinhais" element={<OticaPinhais />} />
            <Route path="/otica-sao-jose-dos-pinhais" element={<OticaSaoJoseDosPinhais />} />
            <Route path="/otica-fazenda-rio-grande" element={<OticaFazendaRioGrande />} />
            <Route path="/otica-reboucas" element={<OticaReboucas />} />
            <Route path="/otica-neo-ville" element={<OticaNeoVille />} />
            <Route path="/otica-vila-sandra" element={<OticaVilaSandra />} />
            <Route path="/otica-vila-formosa" element={<OticaVilaFormosa />} />
            <Route path="/otica-piraquara" element={<OticaPiraquara />} />
            <Route path="/otica-campo-largo" element={<OticaCampoLargo />} />
            <Route path="/otica-almirante-tamandare" element={<OticaAlmiranteTamandare />} />
            <Route path="/otica-quatro-barras" element={<OticaQuatroBarras />} />
            <Route path="/otica-mandirituba" element={<OticaMandirituba />} />
            <Route path="/otica-campina-grande-do-sul" element={<OticaCampinaGrandeDoSul />} />
            <Route path="/otica-cristo-rei" element={<OticaCristoRei />} />
            <Route path="/otica-ecoville" element={<OticaEcoville />} />
            <Route path="/otica-jardim-botanico" element={<OticaJardimBotanico />} />
            <Route path="/otica-juveve" element={<OticaJuveve />} />
            <Route path="/otica-capao-raso" element={<OticaCapaoRaso />} />
            <Route path="/otica-jardim-das-americas" element={<OticaJardimDasAmericas />} />
            <Route path="/otica-novo-mundo" element={<OticaNovoMundo />} />
            <Route path="/otica-taruma" element={<OticaTaruma />} />
            <Route path="/otica-tatuquara" element={<OticaTatuquara />} />
            <Route path="/otica-campo-comprido" element={<OticaCampoComprido />} />
            <Route path="/otica-hugo-lange" element={<OticaHugoLange />} />
            <Route path="/otica-tingui" element={<OticaTingui />} />
            <Route path="/otica-merces" element={<OticaMerces />} />
            <Route path="/otica-cabral" element={<OticaCabral />} />
            <Route path="/otica-alto-da-xv" element={<OticaAltoDaXV />} />
            <Route path="/otica-guabirotuba" element={<OticaGuabirotuba />} />
            <Route path="/otica-parolin" element={<OticaParolin />} />
            <Route path="/otica-adrianopolis" element={<OticaAdrianopolis />} />
            <Route path="/otica-balsa-nova" element={<OticaBalsaNova />} />
            <Route path="/otica-contenda" element={<OticaContenda />} />
            <Route path="/otica-lapa" element={<OticaLapa />} />
            <Route path="/otica-abranches" element={<OticaAbranches />} />
            <Route path="/otica-uberaba" element={<OticaUberaba />} />
            <Route path="/otica-vila-izabel" element={<OticaVilaIzabel />} />
            <Route path="/otica-alto-da-gloria" element={<OticaAltoDaGloria />} />
            <Route path="/otica-pilarzinho" element={<OticaPilarzinho />} />
            <Route path="/otica-santa-candida" element={<OticaSantaCandida />} />
            <Route path="/otica-bocaiuva-do-sul" element={<OticaBocaiuvaDoSul />} />
            <Route path="/otica-itaperucu" element={<OticaItaperucu />} />
            <Route path="/otica-rio-branco-do-sul" element={<OticaRioBrancoDoSul />} />
            <Route path="/otica-campo-magro" element={<OticaCampoMagro />} />
            <Route path="/otica-tijucas-do-sul" element={<OticaTijucasDoSul />} />
            <Route path="/otica-atuba" element={<OticaAtuba />} />
            <Route path="/otica-bairro-alto" element={<OticaBairroAlto />} />
            <Route path="/otica-boa-vista" element={<OticaBoaVista />} />
            <Route path="/otica-bom-retiro" element={<OticaBomRetiro />} />
            <Route path="/otica-orleans" element={<OticaOrleans />} />
            <Route path="/otica-agudos-do-sul" element={<OticaAgudosDoSul />} />
            <Route path="/otica-campo-do-tenente" element={<OticaCampoDoTenente />} />
            <Route path="/otica-cerro-azul" element={<OticaCerroAzul />} />
            <Route path="/otica-doutor-ulysses" element={<OticaDoutorUlysses />} />
            <Route path="/otica-pien" element={<OticaPien />} />
            <Route path="/otica-quitandinha" element={<OticaQuitandinha />} />
            <Route path="/otica-rio-negro" element={<OticaRioNegro />} />
            <Route path="/otica-tunas-do-parana" element={<OticaTunasDoParana />} />
            <Route path="/otica-lindoia" element={<OticaLindoia />} />
            <Route path="/otica-sao-joao" element={<OticaSaoJoao />} />
            <Route path="/otica-fanny" element={<OticaFanny />} />
            <Route path="/otica-sao-francisco" element={<OticaSaoFrancisco />} />
            <Route path="/otica-barigui" element={<OticaBarigui />} />
            <Route path="/otica-centro-civico" element={<OticaCentroCivico />} />
            <Route path="/otica-capao-da-imbuia" element={<OticaCapaoDaImbuia />} />
            <Route path="/otica-santa-quiteria" element={<OticaSantaQuiteria />} />
            <Route path="/otica-mossungue" element={<OticaMossungue />} />
            <Route path="/otica-seminario" element={<OticaSeminario />} />
            <Route path="/otica-barreirinha" element={<OticaBarreirinha />} />
            <Route path="/otica-santo-inacio" element={<OticaSantoInacio />} />
            <Route path="/otica-sao-lourenco" element={<OticaSaoLourenco />} />
            <Route path="/otica-riviera" element={<OticaRiviera />} />
            <Route path="/otica-campo-de-santana" element={<OticaCampoDeSantana />} />
            <Route path="/otica-augusta" element={<OticaAugusta />} />
            <Route path="/otica-cascatinha" element={<OticaCascatinha />} />
            <Route path="/otica-vila-guaira" element={<OticaVilaGuaira />} />
            <Route path="/otica-ganchinho" element={<OticaGanchinho />} />
            <Route path="/otica-fazendinha" element={<OticaFazendinha />} />
            <Route path="/otica-pinheirinho-bairro" element={<OticaPinheirinho />} />
            {/* Páginas SEO temáticas */}
            <Route path="/conserto-oculos-sitio-cercado" element={<ConsertoOculosSitioCercado />} />
            <Route path="/otica-terminal-sitio-cercado" element={<TerminalSitioCercado />} />
            <Route path="/oticas-no-centro-de-curitiba" element={<OticasCentroCuritiba />} />
            <Route path="/otica-barata-curitiba" element={<OticaBarataCuritiba />} />
            <Route path="/entregas-sitio-cercado-curitiba" element={<EntregasSitioCercado />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<RedirectHandler />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
