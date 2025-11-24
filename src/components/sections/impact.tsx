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
  },
  { title: "Star Showcase Image 1", image: "https://i.postimg.cc/JnY908YF/065f5031-3775-44bc-a5aa-b16edd1370da.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 2", image: "https://i.postimg.cc/8cq9dHS2/0a567a7e-9e8f-4af7-a5cb-b395164b0b2b.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 3", image: "https://i.postimg.cc/rwG3WxYh/10fddfb0-be12-4839-a84a-4bbcd42870bc.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 4", image: "https://i.postimg.cc/FHb8c3nG/17d70411-c2ef-4ed1-9077-810b3ee6aa95.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 5", image: "https://i.postimg.cc/VNmyHDbj/1d62e8eb-0759-42a4-b194-cdf2d142046c.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 6", image: "https://i.postimg.cc/L8kwfL0J/23f5d6dd-79f0-4ba1-b9a4-0c85cda1981e.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 7", image: "https://i.postimg.cc/BnfRXMpd/25b4ffd6-9de1-4b9b-b7bc-4b5d8c4a333d.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 8", image: "https://i.postimg.cc/tCxLqL3L/25f0073a-6d15-462b-b43c-c8ee4f09c124.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 9", image: "https://i.postimg.cc/L61r9rkS/2ac929a5-5237-440d-89fb-454e7ec1c210.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 10", image: "https://i.postimg.cc/zv96wjrw/4cc79356-cef1-48db-9c2f-1f4d363c50d5.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 11", image: "https://i.postimg.cc/4xRjmBwg/5c7a6873-4c4e-4bb1-990d-bf4f7ac413a7.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 12", image: "https://i.postimg.cc/Gpd0Sqsv/5f0cd811-c5f7-408e-93fd-21a36d11ecdc.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 13", image: "https://i.postimg.cc/nV5ytHD1/61ea06bd-620d-46ad-b4a5-2a59df9df459.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 14", image: "https://i.postimg.cc/Jh1gQ09P/6797572a-923c-43b8-8630-d1d3a9d262f8.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 15", image: "https://i.postimg.cc/hGSw0vH0/6de79fb6-fab2-4d8e-9e3a-aaa8a847d641.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 16", image: "https://i.postimg.cc/BQKdSdTw/7bb791dd-986f-46c2-bd32-07cd4fbcb0be.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 17", image: "https://i.postimg.cc/cHkVCWkm/8bf05f60-ce82-4bd3-af42-d8f48261486d.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 18", image: "https://i.postimg.cc/3NPVjBTy/906ea235-c942-4366-b29e-c3496ef4989f.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 19", image: "https://i.postimg.cc/Zn12PcS6/9cb2926e-dccd-4486-bc7e-75f4f5b38f26.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 20", image: "https://i.postimg.cc/VvS2bh3J/a01f901d-1a44-40c9-97bf-a199451aa8c8.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 21", image: "https://i.postimg.cc/4xvqtVF9/a6b2d971-27d8-4188-928f-67418b6325e0.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 22", image: "https://i.postimg.cc/FHb8c3nj/ad8f03e2-1bf9-4daa-9f5c-e95489a9b58f.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 23", image: "https://i.postimg.cc/5tbcknFn/b6498816-af53-4332-a51d-51ae12b7ee0e.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 24", image: "https://i.postimg.cc/fR7pXmgP/ba9a4917-de24-4671-ba4b-daaad88d5617.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 25", image: "https://i.postimg.cc/qRvPpqw1/c714f3c5-7438-4400-b4fd-19363e37ba9a.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 26", image: "https://i.postimg.cc/VLC3f3qF/e4e05a4a-9f33-49e8-a045-0c4b4a30183a.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 27", image: "https://i.postimg.cc/PrwBXBWz/e8739412-137c-4c28-ba1d-5333096d4034.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 28", image: "https://i.postimg.cc/fRQ1JB5w/ee975fc9-5247-471f-9878-db6d85571f5d.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 29", image: "https://i.postimg.cc/T3jFmgHt/f3dc0121-8eea-4429-961e-c79a6e682bda.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 30", image: "https://i.postimg.cc/bJw7qrg3/f9aa66ac-03af-40c7-af63-e6cdcd87ec79.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 31", image: "https://i.postimg.cc/W1mCrgf0/ffc7d4ba-2020-4321-8c7b-cc114a78dd9d.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 32", image: "https://i.postimg.cc/XvkWVTbq/IMG-7368.jpg", imageHint: "star showcase", category: "Star Showcase" },
  { title: "Star Showcase Image 33", image: "https://i.postimg.cc/s2sF0wZK/IMG-7372.jpg", imageHint: "star showcase", category: "Star Showcase" },
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
          <TabsList className="grid h-auto grid-cols-3 sm:grid-cols-6">
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
