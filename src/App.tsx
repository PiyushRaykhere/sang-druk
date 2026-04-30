import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutSangDruk from "./pages/AboutSangDruk.tsx";
import TibetanMedicine from "./pages/TibetanMedicine.tsx";
import ServicesTreatments from "./pages/ServicesTreatments.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import WhoWeAre from "./pages/WhoWeAre.tsx";
import WhyChooseUs from "./pages/WhyChooseUs.tsx";
import HistoryTibetanMedicine from "./pages/HistoryTibetanMedicine.tsx";
import DevelopmentInExile from "./pages/DevelopmentInExile.tsx";
import FourTantras from "./pages/FourTantras.tsx";
import MedicineBuddha from "./pages/MedicineBuddha.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-sangdruk" element={<AboutSangDruk />} />
          <Route path="/tibetan-medicine" element={<TibetanMedicine />} />
          <Route path="/services-treatments" element={<ServicesTreatments />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about/who-we-are" element={<WhoWeAre />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about/history-tibetan-medicine" element={<HistoryTibetanMedicine />} />
          <Route path="/about/development-in-exile" element={<DevelopmentInExile />} />
          <Route path="/about/four-tantras" element={<FourTantras />} />
          <Route path="/about/medicine-buddha" element={<MedicineBuddha />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
