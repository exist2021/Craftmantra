import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/sections/hero';
import { ProductGallery } from '@/components/sections/product-gallery';
import { ImpactSection } from '@/components/sections/impact';
import { AboutSection } from '@/components/sections/about';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { FounderSection } from '@/components/sections/founder';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FounderSection />
        <ProductGallery />
        <ImpactSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
