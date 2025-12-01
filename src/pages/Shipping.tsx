import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Shipping() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Shipping Information
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground">Free Worldwide Shipping</h2>
            <p>
              We offer free shipping on all orders, no minimum purchase required. Your satisfaction is our priority, which is why we've eliminated shipping costs to make premium LED lighting accessible to everyone.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">Delivery Times</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>United States:</strong> 7-14 business days</li>
              <li><strong>Canada:</strong> 10-16 business days</li>
              <li><strong>United Kingdom & Europe:</strong> 10-18 business days</li>
              <li><strong>Australia & New Zealand:</strong> 12-20 business days</li>
              <li><strong>Rest of World:</strong> 15-25 business days</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">Processing Time</h2>
            <p>
              Orders are typically processed within 1-2 business days. You'll receive a tracking number via email once your order ships, so you can follow your package every step of the way.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">Tracking Your Order</h2>
            <p>
              Once your order ships, you'll receive a confirmation email with a tracking number. You can use this to monitor your package's journey in real-time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">Customs & Duties</h2>
            <p>
              For international orders, customs fees and import duties may apply depending on your country's regulations. These fees are the responsibility of the customer and are not included in our pricing.
            </p>

            <div className="bg-card p-6 rounded-lg border border-border mt-8">
              <h3 className="text-xl font-bold mb-3">Need Help?</h3>
              <p>
                Have questions about your shipment? Contact our support team and we'll be happy to help!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}