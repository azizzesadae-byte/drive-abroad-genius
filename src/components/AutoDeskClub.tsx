import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Car, Users, Calendar, Briefcase, Sparkles } from "lucide-react";

const clubBenefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Финансовый щит",
    description: "Выкуп вашего авто в любой момент или помощь в продаже с гарантией лучшей цены",
    value: "до 200% от рынка"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Суперкар напрокат",
    description: "Дробная покупка и владение суперкарами группой из 2-4 клиентов",
    value: "от 250,000₽/мес"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Личный консьерж 24/7",
    description: "Запись на ТО, поиск запчастей, тюнинг со скидками до 30%, страхование, помощь при ДТП",
    value: "Экономия до 30%"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Закрытые ивенты",
    description: "Автопробеги с блогерами, тест-драйвы, презентации новинок, networking",
    value: "12+ событий в год"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Инвест-Гараж",
    description: "Инсайдерская информация о ликвидных моделях для инвестиций",
    value: "ROI до 40%/год"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "VIP-привилегии",
    description: "Приоритетный подбор, эксклюзивные предложения, личный менеджер",
    value: "Статус навсегда"
  }
];

const clubResidents = [
  { name: "Хабиб Нурмагомедов", role: "Чемпион UFC", avatar: "🥊" },
  { name: "Эрик Давидыч", role: "Автоблогер", avatar: "🎬" },
  { name: "Булкин", role: "YouTube блогер", avatar: "🎮" },
  { name: "Гордей", role: "Автоэксперт", avatar: "🏁" },
  { name: "Академег", role: "Автожурналист", avatar: "📹" },
];

const AutoDeskClub = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <Users className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Вы покупаете автомобиль. </span>
            <span className="gradient-text">А получаете — семью</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Закрытый клуб Auto-Desk — пожизненные привилегии для каждого клиента
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 rounded-full">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold">
              Членство БЕСПЛАТНО и НАВСЕГДА после первой покупки
            </span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clubBenefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] glass animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{benefit.description}</p>
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-sm font-bold text-primary">{benefit.value}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Club Residents */}
        <Card className="p-8 glass border-primary/30 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Резиденты клуба</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {clubResidents.map((resident, index) => (
              <div 
                key={index}
                className="flex flex-col items-center animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mb-2 shadow-glow">
                  {resident.avatar}
                </div>
                <p className="font-semibold text-foreground">{resident.name}</p>
                <p className="text-xs text-muted-foreground">{resident.role}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Key Animation */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center animate-spin-slow">
              <Car className="w-16 h-16 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-float">🔑</div>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            Ключ от автомобиля превращается в клубную карту
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl">
            ПОДОБРАТЬ АВТОМОБИЛЬ И ВОЙТИ В КЛУБ
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            * Членство активируется автоматически после покупки первого автомобиля
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutoDeskClub;