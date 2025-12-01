import { Shield, Truck, RotateCcw, Lock } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On all orders worldwide"
    },
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Quality guaranteed"
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy, hassle-free returns"
    },
    {
      icon: Lock,
      title: "Secure Checkout",
      description: "256-bit SSL encryption"
    }
  ];

  return (
    <div className="py-12 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};