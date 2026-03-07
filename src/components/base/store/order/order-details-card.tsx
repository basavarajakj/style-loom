import { Button } from '@/components/ui/button';

interface OrderDetailsCardProps {
  orderId: string;
  orderDate: string;
  estimatedDelivery: string;
}

export default function OrderDetailsCard({
  orderId,
  orderDate,
  estimatedDelivery,
}: OrderDetailsCardProps) {
  return (
    <div className='rounded-lg bg-primary p-3 @2xl:p-8 text-popover-foreground'>
      <div className='mb-4 flex flex-wrap items-center justify-between gap-4'>
        <div>
          <h2 className='mb-2 font-semibold text-xl'>Order Id: {orderId}</h2>
          <div className='flex flex-wrap gap-4 text-sm'>
            <span>Order: {orderDate}</span>
            <span className='text-yellow-300'>
              Estimated delivery: {estimatedDelivery}
            </span>
          </div>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <Button
            variant='secondary'
            size='lg'
            className='px-4'
          >
            Download invoice
          </Button>
          <Button
            size='lg'
            className='bg-yellow-400 text-background hover:bg-yellow-500 px-4'
          >
            Track order
          </Button>
        </div>
      </div>
    </div>
  );
}
