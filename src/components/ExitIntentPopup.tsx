import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Clock, Phone, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [phone, setPhone] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves viewport from top
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        
        // Start countdown
        const timer = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setIsOpen(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    };

    // Add delay before activating to avoid immediate triggers
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 30000); // Activate after 30 seconds on page

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    if (phone.length >= 10) {
      toast({
        title: "🎉 Отлично!",
        description: "Эксклюзивное предложение активировано. Мы свяжемся с вами в течение 5 минут!",
      });
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-primary/20 bg-gradient-to-br from-background to-muted">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Подождите! Специальное предложение</DialogTitle>
              <DialogDescription className="text-base mt-1">
                Только для вас - эксклюзивная скидка 200,000₽
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Countdown Timer */}
          <div className="flex items-center justify-center">
            <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-full flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-bold">Предложение истекает через: {formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
            <p className="font-semibold">✅ Скидка 200,000₽ на любой автомобиль</p>
            <p className="font-semibold">✅ Бесплатная доставка по всей России</p>
            <p className="font-semibold">✅ Приоритетное обслуживание VIP</p>
            <p className="font-semibold">✅ Гарантия лучшей цены</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Оставьте номер телефона, и наш менеджер свяжется с вами в течение 5 минут
            </p>
            <div className="flex gap-2">
              <Input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSubmit} size="lg" className="px-6">
                <Phone className="w-4 h-4 mr-2" />
                Получить скидку
              </Button>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            * Предложение действительно только сегодня. Количество автомобилей по акции ограничено.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;