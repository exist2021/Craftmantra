
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
  },
  {
    title: "With Anil Kumble",
    image: "https://i.postimg.cc/Nfn06n0t/IMG-7037.webp",
    imageHint: "Anil Kumble"
  },
  {
    title: "Event Showcase",
    image: "https://i.postimg.cc/4yd4HvG9/IMG-7039.jpg",
    imageHint: "event showcase"
  },
  {
    title: "Community Event",
    image: "https://i.postimg.cc/PJxfvbHL/IMG-7040.jpg",
    imageHint: "community event"
  },
  {
    title: "Crafts Display",
    image: "https://i.postimg.cc/rsmyRGTL/IMG-7041.jpg",
    imageHint: "crafts display"
  },
  {
    title: "Artisan Market",
    image: "https://i.postimg.cc/C1JLKP30/IMG-7042.jpg",
    imageHint: "artisan market"
  },
  {
    title: "Product Display",
    image: "https://i.postimg.cc/FRGsKW2w/IMG-7043.jpg",
    imageHint: "product display"
  },
  {
    title: "Exhibition View",
    image: "https://i.postimg.cc/QtSxM42G/IMG-7044.jpg",
    imageHint: "exhibition view"
  },
  {
    title: "Event Stall",
    image: "https://i.postimg.cc/QtjdhGnq/IMG-7045.jpg",
    imageHint: "event stall"
  },
  {
    title: "Showcasing Handicrafts",
    image: "https://i.postimg.cc/vBGZbFSN/IMG-7046.jpg",
    imageHint: "handicrafts showcase"
  },
  {
    title: "Crafts Mantra Stall",
    image: "https://i.postimg.cc/76qZw8QS/IMG-7047.jpg",
    imageHint: "crafts mantra stall"
  },
  {
    title: "With a Visitor",
    image: "https://i.postimg.cc/fLMRDngy/IMG-7048.jpg",
    imageHint: "visitor interaction"
  },
  {
    title: "Displaying Products",
    image: "https://i.postimg.cc/nL4hycTX/IMG-7049.jpg",
    imageHint: "displaying products"
  },
  {
    title: "Event Interaction",
    image: "https://i.postimg.cc/6QJQbGVw/IMG-7050.jpg",
    imageHint: "event interaction"
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
