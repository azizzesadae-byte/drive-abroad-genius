import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Gift, Trophy, Target, Award } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProgressTracker = () => {
  const [progress, setProgress] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [sectionsViewed, setSectionsViewed] = useState(new Set<string>());

  const totalSections = 16; // Total number of sections on the page
  const rewardThreshold = 80; // Show reward at 80% completion

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || entry.target.className;
          setSectionsViewed(prev => {
            const newSet = new Set(prev);
            newSet.add(sectionId);
            
            const newProgress = (newSet.size / totalSections) * 100;
            setProgress(newProgress);
            
            // Check for reward
            if (newProgress >= rewardThreshold && !showReward) {
              setShowReward(true);
              toast({
                title: "🎉 Поздравляем!",
                description: "Вы изучили 80% сайта! Получите бонус 100,000₽ на первую покупку",
                duration: 5000,
              });
            }
            
            return newSet;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all main sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [showReward]);

  const milestones = [
    { percent: 25, icon: <Target className="w-4 h-4" />, reward: "Скидка 50,000₽" },
    { percent: 50, icon: <Trophy className="w-4 h-4" />, reward: "Бесплатная доставка" },
    { percent: 75, icon: <Award className="w-4 h-4" />, reward: "VIP консультация" },
    { percent: 100, icon: <Gift className="w-4 h-4" />, reward: "Бонус 100,000₽" }
  ];

  const currentMilestone = milestones.find(m => progress >= m.percent && progress < (m.percent + 25));

  return (
    <div className="fixed bottom-20 right-4 z-40 max-w-xs">
      <Card className="p-4 bg-background/95 backdrop-blur-sm border-primary/20 shadow-xl">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Изучение сайта</span>
            <span className="text-sm text-primary font-bold">{Math.round(progress)}%</span>
          </div>
          
          <Progress value={progress} className="h-2" />
          
          {currentMilestone && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-primary">{currentMilestone.icon}</span>
              <span className="text-muted-foreground">Разблокировано: {currentMilestone.reward}</span>
            </div>
          )}
          
          {showReward && (
            <Button 
              size="sm" 
              className="w-full"
              onClick={() => {
                toast({
                  title: "Бонус активирован!",
                  description: "100,000₽ будет применен к вашему заказу",
                });
              }}
            >
              Получить бонус 100,000₽
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProgressTracker;