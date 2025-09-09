import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Gift, Sparkles } from "lucide-react";

const prizes = [
  { id: 1, text: "Бесплатная проверка VIN", color: "bg-primary", probability: 30 },
  { id: 2, text: "Скидка 100,000₽", color: "bg-secondary", probability: 15 },
  { id: 3, text: "Бесплатный подбор", color: "bg-primary", probability: 10 },
  { id: 4, text: "VIP-каталог", color: "bg-card", probability: 20 },
  { id: 5, text: "Консультация", color: "bg-primary", probability: 25 },
  { id: 6, text: "Скидка $500", color: "bg-secondary", probability: 15 },
  { id: 7, text: "Гарантия 1 год", color: "bg-primary", probability: 10 },
  { id: 8, text: "$1000 на детейлинг", color: "bg-secondary", probability: 5 },
];

const FortuneWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<typeof prizes[0] | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hasSpun, setHasSpun] = useState(false);

  const spinWheel = () => {
    if (hasSpun) return;
    
    setIsSpinning(true);
    setHasSpun(true);
    
    // Calculate winner based on probability
    const random = Math.random() * 100;
    let cumulativeProbability = 0;
    let winner = prizes[0];
    
    for (const prize of prizes) {
      cumulativeProbability += prize.probability;
      if (random <= cumulativeProbability) {
        winner = prize;
        break;
      }
    }
    
    // Animation duration
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedPrize(winner);
      setShowForm(true);
    }, 3000);
  };

  const handleSubmit = () => {
    console.log("Prize claimed:", selectedPrize, { email, phone });
    setShowForm(false);
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-primary">🎰</span>
            <span className="gradient-text"> КРУТИТЕ И ВЫИГРЫВАЙТЕ!</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Испытайте удачу! Ваш бонус на покупку авто уже ждет вас
          </p>
        </div>

        {/* Wheel Container */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 glass">
            <div className="relative mx-auto w-80 h-80 mb-8">
              {/* Wheel */}
              <div 
                className={`absolute inset-0 rounded-full overflow-hidden transition-transform duration-[3000ms] ${
                  isSpinning ? "animate-spin-wheel" : ""
                }`}
              >
                {prizes.map((prize, index) => {
                  const rotation = (360 / prizes.length) * index;
                  return (
                    <div
                      key={prize.id}
                      className={`absolute w-1/2 h-1/2 origin-right-bottom ${prize.color}`}
                      style={{
                        transform: `rotate(${rotation}deg) skewY(${90 - 360 / prizes.length}deg)`,
                        borderTopLeftRadius: '100%',
                      }}
                    >
                      <div 
                        className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground"
                        style={{
                          transform: `skewY(${-(90 - 360 / prizes.length)}deg) rotate(${360 / prizes.length / 2}deg)`,
                        }}
                      >
                        <span className="transform -translate-x-8 text-center">
                          {prize.text.split(' ').map((word, i) => (
                            <div key={i}>{word}</div>
                          ))}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[40px] border-b-primary"></div>
              </div>
            </div>

            {/* Spin Button */}
            {!hasSpun ? (
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full" 
                onClick={spinWheel}
                disabled={isSpinning}
              >
                {isSpinning ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                    Вращается...
                  </>
                ) : (
                  <>
                    <Gift className="w-5 h-5 mr-2" />
                    ИСПЫТАТЬ УДАЧУ
                  </>
                )}
              </Button>
            ) : (
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Вы уже использовали свою попытку сегодня
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Крутить еще раз можно после заказа услуги
                </Button>
              </div>
            )}

            {/* Daily limit info */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              1 попытка в день • Без скрытых условий • Гарантированный приз
            </p>
          </Card>
        </div>

        {/* Prize Dialog */}
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">
                🎉 Поздравляем!
              </DialogTitle>
              <DialogDescription className="text-center">
                Вы выиграли приз в колесе фортуны
              </DialogDescription>
            </DialogHeader>
            {selectedPrize && (
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-lg font-bold text-primary mb-2">
                    Вы выиграли:
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {selectedPrize.text}
                  </p>
                </div>
                <p className="text-center text-muted-foreground">
                  Оставьте контакты, чтобы закрепить бонус
                </p>
                <Input 
                  placeholder="Email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  placeholder="Телефон" 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                  onClick={handleSubmit}
                >
                  ПОЛУЧИТЬ БОНУС
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FortuneWheel;