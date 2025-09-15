import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Star, Award } from "lucide-react";

interface Notification {
  id: number;
  icon: JSX.Element;
  title: string;
  message: string;
  timestamp: string;
}

const RetargetingNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const notificationTemplates = [
    {
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      title: "Цена может вырасти",
      message: "BMW X5, который вы смотрели, подорожает на 150,000₽ через 3 дня",
      timestamp: "2 минуты назад"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "Высокий спрос",
      message: "5 человек сейчас смотрят Mercedes GLE, который вас интересовал",
      timestamp: "5 минут назад"
    },
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      title: "Последний шанс",
      message: "Специальная цена на Audi Q7 действует еще 24 часа",
      timestamp: "10 минут назад"
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      title: "Эксклюзивное предложение",
      message: "Для вас персональная скидка 100,000₽ на Porsche Cayenne",
      timestamp: "15 минут назад"
    },
    {
      icon: <Award className="w-5 h-5 text-purple-500" />,
      title: "VIP статус",
      message: "Вы получили VIP статус! Дополнительная скидка 3% на все автомобили",
      timestamp: "20 минут назад"
    }
  ];

  useEffect(() => {
    // Track user behavior
    const trackUserBehavior = () => {
      const scrollDepth = (window.scrollY / document.documentElement.scrollHeight) * 100;
      const timeOnPage = Date.now() - performance.timing.navigationStart;
      
      // Show notification based on behavior
      if (scrollDepth > 30 && timeOnPage > 45000) { // After 45 seconds and 30% scroll
        showNotification(0);
      } else if (scrollDepth > 50 && timeOnPage > 90000) { // After 90 seconds and 50% scroll
        showNotification(1);
      } else if (scrollDepth > 70 && timeOnPage > 120000) { // After 2 minutes and 70% scroll
        showNotification(2);
      }
    };

    const showNotification = (templateIndex: number) => {
      const template = notificationTemplates[templateIndex];
      if (template && !notifications.find(n => n.message === template.message)) {
        const newNotification: Notification = {
          id: Date.now(),
          ...template
        };
        
        setCurrentNotification(newNotification);
        setNotifications(prev => [...prev, newNotification]);
        
        // Auto hide after 6 seconds
        setTimeout(() => {
          setCurrentNotification(null);
        }, 6000);
      }
    };

    // Set up scroll and time tracking
    const handleScroll = () => trackUserBehavior();
    window.addEventListener("scroll", handleScroll);

    // Check behavior every 30 seconds
    const interval = setInterval(trackUserBehavior, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [notifications]);

  if (!currentNotification) return null;

  return (
    <div className="fixed top-20 right-4 z-50 max-w-sm animate-slide-in-right">
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-primary/20 shadow-2xl">
        <div className="flex gap-3">
          <div className="flex-shrink-0">{currentNotification.icon}</div>
          <div className="flex-1 space-y-1">
            <p className="font-semibold text-sm">{currentNotification.title}</p>
            <p className="text-sm text-muted-foreground">{currentNotification.message}</p>
            <p className="text-xs text-muted-foreground/70">{currentNotification.timestamp}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RetargetingNotifications;