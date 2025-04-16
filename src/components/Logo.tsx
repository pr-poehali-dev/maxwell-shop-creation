import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Голова кота */}
          <circle cx="50" cy="50" r="40" fill="currentColor" />
          
          {/* Уши */}
          <path
            d="M25 25L35 40L45 25Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M75 25L65 40L55 25Z"
            fill="currentColor" 
            stroke="currentColor"
            strokeWidth="2"
          />
          
          {/* Глаза */}
          <circle className="animate-cat-blink" cx="35" cy="45" r="5" fill="white" />
          <circle className="animate-cat-blink" cx="65" cy="45" r="5" fill="white" />
          
          {/* Нос */}
          <path
            d="M50 55L45 60H55L50 55Z"
            fill="white"
          />
          
          {/* Усы */}
          <line x1="45" y1="60" x2="25" y2="55" stroke="white" strokeWidth="1" />
          <line x1="45" y1="62" x2="25" y2="62" stroke="white" strokeWidth="1" />
          <line x1="45" y1="64" x2="25" y2="69" stroke="white" strokeWidth="1" />
          
          <line x1="55" y1="60" x2="75" y2="55" stroke="white" strokeWidth="1" />
          <line x1="55" y1="62" x2="75" y2="62" stroke="white" strokeWidth="1" />
          <line x1="55" y1="64" x2="75" y2="69" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">Maxwell Shop</span>
    </div>
  );
};

export default Logo;
