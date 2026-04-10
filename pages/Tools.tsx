
import React, { useState } from 'react';
import { Waves, ExternalLink, Wrench, Activity, FileText, QrCode } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';

export const Tools: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  // Schema for Tools (SoftwareApplication)
  const toolsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        // @ts-ignore
        "name": t.tools.items.wavesil.title,
        "applicationCategory": "Analytics",
        "operatingSystem": "Web",
        "url": "https://surf.bunker-255.com",
        // @ts-ignore
        "description": t.tools.items.wavesil.desc
      },
      {
        "@type": "SoftwareApplication",
        // @ts-ignore
        "name": t.tools.items.invoiceGen.title,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://bunker-255.com/#/tools/invoice-gen",
        // @ts-ignore
        "description": t.tools.items.invoiceGen.desc
      },
      {
        "@type": "SoftwareApplication",
        // @ts-ignore
        "name": t.tools.items.qrGen.title,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://bunker-255.com/#/tools/qr-gen",
        // @ts-ignore
        "description": t.tools.items.qrGen.desc
      }
    ]
  };

  const toolsList = [
    {
      id: 'wavesil',
      // @ts-ignore
      title: t.tools.items.wavesil.title,
      // @ts-ignore
      desc: t.tools.items.wavesil.desc,
      // @ts-ignore
      status: t.tools.items.wavesil.status,
      icon: Waves,
      categoryIcon: Waves,
      theme: 'cyan',
      link: 'https://surf.bunker-255.com',
      category: 'entertainment'
    },
    {
      id: 'invoiceGen',
      // @ts-ignore
      title: t.tools.items.invoiceGen.title,
      // @ts-ignore
      desc: t.tools.items.invoiceGen.desc,
      // @ts-ignore
      status: t.tools.items.invoiceGen.status,
      icon: FileText,
      categoryIcon: FileText,
      theme: 'purple',
      link: '#/tools/invoice-gen',
      category: 'business'
    },
    {
      id: 'qrGen',
      // @ts-ignore
      title: t.tools.items.qrGen.title,
      // @ts-ignore
      desc: t.tools.items.qrGen.desc,
      // @ts-ignore
      status: t.tools.items.qrGen.status,
      icon: QrCode,
      categoryIcon: QrCode,
      theme: 'cyan',
      link: '#/tools/qr-gen',
      category: 'business'
    }
  ];

  const categories = [
    // @ts-ignore
    { id: 'all', label: t.tools.categories.all },
    // @ts-ignore
    { id: 'business', label: t.tools.categories.business },
    // @ts-ignore
    { id: 'entertainment', label: t.tools.categories.entertainment }
  ];

  const filteredTools = activeCategory === 'all' 
    ? toolsList 
    : toolsList.filter(tool => tool.category === activeCategory);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 min-h-screen">
      <SEO pageKey="tools" schema={toolsSchema} />
      
       {/* Hero Header */}
      <div className="mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-10">
        <div>
            <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-2">
                <Wrench size={14} />
                <span>BUNKER_INTERNAL_TOOLS</span>
            </div>
            {/* @ts-ignore */}
            <h1 className="text-3xl md:text-6xl font-tech font-bold text-white leading-tight">{t.tools.title}</h1>
        </div>
        
        <p className="text-slate-400 max-w-md text-left font-mono text-xs md:text-sm leading-relaxed border-l-2 border-neon-green/30 pl-4 hidden md:block">
            {/* @ts-ignore */}
            {t.tools.subtitle}
        </p>
      </div>

      {/* Categories Filter */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full font-mono text-xs md:text-sm transition-all duration-300 border ${
              activeCategory === cat.id 
                ? 'bg-neon-green text-bunker-950 border-neon-green shadow-[0_0_15px_rgba(0,255,163,0.3)]' 
                : 'bg-bunker-900 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tools Grid - DENSE (8 cols on LG) */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
        {filteredTools.map((tool) => {
          const getThemeClasses = (category: string) => {
            switch (category) {
              case 'business':
                return {
                  color: 'text-purple-500',
                  border: 'border-purple-500',
                  bg: 'bg-purple-500',
                  hoverBorder: 'group-hover:border-purple-500'
                };
              case 'entertainment':
                return {
                  color: 'text-cyan-500',
                  border: 'border-cyan-500',
                  bg: 'bg-cyan-500',
                  hoverBorder: 'group-hover:border-cyan-500'
                };
              default:
                return {
                  color: 'text-neon-green',
                  border: 'border-neon-green',
                  bg: 'bg-neon-green',
                  hoverBorder: 'group-hover:border-neon-green'
                };
            }
          };

          const theme = getThemeClasses(tool.category || '');
          const themeColor = theme.color;
          const themeBorder = theme.border;
          const themeBg = theme.bg;
          const themeHoverBorder = theme.hoverBorder;

          return (
            <div 
              key={tool.id} 
              className={`group relative aspect-square bg-bunker-900 border border-white/10 ${themeHoverBorder} transition-all duration-300 clip-corner overflow-hidden`}
            >
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
              
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/50 transition-colors"></div>

              {/* Status Badge */}
              <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
                 <span className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${themeBg} animate-pulse`}></span>
                 <span className={`text-[9px] font-mono uppercase tracking-widest ${themeColor} opacity-70`}>{tool.status}</span>
              </div>

              {/* DEFAULT STATE: Icon + Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-bunker-950 border border-white/5 flex items-center justify-center mb-2 md:mb-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${themeColor} group-hover:scale-110 transition-transform duration-500`}>
                      <tool.icon className="w-5 h-5 md:w-7 md:h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs md:text-sm font-tech font-bold text-white tracking-widest text-center">{tool.title}</h3>
                  <div className="mt-1.5 w-4 h-0.5 bg-white/10"></div>
              </div>

              {/* HOVER/ACTIVE STATE: Overlay with Description & Button */}
              <div className="absolute inset-0 bg-bunker-950/95 backdrop-blur-md flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-center z-10">
                  <div className={`hidden md:block mb-2 ${themeColor}`}>
                     <tool.categoryIcon size={16} />
                  </div>
                  
                  <h3 className="hidden md:block text-xs font-bold text-white mb-2 font-tech">{tool.title}</h3>
                  
                  <p className="text-slate-400 text-[9px] md:text-[10px] mb-2 md:mb-3 font-light leading-snug line-clamp-4">
                      {tool.desc}
                  </p>

                  <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`relative px-3 py-1.5 bg-transparent border ${themeBorder} ${themeColor} font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-bunker-950 hover:border-white transition-all clip-corner flex items-center gap-1`}
                  >
                      {/* @ts-ignore */}
                      {t.tools.openTool}
                      <ExternalLink size={10} />
                  </a>
              </div>
            </div>
          );
        })}

        {/* Placeholder for future tools */}
        <div className="relative aspect-square bg-bunker-950/30 border border-dashed border-white/10 flex flex-col items-center justify-center p-4 opacity-50 hover:opacity-100 transition-opacity">
            <Activity className="text-slate-700 mb-2 w-5 h-5 md:w-6 md:h-6" />
            <span className="font-mono text-[9px] md:text-[10px] text-slate-600 uppercase tracking-widest text-center">Dev_Mode</span>
            <span className="hidden md:block text-[9px] text-slate-700 mt-2">More tools incoming...</span>
        </div>

      </div>
    </div>
  );
};
