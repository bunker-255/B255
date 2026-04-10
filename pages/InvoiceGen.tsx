import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';
import { Printer, Plus, Trash2, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
}

export const InvoiceGen: React.FC = () => {
  const { language } = useLanguage();
  const isHe = language === 'he';

  const [companyName, setCompanyName] = useState(() => localStorage.getItem('bunker_companyName') || '');
  const [companyId, setCompanyId] = useState(() => localStorage.getItem('bunker_companyId') || '');
  const [companyAddress, setCompanyAddress] = useState(() => localStorage.getItem('bunker_companyAddress') || '');
  const [companyPhone, setCompanyPhone] = useState(() => localStorage.getItem('bunker_companyPhone') || '');
  const [companyEmail, setCompanyEmail] = useState(() => localStorage.getItem('bunker_companyEmail') || '');

  const [clientName, setClientName] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientAddress, setClientAddress] = useState('');

  const [invoiceNumber, setInvoiceNumber] = useState(() => {
    const last = localStorage.getItem('bunker_last_invoice_number');
    if (last) {
      const num = parseInt(last, 10);
      if (!isNaN(num)) {
        return (num + 1).toString();
      }
    }
    return '1001';
  });
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState('');

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: '', quantity: 1, price: 0 }
  ]);

  const [taxRate, setTaxRate] = useState(17);
  const [includeTax, setIncludeTax] = useState(true);

  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [previewScale, setPreviewScale] = useState(1);
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    localStorage.setItem('bunker_companyName', companyName);
    localStorage.setItem('bunker_companyId', companyId);
    localStorage.setItem('bunker_companyAddress', companyAddress);
    localStorage.setItem('bunker_companyPhone', companyPhone);
    localStorage.setItem('bunker_companyEmail', companyEmail);
  }, [companyName, companyId, companyAddress, companyPhone, companyEmail]);

  useEffect(() => {
    const updateScale = () => {
      if (previewContainerRef.current) {
        const parentWidth = previewContainerRef.current.parentElement?.offsetWidth || 800;
        const availableWidth = parentWidth;
        setPreviewScale(Math.min(1, availableWidth / 800));
      }
    };
    
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);

    updateScale();
    window.addEventListener('resize', updateScale);
    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    
    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  const handleAddItem = () => {
    setItems([...items, { id: Math.random().toString(), description: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const taxAmount = includeTax ? subtotal * (taxRate / 100) : 0;
  const total = subtotal + taxAmount;

  const handlePrint = () => {
    localStorage.setItem('bunker_last_invoice_number', invoiceNumber);
    window.print();
  };

  const labels = {
    title: isHe ? 'מחולל חשבוניות' : language === 'ru' ? 'Генератор инвойсов' : 'Invoice Generator',
    companyDetails: isHe ? 'פרטי חברה' : language === 'ru' ? 'Реквизиты компании' : 'Company Details',
    clientDetails: isHe ? 'פרטי לקוח' : language === 'ru' ? 'Реквизиты клиента' : 'Client Details',
    invoiceDetails: isHe ? 'פרטי חשבונית' : language === 'ru' ? 'Детали инвойса' : 'Invoice Details',
    items: isHe ? 'פריטים' : language === 'ru' ? 'Позиции' : 'Items',
    name: isHe ? 'שם' : language === 'ru' ? 'Название/Имя' : 'Name',
    id: isHe ? 'ח.פ / ע.מ' : language === 'ru' ? 'ИНН / ID' : 'Company/Tax ID',
    address: isHe ? 'כתובת' : language === 'ru' ? 'Адрес' : 'Address',
    phone: isHe ? 'טלפון' : language === 'ru' ? 'Телефон' : 'Phone',
    email: isHe ? 'אימייל' : language === 'ru' ? 'Email' : 'Email',
    invNum: isHe ? 'מספר חשבונית' : language === 'ru' ? 'Номер инвойса' : 'Invoice Number',
    date: isHe ? 'תאריך' : language === 'ru' ? 'Дата' : 'Date',
    dueDate: isHe ? 'תאריך לתשלום' : language === 'ru' ? 'Срок оплаты' : 'Due Date',
    desc: isHe ? 'תיאור' : language === 'ru' ? 'Описание' : 'Description',
    qty: isHe ? 'כמות' : language === 'ru' ? 'Кол-во' : 'Qty',
    price: isHe ? 'מחיר יחידה' : language === 'ru' ? 'Цена' : 'Price',
    total: isHe ? 'סה"כ' : language === 'ru' ? 'Итого' : 'Total',
    add: isHe ? 'הוסף פריט' : language === 'ru' ? 'Добавить позицию' : 'Add Item',
    subtotal: isHe ? 'סכום ביניים' : language === 'ru' ? 'Подытог' : 'Subtotal',
    tax: isHe ? 'מע"מ' : language === 'ru' ? 'НДС' : 'Tax (VAT)',
    print: isHe ? 'הדפס / שמור כ-PDF' : language === 'ru' ? 'Печать / Сохранить PDF' : 'Print / Save PDF',
    invoiceTitle: isHe ? 'חשבונית מס / קבלה' : language === 'ru' ? 'Инвойс / Квитанция' : 'Tax Invoice / Receipt',
    to: isHe ? 'לכבוד:' : language === 'ru' ? 'Кому:' : 'Bill To:',
    from: isHe ? 'מאת:' : language === 'ru' ? 'От кого:' : 'From:',
    moreTools: isHe ? 'עוד כלים' : language === 'ru' ? 'Еще инструменты' : 'More Tools'
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen print:p-0 print:m-0 print:min-h-0 print:w-full print:max-w-none">
      <SEO pageKey="tools" />
      
      <div className="mb-8 print:hidden">
        <h1 className="text-3xl font-tech font-bold text-white mb-2">{labels.title}</h1>
        <p className="text-slate-400 font-mono text-sm">BUNKER_INTERNAL_TOOLS // INVOICE_GEN</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:block print:gap-0">
        {/* Editor Form - Hidden when printing */}
        <div className="space-y-6 print:hidden bg-bunker-900 p-6 border border-white/10 rounded-xl" dir={isHe ? 'rtl' : 'ltr'}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Details */}
            <div className="space-y-4">
              <h3 className="text-neon-green font-mono text-sm uppercase border-b border-white/10 pb-2">{labels.companyDetails}</h3>
              <input type="text" placeholder={labels.name} value={companyName} onChange={e => setCompanyName(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-green outline-none" />
              <input type="text" placeholder={labels.id} value={companyId} onChange={e => setCompanyId(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-green outline-none" />
              <input type="text" placeholder={labels.address} value={companyAddress} onChange={e => setCompanyAddress(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-green outline-none" />
              <input type="text" placeholder={labels.phone} value={companyPhone} onChange={e => setCompanyPhone(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-green outline-none" />
              <input type="email" placeholder={labels.email} value={companyEmail} onChange={e => setCompanyEmail(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-green outline-none" />
            </div>

            {/* Client Details */}
            <div className="space-y-4">
              <h3 className="text-neon-cyan font-mono text-sm uppercase border-b border-white/10 pb-2">{labels.clientDetails}</h3>
              <input type="text" placeholder={labels.name} value={clientName} onChange={e => setClientName(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-cyan outline-none" />
              <input type="text" placeholder={labels.id} value={clientId} onChange={e => setClientId(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-cyan outline-none" />
              <textarea placeholder={labels.address} value={clientAddress} onChange={e => setClientAddress(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-neon-cyan outline-none h-24 resize-none" />
            </div>
          </div>

          {/* Invoice Details */}
          <div className="space-y-4">
            <h3 className="text-white font-mono text-sm uppercase border-b border-white/10 pb-2">{labels.invoiceDetails}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">{labels.invNum}</label>
                <input type="text" value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-white outline-none" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">{labels.date}</label>
                <input type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-white outline-none" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">{labels.dueDate}</label>
                <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className="w-full bg-bunker-950 border border-white/10 p-2 text-white rounded focus:border-white outline-none" />
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-4">
            <h3 className="text-white font-mono text-sm uppercase border-b border-white/10 pb-2">{labels.items}</h3>
            {items.map((item, index) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-2 items-start md:items-center bg-bunker-950 p-2 rounded border border-white/5">
                <input type="text" placeholder={labels.desc} value={item.description} onChange={e => handleItemChange(item.id, 'description', e.target.value)} className="flex-1 bg-transparent border-b border-white/10 p-1 text-white focus:border-white outline-none w-full md:w-auto" />
                <div className="flex gap-2 w-full md:w-auto">
                  <input type="number" placeholder={labels.qty} value={item.quantity} onChange={e => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)} className="w-20 bg-transparent border-b border-white/10 p-1 text-white focus:border-white outline-none" />
                  <input type="number" placeholder={labels.price} value={item.price} onChange={e => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)} className="w-24 bg-transparent border-b border-white/10 p-1 text-white focus:border-white outline-none" />
                  <div className="w-24 p-1 text-slate-300 text-right bg-white/5 rounded">
                    {(item.quantity * item.price).toFixed(2)}
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)} className="p-1 text-red-500 hover:bg-red-500/20 rounded transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            <button onClick={handleAddItem} className="flex items-center gap-2 text-sm text-neon-green hover:text-white transition-colors">
              <Plus size={16} /> {labels.add}
            </button>
          </div>

          {/* Tax Settings */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input type="checkbox" checked={includeTax} onChange={e => setIncludeTax(e.target.checked)} className="accent-neon-green" />
              {labels.tax}
            </label>
            {includeTax && (
              <div className="flex items-center gap-2">
                <input type="number" value={taxRate} onChange={e => setTaxRate(parseFloat(e.target.value) || 0)} className="w-16 bg-bunker-950 border border-white/10 p-1 text-white rounded outline-none text-center" />
                <span className="text-slate-400">%</span>
              </div>
            )}
          </div>

          <button onClick={handlePrint} className="w-full mt-6 bg-neon-green text-bunker-950 font-bold py-3 rounded flex items-center justify-center gap-2 hover:bg-white transition-colors">
            <Printer size={20} />
            {labels.print}
          </button>
        </div>

        {/* Preview / Print View */}
        <div className="w-full pb-8 print:pb-0 flex flex-col items-center print:block" ref={previewContainerRef}>
          <div 
            id="invoice-preview-wrapper"
            className="w-full overflow-hidden flex justify-center"
            style={{
              height: (previewScale < 1 && !isPrinting) ? `${1131 * previewScale}px` : 'auto'
            }}
          >
            <div 
              id="invoice-preview-container"
              className="bg-white text-black p-8 md:p-12 rounded-xl shadow-2xl w-[800px] min-h-[1131px] relative shrink-0 origin-top" 
              dir={isHe ? 'rtl' : 'ltr'}
              style={{
                transform: (previewScale < 1 && !isPrinting) ? `scale(${previewScale})` : 'scale(1)',
                transformOrigin: 'top center'
              }}
            >
          {/* Print Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            @media print {
              /* Hide everything else */
              header, footer, .print\\:hidden { display: none !important; }
              
              /* Reset body */
              html, body { height: auto !important; overflow: visible !important; }
              body { background: white !important; color: black !important; margin: 0 !important; padding: 0 !important; }
              body::before, body::after, .scanlines::before { display: none !important; }
              main { padding: 0 !important; margin: 0 !important; }
              
              /* Reset wrappers */
              #invoice-preview-wrapper {
                height: auto !important;
                overflow: visible !important;
                display: block !important;
              }
              
              /* Reset the invoice container to take full width and natural height */
              #invoice-preview-container {
                transform: none !important;
                width: 100% !important;
                max-width: 100% !important;
                min-height: 0 !important;
                height: auto !important;
                margin: 0 auto !important;
                box-shadow: none !important;
                position: static !important;
              }
              
              @page { margin: 0.5cm; size: A4 portrait; }
            }
          `}} />
          
          <div className="h-full flex flex-col print:h-auto print:block">
            {/* Header */}
            <div className="flex justify-between items-start border-b-2 border-slate-200 pb-6 mb-6">
              <div>
                <h1 className="text-4xl font-bold text-slate-800 mb-1">{labels.invoiceTitle}</h1>
                <p className="text-slate-500 font-mono text-sm">#{invoiceNumber}</p>
              </div>
              <div className="text-right">
                <h2 className="text-xl font-bold text-slate-800">{companyName || 'Company Name'}</h2>
                {companyId && <p className="text-slate-600 text-sm">{labels.id}: {companyId}</p>}
                {companyAddress && <p className="text-slate-600 text-sm whitespace-pre-line">{companyAddress}</p>}
                {companyPhone && <p className="text-slate-600 text-sm">{companyPhone}</p>}
                {companyEmail && <p className="text-slate-600 text-sm">{companyEmail}</p>}
              </div>
            </div>

            {/* Info Row */}
            <div className="flex justify-between mb-8">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">{labels.to}</h3>
                <p className="font-bold text-lg text-slate-800">{clientName || 'Client Name'}</p>
                {clientId && <p className="text-slate-600">{labels.id}: {clientId}</p>}
                {clientAddress && <p className="text-slate-600 whitespace-pre-line">{clientAddress}</p>}
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <span className="text-sm font-bold text-slate-400 uppercase mr-2">{labels.date}:</span>
                  <span className="font-medium">{invoiceDate}</span>
                </div>
                {dueDate && (
                  <div>
                    <span className="text-sm font-bold text-slate-400 uppercase mr-2">{labels.dueDate}:</span>
                    <span className="font-medium">{dueDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="flex-1">
              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 text-sm uppercase">
                    <th className="py-3 text-left font-bold w-1/2">{labels.desc}</th>
                    <th className="py-3 text-center font-bold">{labels.qty}</th>
                    <th className="py-3 text-right font-bold">{labels.price}</th>
                    <th className="py-3 text-right font-bold">{labels.total}</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <tr key={item.id} className="border-b border-slate-100">
                      <td className="py-3 text-slate-800">{item.description || '-'}</td>
                      <td className="py-3 text-center text-slate-600">{item.quantity}</td>
                      <td className="py-3 text-right text-slate-600">{item.price.toFixed(2)}</td>
                      <td className="py-3 text-right text-slate-800 font-medium">{(item.quantity * item.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end">
              <div className="w-64 space-y-3">
                <div className="flex justify-between text-slate-600">
                  <span>{labels.subtotal}:</span>
                  <span>{subtotal.toFixed(2)}</span>
                </div>
                {includeTax && (
                  <div className="flex justify-between text-slate-600">
                    <span>{labels.tax} ({taxRate}%):</span>
                    <span>{taxAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-slate-800 border-t-2 border-slate-200 pt-3 mt-3">
                  <span>{labels.total}:</span>
                  <span>{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm print:mt-8">
              Generated by BUNKER-255 InvoiceGen
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      
      {/* More Tools Button */}
      <div className="mt-12 flex justify-center print:hidden">
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-bunker-900 border border-white/10 hover:border-neon-green/50 text-white rounded-xl font-tech font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,163,0.2)] group"
        >
          {labels.moreTools}
          <ArrowRight size={18} className={`transition-transform duration-300 ${isHe ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
        </Link>
      </div>
    </div>
  );
};
