
import React from 'react';
import { CASES_LIST } from '../constants';
import { ArrowUpRight, Database, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';

export const Cases: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
            <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-2">
                <Database size={14} />
                <span>PROJECT_ARCHIVE_V.2</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-tech font-bold text-white">{t.cases.title}</h1>
        </div>
        <p className="text-slate-400 max-w-md text-right md:text-left font-mono text-sm leading-relaxed border-r-2 md:border-r-0 md:border-l-2 border-neon-green/30 pr-4 md:pl-4 rtl:md:border-r-2 rtl:md:border-l-0 rtl:pr-4">
            {t.cases.subtitle}
        </p>
      </div>

      {/* FORCE GRID-COLS-2 MINIMUM */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CASES_LIST.map((project, idx) => (
          <div key={project.id} className="group bg-bunker-900 border border-white/10 hover:border-neon-green/30 transition-all flex flex-col h-full clip-corner overflow-hidden">
            
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-neon-green/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                    src={project.image} 
                    alt="Project" 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute bottom-2 left-2 z-20 font-mono text-[9px] md:text-[10px] text-white bg-black/70 px-2 py-0.5 backdrop-blur-sm border border-white/20">
                    IMG_SRC_{idx + 104}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-neon-green text-[10px] md:text-xs">0{idx + 1}</span>
                <span className="h-px flex-grow bg-white/10"></span>
                <span className="px-2 py-0.5 bg-white/5 text-slate-300 text-[9px] md:text-[10px] font-mono uppercase border border-white/10">
                  {project.category}
                </span>
              </div>
              
              {/* @ts-ignore */}
              <h2 className="text-lg md:text-2xl font-tech font-bold text-white mb-2 md:mb-4 group-hover:text-neon-green transition-colors leading-tight">{t.cases.items[project.id].title}</h2>
              {/* @ts-ignore */}
              <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed font-light line-clamp-3">{t.cases.items[project.id].desc}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                {/* @ts-ignore */}
                 {Object.entries(t.cases.items[project.id].results).map(([key, label], i) => (
                    <div key={i} className="bg-bunker-950 border border-white/5 p-2 md:p-3 hover:border-neon-green/30 transition-colors">
                        <div className="text-sm md:text-xl font-tech font-bold text-white mb-0.5">40%</div>
                        <div className="text-[8px] md:text-[10px] text-slate-500 uppercase font-mono tracking-wider truncate">{label as string}</div>
                    </div>
                 ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 text-white border-b border-neon-green pb-1 hover:text-neon-green transition-all group/link w-fit">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest">{t.cases.link}</span>
                <ArrowUpRight className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform w-3 h-3 md:w-4 md:h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
