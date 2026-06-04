
import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { SERVICES_LIST } from '../constants';
import { ArrowRight, Zap, Siren } from 'lucide-react';
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
      <div className="flex flex-wrap gap-2 mb-8 md:mb-10 border-b border-white/10 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm font-mono uppercase tracking-widest transition-all relative group ${
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

      {/* Services Grid - Denser Layout (6 cols on LG) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {filteredServices.map((service) => {
           // SOS services get red styling, others green
           const isSos = service.category === 'sos';
           const themeColor = isSos ? 'text-neon-red' : 'text-neon-green';
           const themeBg = isSos ? 'bg-neon-red' : 'bg-neon-green';
           const themeBorder = isSos ? 'border-neon-red' : 'border-neon-green';
           const hoverBorder = isSos ? 'group-hover:border-neon-red' : 'group-hover:border-neon-green';

           return (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className={`group relative aspect-square bg-bunker-900 border border-white/10 ${hoverBorder} transition-all duration-300 clip-corner overflow-hidden`}
            >
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/50 transition-colors"></div>

              {/* Top Right Indicator */}
              <div className="absolute top-2 right-2 z-20 opacity-50 group-hover:opacity-100 transition-opacity">
                 {isSos ? <Siren size={12} className="text-neon-red animate-pulse" /> : <Zap size={12} className="text-neon-green" />}
              </div>

              {/* DEFAULT STATE: Icon + Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-bunker-950 border border-white/5 flex items-center justify-center mb-2 md:mb-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${themeColor} group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
                  </div>
                  {/* @ts-ignore */}
                  <h3 className="text-xs md:text-sm font-tech font-bold text-white tracking-wider text-center px-1 leading-tight">{t.services.items[service.id].title}</h3>
                  <div className="mt-1.5 w-4 h-0.5 bg-white/10"></div>
              </div>

              {/* HOVER/ACTIVE STATE: Overlay with Description */}
              <div className="absolute inset-0 bg-bunker-950/95 backdrop-blur-md flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-center z-10">
                  <div className={`hidden md:block mb-2 ${themeColor}`}>
                     <service.icon size={16} />
                  </div>
                  
                  {/* @ts-ignore */}
                  <h3 className="hidden md:block text-xs font-bold text-white mb-2 font-tech leading-tight">{t.services.items[service.id].title}</h3>
                  
                  {/* @ts-ignore */}
                  <p className="text-slate-400 text-[10px] mb-2 md:mb-3 font-light leading-snug line-clamp-4">
                      {/* @ts-ignore */}
                      {t.services.items[service.id].desc}
                  </p>

                  <div 
                      className={`relative px-3 py-1.5 bg-transparent border ${themeBorder} ${themeColor} font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-bunker-950 hover:border-white transition-all clip-corner flex items-center gap-1`}
                  >
                      {/* @ts-ignore */}
                      {t.services.readMore}
                      <ArrowRight size={10} className={`${language === 'he' ? 'rotate-180' : ''}`} />
                  </div>
              </div>
            </Link>
           );
        })}
      </div>
    </div>
  );
};
