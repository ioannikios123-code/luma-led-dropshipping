import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, CheckCircle2, Award, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "These LED strips completely transformed my gaming setup! The colors are vibrant and the app control makes it so easy to change the mood. My friends are all jealous and keep asking where I got them!",
    product: "RGB LED Strip Lights",
    verified: true,
    image: "S"
  },
  {
    name: "Mike T.",
    location: "Brooklyn, NY",
    rating: 5,
    text: "Installed the galaxy projector in my bedroom and wow! It's like sleeping under the stars every night. The quality is amazing and setup was super simple. Best purchase I've made all year.",
    product: "Galaxy Star Projector",
    verified: true,
    image: "M"
  },
  {
    name: "Jessica L.",
    location: "Austin, TX",
    rating: 5,
    text: "Best purchase for my home office! The smart bulbs help me stay focused during the day with cool white light, then wind down at night with warm tones. Love the scheduling feature!",
    product: "Smart LED Bulbs (4-Pack)",
    verified: true,
    image: "J"
  },
  {
    name: "David R.",
    location: "Miami, FL",
    rating: 5,
    text: "The music sync feature is incredible! My whole living room pulses with the beat during parties. Installation took less than 10 minutes. Everyone asks about my setup now!",
    product: "Sound-Reactive Wall Panels",
    verified: true,
    image: "D"
  },
  {
    name: "Emily K.",
    location: "Seattle, WA",
    rating: 5,
    text: "I was skeptical about ordering lights online, but Luma exceeded all expectations. The sunset lamp creates the most beautiful golden hour glow for my TikTok videos. Shipping was fast too!",
    product: "Smart Sunset Desk Lamp",
    verified: true,
    image: "E"
  },
  {
    name: "Carlos G.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Got the starter bundle and it's perfect for beginners. Everything I needed to light up my entire room was included. The quality is way better than what I expected at this price point.",
    product: "Room Glow Starter Kit",
    verified: true,
    image: "C"
  }
];

const successStories = [
  {
    title: "From Dull to Stunning",
    story: "My apartment was so boring and lifeless. After adding LED strips under my bed frame and behind my TV, it looks like a completely different space. Guests always comment on the ambiance now!",
    author: "Amanda P.",
    before: "Bland, boring room",
    after: "Instagram-worthy setup"
  },
  {
    title: "The Ultimate Gaming Cave",
    story: "I spent months looking for the perfect lighting for my streaming setup. The gaming LED kit plus wall panels gave me exactly the professional look I wanted. My viewer count has actually increased since the upgrade!",
    author: "Tyler S.",
    before: "Basic desk setup",
    after: "Pro streaming studio"
  },
  {
    title: "Better Sleep, Better Life",
    story: "Used to have trouble falling asleep with harsh overhead lighting. The smart bulbs' sunset simulation feature has genuinely improved my sleep quality. I can program them to dim gradually each night.",
    author: "Rachel M.",
    before: "Restless nights",
    after: "Peaceful sleep routine"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/20" id="reviews">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-led-yellow/20 text-led-yellow px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by 10,000+ Happy Customers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Real People, Real Transformations
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why thousands of customers chose Luma Lights to transform their spaces
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-led-yellow text-led-yellow" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-4">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{testimonial.name}</p>
                      {testimonial.verified && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="mt-3 bg-primary/10 px-3 py-1 rounded-full inline-block">
                  <p className="text-xs text-primary font-medium">{testimonial.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-gradient-to-b from-primary/5 to-transparent border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-3">{story.title}</h4>
                  <p className="text-muted-foreground mb-4">"{story.story}"</p>
                  <p className="font-medium text-primary mb-4">— {story.author}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex-1 bg-destructive/10 px-3 py-2 rounded-lg">
                      <p className="text-muted-foreground text-xs mb-1">Before</p>
                      <p className="font-medium">{story.before}</p>
                    </div>
                    <div className="flex-1 bg-green-500/10 px-3 py-2 rounded-lg">
                      <p className="text-muted-foreground text-xs mb-1">After</p>
                      <p className="font-medium text-green-600">{story.after}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-background rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-led-yellow text-led-yellow" />
                ))}
              </div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">30-Day</div>
              <div className="text-sm text-muted-foreground">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
