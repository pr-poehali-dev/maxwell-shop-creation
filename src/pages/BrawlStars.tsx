import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const BrawlStars = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Brawl Stars</h1>
              <p className="text-lg text-muted-foreground">
                Кристаллы, пропуски и другие товары для Brawl Stars. 
                Моментальная доставка после оплаты.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Кристаллы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <ProductCard
                image="/placeholder.svg"
                title="30 Кристаллов"
                description="Набор кристаллов для небольших покупок"
                price="99 ₽"
              />
              <ProductCard
                image="/placeholder.svg"
                title="80 Кристаллов"
                description="Набор кристаллов для покупки предметов в игре"
                price="199 ₽"
              />
              <ProductCard
                image="/placeholder.svg"
                title="170 Кристаллов"
                description="Средний набор кристаллов по выгодной цене"
                price="399 ₽"
                discount="10"
                popular={true}
              />
              <ProductCard
                image="/placeholder.svg"
                title="360 Кристаллов"
                description="Большой набор кристаллов для серьезных покупок"
                price="799 ₽"
                discount="15"
              />
              <ProductCard
                image="/placeholder.svg"
                title="950 Кристаллов"
                description="Огромный набор кристаллов с максимальной выгодой"
                price="1 999 ₽"
                discount="20"
              />
              <ProductCard
                image="/placeholder.svg"
                title="2000 Кристаллов"
                description="Максимальный набор кристаллов для настоящих фанатов"
                price="3 999 ₽"
                discount="25"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-8">Пропуски</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductCard
                image="/placeholder.svg"
                title="Brawl Pass"
                description="Сезонный пропуск с эксклюзивными скинами и наградами"
                price="549 ₽"
                popular={true}
              />
              <ProductCard
                image="/placeholder.svg"
                title="Brawl Pass + 10 уровней"
                description="Пропуск с возможностью быстрого продвижения"
                price="849 ₽"
              />
              <ProductCard
                image="/placeholder.svg"
                title="VIP Brawl Pass Bundle"
                description="Пропуск с максимальными бонусами"
                price="1 299 ₽"
                discount="10"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrawlStars;
