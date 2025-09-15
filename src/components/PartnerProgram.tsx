import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Gift, Trophy, Calculator, Banknote, Award, Target } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const PartnerProgram = () => {
  const [referrals, setReferrals] = useState([5]);
  const [avgDeal, setAvgDeal] = useState([3000000]);

  const calculateIncome = () => {
    const commission = 0.03; // 3% commission
    const monthlyIncome = referrals[0] * avgDeal[0] * commission;
    const yearlyIncome = monthlyIncome * 12;
    return { monthly: monthlyIncome, yearly: yearlyIncome };
  };

  const income = calculateIncome();

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Реферальная программа",
      description: "Получайте 3% с каждой сделки привлеченного клиента",
      highlight: "Средний доход: 90,000₽/мес"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "VIP статус",
      description: "Приоритетное обслуживание и эксклюзивные предложения",
      highlight: "После 3 рефералов"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Бонусы и подарки",
      description: "Ценные призы за активность в программе",
      highlight: "iPhone 15 Pro за 10 клиентов"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Статусы и привилегии",
      description: "Растите в программе и получайте больше возможностей",
      highlight: "До 5% комиссии"
    }
  ];

  const levels = [
    { name: "Bronze", referrals: "1-3", commission: "3%", bonus: "50,000₽", color: "bg-orange-500" },
    { name: "Silver", referrals: "4-10", commission: "3.5%", bonus: "150,000₽", color: "bg-gray-400" },
    { name: "Gold", referrals: "11-25", commission: "4%", bonus: "500,000₽", color: "bg-yellow-500" },
    { name: "Platinum", referrals: "26+", commission: "5%", bonus: "1,000,000₽", color: "bg-purple-500" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm" variant="secondary">
            💰 ЗАРАБАТЫВАЙТЕ С НАМИ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Партнерская программа
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Рекомендуйте нас и получайте до 5% с каждой сделки. 
            Средний партнер зарабатывает 250,000₽ в месяц
          </p>
        </div>

        {/* Income Calculator */}
        <Card className="mb-12 p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Калькулятор дохода партнера</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Количество рефералов в месяц: {referrals[0]}
              </label>
              <Slider
                value={referrals}
                onValueChange={setReferrals}
                min={1}
                max={20}
                step={1}
                className="mb-4"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Средняя сумма сделки: {avgDeal[0].toLocaleString('ru-RU')}₽
              </label>
              <Slider
                value={avgDeal}
                onValueChange={setAvgDeal}
                min={1000000}
                max={10000000}
                step={500000}
                className="mb-4"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-background/60 backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <Banknote className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Доход в месяц</span>
              </div>
              <p className="text-3xl font-bold text-primary">
                {income.monthly.toLocaleString('ru-RU')}₽
              </p>
            </Card>
            <Card className="p-6 bg-background/60 backdrop-blur">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Доход в год</span>
              </div>
              <p className="text-3xl font-bold text-primary">
                {income.yearly.toLocaleString('ru-RU')}₽
              </p>
            </Card>
          </div>
        </Card>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-primary mb-4">{benefit.icon}</div>
              <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
              <Badge variant="secondary" className="text-xs">
                {benefit.highlight}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Partner Levels */}
        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Target className="w-8 h-8 text-primary" />
            Уровни партнерской программы
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {levels.map((level, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:border-primary transition-colors">
                <div className={`w-16 h-16 rounded-full ${level.color} mx-auto mb-4 flex items-center justify-center`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{level.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{level.referrals} клиентов</p>
                <Badge variant="outline" className="mb-2">{level.commission} комиссии</Badge>
                <p className="text-xs text-muted-foreground">Бонус: {level.bonus}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="xl" className="px-12">
            Стать партнером
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Начните зарабатывать уже сегодня • Первая выплата через 30 дней
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;