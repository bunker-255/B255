
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['ru'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') as Language : null;
      if (savedLang && ['en', 'he', 'ru'].includes(savedLang)) {
        return savedLang;
      }
      // Prioritize Hebrew if browser is Hebrew, but otherwise default to Hebrew anyway for this site
      if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('ru')) return 'ru';
        if (browserLang.startsWith('he')) return 'he';
        if (browserLang.startsWith('en')) return 'en';
      }
    } catch (e) {
      console.warn("Language detection failed", e);
    }
    return 'en'; // Default to English (Reverted Logic)
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {}
    
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Debug info for production
    console.log(`[BUNKER-SYS] Language set to: ${language}`);
  }, [language]);

  // CRITICAL FIX: Smart Merge
  // Instead of just switching objects, we merge the selected language ON TOP of English.
  // This ensures that if 'ru.about' is missing, 'en.about' is used instead.
  // We do a shallow merge of the top-level keys (nav, hero, home, etc.) to cover most cases.
  
  // Cast to any to avoid TypeScript inference limitations on deep merge of different object literals
  const defaultT = translations['en'] as any;
  const selectedT = (translations[language] || defaultT) as any;

  const t = {
    ...defaultT, // Start with full English object
    ...selectedT, // Overwrite with selected language properties
    // Manually merge critical nested objects to be super safe
    about: { ...defaultT.about, ...(selectedT.about || {}) },
    nav: { ...defaultT.nav, ...(selectedT.nav || {}) },
    services: { 
        ...defaultT.services, 
        ...(selectedT.services || {}),
        categories: { ...defaultT.services?.categories, ...(selectedT.services?.categories || {}) }
    }
  };

  const value = {
    language,
    setLanguage,
    t: t as typeof translations['ru'], // Casting ensures TS is happy
    dir: language === 'he' ? 'rtl' : 'ltr' as 'ltr' | 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
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
