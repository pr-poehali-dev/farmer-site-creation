import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AboutFarm() {
  return (
    <section className="py-20 bg-farm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-farm-brown mb-6">
              О нашей ферме
            </h2>
            <div className="w-24 h-1 bg-farm-green mx-auto mb-6"></div>
            <p className="font-merriweather text-xl text-farm-brown/80 max-w-3xl mx-auto leading-relaxed">
              Уже более 15 лет наша семейная ферма заботится о козах и создает
              натуральные молочные продукты в живописной деревне Солнечная
              Долина.
            </p>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Текстовая часть */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-farm-wood/20">
                <h3 className="font-merriweather text-2xl font-bold text-farm-brown mb-4 flex items-center">
                  <Icon
                    name="Heart"
                    size={24}
                    className="mr-3 text-farm-green"
                  />
                  Наша история
                </h3>
                <p className="text-farm-brown/80 leading-relaxed mb-4">
                  Все началось с мечты дедушки Ивана создать идеальное место для
                  разведения коз. Сегодня наша ферма — это дом для 30 коз
                  различных пород, каждая из которых имеет свой характер и имя.
                </p>
                <p className="text-farm-brown/80 leading-relaxed">
                  Мы следуем традиционным методам животноводства, обеспечивая
                  козам свободный выпас на экологически чистых лугах и
                  заботливый уход круглый год.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-farm-wood/20">
                <h3 className="font-merriweather text-2xl font-bold text-farm-brown mb-4 flex items-center">
                  <Icon
                    name="Leaf"
                    size={24}
                    className="mr-3 text-farm-green"
                  />
                  Экологичность
                </h3>
                <p className="text-farm-brown/80 leading-relaxed">
                  Мы не используем химические добавки и гормоны роста. Наши козы
                  питаются только натуральными кормами: свежей травой, сеном
                  собственного производства и экологически чистыми зерновыми
                  культурами.
                </p>
              </div>
            </div>

            {/* Визуальная часть */}
            <div className="space-y-6">
              {/* Карточка с эмодзи-картинкой */}
              <div className="bg-gradient-to-br from-farm-green/10 to-farm-wheat/30 rounded-3xl p-8 text-center shadow-lg">
                <div className="text-8xl mb-4">🐐</div>
                <h4 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                  30 коз
                </h4>
                <p className="text-farm-brown/70">Каждая со своим характером</p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm border-farm-wood/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🥛</div>
                    <div className="font-merriweather text-2xl font-bold text-farm-brown">
                      50л
                    </div>
                    <p className="text-farm-brown/70 text-sm">молока в день</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-farm-wood/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🧀</div>
                    <div className="font-merriweather text-2xl font-bold text-farm-brown">
                      15+
                    </div>
                    <p className="text-farm-brown/70 text-sm">видов сыров</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-farm-wood/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🌾</div>
                    <div className="font-merriweather text-2xl font-bold text-farm-brown">
                      15
                    </div>
                    <p className="text-farm-brown/70 text-sm">лет опыта</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-farm-wood/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🏡</div>
                    <div className="font-merriweather text-2xl font-bold text-farm-brown">
                      100%
                    </div>
                    <p className="text-farm-brown/70 text-sm">семейная ферма</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Ценности */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-farm-wood/20">
            <h3 className="font-merriweather text-3xl font-bold text-farm-brown text-center mb-8">
              Наши принципы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h4 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                  Натуральность
                </h4>
                <p className="text-farm-brown/70">
                  Только естественные процессы без химических добавок
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h4 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                  Забота
                </h4>
                <p className="text-farm-brown/70">
                  Любовь к животным и уважение к природе
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h4 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                  Качество
                </h4>
                <p className="text-farm-brown/70">
                  Высочайшие стандарты в каждом продукте
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
