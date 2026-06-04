
import React, { useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

interface SEOProps {
  pageKey?: string;
  title?: string;
  description?: string;
  schema?: object; // Structured Data for AI agents
}

export const SEO: React.FC<SEOProps> = ({ pageKey, title, description, schema }) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    let finalTitle = title;
    let finalDesc = description;
    let finalKeywords = "";

    // Helper: Safely access nav title for fallback
    const getNavTitle = (key: string) => {
        // @ts-ignore
        return t.nav?.[key];
    }

    // 1. Try to get specific SEO data from translations
    if (pageKey) {
        // @ts-ignore
        const seoData = t.seo?.[pageKey];
        if (seoData) {
            finalTitle = finalTitle || seoData.title;
            finalDesc = finalDesc || seoData.desc;
            finalKeywords = seoData.keywords;
        } else {
            // Fallback: If no SEO key, try to build title from Nav + Brand
            const navTitle = getNavTitle(pageKey);
            if (navTitle) {
                finalTitle = finalTitle || `${navTitle} | BUNKER-255`;
            }
        }
    }

    // 2. Ultimate Defaults (Hebrew)
    finalTitle = finalTitle || "BUNKER-255 | פיתוח AI, אתרים וסייבר";
    finalDesc = finalDesc || "מעבדת טכנולוגיה מתקדמת המתמחה בפתרונות AI, אוטומציה ופיתוח אתרים. האקוסיסטם המוביל בישראל.";
    finalKeywords = finalKeywords || "BUNKER-255, AI, פיתוח תוכנה, ישראל, בניית אתרים, סייבר, OnTech";

    // ------------------------------------------------
    // DOM UPDATES
    // ------------------------------------------------

    // A. Update Document Title
    document.title = finalTitle;

    // B. Update HTML Attributes (Lang & Dir)
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';

    // C. Helper to update/create meta tags
    const setMetaTag = (selector: string, content: string) => {
        let tag = document.querySelector(selector);
        if (!tag) {
            // Create if missing. We assume 'name' or 'property' based on selector parsing for simplicity
            tag = document.createElement('meta');
            if (selector.startsWith('meta[name')) {
                const name = selector.match(/name="([^"]+)"/)?.[1];
                if (name) tag.setAttribute('name', name);
            } else if (selector.startsWith('meta[property')) {
                const property = selector.match(/property="([^"]+)"/)?.[1];
                if (property) tag.setAttribute('property', property);
            }
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };

    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
        let selector = `link[rel="${rel}"]`;
        if (hreflang) selector += `[hreflang="${hreflang}"]`;
        
        let tag = document.querySelector(selector);
        if (!tag) {
            tag = document.createElement('link');
            tag.setAttribute('rel', rel);
            if (hreflang) tag.setAttribute('hreflang', hreflang);
            document.head.appendChild(tag);
        }
        tag.setAttribute('href', href);
    };

    setMetaTag('meta[name="description"]', finalDesc);
    setMetaTag('meta[name="keywords"]', finalKeywords);

    // Canonical & Alternates
    const baseUrl = 'https://bunker-255.com';
    const currentPath = window.location.pathname;
    const canonicalUrl = `${baseUrl}${currentPath === '/' ? '' : currentPath}`;

    setLinkTag('canonical', canonicalUrl);
    setLinkTag('alternate', canonicalUrl, 'x-default');
    setLinkTag('alternate', canonicalUrl, 'he');
    setLinkTag('alternate', `${canonicalUrl}?lang=en`, 'en');
    setLinkTag('alternate', `${canonicalUrl}?lang=ru`, 'ru');

    // D. Open Graph Tags
    setMetaTag('meta[property="og:title"]', finalTitle);
    setMetaTag('meta[property="og:description"]', finalDesc);
    
    // Locale Handling
    const localeMap: Record<string, string> = { en: 'en_US', he: 'he_IL', ru: 'ru_RU' };
    const currentLocale = localeMap[language] || 'he_IL';
    setMetaTag('meta[property="og:locale"]', currentLocale);

    // Locale Alternates (Important for Social Media to know other langs exist)
    // First, remove old alternates to avoid duplicates on re-render
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
    
    // Add new alternates
    Object.keys(localeMap).forEach(langKey => {
        if (langKey !== language) {
            const altMeta = document.createElement('meta');
            altMeta.setAttribute('property', 'og:locale:alternate');
            altMeta.setAttribute('content', localeMap[langKey]);
            document.head.appendChild(altMeta);
        }
    });

    // ------------------------------------------------
    // STRUCTURED DATA (JSON-LD)
    // ------------------------------------------------
    const existingScript = document.getElementById('dynamic-json-ld');
    if (existingScript) {
        existingScript.remove();
    }

    if (schema) {
        const script = document.createElement('script');
        script.id = 'dynamic-json-ld';
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
    }

  }, [language, pageKey, t, title, description, schema]);

  return null;
};
