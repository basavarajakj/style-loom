import CartItem from '@/components/base/store/cart/cart-item';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCartStore } from '@/lib/store/cart-store';
import { Link } from '@tanstack/react-router';
import { ShoppingBag } from 'lucide-react';

export default function CartSheet() {
  const { items, isOpen, setIsOpen, totalItems, subtotal } = useCartStore();

  // const { } = useCart();

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetContent className='flex w-full flex-col @xl:max-w-lg'>
        <SheetHeader>
          <SheetTitle>Cart ({totalItems})</SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <ScrollArea className='flex px-6'>
              <div className=''>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </ScrollArea>

            <div className='space-y-4 py-6'>
              <Separator />

              <div className='space-y-1.5 px-6'>
                <div className='flex justify-between font-medium text-base'>
                  <span>Subtotal</span>
                  <span className='font-semibold text-2xl text-foreground'>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className='text-muted-foreground text-sm'>
                  Shipping and taxed calculated at checkout.
                </p>
              </div>

              <div className='grid gap-3 px-6'>
                <Link to='/cart'>
                  <Button
                    className='w-full'
                    size='lg'
                    onClick={() => setIsOpen(false)}
                  >
                    View Cart
                  </Button>
                </Link>

                <Button
                  className='w-full'
                  size='lg'
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className='flex  flex-col  h-full items-center justify-center space-y-2'>
            <ShoppingBag className='font-medium text-lg text-muted-foreground' />
            <span className='font-medium text-lg text-muted-foreground'>
              Your cart is empty
            </span>
            <Button
              variant='link'
              onClick={() => setIsOpen(false)}
            >
              Start Shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
