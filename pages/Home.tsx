
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Siren, Wrench, ShieldAlert, Waves, ExternalLink, Activity, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { ServicesCarousel } from '../components/ServicesCarousel';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const isHe = language === 'he';
  const isRu = language === 'ru';
  const newToolsBannerLabel = isHe ? 'כלים חדשים' : isRu ? 'Новые инструменты' : 'New Tools';
  const newToolsBannerTitle = isHe ? 'כלים חינמיים ללא הגבלה' : isRu ? 'Бесплатные инструменты без ограничений' : 'Free Tools Without Limits';
  const newToolsBannerDesc = isHe ? 'גלה את הכלים החדשים שלנו שנוצרו כדי לעזור לעסק שלך לצמוח, לגמרי בחינם וללא הגבלות שימוש.' : isRu ? 'Откройте для себя наши новые инструменты, созданные для помощи вашему бизнесу, абсолютно бесплатно и без ограничений.' : 'Discover our new tools built to help your business grow, completely free and with no usage limits.';
  const exploreToolsLabel = isHe ? 'גלה כלים' : isRu ? 'Все инструменты' : 'Explore Tools';

  // Schema for AI Agents (WebSite & Organization with Subdomains)
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "BUNKER-255 Ecosystem",
        "url": "https://bunker-255.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://bunker-255.com/services?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "name": "BUNKER-255",
        "url": "https://bunker-255.com",
        "logo": "https://bunker-255.com/og-image.svg",
        "description": t.hero.subtitle,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+972-50-483-4744",
          "contactType": "customer service",
          "availableLanguage": ["en", "he", "ru"]
        },
        "department": [
            {
                "@type": "Organization",
                "name": "OnTech by BUNKER-255",
                "url": "https://ontech.bunker-255.com",
                "description": "Hardware division: CCTV, Networking, and Smart Home installation."
            },
            {
                "@type": "Organization",
                "name": "BUNKER Academy",
                "url": "https://academy.bunker-255.com",
                "description": "Coding academy for entrepreneurs and developers."
            },
            {
                "@type": "SoftwareApplication",
                "name": "WaveSIL",
                "url": "https://surf.bunker-255.com",
                "description": "Sea condition analysis and wave forecasting tool."
            },
            {
                "@type": "Organization",
                "name": "BUNKER Dashboard",
                "url": "https://dashboard.bunker-255.com",
                "description": "Client management system and SaaS tools."
            }
        ]
      }
    ]
  };

  // Duplicate tools list for Home page preview
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
    }
  ];

  return (
    <>
      <SEO pageKey="home" schema={homeSchema} />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green font-mono text-xs mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            {t.hero.label}
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-tech font-bold text-white mb-8 leading-none tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4 md:mr-8 rtl:mr-0 md:rtl:mr-0 rtl:ml-4 md:rtl:ml-8 last:mr-0 rtl:last:ml-0">
                {i === 1 ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">{word}</span> : word}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up mb-20" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact" className="px-8 py-4 bg-neon-green text-bunker-950 font-bold font-mono uppercase tracking-widest clip-corner hover:bg-white transition-all w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </Link>
            <Link to="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-mono uppercase tracking-widest hover:border-neon-green hover:text-neon-green transition-all w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Free Tools Announcement Banner */}
      <section className="py-12 bg-neon-green/5 border-y border-neon-green/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left rtl:sm:text-right gap-6">
              <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center border border-neon-green/30 shrink-0 shadow-[0_0_30px_rgba(0,255,0,0.1)]">
                <Wrench className="w-8 h-8 text-neon-green" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-neon-green text-bunker-950 font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-bunker-950 animate-pulse"></span>
                  {newToolsBannerLabel}
                </div>
                <h3 className="text-2xl md:text-3xl font-tech font-bold text-white mb-2">{newToolsBannerTitle}</h3>
                <p className="text-slate-400 max-w-xl">{newToolsBannerDesc}</p>
              </div>
            </div>
            <Link to="/tools" className="px-8 py-4 bg-neon-green text-bunker-950 font-bold font-mono text-sm uppercase tracking-widest clip-corner hover:bg-white transition-all whitespace-nowrap shrink-0">
              {exploreToolsLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-bunker-950 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-tech font-bold text-white mb-4">{t.home.servicesTitle}</h2>
                <p className="text-slate-400 max-w-md">{t.home.servicesSubtitle}</p>
            </div>
            <Link to="/services" className="text-neon-green font-mono text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
                {t.services.categories.all} <ArrowRight size={14} />
            </Link>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* Tools Section (New) */}
      <section className="py-20 bg-bunker-900 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                 <div>
                    <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-2">
                        <Wrench size={14} />
                        <span>BUNKER_INTERNAL_TOOLS</span>
                    </div>
                    {/* @ts-ignore */}
                    <h2 className="text-3xl md:text-4xl font-tech font-bold text-white">{t.tools.title}</h2>
                </div>
                {/* @ts-ignore */}
                <Link to="/tools" className="text-slate-400 hover:text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                    {/* @ts-ignore */}
                    View All Tools <ArrowRight size={14} />
                </Link>
            </div>

            {/* Tools Grid - Strict Square Layout (Dense for Desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {toolsList.map((tool) => {
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
                        className={`group relative aspect-square bg-bunker-950 border border-white/10 ${themeHoverBorder} transition-all duration-300 clip-corner overflow-hidden`}
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
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-bunker-900 border border-white/5 flex items-center justify-center mb-2 md:mb-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${themeColor} group-hover:scale-110 transition-transform duration-500`}>
                                <tool.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xs md:text-sm font-tech font-bold text-white tracking-widest text-center px-1">{tool.title}</h3>
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

                {/* Placeholder */}
                <div className="relative aspect-square bg-bunker-950/30 border border-dashed border-white/10 flex flex-col items-center justify-center p-4 opacity-50 hover:opacity-100 transition-opacity">
                    <Activity className="text-slate-700 mb-2 w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-mono text-[9px] md:text-[10px] text-slate-600 uppercase tracking-widest text-center">Dev_Mode</span>
                </div>
            </div>
        </div>
      </section>

      {/* Academy Banner (Purple - Compact & Blended) */}
      <section className="py-12 relative overflow-hidden">
         {/* Ambient Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-32 bg-purple-900/20 blur-[100px] pointer-events-none"></div>

         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="relative group">
                 {/* Horizontal Strip Design with Faded Edges */}
                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                 <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
                 
                 <div className="bg-gradient-to-r from-transparent via-purple-950/40 to-transparent px-4 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 relative">
                    
                    {/* Left: Text Info */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-neon-purple font-mono text-[10px] uppercase tracking-wider">
                                <GraduationCap size={12} />
                                {/* @ts-ignore */}
                                <span>{t.home.academyBanner.label}</span>
                            </span>
                        </div>
                        
                        {/* @ts-ignore */}
                        <h2 className="text-2xl md:text-4xl font-tech font-bold text-white mb-2 leading-tight tracking-tight">
                            {/* @ts-ignore */}
                            {t.home.academyBanner.title}
                        </h2>
                        {/* @ts-ignore */}
                        <p className="text-sm text-purple-200/70 max-w-2xl font-light leading-relaxed">
                            {/* @ts-ignore */}
                            {t.home.academyBanner.subtitle}
                        </p>
                    </div>

                    {/* Right: CTA */}
                    <div className="flex items-center gap-6 shrink-0 z-10">
                         {/* Icon Decoration */}
                        <div className="hidden lg:block relative">
                             <div className="absolute inset-0 bg-purple-500/20 blur-xl"></div>
                             <GraduationCap size={40} className="text-purple-400 relative z-10 opacity-80" strokeWidth={1} />
                        </div>

                        <a 
                            href="https://academy.bunker-255.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold font-mono text-xs uppercase tracking-widest transition-all clip-corner shadow-[0_0_15px_rgba(188,19,254,0.2)] hover:shadow-[0_0_25px_rgba(188,19,254,0.4)] group/btn"
                        >
                            {/* @ts-ignore */}
                            {t.home.academyBanner.cta}
                            <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* About/CTA */}
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-gradient-to-r from-bunker-900 to-bunker-950 border border-white/10 p-8 md:p-16 text-center max-w-4xl mx-auto rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                
                <h2 className="text-3xl md:text-5xl font-tech font-bold text-white mb-6">{t.home.ctaTitle}</h2>
                <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">{t.home.ctaDesc}</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link to="/contact" className="px-8 py-4 bg-neon-green text-bunker-950 font-bold font-mono uppercase tracking-widest clip-corner hover:bg-white transition-all">
                        {t.home.ctaButton}
                    </Link>
                     <Link to="/about" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-mono uppercase tracking-widest hover:border-neon-green hover:text-neon-green transition-all">
                        {t.home.aboutLink}
                    </Link>
                </div>
            </div>
         </div>
      </section>
    </>
  );
};
