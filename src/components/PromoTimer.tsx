import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const PromoTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative p-6 text-center">
        <Badge className="bg-white text-orange-600 mb-4 text-sm font-bold">
          <Icon name="Zap" size={16} className="mr-1" />
          СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
        </Badge>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Скидка 15% на первое обследование
        </h3>
        <p className="text-white/90 mb-6">
          + бесплатный выезд специалиста по Москве
        </p>

        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-xs uppercase opacity-90">Дней</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs uppercase opacity-90">Часов</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs uppercase opacity-90">Минут</div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs uppercase opacity-90">Секунд</div>
          </div>
        </div>

        <p className="text-sm mt-6 opacity-90">
          Предложение действует до конца января 2026
        </p>
      </div>
    </Card>
  );
};
