import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { title: 'Мелкий ремонт', price: 'от 500₽', icon: 'Wrench', description: 'Починим всё, что сломалось' },
    { title: 'Сборка мебели', price: 'от 1000₽', icon: 'Sofa', description: 'Соберём любую мебель быстро' },
    { title: 'Сантехника', price: 'от 800₽', icon: 'Droplet', description: 'Краны, трубы, всё течёт как надо' },
    { title: 'Электрика', price: 'от 700₽', icon: 'Zap', description: 'Розетки, выключатели, проводка' },
    { title: 'Покраска', price: 'от 1500₽', icon: 'Paintbrush', description: 'Стены, потолки, любые поверхности' },
    { title: 'Декор', price: 'от 600₽', icon: 'Sparkles', description: 'Украсим и преобразим ваш дом' }
  ];

  const portfolio = [
    { title: 'Ремонт кухни', category: 'Ремонт', image: 'https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/02ca8e5d-9431-4ee3-a54a-474d0708c40d.jpg' },
    { title: 'Сборка шкафа', category: 'Мебель', image: 'https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/94a77e6a-66b0-433c-9506-7b0109e03553.jpg' },
    { title: 'Покраска комнаты', category: 'Покраска', image: '/placeholder.svg' },
    { title: 'Замена сантехники', category: 'Сантехника', image: '/placeholder.svg' }
  ];

  const reviews = [
    { name: 'Анна М.', rating: 5, text: 'Быстро приехали и починили всё за час! Спасибо!' },
    { name: 'Дмитрий К.', rating: 5, text: 'Собрали огромный шкаф, аккуратно и профессионально' },
    { name: 'Елена В.', rating: 5, text: 'Отличная работа с электрикой, всё работает идеально' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform">
                <Icon name="Home" size={24} className="text-white -rotate-12" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Мастерская у Дома
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'portfolio', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-[90vh] flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground px-4 py-2 text-sm">
                🔧 Работаем с 2015 года
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Ремонт и мастерство{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  у вашего дома
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Решим любую задачу быстро, качественно и с гарантией. От мелкого ремонта до полного преображения вашего пространства.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('contacts')}>
                  Заказать услугу
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Смотреть работы
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных работ</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/2d49ff58-4c09-4064-88d9-b7567441ff5e.jpg" 
                alt="Мастерская" 
                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Прайс-лист услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 bg-card"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} size={28} className="text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">{service.price}</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary px-4 py-2">Портфолио</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты наших мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <Badge className="mb-2 bg-primary">{item.category}</Badge>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/90 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div className="font-semibold">{review.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <Badge className="bg-secondary/10 text-secondary px-4 py-2">Контакты</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Ответим на любые вопросы и примем заказ
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:info@master.ru" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@master.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Мастеров, д. 15
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      rows={4}
                      placeholder="Опишите вашу задачу..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Отправить заявку
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Home" size={20} className="text-white" />
              </div>
              <span className="font-bold">Мастерская у Дома</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Все права защищены
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon name="Phone" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Icon name="Mail" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;