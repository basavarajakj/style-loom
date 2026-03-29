import { MyShopsPageSkeleton } from '@/components/base/vendors/skeleton/shop-card-skeleton';
import { AddShopDialog } from '@/components/containers/shared/shops/add-shop-dialog';
import MyShopsTemplate from '@/components/templates/vendor/my-shops-template';
import { useShops, vendorShopsQueryOptions } from '@/hooks/vendors/use-shops';
import type { ShopFormValues } from '@/types/shop-types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/(vendor)/_layout/my-shop')({
  component: MyShopPage,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(vendorShopsQueryOptions());
    return {};
  },
  pendingComponent: MyShopsPageSkeleton,
});

function MyShopPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { createShop, isCreating, shopQueryOptions } = useShops();

  // Fetch shops data
  const { data } = useSuspenseQuery(vendorShopsQueryOptions());
  const shops = data.shops ?? [];
  const currentVendorId = data?.vendorId;

  const transformedShops = shops.map((shop) => ({
    id: shop.id,
    vendorId: shop.vendorId,
    slug: shop.slug,
    name: shop.name,
    description: shop.description || null,
    logo: shop.logo || null,
    banner: shop.banner || null,
    category: shop.category || null,
    address: shop.address || null,
    phone: shop.phone || null,
    email: shop.email || null,
    enableNotifications: shop.enableNotifications || false,
    monthlyRevenue: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(shop.totalRevenue || 0),
    status: (shop.status === 'active' ? 'active' : 'pending') as
      | 'active'
      | 'pending',
    rating: (shop.rating || '0.0') as string,
    totalProducts: shop.totalProducts || 0,
    totalOrders: shop.totalOrders || 0,
    createdAt: shop.createdAt || new Date(),
    updatedAt: shop.updatedAt || new Date(),
  }));

  const handleCreateShop = () => {
    setIsDialogOpen(true);
  };

  const handleShopSubmit = async (data: ShopFormValues) => {
    try {
      await createShop({
        name: data.name,
        slug: data.slug,
        description: data.description,
        logo: data.logo || undefined,
        banner: data.banner || undefined,
        address: data.address,
        phone: data.phone,
        email: data.email,
        enableNotifications: data.enableNotification,
      });
    } catch (error) {
      console.error('Failed to create shop:', error);
    }
  };

  return (
    <>
      <MyShopsTemplate
        shops={transformedShops}
        onCreateShop={handleCreateShop}
        currentVendorId={currentVendorId}
      />
      <AddShopDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleShopSubmit}
        isSubmitting={isCreating}
      />
    </>
  );
}
