import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
}

const ProductCard = ({ name, price, originalPrice, image, category, rating, isNew }: ProductCardProps) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-accent">New</Badge>
        )}
        {discount > 0 && (
          <Badge className="absolute top-4 right-4 bg-destructive">{discount}% OFF</Badge>
        )}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">(120)</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          <Button size="sm" className="gap-1">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
