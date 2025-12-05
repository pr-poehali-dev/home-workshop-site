import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { title: 'Диагностика двигателя', price: 'от 1500₽', icon: 'Settings', description: 'Компьютерная диагностика всех систем' },
    { title: 'Замена масла', price: 'от 800₽', icon: 'Droplets', description: 'Масло + фильтры, быстро и качественно' },
    { title: 'Ремонт тормозов', price: 'от 2000₽', icon: 'CircleStop', description: 'Колодки, диски, суппорты' },
    { title: 'Шиномонтаж', price: 'от 600₽', icon: 'CircleDot', description: 'Шиномонтаж, балансировка, хранение' },
    { title: 'Ремонт подвески', price: 'от 1200₽', icon: 'Wrench', description: 'Амортизаторы, стойки, рычаги' },
    { title: 'Кузовной ремонт', price: 'от 3000₽', icon: 'Car', description: 'Покраска, рихтовка, полировка' }
  ];

  const portfolio = [
    { title: 'Ремонт двигателя BMW', category: 'Двигатель', image: 'https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/33bfd271-bfc1-401e-9f0c-843d56760c77.jpg' },
    { title: 'Покраска Audi A4', category: 'Кузов', image: 'https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/079f8886-7477-4497-a6fc-99c743d5698b.jpg' },
    { title: 'Замена подвески Mercedes', category: 'Подвеска', image: 'https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/96f94c1c-3348-4cf4-a400-cb6d20aaf52e.jpg' },
    { title: 'Детейлинг Toyota', category: 'Детейлинг', image: '/placeholder.svg' }
  ];

  const reviews = [
    { name: 'Сергей А.', rating: 5, text: 'Отличный сервис! Быстро нашли проблему и починили мотор' },
    { name: 'Михаил П.', rating: 5, text: 'Адекватные цены, профессиональный подход. Рекомендую!' },
    { name: 'Андрей К.', rating: 5, text: 'Делали кузовной ремонт - результат превзошёл ожидания' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                <Icon name="Car" size={28} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  АвтоМастер
                </div>
                <div className="text-xs text-white/70">Профессиональный ремонт авто</div>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'services', 'portfolio', 'reviews', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-white/80 hover:text-white'
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

      <section id="home" className="min-h-[90vh] flex items-center py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-white px-4 py-2 text-sm font-semibold">
                🏁 Работаем с 2010 года
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-secondary">
                Авто мастерская{' '}
                <span className="text-primary">
                  у вашего дома
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный ремонт и обслуживание всех марок автомобилей. Современное оборудование, опытные мастера, гарантия качества.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all" onClick={() => scrollToSection('contacts')}>
                  Записаться на ремонт
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white" onClick={() => scrollToSection('services')}>
                  Узнать цены
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Отремонтированных авто</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/432c550b-38bb-4d36-b350-71d244b17e28/files/4b023dd2-272d-4122-99c2-e320dd6ee863.jpg" 
                alt="Автосервис" 
                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm">Круглосуточно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2 border-2 border-primary/20">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary">Прайс-лист на ремонт</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Честные цены, без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary bg-card"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} size={28} className="text-primary" />
                    </div>
                    <Badge className="bg-secondary text-white text-lg font-bold">{service.price}</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">{service.title}</h3>
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
            <Badge className="bg-secondary/10 text-secondary px-4 py-2 border-2 border-secondary/20">Портфолио</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные проекты наших мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <Badge className="mb-2 bg-primary text-white">{item.category}</Badge>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2 border-2 border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
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
                    <div className="font-semibold text-secondary">{review.name}</div>
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
              <Badge className="bg-secondary/10 text-secondary px-4 py-2 border-2 border-secondary/20">Контакты</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary">Запишитесь на ремонт</h2>
              <p className="text-xl text-muted-foreground">
                Ответим на все вопросы и запишем на удобное время
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-secondary">Телефон</h3>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-secondary">Email</h3>
                    <a href="mailto:info@automaster.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@automaster.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-secondary">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Автомобильная, д. 25
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-secondary">Режим работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Вс: 24/7 круглосуточно
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-primary/20">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Марка авто</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="BMW X5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">Описание проблемы</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border-2 border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      rows={3}
                      placeholder="Опишите проблему с автомобилем..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                    Записаться на ремонт
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Car" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">АвтоМастер</span>
              </div>
              <p className="text-white/70">
                Профессиональный ремонт и обслуживание автомобилей с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li>Диагностика</li>
                <li>Ремонт двигателя</li>
                <li>Кузовной ремонт</li>
                <li>Шиномонтаж</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>+7 (999) 123-45-67</p>
                <p>info@automaster.ru</p>
                <p>г. Москва, ул. Автомобильная, 25</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <div className="text-sm text-white/60">
              © 2024 АвтоМастер. Все права защищены
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Phone" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="Mail" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Icon name="MapPin" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;