export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
              About the Company
            </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-lg/relaxed font-body text-center max-w-3xl mx-auto">
              Crafts Mantra was founded by Renu Jayaram in April 2018. She realized that talented, hardworking women creators often lacked a continually available marketplace to sell their products. They waited from fair to fair while products gathered dust. The company was born as a place where the talent of women and local artists could be discovered, honed, and channeled, giving small businesses an opportunity to reach potential customers. This is where Renu found her Ikigai—a journey, not a destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
