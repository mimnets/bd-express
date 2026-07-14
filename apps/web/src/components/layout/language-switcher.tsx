"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-0.5">
      {LANGUAGES.map((lang: (typeof LANGUAGES)[number]) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium transition-all ${
            language === lang.code
              ? "bg-blue-600 text-white shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span>{lang.flag}</span>
          <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
