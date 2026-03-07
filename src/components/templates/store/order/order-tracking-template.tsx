import { PackageIcon } from 'lucide-react';
import { useState } from 'react';
import OrderSearchForm from './order-search-form';
import { mockTrackingData } from '@/data/order-tracking';
import OrderStatusTimeline from '@/components/base/store/order/order-status-timeline';

export default function OrderTrackingTemplate() {
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (_orderId: string) => {
    setIsSearching(true);
    // Simulation
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 1000);
  };
  return (
    <div className='@container container mx-auto px-4 py-8'>
      <div className='mb-8 text-center'>
        <div className='mx-auto mb-4 flex size-16 items-center justify-center  rounded-full bg-primary/10'>
          <PackageIcon className='size-8 text-primary' />
        </div>
        <h1 className='m-2 font-bold text-3xl'>Track your order</h1>
        <p className='text-muted-foreground'>
          Enter your order Id to get real-time tracking update
        </p>
      </div>

      <div className='mb-8'>
        <OrderSearchForm
          onSearch={handleSearch}
          isLoading={isSearching}
        />
      </div>

      {hasSearched && (
        <div className='space-y-8'>
          <div className='rounded-lg border bg-card p-6 shadow-sm'>
            <h2 className='mb-6 font-semibold text-xl'>Order Status</h2>
            <OrderStatusTimeline stages={mockTrackingData.stages} />
          </div>
        </div>
      )}
    </div>
  );
}
