import Image from 'next/image';

const events = [
  {
    title: "Exhibitions & Fairs",
    description: "Showcasing our eco-friendly products at various prestigious events.",
    image: "https://picsum.photos/seed/exhibition/600/400",
    imageHint: "exhibition stall"
  },
  {
    title: "Store Opening",
    description: "The launch of our retail space to bring sustainable products directly to you.",
    image: "https://picsum.photos/seed/storeopening/600/400",
    imageHint: "retail store interior"
  },
  {
    title: "Artisan Workshops",
    description: "Empowering local creators with skill-building and innovation sessions.",
    image: "https://picsum.photos/seed/workshop/600/400",
    imageHint: "pottery making"
  },
  {
    title: "Corporate Collaborations",
    description: "Partnering with businesses to provide sustainable corporate gifting solutions.",
    image: "https://picsum.photos/seed/corporate/600/400",
    imageHint: "corporate meeting"
  },
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div key={event.title} className="group relative flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={event.imageHint}
              />
              <div className="flex flex-1 flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-bold text-primary-foreground font-headline">{event.title}</h3>
                <p className="text-sm text-primary-foreground/80 font-body">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
