import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const specifications = [
  {
    category: "LED Technology",
    specs: [
      { label: "LED Type", value: "SMD 5050 RGB + White" },
      { label: "Color Range", value: "16.7 Million Colors" },
      { label: "Brightness", value: "1200-2400 Lumens/meter" },
      { label: "Color Temperature", value: "2700K-6500K" },
      { label: "CRI Rating", value: "> 95 (Excellent)" },
      { label: "Beam Angle", value: "120°" }
    ]
  },
  {
    category: "Power & Efficiency",
    specs: [
      { label: "Power Consumption", value: "14W/meter (Max)" },
      { label: "Voltage", value: "12V DC / 24V DC" },
      { label: "Energy Efficiency", value: "120+ Lumens/Watt" },
      { label: "Power Supply", value: "UL Listed Adapter Included" },
      { label: "Energy Savings", value: "Up to 80% vs Traditional" },
      { label: "Lifespan", value: "50,000+ Hours" }
    ]
  },
  {
    category: "Smart Features",
    specs: [
      { label: "Connectivity", value: "WiFi 2.4GHz, Bluetooth 5.0" },
      { label: "App Control", value: "iOS/Android Compatible" },
      { label: "Voice Control", value: "Alexa, Google, Siri" },
      { label: "Music Sync", value: "Built-in Microphone" },
      { label: "Scheduling", value: "24/7 Timer & Automation" },
      { label: "Scenes", value: "16+ Pre-set Modes" }
    ]
  },
  {
    category: "Installation & Durability",
    specs: [
      { label: "Installation", value: "Peel & Stick Adhesive" },
      { label: "Cutting Points", value: "Every 2 inches (50mm)" },
      { label: "IP Rating", value: "IP65 Waterproof" },
      { label: "Operating Temperature", value: "-20°C to +60°C" },
      { label: "Flexibility", value: "Bendable, Non-breakable" },
      { label: "Certifications", value: "CE, FCC, RoHS, UL" }
    ]
  }
];

const compatibilityDevices = [
  { name: "Amazon Alexa", icon: "🗣️", status: "Full Support" },
  { name: "Google Assistant", icon: "🎙️", status: "Full Support" },
  { name: "Apple HomeKit", icon: "🏠", status: "Full Support" },
  { name: "Samsung SmartThings", icon: "📱", status: "Compatible" },
  { name: "Philips Hue Bridge", icon: "🌉", status: "Compatible" },
  { name: "IFTTT", icon: "🔗", status: "Full Support" },
  { name: "Home Assistant", icon: "🏡", status: "Full Support" },
  { name: "OpenHAB", icon: "🔧", status: "Compatible" }
];

const appFeatures = [
  {
    title: "Intuitive Color Picker",
    description: "Choose from 16.7 million colors with precision color wheel and RGB sliders",
    icon: "🎨"
  },
  {
    title: "Scene Library",
    description: "Access 50+ preset scenes or create your own custom lighting moods",
    icon: "💡"
  },
  {
    title: "Music Synchronization", 
    description: "Real-time audio analysis for lights that dance to your music",
    icon: "🎵"
  },
  {
    title: "Advanced Scheduling",
    description: "Set sunrise/sunset automation, daily schedules, and vacation modes",
    icon: "⏰"
  },
  {
    title: "Group Control",
    description: "Control multiple light strips simultaneously across different rooms",
    icon: "🏠"
  },
  {
    title: "Energy Monitoring",
    description: "Track power consumption and energy savings in real-time",
    icon: "📊"
  }
];

const TechnicalSpecs = () => {
  return (
    <section id="technical-specs" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Specifications</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Dive deep into the advanced technology and features that make LumaLights the professional choice for smart lighting solutions.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specifications.map((category, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-center py-2 border-b border-border/20 last:border-b-0">
                      <span className="text-foreground/80">{spec.label}</span>
                      <span className="font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compatibility Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Smart Home <span className="bg-gradient-primary bg-clip-text text-transparent">Compatibility</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {compatibilityDevices.map((device, index) => (
              <Card key={index} className="text-center border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-glow transition-all">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{device.icon}</div>
                  <div className="font-medium text-sm mb-1">{device.name}</div>
                  <div className="text-xs text-led-green">{device.status}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* App Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Mobile App <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-glow transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h4 className="font-bold text-lg mb-3">{feature.title}</h4>
                  <p className="text-foreground/80 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Installation Guide CTA */}
        <div className="text-center bg-gradient-glow rounded-xl p-8 border border-border/30">
          <h3 className="text-2xl font-bold mb-4">
            Need Installation <span className="bg-gradient-primary bg-clip-text text-transparent">Help?</span>
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Our comprehensive installation guides and 24/7 technical support ensure you get the most out of your LumaLights system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 shadow-glow px-8 py-6"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Download Manual
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;