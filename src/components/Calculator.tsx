import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator as CalcIcon, TrendingDown, Clock, Shield } from "lucide-react";

const countries = [
  { value: "usa", label: "🇺🇸 США", multiplier: 1.2 },
  { value: "korea", label: "🇰🇷 Корея", multiplier: 1.1 },
  { value: "europe", label: "🇪🇺 Европа", multiplier: 1.3 },
  { value: "japan", label: "🇯🇵 Япония", multiplier: 1.15 },
  { value: "uae", label: "🇦🇪 ОАЭ", multiplier: 1.25 },
  { value: "china", label: "🇨🇳 Китай", multiplier: 0.9 },
  { value: "georgia", label: "🇬🇪 Грузия", multiplier: 0.95 },
];

const engineTypes = [
  { value: "petrol", label: "Бензин" },
  { value: "diesel", label: "Дизель" },
  { value: "hybrid", label: "Гибрид" },
  { value: "electric", label: "Электро" },
];

const Calculator = () => {
  const [carPrice, setCarPrice] = useState(30000);
  const [country, setCountry] = useState("usa");
  const [engineVolume, setEngineVolume] = useState(2.0);
  const [engineType, setEngineType] = useState("petrol");
  const [carAge, setCarAge] = useState(2020);
  const [showForm, setShowForm] = useState(false);
  const [calculation, setCalculation] = useState({
    carCost: 0,
    delivery: 0,
    customs: 0,
    vat: 0,
    utilization: 0,
    broker: 0,
    total: 0,
    marketPrice: 0,
    savings: 0,
    savingsPercent: 0,
  });

  useEffect(() => {
    const countryMultiplier = countries.find(c => c.value === country)?.multiplier || 1;
    const deliveryCost = 2000 * countryMultiplier;
    const customsDuty = carPrice * 0.15;
    const vat = (carPrice + customsDuty) * 0.2;
    const utilization = engineVolume * 1000;
    const broker = 1500;
    const total = carPrice + deliveryCost + customsDuty + vat + utilization + broker;
    const marketPrice = carPrice * 1.4;
    const savings = marketPrice - total;
    const savingsPercent = (savings / marketPrice) * 100;

    setCalculation({
      carCost: carPrice,
      delivery: deliveryCost,
      customs: customsDuty,
      vat: vat,
      utilization: utilization,
      broker: broker,
      total: total,
      marketPrice: marketPrice,
      savings: savings,
      savingsPercent: savingsPercent,
    });
  }, [carPrice, country, engineVolume, engineType, carAge]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <CalcIcon className="inline-block w-12 h-12 text-primary mr-4" />
            <span className="gradient-text">УЗНАЙТЕ ТОЧНУЮ СТОИМОСТЬ</span>
            <span className="text-foreground"> ЗА 60 СЕКУНД</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Прозрачный расчет с учетом всех расходов
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="p-8 glass">
            <h3 className="text-2xl font-bold mb-6">Параметры автомобиля</h3>
            
            {/* Car Price Slider */}
            <div className="space-y-4 mb-6">
              <Label htmlFor="price">
                Стоимость на аукционе: <span className="text-primary font-bold">{formatCurrency(carPrice)}</span>
              </Label>
              <Slider
                id="price"
                min={5000}
                max={200000}
                step={1000}
                value={[carPrice]}
                onValueChange={(value) => setCarPrice(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$5,000</span>
                <span>$200,000</span>
              </div>
            </div>

            {/* Country Select */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="country">Страна отправки</Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger id="country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Engine Volume */}
            <div className="space-y-4 mb-6">
              <Label htmlFor="volume">
                Объем двигателя: <span className="text-primary font-bold">{engineVolume.toFixed(1)}л</span>
              </Label>
              <Slider
                id="volume"
                min={1.0}
                max={6.0}
                step={0.1}
                value={[engineVolume]}
                onValueChange={(value) => setEngineVolume(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1.0л</span>
                <span>6.0л</span>
              </div>
            </div>

            {/* Engine Type */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="engine">Тип двигателя</Label>
              <Select value={engineType} onValueChange={setEngineType}>
                <SelectTrigger id="engine">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {engineTypes.map((e) => (
                    <SelectItem key={e.value} value={e.value}>
                      {e.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Car Age */}
            <div className="space-y-4 mb-6">
              <Label htmlFor="age">
                Год выпуска: <span className="text-primary font-bold">{carAge}</span>
              </Label>
              <Slider
                id="age"
                min={2010}
                max={2024}
                step={1}
                value={[carAge]}
                onValueChange={(value) => setCarAge(value[0])}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>2010</span>
                <span>2024</span>
              </div>
            </div>
          </Card>

          {/* Calculation Results */}
          <div className="space-y-6">
            <Card className="p-8 border-primary/30 shadow-glow">
              <h3 className="text-2xl font-bold mb-6">Расчет стоимости</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Стоимость авто</span>
                  <span className="font-semibold">{formatCurrency(calculation.carCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Доставка</span>
                  <span className="font-semibold">{formatCurrency(calculation.delivery)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Таможенная пошлина</span>
                  <span className="font-semibold">{formatCurrency(calculation.customs)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">НДС</span>
                  <span className="font-semibold">{formatCurrency(calculation.vat)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Утилизационный сбор</span>
                  <span className="font-semibold">{formatCurrency(calculation.utilization)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Услуги брокера</span>
                  <span className="font-semibold">{formatCurrency(calculation.broker)}</span>
                </div>
                
                <div className="border-t border-border/30 pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Итого</span>
                    <span className="text-primary">{formatCurrency(calculation.total)}</span>
                  </div>
                </div>
              </div>

              {/* Savings Block */}
              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Цена в РФ</span>
                  <span className="line-through text-muted-foreground">{formatCurrency(calculation.marketPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold">Ваша экономия</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{formatCurrency(calculation.savings)}</p>
                    <p className="text-sm text-primary">({calculation.savingsPercent.toFixed(0)}%)</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="w-4 h-4 text-primary" />
                  <span>Экономия до 40% от рыночной цены</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Доставка за 45-60 дней</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Фиксированная цена в договоре</span>
                </div>
              </div>

              {/* CTA */}
              {!showForm ? (
                <div className="space-y-3">
                  <Button 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setShowForm(true)}
                  >
                    ЗАФИКСИРОВАТЬ ЦЕНУ
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    ПОЛУЧИТЬ 3 ВАРИАНТА БЕСПЛАТНО
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 animate-slide-up">
                  <p className="text-sm text-center text-muted-foreground">
                    Отлично! Предварительная экономия — {formatCurrency(calculation.savings)}
                  </p>
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Button variant="cta" size="lg" className="w-full">
                    ПОЛУЧИТЬ ТОЧНЫЙ РАСЧЕТ
                  </Button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;