import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Свежее козье молоко",
    description:
      "Ежедневно свежее, непастеризованное козье молоко от наших счастливых коз. Богато витаминами A, B, C и кальцием.",
    price: "150₽",
    unit: "за литр",
    emoji: "🥛",
    benefits: ["Легко усваивается", "Гипоаллергенное", "Богато белком"],
    popular: true,
  },
  {
    id: 2,
    name: "Домашний козий сыр",
    description:
      "Мягкий сыр из козьего молока, приготовленный по традиционным рецептам. Идеален для завтраков и закусок.",
    price: "380₽",
    unit: "за 200г",
    emoji: "🧀",
    benefits: ["Ручная работа", "Без консервантов", "Нежный вкус"],
    popular: false,
  },
  {
    id: 3,
    name: "Козий творог",
    description:
      "Нежный домашний творог из цельного козьего молока. Отличный источник белка и кальция для всей семьи.",
    price: "280₽",
    unit: "за 300г",
    emoji: "🥄",
    benefits: ["Высокое содержание белка", "Натуральный", "Для детей"],
    popular: false,
  },
  {
    id: 4,
    name: "Выдержанный козий сыр",
    description:
      "Твердый сыр 3-месячной выдержки с насыщенным вкусом. Прекрасно подходит для сырных тарелок и вина.",
    price: "650₽",
    unit: "за 250г",
    emoji: "🧀",
    benefits: ["Выдержка 3 месяца", "Пикантный вкус", "Для гурманов"],
    popular: false,
  },
  {
    id: 5,
    name: "Сливочное масло",
    description:
      "Домашнее сливочное масло из козьего молока. Имеет нежную текстуру и неповторимый вкус.",
    price: "420₽",
    unit: "за 200г",
    emoji: "🧈",
    benefits: ["100% козье молоко", "Домашнее", "Нежная текстура"],
    popular: false,
  },
  {
    id: 6,
    name: "Козья простокваша",
    description:
      "Традиционная простокваша из козьего молока с живыми культурами. Полезна для пищеварения.",
    price: "180₽",
    unit: "за 500мл",
    emoji: "🥛",
    benefits: ["Живые культуры", "Полезно для ЖКТ", "Традиционный продукт"],
    popular: true,
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-gradient-to-br from-farm-wheat/30 to-farm-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="font-merriweather text-4xl md:text-5xl font-bold text-farm-brown mb-6">
              Наша продукция
            </h2>
            <div className="w-24 h-1 bg-farm-green mx-auto mb-6"></div>
            <p className="font-merriweather text-xl text-farm-brown/80 max-w-3xl mx-auto leading-relaxed">
              Свежие молочные продукты из козьего молока, приготовленные с
              любовью по традиционным семейным рецептам.
            </p>
          </div>

          {/* Сетка продуктов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white/90 backdrop-blur-sm border-farm-wood/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  {product.popular && (
                    <Badge className="absolute top-4 right-4 bg-farm-green text-white">
                      Популярно
                    </Badge>
                  )}
                  <div className="text-6xl mb-4">{product.emoji}</div>
                  <CardTitle className="font-merriweather text-xl text-farm-brown">
                    {product.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-farm-brown/80 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Преимущества */}
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.map((benefit, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs bg-farm-green/10 text-farm-brown border-farm-green/20"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>

                  {/* Цена */}
                  <div className="bg-farm-wheat/50 rounded-lg p-4 text-center">
                    <div className="font-merriweather text-2xl font-bold text-farm-brown">
                      {product.price}
                    </div>
                    <div className="text-farm-brown/70 text-sm">
                      {product.unit}
                    </div>
                  </div>

                  {/* Кнопка заказа */}
                  <Button
                    className="w-full bg-farm-green hover:bg-farm-green/90 text-white font-semibold"
                    size="lg"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-farm-wood/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-merriweather text-3xl font-bold text-farm-brown mb-6">
                  Почему козье молоко?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-farm-green mt-1 flex-shrink-0"
                    />
                    <p className="text-farm-brown/80">
                      <strong>Легче усваивается</strong> — меньше лактозы, чем в
                      коровьем молоке
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-farm-green mt-1 flex-shrink-0"
                    />
                    <p className="text-farm-brown/80">
                      <strong>Гипоаллергенное</strong> — подходит людям с
                      аллергией на коровье молоко
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-farm-green mt-1 flex-shrink-0"
                    />
                    <p className="text-farm-brown/80">
                      <strong>Больше витаминов</strong> — высокое содержание
                      витамина A и кальция
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={20}
                      className="text-farm-green mt-1 flex-shrink-0"
                    />
                    <p className="text-farm-brown/80">
                      <strong>Натуральный вкус</strong> — без химических добавок
                      и консервантов
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-farm-green/10 to-farm-wheat/30 rounded-3xl p-8">
                  <div className="text-8xl mb-4">🥛</div>
                  <h4 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                    Свежесть каждый день
                  </h4>
                  <p className="text-farm-brown/70">
                    Доставляем продукцию в день производства
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
