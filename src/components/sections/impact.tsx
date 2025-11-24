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
import { cn } from '@/lib/utils';

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
  { title: "Events Image 1", image: "https://i.postimg.cc/Gpd0Sqsv/5f0cd811-c5f7-408e-93fd-21a36d11ecdc.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 2", image: "https://i.postimg.cc/W3c77HFN/12af999f-6c0f-4e1e-ae0f-b494f642eabc.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 3", image: "https://i.postimg.cc/D02d94c8/20edaab4-eda1-4d37-a560-dd95d74b8b06.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 4", image: "https://i.postimg.cc/tgx5WjT9/2b0b405b-ead6-402f-972c-48e5db15670e.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 5", image: "https://i.postimg.cc/15vJZBTG/2fc2c0be-e56c-46db-82b4-f6be4a99ea56.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 6", image: "https://i.postimg.cc/br3HpY6v/3a1f473e-2598-4abf-a157-ac77d14ae9f5.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 7", image: "https://i.postimg.cc/k4NvYvKN/3f3ec2ec-3f78-4709-8e65-1d5ce3431a03.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 9", image: "https://i.postimg.cc/yxVXM3yw/4e98e1f8-2883-4a61-ad03-41b107b475bd.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 10", image: "https://i.postimg.cc/Y9NzDzYV/54743744-656f-4a42-beb8-edd5789cb68a.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 11", image: "https://i.postimg.cc/hj81Z1T6/6a6612d4-f1ff-4d90-bcba-870306b275c4.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 12", image: "https://i.postimg.cc/tCq2fwrF/8432e7ed-095f-4011-b5af-3c19de610efc.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 13", image: "https://i.postimg.cc/cCsMptB9/85043572-fb62-4ebd-b928-c5c06cbaae07.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 14", image: "https://i.postimg.cc/Wz26Bq7T/8ed1979a-c12b-4a4d-97d2-779c7e38af8b.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 15", image: "https://i.postimg.cc/L5HBcgVR/b961a999-39c0-4860-a26f-995ad464fd0a.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 16", image: "https://i.postimg.cc/QC0khN6x/b9699b17-38ec-428a-adae-33fcf215a815.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 17", image: "https://i.postimg.cc/wj3FxJYx/c23fa55b-ad64-45fc-af48-905b7ed3bc25.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 18", image: "https://i.postimg.cc/yxvXs6fh/ca5d945e-0032-4239-b5ee-e5565ce4d9cc.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 19", image: "https://i.postimg.cc/tgx5WjT4/dd173c18-efcc-49f6-8a6c-3ad7794b56dc.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 20", image: "https://i.postimg.cc/wxhGnhgW/IMG-7369.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 21", image: "https://i.postimg.cc/fWj88Dv3/IMG-7373.jpg", imageHint: "event image", category: "Events" },
  { title: "Events Image 22", image: "https://i.postimg.cc/90JtCXxB/IMG-7483.jpg", imageHint: "event image", category: "Events" },
  { title: "Happy Clients Image 1", image: "https://i.postimg.cc/JnY908YF/065f5031-3775-44bc-a5aa-b16edd1370da.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 2", image: "https://i.postimg.cc/L5HBcgVR/b961a999-39c0-4860-a26f-995ad464fd0a.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 3", image: "https://i.postimg.cc/fWj88Dv3/IMG-7373.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 4", image: "https://i.postimg.cc/05FyH15t/31fcea1a-f5bc-4db3-aa2a-7fd63ab40072.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 5", image: "https://i.postimg.cc/SRBQXCtS/8e3b7dfa-c194-4c4d-8488-dbe290b8f20d.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 6", image: "https://i.postimg.cc/wMCxtLbv/b16c9974-9006-4c7d-867d-1221b5cfadd3.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "Happy Clients Image 7", image: "https://i.postimg.cc/Y0524Yy7/b995583a-1c18-47dd-8731-e46f1928a566.jpg", imageHint: "happy client", category: "Happy Clients" },
  { title: "CSR Image 2", image: "https://i.postimg.cc/7P3qXGck/265f829f-1728-4f2c-a861-47b345d929c4.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 3", image: "https://i.postimg.cc/PJjTTTLx/267bc678-c377-4f9d-a749-b034e6a06f4a.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 4", image: "https://i.postimg.cc/LsGmQz2L/3fadcf5f-2d9a-483c-accb-d9f11569b48d.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 5", image: "https://i.postimg.cc/HLFTvQd2/406e4000-84bc-4672-8836-f3b3470cc425.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 6", image: "https://i.postimg.cc/br98vWby/4c9f3eb8-ba5d-4a5c-bebb-cb1d1b54eefa.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 7", image: "https://i.postimg.cc/wBn94hgt/4fe92418-0b18-4704-9fba-e624a640fcd9.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 9", image: "https://i.postimg.cc/RhL90yfM/895ce9f2-0083-48ea-9e3b-24ca9eeb3e99.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 10", image: "https://i.postimg.cc/Kj2xxxKS/8c976782-4453-4cb6-983a-b1ff1da9a494.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 11", image: "https://i.postimg.cc/Ss8kBJxZ/9feb78c0-685f-4c0f-8256-3051bdedded0.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 12", image: "https://i.postimg.cc/T1JGPFmy/ad6068e2-838d-46a5-9685-1cba5febb132.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 13", image: "https://i.postimg.cc/0jsPPPzH/c567c43f-bd8c-4388-9c8f-b5a0b1279afa.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 14", image: "https://i.postimg.cc/05Y9ZM3R/c9bd24fa-1c56-48ef-a02d-78dadd7ac712.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 15", image: "https://i.postimg.cc/hjxckftT/d1d3fc82-7abf-4fae-bacc-07cef2abb600.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 16", image: "https://i.postimg.cc/Xqb444Zn/d44ccf7f-e993-4987-b762-a5984259c435.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 17", image: "https://i.postimg.cc/MHmxGNR9/d4bdfa44-626d-4901-a500-f832fba1ed21.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 18", image: "https://i.postimg.cc/FFyhGdqt/ef5669c5-1c4a-4cea-8148-29e1c8b86780.jpg", imageHint: "csr event", category: "CSR" },
  { title: "CSR Image 19", image: "https://i.postimg.cc/0QmPTbyV/f892a85a-bb76-4442-bc72-50e5770d5116.jpg", imageHint: "csr event", category: "CSR" },
];

const allCategories = ["All", ...Array.from(new Set(allImages.map(img => img.category)))];

function GalleryImage({ image }: { image: { title: string; image: string, imageHint: string } }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <Image
        alt={image.title}
        className="aspect-[3/4] w-full object-cover"
        height={600}
        src={image.image}
        width={450}
        data-ai-hint={image.imageHint}
      />
    </div>
  );
}

export function ImpactSection() {
  const [activeTab, setActiveTab] = useState(allCategories[0]);

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
            Our Work in Pictures
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            Browse through our gallery to see our store, events, star showcases, CSR activities, and happy clients.
          </p>
        </div>

        <div className="w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 h-auto flex-wrap">
              {allCategories.map((category) => (
                <TabsTrigger key={category} value={category} className="font-headline text-md md:text-lg whitespace-normal">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {allCategories.map((category) => (
              <TabsContent key={category} value={category} forceMount={true} className={cn(activeTab === category ? 'block' : 'hidden')}>
                 <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full mt-8"
                >
                  <CarouselContent>
                    {(category === "All" ? allImages : allImages.filter(image => image.category === category)).map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2">
                            <GalleryImage image={image} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
              </TabsContent>
            ))}
          </Tabs>
        </div>

      </div>
    </section>
  );
}
