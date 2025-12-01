import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Returns() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Returns & Refunds
          </h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground">30-Day Money-Back Guarantee</h2>
            <p>
              We stand behind the quality of our products. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery for a full refund—no questions asked.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">How to Return an Item</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact our support team within 30 days of receiving your order</li>
              <li>We'll provide you with a return authorization and instructions</li>
              <li>Pack your item securely in its original packaging if possible</li>
              <li>Ship the item back to our return address</li>
              <li>Once we receive and inspect your return, we'll process your refund</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-8">Return Conditions</h2>
            <p>To be eligible for a return, items must:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Be in original condition with all accessories and packaging</li>
              <li>Not show signs of use or damage</li>
              <li>Include all original documentation</li>
              <li>Be returned within 30 days of delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8">Refund Processing</h2>
            <p>
              Once we receive your return, we'll inspect it and process your refund within 5-7 business days. Refunds will be issued to your original payment method. Please allow an additional 5-10 business days for the refund to appear in your account.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">Exchanges</h2>
            <p>
              If you'd like to exchange an item for a different product or variant, please contact our support team. We'll be happy to help you find the perfect replacement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8">Damaged or Defective Items</h2>
            <p>
              If you receive a damaged or defective item, please contact us immediately with photos. We'll send a replacement right away at no additional cost, and you won't need to return the defective item.
            </p>

            <div className="bg-card p-6 rounded-lg border border-border mt-8">
              <h3 className="text-xl font-bold mb-3">Questions About Returns?</h3>
              <p>
                Our customer support team is here to make the return process as smooth as possible. Don't hesitate to reach out!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}