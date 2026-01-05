import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { trackUTMVisit } from "@/lib/utm";
import { Zap, Star, Clock, Truck, Shield, Copy, Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const TikTokLanding = () => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });
  const discountCode = "TIKTOK15";

  useEffect(() => {
    trackUTMVisit();
    document.title = "Exclusive TikTok Deal - 15% Off | Luma Lights";
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode);
    setCopied(true);
    toast.success("Discount code copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const formatTime = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Urgent Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-3 text-center">
        <p className="text-sm md:text-base font-bold animate-pulse flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          TikTok Exclusive: 15% OFF Everything!
          <Zap className="w-4 h-4" />
        </p>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-semibold">As Seen on TikTok</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Transform Your Room
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The viral LED lights everyone's talking about ✨
          </p>

          {/* Countdown Timer */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 inline-block">
            <p className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Offer expires in:
            </p>
            <div className="flex gap-4 justify-center text-3xl md:text-4xl font-mono font-bold">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                {formatTime(timeLeft.hours)}
              </div>
              <span className="text-primary">:</span>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                {formatTime(timeLeft.minutes)}
              </div>
              <span className="text-primary">:</span>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                {formatTime(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </div>

        {/* Discount Code Card */}
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-dashed border-primary rounded-2xl p-8 mb-8 text-center">
          <p className="text-lg mb-2">Your exclusive code:</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-black tracking-wider text-primary">
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
          <p className="text-muted-foreground">15% off your entire order</p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <Link to="/#products">
            <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity">
              Shop Now & Save 15%
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">Free Shipping</p>
            <p className="text-xs text-muted-foreground">Orders $50+</p>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-sm font-medium">1 Year Warranty</p>
            <p className="text-xs text-muted-foreground">Full coverage</p>
          </div>
          <div className="text-center p-4 bg-card rounded-xl border border-border">
            <Star className="w-8 h-8 mx-auto mb-2 text-primary fill-primary" />
            <p className="text-sm font-medium">4.9★ Rating</p>
            <p className="text-xs text-muted-foreground">10k+ reviews</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-8">
          <p className="text-2xl font-bold mb-2">🔥 2,847 people claimed this deal today</p>
          <p className="text-muted-foreground">Join thousands transforming their spaces</p>
        </div>

        {/* Quick Testimonials */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-2">"Saw these on TikTok and had to get them. My room looks AMAZING now!"</p>
            <p className="text-xs text-muted-foreground">- Sarah M. ✓ Verified Buyer</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-2">"The quality is insane for the price. Best purchase I've made this year!"</p>
            <p className="text-xs text-muted-foreground">- Jake T. ✓ Verified Buyer</p>
          </div>
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

export default TikTokLanding;
