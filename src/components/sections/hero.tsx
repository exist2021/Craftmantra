import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none font-headline text-primary">
              Touching lives while going green
            </h1>
            <p className="max-w-[800px] mx-auto text-foreground md:text-xl font-body">
              Welcome to Crafts Mantra, a for-profit social enterprise with a dual focus: People and the Environment. We offer customized eco-friendly gifting solutions, aiming to reduce the carbon footprint by providing alternatives to market waste. Our store is a joyful, happy place located in the coastal town of Udupi. We invite you to explore thoughtful, sustainable products that make Mother Earth breathe easier.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6">
            <Button asChild size="lg">
              <Link href="#products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
