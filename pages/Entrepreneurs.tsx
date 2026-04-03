
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Lightbulb, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Entrepreneurs: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-0.5 border border-neon-cyan/50 text-neon-cyan font-mono text-[10px] uppercase">Venture_Module</span>
             <span className="w-12 h-px bg-white/10"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-6 uppercase">{t.entrepreneurs.title}</h1>
        <p className="text-lg text-slate-400 mb-16 font-light max-w-2xl border-l-2 border-neon-cyan/30 pl-6">
          {t.entrepreneurs.subtitle}
        </p>

        {/* Entrepreneur Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Startup Ideas */}
          <div className="p-8 border border-neon-green/20 bg-gradient-to-br from-neon-green/5 to-transparent flex flex-col clip-corner hover:border-neon-green/50 transition-colors group">
             <div className="w-12 h-12 bg-bunker-950 border border-neon-green/30 flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{t.entrepreneurs.options.startups.title}</h3>
             <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono">{t.entrepreneurs.options.startups.desc}</p>
             <Link to="/ideas" className="w-full py-4 border border-neon-green text-neon-green font-bold font-mono tracking-widest hover:bg-neon-green hover:text-bunker-950 transition-all uppercase text-xs text-center">
                {t.entrepreneurs.buttons.discuss}
             </Link>
          </div>

          {/* Investment */}
          <div className="p-8 border border-neon-cyan/20 bg-gradient-to-br from-neon-cyan/5 to-transparent flex flex-col clip-corner hover:border-neon-cyan/50 transition-colors group">
             <div className="w-12 h-12 bg-bunker-950 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
                <Globe />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{t.entrepreneurs.options.equity.title}</h3>
             <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono">{t.entrepreneurs.options.equity.desc}</p>
             <Link to="/contact" className="w-full py-4 border border-neon-cyan text-neon-cyan font-bold font-mono tracking-widest hover:bg-neon-cyan hover:text-bunker-950 transition-all uppercase text-xs text-center">
                {t.entrepreneurs.buttons.invest}
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
