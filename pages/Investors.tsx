import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useLanguage } from '../lib/LanguageContext';
import { TrendingUp, PieChart, ArrowRight } from 'lucide-react';

const data = [
  { name: '2021', revenue: 4000, clients: 10 },
  { name: '2022', revenue: 7000, clients: 25 },
  { name: '2023', revenue: 12000, clients: 45 },
  { name: '2024', revenue: 25000, clients: 80 },
  { name: '2025', revenue: 45000, clients: 150 },
];

const ChartCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-bunker-900/50 backdrop-blur-sm p-6 border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-neon-green/10"></div>
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-sm font-mono text-neon-green uppercase tracking-widest flex items-center gap-2">
                <div className="w-1 h-4 bg-neon-green"></div>
                {title}
            </h3>
            <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full bg-slate-700 ${i===3 ? 'animate-pulse bg-neon-green' : ''}`}></div>)}
            </div>
        </div>
        <div className="h-64 w-full">
            {children}
        </div>
    </div>
);

export const Investors: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
             <span className="px-2 py-0.5 border border-neon-cyan/50 text-neon-cyan font-mono text-[10px] uppercase">Finance_Module</span>
             <span className="w-12 h-px bg-white/10"></span>
        </div>
        <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-6 uppercase">{t.investors.title}</h1>
        <p className="text-lg text-slate-400 mb-16 font-light max-w-2xl border-l-2 border-neon-cyan/30 pl-6">
          {t.investors.subtitle}
        </p>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ChartCard title={t.investors.charts.revenue}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                  <YAxis stroke="#555" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#050507', border: '1px solid #333', borderRadius: '0px' }}
                    itemStyle={{ color: '#00ffa3', fontFamily: 'monospace' }}
                    cursor={{fill: 'rgba(255,255,255,0.03)'}}
                  />
                  <Bar dataKey="revenue" fill="#00ffa3" radius={[0, 0, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
          </ChartCard>

          <ChartCard title={t.investors.charts.clients}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                  <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                  <YAxis stroke="#555" fontSize={10} tickLine={false} axisLine={false} fontFamily="monospace" />
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#050507', border: '1px solid #333', borderRadius: '0px' }}
                     itemStyle={{ color: '#00f0ff', fontFamily: 'monospace' }}
                  />
                  <Line type="monotone" dataKey="clients" stroke="#00f0ff" strokeWidth={2} dot={{r: 4, fill: '#000', strokeWidth: 2}} activeDot={{r: 6, fill: '#00f0ff'}} />
                </LineChart>
              </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Investment Options */}
        <h2 className="text-2xl font-tech font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">{t.investors.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div className="p-8 border border-neon-green/20 bg-gradient-to-br from-neon-green/5 to-transparent flex flex-col clip-corner hover:border-neon-green/50 transition-colors group">
             <div className="w-12 h-12 bg-bunker-950 border border-neon-green/30 flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors">{t.investors.options.company.title}</h3>
             <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono">{t.investors.options.company.desc}</p>
             <button className="w-full py-4 border border-neon-green text-neon-green font-bold font-mono tracking-widest hover:bg-neon-green hover:text-bunker-950 transition-all uppercase text-xs">
                {t.investors.buttons.deck}
             </button>
          </div>

          <div className="p-8 border border-neon-cyan/20 bg-gradient-to-br from-neon-cyan/5 to-transparent flex flex-col clip-corner hover:border-neon-cyan/50 transition-colors group">
             <div className="w-12 h-12 bg-bunker-950 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
                <PieChart />
             </div>
             <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{t.investors.options.portfolio.title}</h3>
             <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-mono">{t.investors.options.portfolio.desc}</p>
             <button className="w-full py-4 border border-neon-cyan text-neon-cyan font-bold font-mono tracking-widest hover:bg-neon-cyan hover:text-bunker-950 transition-all uppercase text-xs">
                {t.investors.buttons.projects}
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};