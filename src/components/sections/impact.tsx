import Image from 'next/image';

const events = [
  {
    title: "Expansion to B2C",
    description: "After initially focusing on the B2B segment, Crafts Mantra expanded in 2021 by opening a retail shop to cater directly to individual customers.",
    image: "https://picsum.photos/seed/shop/600/400",
    imageHint: "retail store"
  },
  {
    title: "Exhibitions & Events",
    description: "We have actively participated in various prestigious events and exhibitions in Udupi, Mangalore, and Bangalore, showcasing our unique products.",
    image: "https://picsum.photos/seed/event/600/400",
    imageHint: "exhibition stall"
  },
  {
    title: "Global & National Reach",
    description: "Our products have found homes with not only national but also international clients, spreading the message of sustainability across borders.",
    image: "https://picsum.photos/seed/global/600/400",
    imageHint: "world map"
  },
    {
    title: "COVID-19 Innovation",
    description: "During the lockdown, we adapted by creating new essential products like masks and sanitization stations, while dedicating time to skill building and innovation.",
    image: "https://picsum.photos/seed/innovation/600/400",
    imageHint: "face mask"
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Journey & Reach</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              From a B2B focus to a retail presence, our journey has been one of growth, adaptation, and expanding impact.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {events.map((event) => (
            <div key={event.title} className="grid gap-4 md:grid-cols-2 items-center">
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg w-full aspect-video"
                data-ai-hint={event.imageHint}
              />
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline">{event.title}</h3>
                <p className="text-muted-foreground font-body">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
