import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "California",
    rating: 5,
    text: "These LED strips completely transformed my gaming setup! The colors are vibrant and the app control makes it so easy to change the mood. My friends are all jealous!",
    product: "RGB LED Strip"
  },
  {
    name: "Mike T.",
    location: "New York",
    rating: 5,
    text: "Installed the galaxy projector in my bedroom and wow! It's like sleeping under the stars every night. The quality is amazing and setup was super simple.",
    product: "Galaxy Projector"
  },
  {
    name: "Jessica L.",
    location: "Texas",
    rating: 5,
    text: "Best purchase for my home office! The smart bulbs help me stay focused during the day and wind down at night. Love the scheduling feature!",
    product: "Smart LED Bulbs"
  },
  {
    name: "David R.",
    location: "Florida",
    rating: 5,
    text: "The music sync feature is incredible! My whole living room pulses with the beat. Perfect for parties and movie nights. Installation took less than 10 minutes.",
    product: "Sound-Reactive Panel"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/20" id="reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Loved by 10,000+ Customers
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who transformed their spaces with our LED lighting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-led-yellow text-led-yellow" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">{testimonial.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};