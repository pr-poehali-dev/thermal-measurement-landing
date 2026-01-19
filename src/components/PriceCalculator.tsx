import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const PriceCalculator = () => {
  const [objectType, setObjectType] = useState("apartment");
  const [area, setArea] = useState([100]);
  const [urgency, setUrgency] = useState("standard");

  const calculatePrice = () => {
    let basePrice = 0;
    
    switch (objectType) {
      case "apartment":
        basePrice = 16500;
        break;
      case "house":
        basePrice = 25000;
        break;
      case "commercial":
        basePrice = 45000;
        break;
      case "industrial":
        basePrice = 60000;
        break;
    }

    const areaCoef = area[0] > 150 ? 1.3 : area[0] > 100 ? 1.15 : 1;
    const urgencyCoef = urgency === "urgent" ? 1.25 : 1;

    return Math.round(basePrice * areaCoef * urgencyCoef);
  };

  const price = calculatePrice();

  return (
    <Card className="border-2 border-primary">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <Icon name="Calculator" size={24} className="text-primary" />
          Калькулятор стоимости
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div>
          <Label>Тип объекта</Label>
          <Select value={objectType} onValueChange={setObjectType}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Квартира</SelectItem>
              <SelectItem value="house">Частный дом</SelectItem>
              <SelectItem value="commercial">Коммерческий объект</SelectItem>
              <SelectItem value="industrial">Промышленный объект</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Площадь: {area[0]} м²</Label>
          <Slider
            value={area}
            onValueChange={setArea}
            min={30}
            max={500}
            step={10}
            className="mt-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>30 м²</span>
            <span>500 м²</span>
          </div>
        </div>

        <div>
          <Label>Срочность</Label>
          <Select value={urgency} onValueChange={setUrgency}>
            <SelectTrigger className="mt-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Стандартно (2-3 дня)</SelectItem>
              <SelectItem value="urgent">Срочно (24 часа) +25%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Примерная стоимость:</span>
            <Badge className="text-2xl font-bold px-4 py-2">
              {price.toLocaleString('ru-RU')} ₽
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            * Точная стоимость рассчитывается после осмотра объекта
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
