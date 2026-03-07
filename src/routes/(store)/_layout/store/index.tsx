import StoreListingTemplates from '@/components/templates/store/store-front/store-listing-templates';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/_layout/store/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <StoreListingTemplates />;
}
