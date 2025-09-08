import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-led-room.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern LED lighting setup in stylish living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
        <div className="absolute inset-0 bg-gradient-glow"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your Space with
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Premium LED Lighting
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Create the perfect ambiance with our smart LED lights. Energy-efficient, 
          customizable colors, and wireless control for every room in your home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="gradient"
            className="shadow-intense px-8 py-6 text-lg"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Products
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-led-green rounded-full"></div>
            <span>Free Worldwide Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-led-blue rounded-full"></div>
            <span>2-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-led-purple rounded-full"></div>
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;