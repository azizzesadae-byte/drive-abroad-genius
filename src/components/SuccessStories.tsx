import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ThumbsUp, MessageCircle, Share2, MapPin, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

const successStories = [
  {
    id: 1,
    category: "Молодая семья",
    car: "Mazda CX-5",
    country: "Япония",
    savings: 780000,
    client: "Семья из Москвы",
    description: "Сэкономили на покупке кроссовера для поездок на дачу",
    details: {
      mileage: "15,000 км",
      features: "Полный привод, максимальная комплектация",
      delivery: "52 дня",
      condition: "Идеальное",
      documents: "Все оригинальные"
    },
    stats: { likes: 1247, comments: 89, shares: 234 }
  },
  {
    id: 2,
    category: "Предприниматель",
    car: "Mercedes S-Class",
    country: "ОАЭ",
    savings: 2100000,
    client: "Бизнесмен из СПб",
    description: "Получил представительский седан с пробегом 8,000 км",
    details: {
      mileage: "8,000 км",
      features: "Обслуживался у дилера, Ceramic Pro покрытие, массажные кресла",
      delivery: "45 дней",
      condition: "Как новый",
      documents: "Полная история"
    },
    stats: { likes: 2156, comments: 156, shares: 412 }
  },
  {
    id: 3,
    category: "Коллекционер",
    car: "Toyota Supra 1998",
    country: "Япония",
    savings: 450000,
    client: "Энтузиаст из Екатеринбурга",
    description: "Найден редкий экземпляр с документированной историей",
    details: {
      mileage: "67,000 км",
      features: "Оригинальный пробег, вся история обслуживания, заводской тюнинг",
      delivery: "68 дней",
      condition: "Коллекционное",
      documents: "Аукционный лист"
    },
    stats: { likes: 3421, comments: 234, shares: 567 }
  },
  {
    id: 4,
    category: "IT-специалист",
    car: "Tesla Model 3",
    country: "Корея",
    savings: 1350000,
    client: "Программист из Москвы",
    description: "Переехал на электромобиль и экономит на топливе",
    details: {
      mileage: "12,000 км",
      features: "Автопилот включен, белый салон Premium, гарантия на батарею",
      delivery: "38 дней",
      condition: "Отличное",
      documents: "Все проверки пройдены"
    },
    stats: { likes: 1876, comments: 145, shares: 289 }
  },
  {
    id: 5,
    category: "Автопарк такси",
    car: "10x Toyota Camry",
    country: "ОАЭ",
    savings: 4500000,
    client: "Таксопарк из Краснодара",
    description: "Обновил флот с оптовой скидкой",
    details: {
      mileage: "20,000-35,000 км",
      features: "Оптовая скидка 5%, единая логистика, лизинг под 8%",
      delivery: "55 дней",
      condition: "Проверенное",
      documents: "Полный пакет"
    },
    stats: { likes: 892, comments: 67, shares: 123 }
  },
  {
    id: 6,
    category: "Блогер",
    car: "Lamborghini Huracan",
    country: "ОАЭ",
    savings: 8200000,
    client: "Инфлюенсер",
    description: "Совместное владение с 3 партнерами через клуб",
    details: {
      mileage: "5,000 км",
      features: "Стоимость разделена на 4, график использования, обслуживание включено",
      delivery: "42 дня",
      condition: "Премиум",
      documents: "Клубный договор"
    },
    stats: { likes: 5643, comments: 456, shares: 890 }
  }
];

const inspiringStories = [
  {
    title: "Преодоление",
    client: "Михаил",
    car: "BMW 5 Series",
    savings: 1200000,
    story: "После болезни решил исполнить мечту о BMW"
  },
  {
    title: "Мечта студента",
    client: "Дарья",
    car: "Honda Civic Type R",
    savings: 650000,
    story: "Копила 3 года и наконец купила спортивный хот-хэтч"
  },
  {
    title: "Подарок внуку",
    client: "Дедушка Владимир",
    car: "Ford Mustang GT",
    savings: 980000,
    story: "Подарил внуку легендарный маслкар на 18-летие"
  }
];

const cityStats = {
  "Москва": { clients: 1247, avgSavings: 1450000, lastDeal: "вчера" },
  "Санкт-Петербург": { clients: 856, avgSavings: 1320000, lastDeal: "сегодня" },
  "Екатеринбург": { clients: 423, avgSavings: 980000, lastDeal: "2 дня назад" },
  "Краснодар": { clients: 378, avgSavings: 890000, lastDeal: "вчера" },
  "Новосибирск": { clients: 289, avgSavings: 1100000, lastDeal: "3 дня назад" }
};

const SuccessStories = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">2,847+ ДОВОЛЬНЫХ КЛИЕНТОВ </span>
            <span className="gradient-text">НЕ МОГУТ ОШИБАТЬСЯ</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Сотни клиентов. Миллионы сэкономленных рублей
          </p>
          
          {/* Live Counter */}
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-primary/10 rounded-full">
            <TrendingUp className="w-6 h-6 text-primary animate-pulse" />
            <div>
              <p className="text-sm text-muted-foreground">Сэкономлено в 2025 году:</p>
              <p className="text-2xl font-bold text-primary">
                ₽<CountUp
                  start={0}
                  end={487350000}
                  duration={3}
                  separator=" "
                  enableScrollSpy
                  scrollSpyOnce
                />+
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {successStories.map((story, index) => (
            <Card
              key={story.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-glow ${
                activeStory === story.id ? "border-primary shadow-glow" : ""
              } animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setActiveStory(story.id)}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-primary font-semibold">{story.category}</span>
                  <h3 className="text-xl font-bold text-foreground">{story.car}</h3>
                  <p className="text-sm text-muted-foreground">из {story.country}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Экономия</p>
                  <p className="text-2xl font-bold text-primary">
                    ₽{story.savings.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 mb-4">{story.description}</p>

              {/* Details */}
              <div className="space-y-2 text-xs mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Пробег:</span>
                  <span className="font-semibold">{story.details.mileage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Срок:</span>
                  <span className="font-semibold">{story.details.delivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Состояние:</span>
                  <span className="font-semibold text-primary">{story.details.condition}</span>
                </div>
              </div>

              {/* Features */}
              <p className="text-xs text-muted-foreground mb-4 italic">
                {story.details.features}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border/30">
                <div className="flex items-center space-x-4 text-xs">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{story.stats.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>{story.stats.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>{story.stats.shares}</span>
                  </button>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" size="sm" className="w-full mt-4">
                Получить такую же экономию
              </Button>
            </Card>
          ))}
        </div>

        {/* Inspiring Stories */}
        <Card className="p-8 glass mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">Истории, которые вдохновляют</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {inspiringStories.map((story, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">{story.title}</h4>
                <p className="text-primary font-bold mb-2">{story.car}</p>
                <p className="text-sm text-muted-foreground mb-2">{story.story}</p>
                <p className="text-lg font-bold text-primary">
                  Экономия: ₽{story.savings.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Interactive Map */}
        <Card className="p-8 glass">
          <h3 className="text-2xl font-bold text-center mb-6">
            🗺️ НАШИ КЛИЕНТЫ ПО ВСЕЙ РОССИИ
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(cityStats).map(([city, stats]) => (
              <Card
                key={city}
                className={`p-4 cursor-pointer transition-all hover:shadow-glow ${
                  selectedCity === city ? "border-primary shadow-glow" : ""
                }`}
                onClick={() => setSelectedCity(city)}
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <h4 className="font-bold text-center mb-2">{city}</h4>
                <div className="space-y-1 text-xs">
                  <p className="text-center">
                    <span className="font-bold text-primary">{stats.clients}</span>
                    <span className="text-muted-foreground"> клиентов</span>
                  </p>
                  <p className="text-center text-muted-foreground">
                    Ср. экономия: ₽{(stats.avgSavings / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-center text-primary text-xs">
                    Последняя: {stats.lastDeal}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {selectedCity && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg animate-slide-up text-center">
              <p className="text-primary font-semibold">
                В {selectedCity} уже {cityStats[selectedCity].clients} довольных клиентов!
              </p>
              <Button variant="hero" size="sm" className="mt-3">
                Стать следующим
              </Button>
            </div>
          )}
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="cta" size="xl">
            СМОТРЕТЬ ВСЕ ИСТОРИИ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;