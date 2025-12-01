import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import CustomerService from "@/components/CustomerService";
import CompanyInfo from "@/components/CompanyInfo";
import FloatingChatWidget from "@/components/FloatingChatWidget";
import Footer from "@/components/Footer";
import { ShopifyProductGrid } from "@/components/ShopifyProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { TrustBadges } from "@/components/TrustBadges";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <section id="products" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Space Today</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From cozy bedroom vibes to epic gaming setups—discover LED lighting that matches your lifestyle
              </p>
            </div>
            <ShopifyProductGrid />
          </div>
        </section>
        <Testimonials />
        <Features />
        <TechnicalSpecs />
        <CustomerService />
        <CompanyInfo />
      </main>
      <Footer />
      <FloatingChatWidget />
    </div>
  );
};

export default Index;
