import CategoryDetailsTemplate from '@/components/templates/store/categories/category-details-template';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(store)/_layout/category/$slug')({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  return <CategoryDetailsTemplate slug={slug}/>;
}
