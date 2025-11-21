import { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { HomePage } from '@/components/HomePage';
import { MapPage } from '@/components/MapPage';
import { InfoPage } from '@/components/InfoPage';
import { ContactPage } from '@/components/ContactPage';
import { ResourcesPage } from '@/components/ResourcesPage';
import { ContainerPage } from '@/components/ContainerPage';
import { FreightCalculator } from '@/components/FreightCalculator';
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
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [activeTab, setActiveTab] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { key: 'inicio', label: t('nav.inicio'), icon: <Home className="h-4 w-4 mr-1 inline" /> },
    { key: 'mapa', label: t('nav.mapa'), icon: <Map className="h-4 w-4 mr-1 inline" /> },
    { key: 'informacion', label: t('nav.informacion'), icon: <Info className="h-4 w-4 mr-1 inline" /> },
    { key: 'contenedores', label: t('nav.contenedores'), icon: <Package className="h-4 w-4 mr-1 inline" /> },
    { key: 'recursos', label: t('nav.recursos'), icon: <BookOpen className="h-4 w-4 mr-1 inline" /> },
    { key: 'calculadora', label: t('nav.calculadora'), icon: <Calculator className="h-4 w-4 mr-1 inline" /> },
    { key: 'contacto', label: t('nav.contacto'), icon: <Contact className="h-4 w-4 mr-1 inline" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {activeTab === 'inicio' ? (
        // 🔹 Header especial para HomePage (solo idioma, sin título)
        <header className="bg-blue-600 shadow">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end">
            {/* Selector de idioma */}
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white border-white/20"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            >
              <Languages className="h-4 w-4" /> {language === 'es' ? 'ES' : 'EN'}
            </Button>
          </div>
        </header>
      ) : (
        // 🔹 Header normal para las demás vistas (título + idioma)
        <header className="bg-blue-600 shadow">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="text-white text-xl font-bold">Sea Trade Navigator</h1>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white border-white/20"
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            >
              <Languages className="h-4 w-4" /> {language === 'es' ? 'ES' : 'EN'}
            </Button>
          </div>
        </header>
      )}

      {/* 🔹 Barra de navegación (siempre visible) */}
      <nav className="bg-blue-500 shadow">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Menú escritorio */}
          <ul className="hidden md:flex justify-center gap-4 whitespace-nowrap items-center flex-1">
            {menuItems.map(item => (
              <li key={item.key}>
                <Button
                  variant={activeTab === item.key ? 'default' : 'secondary'}
                  size="sm"
                  className="flex items-center gap-1 min-w-max"
                  onClick={() => setActiveTab(item.key)}
                >
                  {item.icon} {item.label}
                </Button>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <ul className="flex flex-col md:hidden gap-2 px-4 pb-2">
            {menuItems.map(item => (
              <li key={item.key}>
                <Button
                  variant={activeTab === item.key ? 'default' : 'secondary'}
                  size="sm"
                  className="w-full flex items-center gap-2"
                  onClick={() => {
                    setActiveTab(item.key);
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

      {/* 🔹 Main Content con Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="inicio" className="m-0 focus-visible:outline-none">
          <HomePage setActiveTab={setActiveTab} />
        </TabsContent>
        <TabsContent value="mapa" className="m-0 focus-visible:outline-none">
          <MapPage />
        </TabsContent>
        <TabsContent value="informacion" className="m-0 focus-visible:outline-none">
          <InfoPage />
        </TabsContent>
        <TabsContent value="contenedores" className="m-0 focus-visible:outline-none">
          <ContainerPage />
        </TabsContent>
        <TabsContent value="recursos" className="m-0 focus-visible:outline-none">
          <ResourcesPage />
        </TabsContent>
        <TabsContent value="calculadora" className="m-0 focus-visible:outline-none">
          <FreightCalculator />
        </TabsContent>
        <TabsContent value="contacto" className="m-0 focus-visible:outline-none">
          <ContactPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
