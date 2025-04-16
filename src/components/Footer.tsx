import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Maxwell Shop - лучший магазин подписок и игровых предметов.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Подписки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/subscriptions/youtube" className="text-sm hover:text-maxwell-accent transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link to="/subscriptions/spotify" className="text-sm hover:text-maxwell-accent transition-colors">
                  Spotify
                </Link>
              </li>
              <li>
                <Link to="/subscriptions/google-play" className="text-sm hover:text-maxwell-accent transition-colors">
                  Google Play Pass
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Brawl Stars</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brawlstars/crystals" className="text-sm hover:text-maxwell-accent transition-colors">
                  Кристаллы
                </Link>
              </li>
              <li>
                <Link to="/brawlstars/passes" className="text-sm hover:text-maxwell-accent transition-colors">
                  Пропуски
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-maxwell-accent transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-sm hover:text-maxwell-accent transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-maxwell-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Maxwell Shop. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-maxwell-accent transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-maxwell-accent transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
