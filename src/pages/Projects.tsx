import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services & Costs",
    nav_contact: "Contact Us",
    projects_title: "Our Projects",
    projects_subtitle: "Explore our recent work and success stories",
    view_demo: "View Demo",
    close: "Close",
    project_1_name: "E-Commerce Mobile App",
    project_1_desc: "Full-featured shopping app with payment integration",
    project_1_full: "A comprehensive e-commerce mobile application built with React Native. Features include user authentication, product catalog, shopping cart, payment gateway integration, order tracking, and push notifications. The app serves over 10,000 active users and has achieved a 4.8-star rating on both App Store and Google Play.",
    project_2_name: "Corporate Website Redesign",
    project_2_desc: "Modern responsive website with CMS integration",
    project_2_full: "Complete redesign and development of a corporate website for a Fortune 500 company. The project included UX/UI design, frontend development with React, backend API development, CMS integration, SEO optimization, and performance enhancements. The new website achieved a 40% increase in conversion rates and 60% improvement in page load speeds.",
    project_3_name: "AI-Powered Analytics Platform",
    project_3_desc: "Business intelligence dashboard with machine learning",
    project_3_full: "Advanced analytics platform that leverages artificial intelligence to provide business insights. Built with React for the frontend, Python/Django for the backend, and TensorFlow for ML models. Features include real-time data visualization, predictive analytics, automated reporting, and custom dashboard creation. The platform processes over 1 million data points daily.",
    project_4_name: "Healthcare Management System",
    project_4_desc: "HIPAA-compliant patient management solution",
    project_4_full: "Comprehensive healthcare management system designed for medical practices. The system includes patient registration, appointment scheduling, electronic health records, billing integration, reporting, and telemedicine capabilities. Built with security-first approach ensuring full HIPAA compliance and data encryption.",
    project_5_name: "Real Estate Platform",
    project_5_desc: "Property listing and management web application",
    project_5_full: "Full-stack real estate platform connecting buyers, sellers, and agents. Features include property listings with virtual tours, advanced search filters, mortgage calculator, agent profiles, messaging system, and document management. The platform handles over 50,000 property listings across multiple regions.",
    project_6_name: "Fintech Mobile Wallet",
    project_6_desc: "Secure digital payment and banking solution",
    project_6_full: "Innovative mobile wallet application with advanced security features. Includes peer-to-peer payments, bill payments, QR code transactions, budget tracking, investment options, and multi-currency support. The app implements biometric authentication, end-to-end encryption, and fraud detection algorithms."
  },
  ru: {
    nav_home: "Главная",
    nav_services: "Услуги и цены",
    nav_contact: "Связаться с нами",
    projects_title: "Наши проекты",
    projects_subtitle: "Изучите наши последние работы и истории успеха",
    view_demo: "Посмотреть демо",
    close: "Закрыть",
    project_1_name: "Мобильное приложение E-Commerce",
    project_1_desc: "Полнофункциональное приложение для покупок с интеграцией платежей",
    project_1_full: "Комплексное мобильное приложение для электронной коммерции, созданное с помощью React Native. Включает аутентификацию пользователей, каталог товаров, корзину покупок, интеграцию платежного шлюза, отслеживание заказов и push-уведомления. Приложение обслуживает более 10 000 активных пользователей и получило рейтинг 4,8 звезды в App Store и Google Play.",
    project_2_name: "Редизайн корпоративного сайта",
    project_2_desc: "Современный адаптивный сайт с интеграцией CMS",
    project_2_full: "Полный редизайн и разработка корпоративного сайта для компании из списка Fortune 500. Проект включал UX/UI дизайн, frontend разработку на React, разработку backend API, интеграцию CMS, SEO оптимизацию и улучшение производительности. Новый сайт достиг 40% увеличения конверсии и 60% улучшения скорости загрузки страниц.",
    project_3_name: "AI-платформа аналитики",
    project_3_desc: "Панель бизнес-аналитики с машинным обучением",
    project_3_full: "Продвинутая аналитическая платформа, использующая искусственный интеллект для предоставления бизнес-инсайтов. Создана с React для frontend, Python/Django для backend и TensorFlow для ML моделей. Включает визуализацию данных в реальном времени, предиктивную аналитику, автоматизированную отчетность и создание пользовательских дашбордов.",
    project_4_name: "Система управления здравоохранением",
    project_4_desc: "HIPAA-совместимое решение для управления пациентами",
    project_4_full: "Комплексная система управления здравоохранением, разработанная для медицинских практик. Система включает регистрацию пациентов, планирование встреч, электронные медицинские записи, интеграцию биллинга, отчетность и возможности телемедицины. Создана с подходом 'безопасность прежде всего', обеспечивая полное соответствие HIPAA и шифрование данных.",
    project_5_name: "Платформа недвижимости",
    project_5_desc: "Веб-приложение для листинга и управления недвижимостью",
    project_5_full: "Full-stack платформа недвижимости, соединяющая покупателей, продавцов и агентов. Включает листинги недвижимости с виртуальными турами, продвинутые фильтры поиска, ипотечный калькулятор, профили агентов, систему сообщений и управление документами. Платформа обрабатывает более 50 000 листингов недвижимости в нескольких регионах.",
    project_6_name: "Fintech мобильный кошелек",
    project_6_desc: "Безопасное решение для цифровых платежей и банкинга",
    project_6_full: "Инновационное приложение мобильного кошелька с продвинутыми функциями безопасности. Включает peer-to-peer платежи, оплату счетов, QR-код транзакции, отслеживание бюджета, инвестиционные опции и поддержку мультивалют. Приложение реализует биометрическую аутентификацию, сквозное шифрование и алгоритмы обнаружения мошенничества."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات والأسعار",
    nav_contact: "اتصل بنا",
    projects_title: "مشاريعنا",
    projects_subtitle: "استكشف أعمالنا الحديثة وقصص نجاحنا",
    view_demo: "عرض العينة",
    close: "إغلاق",
    project_1_name: "تطبيق التجارة الإلكترونية المحمول",
    project_1_desc: "تطبيق تسوق كامل المميزات مع تكامل الدفع",
    project_1_full: "تطبيق محمول شامل للتجارة الإلكترونية تم بناؤه باستخدام React Native. يتضمن مصادقة المستخدم وكتالوج المنتجات وسلة التسوق وتكامل بوابة الدفع وتتبع الطلبات والإشعارات الفورية. يخدم التطبيق أكثر من 10,000 مستخدم نشط وحقق تقييم 4.8 نجوم في كل من App Store و Google Play.",
    project_2_name: "إعادة تصميم موقع الشركة",
    project_2_desc: "موقع ويب حديث متجاوب مع تكامل نظام إدارة المحتوى",
    project_2_full: "إعادة تصميم وتطوير كاملة لموقع شركة من قائمة Fortune 500. شمل المشروع تصميم UX/UI وتطوير الواجهة الأمامية باستخدام React وتطوير API الخلفي وتكامل نظام إدارة المحتوى وتحسين SEO وتحسينات الأداء. حقق الموقع الجديد زيادة 40% في معدلات التحويل وتحسين 60% في سرعات تحميل الصفحة.",
    project_3_name: "منصة التحليلات المدعومة بالذكاء الاصطناعي",
    project_3_desc: "لوحة معلومات ذكية للأعمال مع التعلم الآلي",
    project_3_full: "منصة تحليلات متقدمة تستفيد من الذكاء الاصطناعي لتوفير رؤى الأعمال. تم بناؤها باستخدام React للواجهة الأمامية و Python/Django للخلفية و TensorFlow لنماذج التعلم الآلي. تتضمن الميزات تصور البيانات في الوقت الفعلي والتحليلات التنبؤية والتقارير الآلية وإنشاء لوحات معلومات مخصصة.",
    project_4_name: "نظام إدارة الرعاية الصحية",
    project_4_desc: "حل إدارة المرضى متوافق مع HIPAA",
    project_4_full: "نظام شامل لإدارة الرعاية الصحية مصمم للممارسات الطبية. يتضمن النظام تسجيل المرضى وجدولة المواعيد والسجلات الصحية الإلكترونية وتكامل الفوترة والتقارير وقدرات الطب عن بُعد. تم بناؤه بنهج الأمان أولاً لضمان الامتثال الكامل لـ HIPAA وتشفير البيانات.",
    project_5_name: "منصة العقارات",
    project_5_desc: "تطبيق ويب لإدراج وإدارة العقارات",
    project_5_full: "منصة عقارات متكاملة تربط المشترين والبائعين والوكلاء. تتضمن الميزات قوائم العقارات مع الجولات الافتراضية ومرشحات البحث المتقدمة وحاسبة الرهن العقاري وملفات الوكلاء ونظام المراسلة وإدارة الوثائق. تتعامل المنصة مع أكثر من 50,000 قائمة عقارية عبر مناطق متعددة.",
    project_6_name: "محفظة Fintech المحمولة",
    project_6_desc: "حل دفع رقمي ومصرفي آمن",
    project_6_full: "تطبيق محفظة محمولة مبتكر مع ميزات أمان متقدمة. يتضمن مدفوعات نظير إلى نظير ومدفوعات الفواتير ومعاملات رمز QR وتتبع الميزانية وخيارات الاستثمار ودعم متعدد العملات. ينفذ التطبيق المصادقة البيومترية والتشفير من طرف إلى طرف وخوارزميات كشف الاحتيال."
  }
};

const languageOptions = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' }
];

const Projects = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'ar'>('en');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const t = translations[language];

  const projects = [
    {
      id: 1,
      name: t.project_1_name,
      desc: t.project_1_desc,
      fullDesc: t.project_1_full,
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      name: t.project_2_name,
      desc: t.project_2_desc,
      fullDesc: t.project_2_full,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      name: t.project_3_name,
      desc: t.project_3_desc,
      fullDesc: t.project_3_full,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      name: t.project_4_name,
      desc: t.project_4_desc,
      fullDesc: t.project_4_full,
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      name: t.project_5_name,
      desc: t.project_5_desc,
      fullDesc: t.project_5_full,
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      name: t.project_6_name,
      desc: t.project_6_desc,
      fullDesc: t.project_6_full,
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const getCurrentLanguageOption = () => {
    return languageOptions.find(option => option.code === language) || languageOptions[0];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              TechSolutions
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.back_home}</span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl">{getCurrentLanguageOption().flag}</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 z-50 min-w-[120px]" align="end">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.code}
                      onClick={() => setLanguage(option.code as 'en' | 'ru' | 'ar')}
                      className="text-white hover:bg-slate-700 cursor-pointer flex items-center space-x-3 px-3 py-2"
                    >
                      <span className="text-xl">{option.flag}</span>
                      <span className="text-sm font-medium">{option.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Header */}
      <section className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">{t.projects_title}</h1>
          <p className="text-xl text-gray-300">{t.projects_subtitle}</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedProject.name}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Carousel */}
              <div className="relative mb-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDesc}</p>

              <div className="flex justify-between items-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.view_demo}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                  className="border-slate-600 text-white hover:bg-slate-700"
                >
                  {t.close}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
