import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, NY",
    rating: 5,
    date: "2 weeks ago",
    title: "Absolutely game-changing!",
    content: "These LED lights completely transformed my living room. The colors are vibrant, the app control is intuitive, and the music sync feature is incredible for parties. Installation was a breeze!",
    product: "RGB Strip Lights Pro",
    verified: true,
    helpful: 24
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles, CA",
    rating: 5,
    date: "1 month ago",
    title: "Perfect for gaming setup",
    content: "As a gamer, these lights are exactly what I needed. The responsive colors and sync features make my setup look professional. Battery life is excellent too.",
    product: "Gaming LED Setup",
    verified: true,
    helpful: 18
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Miami, FL",
    rating: 4,
    date: "3 weeks ago",
    title: "Great quality, easy setup",
    content: "Love the smart bulbs! Voice control works flawlessly with Alexa. Only wish they came in more color temperatures, but overall very satisfied.",
    product: "Smart LED Bulbs",
    verified: true,
    helpful: 12
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Seattle, WA",
    rating: 5,
    date: "1 week ago",
    title: "Energy savings are real!",
    content: "Switched my entire house to these LEDs. My electricity bill dropped by 60%! The scheduling feature is perfect for vacation mode.",
    product: "Complete Home Kit",
    verified: true,
    helpful: 31
  },
  {
    id: 5,
    name: "Jessica Park",
    location: "Chicago, IL",
    rating: 5,
    date: "2 months ago",
    title: "Customer service is amazing",
    content: "Had an issue with one strip, and their support team replaced it within 48 hours. The product quality is top-notch, and the company stands behind it.",
    product: "RGB Strip Lights Pro",
    verified: true,
    helpful: 15
  },
  {
    id: 6,
    name: "Robert Kim",
    location: "Austin, TX",
    rating: 4,
    date: "5 days ago",
    title: "Exceeded expectations",
    content: "The brightness control is fantastic. Can go from ambient mood lighting to full brightness for reading. App could use some UI improvements but functionality is solid.",
    product: "Smart LED Bulbs",
    verified: true,
    helpful: 8
  }
];

const Reviews = () => {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-led-yellow' : 'text-muted'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-2xl font-bold">{averageRating.toFixed(1)}</span>
            </div>
            <div className="text-foreground/60">
              Based on {totalReviews}+ verified reviews
            </div>
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their spaces with LumaLights
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="group hover:scale-105 transition-all duration-300 shadow-card-custom hover:shadow-glow border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Rating and Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-foreground/60">{review.date}</span>
                </div>

                {/* Review Title */}
                <h4 className="font-bold text-lg mb-2">{review.title}</h4>

                {/* Review Content */}
                <p className="text-foreground/80 mb-4 leading-relaxed">{review.content}</p>

                {/* Product */}
                <div className="text-sm text-led-blue mb-3">
                  Product: {review.product}
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {review.name}
                      {review.verified && (
                        <span className="text-led-green text-sm">✓ Verified</span>
                      )}
                    </div>
                    <div className="text-sm text-foreground/60">{review.location}</div>
                  </div>
                  <div className="text-sm text-foreground/60">
                    {review.helpful} found helpful
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary border-0 shadow-glow px-8 py-6 text-lg"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Happy Customers
          </Button>
          <p className="text-sm text-foreground/60 mt-3">
            30-day money-back guarantee • Free shipping worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;