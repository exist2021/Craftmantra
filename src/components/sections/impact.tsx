"use client";

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';

const allImages = [
  {
    title: "Founder at an Event",
    image: "https://i.postimg.cc/65SXk09T/IMG-7021.jpg",
    imageHint: "founder at event",
    category: "Events"
  },
  {
    title: "Founder Showcasing Products",
    image: "https://i.postimg.cc/qB8gdwQY/IMG-7035.webp",
    imageHint: "founder with products",
    category: "Exhibition"
  },
  {
    title: "Exhibition",
    image: "https://i.postimg.cc/FKmDDDPZ/IMG-7036.webp",
    imageHint: "exhibition stall",
    category: "Exhibition"
  },
  {
    title: "With Anil Kumble",
    image: "https://i.postimg.cc/Nfn06n0t/IMG-7037.webp",
    imageHint: "Anil Kumble",
    category: "Star Showcase"
  },
  {
    title: "Event Showcase",
    image: "https://i.postimg.cc/4yd4HvG9/IMG-7039.jpg",
    imageHint: "event showcase",
    category: "Exhibition"
  },
  {
    title: "Community Event",
    image: "https://i.postimg.cc/PJxfvbHL/IMG-7040.jpg",
    imageHint: "community event",
    category: "CSR"
  },
  {
    title: "Artisan Market",
    image: "https://i.postimg.cc/C1JLKP30/IMG-7042.jpg",
    imageHint: "artisan market",
    category: "Exhibition"
  },
  {
    title: "Exhibition View",
    image: "https://i.postimg.cc/QtSxM42G/IMG-7044.jpg",
    imageHint: "exhibition view",
    category: "Exhibition"
  },
  {
    title: "Event Stall",
    image: "https://i.postimg.cc/QtjdhGnq/IMG-7045.jpg",
    imageHint: "event stall",
    category: "Exhibition"
  },
  {
    title: "Showcasing Handicrafts",
    image: "https://i.postimg.cc/vBGZbFSN/IMG-7046.jpg",
    imageHint: "handicrafts showcase",
    category: "Exhibition"
  },
  {
    title: "Craft Mantra Stall",
    image: "https://i.postimg.cc/76qZw8QS/IMG-7047.jpg",
    imageHint: "craft mantra stall",
    category: "Exhibition"
  },
  {
    title: "With a Visitor",
    image: "https://i.postimg.cc/fLMRDngy/IMG-7048.jpg",
    imageHint: "visitor interaction",
    category: "Events"
  },
  {
    title: "Event Interaction",
    image: "https://i.postimg.cc/6QJQbGVw/IMG-7050.jpg",
    imageHint: "event interaction",
    category: "Events"
  },
  {
    title: "Event Showcase",
    image: "https://i.postimg.cc/Gp6zKGh5/049a3c4c-f338-4bcd-811a-684c3c5d44e6.jpg",
    imageHint: "event showcase",
    category: "Events"
  },
  {
    title: "Community Interaction",
    image: "https://i.postimg.cc/vm4353M7/1eebaf3c-a40a-4cd7-9559-999078fac250.jpg",
    imageHint: "community interaction",
    category: "CSR"
  },
  {
    title: "Product Workshop",
    image: "https://i.postimg.cc/CK9J7kx0/2f30f753-0508-4f12-b20d-084cf4997293.jpg",
    imageHint: "product workshop",
    category: "CSR"
  },
  {
    title: "Craft Fair Display",
    image: "https://i.postimg.cc/ZqXjHpKV/5274bfde-e611-498b-b4ee-2b574beb44bd.jpg",
    imageHint: "craft fair",
    category: "Exhibition"
  },
  {
    title: "Local Artisans",
    image: "https://i.postimg.cc/QMF0c0sQ/c23b892a-6b73-4448-abb5-cd5a2aa30045.jpg",
    imageHint: "local artisans",
    category: "CSR"
  },
  {
    title: "Exhibition Booth",
    image: "https://i.postimg.cc/ZqXjHpKD/eabbeba6-62ca-420d-8781-66519150c688.jpg",
    imageHint: "exhibition booth",
    category: "Exhibition"
  },
  {
    title: "Event Presentation",
    image: "https://i.postimg.cc/XvtxLd7x/f2195a7c-e88d-4777-a963-0ddce1ab477a.jpg",
    imageHint: "event presentation",
    category: "Events"
  },
  {
    title: "Store Display",
    image: "https://i.postimg.cc/xCh9RwPd/05c05abc-4ed6-4964-8159-3b0bb7fcc737.jpg",
    imageHint: "store display",
    category: "Store"
  },
  {
    title: "Store Products",
    image: "https://i.postimg.cc/7LBHCGJD/15a821f6-72a9-4d60-b029-ca4a1a73d5a0.jpg",
    imageHint: "store products",
    category: "Store"
  },
  {
    title: "Store Interior",
    image: "https://i.postimg.cc/nzgnky12/22e0ef08-dcc6-4062-830a-12d145fe51d4.jpg",
    imageHint: "store interior",
    category: "Store"
  },
  {
    title: "Craft Display",
    image: "https://i.postimg.cc/zfdzLbb7/2971046f-a116-426f-8299-713f89fe81d4.jpg",
    imageHint: "craft display",
    category: "Store"
  },
  {
    title: "Product Shelves",
    image: "https://i.postimg.cc/P5QrjFtN/3a9a76f1-893a-4ca9-8f2e-2fc1d64118d3.jpg",
    imageHint: "product shelves",
    category: "Store"
  },
  {
    title: "Handicrafts",
    image: "https://i.postimg.cc/prjR1sGN/4c0e4fd7-9eb1-418f-bb5b-043a0c496a7f.jpg",
    imageHint: "handicrafts",
    category: "Store"
  },
  {
    title: "Store Items",
    image: "https://i.postimg.cc/KY9GKkk5/5e53cd42-6e2c-4c9d-b192-6ad51592ca1a.jpg",
    imageHint: "store items",
    category: "Store"
  },
  {
    title: "Storefront Display",
    image: "https://i.postimg.cc/sxWs0Tnk/5e855e7e-71de-473b-88a9-8539cd881a13.jpg",
    imageHint: "storefront display",
    category: "Store"
  },
  {
    title: "Decor Items",
    image: "https://i.postimg.cc/MTNzDCYV/676bc629-8c44-4c35-afd6-9d3bc93db6ea.jpg",
    imageHint: "decor items",
    category: "Store"
  },
  {
    title: "Store Goods",
    image: "https://i.postimg.cc/mDtb7LCK/6c565066-f5a3-41e3-a8c9-8c8c95222ff5.jpg",
    imageHint: "store goods",
    category: "Store"
  },
  {
    title: "Handmade Products",
    image: "https://i.postimg.cc/cC305FDh/996a5de9-4010-436a-bd2b-f0075aa80020.jpg",
    imageHint: "handmade products",
    category: "Store"
  },
  {
    title: "Crafted Goods",
    image: "https://i.postimg.cc/mDJTwvSX/bbe477cb-1a36-409b-9e77-a1419c394e43.jpg",
    imageHint: "crafted goods",
    category: "Store"
  },
  {
    title: "Store Merchandise",
    image: "https://i.postimg.cc/BvhS8LLN/bdf11f61-6fa8-4f38-a26a-6107be24d921.jpg",
    imageHint: "store merchandise",
    category: "Store"
  },
  {
    title: "Artisanal Products",
    image: "https://i.postimg.cc/xdsfkJJy/c2959336-a662-4c91-a51d-12c2975292bf.jpg",
    imageHint: "artisanal products",
    category: "Store"
  },
  {
    title: "Local Crafts",
    image: "https://i.postimg.cc/ydkV01cw/f74f2270-1aed-44ae-b154-5d96d05e01b9.jpg",
    imageHint: "local crafts",
    category: "Store"
  }
];

const categories = ["All", "Store", "CSR", "Exhibition", "Events", "Star Showcase"];

export function ImpactSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = activeTab === "All"
    ? allImages
    : allImages.filter((image) => image.category === activeTab);
    
  if (activeTab === 'Store') {
    filteredImages.reverse();
  }

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              See Craft Mantra in action.
            </p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-lg mx-auto mb-8">
          <TabsList className="grid grid-cols-6">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {filteredImages.map((event, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 group">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden rounded-lg">
                       <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={event.imageHint}
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {filteredImages.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
}
