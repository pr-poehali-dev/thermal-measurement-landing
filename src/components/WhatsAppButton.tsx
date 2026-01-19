import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "79991234567";
    const message = encodeURIComponent("Здравствуйте! Хочу заказать тепловизионное обследование");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] p-0 animate-pulse"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={32} className="text-white" />
    </Button>
  );
};
