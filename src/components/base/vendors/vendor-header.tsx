import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { BellIcon, SearchIcon, SettingsIcon } from 'lucide-react';
import { ModeToggle } from '../provider/mode-toggle';

interface VendorHeaderProps {
  title?: string;
  showSearch?: boolean;
  className?: string;
}

export default function VendorHeader({
  title = 'Dashboard',
  showSearch = true,
  className,
}: VendorHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex  h-16 items-center gap-4 border-b bg-background px-4 md:px-6',
        className
      )}
    >
      <SidebarTrigger />
      <div className='flex items-center flex-1 gap-4'>
        <h1 className='font-semibold hidden md:flex text-lg md:text-xl'>
          {title}
        </h1>

        {showSearch && (
          <div className='ml-auto flex w-full max-w-md items-center gap-2'>
            <div className='relative flex-1'>
              <SearchIcon className='-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search...'
                className='pl-9'
              />
            </div>

            <div className='flex items-center gap-2'>
              <Button
                variant='ghost'
                size='icon'
                className='relative'
              >
                <BellIcon className='size-5' />
                <span className='absolute top-1 right-1 flex size-2'>
                  <span className='absolute inline-flex size-full animate-ping rounded-full bg-destructive opacity-75' />
                  <span className='relative inline-flex size-2 rounded-full bg-destructive' />
                </span>
                <span className='sr-only'>Notification</span>
              </Button>
              <Button
                variant='ghost'
                size='icon'
                asChild
              >
                <Link to='/dashboard'>
                  <SettingsIcon className='size-5' />
                  <span className='sr-only'>Settings</span>
                </Link>
              </Button>

              <ModeToggle toggleFrom='dashboard' />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
