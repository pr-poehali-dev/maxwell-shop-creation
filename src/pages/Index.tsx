import { Headphones, Youtube, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SubscriptionCard from "@/components/SubscriptionCard";
import ProductCard from "@/components/ProductCard";
import CategorySection from "@/components/CategorySection";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <CategorySection 
          title="Популярные подписки" 
          description="Выгодные предложения на подписки для ваших любимых стриминговых и игровых сервисов"
          viewAllLink="/subscriptions"
        >
          <SubscriptionCard
            icon={<Youtube size={48} />}
            title="YouTube Premium"
            description="Смотрите видео без рекламы и слушайте музыку в фоновом режиме"
            price="299 ₽"
            period="мес"
            features={[
              "Без рекламы",
              "Фоновое воспроизведение",
              "Загрузка видео",
            ]}
            popular={true}
          />
          <SubscriptionCard
            icon={<Headphones size={48} />}
            title="Spotify Premium"
            description="Миллионы треков без рекламы и ограничений"
            price="199 ₽"
            period="мес"
            features={[
              "Без рекламы",
              "Офлайн режим",
              "Высокое качество звука"
            ]}
          />
          <SubscriptionCard
            icon={<Smartphone size={48} />}
            title="Google Play Pass"
            description="Доступ к премиум-играм и приложениям без рекламы"
            price="229 ₽"
            period="мес"
            features={[
              "Сотни игр и приложений",
              "Без встроенных покупок",
              "Семейный доступ до 5 человек"
            ]}
          />
        </CategorySection>
        
        <CategorySection 
          title="Brawl Stars" 
          description="Кристаллы и пропуски для вашей любимой игры по выгодным ценам"
          viewAllLink="/brawlstars"
        >
          <ProductCard
            image="/placeholder.svg"
            title="80 Кристаллов"
            description="Небольшой набор кристаллов для покупки предметов в игре"
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
            title="Brawl Pass"
            description="Сезонный пропуск с эксклюзивными скинами и наградами"
            price="549 ₽"
          />
        </CategorySection>
        
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
