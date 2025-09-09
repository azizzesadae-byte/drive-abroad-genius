import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Globe, Trophy, Users, MessageCircle, Shield } from "lucide-react";

const experts = [
  {
    id: 1,
    name: "Иван Петров",
    photo: "https://via.placeholder.com/200x200",
    specialization: "Немецкий премиум",
    experience: "15 лет",
    carsDelivered: 456,
    avgDiscount: "22%",
    rating: 4.9,
    languages: ["🇷🇺 Русский", "🇩🇪 Немецкий", "🇬🇧 Английский"],
    achievements: ["BMW Partner", "Mercedes Expert", "Porsche Certified"],
    totalSaved: 2400000,
    activeClients: 12,
    hotOffer: "BMW M5 CS со скидкой 35%"
  },
  {
    id: 2,
    name: "Акира Танака",
    photo: "https://via.placeholder.com/200x200",
    specialization: "JDM легенды",
    experience: "12 лет",
    carsDelivered: 312,
    avgDiscount: "18%",
    rating: 5.0,
    languages: ["🇷🇺 Русский", "🇯🇵 Японский", "🇬🇧 Английский"],
    achievements: ["JDM Master", "Auction Pro", "Drift King"],
    totalSaved: 1800000,
    activeClients: 8,
    hotOffer: "Nissan Skyline R34 в идеале"
  },
  {
    id: 3,
    name: "Джон Смит",
    photo: "https://via.placeholder.com/200x200",
    specialization: "Американская классика",
    experience: "10 лет",
    carsDelivered: 234,
    avgDiscount: "20%",
    rating: 4.8,
    languages: ["🇷🇺 Русский", "🇺🇸 Английский"],
    achievements: ["Muscle Car Expert", "Classic Pro", "Auction King"],
    totalSaved: 2100000,
    activeClients: 15,
    hotOffer: "Ford Mustang Shelby GT500"
  },
  {
    id: 4,
    name: "Ли Чжун",
    photo: "https://via.placeholder.com/200x200",
    specialization: "Электромобили",
    experience: "8 лет",
    carsDelivered: 189,
    avgDiscount: "15%",
    rating: 4.9,
    languages: ["🇷🇺 Русский", "🇨🇳 Китайский", "🇬🇧 Английский"],
    achievements: ["EV Specialist", "Tesla Expert", "Tech Pro"],
    totalSaved: 1500000,
    activeClients: 10,
    hotOffer: "Zeekr 001 с автопилотом"
  }
];

const ExpertsTeam = () => {
  const [selectedExpert, setSelectedExpert] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Вашу сделку ведет личный эксперт, </span>
            <span className="gradient-text">а не безликий менеджер</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            🦸 КАЖДЫЙ ЭКСПЕРТ — СУПЕРГЕРОЙ СВОЕГО РЕГИОНА
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Работайте напрямую с профессионалом, чья репутация и специализация вам импонируют. 
            Личная ответственность за результат.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experts.map((expert, index) => (
            <Card
              key={expert.id}
              className={cn(
                "relative overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer",
                selectedExpert === expert.id ? "border-primary shadow-glow" : "",
                "animate-slide-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedExpert(expert.id)}
            >
              {/* Hot Offer Badge */}
              {expert.hotOffer && (
                <div className="absolute top-2 right-2 z-10">
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full animate-pulse">
                    🔥 Горячее
                  </div>
                </div>
              )}

              {/* Expert Photo */}
              <div className="relative h-48">
                <img
                  src={expert.photo}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                {/* Rating */}
                <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-background/80 px-2 py-1 rounded">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-foreground">{expert.rating}</span>
                </div>

                {/* Active Clients */}
                <div className="absolute bottom-2 right-2 flex items-center space-x-1 bg-background/80 px-2 py-1 rounded">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-foreground">{expert.activeClients}</span>
                </div>
              </div>

              {/* Expert Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-1">{expert.name}</h3>
                <p className="text-sm text-primary mb-3">{expert.specialization}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Опыт</p>
                    <p className="text-sm font-semibold">{expert.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Доставлено</p>
                    <p className="text-sm font-semibold">{expert.carsDelivered} авто</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Средний торг</p>
                    <p className="text-sm font-semibold text-primary">{expert.avgDiscount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Сэкономил</p>
                    <p className="text-sm font-semibold text-primary">₽{(expert.totalSaved / 1000000).toFixed(1)}M</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {expert.languages.map((lang) => (
                    <span key={lang} className="text-xs bg-muted/30 px-2 py-1 rounded">
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {expert.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center space-x-1 bg-primary/10 px-2 py-1 rounded-full">
                      <Trophy className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Hot Offer */}
                {expert.hotOffer && (
                  <div className="bg-secondary/10 rounded p-2 mb-3">
                    <p className="text-xs text-secondary font-semibold">
                      🔥 {expert.hotOffer}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-2">
                  <Button variant="hero" size="sm" className="w-full">
                    Выбрать эксперта
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 glass text-center">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">📞 ПРЯМАЯ СВЯЗЬ С ЭКСПЕРТОМ</h3>
            <p className="text-sm text-muted-foreground">WhatsApp 24/7</p>
          </Card>
          <Card className="p-6 glass text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">🎥 ВИДЕООТЧЕТЫ ОТ ЭКСПЕРТОВ</h3>
            <p className="text-sm text-muted-foreground">На каждом этапе сделки</p>
          </Card>
          <Card className="p-6 glass text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">🏅 СТРАХОВКА РЕПУТАЦИИ</h3>
            <p className="text-sm text-muted-foreground">Компенсация 200% при проблемах</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Helper function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default ExpertsTeam;