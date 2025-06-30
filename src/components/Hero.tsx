import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-farm-cream via-farm-wheat to-farm-wood overflow-hidden">
      {/* Фоновые декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">🌾</div>
        <div className="absolute top-40 right-20 text-5xl">🐐</div>
        <div className="absolute bottom-40 left-20 text-4xl">🧀</div>
        <div className="absolute bottom-20 right-40 text-5xl">🥛</div>
        <div className="absolute top-60 left-1/3 text-3xl">🌿</div>
        <div className="absolute top-1/3 right-1/3 text-4xl">🏚️</div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Заголовок */}
          <h1 className="font-merriweather text-5xl md:text-7xl font-bold text-farm-brown mb-6 leading-tight">
            Деревенская ферма
            <span className="block text-farm-earth text-4xl md:text-5xl mt-2">
              "Солнечная долина"
            </span>
          </h1>

          {/* Подзаголовок */}
          <p className="font-merriweather text-xl md:text-2xl text-farm-brown/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Натуральные молочные продукты от наших козочек. Свежее козье молоко,
            домашние сыры и творог с любовью к природе.
          </p>

          {/* Кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-farm-green hover:bg-farm-green/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
            >
              <Icon name="ShoppingBasket" size={20} className="mr-2" />
              Наша продукция
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-farm-brown text-farm-brown hover:bg-farm-brown hover:text-white px-8 py-3 text-lg font-semibold rounded-full"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Как нас найти
            </Button>
          </div>

          {/* Особенности */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-farm-wood/20">
              <div className="text-4xl mb-4">🐐</div>
              <h3 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                Счастливые козочки
              </h3>
              <p className="text-farm-brown/70">
                Наши козы пасутся на экологически чистых лугах и получают только
                натуральные корма
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-farm-wood/20">
              <div className="text-4xl mb-4">🥛</div>
              <h3 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                Свежее молоко
              </h3>
              <p className="text-farm-brown/70">
                Ежедневно свежее козье молоко, богатое витаминами и полезными
                микроэлементами
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-farm-wood/20">
              <div className="text-4xl mb-4">🧀</div>
              <h3 className="font-merriweather text-xl font-bold text-farm-brown mb-2">
                Домашние сыры
              </h3>
              <p className="text-farm-brown/70">
                Традиционные рецепты сыроварения, передающиеся из поколения в
                поколение
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративная волна внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-farm-green/20">
          <path d="M0,120 C150,100 350,120 600,100 C850,80 1050,100 1200,90 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
