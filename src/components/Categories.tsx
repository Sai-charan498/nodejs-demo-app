import { Laptop, Shirt, Home, Dumbbell, Coffee, Watch } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Electronics", icon: Laptop, count: "2.5K+ items" },
  { name: "Fashion", icon: Shirt, count: "3.8K+ items" },
  { name: "Home & Living", icon: Home, count: "1.2K+ items" },
  { name: "Sports", icon: Dumbbell, count: "890+ items" },
  { name: "Kitchen", icon: Coffee, count: "1.5K+ items" },
  { name: "Accessories", icon: Watch, count: "2.1K+ items" },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what you're looking for</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-6 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
