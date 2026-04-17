"use client";

import { useLanguage } from "./LanguageProvider";
import { Language } from "@/lib/translations";

const FlagIcon = ({ lang }: { lang: Language }) => (
  <svg 
    viewBox="0 0 36 24" 
    className="w-5 h-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    {lang === "en" ? (
      <g>
        <rect width="36" height="24" fill="#012169" />
        <path d="M0 0 L36 0 L36 24 L0 24 Z" fill="none" />
        <path d="M0 0 L36 24" stroke="#fff" strokeWidth="2" />
        <path d="M36 0 L0 24" stroke="#fff" strokeWidth="2" />
        <path d="M14 0 L14 24" stroke="#fff" strokeWidth="6" />
        <path d="M0 10 L36 10" stroke="#fff" strokeWidth="6" />
        <path d="M14 0 L36 10 L14 24 L0 10 Z" fill="#C8102E" />
        <path d="M14 0 L14 24 L36 0 Z" fill="#C8102E" />
      </g>
    ) : (
      <g>
        <rect width="36" height="24" fill="#FFFFFF" />
        <rect width="36" height="16" fill="#AE1C28" />
        <rect y="8" width="36" height="8" fill="#21468C" />
      </g>
    )}
  </svg>
);

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "Dutch" : "English"}`}
      className="relative w-10 h-10 rounded-lg flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      title={language === "en" ? "Switch to Dutch" : "Switch to English"}
    >
      <span className="flex items-center gap-1">
        <FlagIcon lang={language === "en" ? "nl" : "en"} />
      </span>
    </button>
  );
}