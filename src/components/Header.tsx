import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Luma Lights
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/#products" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Products
          </a>
          <a href="/#reviews" className="text-foreground/80 hover:text-primary transition-colors scroll-smooth">
            Reviews
          </a>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/shipping" className="text-foreground/80 hover:text-primary transition-colors">
            Shipping
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <CartDrawer />
          <Button 
            variant="gradient" 
            className="hidden md:flex shadow-glow hover:shadow-intense"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Shop Now
          </Button>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="/#products" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a 
              href="/#reviews" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/shipping" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shipping
            </Link>
            <Link 
              to="/returns" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Returns
            </Link>
            <Button 
              variant="gradient" 
              className="w-full"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Shop Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;