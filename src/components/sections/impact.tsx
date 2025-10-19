
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
  },
  {
    title: "Event Showcase",
    image: "https://i.postimg.cc/Gp6zKGh5/049a3c4c-f338-4bcd-811a-684c3c5d44e6.jpg",
    imageHint: "event showcase"
  },
  {
    title: "Community Interaction",
    image: "https://i.postimg.cc/vm4353M7/1eebaf3c-a40a-4cd7-9559-999078fac250.jpg",
    imageHint: "community interaction"
  },
  {
    title: "Product Workshop",
    image: "https://i.postimg.cc/CK9J7kx0/2f30f753-0508-4f12-b20d-084cf4997293.jpg",
    imageHint: "product workshop"
  },
  {
    title: "Craft Fair Display",
    image: "https://i.postimg.cc/ZqXjHpKV/5274bfde-e611-498b-b4ee-2b574beb44bd.jpg",
    imageHint: "craft fair"
  },
  {
    title: "Handmade Goods",
    image: "https://i.postimg.cc/SKHVdCN5/83aa61bf-035a-487e-9901-2abda381c449.jpg",
    imageHint: "handmade goods"
  },
  {
    title: "Local Artisans",
    image: "https://i.postimg.cc/QMF0c0sQ/c23b892a-6b73-4448-abb5-cd5a2aa30045.jpg",
    imageHint: "local artisans"
  },
  {
    title: "Exhibition Booth",
    image: "https://i.postimg.cc/ZqXjHpKD/eabbeba6-62ca-420d-8781-66519150c688.jpg",
    imageHint: "exhibition booth"
  },
  {
    title: "Event Presentation",
    image: "https://i.postimg.cc/XvtxLd7x/f2195a7c-e88d-4777-a963-0ddce1ab477a.jpg",
    imageHint: "event presentation"
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
