import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="w-full h-full relative overflow-hidden">
          {/* Цветной фон с анимацией вращения */}
          <div className="absolute inset-0 rounded-full animate-logo-rotate">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="48" fill="black" stroke="white" strokeWidth="2" />
              <g className="origin-center">
                {/* Розовые полосы */}
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#FF69B4" transform="rotate(0 50 50)" />
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#FF69B4" transform="rotate(180 50 50)" />
                
                {/* Желтые полосы */}
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#FFD700" transform="rotate(45 50 50)" />
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#FFD700" transform="rotate(225 50 50)" />
                
                {/* Синие полосы */}
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#1E90FF" transform="rotate(90 50 50)" />
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#1E90FF" transform="rotate(270 50 50)" />
                
                {/* Бирюзовые полосы */}
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#20B2AA" transform="rotate(135 50 50)" />
                <path d="M50 0 L60 0 L60 100 L50 100 Z" fill="#20B2AA" transform="rotate(315 50 50)" />
              </g>
              
              {/* Острые выступы */}
              <g>
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#FF69B4" transform="translate(100, 0)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#FFD700" transform="translate(100, 0) rotate(45 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#1E90FF" transform="translate(100, 0) rotate(90 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#20B2AA" transform="translate(100, 0) rotate(135 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#FF69B4" transform="translate(100, 0) rotate(180 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#FFD700" transform="translate(100, 0) rotate(225 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#1E90FF" transform="translate(100, 0) rotate(270 0 50)" />
                <path d="M0 50 L-10 45 L-5 50 L-10 55 Z" fill="#20B2AA" transform="translate(100, 0) rotate(315 0 50)" />
              </g>
              
              {/* Центральный круг с котом */}
              <circle cx="50" cy="50" r="35" fill="black" />
              
              {/* Силуэт кота белым цветом */}
              <path d="M35 30 L50 50 L65 30 L60 55 L35 55 Z" fill="white" />
              <circle cx="42" cy="40" r="3" fill="black" />
              <circle cx="58" cy="40" r="3" fill="black" />
            </g>
          </svg>
        </div>
      </div>
      <span className="text-xl font-bold tracking-tight">Maxwell Shop</span>
    </div>
  );
};

export default Logo;
