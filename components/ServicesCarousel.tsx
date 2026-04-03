
import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { SERVICES_LIST } from '../constants';
import { ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesCarousel: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'ai' | 'web' | 'hardware' | 'consulting'>('ai');

  const categories: { id: typeof activeCategory; label: string }[] = [
    { id: 'ai', label: t.services.categories.ai },
    { id: 'web', label: t.services.categories.web },
    { id: 'hardware', label: t.services.categories.hardware },
    { id: 'consulting', label: t.services.categories.consulting },
  ];

  const filteredServices = SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs md:text-sm font-mono uppercase tracking-widest transition-all relative group ${
              activeCategory === cat.id 
                ? 'text-neon-green' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-green shadow-[0_0_10px_rgba(0,255,163,0.5)]"></span>
            )}
            <span className="relative z-10">{cat.label}</span>
            {activeCategory !== cat.id && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-300"></span>}
          </button>
        ))}
      </div>

      {/* FORCE GRID-COLS-2 MINIMUM */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up">
        {filteredServices.map((service) => (
          <Link to="/services" key={service.id} className="group relative bg-bunker-900/40 backdrop-blur-sm border border-white/5 hover:border-neon-green/40 transition-all p-4 md:p-8 flex flex-col h-full overflow-hidden">
            {/* Holographic Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Corner Markers */}
            <div className="absolute top-0 ltr:left-0 rtl:right-0 w-2 h-2 border-t ltr:border-l rtl:border-r border-white/20 group-hover:border-neon-green transition-colors"></div>
            <div className="absolute bottom-0 ltr:right-0 rtl:left-0 w-2 h-2 border-b ltr:border-r rtl:border-l border-white/20 group-hover:border-neon-green transition-colors"></div>

            <div className="mb-4 md:mb-6 flex items-center justify-between">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-bunker-950 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-neon-green group-hover:border-neon-green group-hover:shadow-[0_0_15px_rgba(0,255,163,0.2)] transition-all clip-corner">
                    <service.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <Cpu size={14} className="text-white/10 group-hover:text-neon-green/30 transition-colors md:w-4 md:h-4" />
            </div>

            {/* @ts-ignore */}
            <h3 className="text-sm md:text-xl font-tech font-bold text-white mb-2 md:mb-3 group-hover:text-neon-green transition-colors leading-tight">{t.services.items[service.id].title}</h3>
            {/* @ts-ignore */}
            <p className="text-xs md:text-sm text-slate-400 mb-4 md:mb-8 flex-grow leading-relaxed font-light line-clamp-3 md:line-clamp-none">{t.services.items[service.id].desc}</p>
            
            <div className="flex items-center text-[10px] md:text-xs font-mono text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
              {t.services.readMore} <ArrowRight size={14} className={`mx-2 group-hover:translate-x-1 transition-transform ${language === 'he' ? 'rotate-180' : ''}`} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
