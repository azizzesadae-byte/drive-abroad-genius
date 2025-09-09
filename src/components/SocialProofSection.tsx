import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Play, CheckCircle, Eye } from "lucide-react";

const celebrities = [
  {
    id: 1,
    name: "Эрик Давидыч",
    role: "Автоблогер, 2.5M подписчиков",
    image: "https://via.placeholder.com/200x200",
    quote: "Я лично убедился: Auto-Desk довозит тачки в идеале и без переплат. Ребята делают всё по красоте, им можно доверять!",
    videoViews: "1.2M",
    rating: 5,
  },
  {
    id: 2,
    name: "Булкин",
    role: "YouTube блогер, 5M подписчиков",
    image: "https://via.placeholder.com/200x200",
    quote: "Привезти тачку мечты из США без нервов? С Auto-Desk это реально – я проверил на себе! Теперь советую их всем своим подписчикам",
    videoViews: "856K",
    rating: 5,
  },
  {
    id: 3,
    name: "Гордей",
    role: "Автоэксперт",
    image: "https://via.placeholder.com/200x200",
    quote: "Нашёл через них редкий спорткар, о котором мечтал с детства. Auto-Desk – вы лучшие! Теперь за тачками – только к ним",
    videoViews: "623K",
    rating: 5,
  },
  {
    id: 4,
    name: "Академег",
    role: "Автожурналист",
    image: "https://via.placeholder.com/200x200",
    quote: "Прозрачность на каждом шагу – фото, видео, трекинг... Я чувствовал, что контролирую процесс вместе с Auto-Desk",
    videoViews: "1.5M",
    rating: 5,
  },
  {
    id: 5,
    name: "Хабиб Нурмагомедов",
    role: "Чемпион UFC",
    image: "https://via.placeholder.com/200x200",
    quote: "Мне важна надежность и честность. Auto-Desk работает четко, без обмана – за это их уважаю. Ребята держат слово!",
    videoViews: "3.2M",
    rating: 5,
  },
];

const SocialProofSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Нам доверяют те, </span>
            <span className="gradient-text">на кого вы подписаны</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Лидеры мнений выбирают Auto-Desk
          </p>
        </div>

        {/* Celebrity Cards Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {celebrities.map((celebrity, index) => (
              <Card
                key={celebrity.id}
                className={cn(
                  "min-w-[320px] p-6 cursor-pointer transition-all duration-300 hover:scale-105",
                  activeCard === celebrity.id ? "border-primary shadow-glow" : "hover:shadow-card"
                )}
                onMouseEnter={() => setActiveCard(celebrity.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Verified Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-primary/20 px-2 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-semibold">Проверено</span>
                  </div>
                </div>

                {/* Celebrity Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={celebrity.image}
                      alt={celebrity.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                      <Play className="w-3 h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">{celebrity.name}</h3>
                    <p className="text-sm text-muted-foreground">{celebrity.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(celebrity.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 italic mb-4 min-h-[60px]">
                  "{celebrity.quote}"
                </blockquote>

                {/* Video Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{celebrity.videoViews} просмотров</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Смотреть отзыв
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 animate-slide-up">
          <Button variant="hero" size="lg">
            Вступить в клуб лидеров
          </Button>
        </div>

        {/* Trust Counter */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Сейчас на сайте: <span className="text-primary font-bold">247</span> человек
          </p>
        </div>
      </div>
    </section>
  );
};

// Helper function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default SocialProofSection;