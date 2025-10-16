import Image from "next/image";

export function FounderSection() {
  return (
    <section id="founder" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
              About the Founder
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed font-body">
              Renu Jayaram grew up with an entrepreneurial spirit, encouraged by her father to be a provider of jobs rather than a seeker. After contributing to a family business for about twenty years, the idea for Crafts Mantra started brewing after she organized a marketing fair for women entrepreneurs.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/kG78Kpwk/IMG-7034.webp"
              alt="Renu Jayaram, Founder of Crafts Mantra"
              width={600}
              height={600}
              className="rounded-lg object-cover shadow-xl aspect-square"
              data-ai-hint="founder portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
