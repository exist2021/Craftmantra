"use client";

import Image from "next/image";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

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
      <div className="relative aspect-[3/4]">
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
  const categories = ["All", ...Array.from(new Set(allProducts.map((p) => p.category)))];
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? allProducts
    : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              Explore our range of eco-friendly and handcrafted items. All products can be customized for bulk and corporate orders.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-body"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
