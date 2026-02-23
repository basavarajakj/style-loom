import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  items: string[];
  className?: string;
}

export default function Tags({ items, className }: Props) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {items.map((item, index) => (
        <Button
          key={index}
          variant='ghost'
          className='6xl:h-14 h-12 @6xl:px-6 py-3 text-lg border-2 border-dashed'
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
