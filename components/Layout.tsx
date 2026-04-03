import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, LogOut, LayoutDashboard, Siren, UserCircle, ShieldAlert } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';

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
  const { t, dir } = useLanguage();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isRtl = dir === 'rtl';

  const isAdmin = user?.email === 'admin@bunker-255.com';

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getIcon = (id: string) => {
    switch(id) {
        case 'dashboard': return <LayoutDashboard size={14} className="mb-1 mr-1" />;
        case 'sos': return <Siren size={14} className="mb-1 mr-1 text-neon-red" />;
        case 'profile': return <UserCircle size={14} className="mb-1 mr-1" />;
        default: return null;
    }
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-[100] h-16 bg-bunker-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-bunker-950 border border-neon-green/30 flex items-center justify-center overflow-hidden clip-corner group-hover:border-neon-green transition-colors">
            <span className="font-tech text-neon-green font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col">
             <span className="font-tech text-base font-bold tracking-wider text-white leading-none">
                BUNKER<span className="text-neon-green">-255</span>
             </span>
             <span className="text-[9px] text-slate-500 tracking-[0.3em] font-mono leading-none mt-1">DASHBOARD</span>
          </div>
        </Link>

        {user && (
            <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
                <Link
                key={item.id}
                to={item.path}
                className={`flex items-center px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all hover:text-neon-green ${
                    location.pathname === item.path ? 'text-white border-b-2 border-neon-green' : 'text-slate-400 border-b-2 border-transparent'
                }`}
                >
                {getIcon(item.id)}
                {/* @ts-ignore */}
                {t.nav[item.id]}
                </Link>
            ))}
            {isAdmin && (
                <Link
                to="/admin"
                className={`flex items-center px-4 py-2 text-[11px] font-mono uppercase tracking-widest transition-all hover:text-neon-red ${
                    location.pathname === '/admin' ? 'text-neon-red border-b-2 border-neon-red' : 'text-slate-400 border-b-2 border-transparent'
                }`}
                >
                <ShieldAlert size={14} className="mb-1 mr-1" />
                {t.nav.admin}
                </Link>
            )}
            </nav>
        )}

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          {user ? (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-400 hover:text-red-400 font-mono text-xs uppercase"
              >
                <LogOut size={14} />
                {t.nav.logout}
              </button>
          ) : (
             <Link to="/login" className="text-neon-green font-mono text-xs uppercase hover:underline">
                 {t.auth.loginLink}
             </Link>
          )}
        </div>

        <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden text-white p-2 hover:text-neon-green transition-colors"
        >
            <Menu size={24} />
        </button>
      </div>
    </header>

    <div 
        className={`fixed inset-0 bg-bunker-950/90 backdrop-blur-sm z-[150] transition-opacity lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
    ></div>

    <div className={`fixed top-0 bottom-0 w-[280px] bg-bunker-950 z-[160] transform transition-transform duration-300 ease-out flex flex-col border-r border-white/10
        ${isRtl ? 'left-0' : 'right-0'} 
        ${isOpen ? 'translate-x-0' : (isRtl ? '-translate-x-full' : 'translate-x-full')}
    `}>
        <div className="h-16 flex items-center justify-end px-4 border-b border-white/5">
            <button onClick={() => setIsOpen(false)} className="text-slate-400">
                <X size={20} />
            </button>
        </div>

        <div className="flex-1 py-4">
            {user && (
                <nav className="flex flex-col">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`px-6 py-4 border-b border-white/5 text-sm font-mono uppercase tracking-widest ${
                                location.pathname === item.path ? 'text-neon-green bg-white/5' : 'text-slate-400'
                            }`}
                        >
                            {/* @ts-ignore */}
                            {t.nav[item.id]}
                        </Link>
                    ))}
                    {isAdmin && (
                        <Link
                            to="/admin"
                            className={`px-6 py-4 border-b border-white/5 text-sm font-mono uppercase tracking-widest ${
                                location.pathname === '/admin' ? 'text-neon-red bg-white/5' : 'text-slate-400'
                            }`}
                        >
                            {t.nav.admin}
                        </Link>
                    )}
                    <button 
                        onClick={handleLogout}
                        className="px-6 py-4 border-b border-white/5 text-sm font-mono uppercase tracking-widest text-red-400 text-left w-full hover:bg-white/5"
                    >
                        {t.nav.logout}
                    </button>
                </nav>
            )}
            {!user && (
                <div className="flex flex-col">
                    <Link to="/login" className="px-6 py-4 text-slate-300 uppercase font-mono text-sm border-b border-white/5">{t.auth.loginLink}</Link>
                    <Link to="/register" className="px-6 py-4 text-neon-green uppercase font-mono text-sm border-b border-white/5">{t.auth.registerLink}</Link>
                </div>
            )}
        </div>

        <div className="p-6 border-t border-white/5">
            <LanguageSwitcher mobile={true} />
        </div>
    </div>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-bunker-950 py-8 border-t border-white/5 text-center">
      <div className="container mx-auto px-4">
          <p className="text-xs text-slate-600 font-mono uppercase tracking-wider">
             © 2025 BUNKER-255 DASHBOARD. SYSTEM SECURE.
          </p>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-bunker-950 font-sans text-slate-100 flex flex-col bg-noise">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};