
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const events = [
  {
    title: "Founder at an Event",
    image: "https://i.postimg.cc/65SXk09T/IMG-7021.jpg",
    imageHint: "founder at event"
  },
  {
    title: "Founder Showcasing Products",
    image: "https://i.postimg.cc/qB8gdwQY/IMG-7035.webp",
    imageHint: "founder with products"
  },
  {
    title: "Exhibition",
    image: "https://i.postimg.cc/FKmDDDPZ/IMG-7036.webp",
    imageHint: "exhibition stall"
  }
];

export function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Events Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              From exhibitions to workshops, see Crafts Mantra in action.
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
            {events.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden rounded-lg">
                       <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={event.imageHint}
                        />
                         <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <h3 className="text-lg font-bold text-primary-foreground font-headline">{event.title}</h3>
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
