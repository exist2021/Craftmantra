"use client";

import Image from "next/image";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);


function ProductCard({ product }: { product: ImagePlaceholder }) {
  const phoneNumber = "916362571412";
  const message = `I visited your website and want to inquire about your product: ${product.name}.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Carousel className="w-full">
        <CarouselContent>
          {product.imageUrls.map((url, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/4]">
                <Image
                  src={url}
                  alt={`${product.name} image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={product.imageHint}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {product.imageUrls.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>

      <Badge variant="secondary" className="absolute top-2 right-2 z-10">{product.category}</Badge>
      
      <CardHeader>
        <CardTitle className="font-headline">{product.name}</CardTitle>
        <CardDescription className="font-body">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter className="flex justify-between items-center bg-secondary/30 p-4">
        <p className="text-sm font-semibold text-muted-foreground font-body">{product.price}</p>
        <Button asChild variant="link" className="text-primary hover:text-accent p-0 h-auto">
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <WhatsAppIcon className="h-4 w-4 text-green-600" />
            <span>Inquire</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ProductGallery() {
  const allProducts = PlaceHolderImages;

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Products: Handcrafted, Creative, Sustainable, Unique</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              We showcase bags, folders, mementos, earthen cookware, home décor, apparels, accessories, trinkets, and trivia displayed on upcycled shelves. Our product range is made-to-order and caters to personal or professional event needs.
            </p>
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center bg-secondary/50 p-8 rounded-lg">
           <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline text-primary">#CraftCares</h3>
           <p className="text-muted-foreground font-body text-sm tracking-wide">A social reach initiative by Craft Mantra</p>
           <p className="max-w-[700px] mx-auto mt-4 text-muted-foreground md:text-lg/relaxed font-body">
            Our "Craft Cares" initiative includes programs like Autism Inclusivity, providing skill training for young artists with autism. We host "Sambrama Shanivara" (Bagless Day), a monthly awareness program for government school students, and collaborate with organizations like Rotary Manipal and POWER for skill-building and outreach. We also provide marketing support for products made by destitute women from the State home, Manipal, Udupi.
           </p>
           <Button asChild className="mt-6">
            <Link href="#contact">Collaborate With Us</Link>
           </Button>
        </div>

      </div>
    </section>
  );
}
