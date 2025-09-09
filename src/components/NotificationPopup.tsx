import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const notifications = [
  {
    icon: <CheckCircle className="w-4 h-4 text-primary" />,
    text: "Анна из Краснодара активировала бонус 100,000₽",
    time: "1 мин назад",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-primary" />,
    text: "Виктор узнал экономию на Audi Q7 - 850,000₽",
    time: "3 мин назад",
  },
  {
    icon: <Zap className="w-4 h-4 text-primary" />,
    text: "Наталья оформила Range Rover из ОАЭ",
    time: "только что",
  },
  {
    icon: <Users className="w-4 h-4 text-primary" />,
    text: "Михаил присоединился к закрытому клубу",
    time: "2 мин назад",
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-primary" />,
    text: "Сергей сэкономил 1,200,000₽ на BMW M5",
    time: "5 мин назад",
  },
];

const NotificationPopup = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 10 seconds
    const initialTimer = setTimeout(() => {
      showNotification();
    }, 10000);

    // Then show notifications every 30 seconds
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const notification = notifications[currentNotification];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-up">
      <Card className="glass p-4 max-w-sm shadow-glow">
        <div className="flex items-start space-x-3">
          <div className="mt-1">{notification.icon}</div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{notification.text}</p>
            <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotificationPopup;