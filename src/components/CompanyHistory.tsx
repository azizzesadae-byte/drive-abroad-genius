import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Award, TrendingUp, Calendar, Target, Star } from "lucide-react";
import CountUp from "react-countup";

const CompanyHistory = () => {
  const [visitorCount, setVisitorCount] = useState(12847);
  const [charityAmount, setCharityAmount] = useState(15420000);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setCharityAmount(prev => prev + Math.floor(Math.random() * 50000) + 10000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const milestones = [
    {
      year: "2015",
      title: "Основание компании",
      description: "Начали с команды из 3 человек и мечты изменить авторынок",
      achievement: "Первые 10 клиентов"
    },
    {
      year: "2017",
      title: "Международная экспансия",
      description: "Открыли представительства в США, Германии и Японии",
      achievement: "500+ довольных клиентов"
    },
    {
      year: "2019",
      title: "Внедрение AI технологий",
      description: "Первыми в России запустили AI для автоматического торга",
      achievement: "Экономия клиентов 100M₽"
    },
    {
      year: "2021",
      title: "Лидер рынка",
      description: "Стали №1 по импорту премиальных авто в РФ",
      achievement: "2000+ автомобилей доставлено"
    },
    {
      year: "2023",
      title: "Социальная ответственность",
      description: "Запустили благотворительную программу и экологические инициативы",
      achievement: "15M₽ на благотворительность"
    },
    {
      year: "2025",
      title: "Новые горизонты",
      description: "Расширение в СНГ и запуск B2B платформы",
      achievement: "5000+ активных клиентов"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Честность",
      description: "Прозрачные цены и условия. Никаких скрытых платежей"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Клиентоориентированность",
      description: "Ваши интересы - наш приоритет. Работаем 24/7"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Глобальность",
      description: "Партнеры в 47 странах для лучших предложений"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Качество",
      description: "240+ проверок каждого автомобиля"
    }
  ];

  const charityProjects = [
    {
      title: "Детские дома",
      amount: "5,200,000₽",
      description: "Помощь 12 детским домам",
      progress: 78
    },
    {
      title: "Экология",
      amount: "3,800,000₽",
      description: "Посадка 50,000 деревьев",
      progress: 65
    },
    {
      title: "Образование",
      amount: "4,100,000₽",
      description: "Стипендии для 200 студентов",
      progress: 82
    },
    {
      title: "Медицина",
      amount: "2,320,000₽",
      description: "Оборудование для больниц",
      progress: 54
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-1.5 text-sm" variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            10 ЛЕТ НА РЫНКЕ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            История успеха Auto-Desk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От стартапа до лидера рынка. История о том, как мы меняем 
            автомобильный бизнес в России и СНГ
          </p>
        </div>

        {/* Live Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10">
            <Target className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold">
              <CountUp end={visitorCount} duration={2} />
            </p>
            <p className="text-sm text-muted-foreground">Посетителей сейчас</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold">
              <CountUp end={5847} duration={2} />+
            </p>
            <p className="text-sm text-muted-foreground">Довольных клиентов</p>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold">
              <CountUp end={47} duration={2} />
            </p>
            <p className="text-sm text-muted-foreground">Стран партнеров</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-500/5 to-green-500/10">
            <Heart className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="text-3xl font-bold text-green-600">
              ₽<CountUp end={charityAmount} duration={2} separator="," />
            </p>
            <p className="text-sm text-muted-foreground">На благотворительность</p>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Наш путь к успеху</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="w-5/12">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <Badge className="mb-3">{milestone.year}</Badge>
                    <h4 className="font-bold text-lg mb-2">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{milestone.description}</p>
                    <div className="flex items-center gap-2 text-primary">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">{milestone.achievement}</span>
                    </div>
                  </Card>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Наши ценности</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Charity Section */}
        <Card className="p-8 bg-gradient-to-r from-green-500/5 to-green-500/10 border-green-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold">Благотворительность</h3>
          </div>
          <p className="text-muted-foreground mb-8">
            Мы верим в социальную ответственность бизнеса. Каждый месяц часть прибыли 
            направляется на помощь тем, кто в ней нуждается.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {charityProjects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{project.title}</span>
                  <Badge variant="secondary">{project.amount}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-green-600 mb-2">
              Общая сумма: ₽{charityAmount.toLocaleString('ru-RU')}
            </p>
            <Badge className="bg-green-500 text-white">
              <TrendingUp className="w-3 h-3 mr-1" />
              Обновляется в реальном времени
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CompanyHistory;