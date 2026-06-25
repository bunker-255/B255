import React from 'react';
import { SEO } from '../components/SEO';
import { Zap } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const pageTranslations = {
  en: {
    title: "Refund Policy",
    updated: "Last Updated: June 25, 2026",
    sec1Title: "1. Post-Payment Model",
    sec1p1: "Bunker-255 operates on a trust-based cooperative model designed to eliminate risk for our clients. Because of this, our refund policy is inherently tied to our post-payment structure.",
    sec2Title: "2. Small Orders (Up to 3,000 ILS)",
    sec2p1: "For small projects and tasks valued up to 3,000 ILS, we do not require upfront payment.",
    sec2p2: "Payment is requested ",
    sec2p2b: "only after the work is delivered and you have approved the final result",
    sec2p2a: ". Because you only pay once you are fully satisfied with the completed work, refunds are generally not applicable or necessary for these orders.",
    sec3Title: "3. Large Orders and Phased Projects",
    sec3p1: "For larger projects exceeding 3,000 ILS, the work is divided into specific, agreed-upon phases.",
    sec3li1: "Each phase is treated as an independent \"small order.\"",
    sec3li2: "Payment for a specific phase is made only upon its successful completion and your approval.",
    sec3li3: "Once a phase is approved and paid for, that specific payment is non-refundable, as the work has been delivered and accepted.",
    sec3li4: "You retain the right to cancel the remainder of the project at any time without financial penalty for unstarted phases.",
    sec4Title: "4. Contacting Us",
    sec4p1: "If you have any disputes or questions regarding payments or deliverables, please contact us immediately so we can resolve the issue:"
  },
  ru: {
    title: "Политика возврата",
    updated: "Последнее обновление: 25 Июня 2026",
    sec1Title: "1. Модель постоплаты",
    sec1p1: "Bunker-255 работает по кооперативной модели, основанной на доверии и призванной устранить риски для наших клиентов. Из-за этого наша политика возврата средств неразрывно связана с нашей структурой оплаты по факту (постоплаты).",
    sec2Title: "2. Мелкие заказы (до 3,000 шекелей)",
    sec2p1: "Для небольших проектов и задач стоимостью до 3,000 шекелей предоплата не требуется.",
    sec2p2: "Оплата запрашивается ",
    sec2p2b: "только после сдачи работы и утверждения вами окончательного результата",
    sec2p2a: ". Поскольку вы платите только тогда, когда полностью удовлетворены выполненной работой, возврат средств, как правило, не применяется и не требуется для таких заказов.",
    sec3Title: "3. Крупные заказы и поэтапные проекты",
    sec3p1: "Для более крупных проектов (свыше 3,000 шекелей) работа делится на конкретные, согласованные этапы.",
    sec3li1: "Каждый этап рассматривается как независимый «мелкий заказ».",
    sec3li2: "Оплата за конкретный этап производится только после его успешного завершения и вашего утверждения.",
    sec3li3: "Как только этап утвержден и оплачен, этот конкретный платеж возврату не подлежит, поскольку работа была доставлена и принята.",
    sec3li4: "За вами сохраняется право отменить оставшуюся часть проекта в любое время без финансовых санкций за неначатые этапы.",
    sec4Title: "4. Связаться с нами",
    sec4p1: "Если у вас возникли споры или вопросы относительно платежей или результатов, немедленно свяжитесь с нами, чтобы мы могли решить проблему:"
  },
  he: {
    title: "מדיניות החזרים",
    updated: "עודכן לאחרונה: 25 ביוני 2026",
    sec1Title: "1. מודל תשלום לאחר ביצוע",
    sec1p1: "Bunker-255 פועל במודל קואופרטיבי מבוסס אמון שנועד למנוע סיכונים ללקוחותינו. בשל כך, מדיניות ההחזרים שלנו קשורה באופן מהותי למבנה התשלום שלנו שמתבצע לאחר ביצוע העבודה.",
    sec2Title: "2. הזמנות קטנות (עד 3,000 ש\"ח)",
    sec2p1: "עבור פרויקטים ומשימות קטנות בשווי של עד 3,000 ש\"ח, איננו דורשים תשלום מראש.",
    sec2p2: "התשלום נדרש ",
    sec2p2b: "רק לאחר מסירת העבודה ולאחר שאישרת את התוצאה הסופית",
    sec2p2a: ". מכיוון שאתה משלם רק לאחר שאתה מרוצה לחלוטין מהעבודה שהושלמה, החזרים כספיים לרוב אינם רלוונטיים או נחוצים עבור הזמנות אלו.",
    sec3Title: "3. הזמנות גדולות ופרויקטים שלביים",
    sec3p1: "עבור פרויקטים גדולים יותר העולים על 3,000 ש\"ח, העבודה מחולקת לשלבים ספציפיים ומוסכמים מראש.",
    sec3li1: "כל שלב נחשב כ\"הזמנה קטנה\" עצמאית.",
    sec3li2: "התשלום עבור שלב ספציפי מתבצע רק עם השלמתו המוצלחת ואישורך.",
    sec3li3: "ברגע ששלב מאושר ומשולם, התשלום הספציפי הזה אינו ניתן להחזר, שכן העבודה נמסרה והתקבלה.",
    sec3li4: "אתה שומר לעצמך את הזכות לבטל את שאר הפרויקט בכל עת ללא קנס כספי עבור שלבים שטרם החלו.",
    sec4Title: "4. יצירת קשר",
    sec4p1: "אם יש לך מחלוקות או שאלות בנוגע לתשלומים או תוצרים, אנא פנה אלינו מיד כדי שנוכל לפתור את הבעיה:"
  }
};

export const Refunds: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = pageTranslations[language as keyof typeof pageTranslations] || pageTranslations.en;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
      <SEO title={`${t.title} | BUNKER-255`} description={t.title} />
      
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono mb-6 rounded">
          <Zap size={14} />
          TRANSACTION_POLICY
        </div>
        <h1 className="text-4xl md:text-5xl font-tech font-bold text-white mb-6">{t.title}</h1>
        <p className="text-slate-400 font-mono text-sm">{t.updated}</p>
      </div>

      <div className="space-y-8 text-slate-300 leading-relaxed font-light">
        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec1Title}</h2>
          <p className="mb-4">{t.sec1p1}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec2Title}</h2>
          <p className="mb-4">{t.sec2p1}</p>
          <p>
            {t.sec2p2}<strong>{t.sec2p2b}</strong>{t.sec2p2a}
          </p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec3Title}</h2>
          <p className="mb-4">{t.sec3p1}</p>
          <ul className={`list-disc space-y-2 text-slate-400 ${isRtl ? 'pr-6' : 'pl-6'}`}>
            <li>{t.sec3li1}</li>
            <li>{t.sec3li2}</li>
            <li>{t.sec3li3}</li>
            <li>{t.sec3li4}</li>
          </ul>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec4Title}</h2>
          <p>
            {t.sec4p1}
            <br />
            <a href="mailto:admin@bunker-255.com" className="text-neon-green hover:underline mt-2 inline-block font-mono" dir="ltr">admin@bunker-255.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};
