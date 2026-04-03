
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { api } from '../lib/api';
import { Activity, CreditCard, ShieldCheck, Clock, Zap, CheckCircle, AlertTriangle, Loader, XCircle, FileText, ChevronDown, ChevronUp, ShoppingCart, Siren, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(true);
  const [activeCount, setActiveCount] = useState(0);
  const [totalSaved, setTotalSaved] = useState(0);
  
  // Mixed activity list
  const [activityFeed, setActivityFeed] = useState<any[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Helper to parse cost strings
  const parseCost = (costStr: string | null): number => {
      if (!costStr || costStr === '-') return 0;
      const cleaned = costStr.replace(/[^0-9.-]+/g, "");
      return parseFloat(cleaned) || 0;
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
        if (!user) return;
        setLoading(true);

        try {
            // 1. Fetch SOS Tickets using SQL
            const sosResults = await api.sql(`SELECT * FROM sos_tickets WHERE user_email = '${user.email}' OR user_id = '${user.id}' ORDER BY created_at DESC`);
            const tickets = (sosResults[0]?.rows || []).map((r: any) => ({ id: r.id, ...r }));

            // 2. Fetch Service Orders using SQL
            const orderResults = await api.sql(`SELECT * FROM service_orders WHERE user_email = '${user.email}' OR user_id = '${user.id}' ORDER BY created_at DESC`);
            const orders = (orderResults[0]?.rows || []).map((r: any) => ({ id: r.id, ...r }));

            const safeTickets = tickets || [];
            const safeOrders = orders || [];

            // --- Logic: Stats ---
            // Active Count (Both types)
            const activeTickets = safeTickets.filter((t: any) => t.status === 'pending' || t.status === 'in_progress').length;
            const activeOrders = safeOrders.filter((o: any) => o.status === 'pending' || o.status === 'in_progress').length;
            setActiveCount(activeTickets + activeOrders);

            // Savings (Only from SOS for now, maybe orders imply value later)
            let savings = 0;
            safeTickets.forEach((t: any) => {
                const ourCost = parseCost(t.cost);
                const marketCost = parseCost(t.market_cost);
                if (ourCost > 0 && marketCost > 0) savings += (marketCost - ourCost);
            });
            setTotalSaved(savings);

            // --- Logic: Activity Feed ---
            // Merge and sort by date desc
            const merged = [
                ...safeTickets.map((t: any) => ({ ...t, type: 'sos', sortDate: new Date(t.created_at) })),
                ...safeOrders.map((o: any) => ({ ...o, type: 'order', sortDate: new Date(o.created_at) }))
            ].sort((a, b) => b.sortDate.getTime() - a.sortDate.getTime());

            setActivityFeed(merged);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
        setLoading(false);
    };

    fetchDashboardData();
  }, [user]);

  const toggleExpand = (id: string) => {
      setExpandedId(expandedId === id ? null : id);
  };

  const getStatusIcon = (status: string) => {
      switch(status) {
          case 'resolved': 
          case 'completed': return <CheckCircle size={20} className="text-neon-green" />;
          case 'pending': return <Clock size={20} className="text-yellow-500" />;
          case 'in_progress': return <Loader size={20} className="text-neon-cyan animate-spin" />;
          case 'cancelled': return <XCircle size={20} className="text-red-500" />;
          default: return <Activity size={20} className="text-slate-400" />;
      }
  };

  const hasSosAccess = user?.subscriptions?.sos_business;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Header - Buttons Removed */}
      <div className="mb-10 border-b border-white/10 pb-6">
          <div className="text-[10px] font-mono text-neon-green mb-2 animate-pulse">SYSTEM_ONLINE</div>
          <h1 className="text-3xl md:text-5xl font-tech font-bold text-white">{t.dashboard.welcome}</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Active Tickets */}
          <div className="bg-bunker-900 border border-neon-green/30 p-6 relative overflow-hidden group">
                <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity text-neon-green">
                    <Activity size={64} />
                </div>
                <div className="relative z-10">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">{t.dashboard.activeTickets}</div>
                    <div className="text-3xl font-tech font-bold text-neon-green">
                        {loading ? '...' : activeCount}
                    </div>
                </div>
           </div>

           {/* Total Saved */}
           <div className="bg-bunker-900 border border-neon-cyan/30 p-6 relative overflow-hidden group">
                <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity text-neon-cyan">
                    <CreditCard size={64} />
                </div>
                <div className="relative z-10">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">{t.dashboard.totalSaved}</div>
                    <div className="text-3xl font-tech font-bold text-neon-cyan">
                        {loading ? '...' : `₪${totalSaved.toFixed(2)}`}
                    </div>
                </div>
           </div>

           {/* Subscription Status */}
           <div className="bg-bunker-900 border border-neon-purple/30 p-6 relative overflow-hidden group">
                <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity text-neon-purple">
                    <ShieldCheck size={64} />
                </div>
                <div className="relative z-10">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">{t.dashboard.subscription}</div>
                    <div className="text-3xl font-tech font-bold text-neon-purple">
                        {user?.subscriptions?.sos_business ? 'PRO' : 'BASIC'}
                    </div>
                </div>
           </div>
      </div>

      {/* Action Containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Order Service Container */}
        <div className={`bg-bunker-900 border border-white/10 p-6 md:p-8 clip-corner relative group overflow-hidden ${!hasSosAccess ? 'md:col-span-2' : ''}`}>
            {/* Visuals */}
            <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingCart size={80} className="text-neon-green"/>
            </div>
            
            <h2 className="text-xl font-bold font-tech text-white mb-4 flex items-center gap-3">
                 <ShoppingCart className="text-neon-green" />
                 {t.dashboard.actions.orderTitle}
            </h2>
            <p className="text-slate-400 text-sm mb-8 max-w-sm leading-relaxed">
                {t.dashboard.actions.orderDesc}
            </p>
            
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-neon-green text-bunker-950 font-bold font-mono uppercase tracking-widest hover:bg-white transition-all clip-corner text-xs">
                {t.dashboard.actions.orderBtn}
                <ArrowRight size={16} className="rtl:rotate-180" />
            </Link>
        </div>

        {/* SOS Container */}
        {hasSosAccess && (
            <div className="bg-bunker-900 border border-red-500/30 p-6 md:p-8 clip-corner relative group overflow-hidden">
                {/* Visuals */}
                <div className="absolute top-0 ltr:right-0 rtl:left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Siren size={80} className="text-red-500"/>
                </div>
                
                <h2 className="text-xl font-bold font-tech text-white mb-4 flex items-center gap-3">
                     <Siren className="text-red-500 animate-pulse" />
                     {t.dashboard.actions.sosTitle}
                </h2>
                <p className="text-slate-400 text-sm mb-8 max-w-sm leading-relaxed">
                    {t.dashboard.actions.sosDesc}
                </p>
                
                <Link to="/sos" className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold font-mono uppercase tracking-widest hover:bg-red-400 transition-all clip-corner text-xs">
                    {t.dashboard.actions.sosBtn}
                    <ArrowRight size={16} className="rtl:rotate-180" />
                </Link>
            </div>
        )}
      </div>

      {/* Activity Log */}
      <div className="bg-bunker-900 border border-white/10 p-6 md:p-8 clip-corner min-h-[400px]">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="text-slate-400" size={20} />
            {t.dashboard.latestActivity}
        </h2>
        
        <div className="space-y-4">
            {loading ? (
                <div className="py-8 text-center text-neon-green animate-pulse font-mono text-sm">LOADING_DATA...</div>
            ) : activityFeed.length > 0 ? (
                activityFeed.map((item) => {
                    const isSOS = item.type === 'sos';
                    const uniqueId = isSOS ? `sos-${item.id}` : `order-${item.id}`;
                    const isExpanded = expandedId === uniqueId;

                    return (
                        <div key={uniqueId} className={`bg-bunker-950 border transition-all ${isSOS ? 'border-neon-red/20 hover:border-neon-red/50' : 'border-neon-green/20 hover:border-neon-green/50'}`}>
                             {/* Summary Row */}
                             <div 
                                onClick={() => toggleExpand(uniqueId)}
                                className="flex items-center justify-between p-4 cursor-pointer"
                             >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-full border border-white/5 ${isSOS ? 'bg-neon-red/5 text-neon-red' : 'bg-neon-green/5 text-neon-green'}`}>
                                        {getStatusIcon(item.status)}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                                            <span className={`font-mono ${isSOS ? 'text-neon-red' : 'text-neon-green'}`}>
                                                {isSOS ? `SOS-${item.id}` : `PRJ-${item.id}`}
                                            </span>
                                            <span className="text-slate-400 text-xs uppercase hidden md:inline-block">
                                                // {isSOS ? item.issue_type : item.service_type}
                                            </span>
                                        </div>
                                        <div className="text-xs text-slate-500 font-mono mt-1">
                                            {isSOS ? (item.description?.substring(0, 40) + '...') : item.project_name}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-right hidden sm:block">
                                        <div className="text-xs text-slate-500 font-mono">{new Date(item.created_at).toLocaleDateString()}</div>
                                        <div className={`text-[10px] uppercase font-mono ${isSOS ? 'text-neon-red' : 'text-neon-green'}`}>
                                            {item.status}
                                        </div>
                                    </div>
                                    {isExpanded ? <ChevronUp size={16} className="text-slate-500"/> : <ChevronDown size={16} className="text-slate-500"/>}
                                </div>
                             </div>

                             {/* Expanded Details */}
                             {isExpanded && (
                                 <div className="p-4 border-t border-white/5 bg-white/5 text-sm font-mono space-y-3 animate-fade-in">
                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                         <div>
                                             <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{isSOS ? 'Issue Description' : t.projects.desc}</span>
                                             <p className="text-slate-300">{item.description}</p>
                                         </div>
                                         {!isSOS && (
                                            <div>
                                                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t.projects.contact}</span>
                                                <p className="text-slate-300">{item.contact_info || '-'}</p>
                                            </div>
                                         )}
                                     </div>

                                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3 border-t border-white/5">
                                         <div>
                                             <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{isSOS ? t.admin.sos_table.cost : t.projects.price}</span>
                                             <span className="text-white font-bold">{item.price || item.cost || '-'}</span>
                                         </div>
                                         {!isSOS && (
                                             <div>
                                                <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">{t.projects.eta}</span>
                                                <span className="text-neon-cyan">{item.eta ? new Date(item.eta).toLocaleDateString() : 'TBD'}</span>
                                             </div>
                                         )}
                                         {/* For SOS we show solution */}
                                         {isSOS && item.solution && (
                                             <div className="col-span-2">
                                                 <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Resolution</span>
                                                 <span className="text-neon-green">{item.solution}</span>
                                             </div>
                                         )}
                                     </div>
                                 </div>
                             )}
                        </div>
                    );
                })
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-slate-500 border border-dashed border-white/10 bg-bunker-950/50">
                    <Activity size={32} className="mb-4 opacity-50" />
                    <p className="font-mono text-sm">{t.dashboard.noActivity}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};
