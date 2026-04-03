
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import { Language } from '../types';
import { useAuth } from './AuthContext';
import { api } from './api';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['ru'];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  
  // 1. Initialize State Lazy: Read from LocalStorage immediately to avoid flickering 'ru' -> 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && ['en', 'he', 'ru'].includes(saved)) {
        return saved as Language;
      }
    }
    return 'ru'; // Fallback only if nothing is saved
  });

  // 2. Sync with User Profile ONLY when user object changes (Login event)
  useEffect(() => {
    // If user exists and has a specific language saved in DB that differs from current
    if (user?.language && ['en', 'he', 'ru'].includes(user.language) && user.language !== language) {
       console.log("Syncing language from User Profile:", user.language);
       setLanguageState(user.language as Language);
       localStorage.setItem('language', user.language);
    }
  }, [user]); // Dependency on 'user' ensures this runs on login/refresh

  // 3. Document Attributes Sync
  useEffect(() => {
    const dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);


  // Wrapper for setting language
  const setLanguage = async (lang: Language) => {
    // 1. Update State
    setLanguageState(lang);
    
    // 2. Update LocalStorage
    localStorage.setItem('language', lang);

    // 3. Update DB if user is logged in
    if (user?.id) {
        try {
            await api.records.update('app_users', user.id, { language: lang });
        } catch (err) {
            console.error("Failed to save language preference", err);
        }
    }
  };

  const value = {
    language,
    setLanguage, // Use the wrapper
    t: translations[language],
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
