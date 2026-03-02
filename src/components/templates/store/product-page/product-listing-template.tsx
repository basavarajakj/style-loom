import ActiveFilterChips from '@/components/base/products/active-filter-chips';
import SearchBar from '@/components/base/products/search-bar';
import SortDropdown from '@/components/base/products/sort-dropdown';
import ProductGrid from '@/components/containers/store/product-list/product-grid';
import FilterSidebar from '@/components/templates/store/product-page/filter-sidebar';
import MobileFilterDrawer from '@/components/templates/store/product-page/mobile-filter-drawer';
import { useProductFilter } from '@/lib/store/product-filter-store';

import { mockProducts as products } from '@/data/products';

export default function ProductListingTemplate() {
  const {
    filters,
    updateFilter,
    totalProducts,
    activeFilters,
    removeFilter,
    clearAllFilters,
    isPending,
  } = useProductFilter();

  return (
    <div className='@container container mx-auto px-4 py-6'>
      <div className='flex flex-col gap-6'>
        {/* Header section */}
        <div className='flex @4xl:flex-row flex-col items-start @4xl:items-center justify-between gap-4'>
          <div>
            <h1 className='font-bold text-3xl tracking-tight'>All Products</h1>
            <p className='mt-1 text-muted-foreground'>Showing results</p>
          </div>

          <div className='flex flex-col @4xl:flex-row @4xl:w-auto w-full items-center gap-2'>
            <div className='w-full @4xl:w-[300px] order-1'>
              <SearchBar
                value={filters.search}
                onChange={(val) => updateFilter('search', val)}
                className='max-w-none'
              />
            </div>
            <div className='flex items-center gap-2 w-full @4xl:w-auto order-2 @4xl:order-1'>
              <MobileFilterDrawer
                filters={filters}
                updateFilter={updateFilter}
                totalResults={totalProducts}
                className='flex-1 @4xl:flex-none'
              />
              <SortDropdown
                value={filters.sort}
                onChange={(val) => updateFilter('search', val)}
                className='flex-1 @4xl:w-[180px]'
              />
            </div>
          </div>
        </div>

        <div className='@container flex items-start gap-8'>
          <aside className='sticky top-24 @5xl:block hidden w-64 shrink-0'>
            <FilterSidebar
              filters={filters}
              updateFilter={updateFilter}
            />
          </aside>

          <main className='min-w-0 flex-1'>
            <ActiveFilterChips
              filters={activeFilters}
              onRemove={removeFilter}
              onClearAll={clearAllFilters}
            />

            <ProductGrid
              products={products}
              isLoading={isPending}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
