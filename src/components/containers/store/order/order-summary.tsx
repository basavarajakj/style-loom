import { Separator } from '@/components/ui/separator';

interface OrderSummaryProps {
  itemCost: number;
  shippingCost: number;
  tax: number;
  couponDiscount?: number;
  total: number;
}

export default function OrderSummary({
  itemCost,
  shippingCost,
  tax,
  couponDiscount,
  total,
}: OrderSummaryProps) {
  return (
    <div className='space-y-3'>
      <div className='flex justify-between text-base'>
        <span className='text-muted-foreground'>Item Cost</span>
        <span className='font-medium'>₹{itemCost.toFixed(2)}</span>
      </div>
      <div className='flex justify-between text-base'>
        <span className='text-muted-foreground'>Shipping Cost</span>
        <span className='font-medium'>₹{shippingCost.toFixed(2)}</span>
      </div>
      <div className='flex justify-between text-base'>
        <span className='text-muted-foreground'>Tax</span>
        <span className='font-medium'>₹{tax.toFixed(2)}</span>
      </div>
      {couponDiscount && (
        <div className='flex justify-between text-base'>
          <span className='text-muted-foreground'>Coupon</span>
          <span className='font-medium text-green-600'>
            - ₹{couponDiscount.toFixed(2)}
          </span>
        </div>
      )}

      <Separator />
      <div className='flex justify-between text-lg font-semibold'>
        <span className='text-muted-foreground'>Total cast</span>
        <span className='font-medium'>₹{total.toFixed(2)}</span>
      </div>
    </div>
  );
}
