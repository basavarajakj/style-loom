import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';

interface ShopHeaderProps {
  onCreateShop: () => void;
  className?: string;
}

export default function ShopHeader({
  onCreateShop,
  className,
}: ShopHeaderProps) {
  return (
    <div className={cn(className)}>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='font-bold text-3xl tracking-tight'>My Shops</h2>
          <p className='text-muted-foreground'>
            Manage and monitor all your shops in one place
          </p>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={onCreateShop}>
              <PlusIcon className='size-4' />
              <span className='hidden @2xl:flex'>Create New Shop</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Create New Shop</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}
