import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const companyHighlights = [
  {
    icon: "🏭",
    title: "Manufacturing Excellence",
    description: "State-of-the-art facilities with ISO 9001 certification and rigorous quality control",
    metric: "99.8% Quality Rate"
  },
  {
    icon: "🌍",
    title: "Global Presence",
    description: "Serving customers in 50+ countries with local support and fast shipping",
    metric: "50+ Countries"
  },
  {
    icon: "🔬",
    title: "Innovation Lab",
    description: "Dedicated R&D team developing next-generation LED technology and smart features",
    metric: "25+ Patents"
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Committed to eco-friendly production and energy-efficient lighting solutions",
    metric: "80% Energy Savings"
  }
];

const certifications = [
  { name: "CE Certified", icon: "🇪🇺" },
  { name: "FCC Approved", icon: "🇺🇸" },
  { name: "RoHS Compliant", icon: "♻️" },
  { name: "Energy Star", icon: "⭐" },
  { name: "UL Listed", icon: "🛡️" },
  { name: "WiFi Alliance", icon: "📶" }
];

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to revolutionize home lighting"
  },
  {
    year: "2019",
    title: "First Product Launch",
    description: "Launched our signature RGB strip lights"
  },
  {
    year: "2020",
    title: "Smart Integration",
    description: "Added voice control and mobile app functionality"
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded to 25 countries worldwide"
  },
  {
    year: "2022",
    title: "Innovation Award",
    description: "Won CES Innovation Award for smart lighting"
  },
  {
    year: "2023",
    title: "100K+ Customers",
    description: "Reached milestone of 100,000 satisfied customers"
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Launched AI-powered lighting automation"
  }
];

const CompanyInfo = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-glow">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">LumaLights</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Since 2018, we've been at the forefront of LED lighting innovation, creating products that combine 
            cutting-edge technology with beautiful design to transform how people experience light in their homes.
          </p>
        </div>

        {/* Company Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companyHighlights.map((highlight, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 shadow-card-custom hover:shadow-glow border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">{highlight.description}</p>
                <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {highlight.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-4 py-2 hover:shadow-glow transition-all">
                <span className="text-xl">{cert.icon}</span>
                <span className="font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-50"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <Card className="inline-block bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                          {item.year}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-foreground/80">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-gradient-primary rounded-full shadow-glow relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience the <span className="bg-gradient-primary bg-clip-text text-transparent">LumaLights</span> Difference?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join thousands of customers who trust LumaLights for their lighting needs. Experience our commitment to quality, innovation, and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary border-0 shadow-glow px-8 py-6"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Our Products
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;