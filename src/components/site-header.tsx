"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);


  return (
    <Collapsible
      asChild
      open={isMobileMenuOpen}
      onOpenChange={setIsMobileMenuOpen}
    >
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
                <Link
                  key={label}
                  href={href}
                  className="transition-colors text-foreground/60 hover:text-foreground/80 font-headline"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </div>
        <CollapsibleContent className="md:hidden">
          <div
            className={cn(
              "fixed inset-0 top-20 z-40 bg-background/80 backdrop-blur-lg",
              "animate-in fade-in-20 slide-in-from-top-5"
            )}
          >
            <nav className="grid gap-6 text-lg font-medium p-6 pt-12">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="transition-colors text-foreground hover:text-foreground/80 font-headline text-center text-2xl"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </CollapsibleContent>
      </header>
    </Collapsible>
  );
}
