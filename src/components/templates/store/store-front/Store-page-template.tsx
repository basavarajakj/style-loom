import { BreadcrumbNav } from '@/components/base/common/bread-crumb-nav';
import NotFound from '@/components/base/empty/not-found';
import StoreHeaderSkeleton from '@/components/base/store/store-front/store-header-skeleton';
import { StoreProductsSkeleton } from '@/components/base/store/store-front/store-product-skeleton';
import StoreHeader from '@/components/containers/store/storefront/store-header';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useStoreFront } from '@/lib/store/store';
import { Link, StoreIcon } from 'lucide-react';
import { useEffect } from 'react';

interface StorePageTemplateProps {
  slug: string;
}

const storeSteps = [
  { label: 'Home', href: '/' },
  { label: 'Stores', href: '/store' },
  { label: 'currentStore', isActive: true },
];

export default function StorePageTemplate({ slug }: StorePageTemplateProps) {
  const { currentStore, getStoreBySlug, isLoading } = useStoreFront();
  useEffect(() => {
    getStoreBySlug(slug);
  }, [slug, getStoreBySlug]);

  if (isLoading) {
    return (
      <div className='@container container mx-auto px-4 py-8'>
        {/* Breadcrumbs skeleton */}
        <div className='mb-6'>
          <Skeleton className='h-5 w-64' />
        </div>

        {/* Store header skeleton*/}
        <StoreHeaderSkeleton />

        {/* Tabs Skeleton */}
        <div className='mt-8 space-y-6'>
          <Skeleton className='h-10 w-full max-w-md' />
          <StoreProductsSkeleton />
        </div>
      </div>
    );
  }

  if (!currentStore) {
    return (
      <div className='@container flex min-h-[70vh] w-full items-center justify-center p-4'>
        <NotFound
          title='Store not found'
          description="The store you're looking for doesn't exist or may have been removed."
          icon={
            <StoreIcon className='@[48rem]:size-24 size-12 text-muted-foreground' />
          }
          className='w-full @[48rem]:max-w-2xl max-w-md border-dashed @[48rem]:py-24 **:data-[slot=empty-description]:@[48rem]:text-lg **:data-[slot=empty-title]:@[48rem]:text-3xl'
        >
          <Link to='/store'>
            <Button className='@[48rem]:h-12 @[48rem]:px-8 @[48rem]:text-base'>
              Browse Stores
            </Button>
          </Link>
        </NotFound>
      </div>
    );
  }
  return (
    <div className='@container container mx-auto px-4 py-8'>
      <BreadcrumbNav items={storeSteps} />

      {/* Store Header */}
      <StoreHeader store={currentStore} />
    </div>
  );
}
