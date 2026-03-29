import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/common/use-mobile';
import { useStoreFront } from '@/lib/store/store';
import { cn } from '@/lib/utils';
import type { Store } from '@/types/store-types';
import { CheckCircle2Icon, HeartIcon, StarIcon } from 'lucide-react';

interface StoreBannerProps {
  store: Store;
  className?: string;
}

export default function StoreBanner({ store, className }: StoreBannerProps) {
  const isMobile = useIsMobile();
  const { isFollowing, toggleFollow } = useStoreFront();
  const following = isFollowing(store.id);

  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      {/* Banner Image */}
      <div className='relative @2xl:h-64 h-48 overflow-hidden bg-muted'>
        <img
          src={store.banner}
          alt={`${store.name}-banner`}
          className='w-full h-full object-cover'
        />
        {/* Store overlay */}
        <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent' />
      </div>

      <div className='absolute right-0 bottom-0 left-0 p-3 @2xl:p-6'>
        <div className='flex items-center gap-4 justify-between'>
          <div>
            {/* Logo */}
            <Avatar className='-mb-2 @2xl:h-32 h-24 @2xl:w-32 w-24 border-4 border-background shadow-xl'>
              <AvatarImage
                src={store.logo}
                alt={store.name}
              />
              <AvatarFallback className='bg-primary/10 font-bold text-2xl text-primary'>
                {store.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className=' text-white'>
              <div className='mt-2 flex items-center gap-2'>
                <h1 className='font-bold @2xl:text-3xl text-2xl'>
                  {store.name}
                </h1>
                {store.isVerified && (
                  <CheckCircle2Icon
                    className='h-6 w-6 text-blue-600'
                    aria-label='Verified store'
                  />
                )}
              </div>

              <div className='flex flex-col @2xl:flex-row @2xl:gap-2 text-sm'>
                <div className='flex items-center gap-1'>
                  <StarIcon className='size-4 text-yellow-400 fill-yellow-400' />
                  <span className='font-medium'>{store.rating.toFixed(2)}</span>
                  <span className='text-white/80'>
                    ({store.reviewCount} reviews)
                  </span>
                  <span className='text-primary'>•</span>
                </div>
                <span className='text-white/80'>{store.category}</span>
              </div>
            </div>
          </div>
          {/* Action button */}
          <div className='absolute bottom-4 right-4 transition-normal shadow-md'>
            <Button
              variant={following ? 'secondary' : 'default'}
              size={isMobile ? 'sm' : 'lg'}
              onClick={() => toggleFollow(store.id)}
              className='gap-2'
            >
              <HeartIcon
                className={cn('size-4', following && 'fill-current')}
              />
              {following ? 'Following' : 'Follow'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
