import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import About from "./pages/About";
import Categorias from "./pages/Categorias";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import SocialAction from "./pages/SocialAction";
import ResponsibleTravel from "./pages/ResponsibleTravel";
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
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:slug" element={<TourDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/social-action" element={<SocialAction />} />
          <Route path="/about/responsible-travel" element={<ResponsibleTravel />} />
          <Route path="/destinations" element={<Categorias />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
