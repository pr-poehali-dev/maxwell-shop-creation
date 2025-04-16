import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SubscriptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  icon,
  title,
  description,
  price,
  period,
  features,
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
      <CardHeader>
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full btn-maxwell ${popular ? 'animate-button-pulse' : ''}`}
        >
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubscriptionCard;
