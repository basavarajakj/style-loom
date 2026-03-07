import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from '@tanstack/react-router';
import { HeartIcon, LogOutIcon, Package2Icon, UserIcon } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Profile',
    href: '/profile',
    icon: UserIcon,
  },
  {
    title: 'My Orders',
    href: '/orders',
    icon: Package2Icon,
  },
  {
    title: 'My Wishlist',
    href: '/wishlist',
    icon: HeartIcon,
  },
];
export default function AccountSidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <aside className='@2xl:flex @2xl:w-64 w-full flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <div className='px-4 py-2'>
          <h2 className='mb-2 font-semibold text-lg tracking-tight'>
            My Account
          </h2>

          <div className='space-y-2'>
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'lg' }),
                  'w-full justify-start',
                  pathname === item.href
                    ? 'border-transparent bg-accent text-accent-foreground'
                    : 'border-transparent text-muted-foreground'
                )}
              >
                <item.icon className='size-4' />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='px-4 py-2'>
          <Button
            variant='ghost'
            size='lg'
            className='w-full justify-start'
            onClick={() => {}}
          >
            <LogOutIcon className='size-5' />
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
