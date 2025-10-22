import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 4,
    name: "Running Shoes Elite",
    price: 129,
    originalPrice: 179,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Minimal Desk Lamp",
    price: 59,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "Home",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Coffee Maker Deluxe",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
    category: "Kitchen",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Yoga Mat Premium",
    price: 45,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
    category: "Sports",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 99,
    originalPrice: 149,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    category: "Electronics",
    rating: 4.6,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of premium products, handpicked for quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
