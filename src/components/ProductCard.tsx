import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  discount?: string;
  popular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  discount,
  popular = false,
}) => {
  return (
    <Card 
      className={`card-maxwell h-full flex flex-col ${
        popular ? 'border-2 border-primary relative shadow-lg' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          Популярное
        </div>
      )}
      {discount && (
        <div className="absolute -top-3 left-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
          -{discount}%
        </div>
      )}
      <CardHeader className="pb-0">
        <div className="mb-4 flex justify-center">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="h-40 w-auto object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <div className="w-full flex justify-between items-center">
          <div>
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  {Math.round(parseInt(price.replace(/[^\d]/g, '')) * (100 / (100 - parseInt(discount)))) + ' ₽'}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">{price}</span>
            )}
          </div>
        </div>
        <Button 
          className={`w-full btn-maxwell ${popular ? 'animate-button-pulse' : ''}`}
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
