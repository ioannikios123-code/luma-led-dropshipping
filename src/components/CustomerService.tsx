import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Send, Star, CheckCircle } from "lucide-react";

const CustomerService = () => {
  const { toast } = useToast();
  const [chatOpen, setChatOpen] = useState(false);
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium"
  });

  const handleSubmitSupport = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setSupportForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "medium"
    });
  };

  const faqs = [
    {
      question: "How long do LED lights last?",
      answer: "Our premium LED lights are rated for 50,000+ hours of use, which translates to approximately 17 years of normal usage (8 hours per day)."
    },
    {
      question: "Are your LED lights compatible with smart home systems?",
      answer: "Yes! Our smart LED products work with Alexa, Google Home, Apple HomeKit, and most smart home platforms. No hub required for most products."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. If you're not satisfied, return the item in original condition for a full refund."
    },
    {
      question: "Do you offer installation services?",
      answer: "While our products are designed for easy DIY installation, we partner with certified electricians in major cities. Contact us for installation service availability in your area."
    },
    {
      question: "How do I control the colors and effects?",
      answer: "Most of our LED products come with a free mobile app that lets you control colors, brightness, effects, and scheduling. Some also include physical remote controls."
    },
    {
      question: "Are outdoor LED lights weatherproof?",
      answer: "Our outdoor LED products are rated IP65 or higher, making them waterproof and suitable for all weather conditions including rain, snow, and extreme temperatures."
    }
  ];

  return (
    <section id="support" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Customer <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're here to help you every step of the way. Get expert support, answers to common questions, and personalized assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">Speak directly with our LED lighting experts</p>
              <div className="space-y-2">
                <p className="font-bold text-primary">1-800-LED-HELP</p>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Clock className="w-4 h-4" />
                  Mon-Fri: 8AM-8PM EST
                </div>
                <Badge className="bg-led-green/20 text-led-green border-led-green">
                  Average wait: &lt; 2 mins
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">Get detailed help via email</p>
              <div className="space-y-2">
                <p className="font-bold text-primary">support@lumalights.com</p>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Clock className="w-4 h-4" />
                  Response: Within 4 hours
                </div>
                <Badge className="bg-primary/20 text-primary border-primary">
                  24/7 Available
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">Instant help with our chat support</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <Clock className="w-4 h-4" />
                  Mon-Sun: 7AM-11PM EST
                </div>
                <Badge className="bg-led-green/20 text-led-green border-led-green">
                  Usually instant
                </Badge>
              </div>
              <Dialog open={chatOpen} onOpenChange={setChatOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-primary border-0 shadow-glow">
                    Start Live Chat
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Live Chat Support</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-card/50 p-3 rounded-lg">
                      <p className="text-sm text-foreground/80">
                        👋 Hi! I'm Sarah from LumaLights support. How can I help you today?
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Input placeholder="Type your message..." className="flex-1" />
                      <Button size="sm" className="bg-gradient-primary border-0">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" variant="outline" className="text-xs">Product Help</Button>
                      <Button size="sm" variant="outline" className="text-xs">Installation</Button>
                      <Button size="sm" variant="outline" className="text-xs">Returns</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <HelpCircle className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Support Ticket Form */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Submit a Support Request</CardTitle>
            <p className="text-foreground/60">Can't find what you're looking for? Send us a detailed message and we'll help you out.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitSupport} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    value={supportForm.name}
                    onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={supportForm.email}
                    onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject *</label>
                <Input
                  value={supportForm.subject}
                  onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                  placeholder="Brief description of your issue"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Priority</label>
                <select
                  value={supportForm.priority}
                  onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                  className="w-full bg-card border border-border/50 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
                >
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Product support</option>
                  <option value="high">High - Technical issue</option>
                  <option value="urgent">Urgent - Order problem</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  value={supportForm.message}
                  onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                  placeholder="Please provide as much detail as possible about your question or issue..."
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-primary border-0 shadow-glow">
                <Send className="w-4 h-4 mr-2" />
                Send Support Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Service Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Expert Support</h3>
            <p className="text-sm text-foreground/60">Our team consists of certified LED lighting professionals</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-sm text-foreground/60">30-day money-back guarantee on all products</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Fast Response</h3>
            <p className="text-sm text-foreground/60">Most support requests resolved within 4 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;