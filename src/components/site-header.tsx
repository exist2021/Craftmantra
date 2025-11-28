"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-col">
          <Logo />
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant="outline" className="text-xs">GSTIN</Badge>
            <span className="font-mono text-xs">29AGZPS7602K1ZD</span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link key={label} href={href} className="transition-colors text-foreground/60 hover:text-foreground/80 font-headline">
                {label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation menu for mobile devices</SheetDescription>
                <div className="p-4">
                  <Logo />
                   <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="outline" className="text-xs">GSTIN</Badge>
                    <span className="font-mono text-xs">29AGZPS7602K1ZD</span>
                  </div>
                </div>
                <nav className="grid gap-6 text-lg font-medium p-4">
                {navLinks.map(({ href, label }) => (
                  <Link 
                    key={label} 
                    href={href} 
                    className="transition-colors text-foreground/60 hover:text-foreground/80 font-headline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
