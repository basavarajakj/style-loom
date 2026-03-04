import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/store/cart-store';
import { Link } from '@tanstack/react-router';
import { ArrowRightIcon, TagIcon } from 'lucide-react';

interface CartSummaryProps {}

export default function CartSummary({}: CartSummaryProps) {
  const { subtotal, items } = useCartStore();

  // Mock discount
  const discount = 0;
  const deliveryFee = 99;
  const total = subtotal - discount + (items.length > 0 ? deliveryFee : 0);

  return (
    <div className='rounded-lg border bg-card p-6 shadow-sm'>
      <h2 className='mb-6 font-semibold text-lg'>Order Summary</h2>
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <span className='text-muted-foreground'>Subtotal</span>
          <span className='font-medium'>₹ {subtotal.toFixed(2)}</span>
        </div>

        <div className='flex justify-between'>
          <span className='text-muted-foreground'>discount</span>
          <span className='font-medium'>₹ {discount.toFixed(2)}</span>
        </div>

        <div className='flex justify-between'>
          <span className='text-muted-foreground'>Delivery Fee:</span>
          <span className='font-medium'>₹ {deliveryFee.toFixed(2)}</span>
        </div>

        <Separator />

        <div className='flex justify-between font-bold text-lg'>
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>

        <div className='flex gap-2'>
          <InputGroup>
            <InputGroupAddon align='inline-start'>
              <TagIcon className='size-4' />
            </InputGroupAddon>
            <InputGroupInput placeholder='Coupon' />
            <InputGroupAddon align='inline-end'>
              <InputGroupButton variant='ghost'>Apply</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <Link to='/checkout'>
          <Button
            className='w-full rounded-full'
            size='lg'
          >
            Go to Checkout
            <ArrowRightIcon className='ml-2 h-4 w-4'/>
          </Button>
        </Link>
      </div>
    </div>
  );
}
