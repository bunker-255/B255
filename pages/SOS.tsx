
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { Siren, AlertTriangle, CheckCircle, Clock, Plus, Lock, XCircle, Loader, TrendingDown, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

export const SOS: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Financial Stats
  const [financials, setFinancials] = useState({
      debt: 0,
      savings: 0,
      marketTotal: 0
  });

  // Message Modal State
  const [messageModal, setMessageModal] = useState({ 
    isOpen: false, 
    title: '', 
    text: '', 
    isError: false 
  });

  const [formData, setFormData] = useState({
    issueType: 'hardware',
    description: '',
    urgency: 'high'
  });

  // Check Subscription
  const hasAccess = user?.subscriptions?.sos_business;

  // Helper to parse cost strings like "$100", "100.00", "100" to number
  const parseCost = (costStr: string | null): number => {
      if (!costStr || costStr === '-') return 0;
      // Remove non-numeric chars except dot and minus
      const cleaned = costStr.replace(/[^0-9.-]+/g, "");
      return parseFloat(cleaned) || 0;
  };

  const calculateFinancials = (tickets: any[]) => {
      let debt = 0;
      let savings = 0;
      let marketTotal = 0;

      tickets.forEach(ticket => {
          const ourCost = parseCost(ticket.cost);
          const marketCost = parseCost(ticket.market_cost);

          // Calculate Debt (Unpaid tickets with a valid cost)
          if (!ticket.is_paid && ourCost > 0 && ticket.status !== 'cancelled') {
              debt += ourCost;
          }

          // Calculate Savings (Only if we have both prices)
          if (ourCost > 0 && marketCost > 0) {
              savings += (marketCost - ourCost);
              marketTotal += marketCost;
          }
      });

      setFinancials({ debt, savings, marketTotal });
  };

  const fetchTickets = async () => {
    if (!user) return;
    setLoading(true);
    try {
        const results = await api.sql(`SELECT * FROM sos_tickets WHERE user_email = '${user.email}' OR user_id = '${user.id}' ORDER BY created_at DESC`);
        const userTickets = (results[0]?.rows || []).map((r: any) => ({ id: r.id, ...r }));
        
        setHistory(userTickets);
        calculateFinancials(userTickets);
    } catch (error) {
        console.error('Error fetching tickets', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // We still fetch history so user can see old tickets, even if sub is cancelled, 
    // BUT the create button is hidden via UI check later.
    fetchTickets();
  }, [user]);

  const showMessage = (title: string, text: string, isError = true) => {
    setMessageModal({ isOpen: true, title, text, isError });
  };
  
  const closeMessage = () => setMessageModal(prev => ({ ...prev, isOpen: false }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSubmitting(true);

    try {
        const payload = {
            user_id: user.id,
            user_email: user.email,
            issue_type: formData.issueType,
            description: formData.description,
            urgency: formData.urgency,
            status: 'pending',
            cost: '-',
            market_cost: '-',
            created_at: new Date().toISOString()
        };

        await api.records.create('sos_tickets', payload);

        // Reset and refresh
        setFormData({ issueType: 'hardware', description: '', urgency: 'high' });
        setShowForm(false);
        fetchTickets();
        
        // Show Success Modal
        showMessage('SIGNAL RECEIVED', 'Your emergency ticket has been successfully logged into the system.', false);

    } catch (error: any) {
        console.error("Error creating ticket:", error);
        // Show Error Modal instead of alert
        showMessage('TRANSMISSION ERROR', `Failed to create ticket: ${error.message || 'Unknown error'}`, true);
    } finally {
        setSubmitting(false);
    }
  };

  const getStatusBadge = (status: string) => {
      // @ts-ignore
      const label = t.sos.table.status_val[status] || status;
      
      switch(status) {
          case 'resolved': return <span className="inline-flex items-center gap-1 text-neon-green bg-neon-green/10 px-2 py-0.5 text-[10px] font-mono uppercase border border-neon-green/20"><CheckCircle size={10} /> {label}</span>;
          case 'pending': return <span className="inline-flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 py-0.5 text-[10px] font-mono uppercase border border-yellow-500/20"><Clock size={10} /> {label}</span>;
          case 'in_progress': return <span className="inline-flex items-center gap-1 text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 text-[10px] font-mono uppercase border border-neon-cyan/20"><Loader size={10} className="animate-spin"/> {label}</span>;
          case 'cancelled': return <span className="inline-flex items-center gap-1 text-red-500 bg-red-500/10 px-2 py-0.5 text-[10px] font-mono uppercase border border-red-500/20"><XCircle size={10} /> {label}</span>;
          default: return <span className="text-slate-400 text-xs">{label}</span>;
      }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="bg-bunker-900 border border-white/10 p-8 md:p-12 mb-12 relative overflow-hidden clip-corner">
         <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
                <h1 className="text-3xl md:text-5xl font-tech font-bold text-white mb-2 flex items-center gap-3">
                    <Siren className="text-neon-red animate-pulse" />
                    {t.sos.title}
                </h1>
                <p className="text-slate-400 max-w-lg">{t.sos.subtitle}</p>
            </div>
            
            {/* Logic: Only show Trigger button if user has access. If not, maybe show "Subscription Required" or nothing */}
            {hasAccess ? (
                !showForm && (
                    <button 
                        onClick={() => setShowForm(true)}
                        className="group relative px-8 py-6 bg-neon-red text-bunker-950 font-bold font-tech text-xl tracking-widest clip-corner hover:bg-white transition-all shadow-[0_0_20px_rgba(255,0,60,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            <AlertTriangle className="animate-pulse" />
                            {t.sos.createBtn}
                        </span>
                    </button>
                )
            ) : (
                 <div className="flex items-center gap-3 px-6 py-4 border border-neon-red/30 bg-neon-red/5">
                    <Lock className="text-neon-red" size={20} />
                    <div className="text-left">
                        <div className="text-neon-red font-bold font-mono text-xs uppercase">ACCESS_DENIED</div>
                        <div className="text-slate-500 text-[10px]">Business Subscription Required</div>
                    </div>
                 </div>
            )}
         </div>
      </div>

      {/* Financial Intelligence Widget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Debt Panel */}
          <div className="bg-bunker-950 border border-red-500/20 p-6 clip-corner relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingDown className="text-red-500" size={64} />
              </div>
              <h3 className="text-xs font-mono text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  {/* @ts-ignore */}
                  {t.sos.financials.debtTitle}
              </h3>
              <div className="text-4xl font-tech font-bold text-white mb-1">
                  {financials.debt > 0 ? `₪${financials.debt.toFixed(2)}` : '₪0.00'}
              </div>
              <p className="text-slate-500 text-xs font-mono">
                  {/* @ts-ignore */}
                  {financials.debt > 0 ? t.sos.financials.paymentRequired : t.sos.financials.allClear}
              </p>
          </div>

          {/* Savings Panel */}
          <div className="bg-bunker-900 border border-neon-green/20 p-6 clip-corner relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="text-neon-green" size={64} />
              </div>
              <h3 className="text-xs font-mono text-neon-green uppercase tracking-widest mb-2 flex items-center gap-2">
                  <DollarSign size={12} />
                  {/* @ts-ignore */}
                  {t.sos.financials.savingsTitle} ({t.sos.financials.lifetime})
              </h3>
              <div className="text-4xl font-tech font-bold text-white mb-1">
                  ₪{financials.savings.toFixed(2)}
              </div>
              <p className="text-slate-500 text-xs font-mono">
                  {/* @ts-ignore */}
                  {t.sos.financials.marketComparison} ({financials.marketTotal > 0 ? `₪${financials.marketTotal}` : '-'})
              </p>
          </div>
      </div>

      {showForm && hasAccess && (
        <div className="bg-bunker-950 border border-neon-red/30 p-6 md:p-8 mb-12 animate-fade-in-up">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Plus className="text-neon-red" />
                {t.sos.form.title}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.issueType}</label>
                    <select 
                        className="w-full bg-bunker-900 border border-white/10 px-4 py-3 text-white focus:border-neon-red outline-none"
                        value={formData.issueType}
                        onChange={e => setFormData({...formData, issueType: e.target.value})}
                    >
                        <option value="hardware">Hardware Failure</option>
                        <option value="software">Software Bug</option>
                        <option value="network">Network/Connectivity</option>
                        <option value="security">Security Breach</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.urgency}</label>
                    <select 
                        className="w-full bg-bunker-900 border border-white/10 px-4 py-3 text-white focus:border-neon-red outline-none"
                        value={formData.urgency}
                        onChange={e => setFormData({...formData, urgency: e.target.value})}
                    >
                        <option value="low">Low (Next Business Day)</option>
                        <option value="medium">Medium (4 Hours)</option>
                        <option value="high">High (Immediate)</option>
                        <option value="critical">CRITICAL (System Down)</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.sos.form.desc}</label>
                    <textarea 
                        rows={4}
                        className="w-full bg-bunker-900 border border-white/10 px-4 py-3 text-white focus:border-neon-red outline-none"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        required
                    ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-end gap-4">
                     <button 
                        type="button" 
                        onClick={() => setShowForm(false)}
                        className="px-6 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs"
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        disabled={submitting}
                        className="px-8 py-3 bg-neon-red text-bunker-950 font-bold font-mono uppercase text-xs hover:bg-white transition-colors disabled:opacity-50"
                    >
                        {submitting ? 'Sending...' : t.sos.form.submit}
                    </button>
                </div>
            </form>
        </div>
      )}

      <div>
        <h2 className="text-xl font-mono text-neon-green mb-6 uppercase tracking-widest flex items-center justify-between">
            {t.sos.historyTitle}
            {loading && <Loader className="animate-spin text-slate-500" size={16} />}
        </h2>
        <div className="bg-bunker-900 border border-white/5 overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-bunker-950 text-slate-500 font-mono text-xs uppercase border-b border-white/10">
                        <th className="p-4">{t.sos.table.id}</th>
                        <th className="p-4">{t.sos.table.date}</th>
                        <th className="p-4">{t.sos.table.issue}</th>
                        <th className="p-4">{t.sos.table.status}</th>
                        {/* @ts-ignore */}
                        <th className="p-4 text-right">{t.sos.table.pricing}</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-mono text-slate-300">
                    {history.map((item) => (
                        <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-neon-green">SOS-{item.id}</td>
                            <td className="p-4">{new Date(item.created_at).toLocaleDateString()}</td>
                            <td className="p-4 capitalize">
                                <div>{item.issue_type}</div>
                                {item.solution && (
                                    <div className="text-[10px] text-slate-500 mt-1 max-w-xs">{item.solution}</div>
                                )}
                            </td>
                            <td className="p-4">{getStatusBadge(item.status)}</td>
                            <td className="p-4 text-right">
                                <div className="flex flex-col items-end">
                                    <span className="text-white font-bold">{item.cost}</span>
                                    {item.market_cost && item.market_cost !== '-' && (
                                        <span className="text-[10px] text-slate-500 line-through decoration-red-500/50">
                                            {item.market_cost}
                                        </span>
                                    )}
                                    {item.is_paid 
                                        // @ts-ignore
                                        ? <span className="text-neon-green text-[9px] border border-neon-green/30 px-1 rounded mt-1">{t.sos.table.paid}</span>
                                        // @ts-ignore
                                        : (item.cost !== '-' && item.status !== 'cancelled') && <span className="text-red-500 text-[9px] border border-red-500/30 px-1 rounded mt-1 animate-pulse">{t.sos.table.unpaid}</span>
                                    }
                                </div>
                            </td>
                        </tr>
                    ))}
                    {!loading && history.length === 0 && (
                        <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-500">NO_RECORDS_FOUND</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>

      {/* Message Modal */}
      {messageModal.isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
             <div className={`bg-bunker-900 border ${messageModal.isError ? 'border-red-500/50' : 'border-neon-green/50'} p-8 max-w-sm w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] clip-corner relative animate-fade-in-up`}>
                 <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 border rounded-full shrink-0 ${messageModal.isError ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-neon-green/10 border-neon-green/30 text-neon-green'}`}>
                        {messageModal.isError ? <AlertTriangle size={24} /> : <CheckCircle size={24} />}
                    </div>
                    <div>
                        <h3 className={`text-xl font-tech font-bold uppercase mb-2 ${messageModal.isError ? 'text-red-500' : 'text-neon-green'}`}>
                            {messageModal.title}
                        </h3>
                        <p className="text-slate-300 font-mono text-sm leading-relaxed">
                            {messageModal.text}
                        </p>
                    </div>
                 </div>
                 
                 <button 
                    onClick={closeMessage} 
                    className={`w-full py-3 font-bold uppercase tracking-widest text-xs border transition-all ${
                        messageModal.isError 
                        ? 'bg-red-500 text-white border-red-500 hover:bg-white hover:text-red-500' 
                        : 'bg-neon-green text-bunker-950 border-neon-green hover:bg-white'
                    }`}
                 >
                    ACKNOWLEDGE
                 </button>
             </div>
        </div>
      )}

    </div>
  );
};
