import { useState, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Star, Filter, Search, Heart, ShoppingCart, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import ledStripsImage from "@/assets/led-strips-product.jpg";
import smartBulbImage from "@/assets/smart-led-bulb.jpg";
import gamingSetupImage from "@/assets/gaming-led-setup.jpg";

const allProducts = [
  {
    id: 1,
    name: "5050 RGB LED Strip Kit - 16.4ft (60LEDs/m)",
    shortName: "RGB LED Strip 5050",
    price: 24.99,
    originalPrice: 49.99,
    image: ledStripsImage,
    category: "Strip Lights",
    rating: 4.8,
    reviewCount: 2847,
    badge: "Best Seller",
    features: ["16M Colors", "App Control", "IP65 Waterproof", "60LEDs/m"],
    isNew: false,
    isPopular: true
  },
  {
    id: 2,
    name: "9W Smart WiFi RGB Bulbs (4-Pack) E27",
    shortName: "Smart WiFi Bulbs 4-Pack",
    price: 32.99,
    originalPrice: 59.99,
    image: smartBulbImage,
    category: "Smart Bulbs",
    rating: 4.7,
    reviewCount: 1923,
    badge: "Popular",
    features: ["Voice Control", "WiFi Direct", "Energy Efficient", "16M Colors"],
    isNew: false,
    isPopular: true
  },
  {
    id: 3,
    name: "WS2812B Addressable LED Strip - Gaming Kit",
    shortName: "Gaming Pixel Strip",
    price: 29.99,
    originalPrice: 49.99,
    image: gamingSetupImage,
    category: "Gaming",
    rating: 4.9,
    reviewCount: 1456,
    badge: "Gamer's Choice",
    features: ["Individual Control", "Game Sync", "Music Reactive", "USB-C Power"],
    isNew: true,
    isPopular: false
  },
  {
    id: 4,
    name: "COB LED Strip Professional - 24V (32.8ft)",
    shortName: "COB LED Professional",
    price: 45.99,
    originalPrice: 79.99,
    image: ledStripsImage,
    category: "Strip Lights",
    rating: 4.6,
    reviewCount: 892,
    badge: "Commercial Grade",
    features: ["Dotless Design", "320LEDs/m", "CRI90+", "24V System"],
    isNew: false,
    isPopular: false
  },
  {
    id: 5,
    name: "Smart Outdoor String Lights - IP65 (50ft)",
    shortName: "Outdoor Smart Strings",
    price: 38.99,
    originalPrice: 69.99,
    image: smartBulbImage,
    category: "Outdoor",
    rating: 4.5,
    reviewCount: 634,
    badge: "Weather Resistant",
    features: ["IP65 Rated", "50ft Coverage", "Timer Function", "App Control"],
    isNew: true,
    isPopular: false
  },
  {
    id: 6,
    name: "Under Cabinet Motion Sensor LED Kit",
    shortName: "Motion Cabinet Kit",
    price: 18.99,
    originalPrice: 34.99,
    image: gamingSetupImage,
    category: "Kitchen",
    rating: 4.4,
    reviewCount: 567,
    badge: "Kitchen Essential", 
    features: ["PIR Motion", "Battery/USB", "3000K Warm", "Easy Install"],
    isNew: false,
    isPopular: false
  }
];

const categories = ["All", "Strip Lights", "Smart Bulbs", "Gaming", "Panel Lights", "Outdoor", "Kitchen"];
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Rating", "Newest"];

const ProductCatalog = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Featured");
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);
  const [loadingItems, setLoadingItems] = useState<number[]>([]);
  const [imageLoadErrors, setImageLoadErrors] = useState<number[]>([]);

  const handleAddToCart = useCallback(async (product: any) => {
    setLoadingItems(prev => [...prev, product.id]);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast({
        title: "Added to Cart!",
        description: `${product.shortName} ($${product.price}) has been added to your cart.`,
      });
      
      setTimeout(() => {
        document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoadingItems(prev => prev.filter(id => id !== product.id));
    }
  }, [toast]);

  const handleAddToWishlist = useCallback((productId: number, productName: string) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(prev => prev.filter(id => id !== productId));
      toast({
        title: "Removed from Wishlist",
        description: `${productName} has been removed from your wishlist.`,
      });
    } else {
      setWishlistItems(prev => [...prev, productId]);
      toast({
        title: "Added to Wishlist!",
        description: `${productName} has been saved to your wishlist.`,
      });
    }
  }, [wishlistItems, toast]);

  const filteredProducts = useMemo(() => {
    return allProducts
      .filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = searchTerm === "" || 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "Price: Low to High":
            return a.price - b.price;
          case "Price: High to Low":
            return b.price - a.price;
          case "Rating":
            return b.rating - a.rating;
          case "Newest":
            return Number(b.isNew) - Number(a.isNew);
          default:
            return Number(b.isPopular) - Number(a.isPopular);
        }
      });
  }, [selectedCategory, searchTerm, sortBy]);

  return (
    <section id="catalog" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Product <span className="bg-gradient-primary bg-clip-text text-transparent">Catalog</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore our full range of premium LED lighting solutions. Find the perfect lights for every space and application.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
            <Input
              placeholder="Search products, features..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border/50 focus:border-primary"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-gradient-primary border-0 shadow-glow" 
                    : "border-border/50 hover:border-primary/50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-foreground/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-card border border-border/50 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:scale-105 transition-all duration-300 shadow-card-custom hover:shadow-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    onError={() => setImageLoadErrors(prev => [...prev, product.id])}
                    style={{ 
                      display: imageLoadErrors.includes(product.id) ? 'none' : 'block' 
                    }}
                  />
                  {imageLoadErrors.includes(product.id) && (
                    <div className="w-full h-48 bg-card/30 flex items-center justify-center">
                      <div className="text-center text-foreground/40">
                        <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-2"></div>
                        <p className="text-sm">Image unavailable</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-primary shadow-glow">
                      {product.badge}
                    </Badge>
                  </div>
                  {product.isNew && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-led-green/20 text-led-green border-led-green">
                        New
                      </Badge>
                    </div>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`absolute bottom-4 right-4 w-8 h-8 p-0 bg-background/80 backdrop-blur-sm hover:bg-background/90 ${
                      wishlistItems.includes(product.id) ? 'text-red-500' : 'text-foreground/60'
                    }`}
                    onClick={() => handleAddToWishlist(product.id, product.shortName)}
                  >
                    <Heart className={`w-4 h-4 ${wishlistItems.includes(product.id) ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-foreground/60">({product.reviewCount})</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-foreground/60 line-through">${product.originalPrice}</span>
                    <Badge variant="outline" className="text-xs text-led-green border-led-green">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-led-green rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-primary border-0 shadow-glow"
                      onClick={() => handleAddToCart(product)}
                      disabled={loadingItems.includes(product.id)}
                    >
                      {loadingItems.includes(product.id) ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <ShoppingCart className="w-4 h-4 mr-2" />
                      )}
                      {loadingItems.includes(product.id) ? 'Adding...' : 'Add to Cart'}
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => document.getElementById('product-details')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="text-center">
          <p className="text-foreground/60 mb-6">
            Showing {filteredProducts.length} of {allProducts.length} products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          <Button 
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Need Help Choosing? Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;