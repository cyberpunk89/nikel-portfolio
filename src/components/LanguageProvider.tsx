"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    
    const stored = localStorage.getItem("language") as Language | null;
    const browserLang = typeof navigator !== "undefined" ? navigator.language : "en";
    const detectedLang: Language = stored || (browserLang.startsWith("nl") ? "nl" : "en");
    
    setLanguageState(detectedLang);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}