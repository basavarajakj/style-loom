import Navbar from '@/components/base/common/navbar';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ShoppingCartIcon } from 'lucide-react';
import { ModeToggle } from '../provider/mode-toggle';
import { useState } from 'react';

const navigationItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Products' },
  { to: '/category', label: 'Categories' },
];

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div className='@container sticky top-0 z-40  w-full border-b-2 border-dashed bg-background backdrop-blur-2xl supports-filter:bg-background/80'>
      <div className='container mx-auto grid @6xl:grid-cols-3 grid-cols-2 items-center px-4 py-7'>
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
              onClick={() => setIsCartOpen(true)}
              className='relative'
            >
              <ShoppingCartIcon className='@7xl:size-6 size-5' />

              <span className='-right-1 -top-1 absolute h-5 w-5 flex items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground'>
                10
              </span>
            </Button>

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
        </div>
      </div>
    </div>
  );
}
