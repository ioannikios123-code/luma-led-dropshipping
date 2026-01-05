import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Package, Truck, CreditCard, Headphones, Lightbulb, RefreshCw } from "lucide-react";

const shippingFAQs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 7-14 business days depending on your location. We ship from our warehouses to ensure the fastest possible delivery. You'll receive a tracking number via email once your order ships."
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer FREE shipping on all orders over $50. For orders under $50, a flat rate shipping fee of $4.99 applies. This applies to all US orders."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! International shipping typically takes 14-21 business days. Import duties and taxes may apply depending on your country's regulations and are the responsibility of the customer."
  },
  {
    question: "Can I track my order?",
    answer: "Absolutely! Once your order ships, you'll receive an email with your tracking number and a link to track your package in real-time. You can also log into your account to view order status."
  },
  {
    question: "What if my package is lost or delayed?",
    answer: "If your package hasn't arrived within the estimated timeframe, please contact our support team. We'll investigate with the carrier and either locate your package or send a replacement at no extra cost."
  }
];

const productFAQs = [
  {
    question: "Are LED lights safe to use?",
    answer: "Yes! All our LED lights are UL certified and meet strict safety standards. LEDs produce minimal heat compared to traditional bulbs and are safe for extended use. They're also energy-efficient, using up to 80% less energy than incandescent lights."
  },
  {
    question: "How long do LED lights last?",
    answer: "Our LED lights are designed to last 50,000+ hours of continuous use. That's approximately 5-7 years of daily use! They maintain their brightness and color quality throughout their lifespan."
  },
  {
    question: "Are the colors accurate to what's shown?",
    answer: "We strive for color accuracy in all our product photos. Our RGB products offer millions of color combinations that you can customize via our app. The photos represent typical color output in standard lighting conditions."
  },
  {
    question: "Do I need any special apps to control the lights?",
    answer: "Most of our smart products work with our free Luma LED app (available on iOS and Android). Many products also support Alexa, Google Home, and other smart home systems for voice control."
  },
  {
    question: "Are the lights easy to install?",
    answer: "Yes! All our products come with detailed installation instructions. LED strips include 3M adhesive backing for easy stick-and-peel installation. No tools required for most products. Average installation time is under 10 minutes."
  },
  {
    question: "What's included in my order?",
    answer: "Each product listing clearly shows what's included. Generally, you'll receive the LED product, power adapter, controller (if applicable), installation materials, and a user manual. Check individual product pages for specific details."
  }
];

const paymentFAQs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All transactions are securely processed through Shopify Payments."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely! We use industry-standard SSL encryption to protect your data. We never store your credit card information on our servers. All payments are processed securely through Shopify's PCI-compliant payment system."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! Through Shop Pay, you can split your purchase into 4 interest-free payments. This option appears at checkout for eligible orders."
  }
];

const returnFAQs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, you can return your item for a full refund. Items must be in original packaging and unused condition."
  },
  {
    question: "How do I initiate a return?",
    answer: "Contact our support team at support@lumalights.com with your order number and reason for return. We'll provide a prepaid return label and process your refund within 5-7 business days of receiving the item."
  },
  {
    question: "What if my product arrives damaged?",
    answer: "If your product arrives damaged, contact us immediately with photos of the damage. We'll send a replacement at no extra cost and arrange pickup of the damaged item if needed."
  },
  {
    question: "Do you offer warranty?",
    answer: "Yes! All our products come with a 1-year manufacturer warranty covering defects in materials and workmanship. Extended warranty options are available at checkout for additional peace of mind."
  }
];

const supportFAQs = [
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via email at support@lumalights.com, through our live chat widget on the website, or by calling our support line. We typically respond within 24 hours on business days."
  },
  {
    question: "What are your customer service hours?",
    answer: "Our customer service team is available Monday through Friday, 9 AM to 6 PM EST. We also monitor emails on weekends for urgent inquiries."
  },
  {
    question: "Do you have setup tutorials?",
    answer: "Yes! We have video tutorials and step-by-step guides for all our products. Check the Resources section on our website or scan the QR code in your product packaging to access installation videos."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our products, shipping, and policies.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {/* Shipping */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Shipping & Delivery</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {shippingFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`shipping-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Products */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Products & Installation</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {productFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`product-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Payment */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Payment & Security</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {paymentFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`payment-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Returns */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Returns & Warranty</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {returnFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`return-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Support */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Customer Support</h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {supportFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`support-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center p-8 bg-secondary/30 rounded-2xl">
            <Package className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our friendly support team is here to help you with anything you need.
            </p>
            <a 
              href="mailto:support@lumalights.com" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Headphones className="w-4 h-4" />
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
