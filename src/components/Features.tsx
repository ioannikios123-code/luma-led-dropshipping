import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "16 Million Colors",
    description: "Create any mood with our full spectrum RGB lighting system",
    icon: "🎨",
    gradient: "from-led-red to-led-pink"
  },
  {
    title: "Smart App Control",
    description: "Control your lights from anywhere with our intuitive mobile app",
    icon: "📱",
    gradient: "from-led-blue to-led-cyan"
  },
  {
    title: "Energy Efficient",
    description: "Save up to 80% on electricity bills with LED technology",
    icon: "⚡",
    gradient: "from-led-green to-led-blue"
  },
  {
    title: "Easy Installation",
    description: "No tools required - simple peel and stick installation",
    icon: "🔧",
    gradient: "from-led-purple to-primary"
  },
  {
    title: "Music Sync",
    description: "Lights dance to your music with built-in microphone",
    icon: "🎵",
    gradient: "from-led-pink to-led-purple"
  },
  {
    title: "Voice Control",
    description: "Works with Alexa, Google Home, and Siri for hands-free control",
    icon: "🗣️",
    gradient: "from-led-cyan to-accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-glow">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">LumaLights</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Experience the future of home lighting with our advanced LED technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 shadow-card-custom hover:shadow-glow border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center text-2xl shadow-glow`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div id="stats" className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">50K+</div>
            <div className="text-foreground/80">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-foreground/80">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-foreground/80">Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">2 Year</div>
            <div className="text-foreground/80">Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;