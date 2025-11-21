import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    'nav.inicio': 'INICIO',
    'nav.mapa': 'MAPA',
    'nav.informacion': 'INFORMACIÓN',
    'nav.contenedores': 'CONTAINER Y FLETE',
    'nav.recursos': 'RECURSOS',
    'nav.calculadora': 'CALCULADORA',
    'nav.contacto': 'CONTACTO',
    'button.back': 'Volver al Inicio',
    'button.language': 'Idioma',
  },
  en: {
    'nav.inicio': 'HOME',
    'nav.mapa': 'MAP',
    'nav.informacion': 'INFORMATION',
    'nav.contenedores': 'CONTAINERS & FREIGHT',
    'nav.recursos': 'RESOURCES',
    'nav.calculadora': 'CALCULATOR',
    'nav.contacto': 'CONTACT',
    'button.back': 'Back to Home',
    'button.language': 'Language',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
