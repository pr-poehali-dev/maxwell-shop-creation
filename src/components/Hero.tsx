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
              <div className="aspect-square flex items-center justify-center">
                <div className="w-72 h-72 relative">
                  <img 
                    src="https://i.playerok.com/UfzJThiCWhW7bxwOeSpvuemWtdqPBB0k1sSttoNxgvY/wm:0.8:soea:5:2:0.2/rs:fill:0:1000:0/g:no/quality:99/czM6Ly9wbGF5ZXJvay8vaW1hZ2VzLzFmMDAxMjJhLWYwZTItNjEyMC03OTk1LTY4YjY0NDE0OGM1My5qcGc.jpg" 
                    alt="Maxwell Shop Logo" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="absolute bottom-0 w-full text-center text-white text-2xl font-bold">
                  MAXWELL SHOP
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
