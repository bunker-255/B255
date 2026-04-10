import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Zap, Shield, Cpu, ArrowRight, Siren } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { SERVICES_LIST } from '../constants';
import { SEO } from '../components/SEO';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  // Find service metadata
  const serviceMeta = SERVICES_LIST.find(s => s.id === id);

  // Redirect if not found
  useEffect(() => {
    if (!serviceMeta) {
      navigate('/services');
    }
  }, [serviceMeta, navigate]);

  if (!serviceMeta) return null;

  // @ts-ignore
  const content = t.services.items[serviceMeta.id] || {};
  // Cast to any to avoid TS errors when properties might be missing in fallback or type inference is strict
  const detail = t.serviceDetail as any || {};
  
  // Determine color theme based on category
  const getThemeColor = () => {
    switch (serviceMeta.category) {
      case 'sos': return 'neon-red';
      case 'web': return 'neon-cyan';
      default: return 'neon-green';
    }
  };
  
  const theme = getThemeColor();
  const themeColorClass = `text-${theme}`;
  const themeBorderClass = `border-${theme}`;
  const themeBgClass = `bg-${theme}`;

  // Schema for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": content.title,
    "description": content.fullDesc || content.desc,
    "provider": {
      "@type": "Organization",
      "name": "BUNKER-255"
    },
    "serviceType": serviceMeta.category
  };

  return (
    <div className="min-h-screen pt-10 pb-20">
      <SEO title={`${content.title} | BUNKER-255`} description={content.desc} schema={serviceSchema} />

      {/* Hero Header */}
      <div className="relative border-b border-white/10 bg-bunker-900/50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        {/* Decorative lighting */}
        <div className={`absolute top-0 right-0 w-[50vh] h-[50vh] ${themeBgClass}/5 rounded-full blur-[100px] pointer-events-none`}></div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
            <ArrowLeft size={14} className={language === 'he' ? 'rotate-180' : ''} />
            {t.nav.services} // {serviceMeta.category}
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 border ${themeBorderClass}/30 ${themeBgClass}/10 ${themeColorClass} font-mono text-xs uppercase tracking-wider rounded`}>
                <Cpu size={14} />
                <span>Service_Module: {id}</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-tech font-bold text-white leading-none mb-6">
                {content.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
                {content.desc}
              </p>
            </div>
            
            <div className="hidden md:block">
               <serviceMeta.icon size={120} className={`opacity-20 ${themeColorClass}`} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* System Overview */}
            <section>
              <h2 className="text-2xl font-mono text-white mb-6 flex items-center gap-3 uppercase tracking-wider">
                <span className={`w-2 h-8 ${themeBgClass}`}></span>
                {detail.systemOverview}
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed text-sm md:text-base">
                 <p>{content.fullDesc || content.desc}</p>
                 <p className="mt-4">
                   {detail.approach}
                 </p>
              </div>
            </section>

            {/* Technical Specs / Features */}
            <section>
              <h2 className="text-2xl font-mono text-white mb-8 flex items-center gap-3 uppercase tracking-wider">
                <span className={`w-2 h-8 ${themeBgClass}`}></span>
                {detail.techSpecs}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.features ? (
                  content.features.map((feature: string, idx: number) => (
                    <div key={idx} className="bg-bunker-950 border border-white/5 p-4 flex items-start gap-4 hover:border-white/20 transition-colors clip-corner">
                      <div className={`mt-1 p-1 rounded-full ${themeBgClass}/10 ${themeColorClass}`}>
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-300 text-sm font-light">{feature}</span>
                    </div>
                  ))
                ) : (
                  // Fallback features if translation missing
                  [1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-bunker-950 border border-white/5 p-4 flex items-start gap-4 animate-pulse">
                      <div className="w-4 h-4 rounded-full bg-white/10"></div>
                      <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Process Visual */}
            <section className="bg-bunker-900/50 p-8 border border-white/5 clip-corner relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Shield size={100} />
               </div>
               <h3 className="text-lg font-bold text-white mb-6 font-mono uppercase">{detail.executionProtocol}</h3>
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
                  {/* Connector Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10 -translate-y-1/2"></div>
                  
                  {[
                    { step: '01', label: detail.steps?.analysis },
                    { step: '02', label: detail.steps?.development },
                    { step: '03', label: detail.steps?.deployment }
                  ].map((item, i) => (
                    <div key={i} className="flex md:flex-col items-center gap-4 bg-bunker-900 md:bg-transparent p-2 rounded md:p-0 z-10 w-full md:w-auto">
                        <div className={`w-10 h-10 md:w-12 md:h-12 ${themeBgClass} text-bunker-950 font-bold font-mono flex items-center justify-center rounded clip-corner shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                          {item.step}
                        </div>
                        <span className="text-sm font-mono text-slate-300 uppercase tracking-wider bg-bunker-950 px-2 py-1">{item.label}</span>
                    </div>
                  ))}
               </div>
            </section>

          </div>

          {/* Right Column: CTA & Stats */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 space-y-6">
                
                {/* Order Card */}
                <div className={`p-1 bg-gradient-to-br from-white/10 to-transparent clip-corner`}>
                   <div className="bg-bunker-950 p-6 md:p-8 clip-corner relative overflow-hidden group">
                      <div className={`absolute top-0 left-0 w-full h-1 ${themeBgClass}`}></div>
                      
                      <h3 className="text-2xl font-tech font-bold text-white mb-2">{detail.orderCard?.title}</h3>
                      <p className="text-slate-500 text-xs font-mono mb-8">
                        {detail.orderCard?.subtitle}
                      </p>

                      <div className="space-y-4 mb-8">
                         <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                           <span className="text-slate-400">{detail.orderCard?.category}</span>
                           <span className={`${themeColorClass} font-mono uppercase`}>{serviceMeta.category}</span>
                         </div>
                         <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                           <span className="text-slate-400">{detail.orderCard?.responseTime}</span>
                           <span className="text-white font-mono">
                             {serviceMeta.category === 'sos' ? detail.orderCard?.responseImmediate : detail.orderCard?.responseStandard}
                           </span>
                         </div>
                         <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                           <span className="text-slate-400">{detail.orderCard?.securityLevel}</span>
                           <span className="text-white font-mono">{detail.orderCard?.securityMax}</span>
                         </div>
                      </div>

                      <Link 
                        to={`/contact?type=service&id=${id}`} 
                        className={`block w-full py-4 ${themeBgClass} text-bunker-950 font-bold font-mono text-center uppercase tracking-widest hover:bg-white transition-colors clip-corner flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}
                      >
                         <Zap size={16} fill="currentColor" />
                         {detail.orderCard?.startProject}
                      </Link>
                      
                      {serviceMeta.category === 'sos' && (
                        <div className="mt-4 flex items-center gap-2 justify-center text-neon-red animate-pulse">
                           <Siren size={14} />
                           <span className="text-[10px] font-mono uppercase tracking-widest">{detail.orderCard?.emergency}</span>
                        </div>
                      )}
                   </div>
                </div>

                {/* Need Help? */}
                <div className="border border-white/5 p-6 bg-bunker-900/30 clip-corner">
                   <h4 className="text-white font-bold mb-2">{detail.helpCard?.title}</h4>
                   <p className="text-slate-400 text-xs mb-4">{detail.helpCard?.desc}</p>
                   <Link to="/contact" className="text-sm text-white hover:text-neon-green flex items-center gap-2">
                     {detail.helpCard?.cta} <ArrowRight size={14} />
                   </Link>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
};