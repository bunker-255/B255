
import React, { useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

interface SEOProps {
  pageKey: 'home' | 'services' | 'training' | 'tools';
}

export const SEO: React.FC<SEOProps> = ({ pageKey }) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // @ts-ignore
    const seoData = t.seo?.[pageKey];
    if (!seoData) return;

    // 1. Update Title
    document.title = seoData.title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.desc);

    // 3. Update Meta Keywords (Adaptive by language)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    // Use keywords from translation if available, else fallback
    metaKeywords.setAttribute('content', seoData.keywords || "BUNKER-255, AI, Tech Lab");

    // 4. Update Open Graph Tags (Adaptive by language for better sharing previews)
    const setMetaTag = (property: string, content: string) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };

    setMetaTag('og:title', seoData.title);
    setMetaTag('og:description', seoData.desc);
    
    // Set locale based on language (en_US, he_IL, ru_RU)
    const localeMap: Record<string, string> = { en: 'en_US', he: 'he_IL', ru: 'ru_RU' };
    setMetaTag('og:locale', localeMap[language] || 'en_US');

  }, [language, pageKey, t]);

  return null;
};
