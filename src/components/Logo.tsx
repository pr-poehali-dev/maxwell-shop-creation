import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <div className="w-full h-full relative overflow-hidden rounded-full">
          <img 
            src="https://i.playerok.com/UfzJThiCWhW7bxwOeSpvuemWtdqPBB0k1sSttoNxgvY/wm:0.8:soea:5:2:0.2/rs:fill:0:1000:0/g:no/quality:99/czM6Ly9wbGF5ZXJvay8vaW1hZ2VzLzFmMDAxMjJhLWYwZTItNjEyMC03OTk1LTY4YjY0NDE0OGM1My5qcGc.jpg" 
            alt="Maxwell Shop Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <span className="text-xl font-bold tracking-tight">Maxwell Shop</span>
    </div>
  );
};

export default Logo;
