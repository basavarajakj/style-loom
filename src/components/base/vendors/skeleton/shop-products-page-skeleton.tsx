import { Skeleton } from '@/components/ui/skeleton';

export default function ShopProductsPageSkeleton() {
  return (
    <div className='space-y-4'>
      {/* Search bar */}
      <div className='flex items-center gap-4'>
        <div className='relative flex-1'>
          <Skeleton className='h-10 w-full' />
        </div>
      </div>

      {/* Table */}
      <div className='rounded-md border'>
        <div className='space-y-4 p-4'>
          {/* Header Row */}
          <div className='grid grid-cols-4 @3xl:grid-cols-7 gap-4 border-b pb-4 '>
            <Skeleton className='h-4 w-20' />
            <Skeleton className='h-4 w-16' />
            <Skeleton className='h-4 w-16' />
            <Skeleton className='hidden @3xl:flex h-4 w-12' />
            <Skeleton className='hidden @3xl:flex h-4 w-12' />
            <Skeleton className='hidden @3xl:flex h-4 w-16' />
            <Skeleton className='ml-auto h-4 w-12' />
          </div>

          {/* Data Rows */}
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className='grid grid-cols-4 @3xl:grid-cols-7 items-center gap-4 border-b py-4 last:border-b-0'
              key={i}
            >
              <Skeleton className='h-4 @3xl:w-32 w-16' />
              <Skeleton className='h-4 w-20' />
              <Skeleton className='h-4 @3xl:w-24 w-16' />
              <Skeleton className='hidden @3xl:flex h-4 w-16' />
              <Skeleton className='hidden @3xl:flex h-4 w-12' />
              <Skeleton className='hidden @3xl:flex h-4 w-20' />
              <Skeleton className='h-4 w-20 ml-auto' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
