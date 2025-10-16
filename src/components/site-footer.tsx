import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Collaborate with Crafts Mantra</h2>
          <p className="mt-4 text-muted-foreground md:text-lg/relaxed font-body">
            Whether you are looking for customized eco-friendly products or seeking a platform for your creations, we are ready to connect. We seek the support of individuals, corporates, organizations, and institutions for promoting our locally made, eco-friendly customized handcrafted products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <Logo />
            <p className="max-w-xs font-body text-center md:text-left">
              Vision: To create a sustainable world where every gift is not just creative but touches lives, empowers communities, promotes culture and nurtures the planet.
            </p>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-headline">Contact Details</h3>
            <ul className="space-y-2 font-body">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:craftsmantrastore@gmail.com" className="hover:text-accent transition-colors">
                  craftsmantrastore@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <div className="flex flex-col">
                  <a href="tel:6362571412" className="hover:text-accent transition-colors">6362571412</a>
                  <a href="tel:9880197440" className="hover:text-accent transition-colors">9880197440</a>
                </div>
              </li>
              <li className="font-body text-sm">Udupi, Karnataka, India</li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-headline">Connect with Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/20 pt-6 text-center text-sm text-muted-foreground font-body">
          <p className="font-bold">Renu Jayaram’s Success Mantra: Build Relationships and Business will follow!</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Crafts Mantra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
