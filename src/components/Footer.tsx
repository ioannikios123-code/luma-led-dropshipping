const Footer = () => {
  return (
    <footer id="footer" className="bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
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
              <li><button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">LED Strip Lights</button></li>
              <li><button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">Smart Bulbs</button></li>
              <li><button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">Gaming Lights</button></li>
              <li><button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">View All Products</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">Product Features</button></li>
              <li><button onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors text-left">Why Choose Us</button></li>
              <li><span className="text-foreground/60">2-Year Warranty Included</span></li>
              <li><span className="text-foreground/60">30-Day Free Returns</span></li>
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-foreground/80">
              <li><span className="text-foreground/60">📧 support@lumalights.com</span></li>
              <li><span className="text-foreground/60">📞 1-800-LUMA-LED</span></li>
              <li><span className="text-foreground/60">🚚 Free Worldwide Shipping</span></li>
              <li><span className="text-foreground/60">⚡ 24/7 Customer Support</span></li>
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