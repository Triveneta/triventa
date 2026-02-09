import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Acquisto from "./pages/Acquisto";
import CercaCasa from "./pages/CercaCasa";
import PropertyDetail from "./pages/PropertyDetail";
import Investimenti from "./pages/Investimenti";
import AreaPremium from "./pages/AreaPremium";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import LavoraConNoi from "./pages/LavoraConNoi";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/acquisto" element={<Acquisto />} />
          <Route path="/cerca-casa" element={<CercaCasa />} />
          <Route path="/acquisto/:id" element={<PropertyDetail />} />
          <Route path="/investimenti" element={<Investimenti />} />
          <Route path="/area-premium" element={<AreaPremium />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/lavora-con-noi" element={<LavoraConNoi />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
