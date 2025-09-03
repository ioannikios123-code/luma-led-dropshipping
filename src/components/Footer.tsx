const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full shadow-glow"></div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                LumaLights
              </span>
            </div>
            <p className="text-foreground/80 mb-4">
              Premium LED lighting solutions for modern homes. Transform your space with smart, energy-efficient lighting.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-led-blue rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-8 h-8 bg-led-purple rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-8 h-8 bg-led-pink rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">LED Strip Lights</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Smart Bulbs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming Lights</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Outdoor Lights</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>&copy; 2024 LumaLights. All rights reserved. | Free worldwide shipping on orders over $50</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;