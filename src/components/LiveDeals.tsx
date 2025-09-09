import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Clock, Eye, Users } from "lucide-react";

const deals = [
  {
    id: 1,
    car: "Toyota Land Cruiser 300",
    route: "ОАЭ, Дубай → Москва",
    savings: 2300000,
    progress: 65,
    status: "Проходит таможню",
    image: "https://via.placeholder.com/400x300",
    watchers: 847,
  },
  {
    id: 2,
    car: "Tesla Model Y Performance",
    route: "Китай, Шанхай → Санкт-Петербург",
    savings: 1700000,
    progress: 80,
    status: "В пути",
    image: "https://via.placeholder.com/400x300",
    watchers: 623,
  },
  {
    id: 3,
    car: "BMW M5 Competition",
    route: "Германия, Мюнхен → Екатеринбург",
    savings: 3100000,
    progress: 100,
    status: "Доставлен",
    image: "https://via.placeholder.com/400x300",
    watchers: 1234,
  },
  {
    id: 4,
    car: "Porsche 911 Turbo S",
    route: "США, Лос-Анджелес → Краснодар",
    savings: 4200000,
    progress: 35,
    status: "В порту",
    image: "https://via.placeholder.com/400x300",
    watchers: 956,
  },
];

const LiveDeals = () => {
  const [activeWatchers, setActiveWatchers] = useState<{[key: number]: number}>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWatchers(prev => {
        const updated = {...prev};
        deals.forEach(deal => {
          updated[deal.id] = (prev[deal.id] || deal.watchers) + Math.floor(Math.random() * 10) - 3;
        });
        return updated;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Доставлен": return "text-green-500";
      case "В пути": return "text-blue-500";
      case "Проходит таможню": return "text-yellow-500";
      case "В порту": return "text-orange-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Полная прозрачность: </span>
            <span className="gradient-text">следите за реальными сделками</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Смотрите реальные цены, сроки и экономию наших клиентов в прямом эфире
          </p>
        </div>

        {/* Live Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-destructive/20 rounded-full animate-pulse">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-destructive">LIVE</span>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {deals.map((deal, index) => (
            <Card 
              key={deal.id} 
              className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-card">
                <img 
                  src={deal.image} 
                  alt={deal.car}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{deal.car}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{deal.route}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Savings */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Экономия</p>
                    <p className="text-2xl font-bold text-primary">{formatCurrency(deal.savings)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Статус</p>
                    <p className={`font-semibold ${getStatusColor(deal.status)}`}>
                      {deal.status}
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Прогресс доставки</span>
                    <span className="font-semibold">{deal.progress}%</span>
                  </div>
                  <Progress value={deal.progress} className="h-2" />
                </div>

                {/* Watchers */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>Следят: {activeWatchers[deal.id] || deal.watchers} человек</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Рассчитать для себя
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            СМОТРЕТЬ ВСЕ ЖИВЫЕ СДЕЛКИ
          </Button>
        </div>

        {/* Live Updates Ticker */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-marquee">
            <div className="flex space-x-8 pr-8">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 BMW X5 из Германии - экономия 1,500,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Mercedes S-Class из Японии - экономия 2,200,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Toyota Camry из США - экономия 780,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Audi Q7 из Кореи - экономия 1,350,000₽
              </span>
            </div>
            <div className="flex space-x-8 pr-8">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 BMW X5 из Германии - экономия 1,500,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Mercedes S-Class из Японии - экономия 2,200,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Toyota Camry из США - экономия 780,000₽
              </span>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                🚗 Audi Q7 из Кореи - экономия 1,350,000₽
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default LiveDeals;