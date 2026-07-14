"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Language, DEFAULT_LANGUAGE, type TranslationKey, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  // Read from cookie
  const match = document.cookie.match(/lang=([^;]+)/);
  if (match && (match[1] === "en" || match[1] === "bn")) return match[1];
  // Read from localStorage
  const stored = localStorage.getItem("lang");
  if (stored === "en" || stored === "bn") return stored;
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Persist
    document.cookie = `lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
    localStorage.setItem("lang", lang);
    // Update html lang attribute
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[key]?.[language] ?? translations[key]?.en ?? key;
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
