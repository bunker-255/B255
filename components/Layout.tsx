import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, MessageCircle, Phone, Mail, Globe, Zap, ChevronRight, Terminal, ExternalLink } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../lib/LanguageContext';

const LanguageSwitcher: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: 'en' | 'he' | 'ru') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (mobile) {
    return (
      <div className="flex gap-2 p-4 border-t border-white/5 bg-white/5 mt-auto">
         {['en', 'he', 'ru'].map((lang) => (
             <button
               key={lang}
               onClick={() => selectLanguage(lang as any)}
               className={`flex-1 py-2 text-center font-mono text-xs uppercase border border-white/10 ${language === lang ? 'bg-neon-green text-bunker-950 font-bold border-neon-green' : 'text-slate-400 hover:text-white'}`}
             >
               {lang}
             </button>
          ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button 
        onClick={toggleOpen}
        className="flex items-center space-x-1 text-slate-400 hover:text-neon-green font-mono text-xs uppercase transition-colors py-2 px-3 border border-transparent hover:border-white/10"
      >
        <Globe size={14} />
        <span className="tracking-widest">{language}</span>
      </button>
      
      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[100px] z-50">
        <div className="bg-bunker-950 border border-white/10 shadow-2xl flex flex-col">
          {['en', 'he', 'ru'].map((lang) => (
             <button
               key={lang}
               onClick={() => selectLanguage(lang as any)}
               className={`px-4 py-2 text-left font-mono text-xs hover:bg-neon-green hover:text-bunker-950 uppercase tracking-wider transition-colors ${language === lang ? 'text-neon-green' : 'text-slate-400'}`}
             >
               {lang}
             </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Safe access to nav
  const navData = t?.nav || {};

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 print:hidden ${scrolled ? 'h-16 bg-bunker-950/80 backdrop-blur-md border-b border-white/5' : 'h-20 bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group relative z-[101]">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-bunker-950 border border-neon-green/30 flex items-center justify-center relative overflow-hidden clip-corner group-hover:border-neon-green transition-colors">
            <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="font-tech text-neon-green font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col">
             <span className="font-tech text-base md:text-lg font-bold tracking-wider text-white leading-none">
                BUNKER<span className="text-neon-green">-255</span>
             </span>
             <span className="text-[9px] text-slate-500 tracking-[0.3em] font-mono leading-none mt-1 group-hover:text-neon-green/70 transition-colors">LABORATORY</span>
          </div>
        </Link>

        {/* Desktop Nav - Hidden on mobile/tablet, Visible on LG+ */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
             item.path.startsWith('http') ? (
                <a
                  key={item.id}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all text-slate-400 hover:text-neon-green`}
                >
                   <span className="relative z-10 flex items-center gap-1">
                     {/* @ts-ignore */}
                     {navData[item.id]}
                     <ExternalLink size={10} className="mb-0.5" />
                   </span>
                </a>
             ) : (
            <Link
              key={item.id}
              to={item.path}
              className={`relative px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all hover:text-neon-green ${
                location.pathname === item.path ? 'text-white' : 'text-slate-400'
              }`}
            >
               {/* Active Indicator */}
               {location.pathname === item.path && (
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-neon-green shadow-[0_0_8px_#00ffa3]"></span>
               )}
               <span className="relative z-10">
                 {/* @ts-ignore */}
                 {navData[item.id]}
               </span>
            </Link>
             )
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link 
            to="/contact"
            className="group relative px-5 py-2 bg-transparent text-neon-green font-mono text-[11px] font-bold uppercase tracking-widest border border-neon-green/30 hover:bg-neon-green hover:text-bunker-950 transition-all clip-corner overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap size={12} className="fill-current" />
              {/* @ts-ignore */}
              {navData.consultation || "Consult"}
            </span>
          </Link>
        </div>

        {/* Mobile/Tablet Toggle */}
        <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden text-white p-2 hover:text-neon-green transition-colors relative z-[101]"
            aria-label="Open Menu"
        >
            <div className="flex flex-col gap-1.5 items-end">
                <span className="w-6 h-0.5 bg-current"></span>
                <span className="w-4 h-0.5 bg-current group-hover:w-6 transition-all"></span>
                <span className="w-6 h-0.5 bg-current"></span>
            </div>
        </button>
      </div>
    </header>

    {/* Mobile/Tablet Side Drawer */}
    {/* Overlay */}
    <div 
        className={`fixed inset-0 bg-bunker-950/60 backdrop-blur-sm z-[150] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
    ></div>

    {/* Drawer Panel */}
    <div className={`fixed top-0 h-full w-[280px] sm:w-[320px] bg-bunker-950 z-[160] transform transition-transform duration-300 ease-out flex flex-col shadow-2xl lg:hidden 
        ${isRtl ? 'left-0 border-r border-white/10' : 'right-0 border-l border-white/10'} 
        ${isOpen ? 'translate-x-0' : (isRtl ? '-translate-x-full' : 'translate-x-full')}
    `}>
        {/* Drawer Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-noise">
            <span className="font-mono text-xs text-neon-green uppercase tracking-widest flex items-center gap-2">
                <Terminal size={12} />
                System_Nav
            </span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X size={20} />
            </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-4 bg-noise">
            <nav className="flex flex-col">
                {NAV_ITEMS.map((item, idx) => (
                    item.path.startsWith('http') ? (
                        <a
                            key={item.id}
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between px-6 py-4 border-b border-white/5 text-sm font-mono uppercase tracking-widest transition-all hover:bg-white/5 text-slate-400"
                        >
                             <div className="flex items-center gap-3">
                                <span className="text-[10px] text-slate-600 font-bold">0{idx + 1}</span>
                                {/* @ts-ignore */}
                                {navData[item.id]}
                            </div>
                            <ExternalLink size={14} className="text-slate-600 group-hover:text-neon-green transition-colors" /> 
                        </a>
                    ) : (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`group flex items-center justify-between px-6 py-4 border-b border-white/5 text-sm font-mono uppercase tracking-widest transition-all hover:bg-white/5 ${
                            location.pathname === item.path ? 'text-white bg-white/5' : 'text-slate-400'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-600 font-bold">0{idx + 1}</span>
                            {/* @ts-ignore */}
                            {navData[item.id]}
                        </div>
                        {location.pathname === item.path && <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#00ffa3]"></div>}
                        {location.pathname !== item.path && (
                            <ChevronRight 
                                size={14} 
                                className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neon-green ${isRtl ? 'rotate-180' : ''}`} 
                            />
                        )}
                    </Link>
                    )
                ))}
            </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-bunker-900 border-t border-white/5">
             <Link 
                to="/contact"
                className="block w-full text-center py-3 bg-neon-green text-bunker-950 font-bold font-mono text-xs uppercase tracking-widest hover:bg-white transition-colors clip-corner mb-4"
            >
                {/* @ts-ignore */}
                {navData.consultation || "Consultation"}
            </Link>
            
            <LanguageSwitcher mobile={true} />
        </div>
    </div>
    </>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const SOCIAL_LINKS = [
    { icon: Linkedin, href: 'https://linkedin.com/company/bunker-255' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1BRN2MZHqz/' },
    { icon: MessageCircle, href: 'https://wa.me/972504834744' }
  ];

  const getServiceLink = (key: string) => {
    switch(key) {
      case 'ai': return '/services?category=ai';
      case 'web': return '/services?category=web';
      case 'hardware': return '/services?category=hardware';
      case 'sos': return '/services?category=sos';
      case 'support': return '/services?category=consulting';
      default: return '/services';
    }
  };

  // Safe checks for footer data with fallbacks to avoid crashes
  const servicesData = (t?.services || {}) as any;
  const categories = servicesData.categories || {};
  const serviceItems = servicesData.items || {};
  const navData = (t?.nav || {}) as any;
  const aboutData = (t?.about || {}) as any;

  return (
    <footer className="relative bg-bunker-950 pt-20 pb-10 overflow-hidden border-t border-white/5 print:hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 mb-16">
          <div className="space-y-6 col-span-2 md:col-span-1">
             <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-8 h-8 border border-neon-green text-neon-green flex items-center justify-center font-bold text-sm bg-neon-green/10 clip-corner shrink-0">B</div>
              <span className="font-tech text-xl font-bold text-white tracking-wider inline-block">BUNKER<span className="text-neon-green">-255</span></span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xs font-mono">
              // SYS: ON<br/>
              {t?.hero?.subtitle}
            </p>
            <div className="flex space-x-2 sm:space-x-4 rtl:space-x-reverse flex-wrap gap-y-2">
              {SOCIAL_LINKS.map((item, i) => (
                <a 
                    key={i} 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-neon-green hover:border-neon-green transition-all hover:bg-neon-green/5"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-neon-green text-[10px] sm:text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-green"></span>
               {navData.services || 'Services'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {['ai', 'web', 'hardware', 'sos', 'support'].map((key) => (
                  <li key={key}>
                      <Link to={getServiceLink(key)} className="hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all flex items-center gap-2 group">
                          <ChevronRight size={12} className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
                          {/* @ts-ignore */}
                          {key === 'support' ? (serviceItems.support?.title ?? 'Support') : (categories[key] ?? key)}
                      </Link>
                  </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-neon-green text-[10px] sm:text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-green"></span>
               {aboutData.teamTitle || 'Team'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {['about', 'blog', 'entrepreneurs'].map((key) => (
                  <li key={key}>
                      <Link to={`/${key}`} className="hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all flex items-center gap-2 group">
                          <ChevronRight size={12} className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
                          {/* @ts-ignore */}
                          {navData[key] ?? key}
                      </Link>
                  </li>
              ))}
               <li>
                  <a href="https://academy.bunker-255.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-1 rtl:hover:-translate-x-1 transition-all flex items-center gap-2 group">
                      <ChevronRight size={12} className="text-neon-green opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* @ts-ignore */}
                      {navData.academy || 'Academy'}
                  </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-neon-green text-[10px] sm:text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-green"></span>
               {navData.contact || 'Contact'}
            </h4>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400 font-mono">
              <li>
                <a href="mailto:admin@bunker-255.com" className="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer hover:text-white transition-colors">
                  <Mail size={14} className="text-neon-green shrink-0" />
                  <span className="break-all border-b border-transparent group-hover:border-neon-green/50">admin@bunker-255.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+972504834744" className="flex items-center space-x-3 rtl:space-x-reverse group cursor-pointer hover:text-white transition-colors">
                  <Phone size={14} className="text-neon-green shrink-0" />
                  <span className="border-b border-transparent group-hover:border-neon-green/50">+972-50-483-4744</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-neon-green/5 border border-neon-green/10 rounded">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                <span className="text-neon-green text-[10px] uppercase tracking-wider">Operational 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4 font-mono uppercase tracking-wider">
          <p className="text-center md:text-left">© 2025 BUNKER-255 LABS. <span className="text-neon-green">SYSTEM SECURE</span></p>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <Link to="/" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bunker-950 font-sans text-slate-100 flex flex-col bg-noise print:min-h-0 print:bg-transparent print:block">
      <Header />
      <main className="flex-grow pt-20 print:pt-0 print:block">
        {children}
      </main>
      <Footer />
    </div>
  );
};