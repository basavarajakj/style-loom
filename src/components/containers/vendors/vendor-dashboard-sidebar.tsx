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
    badge: 5,
  },
];

const user = {
  name: 'Bassu',
  email: 'vendor@email.com',
  avatar: '',
  role: 'vendor',
};

export default function VendorDashboardSidebar() {
  return (
    <Sidebar collapsible='icon' variant="inset">
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
        <VendorUserMenu user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
