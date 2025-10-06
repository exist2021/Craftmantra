import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, GraduationCap, Users } from "lucide-react";

const collaborations = [
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    name: "Corporate Gifting",
    description: "Partnered with leading tech firms for their annual sustainable gifting initiatives.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    name: "Educational Institutions",
    description: "Provided eco-friendly conference kits for university events and seminars.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    name: "Community Events",
    description: "Supplied local Udupi events with handcrafted decor and mementos.",
  },
];

export function Collaborations() {
  return (
    <section id="collaborations" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">Our Impact & Collaborations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
              We are proud to have worked with a diverse range of clients and partners who share our commitment to sustainability and community empowerment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
          {collaborations.map((item) => (
            <Card key={item.name} className="flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                {item.icon}
                <CardTitle className="mt-4 font-headline">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-body">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
