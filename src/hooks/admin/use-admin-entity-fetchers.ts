import type { DataTableFetchParams, DataTableFetchResult } from "@/components/base/data-table/types";
import { getAdminShops } from "@/lib/functions/admin/shop";
import { createServerFetcher } from "@/lib/helper/create-server-fetcher";
import type { AdminTenant } from "@/types/tenant-types";

export function createAdminTenantsFetcher(): (
  params: DataTableFetchParams
) => Promise<DataTableFetchResult<AdminTenant>> {
  return createServerFetcher<AdminTenant, any>({
    fetchFn: async (query) => {
      const response = await getAdminShops({ data: query });
      const data: AdminTenant[] = (response.data ?? []).map((shop) => ({
        id: shop.id,
        name: shop.name,
        slug: shop.slug,
        ownerName: shop.ownerName ?? 'Unknown',
        ownerEmail: shop.ownerEmail ?? 'Unknown',
        plan: 'free',
        status: (shop.status ?? 'pending') as AdminTenant['status'],
        joinedDate: shop.createdAt,
        productCount: shop.totalProducts ?? 0,
        orderCount: shop.totalOrders ?? 0,
      }));
      return { data, total: response.total ?? 0 };
    },
    sortFieldMap: {
      name: 'name',
      joinedDate: 'createdAt',
      productCount: 'totalProducts',
      orderCount: 'totalOrders',
    },
    filterFieldMap: { status: 'status' },
    defaultQuery: { sortBy: 'createdAt', sortDirection: 'desc' },
  });
}
