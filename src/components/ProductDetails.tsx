import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Star, Truck, Shield, RotateCcw, Heart } from "lucide-react";
import ledStripsImage from "@/assets/led-strips-product.jpg";
import smartBulbImage from "@/assets/smart-led-bulb.jpg";
import gamingSetupImage from "@/assets/gaming-led-setup.jpg";

const productDetails = [
  {
    id: 1,
    name: "RGB LED Strip Lights - Premium Series",
    price: "$29.99",
    originalPrice: "$49.99",
    savings: "40% OFF",
    image: ledStripsImage,
    rating: 4.8,
    reviewCount: 2847,
    badge: "Best Seller",
    inStock: true,
    description: "Transform any space with our premium RGB LED strip lights featuring 16 million colors, smart app control, and music synchronization. Perfect for bedrooms, living rooms, gaming setups, and accent lighting.",
    features: [
      "16 Million Colors with Smooth Transitions",
      "WiFi + Bluetooth Smart Control",
      "Music Sync with Built-in Microphone", 
      "5 Meter Length (16.4 feet)",
      "Cuttable Every 2 Inches",
      "3M Adhesive Backing",
      "Voice Control (Alexa, Google, Siri)",
      "Timer & Schedule Functions"
    ],
    specifications: {
      "Power": "12V DC, 24W Max",
      "LED Type": "SMD 5050 RGB",
      "Length": "5 meters (16.4 feet)",
      "Brightness": "1200 Lumens/meter",
      "IP Rating": "IP65 Waterproof",
      "Lifespan": "50,000+ Hours",
      "Control": "WiFi 2.4GHz, Bluetooth 5.0",
      "App": "iOS/Android Compatible"
    },
    included: [
      "5M RGB LED Strip",
      "WiFi Controller",
      "12V Power Adapter",
      "Remote Control",
      "Mounting Clips",
      "User Manual"
    ],
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        comment: "Amazing quality! The colors are vibrant and the app is super easy to use. Perfect for my bedroom setup.",
        verified: true
      },
      {
        name: "Mike R.",
        rating: 5,
        comment: "Great value for money. Installation was simple and the music sync feature is incredible!",
        verified: true
      },
      {
        name: "Jessica L.",
        rating: 4,
        comment: "Good product overall. Adhesive could be stronger but everything else is perfect.",
        verified: true
      }
    ]
  },
  {
    id: 2,
    name: "Smart LED Bulbs - Color Changing (4-Pack)",
    price: "$39.99",
    originalPrice: "$69.99",
    savings: "43% OFF",
    image: smartBulbImage,
    rating: 4.7,
    reviewCount: 1923,
    badge: "Popular Choice",
    inStock: true,
    description: "Upgrade your entire home with our smart LED bulb 4-pack. Energy-efficient, color-changing bulbs with voice control and app integration. Perfect for replacing traditional bulbs throughout your home.",
    features: [
      "16 Million Colors + Warm/Cool White",
      "Voice Control Compatible",
      "80% Energy Savings vs Traditional",
      "Dimming from 1% to 100%",
      "Easy Screw-in Installation",
      "No Hub Required",
      "Group Control Multiple Bulbs",
      "Schedule & Timer Functions"
    ],
    specifications: {
      "Power": "9W (60W Equivalent)",
      "Base": "E26/E27 Standard",
      "Brightness": "800 Lumens Each",
      "Color Temperature": "2700K-6500K",
      "Lifespan": "25,000+ Hours",
      "Control": "WiFi 2.4GHz",
      "Voltage": "AC 85-265V",
      "CRI": ">80"
    },
    included: [
      "4x Smart LED Bulbs",
      "Quick Start Guide",
      "App Download Instructions",
      "Warranty Card"
    ],
    reviews: [
      {
        name: "David K.",
        rating: 5,
        comment: "Fantastic bulbs! Easy setup and the color options are endless. Great for mood lighting.",
        verified: true
      },
      {
        name: "Emma T.",
        rating: 5,
        comment: "Love these! Voice control works perfectly and they're much brighter than expected.",
        verified: true
      },
      {
        name: "Alex P.",
        rating: 4,
        comment: "Good quality bulbs. Sometimes connection drops but overall very satisfied.",
        verified: true
      }
    ]
  },
  {
    id: 3,
    name: "Gaming LED Backlight - Ultra Immersive",
    price: "$24.99",
    originalPrice: "$39.99",
    savings: "38% OFF",
    image: gamingSetupImage,
    rating: 4.9,
    reviewCount: 1456,
    badge: "Gamer's Choice",
    inStock: true,
    description: "Take your gaming experience to the next level with our ultra-immersive LED backlight system. Responsive lighting effects, multiple gaming modes, and easy USB setup make this perfect for any gaming station.",
    features: [
      "USB Powered - No External Adapter",
      "Gaming-Specific Light Effects",
      "Sound Reactive Technology",
      "Multiple Gaming Modes",
      "Easy Clip-On Installation",
      "Compatible with All Monitor Sizes",
      "Low Heat Generation",
      "Plug & Play Setup"
    ],
    specifications: {
      "Power": "5V DC via USB",
      "Length": "2 meters (6.6 feet)",
      "LED Type": "SMD 2835 RGB",
      "Control": "Inline Controller",
      "Brightness": "300 Lumens/meter",
      "Cable Length": "1.5 meters",
      "Compatibility": "PC, Mac, PS5, Xbox",
      "Installation": "Clip-on Mounts"
    },
    included: [
      "2M LED Gaming Strip",
      "USB Controller",
      "Monitor Clips (8 pieces)",
      "Cable Management Clips",
      "Installation Guide"
    ],
    reviews: [
      {
        name: "Tyler G.",
        rating: 5,
        comment: "Perfect for gaming! The effects are smooth and really enhance the gaming atmosphere.",
        verified: true
      },
      {
        name: "Rachel B.",
        rating: 5,
        comment: "Easy to install and looks amazing behind my monitor. Great value!",
        verified: true
      },
      {
        name: "Jordan M.",
        rating: 5,
        comment: "Exactly what I was looking for. The sound reactive mode is incredible during gaming sessions.",
        verified: true
      }
    ]
  }
];

const ProductDetails = () => {
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    toast({
      title: "Added to Cart!",
      description: `${product.name} (${product.price}) has been added to your cart.`,
    });
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  const handleAddToWishlist = (productName: string) => {
    toast({
      title: "Added to Wishlist!",
      description: `${productName} has been saved to your wishlist.`,
    });
  };

  return (
    <section id="product-details" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Detailed <span className="bg-gradient-primary bg-clip-text text-transparent">Product Information</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Everything you need to know about our premium LED lighting products. From specifications to customer reviews.
          </p>
        </div>

        <div className="space-y-20">
          {productDetails.map((product) => (
            <Card key={product.id} className="border-border/50 bg-card/50 backdrop-blur-sm shadow-glow">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Product Image & Info */}
                  <div className="space-y-6">
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-primary shadow-glow">
                          {product.badge}
                        </Badge>
                      </div>
                      {product.savings && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive" className="bg-red-500 shadow-glow">
                            {product.savings}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="font-medium ml-2">{product.rating}</span>
                      </div>
                      <span className="text-foreground/60">({product.reviewCount} reviews)</span>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1 text-led-green">
                        <Truck className="w-4 h-4" />
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex items-center gap-1 text-led-blue">
                        <Shield className="w-4 h-4" />
                        <span>2-Year Warranty</span>
                      </div>
                      <div className="flex items-center gap-1 text-led-purple">
                        <RotateCcw className="w-4 h-4" />
                        <span>30-Day Returns</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-lg text-foreground/60 line-through">{product.originalPrice}</span>
                        <Badge variant="outline" className="text-led-green border-led-green">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-bold text-lg mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-led-green rounded-full"></div>
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button 
                        size="lg"
                        className="flex-1 bg-gradient-primary border-0 shadow-glow"
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                      >
                        Add to Cart - {product.price}
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary/10"
                        onClick={() => handleAddToWishlist(product.name)}
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detailed Specifications */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <Card className="border-border/30 bg-card/30">
                    <CardHeader>
                      <CardTitle>Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-2 border-b border-border/20 last:border-b-0">
                            <span className="text-foreground/80">{key}</span>
                            <span className="font-medium text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/30 bg-card/30">
                    <CardHeader>
                      <CardTitle>What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {product.included.map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-led-green rounded-full"></div>
                            <span className="text-foreground/80">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Customer Reviews */}
                <div className="mt-12">
                  <h4 className="font-bold text-xl mb-6">Customer Reviews</h4>
                  <div className="grid gap-6">
                    {product.reviews.map((review, index) => (
                      <Card key={index} className="border-border/30 bg-card/20">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <Badge variant="outline" className="text-xs text-led-green border-led-green">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-foreground/80">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;