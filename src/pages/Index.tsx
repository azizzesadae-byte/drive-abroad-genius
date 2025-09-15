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
import PartnerProgram from "@/components/PartnerProgram";
import B2BSolutions from "@/components/B2BSolutions";
import CompanyHistory from "@/components/CompanyHistory";
import Contacts from "@/components/Contacts";
import FortuneWheel from "@/components/FortuneWheel";
import NotificationPopup from "@/components/NotificationPopup";
import Footer from "@/components/Footer";

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
        
        {/* Partner Program - Партнерская программа */}
        <PartnerProgram />
        
        {/* B2B Solutions - B2B решения */}
        <B2BSolutions />
        
        {/* Company History - История компании */}
        <CompanyHistory />
        
        {/* Contacts - Контакты */}
        <Contacts />
        
        {/* Fortune Wheel - Колесо фортуны */}
        <FortuneWheel />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Notification System */}
      <NotificationPopup />
    </div>
  );
};

export default Index;
