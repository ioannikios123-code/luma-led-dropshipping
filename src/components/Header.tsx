import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            LumaLights
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#products" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Products
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Features
          </a>
          <a href="#stats" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            About
          </a>
          <a href="#footer" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Contact
          </a>
        </nav>
        
        <Button 
          variant="default" 
          className="bg-gradient-primary border-0 shadow-glow"
          onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Shop Now
        </Button>
      </div>
    </header>
  );
};

export default Header;