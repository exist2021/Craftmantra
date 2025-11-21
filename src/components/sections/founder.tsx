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
                Rtn PHF Renu Jayaram is a Social Entrepreneur with over 20 years of business experience, always driven to be a job provider rather than a job seeker. As an art lover, she founded Craft Mantra in 2018 as a concept store and a platform to pursue her dream of emPOWERing women and giving opportunities to hidden local artisans.
              </p>
              <p>
                Her work extends through her various affiliations, including founding POWER—Platform of Women Entrepreneurs—and her role as a Rotarian, all dedicated to utilizing her talents for social good and providing support for women, artisans, and small businesses. Craft Mantra’s offerings include eco-bags, accessories, decor, and apparel.
              </p>
              <p>
                Craft Mantra is built on a philosophy where empathy, humanity, and kindness are prioritized over numbers and profits. It is a place where product innovation is key, and ideas are valued. Renu's "success mantra" is simple: "build relationships and business will follow".
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
