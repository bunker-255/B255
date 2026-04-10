
import { Language } from '../types';

export const translations = {
  ru: {
    seo: {
      home: {
        title: 'BUNKER-255 | Лаборатория AI, Веб-разработки и Кибербезопасности',
        desc: 'Экосистема BUNKER-255: Разработка сайтов и CRM, Академия программирования (academy.bunker-255.com), Системы безопасности OnTech (ontech.bunker-255.com) и панель управления Dashboard. Военная надежность решений.',
        keywords: 'BUNKER-255, создание сайтов Израиль, разработка CRM, AI агенты, курсы программирования, OnTech, видеонаблюдение, умный дом, лендинги, автоматизация бизнеса, dashboard bunker'
      },
      services: {
        title: 'Услуги Разработки | Сайты, AI, Видеонаблюдение | BUNKER-255',
        desc: 'Полный цикл: от лендингов до AI-систем. Проектирование сетей и CCTV (OnTech), обучение кодингу (Academy). Военный стандарт качества.',
        keywords: 'разработка веб-сайтов, лендинг пейдж, корпоративный сайт, интернет-магазин, чат-боты telegram, компьютерное зрение, монтаж камер, прокладка сетей, OnTech, уроки react, менторство IT'
      },
      tools: {
        title: 'Инструменты и SaaS | RedGuard & WaveSIL | BUNKER-255',
        desc: 'Эксклюзивные инструменты BUNKER-255: RedGuard (Цева Адом API), WaveSIL (аналитика моря). Доступ через dashboard.bunker-255.com.',
        keywords: 'RedGuard, WaveSIL, API безопасности, аналитика, SaaS решения, система оповещения, погодные алгоритмы'
      }
    },
    nav: {
      home: 'Главная',
      services: 'Услуги',
      tools: 'Инструменты',
      academy: 'Академия',
      about: 'О компании',
      blog: 'Блог',
      entrepreneurs: 'Предпринимателям',
      contact: 'Контакты',
      consultation: 'Консультация'
    },
    hero: {
      label: 'Laboratory v2.5.5 Initialized',
      title: 'Технологическая лаборатория Будущего',
      subtitle: 'Экосистема BUNKER-255: AI решения, Hardware, Образование (Academy) и Приватные инструменты.',
      ctaPrimary: 'Получить консультацию',
      ctaSecondary: 'Наши решения',
      stats: {
        time: 'Экономия Времени',
        projects: 'Проектов',
        exp: 'Лет Опыта',
        clients: 'Клиентов'
      }
    },
    home: {
      servicesTitle: 'Направления Деятельности',
      servicesSubtitle: 'Комплексный подход: Soft, Hard & Education',
      processTitle: 'Режимы Работы',
      processSubtitle: 'Мы адаптируем протоколы под ваши задачи. Быстро, четко, без лишней бюрократии.',
      modes: {
        dev: {
          title: 'Проектная Разработка',
          steps: ['ТЗ и Прототип', 'Код (Sprints)', 'Релиз и Поддержка']
        },
        sos: {
          title: 'SOS Реагирование',
          steps: ['Сигнал (Заявка)', 'Выезд / Диагностика', 'Устранение']
        }
      },
      academyBanner: {
        label: 'Education_Module',
        title: 'BUNKER ACADEMY',
        subtitle: 'Посетите academy.bunker-255.com. Изучите основы веб-разработки (React, Node.js) и AI, чтобы строить инструменты для своего бизнеса самостоятельно. Менторство от ведущих инженеров.',
        cta: 'Перейти в Академию'
      },
      aboutTitle: 'О Нас',
      aboutDesc: 'BUNKER-255 — это группа компаний. Мы объединяем разработку ПО, интеграцию "железа" и образование. Наша миссия — обеспечить надежность и инновации.',
      aboutLink: 'Узнать больше о команде',
      casesTitle: 'Свежие Кейсы',
      casesLink: 'Смотреть портфолио',
      ctaTitle: 'Готовы начать ваш проект?',
      ctaDesc: 'От лендинга до сложной системы видеонаблюдения. Получите стратегический план.',
      ctaButton: 'Связаться с нами'
    },
    services: {
      title: 'Наши Услуги',
      subtitle: 'Комплексные решения для цифровой трансформации.',
      readMore: 'Подробнее',
      price_individual: 'Цена: Индивидуально',
      categories: {
        all: 'Все услуги',
        ai: 'AI & Автоматизация',
        web: 'Веб Разработка',
        hardware: 'Hardware & IoT',
        consulting: 'Консалтинг / Обучение',
        sos: 'SOS для бизнеса'
      },
      items: {
        ai_dev: { 
          title: 'Разработка AI-решений', 
          desc: 'Анализ, разработка, обучение моделей, интеграция.',
          fullDesc: 'Полный цикл внедрения искусственного интеллекта в ваш бизнес. Мы анализируем ваши данные, подбираем оптимальные алгоритмы и обучаем нейросети под конкретные задачи. От предиктивной аналитики до генеративных моделей.',
          features: ['Анализ больших данных', 'Разработка кастомных моделей', 'Интеграция с OpenAI/Claude/Gemini', 'Оптимизация бизнес-процессов']
        },
        automation: { 
          title: 'Автоматизация процессов', 
          desc: 'Документооборот, CRM, маркетинг, HR.',
          fullDesc: 'Устраняем рутину и человеческий фактор. Мы связываем ваши сервисы в единую экосистему (Zapier, Make, n8n), автоматизируем отчетность, рассылки и работу с клиентами. Ваш бизнес начинает работать как швейцарские часы.',
          features: ['Внедрение CRM/ERP', 'Автоматическая генерация документов', 'Сценарии Make/Zapier/n8n', 'Уведомления и алерты']
        },
        chatbots: { 
          title: 'Чат-боты', 
          desc: 'Умные ассистенты для бизнеса и мессенджеров.',
          fullDesc: 'Разработка интеллектуальных ботов для Telegram, WhatsApp и веб-сайтов. Наши боты не просто отвечают на вопросы по скрипту, они используют NLP для понимания контекста, могут принимать заказы, бронировать встречи и интегрироваться с вашей базой данных.',
          features: ['Telegram & WhatsApp боты', 'Поддержка ChatGPT API', 'Прием платежей внутри бота', 'Админ-панель для управления']
        },
        cv: { 
          title: 'Компьютерное зрение', 
          desc: 'Распознавание, анализ, контроль качества.',
          fullDesc: 'Системы видеоаналитики для производства, ритейла и безопасности. Автоматический контроль качества продукции, подсчет посетителей, распознавание лиц и номеров автомобилей, детекция опасных ситуаций на производстве.',
          features: ['Распознавание объектов (YOLO)', 'Контроль качества на конвейере', 'Face ID системы', 'Аналитика трафика']
        },
        
        corp_sites: { 
          title: 'Корпоративные сайты', 
          desc: 'Премиальный дизайн, CMS, SEO.',
          fullDesc: 'Разработка имиджевых сайтов, которые продают. Мы создаем уникальный дизайн, адаптивную верстку и высокую скорость загрузки. Полная SEO-оптимизация и удобная панель управления контентом.',
          features: ['Уникальный UI/UX дизайн', 'Адаптивность (Mobile First)', 'SEO-оптимизация', 'Высокая скорость (Core Web Vitals)']
        },
        web_apps: { 
          title: 'Веб-приложения', 
          desc: 'SaaS, CRM/ERP, порталы.',
          fullDesc: 'Сложные веб-сервисы и платформы. Личные кабинеты (Dashboard), SaaS решения, внутренние корпоративные порталы и маркетплейсы. Мы используем современные стеки (React, Node.js, Python).',
          features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Масштабируемая архитектура', 'Защита данных']
        },
        ecommerce: { 
          title: 'E-commerce', 
          desc: 'Интернет-магазины, платежи, логистика.',
          fullDesc: 'Полноценные решения для онлайн-торговли. Интеграция с платежными шлюзами, системами доставки и складского учета. Удобный интерфейс для покупателей и мощная админка для менеджеров.',
          features: ['Кастомные магазины и Shopify/Woo', 'Интеграция платежей (Stripe/PayPal/Isracard)', 'Синхронизация со складом', 'Системы лояльности']
        },
        
        iot: { 
          title: 'IoT устройства', 
          desc: 'Прототипирование, разработка, производство.',
          fullDesc: 'Разработка интернета вещей от идеи до "железа". Мы проектируем платы, пишем прошивки и создаем облачную инфраструктуру для управления устройствами. Умные датчики, контроллеры и носимая электроника.',
          features: ['Проектирование PCB', 'Прошивка микроконтроллеров', 'Прототипирование корпусов (3D)', 'Интеграция MQTT/Cloud']
        },
        smart_sys: { 
          title: 'Умные системы', 
          desc: 'Умный дом, офис, пром. автоматизация.',
          fullDesc: 'Интеграция умных систем для жилых и коммерческих помещений. Управление светом, климатом, доступом и мультимедиа из единого интерфейса. Энергоэффективность и комфорт.',
          features: ['Home Assistant / KNX', 'Умное освещение и климат', 'Голосовое управление', 'Сценарии автоматизации']
        },
        
        consulting: { 
          title: 'IT-консалтинг / Академия', 
          desc: 'Аудит, стратегия, обучение персонала.',
          fullDesc: 'Экспертная оценка IT-инфраструктуры и обучение. Через Academy.bunker-255.com мы обучаем ваши кадры или лично вас современному стеку технологий (React, Python, AI).',
          features: ['Технический аудит', 'Обучение сотрудников', 'Менторство для стартапов', 'Архитектурное проектирование']
        },
        support: { 
          title: 'Техподдержка', 
          desc: '24/7 мониторинг и помощь.',
          fullDesc: 'Обеспечение бесперебойной работы ваших сервисов. Мониторинг серверов, быстрое устранение сбоев, регулярные бэкапы и обновления безопасности.',
          features: ['SLA гарантии', 'Мониторинг 24/7', 'Регулярные обновления', 'Защита от DDoS']
        },

        // SOS
        cctv_install: { 
          title: 'Установка CCTV', 
          desc: 'Монтаж и настройка камер и систем безопасности.',
          fullDesc: 'Профессиональное проектирование и монтаж систем видеонаблюдения. IP-камеры, распознавание лиц, удаленный доступ со смартфона и запись в облако.',
          features: ['IP и аналоговые системы', 'Удаленный просмотр', 'Ночное видение', 'Датчики движения']
        },
        cctv_maint: { 
          title: 'ТО Видеонаблюдения', 
          desc: 'Регулярная проверка, чистка и ремонт систем безопасности.',
          fullDesc: 'Сервисное обслуживание существующих систем. Диагностика кабелей, чистка камер, обновление ПО регистраторов и восстановление утерянных доступов.',
          features: ['Диагностика оборудования', 'Чистка оптики', 'Восстановление архивов', 'Апгрейд системы']
        },
        electricity: { 
          title: 'Освещение и Электрика', 
          desc: 'Профессиональный монтаж освещения, проводки и электрощитков.',
          fullDesc: 'Все виды электромонтажных работ. От замены розеток до полной разводки электрики в офисе или цехе. Установка сложного светового оборудования и трековых систем.',
          features: ['Сборка электрощитов', 'Прокладка кабеля', 'Монтаж освещения', 'Устранение замыканий']
        },
        equipment_dev: { 
          title: 'Разработка оборудования', 
          desc: 'Создание нестандартных технических устройств под ваши задачи.',
          fullDesc: 'Инженерное решение нестандартных задач. Нужно устройство, которого нет на рынке? Мы спроектируем и соберем его для вас. Механика, электроника и программное обеспечение в одном комплексе.',
          features: ['R&D исследования', 'Сборка прототипов', 'Реверс-инжиниринг', 'Мелкосерийное производство']
        },
        net_wiring: { 
          title: 'Интернет и Сети', 
          desc: 'Прокладка локальных сетей (СКС), настройка АТС и Wi-Fi.',
          fullDesc: 'Создание надежной сетевой инфраструктуры. Прокладка оптоволокна и витой пары, установка серверных шкафов, настройка бесшовного Wi-Fi (Mesh) для офисов и складов.',
          features: ['Монтаж СКС', 'Настройка Mikrotik/Cisco', 'Бесшовный Wi-Fi', 'IP-телефония']
        },
        tech_troubleshoot: { 
          title: 'Решение проблем', 
          desc: 'Диагностика и устранение неполадок любой сложности.',
          fullDesc: 'Скорая техническая помощь для бизнеса. Если что-то сломалось, не включается или работает некорректно — наши инженеры найдут причину и устранят её на месте.',
          features: ['Срочный выезд', 'Глубокая диагностика', 'Ремонт на месте', 'Подменный фонд']
        }
      }
    },
    serviceDetail: {
      systemOverview: 'Обзор Системы',
      approach: 'Наш подход к реализации интегрирует надежность военного уровня с передовыми инновациями. Мы развертываем масштабируемую архитектуру.',
      techSpecs: 'Технические Характеристики',
      executionProtocol: 'Протокол Выполнения',
      steps: {
        analysis: 'Анализ',
        development: 'Разработка',
        deployment: 'Внедрение'
      },
      orderCard: {
        title: 'Инициализация',
        subtitle: 'Настройте параметры запроса и запустите цикл разработки.',
        category: 'Категория',
        responseTime: 'Время отклика',
        securityLevel: 'Уровень защиты',
        startProject: 'Начать Проект',
        emergency: 'Доступен Экстренный Приоритет',
        responseImmediate: 'Немедленно',
        responseStandard: '24-48 Часов',
        securityMax: 'Максимальный'
      },
      helpCard: {
        title: 'Нужна помощь?',
        desc: 'Наши инженеры готовы провести аудит вашей текущей инфраструктуры.',
        cta: 'Бесплатная Консультация'
      }
    },
    about: {
      missionTitle: 'Миссия BUNKER-255',
      missionDesc: 'Обеспечение бизнеса передовыми технологическими решениями, гарантирующими безопасность, эффективность и рост в цифровую эпоху.',
      storyTitle: 'История',
      storyDesc: 'Основанная группой инженеров и разработчиков, лаборатория выросла из закрытого сообщества энтузиастов в полноценного технологического партнера для бизнеса.',
      coopTitle: 'Кооперация',
      coopDesc: 'Мы верим в силу объединения компетенций. Наша сеть партнеров позволяет решать задачи любого масштаба.',
      values: {
        reliability: { title: 'Надежность', desc: 'Системы, которые работают стабильно.' },
        result: { title: 'Результат', desc: 'Фокус на достижении конкретных бизнес-целей.' },
        innovation: { title: 'Инновации', desc: 'Использование новейших технологий.' },
        security: { title: 'Безопасность', desc: 'Защита данных и процессов — наш приоритет.' }
      },
      partnersTitle: 'Наши Партнеры',
      partnersDesc: 'Компании, с которыми мы строим будущее.',
      partners: {
        p1: { name: 'OnTech', desc: 'Камеры, Сети и Интернет' },
        p2: { name: 'BizInSpace', desc: 'Инвестиционный фонд' },
        p3: { name: 'DEV SQUAD', desc: 'Сообщество разработчиков' },
        p4: { name: 'SECURE NET', desc: 'Решения кибербезопасности' }
      },
      teamTitle: 'Команда',
      team: {
        m1: { name: 'Илья Лазарев', role: 'CEO & Founder', bio: 'Эксперт в области веб-разработки и управления проектами.' },
        m2: { name: 'Андрей Ливинберг', role: 'CTO & Co-Founder', bio: 'Специалист по архитектуре систем и AI решениям.' },
        m3: { name: 'Лилия Хабло', role: 'Head of Design', bio: 'Креативный директор, UI/UX эксперт.' }
      }
    },
    cases: {
      title: 'Проекты',
      subtitle: 'Избранные кейсы реализации сложных технических решений.',
      link: 'Подробнее',
      items: {
        c1: { 
          title: 'AI Аналитика для Ритейла', 
          desc: 'Система компьютерного зрения для анализа поведения покупателей.', 
          results: { k1: 'Рост продаж', k2: 'Точность' } 
        },
        c2: { 
          title: 'Корпоративный Портал', 
          desc: 'Внутренняя система управления для логистической компании.', 
          results: { k1: 'Эффективность', k2: 'Скорость' } 
        },
        c3: { 
          title: 'IoT Контроллер', 
          desc: 'Устройство для удаленного управления промышленным оборудованием.', 
          results: { k1: 'Отказоустойчивость', k2: 'Экономия' } 
        }
      }
    },
    tools: {
      title: 'Инструменты',
      subtitle: 'Эксклюзивные разработки лаборатории BUNKER-255.',
      openTool: 'Открыть',
      categories: {
        all: 'Все инструменты',
        business: 'Для бизнеса',
        entertainment: 'Развлечения и отдых'
      },
      items: {
        wavesil: { title: 'WaveSIL', status: 'Beta', desc: 'Инструмент анализа состояния моря и прогнозирования волн.' },
        invoiceGen: { title: 'InvoiceGen', status: 'Active', desc: 'Генератор квитанций и инвойсов с поддержкой иврита.' },
        qrGen: { title: 'QRGen', status: 'Active', desc: 'Генератор красивых QR-кодов с логотипом и градиентами.' }
      }
    },
    entrepreneurs: {
      title: 'Предпринимателям',
      subtitle: 'Мы помогаем стартапам и бизнесу на всех этапах развития.',
      options: {
        startups: { title: 'Стартапы', desc: 'Разработка MVP, технический аудит, запуск продукта.' },
        equity: { title: 'Инвестиции', desc: 'Поиск инвестиций и технологическое партнерство.' }
      },
      buttons: {
        discuss: 'Обсудить идею',
        invest: 'Стать инвестором'
      }
    },
    ideas_page: {
      title: 'Идеи и Концепты',
      subtitle: 'База знаний перспективных идей для реализации.',
      items: {
        i1: { title: 'Smart Farming AI', status: 'Concept', desc: 'Система мониторинга состояния почвы и растений на базе AI.' },
        i2: { title: 'Urban Logistics Drone', status: 'Research', desc: 'Автономные дроны для доставки в городской среде.' },
        i3: { title: 'Crypto Secure Messenger', status: 'Prototype', desc: 'Мессенджер на блокчейне с квантовой защитой.' }
      },
      labels: {
        tech: 'Технологии',
        cta: 'Стать партнером'
      }
    },
    investors: {
      title: 'Инвесторам',
      subtitle: 'Финансовые показатели и возможности для инвестиций.',
      charts: {
        revenue: 'Рост Выручки',
        clients: 'Рост Клиентов'
      },
      options: {
        company: { title: 'Вложиться в Компанию', desc: 'Стать акционером BUNKER-255 и получать дивиденды.' },
        portfolio: { title: 'Портфельные Инвестиции', desc: 'Инвестировать в конкретные проекты и стартапы нашей экосистемы.' }
      },
      buttons: {
        deck: 'Скачать презентацию',
        projects: 'Список проектов'
      }
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Мы всегда открыты для новых вызовов и интересных проектов.',
      form: {
        title: 'Отправить сообщение',
        name: 'Ваше Имя',
        email: 'Email',
        type: 'Тип запроса',
        message: 'Сообщение',
        submit: 'Отправить',
        sending: 'Отправка...',
        success: 'Сообщение отправлено!',
        types: {
          consultation: 'Консультация',
          dev: 'Разработка',
          invest: 'Инвестиции'
        }
      }
    },
    blog: {
      title: 'Блог Лаборатории',
      subtitle: 'Новости, технические статьи и отчеты о разработках.',
      loading: 'Загрузка...',
      readMore: 'Читать',
      notFound: 'Запись не найдена',
      backToBlog: 'Назад в блог',
      publishedAt: 'Опубликовано'
    }
  },
  en: {
    seo: {
      home: {
        title: 'BUNKER-255 | AI Development, Web & Cybersecurity Lab',
        desc: 'BUNKER-255 Ecosystem: Custom Websites, AI Agents, Academy for Developers (academy.bunker-255.com), OnTech Security Systems (ontech.bunker-255.com), and Dashboard.',
        keywords: 'BUNKER-255, AI Development Israel, Web Development, Coding Academy, OnTech, CCTV installation, Business Automation, Dashboard, Startup Accelerator'
      },
      services: {
        title: 'Dev Services | Sites, Systems & AI | BUNKER-255',
        desc: 'Full-cycle dev: Landing pages to AI. Network & CCTV by OnTech. Coding lessons at Academy. Military-grade reliability for your business.',
        keywords: 'website creation, landing pages, corporate sites, custom CRM, AI chatbots, computer vision, network cabling, CCTV installation, OnTech, coding lessons, React mentorship'
      },
      tools: {
        title: 'Tools & SaaS | RedGuard & WaveSIL | BUNKER-255',
        desc: 'Exclusive tools: RedGuard (Tzeva Adom API), WaveSIL (Sea Analytics). Access via dashboard.bunker-255.com.',
        keywords: 'RedGuard, WaveSIL, Security Tools, Analytics, SaaS solutions, Alert System, Weather Algorithms'
      }
    },
    nav: {
      home: 'Home',
      services: 'Services',
      tools: 'Tools',
      academy: 'Academy',
      about: 'About',
      blog: 'Blog',
      entrepreneurs: 'Entrepreneurs',
      contact: 'Contact',
      consultation: 'Consultation'
    },
    hero: {
      label: 'Laboratory v2.5.5 Initialized',
      title: 'Technology Laboratory of the Future',
      subtitle: 'BUNKER-255 Ecosystem: AI Solutions, Hardware, Education (Academy), and Private Tools.',
      ctaPrimary: 'Get Consultation',
      ctaSecondary: 'Our Solutions',
      stats: {
        time: 'Time Saved',
        projects: 'Projects',
        exp: 'Years Exp',
        clients: 'Clients'
      }
    },
    home: {
      servicesTitle: 'Areas of Activity',
      servicesSubtitle: 'Comprehensive approach: Soft, Hard & Education',
      processTitle: 'Operating Modes',
      processSubtitle: 'We adapt protocols to your tasks. Fast, clear, without unnecessary bureaucracy.',
      modes: {
        dev: {
          title: 'Project Development',
          steps: ['Specs & Prototype', 'Code (Sprints)', 'Release & Support']
        },
        sos: {
          title: 'SOS Response',
          steps: ['Signal (Ticket)', 'Dispatch / Diagnostics', 'Resolution']
        }
      },
      academyBanner: {
        label: 'Education_Module',
        title: 'BUNKER ACADEMY',
        subtitle: 'Visit academy.bunker-255.com. Learn web development (React, Node.js) and AI to build your own business tools. Mentorship from top engineers.',
        cta: 'Go to Academy'
      },
      aboutTitle: 'About Us',
      aboutDesc: 'BUNKER-255 is a group of companies. We combine software development, hardware integration, and education. Our mission is reliability and innovation.',
      aboutLink: 'Meet the Team',
      casesTitle: 'Recent Cases',
      casesLink: 'View Portfolio',
      ctaTitle: 'Ready to start your project?',
      ctaDesc: 'From landing pages to complex CCTV systems. Get a strategic plan.',
      ctaButton: 'Contact Us'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for digital transformation.',
      readMore: 'Learn More',
      price_individual: 'Price: Custom',
      categories: {
        all: 'All Services',
        ai: 'AI & Automation',
        web: 'Web Development',
        hardware: 'Hardware & IoT',
        consulting: 'Consulting / Academy',
        sos: 'SOS for Business'
      },
      items: {
        ai_dev: { 
          title: 'AI Solutions Development', 
          desc: 'Analysis, development, model training, integration.',
          fullDesc: 'Full cycle implementation of artificial intelligence into your business. We analyze your data, select optimal algorithms, and train neural networks for specific tasks. From predictive analytics to generative models.',
          features: ['Big Data Analysis', 'Custom Model Development', 'OpenAI/Claude/Gemini Integration', 'Business Process Optimization']
        },
        automation: { 
          title: 'Process Automation', 
          desc: 'Workflow, CRM, marketing, HR.',
          fullDesc: 'Eliminate routine and human error. We connect your services into a single ecosystem (Zapier, Make, n8n), automate reporting, mailings, and client work. Your business starts running like a Swiss watch.',
          features: ['CRM/ERP Implementation', 'Automatic Document Generation', 'Make/Zapier/n8n Scenarios', 'Notifications and Alerts']
        },
        chatbots: { 
          title: 'Chatbots', 
          desc: 'Smart assistants for business and messengers.',
          fullDesc: 'Development of intelligent bots for Telegram, WhatsApp, and websites. Our bots don\'t just answer questions by script; they use NLP to understand context, can take orders, book appointments, and integrate with your database.',
          features: ['Telegram & WhatsApp Bots', 'ChatGPT API Support', 'In-bot Payments', 'Admin Panel Management']
        },
        cv: { 
          title: 'Computer Vision', 
          desc: 'Recognition, analysis, quality control.',
          fullDesc: 'Video analytics systems for manufacturing, retail, and security. Automatic product quality control, visitor counting, face and license plate recognition, detection of dangerous situations in production.',
          features: ['Object Recognition (YOLO)', 'Conveyor Quality Control', 'Face ID Systems', 'Traffic Analytics']
        },
        
        corp_sites: { 
          title: 'Corporate Websites', 
          desc: 'Premium design, CMS, SEO.',
          fullDesc: 'Development of image websites that sell. We create unique designs, responsive layouts, and high loading speeds. Full SEO optimization and convenient content management panel.',
          features: ['Unique UI/UX Design', 'Responsive (Mobile First)', 'SEO Optimization', 'High Speed (Core Web Vitals)']
        },
        web_apps: { 
          title: 'Web Applications', 
          desc: 'SaaS, CRM/ERP, portals.',
          fullDesc: 'Complex web services and platforms. User dashboards (Dashboard), SaaS solutions, internal corporate portals, and marketplaces. We use modern stacks (React, Node.js, Python).',
          features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Scalable Architecture', 'Data Protection']
        },
        ecommerce: { 
          title: 'E-commerce', 
          desc: 'Online stores, payments, logistics.',
          fullDesc: 'Complete solutions for online trade. Integration with payment gateways, delivery systems, and warehouse accounting. Convenient interface for buyers and powerful admin for managers.',
          features: ['Custom Stores & Shopify/Woo', 'Payment Integration (Stripe/PayPal/Isracard)', 'Warehouse Sync', 'Loyalty Systems']
        },
        
        iot: { 
          title: 'IoT Devices', 
          desc: 'Prototyping, development, production.',
          fullDesc: 'Internet of Things development from idea to hardware. We design boards, write firmware, and create cloud infrastructure for device management. Smart sensors, controllers, and wearable electronics.',
          features: ['PCB Design', 'Microcontroller Firmware', 'Case Prototyping (3D)', 'MQTT/Cloud Integration']
        },
        smart_sys: { 
          title: 'Smart Systems', 
          desc: 'Smart home, office, industrial automation.',
          fullDesc: 'Integration of smart systems for residential and commercial premises. Control of lighting, climate, access, and multimedia from a single interface. Energy efficiency and comfort.',
          features: ['Home Assistant / KNX', 'Smart Lighting & Climate', 'Voice Control', 'Automation Scenarios']
        },
        
        consulting: { 
          title: 'IT Consulting / Academy', 
          desc: 'Audit, strategy, staff training.',
          fullDesc: 'Expert assessment of IT infrastructure and education. Through Academy.bunker-255.com, we train your staff or you personally in modern tech stacks (React, Python, AI).',
          features: ['Technical Audit', 'Staff Training', 'Startup Mentorship', 'Architectural Design']
        },
        support: { 
          title: 'Tech Support', 
          desc: '24/7 monitoring and help.',
          fullDesc: 'Ensuring uninterrupted operation of your services. Server monitoring, rapid failure resolution, regular backups, and security updates.',
          features: ['SLA Guarantees', '24/7 Monitoring', 'Regular Updates', 'DDoS Protection']
        },

        // SOS
        cctv_install: { 
          title: 'CCTV Installation', 
          desc: 'Installation and setup of cameras and security systems.',
          fullDesc: 'Professional design and installation of video surveillance systems. IP cameras, face recognition, remote access from smartphones, and cloud recording.',
          features: ['IP & Analog Systems', 'Remote Viewing', 'Night Vision', 'Motion Sensors']
        },
        cctv_maint: { 
          title: 'CCTV Maintenance', 
          desc: 'Regular checkup, cleaning, and repair.',
          fullDesc: 'Service maintenance of existing systems. Cable diagnostics, camera cleaning, recorder software updates, and restoration of lost access.',
          features: ['Equipment Diagnostics', 'Optics Cleaning', 'Archive Restoration', 'System Upgrade']
        },
        electricity: { 
          title: 'Lighting & Electric', 
          desc: 'Professional installation of lighting, wiring, and panels.',
          fullDesc: 'All types of electrical work. From replacing sockets to complete wiring in an office or workshop. Installation of complex lighting equipment and track systems.',
          features: ['Panel Assembly', 'Cable Laying', 'Lighting Installation', 'Short Circuit Repair']
        },
        equipment_dev: { 
          title: 'Equipment Dev', 
          desc: 'Creation of custom technical devices.',
          fullDesc: 'Engineering solution for non-standard tasks. Need a device not on the market? We will design and assemble it for you. Mechanics, electronics, and software in one complex.',
          features: ['R&D Research', 'Prototype Assembly', 'Reverse Engineering', 'Small Batch Production']
        },
        net_wiring: { 
          title: 'Internet & Networks', 
          desc: 'LAN cabling, PBX setup, and Wi-Fi.',
          fullDesc: 'Creation of reliable network infrastructure. Fiber optic and twisted pair cabling, server rack installation, seamless Wi-Fi (Mesh) setup for offices and warehouses.',
          features: ['SCS Installation', 'Mikrotik/Cisco Setup', 'Seamless Wi-Fi', 'IP Telephony']
        },
        tech_troubleshoot: { 
          title: 'Troubleshooting', 
          desc: 'Diagnostics and repair of any complexity.',
          fullDesc: 'Emergency technical aid for business. If something is broken, won\'t turn on, or works incorrectly — our engineers will find the cause and fix it on the spot.',
          features: ['Urgent Callout', 'Deep Diagnostics', 'On-site Repair', 'Replacement Fund']
        }
      }
    },
    serviceDetail: {
      systemOverview: 'System Overview',
      approach: 'Our approach integrates military-grade reliability with cutting-edge innovation. We deploy scalable architecture designed to withstand high loads and security threats.',
      techSpecs: 'Technical Specifications',
      executionProtocol: 'Execution Protocol',
      steps: {
        analysis: 'Analysis',
        development: 'Development',
        deployment: 'Deployment'
      },
      orderCard: {
        title: 'Initialize Order',
        subtitle: 'Configure your request parameters and initiate the development cycle.',
        category: 'Category',
        responseTime: 'Response Time',
        securityLevel: 'Security Level',
        startProject: 'Start Project',
        emergency: 'Emergency Priority Available',
        responseImmediate: 'Immediate',
        responseStandard: '24-48 Hours',
        securityMax: 'Maximum'
      },
      helpCard: {
        title: 'Not sure what you need?',
        desc: 'Our engineers are ready to audit your current infrastructure.',
        cta: 'Free Consultation'
      }
    },
    about: {
      missionTitle: 'BUNKER-255 Mission',
      missionDesc: 'Providing businesses with advanced technological solutions guaranteeing safety, efficiency, and growth in the digital era.',
      storyTitle: 'History',
      storyDesc: 'Founded by a group of engineers and developers, the lab grew from a closed community of enthusiasts into a full-fledged technology partner for business.',
      coopTitle: 'Cooperation',
      coopDesc: 'We believe in the power of combining competencies. Our partner network allows solving tasks of any scale.',
      values: {
        reliability: { title: 'Reliability', desc: 'Systems that work stably.' },
        result: { title: 'Result', desc: 'Focus on achieving concrete business goals.' },
        innovation: { title: 'Innovation', desc: 'Using the newest technologies.' },
        security: { title: 'Security', desc: 'Data and process protection is our priority.' }
      },
      partnersTitle: 'Our Partners',
      partnersDesc: 'Companies with whom we build the future.',
      partners: {
        p1: { name: 'OnTech', desc: 'CCTV, Networks & Internet' },
        p2: { name: 'BizInSpace', desc: 'Investment Fund' },
        p3: { name: 'DEV SQUAD', desc: 'Developer Community' },
        p4: { name: 'SECURE NET', desc: 'Cybersecurity Solutions' }
      },
      teamTitle: 'Team',
      team: {
        m1: { name: 'Ilya Lazarev', role: 'CEO & Founder', bio: 'Expert in web development and project management.' },
        m2: { name: 'Andrey Livinberg', role: 'CTO & Co-Founder', bio: 'Specialist in system architecture and AI solutions.' },
        m3: { name: 'Lilia Khablo', role: 'Head of Design', bio: 'Creative Director, UI/UX expert.' }
      }
    },
    cases: {
      title: 'Projects',
      subtitle: 'Selected cases of complex technical solution implementation.',
      link: 'Details',
      items: {
        c1: { 
          title: 'AI Analytics for Retail', 
          desc: 'Computer vision system for analyzing customer behavior.', 
          results: { k1: 'Sales Growth', k2: 'Accuracy' } 
        },
        c2: { 
          title: 'Corporate Portal', 
          desc: 'Internal management system for logistics company.', 
          results: { k1: 'Efficiency', k2: 'Speed' } 
        },
        c3: { 
          title: 'IoT Controller', 
          desc: 'Device for remote industrial equipment control.', 
          results: { k1: 'Reliability', k2: 'Savings' } 
        }
      }
    },
    tools: {
      title: 'Tools',
      subtitle: 'Exclusive developments by BUNKER-255 Laboratory.',
      openTool: 'Open',
      categories: {
        all: 'All Tools',
        business: 'For Business',
        entertainment: 'Entertainment & Leisure'
      },
      items: {
        wavesil: { title: 'WaveSIL', status: 'Beta', desc: 'Sea condition analysis and wave forecasting tool.' },
        invoiceGen: { title: 'InvoiceGen', status: 'Active', desc: 'Invoice and receipt generator with Hebrew support.' },
        qrGen: { title: 'QRGen', status: 'Active', desc: 'Beautiful QR code generator with logo and gradients support.' }
      }
    },
    entrepreneurs: {
      title: 'Entrepreneurs',
      subtitle: 'We help startups and businesses at all development stages.',
      options: {
        startups: { title: 'Startups', desc: 'MVP development, technical audit, product launch.' },
        equity: { title: 'Investments', desc: 'Seeking investments and technological partnership.' }
      },
      buttons: {
        discuss: 'Discuss Idea',
        invest: 'Become Investor'
      }
    },
    ideas_page: {
      title: 'Ideas & Concepts',
      subtitle: 'Knowledge base of promising ideas for implementation.',
      items: {
        i1: { title: 'Smart Farming AI', status: 'Concept', desc: 'Soil and plant condition monitoring system based on AI.' },
        i2: { title: 'Urban Logistics Drone', status: 'Research', desc: 'Autonomous drones for delivery in urban environments.' },
        i3: { title: 'Crypto Secure Messenger', status: 'Prototype', desc: 'Blockchain messenger with quantum protection.' }
      },
      labels: {
        tech: 'Technologies',
        cta: 'Become Partner'
      }
    },
    investors: {
      title: 'Investors',
      subtitle: 'Financial indicators and investment opportunities.',
      charts: {
        revenue: 'Revenue Growth',
        clients: 'Client Growth'
      },
      options: {
        company: { title: 'Invest in Company', desc: 'Become a BUNKER-255 shareholder and receive dividends.' },
        portfolio: { title: 'Portfolio Investments', desc: 'Invest in specific projects and startups in our ecosystem.' }
      },
      buttons: {
        deck: 'Download Deck',
        projects: 'Project List'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are always open to new challenges and interesting projects.',
      form: {
        title: 'Send Message',
        name: 'Your Name',
        email: 'Email',
        type: 'Request Type',
        message: 'Message',
        submit: 'Send',
        sending: 'Sending...',
        success: 'Message Sent!',
        types: {
          consultation: 'Consultation',
          dev: 'Development',
          invest: 'Investments'
        }
      }
    },
    blog: {
      title: 'Lab Blog',
      subtitle: 'News, technical articles, and development reports.',
      loading: 'Loading...',
      readMore: 'Read',
      notFound: 'Post not found',
      backToBlog: 'Back to Blog',
      publishedAt: 'Published'
    }
  },
  he: {
    seo: {
      home: {
        title: 'BUNKER-255 | פיתוח AI, אתרים וסייבר',
        desc: 'אקוסיסטם BUNKER-255: בניית אתרים, סוכני AI, אקדמיה למפתחים (academy.bunker-255.com), מערכות אבטחה OnTech (ontech.bunker-255.com) ודאשבורד.',
        keywords: 'בניית אתרים, פיתוח מערכות WEB, סוכני AI, התקנת מצלמות אבטחה, OnTech, אקדמיה לתכנות, קורס React, אוטומציה עסקית, דאשבורד ניהול'
      },
      services: {
        title: 'שירותי פיתוח | אתרים, AI ומצלמות | BUNKER-255',
        desc: 'פתרונות מקצה לקצה: מדפי נחיתה ועד AI. תשתיות ומצלמות ע״י OnTech. לימודי קוד ב-Academy. אמינות צבאית לעסק שלך.',
        keywords: 'בניית אתרים לעסקים, דפי נחיתה, חנות אינטרנטית, צ׳אטבוט לוואטסאפ, התקנת מצלמות אבטחה, תשתיות תקשורת, OnTech, לימודי תכנות, פיתוח תוכנה'
      },
      tools: {
        title: 'כלים ו-SaaS | RedGuard & WaveSIL | BUNKER-255',
        desc: 'כלים בלעדיים מבית BUNKER-255: מערכת RedGuard (צבע אדום), WaveSIL (ניתוח ים). גישה דרך dashboard.bunker-255.com.',
        keywords: 'צבע אדום API, חיזוי גלים, כלי אבטחה, מערכות SaaS, דאשבורד ללקוחות'
      }
    },
    nav: {
      home: 'ראשי',
      services: 'שירותים',
      tools: 'כלים',
      academy: 'אקדמיה',
      about: 'אודות',
      blog: 'בלוג',
      entrepreneurs: 'ליזמים',
      contact: 'צור קשר',
      consultation: 'ייעוץ'
    },
    hero: {
      label: 'Laboratory v2.5.5 Initialized',
      title: 'מעבדת הטכנולוגיה של העתיד',
      subtitle: 'אקוסיסטם BUNKER-255: פתרונות AI, חומרה, חינוך (Academy) וכלים פרטיים.',
      ctaPrimary: 'קבל ייעוץ',
      ctaSecondary: 'הפתרונות שלנו',
      stats: {
        time: 'חיסכון בזמן',
        projects: 'פרויקטים',
        exp: 'שנות ניסיון',
        clients: 'לקוחות'
      }
    },
    home: {
      servicesTitle: 'תחומי פעילות',
      servicesSubtitle: 'גישה מקיפה: תוכנה, חומרה וחינוך',
      processTitle: 'מצבי עבודה',
      processSubtitle: 'אנו מתאימים את הפרוטוקולים למשימות שלך. מהיר, ברור, ללא בירוקרטיה מיותרת.',
      modes: {
        dev: {
          title: 'פיתוח פרויקטים',
          steps: ['אפיון ופרוטוטייפ', 'קוד (Sprints)', 'שחרור ותמיכה']
        },
        sos: {
          title: 'תגובת SOS',
          steps: ['אות (קריאה)', 'יציאה / אבחון', 'פתרון']
        }
      },
      academyBanner: {
        label: 'Education_Module',
        title: 'BUNKER ACADEMY',
        subtitle: 'בקרו ב-academy.bunker-255.com. למדו פיתוח ווב (React, Node.js) ו-AI כדי לבנות כלים לעסק שלכם בעצמכם. מנטורינג ממהנדסים מובילים.',
        cta: 'מעבר לאקדמיה'
      },
      aboutTitle: 'מי אנחנו',
      aboutDesc: 'BUNKER-255 היא קבוצת חברות. אנו משלבים פיתוח תוכנה, אינטגרציית חומרה וחינוך. המשימה שלנו היא להבטיח אמינות וחדשנות.',
      aboutLink: 'הכר את הצוות',
      casesTitle: 'תיקי עבודות',
      casesLink: 'לפורטפוליו',
      ctaTitle: 'מוכנים להתחיל בפרויקט?',
      ctaDesc: 'מדף נחיתה ועד מערכת מצלמות מורכבת. קבלו תוכנית אסטרטגית.',
      ctaButton: 'צור קשר'
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות מקיפים לטרנספורמציה דיגיטלית.',
      readMore: 'למידע נוסף',
      price_individual: 'מחיר: מותאם אישית',
      categories: {
        all: 'כל השירותים',
        ai: 'AI ואוטומציה',
        web: 'פיתוח ווב',
        hardware: 'Hardware & IoT',
        consulting: 'ייעוץ / אקדמיה',
        sos: 'SOS לעסקים'
      },
      items: {
        ai_dev: { 
          title: 'פיתוח פתרונות AI', 
          desc: 'ניתוח, פיתוח, אימון מודלים, אינטגרציה.',
          fullDesc: 'הטמעה מלאה של בינה מלאכותית בעסק שלך. אנו מנתחים את הנתונים שלך, בוחרים אלגוריתמים אופטימליים ומאמנים רשתות עצביות למשימות ספציפיות. מניתוח חיזוי ועד מודלים יוצרים.',
          features: ['ניתוח ביג דאטה', 'פיתוח מודלים מותאמים אישית', 'אינטגרציה עם OpenAI/Claude/Gemini', 'אופטימיזציה של תהליכים עסקיים']
        },
        automation: { 
          title: 'אוטומציה של תהליכים', 
          desc: 'זרימת עבודה, CRM, שיווק, משאבי אנוש.',
          fullDesc: 'ביטול שגרה וטעויות אנוש. אנו מחברים את השירותים שלך למערכת אקולוגית אחת (Zapier, Make, n8n), ומבצעים אוטומציה של דיווחים, דיוור ועבודה עם לקוחות. העסק שלך מתחיל לעבוד כמו שעון שוויצרי.',
          features: ['הטמעת CRM/ERP', 'יצירת מסמכים אוטומטית', 'תרחישי Make/Zapier/n8n', 'התראות והודעות']
        },
        chatbots: { 
          title: 'צ׳אטבוטים', 
          desc: 'עוזרים חכמים לעסקים ולמסנג׳רים.',
          fullDesc: 'פיתוח בוטים חכמים לטלגרם, וואטסאפ ואתרים. הבוטים שלנו לא רק עונים על שאלות לפי תסריט; הם משתמשים ב-NLP כדי להבין הקשר, יכולים לקבל הזמנות, לקבוע פגישות ולהתממשק למסד הנתונים שלך.',
          features: ['בוטים לטלגרם ו-WhatsApp', 'תמיכה ב-ChatGPT API', 'תשלומים בתוך הבוט', 'פאנל ניהול']
        },
        cv: { 
          title: 'ראייה ממוחשבת', 
          desc: 'זיהוי, ניתוח, בקרת איכות.',
          fullDesc: 'מערכות אנליטיקה וידאו לייצור, קמעונאות ואבטחה. בקרת איכות מוצרים אוטומטית, ספירת מבקרים, זיהוי פנים ולוחיות רישוי, גילוי מצבים מסוכנים בייצור.',
          features: ['זיהוי עצמים (YOLO)', 'בקרת איכות בפס ייצור', 'מערכות זיהוי פנים', 'אנליטיקת תנועה']
        },
        
        corp_sites: { 
          title: 'אתרי תדמית', 
          desc: 'עיצוב פרמיום, מערכת ניהול, קידום אתרים.',
          fullDesc: 'פיתוח אתרי תדמית שמוכרים. אנו יוצרים עיצוב ייחודי, התאמה למובייל ומהירות טעינה גבוהה. אופטימיזציית SEO מלאה ופאנל ניהול תוכן נוח.',
          features: ['עיצוב UI/UX ייחודי', 'רספונסיביות (Mobile First)', 'אופטימיזציית SEO', 'מהירות גבוהה (Core Web Vitals)']
        },
        web_apps: { 
          title: 'אפליקציות ווב', 
          desc: 'SaaS, CRM/ERP, פורטלים.',
          fullDesc: 'שירותי ווב ופלטפורמות מורכבות. אזורים אישיים (Dashboard), פתרונות SaaS, פורטלים ארגוניים פנימיים ומרקטפלייסים. אנו משתמשים בטכנולוגיות מודרניות (React, Node.js, Python).',
          features: ['אפליקציות עמוד יחיד (SPA)', 'אפליקציות ווב פרוגרסיביות (PWA)', 'ארכיטקטורה ניתנת להרחבה', 'הגנת נתונים']
        },
        ecommerce: { 
          title: 'מסחר אלקטרוני', 
          desc: 'חנויות אונליין, תשלומים, לוגיסטיקה.',
          fullDesc: 'פתרונות מלאים למסחר מקוון. אינטגרציה עם שערי תשלום, מערכות משלוח וניהול מלאי. ממשק נוח לקונים ואדמין חזק למנהלים.',
          features: ['חנויות מותאמות אישית ו-Shopify/Woo', 'אינטגרציית תשלומים (Stripe/PayPal/Isracard)', 'סנכרון מלאי', 'מערכות נאמנות']
        },
        
        iot: { 
          title: 'מכשירי IoT', 
          desc: 'בניית אב טיפוס, פיתוח, ייצור.',
          fullDesc: 'פיתוח האינטרנט של הדברים מרעיון ועד חומרה. אנו מתכננים מעגלים, כותבים קושחה ויוצרים תשתית ענן לניהול מכשירים. חיישנים חכמים, בקרים ואלקטרוניקה לבישה.',
          features: ['תכנון מעגלים מודפסים (PCB)', 'קושחה למיקרו-בקרים', 'בניית אב טיפוס למארזים (3D)', 'אינטגרציית MQTT/Cloud']
        },
        smart_sys: { 
          title: 'מערכות חכמות', 
          desc: 'בית חכם, משרד, אוטומציה תעשייתית.',
          fullDesc: 'אינטגרציה של מערכות חכמות למגורים ולמסחר. שליטה בתאורה, אקלים, גישה ומולטימדיה מממשק אחד. יעילות אנרגטית ונוחות.',
          features: ['Home Assistant / KNX', 'תאורה ואקלים חכמים', 'שליטה קולית', 'תרחישי אוטומציה']
        },
        
        consulting: { 
          title: 'ייעוץ IT / אקדמיה', 
          desc: 'ביקורת, אסטרטגיה, הדרכת צוותים.',
          fullDesc: 'הערכת מומחה של תשתית ה-IT וחינוך טכנולוגי. דרך Academy.bunker-255.com אנו מכשירים את הצוות שלך או אותך אישית בטכנולוגיות החדישות ביותר (React, Python, AI).',
          features: ['ביקורת טכנית', 'הכשרת עובדים', 'מנטורינג לסטארטאפים', 'תכנון ארכיטקטוני']
        },
        support: { 
          title: 'תמיכה טכנית', 
          desc: 'ניטור ועזרה 24/7.',
          fullDesc: 'הבטחת פעולה רציפה של השירותים שלך. ניטור שרתים, פתרון מהיר של תקלות, גיבויים קבועים ועדכוני אבטחה.',
          features: ['הבטחת רמת שירות (SLA)', 'ניטור 24/7', 'עדכונים שוטפים', 'הגנה מפני DDoS']
        },

        // SOS
        cctv_install: { 
          title: 'התקנת מצלמות', 
          desc: 'התקנה והגדרה של מצלמות ומערכות אבטחה.',
          fullDesc: 'תכנון והתקנה מקצועית של מערכות וידאו. מצלמות IP, זיהוי פנים, גישה מרחוק מהסמארטפון והקלטה לענן.',
          features: ['מערכות IP ואנלוגיות', 'צפייה מרחוק', 'ראיית לילה', 'חיישני תנועה']
        },
        cctv_maint: { 
          title: 'תחזוקת מצלמות', 
          desc: 'בדיקה שוטפת, ניקוי ותיקון.',
          fullDesc: 'שירות תחזוקה למערכות קיימות. אבחון כבלים, ניקוי מצלמות, עדכון תוכנת מכשירי הקלטה ושחזור גישות שאבדו.',
          features: ['אבחון ציוד', 'ניקוי אופטיקה', 'שחזור ארכיונים', 'שדרוג מערכת']
        },
        electricity: { 
          title: 'תאורה וחשמל', 
          desc: 'התקנה מקצועית של תאורה, חיווט ולוחות.',
          fullDesc: 'כל סוגי עבודות החשמל. מהחלפת שקעים ועד חיווט מלא במשרד או בבית מלאכה. התקנת ציוד תאורה מורכב ומערכות מסילה.',
          features: ['הרכבת לוחות חשמל', 'הנחת כבלים', 'התקנת תאורה', 'תיקון קצרים']
        },
        equipment_dev: { 
          title: 'פיתוח ציוד', 
          desc: 'יצירת מכשירים טכניים מותאמים אישית.',
          fullDesc: 'פתרון הנדסי למשימות לא סטנדרטיות. צריך מכשיר שלא קיים בשוק? אנו נתכנן ונרכיב אותו עבורך. מכניקה, אלקטרוניקה ותוכנה במתחם אחד.',
          features: ['מחקר ופיתוח (R&D)', 'הרכבת אב טיפוס', 'הנדסה לאחור', 'ייצור סדרתי קטן']
        },
        net_wiring: { 
          title: 'אינטרנט ורשתות', 
          desc: 'פריסת רשתות תקשורת, מרכזיות ו-Wi-Fi.',
          fullDesc: 'יצירת תשתית רשת אמינה. פריסת סיבים אופטיים וכבלי רשת, התקנת ארונות שרתים, הגדרת Wi-Fi ללא תפרים (Mesh) למשרדים ומחסנים.',
          features: ['התקנת תשתיות תקשורת', 'הגדרת Mikrotik/Cisco', 'Wi-Fi ללא תפרים', 'טלפונית IP']
        },
        tech_troubleshoot: { 
          title: 'פתרון תקלות', 
          desc: 'אבחון ותיקון בכל רמת מורכבות.',
          fullDesc: 'עזרה טכנית דחופה לעסקים. אם משהו נשבר, לא נדלק או עובד לא תקין — המהנדסים שלנו ימצאו את הסיבה ויתקנו אותה במקום.',
          features: ['קריאה דחופה', 'אבחון מעמיק', 'תיקון במקום', 'קרן החלפה']
        }
      }
    },
    serviceDetail: {
      systemOverview: 'סקירת מערכת',
      approach: 'הגישה שלנו ליישום משלבת אמינות ברמה צבאית עם חדשנות פורצת דרך. אנו פורסים ארכיטקטורה ניתנת להרחבה שנועדה לעמוד בעומסים גבוהים ואיומי אבטחה.',
      techSpecs: 'מפרט טכני',
      executionProtocol: 'פרוטוקול ביצוע',
      steps: {
        analysis: 'ניתוח',
        development: 'פיתוח',
        deployment: 'הטמעה'
      },
      orderCard: {
        title: 'הזמן עכשיו',
        subtitle: 'הגדר את פרטי הבקשה והתחל את מחזור הפיתוח.',
        category: 'קטגוריה',
        responseTime: 'זמן תגובה',
        securityLevel: 'רמת אבטחה',
        startProject: 'התחל פרויקט',
        emergency: 'עדיפות חירום זמינה',
        responseImmediate: 'מיידי',
        responseStandard: '24-48 שעות',
        securityMax: 'מקסימלי'
      },
      helpCard: {
        title: 'לא בטוח מה אתה צריך?',
        desc: 'המהנדסים שלנו מוכנים לבצע ביקורת לתשתית הנוכחית שלך.',
        cta: 'ייעוץ חינם'
      }
    },
    about: {
      missionTitle: 'המשימה של BUNKER-255',
      missionDesc: 'אספקת פתרונות טכנולוגיים מתקדמים לעסקים, המבטיחים ביטחון, יעילות וצמיחה בעידן הדיגיטלי.',
      storyTitle: 'היסטוריה',
      storyDesc: 'המעבדה נוסדה על ידי קבוצת מהנדסים ומפתחים, וצמחה מקהילה סגורה של חובבים לשותף טכנולוגי מלא לעסקים.',
      coopTitle: 'שיתוף פעולה',
      coopDesc: 'אנו מאמינים בכוחו של איחוד מיומנויות. רשת השותפים שלנו מאפשרת פתרון משימות בכל סדר גודל.',
      values: {
        reliability: { title: 'אמינות', desc: 'מערכות שעובדות ביציבות.' },
        result: { title: 'תוצאה', desc: 'מיקוד בהשגת מטרות עסקיות קונקרטיות.' },
        innovation: { title: 'חדשנות', desc: 'שימוש בטכנולוגיות החדישות ביותר.' },
        security: { title: 'אבטחה', desc: 'הגנה על נתונים ותהליכים היא בראש סדר העדיפויות שלנו.' }
      },
      partnersTitle: 'השותפים שלנו',
      partnersDesc: 'חברות איתן אנו בונים את העתיד.',
      partners: {
        p1: { name: 'OnTech', desc: 'מצלמות, רשתות ואינטרנט' },
        p2: { name: 'BizInSpace', desc: 'קרן השקעות' },
        p3: { name: 'DEV SQUAD', desc: 'קהילת מפתחים' },
        p4: { name: 'SECURE NET', desc: 'פתרונות סייבר' }
      },
      teamTitle: 'הצוות',
      team: {
        m1: { name: 'איליה לזרב', role: 'מנכ"ל ומייסד', bio: 'מומחה בפיתוח ווב וניהול פרויקטים.' },
        m2: { name: 'אנדריי ליבינברג', role: 'סמנכ"ל טכנולוגיות ומייסד שותף', bio: 'מומחה לארכיטקטורת מערכות ופתרונות AI.' },
        m3: { name: 'ליליה חבלו', role: 'מנהלת עיצוב', bio: 'מנהלת קריאייטיב, מומחית UI/UX.' }
      }
    },
    cases: {
      title: 'פרויקטים',
      subtitle: 'מקרים נבחרים של יישום פתרונות טכניים מורכבים.',
      link: 'פרטים נוספים',
      items: {
        c1: { 
          title: 'אנליטיקת AI לקמעונאות', 
          desc: 'מערכת ראייה ממוחשבת לניתוח התנהגות לקוחות.', 
          results: { k1: 'צמיחה במכירות', k2: 'דיוק' } 
        },
        c2: { 
          title: 'פורטל ארגוני', 
          desc: 'מערכת ניהול פנימית לחברת לוגיסטיקה.', 
          results: { k1: 'יעילות', k2: 'מהירות' } 
        },
        c3: { 
          title: 'בקר IoT', 
          desc: 'מכשיר לשליטה מרחוק בציוד תעשייתי.', 
          results: { k1: 'אמינות', k2: 'חיסכון' } 
        }
      }
    },
    tools: {
      title: 'כלים',
      subtitle: 'פיתוחים עצמיים של מעבדת BUNKER-255.',
      openTool: 'פתח',
      categories: {
        all: 'כל הכלים',
        business: 'לעסקים',
        entertainment: 'בידור ופנאי'
      },
      items: {
        wavesil: { title: 'WaveSIL', status: 'בטא', desc: 'כלי לניתוח תנאי ים וחיזוי גלים.' },
        invoiceGen: { title: 'InvoiceGen', status: 'פעיל', desc: 'מחולל חשבוניות וקבלות עם תמיכה מלאה בעברית.' },
        qrGen: { title: 'QRGen', status: 'פעיל', desc: 'מחולל קודי QR מעוצבים עם תמיכה בלוגו וגרדיאנטים.' }
      }
    },
    entrepreneurs: {
      title: 'ליזמים',
      subtitle: 'אנו עוזרים לסטארטאפים ולעסקים בכל שלבי הפיתוח.',
      options: {
        startups: { title: 'סטארטאפים', desc: 'פיתוח MVP, ביקורת טכנית, השקת מוצר.' },
        equity: { title: 'השקעות', desc: 'חיפוש השקעות ושותפות טכנולוגית.' }
      },
      buttons: {
        discuss: 'דון ברעיון',
        invest: 'הפוך למשקיע'
      }
    },
    ideas_page: {
      title: 'רעיונות וקונספטים',
      subtitle: 'בסיס ידע של רעיונות מבטיחים ליישום.',
      items: {
        i1: { title: 'Smart Farming AI', status: 'קונספט', desc: 'מערכת ניטור מצב קרקע וצמחים מבוססת AI.' },
        i2: { title: 'Urban Logistics Drone', status: 'מחקר', desc: 'רחפנים אוטונומיים למשלוחים בסביבה עירונית.' },
        i3: { title: 'Crypto Secure Messenger', status: 'אב טיפוס', desc: 'מסנג׳ר על בלוקצ׳יין עם הגנה קוונטית.' }
      },
      labels: {
        tech: 'טכנולוגיות',
        cta: 'הפוך לשותף'
      }
    },
    investors: {
      title: 'למשקיעים',
      subtitle: 'מדדים פיננסיים והזדמנויות השקעה.',
      charts: {
        revenue: 'צמיחה בהכנסות',
        clients: 'צמיחה בלקוחות'
      },
      options: {
        company: { title: 'השקעה בחברה', desc: 'הפוך לבעל מניות ב-BUNKER-255 וקבל דיבידנדים.' },
        portfolio: { title: 'השקעות בפורטפוליו', desc: 'השקעה בפרויקטים וסטארטאפים ספציפיים באקוסיסטם שלנו.' }
      },
      buttons: {
        deck: 'הורד מצגת',
        projects: 'רשימת פרויקטים'
      }
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'אנו תמיד פתוחים לאתגרים חדשים ופרויקטים מעניינים.',
      form: {
        title: 'שלח הודעה',
        name: 'השם שלך',
        email: 'אימייל',
        type: 'סוג בקשה',
        message: 'הודעה',
        submit: 'שלח',
        sending: 'שולח...',
        success: 'הודעה נשלחה!',
        types: {
          consultation: 'ייעוץ',
          dev: 'פיתוח',
          invest: 'השקעות'
        }
      }
    },
    blog: {
      title: 'בלוג המעבדה',
      subtitle: 'חדשות, מאמרים טכניים ודוחות פיתוח.',
      loading: 'טוען...',
      readMore: 'קרא עוד',
      notFound: 'פוסט לא נמצא',
      backToBlog: 'חזרה לבלוג',
      publishedAt: 'פורסם'
    }
  }
};
