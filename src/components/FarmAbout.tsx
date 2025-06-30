import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function FarmAbout() {
  return (
    <section className="py-20 bg-farm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-brown mb-6">
              О нашем хозяйстве
            </h2>
            <div className="w-24 h-1 bg-farm-green mx-auto mb-6"></div>
            <p className="text-xl text-farm-brown/80 max-w-3xl mx-auto leading-relaxed">
              Экоферма «Зеленый уголок» — это семейное предприятие, которое
              занимается выращиванием экологически чистых продуктов с 2003 года.
            </p>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Текстовая часть */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-farm-brown mb-4 flex items-center">
                  <Icon
                    name="Sprout"
                    size={24}
                    className="mr-3 text-farm-green"
                  />
                  Наша миссия
                </h3>
                <p className="text-farm-brown/80 leading-relaxed mb-4">
                  Мы стремимся предоставить людям доступ к натуральным, здоровым
                  продуктам питания, выращенным с уважением к природе и
                  традиционным методам земледелия.
                </p>
                <p className="text-farm-brown/80 leading-relaxed">
                  Наша ферма расположена в экологически чистом районе, вдали от
                  промышленных предприятий и автомагистралей.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-farm-brown mb-4 flex items-center">
                  <Icon
                    name="Award"
                    size={24}
                    className="mr-3 text-farm-green"
                  />
                  Сертификация
                </h3>
                <p className="text-farm-brown/80 leading-relaxed">
                  Все наши продукты сертифицированы согласно стандартам
                  органического земледелия. Мы регулярно проходим проверки
                  качества и безопасности продукции.
                </p>
              </div>
            </div>

            {/* Визуальная часть */}
            <div className="space-y-6">
              {/* Главная карточка */}
              <div className="bg-gradient-to-br from-farm-green/10 to-farm-sage/20 rounded-3xl p-8 text-center shadow-lg">
                <div className="text-8xl mb-4">🏡</div>
                <h4 className="font-playfair text-2xl font-bold text-farm-brown mb-2">
                  Семейная ферма
                </h4>
                <p className="text-farm-brown/70">
                  Традиции передаются из поколения в поколение
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🌾</div>
                    <div className="font-playfair text-2xl font-bold text-farm-brown">
                      150
                    </div>
                    <p className="text-farm-brown/70 text-sm">гектаров земли</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🐄</div>
                    <div className="font-playfair text-2xl font-bold text-farm-brown">
                      50
                    </div>
                    <p className="text-farm-brown/70 text-sm">голов скота</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🥕</div>
                    <div className="font-playfair text-2xl font-bold text-farm-brown">
                      20+
                    </div>
                    <p className="text-farm-brown/70 text-sm">видов овощей</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    <div className="font-playfair text-2xl font-bold text-farm-brown">
                      100%
                    </div>
                    <p className="text-farm-brown/70 text-sm">эко продукция</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Преимущества */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="font-playfair text-3xl font-bold text-farm-brown text-center mb-8">
              Почему выбирают нас
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={24} className="text-farm-green" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                  Экологично
                </h4>
                <p className="text-farm-brown/70 text-sm">
                  Без пестицидов и химических удобрений
                </p>
              </div>

              <div className="text-center">
                <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={24} className="text-farm-green" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                  Свежесть
                </h4>
                <p className="text-farm-brown/70 text-sm">
                  Продукты собираются в день доставки
                </p>
              </div>

              <div className="text-center">
                <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-farm-green" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                  С заботой
                </h4>
                <p className="text-farm-brown/70 text-sm">
                  Каждый продукт создан с любовью
                </p>
              </div>

              <div className="text-center">
                <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-farm-green" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                  Качество
                </h4>
                <p className="text-farm-brown/70 text-sm">
                  Строгий контроль на каждом этапе
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
