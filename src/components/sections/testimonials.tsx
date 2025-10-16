import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Thank you Renu and crafts Mantra for the wonderful customised bags. As always u come to you last minute but you never let me down ❤️ truly appreciate for all your support and being there for me and PRISM 😚🥰",
    author: "PRISM Studio",
    location: "Manipal",
  },
  {
    quote: "Thank you Renu and crafts Mantra for the wonderful customised bags. As always u come to you last minute but you never let me down ❤️ truly appreciate for all your support and being there for me and PRISM 😚🥰",
    author: "PRISM Studio",
    location: "Manipal",
  },
  {
    quote: "Thank you Renu and crafts Mantra for the wonderful customised bags. As always u come to you last minute but you never let me down ❤️ truly appreciate for all your support and being there for me and PRISM 😚🥰",
    author: "PRISM Studio",
    location: "Manipal",
  },
];


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Building Relationships. Building Business.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Our success mantra is simple: Build Relationships and Business will follow! Here’s what some of our valued partners have to say about their experience working with us.
            </p>
          </div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                      <Quote className="w-12 h-12 text-accent/50 mb-4" />
                      <p className="text-muted-foreground font-body italic mb-6 flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold font-headline text-primary">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground font-body">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
}