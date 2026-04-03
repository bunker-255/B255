

export const translations = {
  ru: {
    seo: {
      home: { title: 'BUNKER-255 | Панель управления', desc: 'Безопасная операционная панель.', keywords: 'BUNKER, AI, Tech' },
      services: { title: 'Услуги | BUNKER-255', desc: 'Наши услуги.', keywords: 'services, development' },
      training: { title: 'Обучение | BUNKER-255', desc: 'Доступ к академии.', keywords: 'training, courses' },
      tools: { title: 'Инструменты | BUNKER-255', desc: 'Внутренние инструменты.', keywords: 'tools, internal' }
    },
    nav: {
      dashboard: 'Обзор',
      sos: 'SOS Сервис',
      profile: 'Профиль',
      admin: 'Админ',
      logout: 'Выход',
      login: 'Вход'
    },
    auth: {
      loginTitle: 'Вход в систему',
      registerTitle: 'Регистрация',
      email: 'Email',
      password: 'Пароль',
      submitLogin: 'Войти',
      submitRegister: 'Создать аккаунт',
      noAccount: 'Нет аккаунта?',
      hasAccount: 'Есть аккаунт?',
      registerLink: 'Регистрация',
      loginLink: 'Вход'
    },
    dashboard: {
      welcome: 'Добро пожаловать, Оператор.',
      status: 'Статус Системы',
      activeTickets: 'Активные заявки',
      totalSaved: 'Сэкономлено',
      latestActivity: 'Лента Активности',
      subscription: 'Подписка',
      noActivity: 'АКТИВНОСТЬ НЕ ОБНАРУЖЕНА',
      lastTicket: 'Заявка',
      actions: {
        orderTitle: 'Заказать услугу',
        orderDesc: 'Закажите любую услугу и наслаждайтесь как ценами, так и качеством.',
        orderBtn: 'Заказать',
        sosTitle: 'Экстренный Вызов (SOS)',
        sosDesc: 'Наши специалисты выедут в ближайшее время к клиенту для решения проблемы.',
        sosBtn: 'Вызвать SOS'
      }
    },
    hero: {
      label: 'СТАТУС СИСТЕМЫ: ОНЛАЙН',
      title: 'Технологии Будущего',
      subtitle: 'Продвинутое программное обеспечение, оборудование и интеграция ИИ для современного мира.',
      ctaPrimary: 'Запуск Протокола',
      ctaSecondary: 'Обзор Систем',
      stats: { time: 'Эффективность', projects: 'Развернуто', exp: 'Опыт', clients: 'Узлы' }
    },
    home: {
      servicesTitle: 'Основные Системы',
      servicesSubtitle: 'Наши основные операционные возможности.',
      processTitle: 'Протоколы Выполнения',
      processSubtitle: 'Стандартные операционные процедуры для максимальной эффективности.',
      modes: {
        dev: { title: 'Разработка', steps: ['Анализ', 'Код', 'Развертывание'] },
        training: { title: 'Обучение', steps: ['Теория', 'Практика', 'Сертификация'] },
        sos: { title: 'Чрезвычайная Ситуация', steps: ['Тревога', 'Отклик', 'Решение'] }
      },
      ctaTitle: 'Готовы к Развертыванию?',
      ctaDesc: 'Присоединяйтесь к сети и обновляйте свои операции.',
      ctaButton: 'Связь с Штабом',
      aboutLink: 'Инфо о Системе'
    },
    services: {
      title: 'Операционные Модули',
      subtitle: 'Полный спектр технологических услуг.',
      categories: { all: 'Все', ai: 'AI Ядро', web: 'Web/App', hardware: 'Железо', consulting: 'Консалтинг', sos: 'SOS' },
      readMore: 'Доступ к Данным',
      price_individual: 'Индивидуально',
      orderBtn: 'Заказать',
      modal: {
        title: 'Заказ Услуги',
        projectName: 'Название Проекта',
        desc: 'Описание задачи',
        contact: 'Контакты (ТГ/Телефон)',
        submit: 'Разместить заказ',
        cancel: 'Отмена'
      },
      items: {
        ai_chatbots: { title: 'AI Чат-боты', desc: 'Умные агенты на базе GPT-4/Claude для поддержки 24/7, квалификации лидов и автоматизации бизнес-процессов любой сложности.', price: 'от 800 ₪' },
        web_apps: { title: 'Веб приложения', desc: 'Масштабируемые веб-системы высокой нагрузки (React/Node.js). Полный цикл от архитектуры до деплоя с упором на безопасность данных.', price: 'от 1500 ₪' },
        mvp_product: { title: 'MVP продукция', desc: 'Экстремально быстрый запуск MVP для проверки гипотез. Разработка ядра функционала и аналитики для демонстрации инвесторам.', price: 'от 1500 ₪' },
        landing_page: { title: 'Лендинг страница', desc: 'Высококонверсионные посадочные страницы с футуристичным дизайном. Мгновенная загрузка и интеграция с CRM для максимизации ROI.', price: 'от 400 ₪' },
        custom_code: { title: 'Кастомный код', desc: 'Разработка парсеров, скриптов автоматизации и утилит (Python, Bash). Интеграция API и алгоритмическая обработка данных под заказ.', price: 'Индивидуально' },
        hardware_repair: { title: 'Ремонт железа', desc: 'Компонентный ремонт ноутбуков и серверов. Пайка плат, замена чипов, чистка систем охлаждения и восстановление цепей питания.', price: 'от 150 ₪' },
        iot_proto: { title: 'IoT / Умный дом', desc: 'Прототипирование умных устройств (ESP32/Arduino). Разработка датчиков, систем удаленного управления и логики умного дома.', price: 'от 500 ₪' },
        camera_install: { title: 'Установка камер', desc: 'Монтаж систем видеонаблюдения "под ключ". Анализ слепых зон, настройка ночного видения и удаленного доступа к архиву.', price: 'от 500 ₪' },
        camera_fix: { title: 'Настройка камер', desc: 'Восстановление работы систем наблюдения. Устранение сбоев подключения, настройка фокуса, обновление прошивок DVR/NVR.', price: 'Индивидуально' },
        network_install: { title: 'Проводка сетей', desc: 'Физический монтаж локальных сетей (ЛВС). Прокладка кабеля, сборка патч-панелей и организация серверных шкафов.', price: 'Индивидуально' },
        network_setup: { title: 'Настройка сетей', desc: 'Конфигурация активного оборудования (MikroTik, Ubiquiti). Настройка VLAN, VPN-туннелей и бесшовного Wi-Fi роуминга.', price: 'Индивидуально' },
        it_consulting: { title: 'IT Консалтинг', desc: 'Экспертный аудит IT-инфраструктуры. Подбор технологического стека, стратегии цифровой трансформации и оптимизация расходов.', price: 'от 700 ₪' },
        security_audit: { title: 'Аудит безопасности', desc: 'Глубокий анализ уязвимостей веб-ресурсов и сетей. Пентестинг, стресс-тесты и подробные отчеты по устранению дыр.', price: 'от 2000 ₪' },
        sos_business: { title: 'SOS для бизнеса', desc: 'Экстренная группа реагирования на критические сбои. Приоритетное восстановление серверов, сетей и ПО для бизнеса.', price: 'от 300 ₪/мес' }
      }
    },
    projects: {
        id: 'ID Проекта',
        name: 'Название',
        type: 'Тип',
        price: 'Цена',
        eta: 'Ожидается',
        completed: 'Завершен',
        status: 'Статус',
        desc: 'Описание',
        contact: 'Связь'
    },
    training: {
      title: 'Академия',
      subtitle: 'Протокол Передачи Знаний',
      levels: { beginner: 'Уровень 1', advanced: 'Уровень 2', expert: 'Уровень 3' },
      courses: {
        python_basic: { title: 'Python Основы', desc: 'Введение в программирование.' },
        web_fullstack: { title: 'Fullstack Web', desc: 'Создание современных сайтов.' },
        cyber_security: { title: 'Кибербезопасность', desc: 'Защита информации.' }
      },
      duration: 'Длительность',
      enroll: 'Записаться',
      corpTitle: 'Корпоративное Обучение',
      corpDesc: 'Обучите свою команду.',
      corpButton: 'Получить Квоту'
    },
    cases: {
      title: 'Архив Проектов',
      subtitle: 'Истории успеха.',
      link: 'Смотреть Кейс',
      items: {
        project_alpha: { title: 'Проект Альфа', desc: 'AI интеграция для логистики.', results: { r1: 'Рост 40%', r2: 'Экономия' } },
        project_beta: { title: 'Проект Бета', desc: 'E-commerce платформа.', results: { r1: 'Продажи x2', r2: 'Трафик' } },
        project_gamma: { title: 'Проект Гамма', desc: 'IoT система безопасности.', results: { r1: 'Защита 100%', r2: 'Аптайм' } }
      }
    },
    about: {
      missionTitle: 'Наша Миссия',
      missionDesc: 'Продвижение технологий.',
      storyTitle: 'История',
      storyDesc: 'Основано в бункере.',
      coopTitle: 'Кооператив',
      coopDesc: 'Работаем вместе.',
      values: {
        reliability: { title: 'Надежность', desc: 'Всегда онлайн.' },
        result: { title: 'Результат', desc: 'Фокус на итог.' },
        innovation: { title: 'Инновации', desc: 'Новые технологии.' },
        security: { title: 'Безопасность', desc: 'Зашифровано.' }
      },
      partnersTitle: 'Партнеры',
      partnersDesc: 'Узлы сети.',
      partners: {
        tech_corp: { name: 'Tech Corp', desc: 'Поставщик железа.' },
        cyber_sec: { name: 'Cyber Sec', desc: 'Аудит безопасности.' },
        ai_labs: { name: 'AI Labs', desc: 'Исследования.' },
        cloud_sys: { name: 'Cloud Sys', desc: 'Хостинг.' }
      },
      teamTitle: 'Команда',
      team: {
        alex: { name: 'Alex', role: 'Lead Dev', bio: 'Expert in Python.' },
        sarah: { name: 'Sarah', role: 'Security', bio: 'Expert in Crypto.' }
      }
    },
    contact: {
      title: 'Безопасный Канал',
      subtitle: 'Установить соединение.',
      form: {
        title: 'Передача',
        name: 'Позывной',
        email: 'Частота (Email)',
        type: 'Цель',
        types: { consultation: 'Консультация', dev: 'Разработка', training: 'Обучение', invest: 'Инвестиции' },
        message: 'Сообщение',
        sending: 'Передача...',
        submit: 'Отправить',
        success: 'Передача получена.'
      }
    },
    investors: {
      title: 'Инвесторы',
      subtitle: 'Финансовые данные.',
      charts: { revenue: 'Доход', clients: 'Клиенты' },
      options: {
        company: { title: 'Доля в Компании', desc: 'Инвестируйте в нас.' },
        portfolio: { title: 'Портфолио', desc: 'Инвестируйте в проекты.' }
      },
      buttons: { deck: 'Презентация', projects: 'Проекты' }
    },
    entrepreneurs: {
      title: 'Венчурный Модуль',
      subtitle: 'Для визионеров.',
      options: {
        startups: { title: 'Идеи Стартапов', desc: 'У нас есть идеи.' },
        equity: { title: 'Инвестиции', desc: 'Мы инвестируем.' }
      },
      buttons: { discuss: 'Обсудить', invest: 'Подать заявку' }
    },
    ideas_page: {
      title: 'База Разведданных',
      subtitle: 'Open Source Intelligence.',
      items: {
        i1: { title: 'Проект Альфа', desc: 'AI driven...', status: 'Концепт' },
        i2: { title: 'Проект Бета', desc: 'Web3...', status: 'Прототип' },
        i3: { title: 'Проект Гамма', desc: 'Hardware...', status: 'Разработка' }
      },
      labels: { tech: 'Стек', cta: 'Забрать Идею' }
    },
    tools: {
      title: 'Внутренние Инструменты',
      subtitle: 'Только для авторизованного персонала.',
      categories: { security: 'Безопасность', misc: 'Разное' },
      items: {
        redguard: { title: 'RedGuard', desc: 'Система оповещения.', status: 'Активен' },
        wavesil: { title: 'WaveSIL', desc: 'Обработка сигналов.', status: 'Бета' }
      },
      openTool: 'Запустить'
    },
    sos: {
      title: 'SOS Панель',
      subtitle: 'Экстренная помощь',
      createBtn: 'ВЫЗВАТЬ SOS',
      historyTitle: 'История',
      restrictedTitle: 'ДОСТУП ЗАПРЕЩЕН',
      restrictedDesc: 'Модуль "SOS для бизнеса" не активен для вашей учетной записи. Свяжитесь с администратором для активации.',
      form: {
        title: 'Новая Заявка',
        issueType: 'Тип проблемы',
        desc: 'Описание',
        urgency: 'Срочность',
        submit: 'Отправить'
      },
      table: {
        id: 'ID',
        date: 'Дата',
        issue: 'Проблема',
        status: 'Статус',
        pricing: 'Стоимость (Мы / Рынок)',
        status_val: {
             pending: 'Ожидание',
             resolved: 'Решено',
             in_progress: 'В работе',
             cancelled: 'Отмена'
        },
        market_label: 'Рынок',
        paid: 'ОПЛАЧЕНО',
        unpaid: 'НЕ ОПЛАЧЕНО'
      },
      financials: {
        debtTitle: 'ТЕКУЩАЯ ЗАДОЛЖЕННОСТЬ',
        savingsTitle: 'ОБЩАЯ ЭКОНОМИЯ',
        marketComparison: 'ПО СРАВНЕНИЮ С РЫНКОМ',
        paymentRequired: 'ТРЕБУЕТСЯ ОПЛАТА',
        allClear: 'ЗАДОЛЖЕННОСТЕЙ НЕТ',
        lifetime: 'ЗА ВСЕ ВРЕМЯ'
      }
    },
    profile: {
      title: 'Профиль Бизнеса',
      form: {
        name: 'Название',
        address: 'Адрес',
        phone: 'Телефон',
        save: 'Сохранить'
      }
    },
    admin: {
      title: 'Командный Центр',
      users: 'База Пользователей',
      stats: {
        users: 'Пользователи',
        revenue: 'Доход',
        errors: 'Ошибки'
      },
      table: {
        email: 'Email',
        role: 'Роль',
        status: 'Статус',
        actions: 'Действия'
      },
      tabs: {
        users: 'Пользователи',
        sos: 'Заявки SOS',
        projects: 'Проекты',
        blog: 'Блог'
      },
      blog_table: {
        title: 'Заголовок',
        slug: 'Slug',
        published: 'Опубликовано',
        views: 'Просмотры',
        actions: 'Действия'
      },
      blog_modal: {
        createTitle: 'Создать Запись',
        editTitle: 'Редактировать',
        title: 'Заголовок',
        slug: 'Путь (Slug)',
        image: 'URL Обложки',
        excerpt: 'Кратко (Excerpt)',
        content: 'Контент (HTML/Markdown)',
        preview: 'Предпросмотр',
        is_published: 'Опубликовать',
        helper: 'Используйте кнопки для форматирования.'
      },
      sos_table: {
        id: 'ID',
        user: 'Юзер',
        date: 'Дата',
        issue: 'Проблема',
        status: 'Статус',
        urgency: 'Срочность',
        cost: 'Цена',
        paid: 'Опл.',
        actions: 'Действия'
      },
      sos_modal: {
        title_edit: 'Редактировать заявку',
        status: 'Статус',
        solution: 'Решение / Заметки',
        cost: 'Стоимость (Наша)',
        market_cost: 'Рыночная цена',
        is_paid: 'Оплачено',
        date: 'Дата создания'
      },
      actions: {
        addUser: 'Добавить пользователя',
        editUser: 'Редактировать',
        deleteUser: 'Удалить',
        save: 'Сохранить',
        cancel: 'Отмена',
        confirmDelete: 'Вы уверены, что хотите удалить эту запись?'
      },
      subs: {
        title: 'Абонементы и Доступы',
        sos_business: 'SOS для Бизнеса'
      }
    }
  },
  en: {
    seo: {
      home: { title: 'BUNKER-255 | Dashboard', desc: 'Secure operational dashboard.', keywords: 'BUNKER, AI, Tech' },
      services: { title: 'Services | BUNKER-255', desc: 'Our services.', keywords: 'services, development' },
      training: { title: 'Training | BUNKER-255', desc: 'Academy access.', keywords: 'training, courses' },
      tools: { title: 'Tools | BUNKER-255', desc: 'Internal tools.', keywords: 'tools, internal' }
    },
    nav: {
      dashboard: 'Overview',
      sos: 'SOS Service',
      profile: 'Profile',
      admin: 'Admin',
      logout: 'Logout',
      login: 'Login'
    },
    auth: {
      loginTitle: 'System Login',
      registerTitle: 'Registration',
      email: 'Email',
      password: 'Password',
      submitLogin: 'Login',
      submitRegister: 'Create Account',
      noAccount: 'No account?',
      hasAccount: 'Have an account?',
      registerLink: 'Register',
      loginLink: 'Login'
    },
    dashboard: {
      welcome: 'Welcome, Operator.',
      status: 'System Status',
      activeTickets: 'Active Tickets',
      totalSaved: 'Total Saved',
      latestActivity: 'Activity Feed',
      subscription: 'Subscription',
      noActivity: 'NO RECENT ACTIVITY DETECTED',
      lastTicket: 'Ticket',
      actions: {
        orderTitle: 'Order Service',
        orderDesc: 'Order any service and enjoy both prices and quality.',
        orderBtn: 'Order Service',
        sosTitle: 'Emergency SOS',
        sosDesc: 'Our specialists will go to the client as soon as possible to solve the problem.',
        sosBtn: 'Trigger SOS'
      }
    },
    hero: {
      label: 'SYSTEM STATUS: ONLINE',
      title: 'Future Tech Solutions',
      subtitle: 'Advanced software, hardware, and AI integration for the modern world.',
      ctaPrimary: 'Initiate Protocol',
      ctaSecondary: 'Explore Systems',
      stats: { time: 'Efficiency', projects: 'Deployed', exp: 'Experience', clients: 'Nodes' }
    },
    home: {
      servicesTitle: 'Core Systems',
      servicesSubtitle: 'Primary operational capabilities.',
      processTitle: 'Execution Protocols',
      processSubtitle: 'Standard operating procedures for maximum efficiency.',
      modes: {
        dev: { title: 'Development', steps: ['Analysis', 'Coding', 'Deployment'] },
        training: { title: 'Training', steps: ['Theory', 'Practice', 'Certification'] },
        sos: { title: 'Emergency', steps: ['Alert', 'Response', 'Resolution'] }
      },
      ctaTitle: 'Ready to Deploy?',
      ctaDesc: 'Join the network and upgrade your operations.',
      ctaButton: 'Contact HQ',
      aboutLink: 'System Info'
    },
    services: {
      title: 'Operational Modules',
      subtitle: 'Full spectrum technological services.',
      categories: { all: 'All', ai: 'AI Core', web: 'Web/App', hardware: 'Hardware', consulting: 'Consulting', sos: 'SOS' },
      readMore: 'Access Data',
      price_individual: 'Custom Quote',
      orderBtn: 'Order Now',
      modal: {
        title: 'Order Service',
        projectName: 'Project Name',
        desc: 'Task Description',
        contact: 'Contact Info (TG/Phone)',
        submit: 'Place Order',
        cancel: 'Cancel'
      },
      items: {
        ai_chatbots: { title: 'AI Chatbots', desc: 'Intelligent agents powered by GPT-4/Claude for 24/7 support, lead qualification, and complex business process automation.', price: 'from 800 ₪' },
        web_apps: { title: 'Web Apps', desc: 'High-load scalable web systems (React/Node.js). Full cycle from architecture to deployment with a strong focus on data security.', price: 'from 1500 ₪' },
        mvp_product: { title: 'MVP Product', desc: 'Extremely rapid MVP launch for hypothesis testing. Core functionality development and analytics setup for investor demos.', price: 'from 1500 ₪' },
        landing_page: { title: 'Landing Page', desc: 'High-conversion landing pages with futuristic design. Instant loading speeds and CRM integration to maximize marketing ROI.', price: 'from 400 ₪' },
        custom_code: { title: 'Custom Code', desc: 'Custom parsers, automation scripts, and utilities (Python, Bash). API integration and algorithmic data processing tailored to needs.', price: 'Custom Quote' },
        hardware_repair: { title: 'Hardware Repair', desc: 'Component-level repair of laptops and servers. Board soldering, chip replacement, cooling system cleaning, and circuit recovery.', price: 'from 150 ₪' },
        iot_proto: { title: 'IoT / Smart Home', desc: 'Prototyping of smart devices (ESP32/Arduino). Development of sensors, remote control systems, and smart home logic.', price: 'from 500 ₪' },
        camera_install: { title: 'Camera Installation', desc: 'Turnkey video surveillance installation. Blind spot analysis, night vision setup, and remote archive access configuration.', price: 'from 500 ₪' },
        camera_fix: { title: 'Camera Tuning', desc: 'Restoration of surveillance systems. Troubleshooting connection failures, focus adjustment, and DVR/NVR firmware updates.', price: 'Custom Quote' },
        network_install: { title: 'Network Wiring', desc: 'Physical installation of local area networks (LAN). Cable routing, patch panel assembly, and server rack organization.', price: 'Custom Quote' },
        network_setup: { title: 'Network Setup', desc: 'Configuration of active equipment (MikroTik, Ubiquiti). Setup of VLANs, VPN tunnels, and seamless Wi-Fi roaming.', price: 'Custom Quote' },
        it_consulting: { title: 'IT Consulting', desc: 'Expert audit of IT infrastructure. Tech stack selection, digital transformation strategies, and cost optimization.', price: 'from 700 ₪' },
        security_audit: { title: 'Security Audit', desc: 'Deep vulnerability analysis of web assets and networks. Pentesting, stress tests, and detailed remediation reports.', price: 'from 2000 ₪' },
        sos_business: { title: 'SOS for Business', desc: 'Emergency response team for critical failures. Priority restoration of servers, networks, and software for businesses.', price: 'from 300 ₪/mo' }
      }
    },
    projects: {
        id: 'Project ID',
        name: 'Project Name',
        type: 'Type',
        price: 'Price',
        eta: 'ETA',
        completed: 'Completed',
        status: 'Status',
        desc: 'Description',
        contact: 'Contact'
    },
    training: {
      title: 'Academy',
      subtitle: 'Knowledge Transfer Protocol',
      levels: { beginner: 'Level 1', advanced: 'Level 2', expert: 'Level 3' },
      courses: {
        python_basic: { title: 'Python Basics', desc: 'Intro to programming.' },
        web_fullstack: { title: 'Fullstack Web', desc: 'Building modern sites.' },
        cyber_security: { title: 'Cyber Security', desc: 'Information protection.' }
      },
      duration: 'Duration',
      enroll: 'Enroll Now',
      corpTitle: 'Corporate Training',
      corpDesc: 'Train your team.',
      corpButton: 'Get Quote'
    },
    cases: {
      title: 'Project Archive',
      subtitle: 'Success stories.',
      link: 'View Case',
      items: {
        project_alpha: { title: 'Project Alpha', desc: 'AI integration for logistics.', results: { r1: 'Growth 40%', r2: 'Savings' } },
        project_beta: { title: 'Project Beta', desc: 'E-commerce platform.', results: { r1: 'Sales x2', r2: 'Traffic' } },
        project_gamma: { title: 'Project Gamma', desc: 'IoT security system.', results: { r1: 'Protection 100%', r2: 'Uptime' } }
      }
    },
    about: {
      missionTitle: 'Our Mission',
      missionDesc: 'To advance technology.',
      storyTitle: 'Origin Story',
      storyDesc: 'Founded in the bunker.',
      coopTitle: 'Cooperative',
      coopDesc: 'Working together.',
      values: {
        reliability: { title: 'Reliability', desc: 'Always online.' },
        result: { title: 'Results', desc: 'Outcome focused.' },
        innovation: { title: 'Innovation', desc: 'New tech.' },
        security: { title: 'Security', desc: 'Encrypted.' }
      },
      partnersTitle: 'Partners',
      partnersDesc: 'Network nodes.',
      partners: {
        tech_corp: { name: 'Tech Corp', desc: 'Hardware supplier.' },
        cyber_sec: { name: 'Cyber Sec', desc: 'Security audit.' },
        ai_labs: { name: 'AI Labs', desc: 'Research.' },
        cloud_sys: { name: 'Cloud Sys', desc: 'Hosting.' }
      },
      teamTitle: 'The Team',
      team: {
        alex: { name: 'Alex', role: 'Lead Dev', bio: 'Expert in Python.' },
        sarah: { name: 'Sarah', role: 'Security', bio: 'Expert in Crypto.' }
      }
    },
    contact: {
      title: 'Secure Link',
      subtitle: 'Establish connection.',
      form: {
        title: 'Transmission',
        name: 'Codename',
        email: 'Frequency (Email)',
        type: 'Purpose',
        types: { consultation: 'Consultation', dev: 'Development', training: 'Training', invest: 'Investment' },
        message: 'Payload',
        sending: 'Transmitting...',
        submit: 'Send',
        success: 'Transmission Received.'
      }
    },
    investors: {
      title: 'Investors',
      subtitle: 'Financial data.',
      charts: { revenue: 'Revenue', clients: 'Clients' },
      options: {
        company: { title: 'Company Equity', desc: 'Invest in us.' },
        portfolio: { title: 'Portfolio', desc: 'Invest in projects.' }
      },
      buttons: { deck: 'View Deck', projects: 'View Projects' }
    },
    entrepreneurs: {
      title: 'Venture Module',
      subtitle: 'For visionaries.',
      options: {
        startups: { title: 'Startup Ideas', desc: 'We have ideas.' },
        equity: { title: 'Investment', desc: 'We invest.' }
      },
      buttons: { discuss: 'Discuss', invest: 'Apply' }
    },
    ideas_page: {
      title: 'Intel Database',
      subtitle: 'Open Source Intelligence.',
      items: {
        i1: { title: 'Project Alpha', desc: 'AI driven...', status: 'Concept' },
        i2: { title: 'Project Beta', desc: 'Web3...', status: 'Prototype' },
        i3: { title: 'Project Gamma', desc: 'Hardware...', status: 'Dev' }
      },
      labels: { tech: 'Tech Stack', cta: 'Claim Idea' }
    },
    tools: {
      title: 'Internal Tools',
      subtitle: 'Authorized Personnel Only.',
      categories: { security: 'Security', misc: 'Miscellaneous' },
      items: {
        redguard: { title: 'RedGuard', desc: 'Alert system.', status: 'Active' },
        wavesil: { title: 'WaveSIL', desc: 'Signal processing.', status: 'Beta' }
      },
      openTool: 'Launch'
    },
    sos: {
      title: 'SOS Panel',
      subtitle: 'Emergency Assistance',
      createBtn: 'TRIGGER SOS',
      historyTitle: 'History',
      restrictedTitle: 'ACCESS DENIED',
      restrictedDesc: 'The "SOS for Business" module is not active for your account. Contact administrator for activation.',
      form: {
        title: 'New Request',
        issueType: 'Issue Type',
        desc: 'Description',
        urgency: 'Urgency',
        submit: 'Send Signal'
      },
      table: {
        id: 'ID',
        date: 'Date',
        issue: 'Issue',
        status: 'Status',
        pricing: 'Pricing (Our / Market)',
        status_val: {
             pending: 'Pending',
             resolved: 'Resolved',
             in_progress: 'Processing',
             cancelled: 'Cancelled'
        },
        market_label: 'Mkt',
        paid: 'PAID',
        unpaid: 'UNPAID'
      },
      financials: {
        debtTitle: 'OUTSTANDING BALANCE',
        savingsTitle: 'TOTAL SAVINGS',
        marketComparison: 'COMPARED TO MARKET RATE',
        paymentRequired: 'PAYMENT REQUIRED IMMEDIATELY',
        allClear: 'ALL SYSTEMS CLEAR',
        lifetime: 'LIFETIME'
      }
    },
    profile: {
      title: 'Business Profile',
      form: {
        name: 'Business Name',
        address: 'Address',
        phone: 'Phone',
        save: 'Save'
      }
    },
    admin: {
      title: 'Command Center',
      users: 'User Database',
      stats: {
        users: 'Total Users',
        revenue: 'Revenue',
        errors: 'System Errors'
      },
      table: {
        email: 'Email',
        role: 'Role',
        status: 'Status',
        actions: 'Actions'
      },
      tabs: {
        users: 'Users',
        sos: 'SOS Tickets',
        projects: 'Projects',
        blog: 'Blog'
      },
      blog_table: {
        title: 'Title',
        slug: 'Slug',
        published: 'Published',
        views: 'Views',
        actions: 'Actions'
      },
      blog_modal: {
        createTitle: 'Create Post',
        editTitle: 'Edit Post',
        title: 'Headline',
        slug: 'Path (Slug)',
        image: 'Cover Image URL',
        excerpt: 'Brief (Excerpt)',
        content: 'Content (HTML/Markdown)',
        preview: 'Preview',
        is_published: 'Publish',
        helper: 'Use formatting buttons.'
      },
      sos_table: {
        id: 'ID',
        user: 'User',
        date: 'Date',
        issue: 'Issue',
        status: 'Status',
        urgency: 'Urgency',
        cost: 'Cost',
        paid: 'Paid',
        actions: 'Actions'
      },
      sos_modal: {
        title_edit: 'Edit Ticket',
        status: 'Status',
        solution: 'Solution / Notes',
        cost: 'Service Cost',
        market_cost: 'Market Price',
        is_paid: 'Payment Received',
        date: 'Date Created'
      },
      actions: {
        addUser: 'Add User',
        editUser: 'Edit User',
        deleteUser: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        confirmDelete: 'Are you sure you want to delete this record?'
      },
      subs: {
        title: 'Subscriptions & Access',
        sos_business: 'SOS for Business'
      }
    }
  },
  he: {
    seo: {
      home: { title: 'BUNKER-255 | לוח בקרה', desc: 'לוח בקרה מאובטח.', keywords: 'בונקר, בינה מלאכותית, טכנולוגיה' },
      services: { title: 'שירותים | BUNKER-255', desc: 'השירותים שלנו.', keywords: 'שירותים, פיתוח' },
      training: { title: 'הדרכה | BUNKER-255', desc: 'גישה לאקדמיה.', keywords: 'הדרכה, קורסים' },
      tools: { title: 'כלים | BUNKER-255', desc: 'כלים פנימיים.', keywords: 'כלים, פנימי' }
    },
    nav: {
      dashboard: 'לוח בקרה',
      sos: 'שירות SOS',
      profile: 'פרופיל',
      admin: 'ניהול',
      logout: 'יציאה',
      login: 'כניסה'
    },
    auth: {
      loginTitle: 'כניסה למערכת',
      registerTitle: 'רישום',
      email: 'אימייל',
      password: 'סיסמה',
      submitLogin: 'התחבר',
      submitRegister: 'צור חשבון',
      noAccount: 'אין חשבון?',
      hasAccount: 'יש לך חשבון?',
      registerLink: 'הרשמה',
      loginLink: 'התחברות'
    },
    dashboard: {
      welcome: 'ברוך הבא, מפעיל.',
      status: 'סטטוס מערכת',
      activeTickets: 'קריאות פתוחות',
      totalSaved: 'חיסכון כולל',
      latestActivity: 'פיד פעילות',
      subscription: 'מנוי',
      noActivity: 'לא זוהתה פעילות',
      lastTicket: 'קריאה',
      actions: {
        orderTitle: 'הזמנת שירות',
        orderDesc: 'הזמן כל שירות ותהנה מאיכות ומחיר ללא תחרות.',
        orderBtn: 'הזמן שירות',
        sosTitle: 'קריאת חירום (SOS)',
        sosDesc: 'המומחים שלנו יצאו אליך בהקדם האפשרי לפתרון התקלה.',
        sosBtn: 'הפעל SOS'
      }
    },
    hero: {
      label: 'סטטוס מערכת: אונליין',
      title: 'פתרונות טכנולוגיים לעתיד',
      subtitle: 'תוכנה מתקדמת, חומרה ואינטגרציית AI לעולם המודרני.',
      ctaPrimary: 'הפעל פרוטוקול',
      ctaSecondary: 'סייר במערכות',
      stats: { time: 'יעילות', projects: 'נפרסו', exp: 'ניסיון', clients: 'צמתים' }
    },
    home: {
      servicesTitle: 'מערכות ליבה',
      servicesSubtitle: 'יכולות מבצעיות עיקריות.',
      processTitle: 'פרוטוקולי ביצוע',
      processSubtitle: 'נהלי עבודה סטנדרטיים ליעילות מקסימלית.',
      modes: {
        dev: { title: 'פיתוח', steps: ['אנליזה', 'קוד', 'פריסה'] },
        training: { title: 'הדרכה', steps: ['תיאוריה', 'תרגול', 'הסמכה'] },
        sos: { title: 'חירום', steps: ['התראה', 'תגובה', 'פתרון'] }
      },
      ctaTitle: 'מוכן לפריסה?',
      ctaDesc: 'הצטרף לרשת ושדרג את הפעילות שלך.',
      ctaButton: 'צור קשר עם המטה',
      aboutLink: 'מידע מערכת'
    },
    services: {
      title: 'מודולים מבצעיים',
      subtitle: 'ספקטרום מלא של שירותים טכנולוגיים.',
      categories: { all: 'הכל', ai: 'ליבת AI', web: 'Web/App', hardware: 'חומרה', consulting: 'ייעוץ', sos: 'SOS' },
      readMore: 'גישה לנתונים',
      price_individual: 'הצעת מחיר',
      orderBtn: 'הזמן עכשיו',
      modal: {
        title: 'הזמנת שירות',
        projectName: 'שם הפרויקט',
        desc: 'תיאור המשימה',
        contact: 'פרטי קשר (טלפון/טלגרם)',
        submit: 'בצע הזמנה',
        cancel: 'ביטול'
      },
      items: {
        ai_chatbots: { title: 'AI Chatbots', desc: 'סוכנים חכמים מבוססי GPT-4/Claude לתמיכה 24/7, סינון לידים ואוטומציה של תהליכים עסקיים מורכבים.', price: 'החל מ-800 ₪' },
        web_apps: { title: 'אפליקציות ווב', desc: 'מערכות ווב סקיילביליות בעומס גבוה (React/Node.js). מחזור מלא מארכיטקטורה ועד פריסה עם דגש חזק על אבטחת מידע.', price: 'החל מ-1500 ₪' },
        mvp_product: { title: 'מוצרי MVP', desc: 'השקת MVP מהירה במיוחד לבדיקת השערות. פיתוח פונקציונליות ליבה והגדרת אנליטיקה להדגמות למשקיעים.', price: 'החל מ-1500 ₪' },
        landing_page: { title: 'דפי נחיתה', desc: 'דפי נחיתה עם המרה גבוהה בעיצוב עתידני. טעינה מיידית ואינטגרציה ל-CRM למקסום החזר השקעה (ROI).', price: 'החל מ-400 ₪' },
        custom_code: { title: 'קוד מותאם', desc: 'פיתוח פרסרים, סקריפטים לאוטומציה וכלים (Python, Bash). אינטגרציית API ועיבוד נתונים אלגוריתמי מותאם אישית.', price: 'הצעת מחיר' },
        hardware_repair: { title: 'תיקון חומרה', desc: 'תיקון רכיבים במחשבים ניידים ושרתים. הלחמת לוחות, החלפת שבבים, ניקוי מערכות קירור ושחזור מעגלים.', price: 'החל מ-150 ₪' },
        iot_proto: { title: 'IoT / בית חכם', desc: 'אבטיפוס למכשירים חכמים (ESP32/Arduino). פיתוח חיישנים, מערכות שליטה מרחוק ולוגיקה לבית חכם.', price: 'החל מ-500 ₪' },
        camera_install: { title: 'התקנת מצלמות', desc: 'התקנת מערכות מצלמות אבטחה "מפתח ביד". ניתוח שטחים מתים, הגדרת ראיית לילה וגישה מרחוק לארכיון.', price: 'החל מ-500 ₪' },
        camera_fix: { title: 'כיוון מצלמות', desc: 'שחזור פעילות מערכות אבטחה. פתרון תקלות חיבור, כיוון פוקוס ועדכוני קושחה ל-DVR/NVR.', price: 'הצעת מחיר' },
        network_install: { title: 'חיווט רשתות', desc: 'התקנה פיזית של רשתות תקשורת (LAN). פריסת כבלים, הרכבת פאץ פאנלים וסידור ארונות תקשורת.', price: 'הצעת מחיר' },
        network_setup: { title: 'הגדרת רשתות', desc: 'הגדרת ציוד תקשורת אקטיבי (MikroTik, Ubiquiti). הגדרת VLAN, מנהרות VPN ונדידת Wi-Fi חלקה.', price: 'הצעת מחיר' },
        it_consulting: { title: 'ייעוץ IT', desc: 'ביקורת מומחה לתשתיות IT. בחירת סטאק טכנולוגי, אסטרטגיות טרנספורמציה דיגיטלית ואופטימיזציית עלויות.', price: 'החל מ-700 ₪' },
        security_audit: { title: 'ביקורת אבטחה', desc: 'ניתוח עמוק של חולשות בנכסי ווב ורשתות. בדיקות חדירה (Pentesting), בדיקות עומס ודוחות תיקון מפורטים.', price: 'החל מ-2000 ₪' },
        sos_business: { title: 'SOS עסקי', desc: 'צוות תגובה מהירה לתקלות קריטיות. שחזור בעדיפות עליונה של שרתים, רשתות ותוכנה לעסקים.', price: 'החל מ-300 ₪/חודש' }
      }
    },
    projects: {
        id: 'מזהה',
        name: 'שם',
        type: 'סוג',
        price: 'מחיר',
        eta: 'צפי',
        completed: 'הושלם',
        status: 'סטטוס',
        desc: 'תיאור',
        contact: 'קשר'
    },
    training: {
      title: 'אקדמיה',
      subtitle: 'פרוטוקול העברת ידע',
      levels: { beginner: 'רמה 1', advanced: 'רמה 2', expert: 'רמה 3' },
      courses: {
        python_basic: { title: 'יסודות פייתון', desc: 'מבוא לתכנות.' },
        web_fullstack: { title: 'פולסטאק ווב', desc: 'בניית אתרים מודרניים.' },
        cyber_security: { title: 'סייבר סקיוריטי', desc: 'הגנת מידע.' }
      },
      duration: 'משך',
      enroll: 'הירשם עכשיו',
      corpTitle: 'הדרכה ארגונית',
      corpDesc: 'הכשיר את הצוות שלך.',
      corpButton: 'קבל הצעה'
    },
    cases: {
      title: 'ארכיון פרויקטים',
      subtitle: 'סיפורי הצלחה.',
      link: 'צפה במקרה',
      items: {
        project_alpha: { title: 'פרויקט אלפא', desc: 'אינטגרציית AI ללוגיסטיקה.', results: { r1: 'צמיחה 40%', r2: 'חיסכון' } },
        project_beta: { title: 'פרויקט בטא', desc: 'פלטפורמת מסחר אלקטרוני.', results: { r1: 'מכירות x2', r2: 'תנועה' } },
        project_gamma: { title: 'פרויקט גמא', desc: 'מערכת אבטחה IoT.', results: { r1: 'הגנה 100%', r2: 'זמינות' } }
      }
    },
    about: {
      missionTitle: 'המשימה שלנו',
      missionDesc: 'לקדם טכנולוגיה.',
      storyTitle: 'סיפור מקור',
      storyDesc: 'נוסד בבונקר.',
      coopTitle: 'קואופרטיב',
      coopDesc: 'עובדים יחד.',
      values: {
        reliability: { title: 'אמינות', desc: 'תמיד אונליין.' },
        result: { title: 'תוצאות', desc: 'ממוקד תוצאה.' },
        innovation: { title: 'חדשנות', desc: 'טכנולוגיה חדשה.' },
        security: { title: 'אבטחה', desc: 'מוצפן.' }
      },
      partnersTitle: 'שותפים',
      partnersDesc: 'צמתי רשת.',
      partners: {
        tech_corp: { name: 'Tech Corp', desc: 'ספק חומרה.' },
        cyber_sec: { name: 'Cyber Sec', desc: 'ביקורת אבטחה.' },
        ai_labs: { name: 'AI Labs', desc: 'מחקר.' },
        cloud_sys: { name: 'Cloud Sys', desc: 'אחסון.' }
      },
      teamTitle: 'הצוות',
      team: {
        alex: { name: 'Alex', role: 'Lead Dev', bio: 'מומחה לפייתון.' },
        sarah: { name: 'Sarah', role: 'Security', bio: 'מומחית לקריפטו.' }
      }
    },
    contact: {
      title: 'קישור מאובטח',
      subtitle: 'צור חיבור.',
      form: {
        title: 'שידור',
        name: 'שם קוד',
        email: 'תדר (אימייל)',
        type: 'מטרה',
        types: { consultation: 'ייעוץ', dev: 'פיתוח', training: 'הדרכה', invest: 'השקעה' },
        message: 'מטען',
        sending: 'משדר...',
        submit: 'שלח',
        success: 'השידור התקבל.'
      }
    },
    investors: {
      title: 'משקיעים',
      subtitle: 'נתונים פיננסיים.',
      charts: { revenue: 'הכנסות', clients: 'לקוחות' },
      options: {
        company: { title: 'הון חברה', desc: 'השקע בנו.' },
        portfolio: { title: 'תיק השקעות', desc: 'השקע בפרויקטים.' }
      },
      buttons: { deck: 'צפה במצגת', projects: 'צפה בפרויקטים' }
    },
    entrepreneurs: {
      title: 'מודול יזמות',
      subtitle: 'לחזון.',
      options: {
        startups: { title: 'רעיונות לסטארטאפ', desc: 'יש לנו רעיונות.' },
        equity: { title: 'השקעה', desc: 'אנחנו משקיעים.' }
      },
      buttons: { discuss: 'דון', invest: 'הגש בקשה' }
    },
    ideas_page: {
      title: 'מסד נתונים מודיעיני',
      subtitle: 'מודיעין ממקור פתוח.',
      items: {
        i1: { title: 'פרויקט אלפא', desc: 'מבוסס AI...', status: 'קונספט' },
        i2: { title: 'פרויקט בטא', desc: 'Web3...', status: 'אב טיפוס' },
        i3: { title: 'פרויקט גמא', desc: 'חומרה...', status: 'פיתוח' }
      },
      labels: { tech: 'סטאק טכנולוגי', cta: 'תבע רעיון' }
    },
    tools: {
      title: 'כלים פנימיים',
      subtitle: 'למורשים בלבד.',
      categories: { security: 'אבטחה', misc: 'שונות' },
      items: {
        redguard: { title: 'RedGuard', desc: 'מערכת התראה.', status: 'פעיל' },
        wavesil: { title: 'WaveSIL', desc: 'עיבוד אותות.', status: 'בטא' }
      },
      openTool: 'הפעל'
    },
    sos: {
      title: 'לוח SOS',
      subtitle: 'סיוע חירום',
      createBtn: 'הפעל SOS',
      historyTitle: 'היסטוריה',
      restrictedTitle: 'גישה נדחתה',
      restrictedDesc: 'מודול "SOS לעסקים" אינו פעיל עבור החשבון שלך. צור קשר עם מנהל המערכת להפעלה.',
      form: {
        title: 'קריאה חדשה',
        issueType: 'סוג תקלה',
        desc: 'תיאור',
        urgency: 'דחיפות',
        submit: 'שלח'
      },
      table: {
        id: 'מזהה',
        date: 'תאריך',
        issue: 'תקלה',
        status: 'סטטוס',
        pricing: 'עלות (שלנו / שוק)',
        status_val: {
             pending: 'ממתין',
             resolved: 'נפתר',
             in_progress: 'בטיפול',
             cancelled: 'בוטל'
        },
        market_label: 'שוק',
        paid: 'שולם',
        unpaid: 'לא שולם'
      },
      financials: {
        debtTitle: 'יתרת חוב',
        savingsTitle: 'חיסכון כולל',
        marketComparison: 'בהשוואה למחיר שוק',
        paymentRequired: 'נדרש תשלום מיידי',
        allClear: 'אין חובות',
        lifetime: 'בכל הזמנים'
      }
    },
    profile: {
      title: 'פרופיל עסקי',
      form: {
        name: 'שם העסק',
        address: 'כתובת',
        phone: 'טלפון',
        save: 'שמור'
      }
    },
    admin: {
      title: 'מרכז שליטה',
      users: 'מאגר משתמשים',
      stats: {
        users: 'משתמשים',
        revenue: 'הכנסות',
        errors: 'שגיאות מערכת'
      },
      table: {
        email: 'אימייל',
        role: 'תפקיד',
        status: 'סטטוס',
        actions: 'פעולות'
      },
      tabs: {
        users: 'משתמשים',
        sos: 'קריאות SOS',
        projects: 'פרויקטים',
        blog: 'בלוג'
      },
      blog_table: {
        title: 'כותרת',
        slug: 'סלאג',
        published: 'פורסם',
        views: 'צפיות',
        actions: 'פעולות'
      },
      blog_modal: {
        createTitle: 'צור פוסט',
        editTitle: 'ערוך פוסט',
        title: 'כותרת',
        slug: 'נתיב (Slug)',
        image: 'תמונה ראשית',
        excerpt: 'תקציר',
        content: 'תוכן (HTML/Markdown)',
        preview: 'תצוגה מקדימה',
        is_published: 'פרסם',
        helper: 'השתמש בכפתורי עיצוב.'
      },
      sos_table: {
        id: 'מזהה',
        user: 'משתמש',
        date: 'תאריך',
        issue: 'תקלה',
        status: 'סטטוס',
        urgency: 'דחיפות',
        cost: 'עלות',
        paid: 'שולם',
        actions: 'פעולות'
      },
      sos_modal: {
        title_edit: 'ערוך קריאה',
        status: 'סטטוס',
        solution: 'פתרון / הערות',
        cost: 'עלות שירות',
        market_cost: 'מחיר שוק',
        is_paid: 'התקבל תשלום',
        date: 'תאריך יצירה'
      },
      actions: {
        addUser: 'הוסף משתמש',
        editUser: 'ערוך',
        deleteUser: 'מחק',
        save: 'שמור',
        cancel: 'ביטול',
        confirmDelete: 'האם אתה בטוח שברצונך למחוק רשומה זו?'
      },
      subs: {
        title: 'מנויים וגישות',
        sos_business: 'SOS עסקי'
      }
    }
  }
};