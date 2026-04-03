
import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Siren, ShoppingCart, X, CheckCircle, AlertTriangle, Bug } from 'lucide-react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { useAuth } from '../lib/AuthContext';
import { SERVICES_LIST } from '../constants';
import { SEO } from '../components/SEO';
import { api } from '../lib/api';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'web' | 'hardware' | 'consulting' | 'sos'>('all');
  
  // Modal State
  const [orderModal, setOrderModal] = useState({
      isOpen: false,
      serviceId: '',
      serviceName: ''
  });
  const [orderForm, setOrderForm] = useState({
      projectName: '',
      description: '',
      contact: ''
  });
  const [submitting, setSubmitting] = useState(false);
  
  // Debug/Message Modal
  const [messageModal, setMessageModal] = useState({ 
      isOpen: false, 
      title: '', 
      text: '', 
      isError: false,
      debugData: null as any 
  });


  useEffect(() => {
    const category = searchParams.get('category');
    if (category && ['ai', 'web', 'hardware', 'consulting', 'sos'].includes(category)) {
      setActiveTab(category as any);
    } else {
      setActiveTab('all');
    }
  }, [searchParams]);

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeTab);

  const handleOrderClick = (serviceId: string, serviceTitle: string) => {
      try {
          if (!user) {
              setMessageModal({
                  isOpen: true,
                  title: 'AUTHENTICATION ERROR',
                  text: 'User session not found. Please log in.',
                  isError: true,
                  debugData: { error: 'No user in context' }
              });
              return;
          }

          setOrderModal({ isOpen: true, serviceId, serviceName: serviceTitle });
          
      } catch (err: any) {
          console.error("Order Handler Error:", err);
          setMessageModal({
              isOpen: true,
              title: 'SYSTEM ERROR',
              text: 'An error occurred while processing your request.',
              isError: true,
              debugData: { message: err.message, stack: err.stack }
          });
      }
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!user) return;
      setSubmitting(true);

      try {
          await api.records.create('service_orders', {
              user_id: user.id,
              user_email: user.email,
              service_type: orderModal.serviceId, // simplified type mapping
              project_name: orderForm.projectName || orderModal.serviceName,
              description: orderForm.description,
              contact_info: orderForm.contact,
              status: 'pending',
              price: '-',
              eta: null
          });

          setOrderModal({ ...orderModal, isOpen: false });
          setOrderForm({ projectName: '', description: '', contact: '' });
          setMessageModal({
              isOpen: true,
              title: 'ORDER PLACED',
              text: 'Your order has been received. Check your Dashboard for updates.',
              isError: false,
              debugData: null
          });

      } catch (err: any) {
           setMessageModal({
              isOpen: true,
              title: 'DB ERROR',
              text: err.message,
              isError: true,
              debugData: err
          });
      } finally {
          setSubmitting(false);
      }
  };

  return (
    <>
    <div className="py-20 container mx-auto px-4 md:px-6 relative">
      <SEO pageKey="services" />
      <div className="text-center mb-16 relative">
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
         <div className="inline-block bg-bunker-950 px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-tech font-bold text-white mb-4 tracking-tight">
                <span className="text-neon-green">/</span> {t.services.title}
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto font-mono text-sm text-neon-green/70">
            {t.services.subtitle}
            </p>
        </div>
      </div>

      <div className="flex justify-center mb-16 flex-wrap gap-3 md:gap-4">
        {[
          { id: 'all', label: t.services.categories.all },
          { id: 'ai', label: t.services.categories.ai },
          { id: 'web', label: t.services.categories.web },
          { id: 'hardware', label: t.services.categories.hardware },
          { id: 'consulting', label: t.services.categories.consulting },
          { id: 'sos', label: t.services.categories.sos, icon: <Siren size={14} className="mr-2 inline" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              const newUrl = tab.id === 'all' ? '/services' : `/services?category=${tab.id}`;
              window.history.pushState({}, '', newUrl);
            }}
            className={`px-4 py-2 md:px-6 md:py-3 font-mono text-[10px] md:text-xs uppercase tracking-widest clip-corner transition-all border flex items-center ${
              activeTab === tab.id 
                ? 'bg-neon-green text-bunker-950 border-neon-green font-bold' 
                : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            {/* @ts-ignore */}
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* FORCE GRID-COLS-2 MINIMUM */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up">
        {filteredServices.map((service, idx) => {
          // Safe access to translation items
          // @ts-ignore
          const serviceInfo = t.services.items?.[service.id] || { title: service.id, desc: 'Service description...' };
          const categoryColor = service.category === 'sos' ? 'text-neon-red border-neon-red/30' : 'text-neon-green border-neon-green/30';
          const hoverBorder = service.category === 'sos' ? 'group-hover:border-neon-red' : 'group-hover:border-neon-green';
          
          return (
            <div key={idx} className={`group bg-bunker-900/50 relative p-4 md:p-8 border border-white/5 ${hoverBorder} transition-all flex flex-col hover:bg-bunker-900`}>
                <div className="absolute top-0 ltr:right-0 rtl:left-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <Zap size={16} className={service.category === 'sos' ? 'text-neon-red' : 'text-neon-green'} />
                </div>
                
                <div className="mb-4 md:mb-6 flex flex-col items-start gap-3">
                    <div className={`w-10 h-10 md:w-14 md:h-14 bg-bunker-950 border flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] clip-corner shrink-0 ${categoryColor}`}>
                        <service.icon size={20} className="md:w-7 md:h-7" />
                    </div>
                </div>

                <h3 className={`text-sm md:text-2xl font-bold text-white mb-2 md:mb-3 transition-colors leading-tight ${service.category === 'sos' ? 'group-hover:text-neon-red' : 'group-hover:text-neon-green'}`}>
                    {serviceInfo.title}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-400 mb-4 md:mb-8 flex-grow leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                    {serviceInfo.desc}
                </p>
                
                <div className="mt-auto pt-4 md:pt-6 border-t border-white/5 flex items-center justify-between gap-2">
                    <span className="text-neon-cyan font-mono text-[10px] md:text-xs">
                        {/* @ts-ignore */}
                        {serviceInfo.price || t.services.price_individual}
                    </span>
                    
                    {service.category !== 'sos' && (
                        /* CHANGED TO DIV to prevent any implicit form submission or default button behavior */
                        <div 
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleOrderClick(service.id, serviceInfo.title);
                            }}
                            className="flex items-center gap-2 px-3 py-2 bg-neon-green/10 border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-bunker-950 font-mono text-[10px] uppercase font-bold transition-all rounded cursor-pointer z-20 relative select-none"
                        >
                            <ShoppingCart size={12} />
                            {/* @ts-ignore */}
                            {t.services.orderBtn}
                        </div>
                    )}

                    {service.category === 'sos' && (
                         <Link to="/sos" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/10 text-slate-400 hover:text-bunker-950 transition-all clip-corner hover:bg-neon-red hover:border-neon-red">
                            <ArrowRight size={14} className={`md:w-4 md:h-4 ${language === 'he' ? 'rotate-180' : ''}`} />
                         </Link>
                    )}
                </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* MODALS RENDERED HERE TO AVOID CSS CONFLICTS */}
    {/* Order Modal - Z-INDEX 10001 (Above Scanlines) */}
    {orderModal.isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-bunker-950/90 backdrop-blur-sm">
            <div className="bg-bunker-900 border border-neon-green/30 w-full max-w-lg clip-corner shadow-2xl relative animate-fade-in-up">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="text-xl font-tech font-bold text-white flex items-center gap-2">
                        <ShoppingCart className="text-neon-green" size={20} />
                        {/* @ts-ignore */}
                        {t.services.modal?.title || 'Order Service'}
                    </h3>
                    <button onClick={() => setOrderModal({...orderModal, isOpen: false})} className="text-slate-400 hover:text-white">
                        <X size={20} />
                    </button>
                </div>
                
                <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
                        <div className="bg-bunker-950 p-3 border border-white/10 mb-4 text-sm text-neon-green font-mono">
                            SERVICE: {orderModal.serviceName}
                        </div>

                        <div>
                            {/* @ts-ignore */}
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.services.modal?.projectName || 'Project Name'}</label>
                            <input 
                                type="text" 
                                required
                                value={orderForm.projectName}
                                onChange={e => setOrderForm({...orderForm, projectName: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                placeholder={orderModal.serviceName}
                            />
                        </div>

                        <div>
                            {/* @ts-ignore */}
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.services.modal?.desc || 'Description'}</label>
                            <textarea 
                                rows={3}
                                required
                                value={orderForm.description}
                                onChange={e => setOrderForm({...orderForm, description: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                            ></textarea>
                        </div>

                        <div>
                            {/* @ts-ignore */}
                            <label className="block text-xs font-mono text-slate-400 mb-2 uppercase">{t.services.modal?.contact || 'Contact'}</label>
                            <input 
                                type="text" 
                                required
                                value={orderForm.contact}
                                onChange={e => setOrderForm({...orderForm, contact: e.target.value})}
                                className="w-full bg-bunker-950 border border-white/10 px-4 py-3 text-white focus:border-neon-green outline-none"
                                placeholder="@username or +972..."
                            />
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-white/10">
                            {/* @ts-ignore */}
                            <button type="button" onClick={() => setOrderModal({...orderModal, isOpen: false})} className="flex-1 py-3 border border-white/10 text-slate-400 hover:text-white font-mono uppercase text-xs font-bold">{t.services.modal?.cancel || 'Cancel'}</button>
                            {/* @ts-ignore */}
                            <button type="submit" disabled={submitting} className="flex-1 py-3 bg-neon-green text-bunker-950 font-mono uppercase text-xs font-bold hover:bg-white transition-colors flex items-center justify-center gap-2">{submitting ? '...' : (t.services.modal?.submit || 'Submit')}</button>
                        </div>
                </form>
            </div>
        </div>
    )}

    {/* Message Modal - Z-INDEX 10002 */}
    {messageModal.isOpen && (
    <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <div className={`bg-bunker-900 border-2 ${messageModal.isError ? 'border-red-500' : 'border-neon-green'} p-8 max-w-lg w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] clip-corner relative animate-fade-in-up`}>
                <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 border rounded-full shrink-0 ${messageModal.isError ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-neon-green/10 border-neon-green/30 text-neon-green'}`}>
                    {messageModal.isError ? <Bug size={32} /> : <CheckCircle size={32} />}
                </div>
                <div className="w-full overflow-hidden">
                    <h3 className={`text-xl font-tech font-bold uppercase mb-2 ${messageModal.isError ? 'text-red-500' : 'text-neon-green'}`}>
                        {messageModal.title}
                    </h3>
                    <p className="text-slate-300 font-mono text-sm leading-relaxed mb-4">
                        {messageModal.text}
                    </p>
                    
                    {/* RAW DEBUG DATA DISPLAY */}
                    {messageModal.debugData && (
                        <div className="bg-black/50 p-3 border border-white/10 text-[10px] font-mono text-slate-400 overflow-x-auto max-h-[150px] overflow-y-auto rounded whitespace-pre-wrap break-all">
                            {JSON.stringify(messageModal.debugData, null, 2)}
                        </div>
                    )}
                </div>
                </div>
                
                <button 
                onClick={() => setMessageModal({...messageModal, isOpen: false})} 
                className={`w-full py-4 font-bold uppercase tracking-widest text-sm border-2 transition-all ${
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
    </>
  );
};
