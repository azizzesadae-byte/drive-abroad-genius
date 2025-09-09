import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Crown, Briefcase, Shield, TrendingDown, Users } from "lucide-react";

const audiences = [
  {
    id: "pragmatic",
    title: "Новичкам и экономным покупателям",
    subtitle: "«Прагматик»",
    icon: <Calculator className="w-8 h-8" />,
    benefits: [
      {
        icon: <TrendingDown className="w-5 h-5" />,
        title: "Экономия до 40%",
        description: "По сравнению с ценами на внутреннем рынке"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Менеджер 24/7",
        description: "Персональная поддержка на каждом этапе"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Прозрачные цены",
        description: "Фиксированная стоимость в договоре"
      }
    ],
    features: [
      "Проведем шаг за шагом через весь процесс",
      "Поможем с выбором оптимального варианта",
      "Проверим историю автомобиля",
      "Оформим все документы без переплат",
      "Гарантия юридической чистоты авто",
      "Проверка по базам данных стран-экспортеров"
    ],
    cta: "Начать экономить",
    popular: true
  },
  {
    id: "collector",
    title: "Ценителям премиум и эксклюзива",
    subtitle: "«Коллекционер»",
    icon: <Crown className="w-8 h-8" />,
    benefits: [
      {
        icon: <Crown className="w-5 h-5" />,
        title: "Редкие модели",
        description: "Лимитированные версии и эксклюзивные комплектации"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Идеальное состояние",
        description: "Только проверенные экземпляры"
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Элитный клуб",
        description: "Членство в закрытом сообществе"
      }
    ],
    features: [
      "Подбираем премиальные авто",
      "Доступ к закрытым аукционам коллекционеров",
      "Эксклюзивные комплектации в идеальном состоянии",
      "Документированная история каждого авто",
      "Персональный эксперт по редким моделям",
      "Приоритетное обслуживание"
    ],
    cta: "Найти эксклюзив",
    popular: false
  },
  {
    id: "business",
    title: "Дилерам и автосалонам",
    subtitle: "«Бизнесмен»",
    icon: <Briefcase className="w-8 h-8" />,
    benefits: [
      {
        icon: <TrendingDown className="w-5 h-5" />,
        title: "Оптовые скидки",
        description: "До 10% при заказе от 5 авто"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Закрытые аукционы",
        description: "Эксклюзивные каналы поставок"
      },
      {
        icon: <Calculator className="w-5 h-5" />,
        title: "Лизинг и кредит",
        description: "Финансовые инструменты для бизнеса"
      }
    ],
    features: [
      "Партнерства с аукционами по всему миру",
      "Особые условия для бизнеса",
      "ИИ-решения для автоматизации закупок",
      "Единая логистика для всей партии",
      "Отсрочка платежа до 30 дней",
      "Персональный B2B менеджер"
    ],
    cta: "Стать партнером",
    popular: false
  }
];

const TargetAudiences = () => {
  const [activeTab, setActiveTab] = useState("pragmatic");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Найдем идеальное решение </span>
            <span className="gradient-text">именно для вас</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите свой профиль и получите персональное предложение
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {audiences.map((audience) => (
              <TabsTrigger
                key={audience.id}
                value={audience.id}
                className="relative"
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-primary">{audience.icon}</div>
                  <span className="text-sm font-medium">{audience.subtitle}</span>
                </div>
                {audience.popular && (
                  <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                    Популярно
                  </div>
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {audiences.map((audience) => (
            <TabsContent
              key={audience.id}
              value={audience.id}
              className="animate-slide-up"
            >
              <Card className="p-8 glass">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-glow">
                    {audience.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
                  <p className="text-muted-foreground">{audience.subtitle}</p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {audience.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="text-center animate-slide-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                        <div className="text-primary">{benefit.icon}</div>
                      </div>
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {audience.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button variant="cta" size="xl">
                    {audience.cta}
                  </Button>
                  {audience.popular && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Выбирают 67% наших клиентов
                    </p>
                  )}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 glass text-center animate-slide-up">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Гарантия для всех</h4>
            <p className="text-sm text-muted-foreground">
              6 месяцев на двигатель и КПП независимо от профиля
            </p>
          </Card>
          <Card className="p-6 glass text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Персональный подход</h4>
            <p className="text-sm text-muted-foreground">
              Индивидуальное решение для каждого клиента
            </p>
          </Card>
          <Card className="p-6 glass text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
            <TrendingDown className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="font-bold mb-2">Прозрачные условия</h4>
            <p className="text-sm text-muted-foreground">
              Фиксированная цена в договоре для всех категорий
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudiences;