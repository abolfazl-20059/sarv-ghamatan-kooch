import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import ArabSahnaei from "./pages/tribes/ArabSahnaei";
import Kalkhohi from "./pages/tribes/Kalkhohi";
import Koti from "./pages/tribes/Koti";
import Hadavand from "./pages/tribes/Hadavand";
import Tajik from "./pages/tribes/Tajik";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tribe/arab-sahnaei" element={<Layout><ArabSahnaei /></Layout>} />
          <Route path="/tribe/kalkhohi" element={<Layout><Kalkhohi /></Layout>} />
          <Route path="/tribe/koti" element={<Layout><Koti /></Layout>} />
          <Route path="/tribe/hadavand" element={<Layout><Hadavand /></Layout>} />
          <Route path="/tribe/tajik" element={<Layout><Tajik /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
