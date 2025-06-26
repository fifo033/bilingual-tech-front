
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, Zap, Bot, Mail, Phone, MapPin, Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  en: {
    nav_projects: "Projects",
    nav_services: "Services & Costs",
    nav_contact: "Contact Us",
    hero_title_1: "We Build Tech Solutions That Drive Your Business Forward",
    hero_cta_1: "Get Started",
    hero_title_2: "Why Choose Us?",
    hero_point_1: "⚡ Fast Delivery",
    hero_point_2: "💰 Transparent Pricing",
    hero_point_3: "🔧 Custom Solutions",
    services_title: "Our Services",
    service_mobile: "Mobile Development",
    service_mobile_desc: "Native iOS & Android apps with modern UI/UX",
    service_web: "Web Development",
    service_web_desc: "Full-stack web applications with React & Node.js",
    service_mvp: "Fixed Price MVP",
    service_mvp_desc: "Rapid prototyping with guaranteed delivery timeline",
    service_ai: "AI Agent Service",
    service_ai_desc: "Custom AI solutions and chatbot integrations",
    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "Email",
    contact_request: "Tell us about your project",
    contact_submit: "Send Message",
    contact_success: "Message sent successfully!",
    footer_rights: "All rights reserved."
  },
  ru: {
    nav_projects: "Проекты",
    nav_services: "Услуги и цены",
    nav_contact: "Связаться с нами",
    hero_title_1: "Мы создаем IT-решения, которые развивают ваш бизнес",
    hero_cta_1: "Начать",
    hero_title_2: "Почему выбирают нас?",
    hero_point_1: "⚡ Быстрая доставка",
    hero_point_2: "💰 Прозрачные цены",
    hero_point_3: "🔧 Индивидуальные решения",
    services_title: "Наши услуги",
    service_mobile: "Мобильная разработка",
    service_mobile_desc: "Нативные iOS и Android приложения с современным UI/UX",
    service_web: "Веб-разработка",
    service_web_desc: "Full-stack веб-приложения на React и Node.js",
    service_mvp: "MVP по фиксированной цене",
    service_mvp_desc: "Быстрое прототипирование с гарантированными сроками",
    service_ai: "AI агенты",
    service_ai_desc: "Кастомные AI решения и интеграция чат-ботов",
    contact_title: "Связаться с нами",
    contact_name: "Имя",
    contact_email: "Email",
    contact_request: "Расскажите о вашем проекте",
    contact_submit: "Отправить сообщение",
    contact_success: "Сообщение успешно отправлено!",
    footer_rights: "Все права защищены."
  },
  ar: {
    nav_projects: "المشاريع",
    nav_services: "الخدمات والأسعار",
    nav_contact: "اتصل بنا",
    hero_title_1: "نحن نبني الحلول التقنية التي تدفع عملك إلى الأمام",
    hero_cta_1: "ابدأ الآن",
    hero_title_2: "لماذا تختارنا؟",
    hero_point_1: "⚡ التسليم السريع",
    hero_point_2: "💰 أسعار شفافة",
    hero_point_3: "🔧 حلول مخصصة",
    services_title: "خدماتنا",
    service_mobile: "تطوير التطبيقات المحمولة",
    service_mobile_desc: "تطبيقات iOS و Android الأصلية مع واجهة مستخدم حديثة",
    service_web: "تطوير الويب",
    service_web_desc: "تطبيقات ويب متكاملة مع React و Node.js",
    service_mvp: "MVP بسعر ثابت",
    service_mvp_desc: "نماذج أولية سريعة مع جدول زمني مضمون للتسليم",
    service_ai: "خدمة وكيل الذكاء الاصطناعي",
    service_ai_desc: "حلول الذكاء الاصطناعي المخصصة وتكامل الشات بوت",
    contact_title: "اتصل بنا",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_request: "أخبرنا عن مشروعك",
    contact_submit: "إرسال الرسالة",
    contact_success: "تم إرسال الرسالة بنجاح!",
    footer_rights: "جميع الحقوق محفوظة."
  }
};

const languageOptions = [
  { 
    code: 'en', 
    label: 'English', 
    flag: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=32&h=24&fit=crop&crop=center', 
    display: 'EN' 
  },
  { 
    code: 'ru', 
    label: 'Русский', 
    flag: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=32&h=24&fit=crop&crop=center', 
    display: 'RU' 
  },
  { 
    code: 'ar', 
    label: 'العربية', 
    flag: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=32&h=24&fit=crop&crop=center', 
    display: 'AR' 
  }
];

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'ar'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });
  const { toast } = useToast();

  const t = translations[language];

  const slides = [
    {
      title: t.hero_title_1,
      content: <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">{t.hero_cta_1}</Button>
    },
    {
      title: t.hero_title_2,
      content: (
        <div className="mt-6 space-y-4">
          <div className="text-lg">{t.hero_point_1}</div>
          <div className="text-lg">{t.hero_point_2}</div>
          <div className="text-lg">{t.hero_point_3}</div>
        </div>
      )
    }
  ];

  const services = [
    { icon: Smartphone, title: t.service_mobile, desc: t.service_mobile_desc },
    { icon: Code, title: t.service_web, desc: t.service_web_desc },
    { icon: Zap, title: t.service_mvp, desc: t.service_mvp_desc },
    { icon: Bot, title: t.service_ai, desc: t.service_ai_desc }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contact_success,
      duration: 3000,
    });
    setFormData({ name: '', email: '', request: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="text-2xl font-bold text-white">TechSolutions</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_projects}
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_services}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_contact}
              </button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-white">
                <img 
                  src={getCurrentLanguageOption().flag} 
                  alt={getCurrentLanguageOption().label}
                  className="w-6 h-4 object-cover rounded-sm"
                />
                <span className="text-sm font-medium">{getCurrentLanguageOption().display}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 z-50 min-w-[140px]" align="end">
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.code}
                    onClick={() => setLanguage(option.code as 'en' | 'ru' | 'ar')}
                    className="text-white hover:bg-slate-700 cursor-pointer flex items-center space-x-3 px-3 py-2"
                  >
                    <img 
                      src={option.flag} 
                      alt={option.label}
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="min-h-[300px] flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <div className="animate-fade-in">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
        
        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.services_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group"
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.contact_title}</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder={t.contact_name}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                required
              />
              <Input
                type="email"
                placeholder={t.contact_email}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                required
              />
              <Textarea
                placeholder={t.contact_request}
                value={formData.request}
                onChange={(e) => setFormData({...formData, request: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 min-h-32"
                required
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                {t.contact_submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 TechSolutions. {t.footer_rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
