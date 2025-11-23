
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
