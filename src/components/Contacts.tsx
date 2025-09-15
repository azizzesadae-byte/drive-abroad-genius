import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, MessageCircle, Clock, Globe } from "lucide-react";

const Contacts = () => {
  const offices = [
    {
      city: "Москва",
      address: "Кутузовский проспект, 36с3",
      phone: "+7 495 123-45-67",
      hours: "09:00 - 21:00",
      main: true
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 147",
      phone: "+7 812 123-45-67",
      hours: "09:00 - 20:00"
    },
    {
      city: "Екатеринбург",
      address: "ул. Малышева, 51",
      phone: "+7 343 123-45-67",
      hours: "09:00 - 19:00"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">КОНТАКТЫ</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground">Работаем 24/7 для вашего удобства</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {offices.map((office, index) => (
            <Card key={index} className={`p-6 ${office.main ? 'border-primary' : ''}`}>
              {office.main && <Badge className="mb-3">Главный офис</Badge>}
              <h3 className="font-bold text-xl mb-4">{office.city}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{office.hours}</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">Показать на карте</Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Быстрая связь</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Button size="lg" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Telegram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contacts;