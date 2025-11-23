
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
