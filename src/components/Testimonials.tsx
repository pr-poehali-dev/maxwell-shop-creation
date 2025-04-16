import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    content: "Maxwell Shop — лучший магазин, где я покупаю подписки. Быстрая доставка и отличная поддержка!",
    author: "Александр К.",
    role: "Постоянный клиент"
  },
  {
    content: "Покупал кристаллы для Brawl Stars, всё пришло мгновенно. Очень доволен сервисом!",
    author: "Максим П.",
    role: "Геймер"
  },
  {
    content: "Подписка на YouTube Premium по выгодной цене и без проблем. Буду заказывать ещё!",
    author: "Елена В.",
    role: "Любитель музыки"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground">
            Узнайте, что говорят о нас наши довольные клиенты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">❝</div>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="text-lg font-medium">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
