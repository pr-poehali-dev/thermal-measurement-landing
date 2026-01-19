import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { ContactForm } from "@/components/ContactForm";
import { PriceCalculator } from "@/components/PriceCalculator";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PromoTimer } from "@/components/PromoTimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Thermometer" size={32} className="text-primary" />
            <span className="text-xl font-bold">ТеплоЭксперт</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#why-us" className="text-sm hover:text-primary transition-colors">Когда обращаться</a>
            <a href="#how-we-work" className="text-sm hover:text-primary transition-colors">Как работаем</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#prices" className="text-sm hover:text-primary transition-colors">Цены</a>
          </nav>
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Заказать замер
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <Badge className="bg-primary hover:bg-primary/90 text-white border-0">
                <Icon name="Award" size={16} className="mr-1" />
                Аккредитованная компания
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Профессиональные тепловизионные исследования
              </h1>
              <p className="text-xl text-white/90">
                Высокоточные замеры для физических и юридических лиц. 
                Аккредитация подтверждает нашу экспертность.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm text-white/80">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2500+</div>
                  <div className="text-sm text-white/80">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm text-white/80">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/8b5223f1-a64a-45ba-a50f-4a20ae2629bd.jpg" 
                alt="Тепловизионное исследование"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <PromoTimer />
        </div>
      </section>

      <section id="why-us" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Когда нужны тепловизионные измерения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наши клиенты обращаются к нам в различных ситуациях
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardHeader>
                <Icon name="Home" size={40} className="text-primary mb-4" />
                <CardTitle className="text-lg">Покупка недвижимости</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Выявление скрытых дефектов, теплопотерь и проблем с изоляцией до покупки
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardHeader>
                <Icon name="AlertTriangle" size={40} className="text-primary mb-4" />
                <CardTitle className="text-lg">Высокие счета за отопление</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Поиск мест утечки тепла, некачественной теплоизоляции и холодных мостов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardHeader>
                <Icon name="Building2" size={40} className="text-primary mb-4" />
                <CardTitle className="text-lg">Строительный контроль</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Проверка качества строительных работ, соответствия проекту и нормам
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover:shadow-lg">
              <CardHeader>
                <Icon name="Droplet" size={40} className="text-primary mb-4" />
                <CardTitle className="text-lg">Поиск протечек</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Обнаружение скрытых протечек труб, кровли без разрушения конструкций
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-muted-foreground">Простой и понятный процесс от заявки до результата</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Заявка</h3>
              <p className="text-sm text-muted-foreground">
                Оставляете заявку на сайте или звоните нам
              </p>
              <div className="text-xs text-primary font-semibold mt-2">5 минут</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Консультация</h3>
              <p className="text-sm text-muted-foreground">
                Специалист перезванивает, уточняет детали и назначает время
              </p>
              <div className="text-xs text-primary font-semibold mt-2">15 минут</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Выезд и обследование</h3>
              <p className="text-sm text-muted-foreground">
                Проводим тепловизионную съёмку объекта
              </p>
              <div className="text-xs text-primary font-semibold mt-2">1-4 часа</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Отчёт</h3>
              <p className="text-sm text-muted-foreground">
                Получаете подробный отчёт с рекомендациями
              </p>
              <div className="text-xs text-primary font-semibold mt-2">2-3 дня</div>
            </div>
          </div>
        </div>
      </section>

      <section id="before-after" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры наших работ</h2>
            <p className="text-muted-foreground">Реальные термограммы до и после устранения проблем</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/f4dad543-150d-4036-935a-f37432de5566.jpg"
                alt="Термограмма до/после"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Утепление фасада</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-red-600">До:</div>
                    <div className="text-muted-foreground">Теплопотери 45%</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">После:</div>
                    <div className="text-muted-foreground">Теплопотери 8%</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Экономия на отоплении: 12 000 ₽/месяц
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/0e1d6ae9-20d3-4772-9ec4-cd22ea17d281.jpg"
                alt="Термограмма окна"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>Замена окон</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-red-600">До:</div>
                    <div className="text-muted-foreground">Продувание 60%</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-600">После:</div>
                    <div className="text-muted-foreground">Герметичность 98%</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Экономия на отоплении: 7 500 ₽/месяц
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground">Полный спектр тепловизионных исследований</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Building" size={48} className="text-primary mb-4" />
                <CardTitle>Обследование зданий</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Комплексная диагностика тепловых потерь жилых и коммерческих объектов
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Тепловизионная съемка фасадов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Поиск мостов холода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Оценка качества утепления</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Zap" size={48} className="text-primary mb-4" />
                <CardTitle>Электротехнический аудит</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Диагностика электрооборудования и выявление перегревов
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Обследование щитовых</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Проверка соединений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Предотвращение аварий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Factory" size={48} className="text-primary mb-4" />
                <CardTitle>Промышленные объекты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>
                  Тепловизионный контроль производственного оборудования
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Диагностика оборудования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Контроль теплоизоляции трубопроводов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Энергоаудит предприятия</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр Иванов</CardTitle>
                    <p className="text-sm text-muted-foreground">Владелец частного дома</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Обследовали дом перед покупкой. Нашли серьёзные проблемы с утеплением кровли, которые не были видны при обычном осмотре. Сэкономили на торге 300 тысяч рублей. Спасибо команде!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Смирнова</CardTitle>
                    <p className="text-sm text-muted-foreground">Управляющая ЖК</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Работали с ними по обследованию 15 домов нашего ЖК. Профессиональный подход, детальные отчёты, все в срок. Теперь знаем точные места теплопотерь и план работ на год."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Петров</CardTitle>
                    <p className="text-sm text-muted-foreground">Директор завода</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Провели энергоаудит цехов. Выявили перегрев оборудования, который мог привести к аварии. Предотвратили простой производства стоимостью в миллионы. Рекомендую!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Аккредитация</h3>
                <p className="text-muted-foreground text-sm">
                  Официальная аккредитация подтверждает нашу компетентность и соответствие стандартам
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Опытные специалисты</h3>
                <p className="text-muted-foreground text-sm">
                  Команда сертифицированных экспертов с 12+ летним опытом работы
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Высокая точность</h3>
                <p className="text-muted-foreground text-sm">
                  Используем современное оборудование с точностью измерений до 0.1°C
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Полный отчет</h3>
                <p className="text-muted-foreground text-sm">
                  Подробная документация с термограммами, выводами и рекомендациями
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Быстро и качественно</h3>
                <p className="text-muted-foreground text-sm">
                  Выезд в течение 24 часов, готовность отчета за 2-3 дня
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground text-sm">
                  Работаем с договором, предоставляем гарантию на все виды услуг
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Сертификаты и лицензии</h2>
            <p className="text-muted-foreground">Официальные документы, подтверждающие нашу квалификацию</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/3d7d9deb-ec55-48ae-a377-8d1850c828d9.jpg"
                alt="Аттестат аккредитации"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-center">Аттестат аккредитации</CardTitle>
                <p className="text-center text-sm text-muted-foreground">№ RA.RU.21ЭТ99</p>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/3d7d9deb-ec55-48ae-a377-8d1850c828d9.jpg"
                alt="Свидетельство СРО"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-center">Свидетельство СРО</CardTitle>
                <p className="text-center text-sm text-muted-foreground">Строительная экспертиза</p>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/3d7d9deb-ec55-48ae-a377-8d1850c828d9.jpg"
                alt="ISO сертификат"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-center">ISO 9001:2015</CardTitle>
                <p className="text-center text-sm text-muted-foreground">Система менеджмента качества</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground">Примеры выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/0e1d6ae9-20d3-4772-9ec4-cd22ea17d281.jpg" 
                alt="Тепловизионное обследование"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">Жилой комплекс "Новый город"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Обследование 15 многоквартирных домов, выявление теплопотерь в межпанельных швах
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/8b5223f1-a64a-45ba-a50f-4a20ae2629bd.jpg" 
                alt="Производственное здание"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">Завод "ТехПром"</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Энергоаудит производственных цехов, выявление перегревов электрооборудования
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/c6eefc68-f2a6-42ab-a8e1-7e76505b0f0b/files/0e1d6ae9-20d3-4772-9ec4-cd22ea17d281.jpg" 
                alt="Частный дом"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">Коттеджный поселок</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Комплексное обследование 50+ частных домов перед покупкой
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <div className="inline-block bg-muted/50 rounded-lg p-8">
              <div className="text-4xl font-bold text-primary mb-2">Известные клиенты</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                <div className="text-center">
                  <Icon name="Building2" size={40} className="mx-auto text-muted-foreground mb-2" />
                  <div className="font-semibold">ГК "Пионер"</div>
                </div>
                <div className="text-center">
                  <Icon name="Factory" size={40} className="mx-auto text-muted-foreground mb-2" />
                  <div className="font-semibold">ПАО "Энергия"</div>
                </div>
                <div className="text-center">
                  <Icon name="Home" size={40} className="mx-auto text-muted-foreground mb-2" />
                  <div className="font-semibold">СК "Современник"</div>
                </div>
                <div className="text-center">
                  <Icon name="Landmark" size={40} className="mx-auto text-muted-foreground mb-2" />
                  <div className="font-semibold">Городская Дума</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Цены на услуги</h2>
            <p className="text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Квартира</CardTitle>
                <div className="text-3xl font-bold mt-4">
                  от 16 500 ₽
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Тепловизионная съемка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Термограммы всех помещений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Отчет с выводами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Рекомендации по устранению</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary">Популярное</Badge>
              </div>
              <CardHeader>
                <CardTitle>Частный дом</CardTitle>
                <div className="text-3xl font-bold mt-4">
                  от 25 000 ₽
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Внешняя и внутренняя съемка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Обследование кровли</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Подробный отчет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Консультация специалиста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">План устранения дефектов</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Коммерческий объект</CardTitle>
                <div className="text-3xl font-bold mt-4">
                  от 45 000 ₽
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Комплексное обследование</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Электротехнический аудит</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Энергоаудит здания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Официальное заключение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">Работа с юридическими лицами</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>Заказать</Button>
              </CardContent>
            </Card>
          </div>

          <div id="calculator" className="max-w-2xl mx-auto">
            <PriceCalculator />
          </div>

          <div className="text-center mt-8 text-muted-foreground">
            <p>* Итоговая стоимость зависит от площади и сложности объекта</p>
          </div>
        </div>
      </section>

      <section id="coverage" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">География работы</h2>
            <p className="text-muted-foreground">Работаем в Москве и Московской области</p>
          </div>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={80} className="text-primary" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Москва</div>
                      <div className="text-sm text-muted-foreground">В пределах МКАД — бесплатный выезд</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Московская область</div>
                      <div className="text-sm text-muted-foreground">До 50 км от МКАД</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold">Другие регионы</div>
                      <div className="text-sm text-muted-foreground">Возможен выезд по договорённости</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold mb-2">Время выезда:</p>
                    <p className="text-sm text-muted-foreground">В пределах МКАД — в день обращения<br/>За МКАД — на следующий день</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="accreditation" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary border-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Award" size={40} className="text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Аккредитованная испытательная лаборатория</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Наша компания прошла процедуру аккредитации и включена в реестр аккредитованных лиц. 
                  Это гарантирует высокий уровень компетентности наших специалистов и достоверность результатов исследований.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="FileCheck" size={32} className="mx-auto text-primary mb-2" />
                    <div className="font-semibold mb-1">Аттестат аккредитации</div>
                    <div className="text-sm text-muted-foreground">№ RA.RU.21ЭТ99</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="BookCheck" size={32} className="mx-auto text-primary mb-2" />
                    <div className="font-semibold mb-1">Область аккредитации</div>
                    <div className="text-sm text-muted-foreground">Тепловизионная диагностика</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Icon name="CalendarCheck" size={32} className="mx-auto text-primary mb-2" />
                    <div className="font-semibold mb-1">Действует до</div>
                    <div className="text-sm text-muted-foreground">15.08.2028</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Когда лучше проводить тепловизионное обследование?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Оптимальное время — отопительный сезон (с октября по апрель), когда разница температур внутри и снаружи здания составляет не менее 15°C. Это позволяет получить наиболее точные результаты.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Сколько времени занимает обследование?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для квартиры — 1-2 часа, для частного дома — 2-4 часа, для коммерческого объекта — от 4 часов в зависимости от площади. Подготовка отчета занимает 2-3 рабочих дня.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Что входит в отчет по результатам обследования?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Отчет включает: описание объекта, термограммы всех проблемных зон, температурные измерения, анализ выявленных дефектов, рекомендации по устранению, расчет потенциальной экономии после устранения теплопотерь.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Можно ли использовать ваш отчет в суде?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, наши отчеты имеют юридическую силу благодаря аккредитации лаборатории. Документы принимаются судами, страховыми компаниями и государственными органами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Нужна ли специальная подготовка объекта?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Минимальная: обеспечить доступ ко всем помещениям, отопление должно работать не менее 24 часов до обследования, желательно отодвинуть мебель от стен. Подробные инструкции предоставим при согласовании визита.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Работаете ли вы с юридическими лицами?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы для бухгалтерии, работаем по договору с отсрочкой платежа для постоянных клиентов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готовы заказать тепловизионное обследование?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/90">info@termoexpert.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-white/90">Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Thermometer" size={32} className="text-primary" />
                <span className="text-xl font-bold">ТеплоЭксперт</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Аккредитованная испытательная лаборатория тепловизионной диагностики
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Обследование зданий</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Электроаудит</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Промышленные объекты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#advantages" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#accreditation" className="hover:text-primary transition-colors">Аккредитация</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@termoexpert.ru</li>
                <li>Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2026 ТеплоЭксперт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
