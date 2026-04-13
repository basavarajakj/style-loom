import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { signOut } from '@/lib/auth/auth-client';
import { Link } from '@tanstack/react-router';
import { useRouter } from '@tanstack/react-router';
import { ChevronDownIcon, LogOutIcon, UserIcon } from 'lucide-react';

interface VendorUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string | null;
}

interface VendorUserMenuProps {
  user: VendorUser;
}

export default function VendorUserMenu({ user }: VendorUserMenuProps) {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleSignout = async () => {
    const currentPath = window.location.pathname + window.location.search;
    await signOut();
    router.navigate({
      to: '/auth/sign-in',
      search: { redirectTo: currentPath },
    });
  };

  const initials = (user.name || '')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const result =
    initials.length === 1
      ? (user.name || '').slice(0, 2).toUpperCase()
      : initials;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='size-8 rounded-lg'>
                <AvatarImage
                  src={user.image ?? undefined}
                  alt={user.name ?? 'User'}
                />
                <AvatarFallback className='rounded-lg'>{result}</AvatarFallback>
              </Avatar>

              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-muted-foreground text-xs'>
                  {user.email}
                </span>
              </div>
              <ChevronDownIcon className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left texts-sm'>
                <Avatar className='size-8 rounded-lg'>
                  <AvatarImage
                    src={user.image ?? undefined}
                    alt={user.name ?? 'User'}
                  />
                  <AvatarFallback className='rounded-lg'>
                    {result}
                  </AvatarFallback>
                </Avatar>

                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user.name}</span>
                  <span className='truncate text-muted-foreground text-xs'>
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <Link to='/profile'>
              <DropdownMenuItem>
                <UserIcon className='mr-2 size-4' />
                Profile
              </DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleSignout}>
              <LogOutIcon className='mr-2 size-4' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
