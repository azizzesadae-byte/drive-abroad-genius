import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Brain, LineChart, Shield, Zap, Users, TrendingUp, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const B2BSolutions = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoProgress, setDemoProgress] = useState(0);

  const solutions = [
    {
      id: "ai-trader",
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Trader для автосалонов",
      description: "Автоматический подбор и закупка авто под ваши критерии",
      features: [
        "Анализ 100,000+ лотов ежедневно",
        "Автоматические ставки на аукционах",
        "Предиктивная аналитика спроса",
        "ROI увеличение на 45%"
      ],
      stats: { clients: 127, avgSaving: "35%", deals: "8,400+" },
      demo: true
    },
    {
      id: "fleet",
      icon: <Building2 className="w-8 h-8" />,
      title: "Fleet Management",
      description: "Комплексные решения для корпоративных автопарков",
      features: [
        "Оптовые закупки со скидкой до 20%",
        "Единая логистика для всего парка",
        "Лизинг под 6-8% годовых",
        "Техническое сопровождение 24/7"
      ],
      stats: { clients: 89, avgSaving: "28%", deals: "12,300+" },
      demo: false
    },
    {
      id: "analytics",
      icon: <LineChart className="w-8 h-8" />,
      title: "Market Analytics Pro",
      description: "Аналитика авторынка для принятия решений",
      features: [
        "Реальные цены из 15 стран",
        "Прогнозы изменения цен",
        "Анализ конкурентов",
        "API для интеграции"
      ],
      stats: { clients: 234, avgSaving: "42%", deals: "45,000+" },
      demo: true
    },
    {
      id: "white-label",
      icon: <Shield className="w-8 h-8" />,
      title: "White Label Platform",
      description: "Ваш бренд - наши технологии и экспертиза",
      features: [
        "Полностью ваш брендинг",
        "Готовая инфраструктура",
        "Обучение команды",
        "Техподдержка и updates"
      ],
      stats: { clients: 43, avgSaving: "50%", deals: "6,200+" },
      demo: false
    }
  ];

  const handleDemo = (solutionId: string) => {
    setActiveDemo(solutionId);
    setDemoProgress(0);
    
    const interval = setInterval(() => {
      setDemoProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    setTimeout(() => {
      setActiveDemo(null);
      setDemoProgress(0);
    }, 6000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm" variant="outline">
            <Building2 className="w-4 h-4 mr-2" />
            B2B РЕШЕНИЯ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-решения для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Увеличьте прибыль на 40-60% с помощью наших технологий. 
            Работаем с дилерами, автосалонами и корпорациями
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">493</p>
            <p className="text-sm text-muted-foreground">B2B клиентов</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">72M₽</p>
            <p className="text-sm text-muted-foreground">Сэкономлено в месяц</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">15</p>
            <p className="text-sm text-muted-foreground">Стран покрытия</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-primary">24/7</p>
            <p className="text-sm text-muted-foreground">Поддержка</p>
          </Card>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution) => (
            <Card key={solution.id} className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="text-primary">{solution.icon}</div>
                <div className="flex gap-2">
                  <Badge variant="secondary">
                    <Users className="w-3 h-3 mr-1" />
                    {solution.stats.clients} клиентов
                  </Badge>
                  <Badge variant="outline">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {solution.stats.avgSaving}
                  </Badge>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>

              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {activeDemo === solution.id && (
                <div className="mb-4 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium mb-2">Демо анализ запущен...</p>
                  <Progress value={demoProgress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Анализируем {solution.stats.deals} сделок
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                {solution.demo && (
                  <Button 
                    variant="outline" 
                    onClick={() => handleDemo(solution.id)}
                    disabled={activeDemo === solution.id}
                  >
                    {activeDemo === solution.id ? "Анализ..." : "Запустить демо"}
                  </Button>
                )}
                <Button>
                  Подробнее
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Enterprise Section */}
        <Card className="p-12 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <div className="text-center">
            <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Enterprise решения</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Индивидуальные решения для крупного бизнеса. 
              Полная кастомизация под ваши процессы и требования
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2">
                Dedicated менеджер
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                SLA 99.9%
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                Custom API
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                On-premise опция
              </Badge>
            </div>
            <Button size="lg" className="px-8">
              Обсудить Enterprise
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default B2BSolutions;