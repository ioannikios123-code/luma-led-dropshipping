import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Luma Lights
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#products" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Products
          </a>
          <a href="#catalog" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Catalog
          </a>
          <a href="#cart" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Cart
          </a>
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Features
          </a>
          <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Reviews
          </a>
          <a href="#support" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Support
          </a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            About
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <CartDrawer />
          <Button 
            variant="gradient" 
            className="shadow-glow hover:shadow-intense"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;