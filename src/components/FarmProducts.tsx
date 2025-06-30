import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const productCategories = [
  {
    id: "vegetables",
    name: "Овощи",
    emoji: "🥕",
    description: "Свежие сезонные овощи с наших грядок",
    products: [
      { name: "Морковь", price: "80₽/кг", fresh: true },
      { name: "Картофель", price: "60₽/кг", popular: true },
      { name: "Помидоры", price: "150₽/кг", fresh: true },
      { name: "Огурцы", price: "120₽/кг", fresh: true },
      { name: "Капуста", price: "50₽/кг", popular: true },
      { name: "Свекла", price: "70₽/кг", fresh: true },
    ],
  },
  {
    id: "fruits",
    name: "Фрукты и ягоды",
    emoji: "🍎",
    description: "Сочные фрукты и ягоды из наших садов",
    products: [
      { name: "Яблоки", price: "100₽/кг", popular: true },
      { name: "Груши", price: "120₽/кг", fresh: true },
      { name: "Клубника", price: "300₽/кг", fresh: true },
      { name: "Малина", price: "400₽/кг", fresh: true },
      { name: "Смородина", price: "250₽/кг", popular: true },
      { name: "Вишня", price: "280₽/кг", fresh: true },
    ],
  },
  {
    id: "dairy",
    name: "Молочные продукты",
    emoji: "🥛",
    description: "Натуральные молочные продукты от наших коров",
    products: [
      { name: "Молоко", price: "90₽/л", popular: true },
      { name: "Творог", price: "200₽/400г", fresh: true },
      { name: "Сметана", price: "150₽/300г", popular: true },
      { name: "Сыр домашний", price: "400₽/300г", fresh: true },
      { name: "Масло", price: "300₽/200г", popular: true },
      { name: "Кефир", price: "80₽/л", fresh: true },
    ],
  },
  {
    id: "meat",
    name: "Мясо и птица",
    emoji: "🥩",
    description: "Свежее мясо от животных на свободном выпасе",
    products: [
      { name: "Говядина", price: "600₽/кг", popular: true },
      { name: "Свинина", price: "500₽/кг", fresh: true },
      { name: "Курица", price: "350₽/кг", popular: true },
      { name: "Индейка", price: "450₽/кг", fresh: true },
      { name: "Утка", price: "400₽/кг", fresh: true },
      { name: "Яйца", price: "120₽/десяток", popular: true },
    ],
  },
];

export default function FarmProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-farm-wheat/30 to-farm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-farm-brown mb-6">
              Наша продукция
            </h2>
            <div className="w-24 h-1 bg-farm-green mx-auto mb-6"></div>
            <p className="text-xl text-farm-brown/80 max-w-3xl mx-auto leading-relaxed">
              Свежие натуральные продукты прямо с фермы. Выращиваем и производим
              с соблюдением всех экологических стандартов.
            </p>
          </div>

          {/* Категории продуктов */}
          <div className="space-y-12">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              >
                {/* Заголовок категории */}
                <div className="flex items-center mb-8">
                  <div className="text-5xl mr-4">{category.emoji}</div>
                  <div>
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold text-farm-brown">
                      {category.name}
                    </h3>
                    <p className="text-farm-brown/70 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Продукты в категории */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.products.map((product, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-md transition-all duration-300 border-farm-sage/20"
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-farm-brown">
                            {product.name}
                          </h4>
                          <div className="flex gap-1">
                            {product.popular && (
                              <Badge className="bg-farm-orange text-white text-xs">
                                Популярно
                              </Badge>
                            )}
                            {product.fresh && (
                              <Badge
                                variant="secondary"
                                className="bg-farm-green/10 text-farm-green text-xs"
                              >
                                Свежее
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-playfair text-lg font-semibold text-farm-brown">
                            {product.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-farm-green hover:bg-farm-green/90 text-white"
                          >
                            <Icon name="Plus" size={14} className="mr-1" />В
                            корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Призыв к действию */}
          <div className="mt-16 bg-gradient-to-r from-farm-green to-farm-light-green rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <div className="text-6xl mb-6">🛒</div>
            <h3 className="font-playfair text-3xl font-bold text-white mb-4">
              Готовы сделать заказ?
            </h3>
            <p className="text-farm-cream/90 text-lg mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для оформления заказа. Мы доставим свежие
              продукты прямо к вашему дому в течение 24 часов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-farm-orange hover:bg-farm-orange/90 text-white font-semibold px-8"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-farm-green font-semibold px-8"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-farm-green" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                Быстрая доставка
              </h4>
              <p className="text-farm-brown/70 text-sm">
                Доставляем по всему городу в течение 24 часов
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-farm-green" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                Гарантия качества
              </h4>
              <p className="text-farm-brown/70 text-sm">
                Если продукт не понравился — вернем деньги
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
              <div className="bg-farm-green/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Percent" size={24} className="text-farm-green" />
              </div>
              <h4 className="font-playfair text-xl font-bold text-farm-brown mb-2">
                Скидки постоянным клиентам
              </h4>
              <p className="text-farm-brown/70 text-sm">
                Накопительная система скидок до 15%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
