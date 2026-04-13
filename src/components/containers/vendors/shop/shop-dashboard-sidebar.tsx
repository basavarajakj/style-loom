import { useSession } from '@/lib/auth/auth-client';
import VendorNavMenu from '@/components/base/vendors/vendor-nav-menu';
import VendorUserMenu from '@/components/base/vendors/vendor-user-menu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
import { getShopNavItems } from '@/lib/constants/vendors-routes';
import { Link } from '@tanstack/react-router';
import { ArrowLeftIcon, StoreIcon } from 'lucide-react';

interface ShopDashboardSidebarProps {
  shopSlug: string;
  shopName: string;
}

export default function ShopDashboardSidebar({
  shopName,
  shopSlug,
}: ShopDashboardSidebarProps) {
  const {data: session } = useSession();
  const user = session?.user;

  return (
    <Sidebar
      collapsible='icon'
      variant='inset'
    >
      <SidebarHeader>
        <div className='flex flex-col gap-4 px py-4 group-data-[collapsible=icon]:px-0'>
          <Button
            variant='ghost'
            className='justify-start group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:justify-center'
            asChild
          >
            <Link to='/my-shop'>
              <ArrowLeftIcon className='size-4' />
              <span className='group-data-[collapsible=icon]:hidden'>
                Back to Shops
              </span>
            </Link>
          </Button>

          <Separator className='bg-sidebar-border' />

          {/* Shop Logo and Text */}
          <div className='flex items-center gap-3 px-2 group-data-[collapsible=icon]:p-0'>
            <div className='flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground group-data-[collapsible=icon]:p-2'>
              <StoreIcon className='size-6' />
            </div>
            <div className='grid flex-1 text-left leading-tight'>
              <span className='truncate font-bold text-base'>{shopName}</span>
              <span className='truncate text-muted-foreground text-sm'>
                Shop Dashboard
              </span>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Shop Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <VendorNavMenu items={getShopNavItems(shopSlug)} />
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
