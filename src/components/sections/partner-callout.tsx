import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PartnerCallout() {
  return (
    <section id="partners" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Join Our Movement</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Are you an artisan with a creative flair? Or a supporter of locally-made, handcrafted products? We invite you to join our supply chain or help us promote our cause.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Join as an Artisan</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Collaborate With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
