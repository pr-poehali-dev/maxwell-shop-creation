import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-maxwell-accent transition-colors">
            Главная
          </Link>
          <Link to="/subscriptions" className="font-medium hover:text-maxwell-accent transition-colors">
            Подписки
          </Link>
          <Link to="/brawlstars" className="font-medium hover:text-maxwell-accent transition-colors">
            Brawl Stars
          </Link>
          <Link to="/about" className="font-medium hover:text-maxwell-accent transition-colors">
            О нас
          </Link>
          <Button variant="outline" className="btn-maxwell">
            Войти
          </Button>
        </nav>

        {/* Мобильная кнопка меню */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="py-2 font-medium hover:text-maxwell-accent transition-colors"
              onClick={toggleMenu}
            >
              Главная
            </Link>
            <Link
              to="/subscriptions"
              className="py-2 font-medium hover:text-maxwell-accent transition-colors"
              onClick={toggleMenu}
            >
              Подписки
            </Link>
            <Link
              to="/brawlstars"
              className="py-2 font-medium hover:text-maxwell-accent transition-colors"
              onClick={toggleMenu}
            >
              Brawl Stars
            </Link>
            <Link
              to="/about"
              className="py-2 font-medium hover:text-maxwell-accent transition-colors"
              onClick={toggleMenu}
            >
              О нас
            </Link>
            <Button className="btn-maxwell w-full">
              Войти
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
