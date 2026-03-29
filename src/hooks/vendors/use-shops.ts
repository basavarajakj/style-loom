import {
  createShop,
  deleteShop,
  getShopBySlug,
  getVendorShops,
  updateShop,
} from '@/lib/functions/shops';
import type { CreateShopInput, UpdateShopInput } from '@/lib/validators/shop';
import {
  queryOptions,
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { useMemo } from 'react';
import { toast } from 'sonner';

export const vendorShopsQueryOptions = () =>
  queryOptions({
    queryKey: ['vendor', 'shops'],
    queryFn: () => getVendorShops(),
  });
export const shopBySlugQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ['vendor', 'shops', slug],
    queryFn: () => getShopBySlug({ data: { slug } }),
    enabled: !!slug,
  });
export const useShopMutations = () => {
  const queryClient = useQueryClient();

  const invalidateShops = () => {
    queryClient.invalidateQueries({
      queryKey: ['vendor', 'shops'],
    });
  };

  const createShopMutation = useMutation({
    mutationFn: async (data: CreateShopInput) => {
      const result = await createShop({ data });
      return result;
    },
    onSuccess: (result) => {
      toast.success(`Shop "${result.shop?.name}" created successfully`);
      invalidateShops();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to create shop');
    },
  });

  // Update shop mutation
  const updateShopMutation = useMutation({
    mutationFn: async (data: UpdateShopInput) => {
      const result = await updateShop({ data });
      return result;
    },
    onSuccess: (result) => {
      toast.success(`Shop "${result.shop?.name}" updated successfully!`);
      invalidateShops();
      // Also invalidate specific shop query if slug exists
      if (result.shop?.slug) {
        queryClient.invalidateQueries({
          queryKey: ['vendor', 'shops', result.shop.slug],
        });
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update shop');
    },
  });

  // Delete shop mutation
  const deleteShopMutation = useMutation({
    mutationFn: async (shopId: string) => {
      const result = await deleteShop({ data: { id: shopId } });
      return result;
    },
    onSuccess: () => {
      toast.success('Shop deleted successfully');
      invalidateShops();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to delete shop');
    },
  });

  return {
    createShop: createShopMutation.mutateAsync,
    updateShop: updateShopMutation.mutateAsync,
    deleteShop: deleteShopMutation.mutateAsync,
    isCreating: createShopMutation.isPending,
    isUpdating: updateShopMutation.isPending,
    isDeleting: deleteShopMutation.isPending,
  };
};

export const useShops = () => {
  const mutations = useShopMutations();
  return {
    shopQueryOptions: vendorShopsQueryOptions,
    shopBySlugQueryOptions,
    ...mutations,
  };
};

// export const useTransformedShops = (options?: { filterByVendor?: boolean }) => {
//   const { shopQueryOptions } = useShops();
//   const { data, ...rest } = useSuspenseQuery(shopQueryOptions());

//   const shops = data?.shops ?? [];
//   const vendorId = data?.vendorId;

//   const transformedShops = useMemo(() => {
//     let filteredShop = shops;

//     if (options?.filterByVendor && vendorId) {
//       filteredShop = shops.filter((shop) => shop.vendorId === vendorId);
//     } else if (options?.filterByVendor && !vendorId) {
//       filteredShops = [];
//     }
//   }, []);
// };
