import StorePageTemplate from '@/components/templates/store/store-front/store-page-template';
import { storeCategoryBySlugQueryOptions } from '@/hooks/store/use-store-categories';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/_layout/store/$slug')({
  loader: async ({ context, params }) => {
    // Prefetch category by slug
    await context.queryClient.prefetchQuery(
      storeCategoryBySlugQueryOptions(params.slug)
    );

    return {};
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <StorePageTemplate slug={slug} />;
}
