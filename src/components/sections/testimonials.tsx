import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const clients = [
    { name: "Client Logo 1", image: "https://picsum.photos/seed/logo1/200/100", imageHint: "corporate logo" },
    { name: "Client Logo 2", image: "https://picsum.photos/seed/logo2/200/100", imageHint: "corporate logo" },
    { name: "Client Logo 3", image: "https://picsum.photos/seed/logo3/200/100", imageHint: "corporate logo" },
    { name: "Client Logo 4", image: "https://picsum.photos/seed/logo4/200/100", imageHint: "corporate logo" },
    { name: "Client Logo 5", image: "https://picsum.photos/seed/logo5/200/100", imageHint: "corporate logo" },
    { name: "Client Logo 6", image: "https://picsum.photos/seed/logo6/200/100", imageHint: "corporate logo" },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Building Relationships. Building Business.</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Our success mantra is simple: Build Relationships and Business will follow! Crafts Mantra is first a business with a heart, where people and ethics count more than numbers or profits. The list of our clients reads like a "who’s who" list. We have produced in bulk for institutions, organizations, and corporates.
            </p>
          </div>
        </div>
        <div className="mt-12">
            <p className="text-center font-bold text-lg font-headline text-muted-foreground mb-8">A Few of Our Valued Clients</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
                {clients.map((client) => (
                    <div key={client.name} className="flex justify-center">
                         <Image 
                            src={client.image}
                            alt={client.name}
                            width={200}
                            height={100}
                            className="object-contain grayscale hover:grayscale-0 transition-all"
                            data-ai-hint={client.imageHint}
                         />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
