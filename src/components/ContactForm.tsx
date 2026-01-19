import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    objectType: "",
    area: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 15 минут",
      });
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", objectType: "", area: "" });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-xl border-2 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Оставьте заявку</h3>
        <p className="text-muted-foreground">Перезвоним в течение 15 минут</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Ваше имя *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Иван Петров"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (999) 123-45-67"
            required
          />
        </div>

        <div>
          <Label htmlFor="objectType">Тип объекта</Label>
          <Select value={formData.objectType} onValueChange={(value) => setFormData({ ...formData, objectType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип объекта" />
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
          <Label htmlFor="area">Площадь (м²)</Label>
          <Input
            id="area"
            type="number"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            placeholder="100"
          />
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Отправить заявку
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
      </p>
    </form>
  );
};
