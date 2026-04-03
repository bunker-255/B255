
import React from 'react';
import { TEAM_LIST, PARTNERS_LIST } from '../constants';
import { Shield, Target, Zap, Lock, Network, Building2 } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <SEO pageKey="home" /> {/* Reusing home seo or add about if needed */}
      
      {/* Intro Mission */}
      <section className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
        <div className="inline-block px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono mb-6 w-fit rounded animate-pulse">
             MISSION_STATEMENT
        </div>
        <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-8 md:mb-10 leading-tight">
          {t.about.missionTitle}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto font-light">
          {t.about.missionDesc}
        </p>
      </section>

      {/* Story / Philosophy & Cooperative */}
      <section className="mb-20 md:mb-32 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
               <div className="order-2 md:order-1">
                   {/* @ts-ignore */}
                   <h2 className="text-2xl md:text-4xl font-tech font-bold text-white mb-6">{t.about.storyTitle}</h2>
                   {/* @ts-ignore */}
                   <p className="text-slate-400 text-lg leading-relaxed mb-8">{t.about.storyDesc}</p>

                   {/* Cooperative Block */}
                   <div className="bg-bunker-900/50 p-6 md:p-8 border-l-2 border-neon-green relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                           <Network size={100} />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                           <Network className="text-neon-green" size={20} />
                           {/* @ts-ignore */}
                           {t.about.coopTitle}
                       </h3>
                       {/* @ts-ignore */}
                       <p className="text-slate-300 text-sm leading-relaxed relative z-10">{t.about.coopDesc}</p>
                   </div>
               </div>
               <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] border border-white/10 bg-bunker-900 overflow-hidden clip-corner">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Bunker Lab" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
               </div>
          </div>
      </section>

      {/* Values */}
      <section className="mb-20 md:mb-32">
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-white uppercase tracking-wider">CORE_VALUES</h2>
            <div className="h-px flex-grow bg-white/10"></div>
        </div>
        
        {/* FORCE GRID-COLS-2 MINIMUM */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-bunker-900 p-5 md:p-10 border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border border-white/10 flex items-center justify-center text-emerald-500 mb-6 shadow-inner clip-corner">
              <Shield size={20} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{t.about.values.reliability.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t.about.values.reliability.desc}</p>
          </div>
          
          <div className="bg-bunker-900 p-5 md:p-10 border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border border-white/10 flex items-center justify-center text-emerald-500 mb-6 shadow-inner clip-corner">
              <Target size={20} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{t.about.values.result.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t.about.values.result.desc}</p>
          </div>
          
          <div className="bg-bunker-900 p-5 md:p-10 border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border border-white/10 flex items-center justify-center text-emerald-500 mb-6 shadow-inner clip-corner">
              <Zap size={20} className="md:w-7 md:h-7" />
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{t.about.values.innovation.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t.about.values.innovation.desc}</p>
          </div>

          <div className="bg-bunker-900 p-5 md:p-10 border border-white/5 relative group hover:border-emerald-500/30 transition-all">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border border-white/10 flex items-center justify-center text-emerald-500 mb-6 shadow-inner clip-corner">
              <Lock size={20} className="md:w-7 md:h-7" />
            </div>
             {/* @ts-ignore */}
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{t.about.values.security.title}</h3>
             {/* @ts-ignore */}
            <p className="text-slate-400 text-sm leading-relaxed font-light">{t.about.values.security.desc}</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
                 <div className="flex items-center gap-2 text-neon-green font-mono text-xs mb-2">
                    <Building2 size={14} />
                    <span>ECOSYSTEM_NODES</span>
                </div>
                {/* @ts-ignore */}
                <h2 className="text-2xl md:text-3xl font-tech font-bold text-white uppercase tracking-wider">{t.about.partnersTitle}</h2>
            </div>
            {/* @ts-ignore */}
            <p className="text-slate-400 text-sm font-light max-w-md text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-white/10 pl-4 md:pr-4 md:pl-0">{t.about.partnersDesc}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PARTNERS_LIST.map((partner, idx) => (
                <div key={idx} className="group bg-bunker-900 border border-white/5 hover:border-neon-green/30 p-6 flex flex-col items-center justify-center text-center transition-all clip-corner relative overflow-hidden">
                    <div className="w-full aspect-[3/2] bg-black/20 mb-4 flex items-center justify-center relative">
                        {/* Placeholder Logo visual */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <span className="font-tech text-xl font-bold text-white/20 group-hover:text-neon-green/50 transition-colors uppercase">{partner.id}</span>
                    </div>
                    {/* @ts-ignore */}
                    <h3 className="text-sm md:text-base font-bold text-white mb-2 font-mono group-hover:text-neon-green transition-colors">{t.about.partners[partner.id].name}</h3>
                    {/* @ts-ignore */}
                    <p className="text-xs text-slate-500 font-light leading-snug">{t.about.partners[partner.id].desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-tech font-bold text-white uppercase tracking-wider">{t.about.teamTitle}</h2>
            <div className="h-px flex-grow bg-white/10"></div>
        </div>
        
        {/* FORCE GRID-COLS-2 MINIMUM */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {TEAM_LIST.map((member, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start bg-bunker-900 p-4 md:p-8 border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="relative shrink-0 w-16 h-16 md:w-32 md:h-32">
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-md"></div>
                  <img src={member.image} alt="Team Member" className="w-full h-full rounded-full object-cover border border-emerald-500/30 relative z-10" />
              </div>
              <div className="flex-grow">
                {/* @ts-ignore */}
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 font-tech">{t.about.team[member.id].name}</h3>
                {/* @ts-ignore */}
                <p className="text-emerald-400 text-[10px] md:text-xs font-mono uppercase tracking-widest mb-3 md:mb-4">{t.about.team[member.id].role}</p>
                {/* @ts-ignore */}
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light border-l border-white/10 pl-3 md:pl-4">{t.about.team[member.id].bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
