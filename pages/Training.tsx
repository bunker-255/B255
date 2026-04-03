
import React from 'react';
import { BookOpen, Users, Award, Calendar, Clock, ChevronRight } from 'lucide-react';
import { COURSES_LIST } from '../constants';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';

export const Training: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <SEO pageKey="training" />
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-block px-3 py-1 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-mono mb-6 w-fit rounded">
             ACADEMY_ACCESS: GRANTED
          </div>
          <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-6 leading-none">
            {t.training.title}
          </h1>
          <p className="text-lg text-slate-400 mb-10 font-light border-l-2 border-white/10 pl-6">
            {t.training.subtitle}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="bg-bunker-900/50 p-4 border border-white/10 backdrop-blur-sm">
                <Users className="text-neon-green mb-3" size={24} /> 
                <span className="text-sm font-mono text-slate-300">Expert Mentorship</span>
             </div>
             <div className="bg-bunker-900/50 p-4 border border-white/10 backdrop-blur-sm">
                <Award className="text-neon-cyan mb-3" size={24} /> 
                <span className="text-sm font-mono text-slate-300">Certification</span>
             </div>
             <div className="bg-bunker-900/50 p-4 border border-white/10 backdrop-blur-sm">
                <BookOpen className="text-neon-purple mb-3" size={24} /> 
                <span className="text-sm font-mono text-slate-300">Real Cases</span>
             </div>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
           <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-neon-purple/20 to-transparent blur-[80px]"></div>
           <div className="relative z-10 border border-white/20 p-2 clip-corner bg-bunker-950/50 backdrop-blur-md">
             <img 
                src="https://picsum.photos/800/600?random=20" 
                alt="Training" 
                className="w-full grayscale contrast-125 opacity-80" 
             />
             <div className="absolute bottom-6 right-6 flex gap-1">
                <div className="w-2 h-2 bg-neon-green"></div>
                <div className="w-2 h-2 bg-neon-green/50"></div>
                <div className="w-2 h-2 bg-neon-green/20"></div>
             </div>
           </div>
        </div>
      </div>

      <h2 className="text-2xl font-mono uppercase tracking-widest text-neon-green mb-8 flex items-center gap-4">
        <span className="w-8 h-px bg-neon-green"></span>
        Available Protocols
      </h2>
      
      {/* FORCE GRID-COLS-2 MINIMUM */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-24">
        {COURSES_LIST.map((course, idx) => (
          <div key={course.id} className="relative group bg-bunker-900 border border-white/10 hover:border-neon-green/50 transition-all flex flex-col overflow-hidden">
            {/* Index Number BG */}
            <div className="absolute -right-4 -top-6 text-[80px] md:text-[120px] font-tech font-bold text-white/5 select-none pointer-events-none group-hover:text-neon-green/5 transition-colors">
                {idx + 1}
            </div>

            <div className="p-5 md:p-10 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                 {/* @ts-ignore */}
                 <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-widest px-2 py-1 border border-white/20 text-slate-400 uppercase">{t.training.levels[course.levelKey]}</span>
                 <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-neon-green group-hover:shadow-[0_0_10px_rgba(0,255,163,0.8)] transition-all"></div>
              </div>
              
              {/* @ts-ignore */}
              <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-neon-green transition-colors">{t.training.courses[course.id].title}</h3>
              {/* @ts-ignore */}
              <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-8 flex-grow leading-relaxed font-light">{t.training.courses[course.id].desc}</p>
              
              <div className="flex items-center justify-between text-[10px] md:text-xs font-mono text-slate-500 mb-4 md:mb-6 pt-4 md:pt-6 border-t border-white/5">
                <div className="flex items-center gap-2"><Clock size={14} className="text-neon-cyan"/> {t.training.duration}: 6 WEEKS</div>
              </div>

              <Link to="/contact" className="w-full flex items-center justify-between px-3 md:px-4 py-3 md:py-4 bg-white/5 text-white hover:bg-neon-green hover:text-bunker-950 transition-all font-mono text-[10px] md:text-xs uppercase tracking-widest group/btn">
                 {t.training.enroll}
                 <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="relative rounded-xl overflow-hidden border border-white/10 bg-bunker-900 p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-tech font-bold text-white mb-4 uppercase">{t.training.corpTitle}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 font-light">
            {t.training.corpDesc}
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 border border-neon-green text-neon-green font-mono uppercase tracking-widest text-sm hover:bg-neon-green hover:text-bunker-950 transition-all clip-corner">
            {t.training.corpButton}
          </Link>
        </div>
      </div>
    </div>
  );
};
