import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Truck, MapPin, User, Mail, Phone } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
}

const ShoppingCartComponent = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "RGB LED Strip Lights",
      price: 29.99,
      originalPrice: 49.99,
      image: "/placeholder.svg",
      quantity: 1
    }
  ]);
  
  const [checkoutForm, setCheckoutForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "United States",
    phone: ""
  });
  
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item Removed",
      description: "Product has been removed from your cart.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'postalCode'];
    const missingFields = requiredFields.filter(field => !checkoutForm[field as keyof typeof checkoutForm]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // For now, show success message - real payment would need Supabase integration
    toast({
      title: "Order Submitted!",
      description: "Thank you for your order. You'll receive a confirmation email shortly.",
    });
    
    setIsCheckoutOpen(false);
    setCartItems([]);
    setCheckoutForm({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "United States",
      phone: ""
    });
  };

  return (
    <section id="cart" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shopping <span className="bg-gradient-primary bg-clip-text text-transparent">Cart</span>
          </h2>
          <p className="text-xl text-foreground/80">
            Review your items and complete your purchase
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Cart Items ({cartItems.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 mx-auto text-foreground/30 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
                    <p className="text-foreground/60 mb-6">Add some amazing LED products to get started!</p>
                    <Button 
                      className="bg-gradient-primary border-0 shadow-glow"
                      onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Browse Products
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border border-border/30 rounded-lg bg-card/30">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-lg">{item.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-primary font-bold">${item.price}</span>
                            <span className="text-sm text-foreground/60 line-through">${item.originalPrice}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-600 p-1 h-auto"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-led-green">
                    <span>You Save</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping === 0 && (
                    <Badge className="w-full justify-center bg-led-green/20 text-led-green border-led-green">
                      Free shipping on orders over $50!
                    </Badge>
                  )}
                  <div className="border-t border-border/30 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 pt-4">
                    <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-gradient-primary border-0 shadow-glow"
                          size="lg"
                        >
                          <CreditCard className="w-4 h-4 mr-2" />
                          Secure Checkout
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Complete Your Order</DialogTitle>
                        </DialogHeader>
                        
                        <form onSubmit={handleCheckoutSubmit} className="space-y-6">
                          {/* Order Summary */}
                          <div className="bg-card/50 p-4 rounded-lg border border-border/30">
                            <h3 className="font-bold mb-3">Order Summary</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between text-led-green">
                                <span>You Save</span>
                                <span>-${savings.toFixed(2)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                              </div>
                              <div className="border-t border-border/30 pt-2">
                                <div className="flex justify-between font-bold text-lg">
                                  <span>Total</span>
                                  <span className="text-primary">${total.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="space-y-4">
                            <h3 className="font-bold flex items-center gap-2">
                              <User className="w-4 h-4" />
                              Contact Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={checkoutForm.email}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  value={checkoutForm.phone}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                                />
                              </div>
                              <div>
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input
                                  id="firstName"
                                  value={checkoutForm.firstName}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, firstName: e.target.value})}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input
                                  id="lastName"
                                  value={checkoutForm.lastName}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, lastName: e.target.value})}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Shipping Information */}
                          <div className="space-y-4">
                            <h3 className="font-bold flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              Shipping Address
                            </h3>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="address">Address *</Label>
                                <Input
                                  id="address"
                                  value={checkoutForm.address}
                                  onChange={(e) => setCheckoutForm({...checkoutForm, address: e.target.value})}
                                  required
                                />
                              </div>
                              <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                  <Label htmlFor="city">City *</Label>
                                  <Input
                                    id="city"
                                    value={checkoutForm.city}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, city: e.target.value})}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="postalCode">Postal Code *</Label>
                                  <Input
                                    id="postalCode"
                                    value={checkoutForm.postalCode}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, postalCode: e.target.value})}
                                    required
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="country">Country</Label>
                                  <Input
                                    id="country"
                                    value={checkoutForm.country}
                                    onChange={(e) => setCheckoutForm({...checkoutForm, country: e.target.value})}
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="flex gap-3 pt-4">
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setIsCheckoutOpen(false)}
                              className="flex-1"
                            >
                              Cancel
                            </Button>
                            <Button 
                              type="submit"
                              className="flex-1 bg-gradient-primary border-0 shadow-glow"
                            >
                              <CreditCard className="w-4 h-4 mr-2" />
                              Place Order
                            </Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                    
                    <div className="text-center text-sm text-foreground/60">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Truck className="w-4 h-4" />
                        <span>Free worldwide shipping</span>
                      </div>
                      <div>🔒 Secure SSL encrypted payment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            You Might Also <span className="bg-gradient-primary bg-clip-text text-transparent">Like</span>
          </h3>
          <div className="text-center">
            <Button 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCartComponent;