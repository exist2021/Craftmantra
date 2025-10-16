import { HandHeart, Leaf } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              Prelude - About the Company
            </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-lg/relaxed font-body text-center max-w-3xl mx-auto">
              Crafts Mantra was founded by Renu Jayaram in April 2018. She realized that talented, hardworking women creators often lacked a continually available marketplace to sell their products. They waited from fair to fair while products gathered dust. The company was born as a place where the talent of women and local artists could be discovered, honed, and channeled, giving small businesses an opportunity to reach potential customers. This is where Renu found her Ikigai—a journey, not a destination.
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Our Dual Vision</h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card/80 border">
                    <HandHeart className="w-12 h-12 text-accent" />
                    <div>
                        <h4 className="text-2xl font-bold font-headline text-accent/90">For the People</h4>
                        <p className="text-muted-foreground font-body mt-2">
                            To promote local artisans and empower women. We are currently connected with more than a hundred CoCreators, valuing their ideas and fostering product innovation. We also seek to employ people facing life challenges, having hired staff including an acid attack victim and individuals with vision challenges, epilepsy, and psychiatric conditions.
                        </p>
                    </div>
                </div>
                 <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-card/80 border">
                    <Leaf className="w-12 h-12 text-accent" />
                    <div>
                        <h4 className="text-2xl font-bold font-headline text-accent/90">For the Environment</h4>
                        <p className="text-muted-foreground font-body mt-2">
                            To reduce the carbon footprint by offering eco-friendly options. Our objective is to create gifting solutions using materials that are sourced locally and disintegrate naturally or by reusing sturdy materials, stretching their life and keeping them away from landfills.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
