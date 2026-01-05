import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackUTMVisit } from "@/lib/utm";
import { Heart, Star, Package, Truck, Shield, Copy, Check, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const SocialLanding = () => {
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);
  
  // Detect platform from UTM or default to instagram
  const platform = searchParams.get('utm_source') || 'instagram';
  const isInstagram = platform === 'instagram';
  const isFacebook = platform === 'facebook';
  
  const discountCode = isInstagram ? "INSTA20" : isFacebook ? "FB20" : "SOCIAL20";
  const platformName = isInstagram ? "Instagram" : isFacebook ? "Facebook" : "Social";
  const gradientClass = isInstagram 
    ? "from-pink-500 via-rose-500 to-orange-500" 
    : "from-blue-600 via-blue-500 to-indigo-500";

  useEffect(() => {
    trackUTMVisit();
    document.title = `Exclusive ${platformName} Deal - 20% Off | Luma Lights`;
  }, [platformName]);

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    toast.success("Discount code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Platform Header */}
      <div className={`bg-gradient-to-r ${gradientClass} text-white py-4 text-center`}>
        <p className="text-sm md:text-base font-bold flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 fill-current" />
          {platformName} Followers Get 20% OFF!
          <Heart className="w-4 h-4 fill-current" />
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradientClass} text-white px-6 py-2 rounded-full mb-6`}>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">{platformName} Exclusive Offer</span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
            Light Up Your Life
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium LED lighting that transforms any space into something magical. 
            Join 50,000+ happy customers.
          </p>

          {/* Discount Code Card */}
          <div className={`bg-gradient-to-r ${gradientClass} p-1 rounded-2xl mb-10 max-w-md mx-auto`}>
            <div className="bg-card rounded-xl p-8">
              <p className="text-lg mb-3">Your exclusive discount:</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl md:text-5xl font-black tracking-wider">
                  {discountCode}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyCode}
                  className="shrink-0"
                >
                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>
              <p className="text-primary font-semibold text-lg">Save 20% on everything!</p>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/#products">
            <Button size="lg" className={`text-lg px-12 py-6 bg-gradient-to-r ${gradientClass} hover:opacity-90 transition-opacity`}>
              Shop The Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
            <Package className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="font-semibold mb-1">Easy Setup</p>
            <p className="text-sm text-muted-foreground">Install in minutes</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
            <Truck className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="font-semibold mb-1">Free Shipping</p>
            <p className="text-sm text-muted-foreground">On orders $50+</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
            <Shield className="w-10 h-10 mx-auto mb-3 text-primary" />
            <p className="font-semibold mb-1">1 Year Warranty</p>
            <p className="text-sm text-muted-foreground">Peace of mind</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
            <Star className="w-10 h-10 mx-auto mb-3 text-primary fill-primary" />
            <p className="font-semibold mb-1">4.9★ Rated</p>
            <p className="text-sm text-muted-foreground">10,000+ reviews</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-4">"These lights completely transformed my bedroom. The app control is so convenient!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">E</div>
                <div>
                  <p className="font-medium text-sm">Emma R.</p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-4">"Best LED lights I've ever bought. The colors are vibrant and installation was super easy."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">M</div>
                <div>
                  <p className="font-medium text-sm">Marcus L.</p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-4">"Got the galaxy projector for my kids' room. They absolutely love it! Worth every penny."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">S</div>
                <div>
                  <p className="font-medium text-sm">Sofia K.</p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className={`bg-gradient-to-r ${gradientClass} text-white rounded-2xl p-8 text-center mb-12`}>
          <h3 className="text-2xl font-bold mb-2">Limited Time Offer!</h3>
          <p className="mb-6 opacity-90">Use code <span className="font-bold">{discountCode}</span> at checkout before it expires</p>
          <Link to="/#products">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Claim Your 20% Discount
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Luma Lights. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/shipping" className="hover:text-primary transition-colors">Shipping</Link>
            <Link to="/returns" className="hover:text-primary transition-colors">Returns</Link>
            <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLanding;
