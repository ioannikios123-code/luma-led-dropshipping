import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import CompanyInfo from "@/components/CompanyInfo";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <TechnicalSpecs />
        <CompanyInfo />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
