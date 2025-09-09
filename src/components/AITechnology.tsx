import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Trophy, Users, Play, Zap } from "lucide-react";
import CountUp from "react-countup";

const aiFeatures = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "🎯 ИИ-Продажник",
    stats: "50,000+",
    subtitle: "лотов анализируется ежедневно",
    features: [
      "Анализирует все доступные лоты в реальном времени",
      "Находит скрытые выгодные предложения",
      "Торгуется с продавцами автоматически",
      "Средняя экономия: 18-25% от первоначальной цены"
    ],
    animation: true,
    savings: "18-25%"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "🏆 ИИ-Выкупщик",
    stats: "12",
    subtitle: "стран одновременно",
    features: [
      "Участвует в аукционах в 12 странах параллельно",
      "Делает ставки в последние секунды торгов",
      "Выигрывает лоты на 15-30% дешевле рынка",
      "Автоматическая стратегия торгов"
    ],
    animation: true,
    savings: "15-30%"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "👥 ИИ-Консьерж",
    stats: "24/7",
    subtitle: "отслеживание доставки",
    features: [
      "Отслеживает каждый этап доставки",
      "Уведомляет о любых изменениях статуса",
      "Предоставляет фото/видео отчеты",
      "Автоматизированное сопровождение после депозита"
    ],
    animation: true,
    savings: "100%"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "🔧 ИИ-СТО-Контролёр",
    stats: "30%",
    subtitle: "экономия на ремонте",
    features: [
      "Контроль стоимости ремонтных работ",
      "Проверка качества выполненных работ",
      "Сравнение цен между СТО",
      "Защита от накруток и переплат"
    ],
    animation: true,
    savings: "до 30%"
  }
];

const AITechnology = () => {
  const [activeDemo, setActiveDemo] = useState(false);
  const [currentBid, setCurrentBid] = useState(45000);
  const [targetBid] = useState(38500);
  const [bidProgress, setBidProgress] = useState(0);

  useEffect(() => {
    if (activeDemo) {
      const interval = setInterval(() => {
        setCurrentBid(prev => {
          if (prev > targetBid) {
            const newBid = prev - Math.floor(Math.random() * 500 + 100);
            setBidProgress(((45000 - newBid) / (45000 - targetBid)) * 100);
            return Math.max(newBid, targetBid);
          }
          return prev;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [activeDemo, targetBid]);

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow animate-float">
            <Brain className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">🤖 ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ </span>
            <span className="gradient-text">РАБОТАЕТ НА ВАС 24/7</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            4 ИИ-агента экономят ваши деньги и время на каждом этапе сделки
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {aiFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 glass animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-primary">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{feature.stats}</span>
                    <span className="text-sm text-muted-foreground">{feature.subtitle}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-full">
                    <span className="text-sm font-bold text-primary">
                      Экономия: {feature.savings}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <Card className="p-8 glass border-primary/30 mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            Смотрите, как ИИ торгуется за ваш автомобиль прямо сейчас
          </h3>
          
          {!activeDemo ? (
            <div className="text-center">
              <Button 
                variant="cta" 
                size="xl" 
                className="group"
                onClick={() => setActiveDemo(true)}
              >
                <Play className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                ЗАПУСТИТЬ ДЕМО ТОРГОВ
              </Button>
            </div>
          ) : (
            <div className="space-y-6 animate-slide-up">
              {/* Demo Interface */}
              <div className="bg-background/50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Автомобиль</p>
                    <p className="text-lg font-bold">BMW X5 2022</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Аукцион</p>
                    <p className="text-lg font-bold">Copart USA</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Начальная цена</span>
                      <span className="text-lg line-through text-muted-foreground">$45,000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Текущая ставка ИИ</span>
                      <span className="text-2xl font-bold text-primary animate-pulse">
                        ${currentBid.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="text-sm text-muted-foreground">Целевая цена</span>
                      <span className="text-lg text-secondary">${targetBid.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Прогресс торгов</span>
                      <span className="text-primary font-semibold">{bidProgress.toFixed(0)}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-500"
                        style={{ width: `${bidProgress}%` }}
                      />
                    </div>
                  </div>

                  {currentBid === targetBid && (
                    <div className="bg-primary/10 rounded-lg p-4 animate-slide-up">
                      <p className="text-center text-primary font-bold text-lg">
                        ✅ Торги завершены! Экономия: ${(45000 - targetBid).toLocaleString()} (14%)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Actions Log */}
              <div className="bg-background/30 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">🤖 Действия ИИ:</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="animate-slide-up">• Анализирую историю торгов...</p>
                  <p className="animate-slide-up" style={{ animationDelay: "0.5s" }}>• Определяю оптимальную стратегию...</p>
                  <p className="animate-slide-up" style={{ animationDelay: "1s" }}>• Делаю ставку в последний момент...</p>
                  {currentBid === targetBid && (
                    <p className="animate-slide-up text-primary font-semibold">• ✅ Лот выигран с экономией 14%!</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Total Savings Counter */}
        <div className="text-center">
          <p className="text-muted-foreground mb-2">Общая экономия с помощью ИИ в 2025 году:</p>
          <p className="text-4xl font-bold text-primary">
            ₽<CountUp 
              start={0} 
              end={127500000} 
              duration={3} 
              separator=" "
              enableScrollSpy
              scrollSpyOnce
            />+
          </p>
        </div>
      </div>
    </section>
  );
};

export default AITechnology;