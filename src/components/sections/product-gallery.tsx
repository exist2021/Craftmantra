import Image from "next/image";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

function ProductCard({ product }: { product: ImagePlaceholder }) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.imageUrl}
          alt={product.description}
          fill
          className="object-cover"
          data-ai-hint={product.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline">{product.name}</CardTitle>
        <CardDescription className="font-body">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter className="flex justify-between items-center bg-secondary/30 p-4">
        <p className="text-sm font-semibold text-muted-foreground font-body">{product.price}</p>
        <Button asChild variant="link" className="text-primary hover:text-accent p-0 h-auto">
          <Link href="#contact">Inquire</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductGallery() {
  const products = PlaceHolderImages;

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Explore our range of eco-friendly and handcrafted items. All products can be customized for bulk and corporate orders.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
