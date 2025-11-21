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
                Rtn. PHF Renu Jayaram is a social entrepreneur with over 20 years of business experience, consistently driven by the belief that she was meant to be a job provider, not a job seeker. An art enthusiast at heart, she founded Craft Mantra in 2018 as a concept store and a platform to emPOWER women while creating opportunities for talented but unseen local artisans.
              </p>
              <p>
                Her impact extends beyond the brand through her various affiliations, including founding POWER — Platform of Women Entrepreneurs, and her active involvement in Rotary, the Udupi Chamber of Commerce and Industry, BNI, and various other forums. Across all her initiatives, Renu remains committed to using her experience and network for social good, supporting women, artisans, and small businesses.
              </p>
              <p>
                At its core, Craft Mantra is built on a philosophy where empathy, humanity, and kindness take precedence over numbers and profits. It is a space where product innovation thrives and ideas are valued. Renu’s success mantra is simple yet powerful: “Build relationships and business will follow.”
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
