
import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Siren } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { SERVICES_LIST } from '../constants';
import { SEO } from '../components/SEO';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'web' | 'hardware' | 'consulting' | 'sos'>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['ai', 'web', 'hardware', 'consulting', 'sos'].includes(category)) {
      setActiveTab(category as any);
    } else {
      setActiveTab('all');
    }
  }, [searchParams]);

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeTab);

  // Generate Structured Data for AI Agents
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": filteredServices.map((service, index) => {
        // @ts-ignore
        const info = t.services.items[service.id] || {};
        return {
            "@type": "Service",
            "position": index + 1,
            "name": info.title,
            "description": info.desc,
            "provider": {
                "@type": "Organization",
                "name": "BUNKER-255"
            },
            "serviceType": service.category,
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": "Custom",
                "priceCurrency": "USD"
            }
        };
    })
  };

  return (
    <div className="py-20 container mx-auto px-4 md:px-6">
      <SEO pageKey="services" schema={servicesSchema} />
      <div className="text-center mb-16 relative">
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
         <div className="inline-block bg-bunker-950 px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-4 tracking-tight">
                <span className="text-neon-green">/</span> {t.services.title}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm text-neon-green/70">
            {t.services.subtitle}
            </p>
        </div>
      </div>

      <div className="flex justify-center mb-16 flex-wrap gap-3 md:gap-4">
        {[
          { id: 'all', label: t.services.categories.all },
          { id: 'ai', label: t.services.categories.ai },
          { id: 'web', label: t.services.categories.web },
          { id: 'hardware', label: t.services.categories.hardware },
          { id: 'consulting', label: t.services.categories.consulting },
          { id: 'sos', label: t.services.categories.sos, icon: <Siren size={14} className="mr-2 inline" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              // Update URL without reload to reflect state
              const newUrl = tab.id === 'all' ? '/services' : `/services?category=${tab.id}`;
              window.history.pushState({}, '', newUrl);
            }}
            className={`px-4 py-2 md:px-6 md:py-3 font-mono text-xs md:text-sm uppercase tracking-widest clip-corner transition-all border flex items-center ${
              activeTab === tab.id 
                ? 'bg-neon-green text-bunker-950 border-neon-green font-bold' 
                : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {/* @ts-ignore */}
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* FORCE GRID-COLS-2 MINIMUM */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up">
        {filteredServices.map((service, idx) => {
          // Fallback if item translation is missing
          // @ts-ignore
          const serviceInfo = t.services.items[service.id] || { title: service.id, desc: 'Service description...' };
          const categoryColor = service.category === 'sos' ? 'text-neon-red border-neon-red/30' : 'text-neon-green border-neon-green/30';
          const hoverBorder = service.category === 'sos' ? 'group-hover:border-neon-red' : 'group-hover:border-neon-green';
          const buttonBg = service.category === 'sos' ? 'hover:bg-neon-red hover:border-neon-red' : 'hover:bg-neon-green hover:border-neon-green';

          return (
            <Link to={`/services/${service.id}`} key={idx} className={`group bg-bunker-900/50 relative p-4 md:p-8 border border-white/5 ${hoverBorder} transition-all flex flex-col hover:bg-bunker-900`}>
                <div className="absolute top-0 right-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <Zap size={16} className={service.category === 'sos' ? 'text-neon-red' : 'text-neon-green'} />
                </div>
                
                <div className="mb-4 md:mb-6 flex flex-col items-start gap-3">
                    <div className={`w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] clip-corner shrink-0 ${categoryColor}`}>
                        <service.icon size={20} className="md:w-7 md:h-7" />
                    </div>
                </div>

                <h3 className={`text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 transition-colors leading-tight ${service.category === 'sos' ? 'group-hover:text-neon-red' : 'group-hover:text-neon-green'}`}>
                    {serviceInfo.title}
                </h3>
                
                <p className="text-sm text-slate-400 mb-4 md:mb-8 flex-grow leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                    {serviceInfo.desc}
                </p>
                
                <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-neon-cyan font-mono text-xs">
                        {/* @ts-ignore */}
                        {serviceInfo.price || t.services.price_individual}
                    </span>
                    <div className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/10 text-slate-400 hover:text-bunker-950 transition-all clip-corner ${buttonBg}`}>
                        <ArrowRight size={14} className={`md:w-4 md:h-4 ${language === 'he' ? 'rotate-180' : ''}`} />
                    </div>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
