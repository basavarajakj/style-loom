import StoreBanner from '@/components/base/store/store-front/store-banner';
import type { Store } from '@/types/store-types';

interface StoreHeaderProps {
  store: Store;
}

export default function StoreHeader({ store }: StoreHeaderProps) {
  return (
    <div className='space-y-6'>
      <StoreBanner store={store} />
    </div>
  );
}
