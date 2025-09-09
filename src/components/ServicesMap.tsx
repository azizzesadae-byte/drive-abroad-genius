import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Shield, Zap, Globe, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

const countries = [
  { 
    id: "usa", 
    name: "США", 
    flag: "🇺🇸",
    x: "25%", 
    y: "40%",
    services: ["Маслкары", "Пикапы", "Tesla"],
    deals: 234,
    avgSavings: 1500000,
    deliveryTime: "45-60 дней"
  },
  { 
    id: "korea", 
    name: "Корея", 
    flag: "🇰🇷",
    x: "75%", 
    y: "35%",
    services: ["Hyundai", "Kia", "Genesis"],
    deals: 189,
    avgSavings: 900000,
    deliveryTime: "30-45 дней"
  },
  { 
    id: "europe", 
    name: "Европа", 
    flag: "🇪🇺",
    x: "50%", 
    y: "25%",
    services: ["BMW", "Mercedes", "Audi", "Porsche"],
    deals: 456,
    avgSavings: 2100000,
    deliveryTime: "35-50 дней"
  },
  { 
    id: "japan", 
    name: "Япония", 
    flag: "🇯🇵",
    x: "80%", 
    y: "40%",
    services: ["JDM легенды", "Toyota", "Nissan"],
    deals: 312,
    avgSavings: 1200000,
    deliveryTime: "40-55 дней"
  },
  { 
    id: "uae", 
    name: "ОАЭ", 
    flag: "🇦🇪",
    x: "60%", 
    y: "50%",
    services: ["Люксовые авто", "Суперкары"],
    deals: 167,
    avgSavings: 3500000,
    deliveryTime: "25-40 дней"
  },
  { 
    id: "china", 
    name: "Китай", 
    flag: "🇨🇳",
    x: "70%", 
    y: "45%",
    services: ["Zeekr", "LiXiang", "BYD", "Tesla"],
    deals: 298,
    avgSavings: 1100000,
    deliveryTime: "35-50 дней"
  },
  { 
    id: "georgia", 
    name: "Грузия", 
    flag: "🇬🇪",
    x: "55%", 
    y: "40%",
    services: ["Проверенные авто", "Быстрая доставка"],
    deals: 145,
    avgSavings: 650000,
    deliveryTime: "10-20 дней"
  },
];

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "🎯 НАЙДЕМ АВТОМОБИЛЬ ВАШЕЙ МЕЧТЫ ЗА 24 ЧАСА",
    features: [
      "Доступ к закрытым аукционам дилеров",
      "Поиск по 50,000+ лотам ежедневно",
      "Персональный менеджер 24/7"
    ],
    guarantee: "Если не найдем за 48 часов — компенсируем 50,000₽",
    cta: "НАЙТИ МОЮ МЕЧТУ"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "🕵️ ПРОВЕРКА ПО 240+ СЕКРЕТНЫМ ПАРАМЕТРАМ",
    features: [
      "Скрытые ДТП и реальные пробеги",
      "Проверка в базах ФБР, Интерпола, страховых",
      "Подробный фото/видео отчет"
    ],
    guarantee: "Возврат 100% стоимости при обнаружении скрытых дефектов",
    cta: "ПРОВЕРИТЬ VIN БЕСПЛАТНО"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "🤖 ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ РАБОТАЕТ НА ВАС 24/7",
    features: [
      "ИИ-Продажник: торгуется, экономит 18-25%",
      "ИИ-Выкупщик: выигрывает лоты на 15-30% дешевле",
      "ИИ-Консьерж: отслеживает доставку в реальном времени"
    ],
    guarantee: "Средняя экономия с ИИ — 1,200,000₽",
    cta: "СМОТРЕТЬ ИИ В ДЕЙСТВИИ"
  }
];

const ServicesMap = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const activeCountry = countries.find(c => c.id === (hoveredCountry || selectedCountry));

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Globe className="inline-block w-12 h-12 text-primary mr-4" />
            <span className="text-foreground">АВТОМОБИЛИ СО ВСЕГО МИРА — </span>
            <span className="gradient-text">В ВАШЕМ ГАРАЖЕ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Подбираем, проверяем, покупаем, доставляем из 10+ стран
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 rounded-full">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">
              Первые 50 клиентов получают БЕСПЛАТНУЮ проверку по 240+ параметрам
            </span>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="relative h-[500px] overflow-hidden glass">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background/80" />
              
              {/* Country Pins */}
              {countries.map((country) => (
                <div
                  key={country.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: country.x, top: country.y }}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => setSelectedCountry(country.id)}
                >
                  {/* Pulsing circle */}
                  <div className="absolute inset-0 w-12 h-12 bg-primary/30 rounded-full animate-pulse" />
                  
                  {/* Flag pin */}
                  <div className="relative z-10 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{country.flag}</span>
                  </div>
                  
                  {/* Country name */}
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-semibold text-foreground bg-card/80 px-2 py-1 rounded">
                      {country.name}
                    </span>
                  </div>
                  
                  {/* Active deals counter */}
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {country.deals}
                  </div>
                </div>
              ))}

              {/* Live ticker */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Сейчас покупают: BMW из Германии, Tesla из Китая, Land Cruiser из ОАЭ...
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Country Details */}
          <div>
            {activeCountry ? (
              <Card className="p-6 h-full glass border-primary/30">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{activeCountry.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Активных сделок: <span className="text-primary font-bold">{activeCountry.deals}</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Популярные марки:</p>
                    <div className="flex flex-wrap gap-2">
                      {activeCountry.services.map((service) => (
                        <span key={service} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Средняя экономия:</p>
                    <p className="text-2xl font-bold text-primary">
                      <CountUp
                        start={0}
                        end={activeCountry.avgSavings}
                        duration={1}
                        separator=" "
                        prefix="₽"
                      />
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Срок доставки:</p>
                    <p className="text-lg font-semibold text-foreground">{activeCountry.deliveryTime}</p>
                  </div>

                  <Button variant="cta" className="w-full">
                    Рассчитать для {activeCountry.name}
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-6 h-full glass flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Выберите страну на карте для просмотра деталей
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] glass"
            >
              <div className="flex items-start space-x-3 mb-4">
                <div className="text-primary">{service.icon}</div>
                <h3 className="text-lg font-bold text-foreground flex-1">{service.title}</h3>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/10 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-primary">🔥 {service.guarantee}</p>
              </div>

              <Button variant="hero" className="w-full">
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMap;