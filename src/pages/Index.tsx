import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">WSE.AM</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/87b65065-e076-401b-877d-58d8657e36c1.jpg" 
            alt="Yerevan buildings" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-secondary mb-6">
            WSE.AM
          </h1>
          <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto">
            🏡 Агентство недвижимости в Ереване, основанное в 2023 году релокантами из России
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наша миссия — помогать тем, кто уже живёт в Ереване или только собирается переехать, 
            находить идеальное жильё для жизни и отдыха.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Опытные агенты</h3>
              <p className="text-muted-foreground">Опытные и внимательные агенты</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Проверенная база</h3>
              <p className="text-muted-foreground">Проверенная база квартир и надёжных собственников</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Полное сопровождение</h3>
              <p className="text-muted-foreground">Аренда / Купля-продажа / Оформление документов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Key" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-secondary">Аренда жилья</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Поможем найти идеальную квартиру для временного или постоянного проживания
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-secondary">Купля-продажа</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Профессиональное сопровождение сделок купли-продажи недвижимости
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-secondary">Поддержка сделок</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Поддержка на всех этапах сделки и оформление всех необходимых документов
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-xl">Довольных клиентов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2023</div>
              <p className="text-xl">Год основания</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-xl">Проверенные объекты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Оставить заявку</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+374 XX XXX XXX" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших потребностях..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Контакты</h2>
              <div className="mb-6">
                <img 
                  src="/img/907c28cc-3767-4976-aeb3-97b7d747f02a.jpg" 
                  alt="Our team" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Адрес</h3>
                    <p className="text-muted-foreground">Ереван, Армения</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Telegram</h3>
                    <a href="#" className="text-primary hover:underline">@wse_am</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Instagram</h3>
                    <a href="#" className="text-primary hover:underline">@wse.am</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Map" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Карты</h3>
                    <a href="#" className="text-primary hover:underline">Найти нас на картах</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">WSE.AM</div>
          <p className="text-gray-300 mb-4">
            Агентство недвижимости в Ереване • Основано в 2023 году
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary transition-colors">
              <Icon name="Map" size={24} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-600 text-sm text-gray-400">
            © 2023 WSE.AM. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;