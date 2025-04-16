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
                <div className="w-72 h-72 relative animate-logo-rotate">
                  <svg viewBox="0 0 300 300" className="w-full h-full">
                    <circle cx="150" cy="150" r="145" fill="black" stroke="white" strokeWidth="3" />
                    
                    <g className="origin-center">
                      {/* Розовые полосы */}
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#FF69B4" transform="rotate(0 150 150)" />
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#FF69B4" transform="rotate(180 150 150)" />
                      
                      {/* Желтые полосы */}
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#FFD700" transform="rotate(45 150 150)" />
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#FFD700" transform="rotate(225 150 150)" />
                      
                      {/* Синие полосы */}
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#1E90FF" transform="rotate(90 150 150)" />
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#1E90FF" transform="rotate(270 150 150)" />
                      
                      {/* Бирюзовые полосы */}
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#20B2AA" transform="rotate(135 150 150)" />
                      <path d="M150 0 L170 0 L170 300 L150 300 Z" fill="#20B2AA" transform="rotate(315 150 150)" />
                    </g>
                    
                    {/* Острые выступы */}
                    <g>
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#FF69B4" transform="translate(300, 0)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#FFD700" transform="translate(300, 0) rotate(45 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#1E90FF" transform="translate(300, 0) rotate(90 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#20B2AA" transform="translate(300, 0) rotate(135 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#FF69B4" transform="translate(300, 0) rotate(180 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#FFD700" transform="translate(300, 0) rotate(225 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#1E90FF" transform="translate(300, 0) rotate(270 0 150)" />
                      <path d="M0 150 L-30 135 L-15 150 L-30 165 Z" fill="#20B2AA" transform="translate(300, 0) rotate(315 0 150)" />
                    </g>
                    
                    {/* Центральный круг с котом */}
                    <circle cx="150" cy="150" r="105" fill="black" />
                    
                    {/* Силуэт кота белым цветом */}
                    <path d="M105 90 L150 150 L195 90 L180 165 L105 165 Z" fill="white" />
                    <circle cx="126" cy="120" r="9" fill="black" />
                    <circle cx="174" cy="120" r="9" fill="black" />
                  </g>
                </svg>
                
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
