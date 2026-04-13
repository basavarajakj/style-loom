import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import type { VendorNavItem } from '@/types/vendor-types';
import { HomeIcon, StoreIcon } from 'lucide-react';
import VendorNavMenu from '../../base/vendors/vendor-nav-menu';
import VendorUserMenu from '@/components/base/vendors/vendor-user-menu';
import { vendorShopsQueryOptions } from '@/hooks/vendors/use-shops';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useSession } from '@/lib/auth/auth-client';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function VendorDashboardSidebar() {
  const { data: session } = useSession();
  const user = session?.user;
  const { data: shopData } = useSuspenseQuery(vendorShopsQueryOptions());
  const shopCount = shopData?.shops?.length || 0;

  const vendorNavItems: VendorNavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: HomeIcon,
    },
    {
      title: 'My Shops',
      href: '/my-shop',
      icon: StoreIcon,
      badge: shopCount > 0 ? shopCount : undefined,
    },
  ];

  return (
    <Sidebar
      collapsible='icon'
      variant='inset'
    >
      <SidebarHeader>
        <div className='flex items-center gap-3 px-2 py-4'>
          <div className='flex size-10 items-center justify-center rounded-lg bg-primary text-popover-foreground'>
            <StoreIcon className='size-6' />
          </div>
          <div className='grid flex-1 text-left leading-tight'>
            <span className='truncate font-bold text-lg'>style.loom</span>
            <span className='truncate text-muted-foreground text-sm'>
              Vendor portal
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <VendorNavMenu items={vendorNavItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {user ? (
          <VendorUserMenu user={user} />
        ) : (
          <Link to='/auth/sign-in'>
            <Button
              variant='default'
              className='w-full'
              type='button'
              size='lg'
            >
              Sign In
            </Button>
          </Link>
        )}
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
