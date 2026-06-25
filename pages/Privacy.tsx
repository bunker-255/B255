import React from 'react';
import { SEO } from '../components/SEO';
import { Lock } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const pageTranslations = {
  en: {
    title: "Privacy Policy",
    updated: "Last Updated: June 25, 2026",
    sec1Title: "1. Local Processing Only",
    sec1p1: "At Bunker-255, we believe in absolute data sovereignty. Our website and the tools provided on it do not collect, store, or transmit your personal data or uploaded files to any remote servers.",
    sec1p2: "Any processing of data (such as generating invoices or processing files in our tools) is performed entirely locally within your browser on your own device.",
    sec2Title: "2. No Data Storage",
    sec2p1: "Because all work is performed locally, we do not maintain databases of user activity, nor do we save the content you generate using our public tools. Once you close your browser tab or clear your local storage, that data is gone.",
    sec3Title: "3. Third-Party Sharing",
    sec3p1: "Since we do not collect your personal data, we have absolutely nothing to sell, rent, or share with third parties.",
    sec4Title: "4. Client Communications",
    sec4p1: "If you contact us directly via email (admin@bunker-255.com) for project inquiries, we will use your provided contact information solely for the purpose of communicating with you regarding your project. This information is kept confidential within our cooperative.",
    sec5Title: "5. Contact Us",
    sec5p1: "If you have any questions or concerns about our privacy practices, please reach out to us at:"
  },
  ru: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: 25 Июня 2026",
    sec1Title: "1. Только локальная обработка",
    sec1p1: "В Bunker-255 мы верим в абсолютный суверенитет данных. Наш веб-сайт и предоставляемые на нем инструменты не собирают, не хранят и не передают ваши личные данные или загруженные файлы на какие-либо удаленные серверы.",
    sec1p2: "Любая обработка данных (например, создание счетов-фактур или обработка файлов в наших инструментах) выполняется полностью локально в вашем браузере на вашем собственном устройстве.",
    sec2Title: "2. Отсутствие хранения данных",
    sec2p1: "Поскольку вся работа выполняется локально, мы не ведем базы данных об активности пользователей и не сохраняем контент, который вы создаете с помощью наших общедоступных инструментов. Как только вы закроете вкладку браузера или очистите локальное хранилище, эти данные исчезнут.",
    sec3Title: "3. Передача третьим лицам",
    sec3p1: "Поскольку мы не собираем ваши персональные данные, нам абсолютно нечего продавать, сдавать в аренду или передавать третьим лицам.",
    sec4Title: "4. Коммуникация с клиентами",
    sec4p1: "Если вы свяжетесь с нами напрямую по электронной почте (admin@bunker-255.com) для запросов по проекту, мы будем использовать предоставленную вами контактную информацию исключительно для связи с вами по вашему проекту. Эта информация хранится в тайне внутри нашего кооператива.",
    sec5Title: "5. Связаться с нами",
    sec5p1: "Если у вас есть вопросы относительно наших методов обеспечения конфиденциальности, пожалуйста, свяжитесь с нами по адресу:"
  },
  he: {
    title: "מדיניות פרטיות",
    updated: "עודכן לאחרונה: 25 ביוני 2026",
    sec1Title: "1. עיבוד מקומי בלבד",
    sec1p1: "ב-Bunker-255, אנו מאמינים בריבונות נתונים מוחלטת. האתר שלנו והכלים המסופקים בו אינם אוספים, שומרים או מעבירים את הנתונים האישיים שלך או קבצים שהועלו לשרתים מרוחקים כלשהם.",
    sec1p2: "כל עיבוד של נתונים (כגון הפקת חשבוניות או עיבוד קבצים בכלים שלנו) מתבצע כולו באופן מקומי בתוך הדפדפן שלך במכשיר שלך.",
    sec2Title: "2. ללא אחסון נתונים",
    sec2p1: "מכיוון שכל העבודה מתבצעת באופן מקומי, איננו מתחזקים מסדי נתונים של פעילות משתמשים, ואיננו שומרים את התוכן שאתה יוצר באמצעות הכלים הציבוריים שלנו. ברגע שתסגור את כרטיסיית הדפדפן או תנקה את האחסון המקומי שלך, הנתונים האלה יימחקו.",
    sec3Title: "3. שיתוף עם צדדים שלישיים",
    sec3p1: "מכיוון שאיננו אוספים את הנתונים האישיים שלך, אין לנו שום דבר למכור, להשכיר או לשתף עם צדדים שלישיים.",
    sec4Title: "4. תקשורת עם לקוחות",
    sec4p1: "אם תיצור איתנו קשר ישירות בדוא\"ל (admin@bunker-255.com) לשאלות על פרויקטים, אנו נשתמש בפרטי הקשר שסיפקת אך ורק לצורך תקשורת איתך בנוגע לפרויקט שלך. מידע זה נשמר בסודיות בתוך הקואופרטיב שלנו.",
    sec5Title: "5. צור קשר",
    sec5p1: "אם יש לך שאלות או חששות לגבי נוהלי הפרטיות שלנו, אנא פנה אלינו בכתובת:"
  }
};

export const Privacy: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = pageTranslations[language as keyof typeof pageTranslations] || pageTranslations.en;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
      <SEO title={`${t.title} | BUNKER-255`} description={t.title} />
      
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-mono mb-6 rounded">
          <Lock size={14} />
          DATA_PRIVACY
        </div>
        <h1 className="text-4xl md:text-5xl font-tech font-bold text-white mb-6">{t.title}</h1>
        <p className="text-slate-400 font-mono text-sm">{t.updated}</p>
      </div>

      <div className="space-y-8 text-slate-300 leading-relaxed font-light">
        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec1Title}</h2>
          <p>{t.sec1p1}</p>
          <p className="mt-4">{t.sec1p2}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec2Title}</h2>
          <p>{t.sec2p1}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec3Title}</h2>
          <p>{t.sec3p1}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec4Title}</h2>
          <p>{t.sec4p1}</p>
        </section>

        <section className="bg-bunker-900/50 p-6 md:p-8 border border-white/5 rounded-lg clip-corner">
          <h2 className="text-2xl font-bold text-white mb-4">{t.sec5Title}</h2>
          <p>
            {t.sec5p1}
            <br />
            <a href="mailto:admin@bunker-255.com" className="text-neon-green hover:underline mt-2 inline-block font-mono" dir="ltr">admin@bunker-255.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};
