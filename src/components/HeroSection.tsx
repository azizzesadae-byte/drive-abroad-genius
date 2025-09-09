import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Star, TrendingUp } from "lucide-react";
import CountUp from "react-countup";

const HeroSection = () => {
  const [savedAmount, setSavedAmount] = useState(4800000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedAmount((prev) => prev + Math.floor(Math.random() * 10000) + 5000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "В 75% случаев наши услуги БЕСПЛАТНЫ за счет торга с продавцом",
      highlight: true,
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Фиксированная цена в договоре — переплаты за наш счет",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Гарантия 6 месяцев на двигатель и КПП + юридическая защита",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Выкуп авто на любом этапе если изменились планы",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxYTFhMWEiLz48L3N2Zz4=')] bg-cover bg-center opacity-50" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-foreground">ЭКОНОМЬТЕ ДО </span>
            <span className="gradient-text">40%</span>
            <span className="text-foreground"> НА АВТОМОБИЛЯХ</span>
            <br />
            <span className="text-foreground">ИЗ-ЗА РУБЕЖА</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up animation-delay-100">
            Подбор, проверка, покупка и доставка с постановкой на учет
          </p>

          {/* Live Counter */}
          <div className="flex items-center justify-center mb-8 animate-slide-up animation-delay-200">
            <div className="glass px-6 py-3 rounded-full">
              <p className="text-lg font-semibold">
                <span className="text-primary">$</span>
                <CountUp
                  start={savedAmount - 100000}
                  end={savedAmount}
                  duration={2}
                  separator=" "
                  className="text-foreground"
                />
                <span className="text-muted-foreground ml-2">сэкономлено клиентам в 2025 году</span>
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start space-x-3 p-4 rounded-lg animate-slide-up",
                  benefit.highlight ? "glass border-primary/50" : "glass",
                )}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-primary mt-1">{benefit.icon}</div>
                <p className="text-left text-sm md:text-base text-foreground/90">{benefit.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-700">
            <Button variant="cta" size="xl" className="group">
              <span className="mr-2">🔥</span>
              ПОДОБРАТЬ 5 АВТО ЗА 60 МИНУТ
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl" className="group">
              <span className="mr-2">💰</span>
              УЗНАТЬ ЦЕНУ ПОД КЛЮЧ
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-slide-up animation-delay-800">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2847+</p>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Стран присутствия</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Поддержка клиентов</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">99.2%</p>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export default HeroSection;