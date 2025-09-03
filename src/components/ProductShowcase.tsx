import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ledStripsImage from "@/assets/led-strips-product.jpg";
import smartBulbImage from "@/assets/smart-led-bulb.jpg";
import gamingSetupImage from "@/assets/gaming-led-setup.jpg";

const products = [
  {
    id: 1,
    name: "RGB LED Strip Lights",
    price: "$29.99",
    originalPrice: "$49.99",
    image: ledStripsImage,
    features: ["16 Million Colors", "App Control", "Music Sync", "5M Length"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart LED Bulbs (4-Pack)",
    price: "$39.99",
    originalPrice: "$69.99",
    image: smartBulbImage,
    features: ["Voice Control", "Dimming", "Energy Efficient", "Easy Setup"],
    badge: "Popular"
  },
  {
    id: 3,
    name: "Gaming LED Backlight",
    price: "$24.99",
    originalPrice: "$39.99",
    image: gamingSetupImage,
    features: ["USB Powered", "Multiple Effects", "Easy Install", "Gaming Mode"],
    badge: "New"
  }
];

const ProductShowcase = () => {
  const { toast } = useToast();

  const handleAddToCart = (productName: string, price: string) => {
    toast({
      title: "Added to Cart!",
      description: `${productName} (${price}) has been added to your cart.`,
    });
    // Scroll to contact section for checkout
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover our premium LED lighting solutions designed to transform any space
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:scale-105 transition-all duration-300 shadow-card-custom hover:shadow-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary px-3 py-1 rounded-full text-sm font-medium shadow-glow">
                      {product.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-foreground/60 line-through">{product.originalPrice}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-2 h-2 bg-led-green rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-primary border-0 shadow-glow"
                    onClick={() => handleAddToCart(product.name, product.price)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;