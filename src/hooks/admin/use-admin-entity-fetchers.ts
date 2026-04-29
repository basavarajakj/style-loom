import type {
  DataTableFetchParams,
  DataTableFetchResult,
} from '@/components/base/data-table/types';
import { getAdminAttributes } from '@/lib/functions/admin/attribute';
import { getAdminBrands } from '@/lib/functions/admin/brand';
import { getAdminCategories } from '@/lib/functions/admin/category';
import { getAdminProducts } from '@/lib/functions/admin/product';
import { getAdminShops } from '@/lib/functions/admin/shop';
import {
  booleanFilterTransform,
  createServerFetcher,
} from '@/lib/helper/create-server-fetcher';
import type { AttributeItem } from '@/types/attributes-types';
import type { BrandItem } from '@/types/brands-types';
import type { NormalizedCategory } from '@/types/category-types';
import type { ProductItem } from '@/types/products-types';
import type { AdminTenant } from '@/types/tenant-types';

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

export function createAdminProductsFetcher(): (
  params: DataTableFetchParams
) => Promise<DataTableFetchResult<ProductItem>> {
  return createServerFetcher<ProductItem, any>({
    fetchFn: async (query) => {
      const response = await getAdminProducts({ data: query });
      return { data: response.data ?? [], total: response.total ?? 0 };
    },
    sortFieldMap: {
      name: 'name',
      sellingPrice: 'sellingPrice',
      stock: 'stock',
      createdAt: 'createdAt',
      averageRating: 'averageRating',
      reviewCount: 'reviewCount',
    },
    filterFieldMap: {
      isActive: 'isActive',
      status: 'status',
      productType: 'productType',
      categoryId: 'categoryId',
      brandId: 'brandId',
      isFeatured: 'isFeatured',
      inStock: 'inStock',
    },
    defaultQuery: { sortBy: 'createdAt', sortDirection: 'desc' },
    transformFilters: booleanFilterTransform,
  });
}

export function createAdminBrandsFetcher(): (
  params: DataTableFetchParams
) => Promise<DataTableFetchResult<BrandItem>> {
  return createServerFetcher<BrandItem, any>({
    fetchFn: async (query) => {
      const response = await getAdminBrands({ data: query });
      return { data: response.data ?? [], total: response.total ?? 0 };
    },
    sortFieldMap: { name: 'name', createdAt: 'createdAt' },
    filterFieldMap: { isActive: 'isActive' },
    defaultQuery: { sortBy: 'sortOrder', sortDirection: 'asc' },
    transformFilters: booleanFilterTransform,
  });
}

export function createAdminAttributesFetcher(): (
  params: DataTableFetchParams
) => Promise<DataTableFetchResult<AttributeItem>> {
  return createServerFetcher<AttributeItem, any>({
    fetchFn: async (query) => {
      const response = await getAdminAttributes({ data: query });
      return { data: response.data ?? [], total: response.total ?? 0 };
    },
    sortFieldMap: { name: 'name', createdAt: 'createdAt' },
    filterFieldMap: { isActive: 'isActive', type: 'type' },
    defaultQuery: { sortBy: 'sortOrder', sortDirection: 'asc' },
    transformFilters: booleanFilterTransform,
  });
}

export function createAdminCategoriesFetcher(): (
  params: DataTableFetchParams
) => Promise<DataTableFetchResult<NormalizedCategory>> {
  return createServerFetcher<NormalizedCategory, any>({
    fetchFn: async (query) => {
      const response = await getAdminCategories({ data: query });
      return { data: response.data ?? [], total: response.total ?? 0 };
    },
    sortFieldMap: { name: 'name', createdAt: 'createdAt' },
    filterFieldMap: { isActive: 'isActive', featured: 'featured' },
    defaultQuery: { sortBy: 'sortOrder', sortDirection: 'asc' },
    transformFilters: booleanFilterTransform,
  });
}
