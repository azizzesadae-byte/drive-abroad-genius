import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Trophy, Target } from "lucide-react";

const questions = [
  {
    id: 1,
    title: "Какой тип автомобиля вам нужен?",
    options: [
      { value: "sedan", label: "🚗 Седан", icon: "🚗" },
      { value: "suv", label: "🚙 Внедорожник", icon: "🚙" },
      { value: "sport", label: "🏎️ Спорткар", icon: "🏎️" },
      { value: "electric", label: "⚡ Электромобиль", icon: "⚡" },
      { value: "classic", label: "🚘 Классика/Ретро", icon: "🚘" }
    ]
  },
  {
    id: 2,
    title: "Ваш бюджет?",
    options: [
      { value: "30k", label: "До $30,000", icon: "💰" },
      { value: "50k", label: "$30,000 - $50,000", icon: "💰💰" },
      { value: "100k", label: "$50,000 - $100,000", icon: "💰💰💰" },
      { value: "100k+", label: "Более $100,000", icon: "💎" }
    ]
  },
  {
    id: 3,
    title: "Из какой страны привезти?",
    options: [
      { value: "usa", label: "🇺🇸 США", icon: "🇺🇸" },
      { value: "europe", label: "🇪🇺 Европа", icon: "🇪🇺" },
      { value: "japan", label: "🇯🇵 Япония", icon: "🇯🇵" },
      { value: "korea", label: "🇰🇷 Корея", icon: "🇰🇷" },
      { value: "china", label: "🇨🇳 Китай", icon: "🇨🇳" },
      { value: "uae", label: "🇦🇪 ОАЭ", icon: "🇦🇪" }
    ]
  },
  {
    id: 4,
    title: "Когда планируете покупку?",
    options: [
      { value: "now", label: "В течение месяца", icon: "🔥" },
      { value: "3month", label: "1-3 месяца", icon: "📅" },
      { value: "6month", label: "3-6 месяцев", icon: "📆" },
      { value: "later", label: "Просто интересуюсь", icon: "🤔" }
    ]
  },
  {
    id: 5,
    title: "Что для вас важнее всего?",
    options: [
      { value: "price", label: "Минимальная цена", icon: "💵" },
      { value: "speed", label: "Быстрая доставка", icon: "🚀" },
      { value: "condition", label: "Идеальное состояние", icon: "✨" },
      { value: "rare", label: "Редкая модель", icon: "💎" },
      { value: "performance", label: "Динамика и скорость", icon: "⚡" }
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResult, setShowResult] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", phone: "" });

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Quiz completed:", { answers, contact: contactForm });
    // Handle form submission
  };

  if (showResult) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 glass">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">🎊 ПЕРСОНАЛЬНАЯ ПОДБОРКА ГОТОВА!</h2>
              <p className="text-muted-foreground">На основе ваших ответов мы нашли идеальные варианты</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Подходящих авто</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">₽2.1M</p>
                <p className="text-sm text-muted-foreground">Макс. экономия</p>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary">45-60</p>
                <p className="text-sm text-muted-foreground">Дней доставка</p>
              </div>
            </div>

            <div className="bg-secondary/10 rounded-lg p-4 mb-6">
              <p className="text-center font-semibold text-secondary">
                🎁 Бонус: Скидка 5% за прохождение квиза + Участие в розыгрыше БЕСПЛАТНОГО подбора!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-center text-muted-foreground">
                Оставьте контакты для получения персональной подборки
              </p>
              <Input 
                placeholder="Ваше имя" 
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              />
              <Input 
                placeholder="Телефон" 
                type="tel"
                value={contactForm.phone}
                onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
              />
              <Button variant="cta" size="lg" className="w-full" onClick={handleSubmit}>
                ПОЛУЧИТЬ ПОДБОРКУ И СКИДКУ
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <Target className="inline-block w-12 h-12 text-primary mr-4" />
            <span className="gradient-text">НАЙДЕМ ИДЕАЛЬНЫЙ АВТОМОБИЛЬ</span>
            <span className="text-foreground"> ЗА 2 МИНУТЫ</span>
          </h2>
        </div>

        <Card className="max-w-3xl mx-auto p-8 glass">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Прогресс</span>
              <span className="text-primary font-semibold">{currentQuestion + 1}/{questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold mb-8 text-center">{question.title}</h3>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                size="lg"
                className="h-auto p-6 justify-start hover:border-primary hover:shadow-glow"
                onClick={() => handleAnswer(option.value)}
              >
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="text-base">{option.label}</span>
              </Button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>
            <Button variant="ghost">
              Пропустить
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Quiz;