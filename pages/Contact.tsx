
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { api } from '../lib/api';
import { useLanguage } from '../lib/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'consultation',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
        await api.records.create('contact_requests', formData);
        setStatus('success');
    } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Info */}
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl font-tech font-bold text-white mb-6">{t.contact.title}</h1>
          <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4 rtl:space-x-reverse bg-bunker-900/50 p-4 rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-bunker-800 rounded flex items-center justify-center text-emerald-500 shrink-0">
                <Mail />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Email</h3>
                <p className="text-slate-400 break-all">bunker255il@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 rtl:space-x-reverse bg-bunker-900/50 p-4 rounded-xl border border-white/5">
              <div className="w-12 h-12 bg-bunker-800 rounded flex items-center justify-center text-emerald-500 shrink-0">
                <Phone />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <p className="text-slate-400">+972-50-483-4744</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-bunker-900 p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl order-1 lg:order-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">{t.contact.form.title}</h2>
          
          {status === 'success' ? (
             <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t.contact.form.success}</h3>
                <button onClick={() => setStatus('idle')} className="mt-6 text-emerald-500 hover:text-emerald-400 underline font-medium">Send again</button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.contact.form.name}</label>
                <input 
                    type="text" 
                    required
                    className="w-full bg-bunker-950 border border-white/10 rounded px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.contact.form.email}</label>
                <input 
                    type="email" 
                    required
                    className="w-full bg-bunker-950 border border-white/10 rounded px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.contact.form.type}</label>
                <select 
                    className="w-full bg-bunker-950 border border-white/10 rounded px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                >
                    <option value="consultation">{t.contact.form.types.consultation}</option>
                    <option value="development">{t.contact.form.types.dev}</option>
                    <option value="training">{t.contact.form.types.training}</option>
                    <option value="investors">{t.contact.form.types.invest}</option>
                </select>
                </div>
                <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.contact.form.message}</label>
                <textarea 
                    rows={4}
                    required
                    className="w-full bg-bunker-950 border border-white/10 rounded px-4 py-3 text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
                </div>
                
                <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded transition-all shadow-lg hover:shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                {status === 'submitting' ? t.contact.form.sending : t.contact.form.submit}
                </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
