import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import AITechnology from "@/components/AITechnology";
import ProcessSteps from "@/components/ProcessSteps";
import LiveDeals from "@/components/LiveDeals";
import TargetAudiences from "@/components/TargetAudiences";
import ExpertsTeam from "@/components/ExpertsTeam";
import AutoDeskClub from "@/components/AutoDeskClub";
import PartnerProgram from "@/components/PartnerProgram";
import B2BSolutions from "@/components/B2BSolutions";
import CompanyHistory from "@/components/CompanyHistory";
import Contacts from "@/components/Contacts";
import NotificationPopup from "@/components/NotificationPopup";
import Footer from "@/components/Footer";
import ProgressTracker from "@/components/ProgressTracker";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import RetargetingNotifications from "@/components/RetargetingNotifications";
import FloatingCTA from "@/components/FloatingCTA";
import usePerformanceOptimizer from "@/hooks/usePerformanceOptimizer";
import { 
  LazyComponent,
  LazyFortuneWheel,
  LazyCalculator,
  LazySuccessStories,
  LazyServicesMap
} from "@/components/LazyComponents";

const Index = () => {
  usePerformanceOptimizer();
  
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
        
        {/* Services Map - Услуги и карта (Lazy Loaded) */}
        <LazyComponent Component={LazyServicesMap} height="600px" />
        
        {/* AI Technology - ИИ-технологии */}
        <AITechnology />
        
        {/* Process Steps - Как мы работаем */}
        <ProcessSteps />
        
        {/* Calculator - Калькулятор (Lazy Loaded) */}
        <LazyComponent Component={LazyCalculator} height="500px" />
        
        {/* Live Deals - Сделки в реальном времени */}
        <LiveDeals />
        
        {/* Success Stories - Истории успеха (Lazy Loaded) */}
        <LazyComponent Component={LazySuccessStories} height="600px" />
        
        {/* Target Audiences - Для кого мы работаем */}
        <TargetAudiences />
        
        {/* Experts Team - Команда экспертов */}
        <ExpertsTeam />
        
        {/* Auto-Desk Club - Закрытый клуб */}
        <AutoDeskClub />
        
        {/* Partner Program - Партнерская программа */}
        <PartnerProgram />
        
        {/* B2B Solutions - B2B решения */}
        <B2BSolutions />
        
        {/* Company History - История компании */}
        <CompanyHistory />
        
        {/* Contacts - Контакты */}
        <Contacts />
        
        {/* Fortune Wheel - Колесо фортуны (Lazy Loaded) */}
        <LazyComponent Component={LazyFortuneWheel} height="500px" />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Notification System */}
      <NotificationPopup />
      
      {/* Global Interactive Elements */}
      <ProgressTracker />
      <ExitIntentPopup />
      <RetargetingNotifications />
      <FloatingCTA />
    </div>
  );
};

export default Index;