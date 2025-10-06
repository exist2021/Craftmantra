import { Button } from "@/components/ui/button";
import { HandHeart, Leaf, Users } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                Touching Lives While Going Green
              </h1>
              <p className="max-w-[600px] text-foreground md:text-xl">
                Crafts Mantra is a for-profit social enterprise from Udupi, creating beautiful eco-friendly products. Founded in April 2018, we provide a platform for hidden creative talents, empowering local artisans and women.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Order Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#products">View Products</Link>
              </Button>
            </div>
          </div>
           <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg bg-card/80">
                <Leaf className="w-10 h-10 mt-1 text-accent" />
                <div>
                    <h3 className="text-lg font-bold font-headline text-accent/90">For the Environment</h3>
                    <p className="text-sm text-muted-foreground">We use locally sourced, naturally disintegrating, or reused materials to reduce our carbon footprint.</p>
                </div>
            </div>
             <div className="flex items-start space-x-4 p-4 rounded-lg bg-card/80">
                <HandHeart className="w-10 h-10 mt-1 text-accent" />
                <div>
                    <h3 className="text-lg font-bold font-headline text-accent/90">For the People</h3>
                    <p className="text-sm text-muted-foreground">Our mission is to empower women and local artisans, providing them a platform to showcase their incredible skills.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
