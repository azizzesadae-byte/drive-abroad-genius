import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import Calculator from "@/components/Calculator";
import LiveDeals from "@/components/LiveDeals";
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
        
        {/* Social Proof */}
        <SocialProofSection />
        
        {/* Calculator */}
        <Calculator />
        
        {/* Live Deals */}
        <LiveDeals />
        
        {/* Fortune Wheel */}
        <FortuneWheel />
      </main>
      
      {/* Notification System */}
      <NotificationPopup />
    </div>
  );
};

export default Index;
