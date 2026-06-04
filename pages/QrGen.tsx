import React, { useState, useEffect, useRef } from 'react';
import QRCodeStyling, {
  Options,
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
} from 'qr-code-styling';
import { Download, Image as ImageIcon, QrCode, Settings2, Palette, Type, Upload, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../lib/LanguageContext';
import { SEO } from '../components/SEO';

type TabType = 'content' | 'logo' | 'shapes' | 'colors';

type ColorConfig = {
  type: 'solid' | 'gradient';
  solidColor: string;
  gradient: {
    type: 'linear' | 'radial';
    rotation: number;
    color1: string;
    color2: string;
  };
};

const loc = {
  en: {
    title: 'QR Code Studio',
    subtitle: 'Design, preview, and export high-quality QR codes instantly.',
    livePreview: 'Live Preview',
    exportFormat: 'Export Format',
    download: 'Download QR Code',
    tabs: { content: 'Content', logo: 'Logo', shapes: 'Shapes', colors: 'Colors' },
    contentLabel: 'URL or Text Content',
    contentPlaceholder: 'https://example.com',
    contentHint: 'The QR code updates automatically as you type.',
    logoUpload: 'Upload a logo',
    logoHint: 'PNG, JPG or SVG. Transparent background recommended.',
    chooseFile: 'Choose File',
    removeLogo: 'Remove Logo',
    changeLogo: 'Change Logo',
    dotsStyle: 'Dots Style',
    cornerSquare: 'Corner Square',
    cornerDot: 'Corner Dot',
    rounded: 'Rounded',
    dots: 'Dots',
    classy: 'Classy',
    classyRounded: 'Classy Rounded',
    square: 'Square',
    extraRounded: 'Extra Rounded',
    dot: 'Dot',
    mainColor: 'Main QR Color',
    bgColor: 'Background Color',
    cornerSquareColor: 'Corner Square Color',
    cornerDotColor: 'Corner Dot Color',
    solid: 'Solid',
    gradient: 'Gradient',
    solidColor: 'Solid Color',
    color1: 'Color 1',
    color2: 'Color 2',
    gradientType: 'Gradient Type',
    linear: 'Linear',
    radial: 'Radial',
    angle: 'Angle',
    moreTools: 'More Tools',
  },
  ru: {
    title: 'Студия QR-кодов',
    subtitle: 'Создавайте, настраивайте и экспортируйте QR-коды в высоком качестве.',
    livePreview: 'Предпросмотр',
    exportFormat: 'Формат экспорта',
    download: 'Скачать QR-код',
    tabs: { content: 'Контент', logo: 'Логотип', shapes: 'Формы', colors: 'Цвета' },
    contentLabel: 'Ссылка или текст',
    contentPlaceholder: 'https://example.com',
    contentHint: 'QR-код обновляется автоматически при вводе.',
    logoUpload: 'Загрузить логотип',
    logoHint: 'PNG, JPG или SVG. Рекомендуется прозрачный фон.',
    chooseFile: 'Выбрать файл',
    removeLogo: 'Удалить логотип',
    changeLogo: 'Изменить логотип',
    dotsStyle: 'Стиль точек',
    cornerSquare: 'Угловой квадрат',
    cornerDot: 'Угловая точка',
    rounded: 'Закругленные',
    dots: 'Точки',
    classy: 'Классика',
    classyRounded: 'Классика (закругл.)',
    square: 'Квадрат',
    extraRounded: 'Сильно закругл.',
    dot: 'Точка',
    mainColor: 'Основной цвет QR',
    bgColor: 'Цвет фона',
    cornerSquareColor: 'Цвет угловых квадратов',
    cornerDotColor: 'Цвет угловых точек',
    solid: 'Сплошной',
    gradient: 'Градиент',
    solidColor: 'Сплошной цвет',
    color1: 'Цвет 1',
    color2: 'Цвет 2',
    gradientType: 'Тип градиента',
    linear: 'Линейный',
    radial: 'Радиальный',
    angle: 'Угол',
    moreTools: 'Еще инструменты',
  },
  he: {
    title: 'סטודיו קודי QR',
    subtitle: 'עצב, הצג מראש וייצא קודי QR באיכות גבוהה באופן מיידי.',
    livePreview: 'תצוגה מקדימה',
    exportFormat: 'פורמט ייצוא',
    download: 'הורד קוד QR',
    tabs: { content: 'תוכן', logo: 'לוגו', shapes: 'צורות', colors: 'צבעים' },
    contentLabel: 'תוכן URL או טקסט',
    contentPlaceholder: 'https://example.com',
    contentHint: 'קוד ה-QR מתעדכן אוטומטית בעת ההקלדה.',
    logoUpload: 'העלה לוגו',
    logoHint: 'PNG, JPG או SVG. מומלץ רקע שקוף.',
    chooseFile: 'בחר קובץ',
    removeLogo: 'הסר לוגו',
    changeLogo: 'שנה לוגו',
    dotsStyle: 'סגנון נקודות',
    cornerSquare: 'ריבוע פינתי',
    cornerDot: 'נקודה פינתית',
    rounded: 'מעוגל',
    dots: 'נקודות',
    classy: 'קלאסי',
    classyRounded: 'קלאסי מעוגל',
    square: 'מרובע',
    extraRounded: 'מעוגל במיוחד',
    dot: 'נקודה',
    mainColor: 'צבע QR ראשי',
    bgColor: 'צבע רקע',
    cornerSquareColor: 'צבע ריבוע פינתי',
    cornerDotColor: 'צבע נקודה פינתית',
    solid: 'אחיד',
    gradient: 'הדרגתי',
    solidColor: 'צבע אחיד',
    color1: 'צבע 1',
    color2: 'צבע 2',
    gradientType: 'סוג הדרגתי',
    linear: 'ליניארי',
    radial: 'רדיאלי',
    angle: 'זווית',
    moreTools: 'עוד כלים',
  }
};

const ColorSection = ({ title, config, onChange, t }: { title: string, config: ColorConfig, onChange: (c: ColorConfig) => void, t: any }) => {
  return (
    <div className="bg-bunker-950/50 border border-white/10 p-4 md:p-5 rounded-2xl mb-4">
      <div className="flex items-center justify-between gap-2 mb-4">
        <h3 className="text-[10px] md:text-sm font-tech font-bold text-white uppercase tracking-wider truncate">{title}</h3>
        <div className="flex bg-bunker-900 rounded-lg p-0.5 border border-white/10 shrink-0">
          <button
            onClick={() => onChange({ ...config, type: 'solid' })}
            className={`px-2 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-mono rounded-md transition-colors ${config.type === 'solid' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {t.solid}
          </button>
          <button
            onClick={() => onChange({ ...config, type: 'gradient' })}
            className={`px-2 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-mono rounded-md transition-colors ${config.type === 'gradient' ? 'bg-white/10 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {t.gradient}
          </button>
        </div>
      </div>

      {config.type === 'solid' ? (
        <div className="flex items-center gap-3 bg-bunker-900/50 border border-white/5 rounded-xl p-3 w-full md:w-64">
          <input
            type="color"
            value={config.solidColor}
            onChange={(e) => onChange({ ...config, solidColor: e.target.value })}
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg cursor-pointer bg-transparent border-0 p-0 shrink-0"
          />
          <div className="min-w-0">
            <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase mb-0.5 truncate">{t.solidColor}</div>
            <div className="text-xs md:text-sm font-mono text-white uppercase truncate">{config.solidColor}</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 md:gap-4 bg-bunker-900/50 border border-white/5 rounded-xl p-2 md:p-4">
            <input
              type="color"
              value={config.gradient.color1}
              onChange={(e) => onChange({ ...config, gradient: { ...config.gradient, color1: e.target.value } })}
              className="w-6 h-6 md:w-8 md:h-8 rounded-md cursor-pointer bg-transparent border-0 p-0 shrink-0"
            />
            <div className="min-w-0">
              <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase mb-0.5 truncate">{t.color1}</div>
              <div className="text-[10px] md:text-xs font-mono text-white uppercase truncate">{config.gradient.color1}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4 bg-bunker-900/50 border border-white/5 rounded-xl p-2 md:p-4">
            <input
              type="color"
              value={config.gradient.color2}
              onChange={(e) => onChange({ ...config, gradient: { ...config.gradient, color2: e.target.value } })}
              className="w-6 h-6 md:w-8 md:h-8 rounded-md cursor-pointer bg-transparent border-0 p-0 shrink-0"
            />
            <div className="min-w-0">
              <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase mb-0.5 truncate">{t.color2}</div>
              <div className="text-[10px] md:text-xs font-mono text-white uppercase truncate">{config.gradient.color2}</div>
            </div>
          </div>
          <div className="bg-bunker-900/50 border border-white/5 rounded-xl p-2 md:p-4">
            <label className="block text-[9px] md:text-[10px] font-mono text-slate-500 mb-1.5 uppercase truncate">{t.gradientType}</label>
            <select
              value={config.gradient.type}
              onChange={(e) => onChange({ ...config, gradient: { ...config.gradient, type: e.target.value as 'linear' | 'radial' } })}
              className="w-full bg-bunker-950 border border-white/10 rounded-lg p-1.5 md:p-2 text-white font-mono text-[10px] md:text-xs focus:border-neon-green focus:outline-none cursor-pointer"
            >
              <option value="linear">{t.linear}</option>
              <option value="radial">{t.radial}</option>
            </select>
          </div>
          {config.gradient.type === 'linear' && (
            <div className="bg-bunker-900/50 border border-white/5 rounded-xl p-2 md:p-4">
              <label className="block text-[9px] md:text-[10px] font-mono text-slate-500 mb-1.5 uppercase truncate">{t.angle} ({config.gradient.rotation}°)</label>
              <input
                type="range"
                min="0"
                max="360"
                value={config.gradient.rotation}
                onChange={(e) => onChange({ ...config, gradient: { ...config.gradient, rotation: Number(e.target.value) } })}
                className="w-full accent-neon-green h-1.5 md:h-2 bg-bunker-950 rounded-lg appearance-none mt-1"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const QrGen: React.FC = () => {
  const { language } = useLanguage();
  const isRtl = language === 'he';
  const t = loc[language] || loc['en'];

  const [activeTab, setActiveTab] = useState<TabType>('content');

  const [dotsColor, setDotsColor] = useState<ColorConfig>({
    type: 'solid',
    solidColor: '#00ffa3',
    gradient: { type: 'linear', rotation: 0, color1: '#00ffa3', color2: '#00f0ff' }
  });

  const [bgColor, setBgColor] = useState<ColorConfig>({
    type: 'solid',
    solidColor: '#020203',
    gradient: { type: 'linear', rotation: 0, color1: '#020203', color2: '#1a1a24' }
  });

  const [cornerSquareColor, setCornerSquareColor] = useState<ColorConfig>({
    type: 'solid',
    solidColor: '#00ffa3',
    gradient: { type: 'linear', rotation: 0, color1: '#00ffa3', color2: '#00f0ff' }
  });

  const [cornerDotColor, setCornerDotColor] = useState<ColorConfig>({
    type: 'solid',
    solidColor: '#00ffa3',
    gradient: { type: 'linear', rotation: 0, color1: '#00ffa3', color2: '#00f0ff' }
  });

  const [options, setOptions] = useState<Options>({
    width: 280,
    height: 280,
    type: 'svg' as DrawType,
    data: 'https://bunker-255.com',
    image: '',
    margin: 10,
    qrOptions: {
      typeNumber: 0 as TypeNumber,
      mode: 'Byte' as Mode,
      errorCorrectionLevel: 'Q' as ErrorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 5,
      crossOrigin: 'anonymous',
    },
    dotsOptions: { type: 'rounded' as DotType },
    backgroundOptions: {},
    cornersSquareOptions: { type: 'extra-rounded' as CornerSquareType },
    cornersDotOptions: { type: 'dot' as CornerDotType },
  });

  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  const getColorOptions = (config: ColorConfig) => {
    if (config.type === 'solid') {
      return { color: config.solidColor };
    } else {
      return {
        gradient: {
          type: config.gradient.type,
          rotation: config.gradient.rotation * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: config.gradient.color1 },
            { offset: 1, color: config.gradient.color2 },
          ]
        }
      };
    }
  };

  useEffect(() => {
    setOptions((prev) => ({
      ...prev,
      dotsOptions: { ...prev.dotsOptions, ...getColorOptions(dotsColor) },
      backgroundOptions: { ...prev.backgroundOptions, ...getColorOptions(bgColor) },
      cornersSquareOptions: { ...prev.cornersSquareOptions, ...getColorOptions(cornerSquareColor) },
      cornersDotOptions: { ...prev.cornersDotOptions, ...getColorOptions(cornerDotColor) },
    }));
  }, [dotsColor, bgColor, cornerSquareColor, cornerDotColor]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const onDataChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOptions((options) => ({ ...options, data: event.target.value }));
  };

  const onExtensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((options) => ({ ...options, type: event.target.value as DrawType }));
  };

  const onDotTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((options) => ({
      ...options,
      dotsOptions: { ...options.dotsOptions, type: event.target.value as DotType },
    }));
  };

  const onCornerSquareTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((options) => ({
      ...options,
      cornersSquareOptions: { ...options.cornersSquareOptions, type: event.target.value as CornerSquareType },
    }));
  };

  const onCornerDotTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((options) => ({
      ...options,
      cornersDotOptions: { ...options.cornersDotOptions, type: event.target.value as CornerDotType },
    }));
  };

  const onImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOptions((options) => ({ ...options, image: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({ extension: options.type as any });
  };

  const tabs = [
    { id: 'content', label: t.tabs.content, icon: Type },
    { id: 'logo', label: t.tabs.logo, icon: ImageIcon },
    { id: 'shapes', label: t.tabs.shapes, icon: Settings2 },
    { id: 'colors', label: t.tabs.colors, icon: Palette },
  ] as const;

  return (
    <div className={`container max-w-4xl mx-auto px-4 py-8 md:py-12 min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
      <SEO pageKey="tools" />
      
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 text-neon-green font-mono text-[10px] mb-3 uppercase tracking-widest bg-neon-green/10 px-3 py-1 rounded-full">
          <QrCode size={12} />
          <span>BUNKER_QR_STUDIO</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-tech font-bold text-white mb-2">{t.title}</h1>
        <p className="text-slate-400 font-mono text-xs max-w-md mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* TOP: Preview & Download */}
      <div className="bg-bunker-900/40 border border-white/10 p-4 md:p-10 rounded-2xl md:rounded-3xl mb-6 md:mb-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-neon-green/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* QR Preview */}
        <div className="relative z-10 flex flex-col items-center">
          <div 
            ref={ref} 
            className="bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-[0_0_50px_rgba(0,255,163,0.15)] transition-all duration-300 hover:scale-105"
          />
          <div className="mt-3 md:mt-4 flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-neon-green uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
            </span>
            {t.livePreview}
          </div>
        </div>

        {/* Download Actions */}
        <div className="w-full max-w-xs space-y-3 md:space-y-4 relative z-10">
          <div className="bg-bunker-950/50 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl space-y-3 md:space-y-4">
            <div>
              <label className="block text-[9px] md:text-[10px] font-mono text-slate-400 mb-1.5 md:mb-2 uppercase tracking-wider">{t.exportFormat}</label>
              <select
                value={options.type}
                onChange={onExtensionChange}
                className="w-full bg-bunker-900 border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-3 text-white font-mono text-xs md:text-sm focus:border-neon-green focus:outline-none transition-colors cursor-pointer"
              >
                <option value="svg">SVG (Vector - Best Quality)</option>
                <option value="png">PNG (Image - Transparent)</option>
                <option value="jpeg">JPEG (Image - Solid)</option>
                <option value="webp">WEBP (Image - Web Optimized)</option>
              </select>
            </div>
            <button
              onClick={onDownloadClick}
              className="w-full flex items-center justify-center gap-2 bg-neon-green text-bunker-950 font-tech font-bold py-3 md:py-3.5 px-4 rounded-lg md:rounded-xl hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,163,0.4)] transition-all duration-300 text-sm md:text-base"
            >
              <Download size={16} className="md:w-[18px] md:h-[18px]" />
              {t.download}
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM: Tabbed Settings */}
      <div className="bg-bunker-900/40 border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Tabs Header */}
        <div className="flex overflow-x-auto border-b border-white/10 bg-bunker-950/30 hide-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex-1 min-w-[80px] md:min-w-[120px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-3 md:py-4 px-2 md:px-4 text-[9px] md:text-xs font-tech font-bold uppercase tracking-wider transition-all duration-300 border-b-2 ${
                  isActive 
                    ? 'border-neon-green text-neon-green bg-neon-green/5' 
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon size={14} className="md:w-4 md:h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tabs Content */}
        <div className="p-4 md:p-8 min-h-[250px] md:min-h-[300px]">
          
          {/* CONTENT TAB */}
          {activeTab === 'content' && (
            <div className="max-w-2xl mx-auto animate-fade-in">
              <label className="block text-[10px] md:text-xs font-mono text-slate-400 mb-2 md:mb-3 uppercase tracking-wider">{t.contentLabel}</label>
              <textarea
                value={options.data}
                onChange={onDataChange}
                className="w-full bg-bunker-950/50 border border-white/10 rounded-xl p-3 md:p-4 text-white font-mono text-xs md:text-sm focus:border-neon-green focus:outline-none transition-colors resize-none shadow-inner"
                rows={4}
                placeholder={t.contentPlaceholder}
              />
              <p className="text-[9px] md:text-[10px] font-mono text-slate-500 mt-2 md:mt-3 text-center">
                {t.contentHint}
              </p>
            </div>
          )}

          {/* LOGO TAB */}
          {activeTab === 'logo' && (
            <div className="max-w-2xl mx-auto animate-fade-in text-center space-y-4 md:space-y-6">
              <div className="border-2 border-dashed border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-neon-green/50 transition-colors bg-bunker-950/30">
                {options.image ? (
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-2 shadow-lg">
                      <img src={options.image} alt="Logo preview" className="w-full h-full object-contain" />
                    </div>
                    <button
                      onClick={() => setOptions({ ...options, image: '' })}
                      className="flex items-center gap-2 px-3 md:px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 rounded-lg md:rounded-xl transition-colors font-mono text-[10px] md:text-xs"
                    >
                      <Trash2 size={14} /> {t.removeLogo}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                      <ImageIcon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-tech text-white mb-1">{t.logoUpload}</p>
                      <p className="text-[9px] md:text-[10px] font-mono text-slate-500 mb-3 md:mb-4">{t.logoHint}</p>
                      <label className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer font-mono text-[10px] md:text-xs rounded-lg md:rounded-xl border border-white/10">
                        <Upload size={14} className="mr-2" />
                        {t.chooseFile}
                        <input type="file" accept="image/*" onChange={onImageUpload} className="hidden" />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SHAPES TAB */}
          {activeTab === 'shapes' && (
            <div className="max-w-3xl mx-auto animate-fade-in grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              <div className="col-span-2 md:col-span-1 bg-bunker-950/50 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl">
                <label className="block text-[9px] md:text-[10px] font-mono text-slate-400 mb-2 md:mb-3 uppercase tracking-wider text-center">{t.dotsStyle}</label>
                <select
                  value={options.dotsOptions?.type}
                  onChange={onDotTypeChange}
                  className="w-full bg-bunker-900 border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-3 text-white font-mono text-xs md:text-sm focus:border-neon-green focus:outline-none cursor-pointer"
                >
                  <option value="rounded">{t.rounded}</option>
                  <option value="dots">{t.dots}</option>
                  <option value="classy">{t.classy}</option>
                  <option value="classy-rounded">{t.classyRounded}</option>
                  <option value="square">{t.square}</option>
                  <option value="extra-rounded">{t.extraRounded}</option>
                </select>
              </div>
              <div className="bg-bunker-950/50 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl">
                <label className="block text-[9px] md:text-[10px] font-mono text-slate-400 mb-2 md:mb-3 uppercase tracking-wider text-center">{t.cornerSquare}</label>
                <select
                  value={options.cornersSquareOptions?.type}
                  onChange={onCornerSquareTypeChange}
                  className="w-full bg-bunker-900 border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-3 text-white font-mono text-xs md:text-sm focus:border-neon-green focus:outline-none cursor-pointer"
                >
                  <option value="dot">{t.dot}</option>
                  <option value="square">{t.square}</option>
                  <option value="extra-rounded">{t.extraRounded}</option>
                </select>
              </div>
              <div className="bg-bunker-950/50 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl">
                <label className="block text-[9px] md:text-[10px] font-mono text-slate-400 mb-2 md:mb-3 uppercase tracking-wider text-center">{t.cornerDot}</label>
                <select
                  value={options.cornersDotOptions?.type}
                  onChange={onCornerDotTypeChange}
                  className="w-full bg-bunker-900 border border-white/10 rounded-lg md:rounded-xl p-2.5 md:p-3 text-white font-mono text-xs md:text-sm focus:border-neon-green focus:outline-none cursor-pointer"
                >
                  <option value="dot">{t.dot}</option>
                  <option value="square">{t.square}</option>
                </select>
              </div>
            </div>
          )}

          {/* COLORS TAB */}
          {activeTab === 'colors' && (
            <div className="max-w-4xl mx-auto animate-fade-in space-y-3 md:space-y-4">
              <ColorSection title={t.mainColor} config={dotsColor} onChange={setDotsColor} t={t} />
              <ColorSection title={t.bgColor} config={bgColor} onChange={setBgColor} t={t} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <ColorSection title={t.cornerSquareColor} config={cornerSquareColor} onChange={setCornerSquareColor} t={t} />
                <ColorSection title={t.cornerDotColor} config={cornerDotColor} onChange={setCornerDotColor} t={t} />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* More Tools Button */}
      <div className="mt-12 flex justify-center">
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-bunker-900 border border-white/10 hover:border-neon-green/50 text-white rounded-xl font-tech font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,163,0.2)] group"
        >
          {t.moreTools}
          <ArrowRight size={18} className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
        </Link>
      </div>
    </div>
  );
};
