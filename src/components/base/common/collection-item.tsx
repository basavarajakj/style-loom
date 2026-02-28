import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IndianRupeeIcon, ShoppingCartIcon } from 'lucide-react';

interface Props {
  image: string;
  title: string;
  category: string;
  fit: string;
  price: string;
  className?: string;
  onAddToCart?: () => void;
}
export default function CollectionItem({
  image,
  title,
  category,
  fit,
  price,
  className,
  onAddToCart,
}: Props) {
  return (
    <div className={cn('relative border-dashed @6xl:p-[30px] p-5', className)}>
      <div className='overflow-hidden rounded-t-2xl'>
        <img
          src={image}
          alt={title}
          className='w-full h-[386px] object-cover bg-accent'
        />
      </div>
      <div className='@6xl:mt-[30px] mt-5 flex items-center justify-start @6xl:justify-between gap-3'>
        <span className='rounded-full border-2 border-body-15 bg-body-10 px-4 text-body-70 py-1 text-md'>
          {category}
        </span>
        <Button
          variant='secondary'
          size='lg'
          type='button'
          className='@6xl:inline-flex hidden border-2 border-dashed border-primary'
          onClick={onAddToCart}
        >
          Shop now
          <ShoppingCartIcon />
        </Button>
      </div>

      <div className='mt-3 space-y-3.5'>
        <h4 className='font-medium font-mono text-lg truncate' title={title}>{title}</h4>
        <p className='font-mono text-muted-foreground text-sm'>
          Fit: <span className='font-medium text-body-80'>{fit}</span> Price:{' '}
          <span className='font-medium text-body-80'>
            <IndianRupeeIcon className='size-4 inline' />
            {price}.00
          </span>
        </p>
        <Button
          variant='secondary'
          size='lg'
          type='button'
          className='@6xl:hidden w-full border-2 border-dashed border-primary'
          onClick={onAddToCart}
        >
          Shop now
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
}
