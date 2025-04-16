import { Headphones, Youtube, Smartphone, Music, Film, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubscriptionCard from "@/components/SubscriptionCard";

const Subscriptions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Подписки на сервисы</h1>
              <p className="text-lg text-muted-foreground">
                Выбирайте из широкого ассортимента подписок на популярные сервисы 
                по выгодным ценам. Мгновенная доставка и гарантия качества.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Музыка и видео</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  "YouTube Music включен"
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
                  "Высокое качество звука",
                  "Неограниченные скипы"
                ]}
              />
              <SubscriptionCard
                icon={<Music size={48} />}
                title="Apple Music"
                description="Доступ к огромной музыкальной библиотеке"
                price="249 ₽"
                period="мес"
                features={[
                  "90+ миллионов треков",
                  "Пространственное аудио",
                  "Синхронизация с устройствами",
                  "Тексты песен в реальном времени"
                ]}
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-8">Игры и приложения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <SubscriptionCard
                icon={<Smartphone size={48} />}
                title="Google Play Pass"
                description="Доступ к премиум-играм и приложениям без рекламы"
                price="229 ₽"
                period="мес"
                features={[
                  "Сотни игр и приложений",
                  "Без встроенных покупок",
                  "Семейный доступ до 5 человек",
                  "Регулярные обновления каталога"
                ]}
                popular={true}
              />
              <SubscriptionCard
                icon={<Film size={48} />}
                title="Netflix"
                description="Тысячи фильмов и сериалов в одной подписке"
                price="599 ₽"
                period="мес"
                features={[
                  "Огромная библиотека контента",
                  "Оригинальные сериалы и фильмы",
                  "Одновременный просмотр на 2-х устройствах",
                  "HD качество"
                ]}
              />
              <SubscriptionCard
                icon={<BookOpen size={48} />}
                title="Книжный Club"
                description="Тысячи электронных книг и аудиокниг"
                price="349 ₽"
                period="мес"
                features={[
                  "Неограниченный доступ к библиотеке",
                  "Новинки каждую неделю",
                  "Синхронизация между устройствами",
                  "Офлайн доступ"
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;
