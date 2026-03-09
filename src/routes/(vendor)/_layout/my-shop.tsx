import { MyShopsPageSkeleton } from '@/components/base/vendors/skeleton/shop-card-skeleton';
import MyShopsTemplate from '@/components/templates/vendor/my-shops-template';
import { mockShops } from '@/data/my-shop';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(vendor)/_layout/my-shop')({
  component: MyShopPage,
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {};
  },
  pendingComponent: MyShopsPageSkeleton,
});

function MyShopPage() {
  const handleCreateShop = () => {
    console.log('Create new shop');
  };
  return (
    <MyShopsTemplate
      shops={mockShops}
      onCreateShop={handleCreateShop}
    />
  );
}
