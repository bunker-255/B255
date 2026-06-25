import React from 'react';
import { SEO } from '../components/SEO';
import { Shield } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const pageTranslations = {
  en: {
    title: "Terms of Service",
    updated: "Last Updated: June 25, 2026",
    sec1Title: "1. General Information",
    sec1p1: "Welcome to Bunker-255 (\"we\", \"us\", \"our\"). Bunker-255 is a cooperative of leading IT companies and independent specialists dedicated to helping small and medium-sized businesses (SMBs) with technological implementations.",
    sec1p2: "Please note that Bunker-255 operates as a professional cooperative and is not an officially registered corporate entity. By engaging with our services, you acknowledge and agree to this cooperative structure.",
    sec2Title: "2. Services and Payments",
    sec2p1: "Our payment structures are designed to ensure complete client satisfaction and are divided into two main categories:",
    sec2li1: "Small Orders (up to 3,000 ILS): Payment is required only after the work is completed, and only if you are satisfied with the final result.",
    sec2li2: "Large Orders: Payments are structured in phases. Each completed phase is treated as a separate small order and is paid upon its completion and approval.",
    sec3Title: "3. Governing Law and Jurisdiction",
    sec3p1: "These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the State of Israel.",
    sec4Title: "4. Contact Information",
    sec4p1: "If you have any questions regarding these Terms, please contact us at:"
  },
  ru: {
    title: "Условия обслуживания",
    updated: "Последнее обновление: 25 Июня 2026",
    sec1Title: "1. Общая информация",
    sec1p1: "Добро пожаловать в Bunker-255 («мы», «нас», «наш»). Bunker-255 — это кооператив ведущих ИТ-компаний и независимых специалистов, призванный помогать малому и среднему бизнесу с внедрением технологий.",
    sec1p2: "Обратите внимание, что Bunker-255 работает как профессиональный кооператив и не является официально зарегистрированным юридическим лицом. Прибегая к нашим услугам, вы признаете и соглашаетесь с этой кооперативной структурой.",
    sec2Title: "2. Услуги и Оплата",
    sec2p1: "Наши схемы оплаты разработаны для обеспечения полного удовлетворения клиентов и делятся на две основные категории:",
    sec2li1: "Мелкие заказы (до 3,000 шекелей): Оплата требуется только после завершения работы, и только если вы довольны окончательным результатом.",
    sec2li2: "Крупные заказы: Оплата структурирована поэтапно. Каждый завершенный этап рассматривается как отдельный небольшой заказ и оплачивается по факту его выполнения и утверждения.",
    sec3Title: "3. Применимое право и Юрисдикция",
    sec3p1: "Настоящие Условия обслуживания и любые отдельные соглашения, в соответствии с которыми мы предоставляем вам услуги, регулируются и толкуются в соответствии с законодательством Государства Израиль.",
    sec4Title: "4. Контактная информация",
    sec4p1: "Если у вас есть вопросы относительно настоящих Условий, пожалуйста, свяжитесь с нами по адресу:"
  },
  he: {
    title: "תנאי שירות",
    updated: "עודכן לאחרונה: 25 ביוני 2026",
    sec1Title: "1. מידע כללי",
    sec1p1: "ברוכים הבאים ל-Bunker-255 (\"אנחנו\", \"אותנו\", \"שלנו\"). Bunker-255 הוא קואופרטיב של חברות IT מובילות ומומחים עצמאיים המוקדש לסייע לעסקים קטנים ובינוניים בהטמעות טכנולוגיות.",
    sec1p2: "שימו לב ש-Bunker-255 פועל כקואופרטיב מקצועי ואינו ישות תאגידית רשומה באופן רשמי. על ידי שימוש בשירותים שלנו, אתם מאשרים ומסכימים למבנה קואופרטיבי זה.",
    sec2Title: "2. שירותים ותשלומים",
    sec2p1: "מבנה התשלומים שלנו נועד להבטיח שביעות רצון מלאה של הלקוחות ומחולק לשתי קטגוריות עיקריות:",
    sec2li1: "הזמנות קטנות (עד 3,000 ש\"ח): התשלום נדרש רק לאחר סיום העבודה, ורק במידה ואתם מרוצים מהתוצאה הסופית.",
    sec2li2: "הזמנות גדולות: התשלומים בנויים בשלבים. כל שלב שהושלם נחשב כהזמנה קטנה נפרדת ומשולם עם השלמתו ואישורו.",
    sec3Title: "3. חוק חל וסמכות שיפוט",
    sec3p1: "תנאי שירות אלה וכל הסכמים נפרדים לפיהם אנו מספקים לכם שירותים, יהיו כפופים לחוקי מדינת ישראל ויפורשו בהתאם להם.",
    sec4Title: "4. פרטי קשר",
    sec4p1: "אם יש לכם שאלות בנוגע לתנאים אלה, אנא צרו איתנו קשר בכתובת:"
  }
};

export const Terms: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = pageTranslations[language as keyof typeof pageTranslations] || pageTranslations.en;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
      <SEO title={`${t.title} | BUNKER-255`} description={t.title} />
      
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono mb-6 rounded">
          <Shield size={14} />
          LEGAL_DOCUMENT
        </div>
        <h1 className="text-4xl md:text-5xl font-tech font-bold text-white mb-6">{t.title}</h1>
        <p className="text-slate-400 font-mono text-sm">{t.updated}</p>
      </div>

      <div className="space-y-8 text-slate-300 leading-relaxed font-light">
        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec1Title}</h2>
          <p className="mb-4">{t.sec1p1}</p>
          <p>{t.sec1p2}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec2Title}</h2>
          <p className="mb-4">{t.sec2p1}</p>
          <ul className={`list-disc space-y-2 text-slate-400 ${isRtl ? 'pr-6' : 'pl-6'}`}>
            <li>
              <strong className="text-white">{t.sec2li1.split(':')[0]}:</strong>{t.sec2li1.split(':')[1]}
            </li>
            <li>
              <strong className="text-white">{t.sec2li2.split(':')[0]}:</strong>{t.sec2li2.split(':')[1]}
            </li>
          </ul>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec3Title}</h2>
          <p>{t.sec3p1}</p>
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
