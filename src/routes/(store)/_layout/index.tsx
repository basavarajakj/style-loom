import { createFileRoute } from '@tanstack/react-router';

import Hero from '@/components/templates/store/homepage/hero';
import FeatureGrid from '@/components/templates/store/homepage/feature-grid';
import Collection from '@/components/templates/store/homepage/collection';
import CTABanner from '@/components/templates/store/homepage/cta-banner';

export const Route = createFileRoute('/(store)/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <FeatureGrid />
      <Collection />
      <CTABanner />
    </div>
  );
}
