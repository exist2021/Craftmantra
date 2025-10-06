import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo />
            <p className="max-w-xs">
              Promoting local artisans and sustainable living through handcrafted eco-friendly gifts. Based in Udupi, Karnataka.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-headline">Contact Us</h3>
            <ul className="space-y-2">
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
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-headline">Follow Us</h3>
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
        <div className="mt-8 border-t border-muted-foreground/20 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Crafts Mantra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
