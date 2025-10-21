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
            <div className="space-y-4 text-muted-foreground md:text-lg/relaxed font-body">
              <p>
                Rtn PHF Renu Jayaram is a dedicated Social Entrepreneur with over two decades of business experience, who always aspired to be a job provider. As an art lover, she realized this dream in 2018 by founding Craft Mantra. This concept store was established to create a vital platform for empowering women and giving opportunities to hidden local artisans.
              </p>
              <p>
                Renu's vision for Craft Mantra is centered on business with a conscience: prioritizing people and ethics over just numbers and profits, and fostering a culture of empathy, humanity, and kindness. Her guiding principle for success is to "build relationships and business will follow".
              </p>
               <p>
                Craft Mantra, which offers products like eco-bags, decor, accessories, and apparels, serves as a market for women, local artisans, and small businesses. Renu is deeply committed to this mission, which she also advances through her role as a Rotarian and as the Founder President of POWER—Platform of Women Entrepreneurs. Her extensive background, including managing partner experience at Jaydev Group and her entrepreneurial ventures, informs her dedication to innovative product solutions. Through Craft Mantra, Renu continues to be instrumental in creating meaningful opportunities and supporting community-focused enterprise.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/kG78Kpwk/IMG-7034.webp"
              alt="Renu Jayaram, Founder of Craft Mantra"
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
