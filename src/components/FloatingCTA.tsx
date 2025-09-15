import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Phone, MessageCircle, ArrowUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadContract = () => {
    toast({
      title: "📄 Договор отправлен!",
      description: "Типовой договор купли-продажи отправлен на вашу почту",
    });
    
    // Simulate download
    const link = document.createElement("a");
    link.href = "#";
    link.download = "Auto-Desk_Contract.pdf";
    link.click();
  };

  const handleCall = () => {
    window.location.href = "tel:+74951234567";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/74951234567?text=Здравствуйте! Интересует покупка автомобиля", "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Download Contract Button */}
      <Button
        size="lg"
        variant="default"
        className="shadow-xl hover:scale-105 transition-transform"
        onClick={handleDownloadContract}
      >
        <Download className="w-4 h-4 mr-2" />
        Скачать договор
      </Button>

      {/* Quick Contact Buttons */}
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="outline"
          className="shadow-lg hover:scale-105 transition-transform bg-background/95 backdrop-blur"
          onClick={handleCall}
        >
          <Phone className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          className="shadow-lg hover:scale-105 transition-transform bg-green-500 hover:bg-green-600 text-white border-green-500"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-4 h-4" />
        </Button>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <Button
          size="icon"
          variant="secondary"
          className="shadow-lg hover:scale-105 transition-all animate-fade-in"
          onClick={scrollToTop}
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default FloatingCTA;