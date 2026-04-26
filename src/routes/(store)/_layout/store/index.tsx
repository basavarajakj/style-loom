import StoreListingTemplates from '@/components/templates/store/store-front/store-listing-templates';
import { storeShopsInfiniteQueryOptions } from '@/hooks/store/use-store-shops';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/_layout/store/')({
  loader: async ({ context }) => {
    await context.queryClient.prefetchInfiniteQuery(
      storeShopsInfiniteQueryOptions({
        limit: 12,
        sortBy: 'rating',
        sortDirection: 'desc',
      })
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <StoreListingTemplates />;
}
