import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ServicesMap from "@/components/ServicesMap";
import AITechnology from "@/components/AITechnology";
import ProcessSteps from "@/components/ProcessSteps";
import Calculator from "@/components/Calculator";
import LiveDeals from "@/components/LiveDeals";
import SuccessStories from "@/components/SuccessStories";
import TargetAudiences from "@/components/TargetAudiences";
import ExpertsTeam from "@/components/ExpertsTeam";
import AutoDeskClub from "@/components/AutoDeskClub";
import FortuneWheel from "@/components/FortuneWheel";
import NotificationPopup from "@/components/NotificationPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Social Proof - Нам доверяют */}
        <SocialProofSection />
        
        {/* Services Map - Услуги и карта */}
        <ServicesMap />
        
        {/* AI Technology - ИИ-технологии */}
        <AITechnology />
        
        {/* Process Steps - Как мы работаем */}
        <ProcessSteps />
        
        {/* Calculator - Калькулятор */}
        <Calculator />
        
        {/* Live Deals - Сделки в реальном времени */}
        <LiveDeals />
        
        {/* Success Stories - Истории успеха */}
        <SuccessStories />
        
        {/* Target Audiences - Для кого мы работаем */}
        <TargetAudiences />
        
        {/* Experts Team - Команда экспертов */}
        <ExpertsTeam />
        
        {/* Auto-Desk Club - Закрытый клуб */}
        <AutoDeskClub />
        
        {/* Fortune Wheel - Колесо фортуны */}
        <FortuneWheel />
      </main>
      
      {/* Notification System */}
      <NotificationPopup />
    </div>
  );
};

export default Index;
