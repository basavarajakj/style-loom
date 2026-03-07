import { BreadcrumbNav } from '@/components/base/common/bread-crumb-nav';
import StoreFilterSidebar from '@/components/containers/store/storefront/store-filter-sidebar';
import StoreList from '@/components/containers/store/storefront/store-list';

const storesSteps = [
  { label: 'Home', href: '/' },
  { label: 'Stores', isActive: true },
] as const;

export default function StoreListingTemplates() {
  return (
    <div className='@container container mx-auto px-4 py-8 min-h-screen bg-background'>
      <div>
        <BreadcrumbNav
          items={storesSteps}
          className='mb-4'
        />
      </div>

      <div className='mb-8'>
        <h1 className='mt-4 mb-8 font-bold text-3xl tracking-tight'>
          All Stores
        </h1>
        <p className='text-lg text-muted-foreground'>
          Discover and shop from our verified sellers
        </p>
      </div>

      <div className='flex @2xl:flex-row flex-col gap-8'>
        <aside className='@2xl:w-72 w-full shrink-0'>
          <div className='@2xl:sticky @2xl:top-28 rounded-xl border bg-card p-6 shadow-sm'>
            <StoreFilterSidebar />
          </div>
        </aside>

        {/* Store list */}
        <main className='min-w-0 flex-1'>
          <StoreList />
        </main>
      </div>
    </div>
  );
}
