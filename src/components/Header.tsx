import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Calculator, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Услуги", href: "#services" },
    { label: "Кейсы", href: "#cases" },
    { label: "Клуб", href: "#club" },
    { label: "Партнерам", href: "#partners" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-dark py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AD</span>
            </div>
            <span className="text-xl font-bold text-foreground">Auto-Desk</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+78005550123"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">8 800 555-0123</span>
            </a>
            <Button variant="hero" size="default" className="flex items-center space-x-2">
              <Calculator className="w-4 h-4" />
              <span>Рассчитать стоимость</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border/30">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+78005550123"
                className="flex items-center space-x-2 text-primary font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                <span>8 800 555-0123</span>
              </a>
              <Button variant="hero" size="lg" className="w-full mt-4">
                Рассчитать стоимость
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;