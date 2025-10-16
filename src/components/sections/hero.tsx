"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HandHeart, Leaf } from "lucide-react";

export function HeroSection() {
  const vision = "To create a sustainable world where every gift is not just creative but touches lives, empowers communities, promotes culture and nurtures the planet.";
  const mission = "To redefine the gifting culture by offering meaningful, eco-friendly products that reflect care—for people, for communities, and for the environment.";

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
          <div className="w-full max-w-2xl pt-8">
            <Tabs defaultValue="vision" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="vision" className="font-headline text-lg">Vision</TabsTrigger>
                <TabsTrigger value="mission" className="font-headline text-lg">Mission</TabsTrigger>
              </TabsList>
              <TabsContent value="vision">
                <div className="p-6 pt-8 bg-background/50 rounded-b-lg rounded-tr-lg text-center space-y-4">
                  <HandHeart className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-lg font-body text-foreground/80">{vision}</p>
                </div>
              </TabsContent>
              <TabsContent value="mission">
                 <div className="p-6 pt-8 bg-background/50 rounded-b-lg rounded-tl-lg text-center space-y-4">
                  <Leaf className="w-12 h-12 text-accent mx-auto" />
                  <p className="text-lg font-body text-foreground/80">{mission}</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
