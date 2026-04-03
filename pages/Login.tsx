import React, { useState, useEffect } from 'react';
import { api, BASE_URL } from '../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { Lock, Mail, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const Login: React.FC = () => {
  const { t } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
        // 1. Use the new api.auth.login which handles SQL search and password check
        const { token, user: userData } = await api.auth.login(email.toLowerCase(), password);
        
        // 2. Login success
        login({
            id: userData.id,
            email: userData.email,
            role: userData.role,
            business_name: userData.business_name,
            subscriptions: userData.subscriptions,
            language: userData.language
        }, token);
        
        navigate('/');

    } catch (err: any) {
        console.error("Login error details:", err);
        setError(err.message || 'Login failed');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-bunker-900 border border-white/10 p-8 relative clip-corner overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-20">
            <ShieldCheck size={64} className="text-neon-green"/>
        </div>

        <div className="mb-8">
            <h1 className="text-2xl font-tech font-bold text-white mb-2">{t.auth.loginTitle}</h1>
            <div className="h-0.5 w-12 bg-neon-green"></div>
        </div>

        {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex gap-3 items-start whitespace-pre-line">
                <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                <div>{error}</div>
            </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
            <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.auth.email}</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors"
                        placeholder="admin@bunker-255.com"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.auth.password}</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 text-slate-500" size={16} />
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green/50 transition-colors"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-neon-green text-bunker-950 font-bold font-mono py-3 uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading ? 'Processing...' : t.auth.submitLogin}
                {!loading && <ArrowRight size={16} />}
            </button>
        </form>

        <div className="mt-6 text-center border-t border-white/5 pt-4">
            <span className="text-xs text-slate-500">{t.auth.noAccount} </span>
            <Link to="/register" className="text-xs text-neon-green hover:underline font-mono uppercase">{t.auth.registerLink}</Link>
        </div>
      </div>
    </div>
  );
};