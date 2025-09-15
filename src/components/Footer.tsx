import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Auto-Desk</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Лидер в импорте автомобилей из-за рубежа. Экономия до 40%, гарантия качества.
            </p>
            <Badge variant="secondary">10 лет на рынке</Badge>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Подбор авто</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Таможня</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+7 495 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@auto-desk.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Москва, Кутузовский пр., 36</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="icon" variant="outline">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2025 Auto-Desk. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;