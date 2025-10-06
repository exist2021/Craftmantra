import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/sections/hero';
import { ProductGallery } from '@/components/sections/product-gallery';
import { PartnerCallout } from '@/components/sections/partner-callout';
import { Collaborations } from '@/components/sections/collaborations';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProductGallery />
        <PartnerCallout />
        <Collaborations />
      </main>
      <SiteFooter />
    </div>
  );
}
