
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Unlock, Database, ArrowRight, Code, Server, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Ideas: React.FC = () => {
  const { t } = useLanguage();

  const ideas = ['i1', 'i2', 'i3'] as const;

  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-0.5 border border-neon-green/50 text-neon-green font-mono text-[10px] uppercase">Open_Source_Intelligence</span>
             <span className="w-12 h-px bg-white/10"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-6 uppercase">
            {/* @ts-ignore */}
            {t.ideas_page.title}
        </h1>
        <p className="text-lg text-slate-400 font-light max-w-2xl border-l-2 border-neon-green/30 pl-6">
          {/* @ts-ignore */}
          {t.ideas_page.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ideas.map((id, index) => (
            <div key={id} className="bg-bunker-900 border border-white/10 hover:border-neon-green/50 transition-all p-6 md:p-8 flex flex-col group clip-corner relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 clip-corner-br"></div>
                
                <div className="mb-6 flex justify-between items-start">
                    <div className="w-10 h-10 bg-bunker-950 border border-white/10 flex items-center justify-center text-neon-green rounded shadow-lg group-hover:scale-110 transition-transform">
                        <Unlock size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 px-2 py-1 uppercase tracking-wider">
                         {/* @ts-ignore */}
                        {t.ideas_page.items[id].status}
                    </span>
                </div>

                {/* @ts-ignore */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-green transition-colors font-tech">{t.ideas_page.items[id].title}</h3>
                {/* @ts-ignore */}
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{t.ideas_page.items[id].desc}</p>

                {/* Tech Stack Mockup */}
                <div className="mb-8 border-t border-white/5 pt-4">
                     {/* @ts-ignore */}
                    <span className="text-[10px] text-slate-600 font-mono uppercase tracking-widest block mb-2">{t.ideas_page.labels.tech}</span>
                    <div className="flex gap-2 text-slate-500">
                        <Code size={14} />
                        <Server size={14} />
                        <Smartphone size={14} />
                    </div>
                </div>

                <Link to="/contact" className="w-full flex items-center justify-between py-3 px-4 bg-white/5 hover:bg-neon-green hover:text-bunker-950 text-slate-300 font-mono text-xs uppercase tracking-widest transition-all group/btn">
                     {/* @ts-ignore */}
                    {t.ideas_page.labels.cta}
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        ))}

        {/* Placeholder for more */}
        <div className="bg-bunker-950 border border-dashed border-white/10 flex flex-col items-center justify-center p-8 text-center opacity-50 hover:opacity-100 transition-opacity">
            <Database size={32} className="text-slate-600 mb-4" />
            <h3 className="text-white font-mono text-sm mb-2">DATABASE_UPDATE_PENDING...</h3>
            <p className="text-slate-500 text-xs">New concepts are being generated.</p>
        </div>
      </div>
    </div>
  );
};
