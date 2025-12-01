import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Luma Lights
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <p className="text-xl">
              We're on a mission to help people transform their spaces into personalized, vibrant environments through innovative LED lighting solutions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Story</h2>
            <p>
              Founded in 2020, Luma Lights was born from a simple idea: everyone deserves to live in a space that reflects their personality and mood. We started by helping gamers create immersive setups and quickly expanded to serve anyone looking to enhance their home, office, or creative space.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Quality First:</strong> Every product is tested for durability and performance</li>
              <li><strong>Customer Obsessed:</strong> 24/7 support and 30-day money-back guarantee</li>
              <li><strong>Innovation:</strong> We stay ahead with the latest LED technology and smart features</li>
              <li><strong>Global Shipping:</strong> Free worldwide delivery on all orders</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Promise</h2>
            <p>
              We believe lighting shouldn't just illuminate—it should inspire. That's why we carefully curate products that combine cutting-edge technology with beautiful design. From energy-efficient smart bulbs to immersive galaxy projectors, every product in our collection is chosen to help you create the perfect atmosphere.
            </p>

            <div className="bg-card p-6 rounded-lg border border-border mt-8">
              <h3 className="text-xl font-bold mb-3">Join Our Community</h3>
              <p className="mb-4">
                Over 10,000 customers have already transformed their spaces. Ready to join them?
              </p>
              <Link to="/">
                <Button variant="gradient" size="lg">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}