import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Лучший выбор подписок и игровых предметов
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Maxwell Shop — ваш надежный магазин для покупки подписок и игровых предметов 
              по выгодным ценам. YouTube, Spotify, Google Play Pass и Brawl Stars — всё в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-maxwell animate-button-pulse" 
                asChild
              >
                <Link to="/subscriptions">Подписки</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground" 
                asChild
              >
                <Link to="/brawlstars">Brawl Stars</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden p-8 flex items-center justify-center">
                <div className="relative w-full max-w-[300px] h-auto">
                  <svg
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    {/* Большой кот-логотип для главной страницы */}
                    <circle cx="150" cy="150" r="120" fill="currentColor" />
                    
                    {/* Уши */}
                    <path
                      d="M75 75L105 120L135 75Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    <path
                      d="M225 75L195 120L165 75Z"
                      fill="currentColor" 
                      stroke="currentColor"
                      strokeWidth="6"
                    />
                    
                    {/* Глаза */}
                    <circle className="animate-cat-blink" cx="105" cy="135" r="15" fill="white" />
                    <circle className="animate-cat-blink" cx="195" cy="135" r="15" fill="white" />
                    
                    {/* Нос */}
                    <path
                      d="M150 165L135 180H165L150 165Z"
                      fill="white"
                    />
                    
                    {/* Усы */}
                    <line x1="135" y1="180" x2="75" y2="165" stroke="white" strokeWidth="3" />
                    <line x1="135" y1="186" x2="75" y2="186" stroke="white" strokeWidth="3" />
                    <line x1="135" y1="192" x2="75" y2="207" stroke="white" strokeWidth="3" />
                    
                    <line x1="165" y1="180" x2="225" y2="165" stroke="white" strokeWidth="3" />
                    <line x1="165" y1="186" x2="225" y2="186" stroke="white" strokeWidth="3" />
                    <line x1="165" y1="192" x2="225" y2="207" stroke="white" strokeWidth="3" />
                    
                    {/* Подпись */}
                    <text 
                      x="150" 
                      y="250" 
                      textAnchor="middle" 
                      fill="white" 
                      fontSize="24" 
                      fontWeight="bold"
                    >
                      MAXWELL SHOP
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
