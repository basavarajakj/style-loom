import {
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import type { VendorNavItem } from '@/types/vendor-types';
import { Link } from '@tanstack/react-router';
import { useLocation } from '@tanstack/react-router';

interface VendorNavMenuProps {
  items: VendorNavItem[];
  className?: string;
}

export default function VendorNavMenu({
  items,
  className,
}: VendorNavMenuProps) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <SidebarMenu className={className}>
      {items.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}`);
        const Icon = item.icon;

        return (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={isActive}
              tooltip={item.title}
            >
              <Link to={item.href}>
                <Icon />
                <span>{item.title}</span>
                {item.badge && (
                  <SidebarMenuBadge className='bg-primary rounded-full'>{item.badge}</SidebarMenuBadge>
                )}
              </Link>
            </SidebarMenuButton>

            {item.items && item.items.length > 0 && (
              <SidebarMenuSub>
                {item.items.map((subItem) => {
                  const isSubActive = pathname === subItem.href;

                  return (
                    <SidebarMenuSubItem key={subItem.href}>
                      <SidebarMenuSubButton
                        isActive={isSubActive}
                        asChild
                      >
                        <Link to={subItem.href}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  );
                })}
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
