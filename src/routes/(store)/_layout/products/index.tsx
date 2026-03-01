import ProductListingTemplate from '@/components/templates/store/product-page/product-listing-template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/_layout/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductListingTemplate />;
}
