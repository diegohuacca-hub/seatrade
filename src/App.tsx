import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { MaritimeChatBot } from "@/components/chatbot/MaritimeChatBot";
import { useEffect } from "react";
import "./index.css";

const queryClient = new QueryClient();

function AppWithRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🧭 Conversión chatbot → ruta real
  const commandToRoute: Record<string, string> = {
    inicio: "/",
    home: "/",

    mapas: "/map",
    mapa: "/map",
    map: "/map",

    tarifas: "/calculator",
    calculadora: "/calculator",
    costos: "/calculator",

    contenedores: "/containers",
    containers: "/containers",

    recursos: "/resources",
    documentos: "/resources",

    info: "/info",
    informacion: "/info",

    contacto: "/contact",
    ayuda: "/contact",
  };

  useEffect(() => {
    const handler = (e: any) => {
      const key = String(e.detail.view).toLowerCase();
      const route = commandToRoute[key];

      if (route) navigate(route);
    };

    window.addEventListener("assistant:navigate", handler);
    return () => window.removeEventListener("assistant:navigate", handler);
  }, [navigate]);

  // ❌ Ocultar chatbot solo en mapa
  const hideChatbot = location.pathname.includes("/map");

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/map" element={<Index />} />
        <Route path="/calculator" element={<Index />} />
        <Route path="/containers" element={<Index />} />
        <Route path="/resources" element={<Index />} />
        <Route path="/info" element={<Index />} />
        <Route path="/contact" element={<Index />} />

        {/* fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>

{/* {!hideChatbot && <MaritimeChatBot />} */}
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppWithRouter />
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
