
import React, { useState } from 'react';
import { api } from '../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { Lock, Mail, ArrowRight, Building2, AlertTriangle } from 'lucide-react';

export const Register: React.FC = () => {
  const { t, language } = useLanguage(); // Get current language
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
        // 1. Check if user already exists in custom table using SQL
        const results = await api.sql(`SELECT * FROM app_users WHERE email = '${email.toLowerCase()}' LIMIT 1`);
        const existingUser = results[0]?.rows?.[0];

        if (existingUser) {
            throw new Error('User with this email already exists.');
        }

        // 2. Insert new user profile into custom table (including password)
        const userData = { 
            email: email.toLowerCase(), 
            password: password, // Store password in the table
            role: 'CLIENT',
            business_name: 'New Client',
            language: language, // Save current language
            subscriptions: JSON.stringify({ sos_business: false }) // Initial subscriptions as JSON string
        };
        
        const newRecord = await api.records.create('app_users', userData);

        // 3. Login immediately
        const sessionToken = (import.meta as any).env.VITE_NC_API_KEY || 'nc-app-e3b6ec1a8ef2811b5f769af324153d5c439dfa3a4fff4041';
        
        login({
            id: newRecord.id,
            email: userData.email,
            role: userData.role,
            business_name: userData.business_name,
            language: userData.language,
            subscriptions: { sos_business: false }
        }, sessionToken);
        
        navigate('/');

    } catch (err: any) {
        setError(err.message || 'Registration failed');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-bunker-900 border border-white/10 p-8 relative clip-corner overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-20">
            <Building2 size={64} className="text-neon-cyan"/>
        </div>

        <div className="mb-8">
            <h1 className="text-2xl font-tech font-bold text-white mb-2">{t.auth.registerTitle}</h1>
            <div className="h-0.5 w-12 bg-neon-cyan"></div>
        </div>

        {error && (
            <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex gap-3 items-start">
                <AlertTriangle className="shrink-0 mt-0.5" size={16} />
                <div>{error}</div>
            </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
            <div>
                <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.auth.email}</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-500" size={16} />
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-colors"
                        placeholder="business@bunker-255.com"
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
                        className="w-full bg-bunker-950 border border-white/10 pl-10 pr-4 py-3 text-white focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-colors"
                        placeholder="••••••••"
                    />
                </div>
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-neon-cyan text-bunker-950 font-bold font-mono py-3 uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
                {loading ? 'Processing...' : t.auth.submitRegister}
                {!loading && <ArrowRight size={16} />}
            </button>
        </form>

        <div className="mt-6 text-center border-t border-white/5 pt-4">
            <span className="text-xs text-slate-500">{t.auth.hasAccount} </span>
            <Link to="/login" className="text-xs text-neon-cyan hover:underline font-mono uppercase">{t.auth.loginLink}</Link>
        </div>
      </div>
    </div>
  );
};
