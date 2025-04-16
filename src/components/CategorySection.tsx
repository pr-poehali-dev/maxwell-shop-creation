import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  viewAllLink: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  children,
  viewAllLink,
}) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="max-w-2xl mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <Button 
            variant="outline" 
            className="border-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground" 
            asChild
          >
            <Link to={viewAllLink}>Смотреть все</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
