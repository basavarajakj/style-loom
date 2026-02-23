import Navbar from '@/components/base/common/navbar';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { MenuIcon, ShoppingCartIcon } from 'lucide-react';
import { ModeToggle } from '../provider/mode-toggle';
import { useCartStore } from '@/lib/store/cart-store';
import CartSheet from '@/components/containers/store/cart/cart-sheet';
import { MobileMenu } from './mobile-menu';

const navigationItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Products' },
  { to: '/category', label: 'Categories' },
];

export default function Header() {
  const { totalItems, setIsOpen } = useCartStore();
  return (
    <div className='@container sticky top-0 z-40  w-full border-b-2 border-dashed bg-background backdrop-blur-2xl supports-filter:bg-background/80'>
      <div className='@container mx-auto grid @6xl:grid-cols-3 grid-cols-2 items-center px-4 @6xl:py-7 py-4'>
        <Navbar items={navigationItems} />

        <div className='flex items-center justify-start @6xl:justify-center'>
          <Link
            to='/'
            className='font-bold @6xl:text-4xl text-3xl tracking-wide dark:text-white'
          >
            Style
            <span className='text-4xl text-primary'>.</span>
            Loom
          </Link>
        </div>

        <div className='flex items-center justify-end gap-2'>
          <div className='@6xl:flex hidden items-center gap-2'>
            <Button
              variant='outline'
              size='icon-lg'
              aria-label='Open Cart'
              onClick={() => setIsOpen(true)}
              className='relative'
            >
              <ShoppingCartIcon className='@7xl:size-6 size-5' />

              {totalItems > 0 && (
                <span className='-right-1 -top-1 absolute h-5 w-5 flex items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground'>
                  {totalItems}
                </span>
              )}
            </Button>
            <CartSheet />

            <ModeToggle />

            <Link to='/auth/sign-in'>
              <Button
                variant='default'
                size='lg'
                type='button'
              >
                Sign In
              </Button>
            </Link>
          </div>

          <div className='flex @6xl:hidden gap-3'>
            <Button
              variant='outline'
              size='icon-lg'
              aria-label='Open Cart'
              onClick={() => setIsOpen(true)}
              className='relative'
            >
              <ShoppingCartIcon className='@7xl:size-6 size-5' />

              {totalItems > 0 && (
                <span className='-right-1 -top-1 absolute h-5 w-5 flex items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground'>
                  {totalItems}
                </span>
              )}
            </Button>
            <MobileMenu
              navigationItems={navigationItems}
              trigger={
                <Button
                  variant='secondary'
                  size='icon-lg'
                  aria-label='Open menu'
                  className='rounded-lg'
                >
                  <MenuIcon />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
