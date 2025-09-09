import { Card } from "@/components/ui/card";
import { Search, ShoppingCart, Truck, FileCheck, Gift, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="w-8 h-8" />,
    title: "Подбор и проверка",
    description: "Находим идеальный вариант, проверяем по 240+ параметрам, полный фото/видео отчет",
    duration: "24-48 часов"
  },
  {
    number: "02",
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Покупка с торгом",
    description: "Выкуп авто, торг за счет которого услуги часто бесплатны (в 75% случаев)",
    duration: "1-3 дня"
  },
  {
    number: "03",
    icon: <Truck className="w-8 h-8" />,
    title: "Доставка с Live-трекингом",
    description: "Организация логистики, GPS-трекинг 24/7 в личном кабинете. AI-Консьерж информирует о статусе",
    duration: "30-60 дней"
  },
  {
    number: "04",
    icon: <FileCheck className="w-8 h-8" />,
    title: "Таможенное оформление",
    description: "Полное оформление документов, постановка на учет, параллельный импорт с юридической гарантией",
    duration: "3-5 дней"
  },
  {
    number: "05",
    icon: <Gift className="w-8 h-8" />,
    title: "Передача с гарантией",
    description: "Доставка в любой город РФ и СНГ, вручение ключей, гарантия 6 месяцев на двигатель и КПП, 5000 км на все системы",
    duration: "1 день"
  },
  {
    number: "06",
    icon: <Heart className="w-8 h-8" />,
    title: "Пожизненная поддержка",
    description: "Членство в закрытом клубе клиентов и привилегии",
    duration: "Навсегда"
  }
];

const ProcessSteps = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">6 шагов к автомобилю вашей мечты. </span>
            <span className="gradient-text">Прозрачно. Надежно. Быстро</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            От первого звонка до ключей в руках
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 lg:max-w-md">
                  <Card 
                    className="p-6 hover:shadow-glow transition-all duration-300 glass animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-primary">{step.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                        <p className="text-foreground/80 mb-3">{step.description}</p>
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          <span className="text-sm text-primary font-semibold">{step.duration}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center Circle */}
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow z-10 relative">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-primary/30 lg:hidden" />
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Узнать все детали процесса
          </Button>
        </div>
      </div>
    </section>
  );
};

// Import Button component
import { Button } from "@/components/ui/button";

export default ProcessSteps;