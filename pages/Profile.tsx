import React, { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { api } from '../lib/api';
import { Building, MapPin, Phone, FileText, Save, Loader } from 'lucide-react';

export const Profile: React.FC = () => {
  const { t } = useLanguage();
  const { user, refreshSession } = useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    businessName: user?.business_name || '',
    address: 'Tel Aviv, Rothschild 1',
    phone: '+972-50-000-0000',
    taxId: '512345678'
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    try {
      await api.records.update('app_users', user.id, {
        business_name: data.businessName
      });
      await refreshSession();
      alert('Profile Saved');
    } catch (error) {
      console.error('Failed to save profile', error);
      alert('Failed to save profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
       <div className="max-w-3xl mx-auto">
            <div className="mb-10 border-b border-white/10 pb-6">
                <h1 className="text-3xl font-tech font-bold text-white mb-2">{t.profile.title}</h1>
                <p className="text-slate-400 font-mono text-sm">{user?.email} // ID: {user?.id}</p>
            </div>

            <form onSubmit={handleSave} className="bg-bunker-900 p-8 border border-white/10 clip-corner space-y-6">
                
                <div>
                    <label className="flex items-center gap-2 text-xs font-mono text-neon-green mb-2 uppercase">
                        <Building size={14} />
                        {t.profile.form.name}
                    </label>
                    <input 
                        type="text" 
                        value={data.businessName}
                        onChange={e => setData({...data, businessName: e.target.value})}
                        className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2 uppercase">
                            <MapPin size={14} />
                            {t.profile.form.address}
                        </label>
                        <input 
                            type="text" 
                            value={data.address}
                            onChange={e => setData({...data, address: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        />
                    </div>
                    <div>
                        <label className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2 uppercase">
                            <Phone size={14} />
                            {t.profile.form.phone}
                        </label>
                        <input 
                            type="text" 
                            value={data.phone}
                            onChange={e => setData({...data, phone: e.target.value})}
                            className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                        />
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex justify-end">
                    <button type="submit" disabled={loading} className="flex items-center gap-2 bg-neon-green text-bunker-950 px-6 py-3 font-bold font-mono uppercase hover:bg-white transition-colors disabled:opacity-50">
                        {loading ? <Loader size={16} className="animate-spin" /> : <Save size={16} />}
                        {t.profile.form.save}
                    </button>
                </div>

            </form>
       </div>
    </div>
  );
};