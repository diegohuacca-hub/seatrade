import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { HomePage } from "@/components/HomePage";
import { MapPage } from "@/components/MapPage";
import { InfoPage } from "@/components/InfoPage";
import { ContactPage } from "@/components/ContactPage";
import { ResourcesPage } from "@/components/ResourcesPage";
import { ContainerPage } from "@/components/ContainerPage";
import { FreightCalculator } from "@/components/FreightCalculator";

import {
  Home,
  Map,
  Info,
  Package,
  Contact,
  BookOpen,
  Calculator,
  Languages,
  Menu,
  X,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  // 🔗 Relación Rutas → Pestañas
  const routeToTab: Record<string, string> = {
    "/": "inicio",
    "/map": "mapa",
    "/calculator": "calculadora",
    "/containers": "contenedores",
    "/resources": "recursos",
    "/info": "informacion",
    "/contact": "contacto",
  };

  // 🔁 Mapa usado por chatbot → rutas reales
  const chatbotToRoute: Record<string, string> = {
    inicio: "/",
    mapa: "/map",
    map: "/map",
    tarifas: "/calculator",
    calculadora: "/calculator",
    contenedores: "/containers",
    recursos: "/resources",
    informacion: "/info",
    info: "/info",
    contacto: "/contact",
    ayuda: "/contact",
  };

  // 🧭 Mantener sincronía cuando cambia URL (manual o chatbot)
  useEffect(() => {
    const newTab = routeToTab[location.pathname];
    if (newTab && newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }, [location.pathname]);

  // 🤖 Escucha eventos del chatbot
  useEffect(() => {
    const handler = (e: any) => {
      const key = String(e.detail).trim().toLowerCase();
      const newRoute = chatbotToRoute[key];

      if (newRoute) navigate(newRoute);
    };

    window.addEventListener("assistant:navigate", handler);
    return () => window.removeEventListener("assistant:navigate", handler);
  }, [navigate]);

  // 🧭 Cambiar ruta cuando usuario interactúa manualmente
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    const match = Object.entries(routeToTab).find(([_, value]) => value === tab);
    if (match) navigate(match[0]);
  };

  // 📌 Items del menú
  const menuItems = [
    { key: "inicio", label: t("nav.inicio"), icon: <Home className="h-4 w-4 mr-1 inline" /> },
    { key: "mapa", label: t("nav.mapa"), icon: <Map className="h-4 w-4 mr-1 inline" /> },
    { key: "informacion", label: t("nav.informacion"), icon: <Info className="h-4 w-4 mr-1 inline" /> },
    { key: "contenedores", label: t("nav.contenedores"), icon: <Package className="h-4 w-4 mr-1 inline" /> },
    { key: "recursos", label: t("nav.recursos"), icon: <BookOpen className="h-4 w-4 mr-1 inline" /> },
    { key: "calculadora", label: t("nav.calculadora"), icon: <Calculator className="h-4 w-4 mr-1 inline" /> },
    { key: "contacto", label: t("nav.contacto"), icon: <Contact className="h-4 w-4 mr-1 inline" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="bg-blue-600 shadow">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">Sea Trade Navigator</h1>

          <Button
            variant="secondary"
            size="sm"
            className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white border-white/20"
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
          >
            <Languages className="h-4 w-4" /> {language === "es" ? "ES" : "EN"}
          </Button>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="bg-blue-500 shadow">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center gap-3 items-center flex-1">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Button
                  variant={activeTab === item.key ? "default" : "secondary"}
                  size="sm"
                  onClick={() => handleTabChange(item.key)}
                >
                  {item.icon} {item.label}
                </Button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden gap-2 px-4 pb-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Button
                  variant={activeTab === item.key ? "default" : "secondary"}
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    handleTabChange(item.key);
                    setMenuOpen(false);
                  }}
                >
                  {item.icon} {item.label}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* CONTENT */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        <TabsContent value="inicio"><HomePage setActiveTab={setActiveTab} /></TabsContent>
        <TabsContent value="mapa"><MapPage /></TabsContent>
        <TabsContent value="informacion"><InfoPage /></TabsContent>
        <TabsContent value="contenedores"><ContainerPage /></TabsContent>
        <TabsContent value="recursos"><ResourcesPage /></TabsContent>
        <TabsContent value="calculadora"><FreightCalculator /></TabsContent>
        <TabsContent value="contacto"><ContactPage /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
