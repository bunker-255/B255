import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { Terminal, Download, Zap, BookOpen, Search, Copy, Check, X } from 'lucide-react';
import { SEO } from '../components/SEO';

export const CliTools: React.FC = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'he';
  const [copiedLinux, setCopiedLinux] = useState(false);
  const [copiedWindows, setCopiedWindows] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedTool]);
  
  // Safe default just in case
  const data = (t as any).cliTools || {
    title: 'CLI Toolchain',
    subtitle: 'Powerful command-line utilities for developers.',
    projector: {
      name: 'Projector',
      slogan: 'The Ultimate Bridge for Gemini App-Build.',
      desc: 'Automated tool for instant web project deployment preparation. Turns raw export from Gemini App-Build into a ready-to-publish bundle in one command.',
      workflowTitle: 'Workflow',
      installTitle: 'Installation',
      usageTitle: 'Usage',
      usage: {
        auto: 'Auto-build latest zip from Downloads.',
        specific: 'Use specific zip file.',
        config: 'Check your paths configuration.'
      }
    },
    commands: {
      linux: 'curl -sSL https://bunker-255.com/cli-tools/projector/install.sh | bash',
      windows: 'iwr -useb https://bunker-255.com/cli-tools/projector/install.ps1 | iex'
    }
  };

  const copyToClipboard = (text: string, isLinux: boolean) => {
    navigator.clipboard.writeText(text);
    if (isLinux) {
      setCopiedLinux(true);
      setTimeout(() => setCopiedLinux(false), 2000);
    } else {
      setCopiedWindows(true);
      setTimeout(() => setCopiedWindows(false), 2000);
    }
  };

  return (
    <>
      <SEO 
        title={`${data.title} | BUNKER-255`}
        description={data.subtitle}
      />
      
      <div className="pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-xs font-mono uppercase tracking-widest mb-4">
               <Terminal size={12} />
               CLI_ENVIRONMENT
             </div>
            <h1 className="text-3xl md:text-5xl font-tech text-white font-bold mb-4 uppercase tracking-wider">
              {data.title}
            </h1>
            <p className="text-slate-400 font-mono text-sm max-w-2xl">
              {data.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Selection Grid */}
            <div 
              onClick={() => setSelectedTool('projector')}
              className={`p-6 border transition-all cursor-pointer group bg-bunker-900 border-white/10 hover:border-neon-green/50 hover:bg-neon-green/5 flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-bunker-950 border border-white/10 group-hover:border-neon-green/30 transition-colors">
                  <Zap size={24} className="text-neon-green" />
                </div>
                <div>
                  <h3 className="font-tech text-xl text-white font-bold">{data.projector.name}</h3>
                  <span className="text-[10px] font-mono text-neon-green uppercase tracking-widest bg-neon-green/10 px-2 py-0.5 rounded-full inline-block mt-1">v1.2.0</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm font-sans mb-0 flex-1">
                {data.projector.slogan}
              </p>
            </div>

            {/* Placeholder for future tools */}
            <div className="p-6 border border-white/5 bg-bunker-900/50 opacity-50 grayscale select-none flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center bg-bunker-950 border border-white/10">
                  <Search size={24} className="text-slate-600" />
                </div>
                <div>
                  <h3 className="font-tech text-xl text-slate-500 font-bold">Observer</h3>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full inline-block mt-1">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Details Modal */}
      {selectedTool === 'projector' && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-bunker-950/80 backdrop-blur-sm"
            onClick={() => setSelectedTool(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bunker-900 border border-white/10 shadow-2xl p-6 md:p-8 animate-fade-in" dir={isRtl ? 'rtl' : 'ltr'}>
            <button 
              onClick={() => setSelectedTool(null)}
              className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} p-2 text-slate-400 hover:text-white bg-bunker-950 border border-white/10 hover:border-white/30 rounded-full transition-all z-20`}
            >
              <X size={20} />
            </button>

            <div className="absolute top-0 right-0 p-32 bg-neon-green/5 blur-3xl rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mt-4 md:mt-0">
              <h2 className="text-2xl font-tech text-white font-bold mb-2">
                {data.projector.name}
              </h2>
              <p className="text-neon-green text-sm font-mono mb-6 pb-6 border-b border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.02)]">
                {data.projector.desc}
              </p>

              <div className="mb-10">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-300 mb-4">
                  <Terminal size={14} className="text-neon-green" />
                  {data.projector.workflowTitle}
                </h3>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs">
                  <span className="px-3 py-1 bg-bunker-950 border border-white/10 text-white rounded whitespace-nowrap">Scan ZIP</span>
                  <span className="text-slate-500">➔</span>
                  <span className="px-3 py-1 bg-bunker-950 border border-white/10 text-white rounded whitespace-nowrap">Unpack</span>
                  <span className="text-slate-500">➔</span>
                  <span className="px-3 py-1 bg-bunker-950 border border-white/10 text-white rounded whitespace-nowrap">NPM Install</span>
                  <span className="text-slate-500">➔</span>
                  <span className="px-3 py-1 bg-bunker-950 border border-white/10 text-white rounded whitespace-nowrap">Build</span>
                  <span className="text-slate-500">➔</span>
                  <span className="px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded whitespace-nowrap">Repack Deploy</span>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-300 mb-4">
                  <Download size={14} className="text-neon-green" />
                  {data.projector.installTitle}
                </h3>
                
                <div className="space-y-4" dir="ltr">
                  <div>
                    <p className="text-xs font-mono text-slate-400 mb-2">Linux / macOS / Termux:</p>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 w-8 bg-bunker-950 border-r border-white/10 flex items-center justify-center text-slate-600 font-mono text-xs select-none pointer-events-none">
                        $
                      </div>
                      <pre className="p-4 pl-12 bg-bunker-950/50 border border-white/10 text-slate-300 font-mono text-sm overflow-x-auto whitespace-pre">
                        {data.commands.linux}
                      </pre>
                      <button 
                        onClick={() => copyToClipboard(data.commands.linux, true)}
                        className="absolute top-2 right-2 p-2 bg-bunker-900 border border-white/10 hover:border-neon-green/50 text-slate-400 hover:text-neon-green transition-all"
                        aria-label="Copy code"
                      >
                        {copiedLinux ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-400 mb-2">Windows (PowerShell):</p>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 w-8 bg-bunker-950 border-r border-white/10 flex items-center justify-center text-slate-600 font-mono text-xs select-none pointer-events-none">
                        &gt;
                      </div>
                      <pre className="p-4 pl-12 bg-bunker-950/50 border border-white/10 text-slate-300 font-mono text-sm overflow-x-auto whitespace-pre">
                        {data.commands.windows}
                      </pre>
                      <button 
                        onClick={() => copyToClipboard(data.commands.windows, false)}
                        className="absolute top-2 right-2 p-2 bg-bunker-900 border border-white/10 hover:border-neon-green/50 text-slate-400 hover:text-neon-green transition-all"
                        aria-label="Copy code"
                      >
                        {copiedWindows ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-300 mb-4">
                  <BookOpen size={14} className="text-neon-green" />
                  {data.projector.usageTitle}
                </h3>
                <div className="space-y-4">
                  <div className="bg-bunker-950/50 border border-white/10 p-4 relative">
                    <code className="text-sm font-mono text-slate-300 block mb-2" dir="ltr">
                      <span className="text-neon-green">projector</span>
                    </code>
                    <p className="text-xs font-mono text-slate-500">
                      {data.projector.usage?.auto || 'Auto-build latest zip from Downloads.'}
                    </p>
                  </div>
                  <div className="bg-bunker-950/50 border border-white/10 p-4 relative">
                    <code className="text-sm font-mono text-slate-300 block mb-2" dir="ltr">
                      <span className="text-neon-green">projector</span> -z my_app.zip
                    </code>
                    <p className="text-xs font-mono text-slate-500">
                      {data.projector.usage?.specific || 'Use specific zip file.'}
                    </p>
                  </div>
                  <div className="bg-bunker-950/50 border border-white/10 p-4 relative">
                    <code className="text-sm font-mono text-slate-300 block mb-2" dir="ltr">
                      <span className="text-neon-green">projector</span> --show-config
                    </code>
                    <p className="text-xs font-mono text-slate-500">
                      {data.projector.usage?.config || 'Check your paths configuration.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
