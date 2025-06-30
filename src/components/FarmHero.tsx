import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function FarmHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-farm-green via-farm-light-green to-farm-sage overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-8xl">🌾</div>
        <div className="absolute top-40 right-20 text-6xl">🐄</div>
        <div className="absolute bottom-40 left-20 text-7xl">🚜</div>
        <div className="absolute bottom-20 right-10 text-5xl">🌽</div>
        <div className="absolute top-1/2 left-1/3 text-4xl">🐔</div>
        <div className="absolute top-1/4 right-1/3 text-6xl">🍅</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Главный заголовок */}
          <div className="mb-8">
            <div className="text-6xl mb-6">🌱</div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Экоферма
              <span className="block text-farm-cream">«Зеленый уголок»</span>
            </h1>
            <p className="text-xl md:text-2xl text-farm-cream/90 max-w-2xl mx-auto leading-relaxed">
              Натуральные продукты прямо с фермы. Выращиваем с любовью к природе
              и заботой о вашем здоровье уже более 20 лет.
            </p>
          </div>

          {/* Преимущества */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                100% Экологично
              </h3>
              <p className="text-farm-cream/80 text-sm">Без химикатов и ГМО</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                Быстрая доставка
              </h3>
              <p className="text-farm-cream/80 text-sm">
                Свежие продукты за 24 часа
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                Высокое качество
              </h3>
              <p className="text-farm-cream/80 text-sm">
                Контроль на каждом этапе
              </p>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-farm-orange hover:bg-farm-orange/90 text-white font-semibold px-8 py-4 text-lg shadow-lg"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить продукты
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-farm-green font-semibold px-8 py-4 text-lg"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Наша ферма
            </Button>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                20+
              </div>
              <p className="text-farm-cream/80 text-sm">лет опыта</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <p className="text-farm-cream/80 text-sm">довольных семей</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                100+
              </div>
              <p className="text-farm-cream/80 text-sm">видов продукции</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <p className="text-farm-cream/80 text-sm">поддержка</p>
            </div>
          </div>
        </div>
      </div>

      {/* Волны внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
            fill="hsl(42, 50%, 96%)"
          />
        </svg>
      </div>
    </section>
  );
}
