
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Siren } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { ServicesCarousel } from '../components/ServicesCarousel';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO pageKey="home" />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-green font-mono text-xs mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            {t.hero.label}
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-tech font-bold text-white mb-8 leading-none tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block ltr:mr-4 ltr:md:mr-8 rtl:ml-4 rtl:md:ml-8 last:mr-0 last:ml-0">
                {i === 1 ? <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">{word}</span> : word}
              </span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact" className="px-8 py-4 bg-neon-green text-bunker-950 font-bold font-mono uppercase tracking-widest clip-corner hover:bg-white transition-all w-full sm:w-auto">
              {t.hero.ctaPrimary}
            </Link>
            <Link to="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold font-mono uppercase tracking-widest hover:border-neon-green hover:text-neon-green transition-all w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Stats - Grid Cols 2 on Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
                { label: t.hero.stats.time, val: '40%' },
                { label: t.hero.stats.projects, val: '150+' },
                { label: t.hero.stats.exp, val: '5+' },
                { label: t.hero.stats.clients, val: '80+' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-tech font-bold text-white mb-2">{stat.val}</div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
      <section className="py-20 bg-bunker-950 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-tech font-bold text-white mb-4">{t.home.servicesTitle}</h2>
                <p className="text-slate-400 max-w-md">{t.home.servicesSubtitle}</p>
            </div>
            <Link to="/services" className="text-neon-green font-mono text-sm uppercase tracking-widest hover:underline flex items-center gap-2">
                {t.services.categories.all} <ArrowRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>
          <ServicesCarousel />
        </div>
      </section>

      {/* Process Section - Force 2 Columns Minimum */}
      <section className="py-20 bg-bunker-900 border-y border-white/5">
         <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-tech font-bold text-white mb-4">{t.home.processTitle}</h2>
                <p className="text-slate-400 max-w-xl mx-auto">{t.home.processSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {/* Dev Mode */}
                <div className="bg-bunker-950 p-4 md:p-8 border border-white/10 relative group hover:border-neon-green/30 transition-all clip-corner">
                    <div className="mb-6 flex justify-between items-start">
                         <div className="p-2 border border-neon-green/20 rounded bg-neon-green/5">
                            <Code className="text-neon-green w-5 h-5 md:w-8 md:h-8" />
                         </div>
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-6 rtl:pl-4">{t.home.modes.dev.title}</h3>
                    <div className="space-y-4 md:space-y-6 relative ltr:border-l rtl:border-r border-white/10 ltr:pl-4 ltr:md:pl-6 rtl:pr-4 rtl:md:pr-6 ltr:ml-1 ltr:md:ml-2 rtl:mr-1 rtl:md:mr-2">
                        {/* @ts-ignore */}
                        {t.home.modes.dev.steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute ltr:-left-[22px] ltr:md:-left-[29px] rtl:-right-[22px] rtl:md:-right-[29px] top-1.5 w-3 h-3 bg-bunker-900 border border-neon-green rounded-full group-hover:bg-neon-green transition-colors"></div>
                                <span className="text-[9px] md:text-xs font-mono text-slate-500 block mb-1">STEP 0{idx+1}</span>
                                <p className="text-xs md:text-sm text-slate-300 font-medium">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Training Mode */}
                <div className="bg-bunker-950 p-4 md:p-8 border border-white/10 relative group hover:border-neon-purple/50 transition-all clip-corner">
                    <div className="mb-6 flex justify-between items-start">
                         <div className="p-2 border border-neon-purple/20 rounded bg-neon-purple/5">
                            <BookOpen className="text-neon-purple w-5 h-5 md:w-8 md:h-8" />
                         </div>
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-6 rtl:pl-4">{t.home.modes.training.title}</h3>
                    <div className="space-y-4 md:space-y-6 relative ltr:border-l rtl:border-r border-white/10 ltr:pl-4 ltr:md:pl-6 rtl:pr-4 rtl:md:pr-6 ltr:ml-1 ltr:md:ml-2 rtl:mr-1 rtl:md:mr-2">
                         {/* @ts-ignore */}
                        {t.home.modes.training.steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute ltr:-left-[22px] ltr:md:-left-[29px] rtl:-right-[22px] rtl:md:-right-[29px] top-1.5 w-3 h-3 bg-bunker-900 border border-neon-purple rounded-full group-hover:bg-neon-purple transition-colors"></div>
                                <span className="text-[9px] md:text-xs font-mono text-slate-500 block mb-1">PHASE 0{idx+1}</span>
                                <p className="text-xs md:text-sm text-slate-300 font-medium">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* SOS Mode */}
                 <div className="bg-bunker-950 p-4 md:p-8 border border-white/10 relative group hover:border-neon-red/50 transition-all clip-corner col-span-2 md:col-span-1">
                    <div className="mb-6 flex justify-between items-start">
                         <div className="p-2 border border-neon-red/20 rounded bg-neon-red/5">
                            <Siren className="text-neon-red w-5 h-5 md:w-8 md:h-8" />
                         </div>
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-6 rtl:pl-4">{t.home.modes.sos.title}</h3>
                    <div className="space-y-4 md:space-y-6 relative ltr:border-l rtl:border-r border-white/10 ltr:pl-4 ltr:md:pl-6 rtl:pr-4 rtl:md:pr-6 ltr:ml-1 ltr:md:ml-2 rtl:mr-1 rtl:md:mr-2">
                         {/* @ts-ignore */}
                        {t.home.modes.sos.steps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute ltr:-left-[22px] ltr:md:-left-[29px] rtl:-right-[22px] rtl:md:-right-[29px] top-1.5 w-3 h-3 bg-bunker-900 border border-neon-red rounded-full group-hover:bg-neon-red transition-colors animate-pulse"></div>
                                <span className="text-[9px] md:text-xs font-mono text-slate-500 block mb-1">ALERT 0{idx+1}</span>
                                <p className="text-xs md:text-sm text-slate-300 font-medium">{step}</p>
                            </div>
                        ))}
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
