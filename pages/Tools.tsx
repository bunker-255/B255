
import React from 'react';
import { ShieldAlert, Waves, ExternalLink, Wrench, Siren } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';

export const Tools: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <SEO pageKey="tools" />
       {/* Hero Header */}
      <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 md:pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
        <div>
            <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-2">
                <Wrench size={14} />
                <span>BUNKER_INTERNAL_TOOLS</span>
            </div>
            {/* @ts-ignore */}
            <h1 className="text-3xl md:text-6xl font-tech font-bold text-white leading-tight">{t.tools.title}</h1>
        </div>
        
        {/* Adjusted subtitle for mobile: left aligned, left border always */}
        <p className="text-slate-400 max-w-md text-left font-mono text-xs md:text-sm leading-relaxed ltr:border-l-2 rtl:border-r-2 border-neon-green/30 ltr:pl-4 rtl:pr-4">
            {/* @ts-ignore */}
            {t.tools.subtitle}
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        
        {/* Security Category */}
        <section>
            <h2 className="text-xl md:text-2xl font-mono text-neon-red mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-widest">
                <ShieldAlert className="text-neon-red" />
                {/* @ts-ignore */}
                {t.tools.categories.security}
            </h2>
            {/* FORCE GRID-COLS-2 MINIMUM */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                
                {/* RedGuard Tool */}
                <div className="group relative bg-bunker-900 border border-red-500/20 hover:border-red-500/50 transition-all p-4 md:p-8 clip-corner overflow-hidden">
                    <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                         <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_red]"></div>
                    </div>
                    
                    <div className="mb-6 flex flex-col items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-bunker-950 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all rounded shrink-0">
                            <Siren size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                             {/* @ts-ignore */}
                            <h3 className="text-lg md:text-2xl font-tech font-bold text-white leading-tight">{t.tools.items.redguard.title}</h3>
                            <span className="text-[9px] md:text-[10px] font-mono uppercase bg-red-500/10 text-red-400 px-2 py-0.5 border border-red-500/20 inline-block mt-1">
                                {/* @ts-ignore */}
                                {t.tools.items.redguard.status}
                            </span>
                        </div>
                    </div>
                    
                    {/* @ts-ignore */}
                    <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed font-light ltr:border-l rtl:border-r border-white/10 ltr:pl-3 ltr:md:pl-4 rtl:pr-3 rtl:md:pr-4 line-clamp-4 md:line-clamp-none">
                        {/* @ts-ignore */}
                        {t.tools.items.redguard.desc}
                    </p>

                    <a 
                        href="https://redguard.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center items-center gap-2 text-white bg-red-600/10 border border-red-500/50 px-4 py-3 hover:bg-red-600 hover:text-white transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest clip-corner-br"
                    >
                        {/* @ts-ignore */}
                        {t.tools.openTool}
                        <ExternalLink size={14} />
                    </a>
                </div>

            </div>
        </section>

        {/* Misc Category */}
        <section>
            <h2 className="text-xl md:text-2xl font-mono text-neon-cyan mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-widest">
                <Waves className="text-neon-cyan" />
                {/* @ts-ignore */}
                {t.tools.categories.misc}
            </h2>
             {/* FORCE GRID-COLS-2 MINIMUM */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                
                {/* WaveSIL Tool */}
                <div className="group relative bg-bunker-900 border border-cyan-500/20 hover:border-cyan-500/50 transition-all p-4 md:p-8 clip-corner overflow-hidden">
                     <div className="mb-6 flex flex-col items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-bunker-950 border border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all rounded shrink-0">
                            <Waves size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                             {/* @ts-ignore */}
                            <h3 className="text-lg md:text-2xl font-tech font-bold text-white leading-tight">{t.tools.items.wavesil.title}</h3>
                             <span className="text-[9px] md:text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 px-2 py-0.5 border border-cyan-500/20 inline-block mt-1">
                                {/* @ts-ignore */}
                                {t.tools.items.wavesil.status}
                            </span>
                        </div>
                    </div>
                    
                    {/* @ts-ignore */}
                    <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed font-light ltr:border-l rtl:border-r border-white/10 ltr:pl-3 ltr:md:pl-4 rtl:pr-3 rtl:md:pr-4 line-clamp-4 md:line-clamp-none">
                        {/* @ts-ignore */}
                        {t.tools.items.wavesil.desc}
                    </p>

                    <a 
                        href="https://wavesil.onrender.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center items-center gap-2 text-white bg-cyan-600/10 border border-cyan-500/50 px-4 py-3 hover:bg-cyan-500 hover:text-bunker-950 transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest clip-corner-br"
                    >
                        {/* @ts-ignore */}
                        {t.tools.openTool}
                        <ExternalLink size={14} />
                    </a>
                </div>

            </div>
        </section>

      </div>
    </div>
  );
};
