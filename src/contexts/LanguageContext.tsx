import React, { createContext, useContext, useState, ReactNode } from "react";
import es from "@/locales/es.json";
import en from "@/locales/en.json";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  // 🔹 Recupera idioma guardado o usa español por defecto
  const storedLang = localStorage.getItem("language") as Language | null;
  const [language, setLanguageState] = useState<Language>(storedLang ?? "es");

  // 🔹 Guarda idioma al cambiarlo
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // 🔹 Soporte para claves anidadas (ej: "infoPage.title")
  const t = (key: string): string => {
    return key.split(".").reduce((acc: any, part: string) => acc?.[part], translations[language]) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
