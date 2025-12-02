import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Sparkles } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const EmailSignupPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasSubscribed, setHasSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const dismissed = localStorage.getItem("email-popup-dismissed");
    const subscribed = localStorage.getItem("email-subscribed");
    
    if (dismissed || subscribed) return;

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("email-popup-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Save subscription
    localStorage.setItem("email-subscribed", "true");
    localStorage.setItem("subscriber-email", email);
    setHasSubscribed(true);

    toast({
      title: "🎉 Welcome to the club!",
      description: "Your 10% discount code is: WELCOME10",
    });

    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-intense overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gradient header */}
        <div className="bg-gradient-primary p-6 text-center">
          <Gift className="w-12 h-12 mx-auto mb-3 text-white" />
          <h2 className="text-2xl font-bold text-white mb-1">
            Get 10% Off Your First Order!
          </h2>
          <p className="text-white/90 text-sm">
            Join 10,000+ happy customers
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!hasSubscribed ? (
            <>
              <p className="text-center text-foreground/80 mb-4">
                Sign up for exclusive deals, new product alerts, and your personal discount code.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-center"
                />
                <Button type="submit" className="w-full" variant="gradient" size="lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get My 10% Off
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-led-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-led-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">You're In!</h3>
              <p className="text-muted-foreground mb-4">
                Your discount code:
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg py-3 px-6 inline-block">
                <span className="text-2xl font-mono font-bold text-primary">WELCOME10</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Use at checkout for 10% off
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};