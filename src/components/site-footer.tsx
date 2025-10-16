
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import Link from "next/link";

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


export function SiteFooter() {
  const phoneNumber = "916362571412";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Collaborate with Crafts Mantra</h2>
          <p className="mt-4 text-muted-foreground md:text-lg/relaxed font-body">
            Whether you are looking for customized eco-friendly products or seeking a platform for your creations, we are ready to connect. We seek the support of individuals, corporates, organizations, and institutions for promoting our locally made, eco-friendly customized handcrafted products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="flex flex-col space-y-4 items-center md:items-start">
            <Logo />
             <div className="space-y-4 text-center md:text-left">
                <p className="font-body text-sm">
                  <span className="font-bold text-primary/80">Vision:</span> To create a sustainable world where every gift is not just creative but touches lives, empowers communities, promotes culture and nurtures the planet.
                </p>
                 <p className="font-body text-sm">
                  <span className="font-bold text-primary/80">Mission:</span> To redefine the gifting culture by offering meaningful, eco-friendly products that reflect care—for people, for communities, and for the environment.
                </p>
            </div>
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
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <a href="https://share.google/EWCf5cJ6me4h7PRSn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Crafts Mantra Store, Udupi, Karnataka, India
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-headline">Connect with Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link href="https://www.instagram.com/craftmantra.gifting?igsh=MWIzZHh6Y2diNDkwbQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon className="h-6 w-6 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline text-primary text-center mb-6">Our Location</h3>
            <div className="aspect-video w-full max-w-4xl mx-auto bg-muted rounded-lg overflow-hidden border border-border shadow-lg">
              {/*
                Please provide the Google Maps embed code (iframe).
                1. Go to https://share.google/EWCf5cJ6me4h7PRSn
                2. Click "Share"
                3. Click "Embed a map"
                4. Copy the HTML and paste it here, replacing this comment block.
              */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Google Map will be embedded here.
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
