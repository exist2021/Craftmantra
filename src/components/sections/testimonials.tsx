
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
    quote: "Thank you Renu and Craft Mantra for the wonderful customised bags. As always u come to you last minute but you never let me down ❤️ truly appreciate for all your support and being there for me and PRISM 😚🥰",
    author: "PRISM Studio",
    location: "Manipal",
  },
  {
    quote: "Hi Aunty. Thank you so much for the key chains. They are really nice. 🙏🥰",
    author: "Valued Customer",
    location: "",
  },
  {
    quote: "Completed the payment… Thank you so much Mrs. Renu & team for swift work & superb momentos 🙏. Happy working with you 👍",
    author: "Happy Client",
    location: "",
  },
  {
    quote: "Thank u so much mam for helping us at the last moment. Everyone loved the mementoes 💛",
    author: "Grateful Customer",
    location: "",
  },
  {
    quote: "We had the pleasure of ordering exquisite custom-made pen stands, beautifully integrated with a clock, nameplate, and a meticulously crafted stethoscope design as a tribute to our esteemed seniors. The craftsmanship was impeccable, with every detail thoughtfully executed to perfection...",
    author: "Medical College Group",
    location: "",
  },
    {
    quote: "Our seniors were thoroughly impressed by the sophistication and personal touch of these gifts. Our teachers, batchmates, and juniors were overwhelmed with the gift. Highly recommend this shop - ‘Craft Mantra’ for anyone seeking refined and bespoke gifting solutions! 😊😊❤️❤️",
    author: "Medical College Group",
    location: "",
  },
  {
    quote: "We had our Cheluvu 1st year anniversary on 30th August. All of the anniversary gifts for the team were from power members and their businesses. Thank you @Renu Jayaram (Craft Mantra) for…",
    author: "Cheluvu",
    location: "",
  },
  {
    quote: "Yes, everything is going as per plan for our program. The delegates were really happy with the merchandise and their kits. They specially mentioned the bags and the ID cards.",
    author: "Corporate Client",
    location: "",
  },
  {
    quote: "Thank u for the wonderful momentos, it added more value to my personality, forever grateful 🙏",
    author: "Happy Recipient",
    location: "",
  },
  {
    quote: "Staff and Speakers loved the momentos… Thank you for your support and inspiring ideas.",
    author: "Event Organizer",
    location: "",
},
  {
    quote: "Thanx a ton for the personalised Sash so beautifully designed and also for the crafted office bag…she loved it 👍😘😘",
    author: "Satisfied Customer",
    location: "",
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
                          {testimonial.location && <p className="text-sm text-muted-foreground font-body">{testimonial.location}</p>}
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
