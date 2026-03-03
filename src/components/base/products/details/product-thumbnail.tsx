import { cn } from '@/lib/utils';

interface ProductThumbnailProps {
  image: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ProductThumbnail({
  image,
  alt,
  isActive,
  onClick,
}: ProductThumbnailProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'relative aspect-square w-full overflow-hidden rounded-md border-2 border-transparent bg-white transition-all hover:border-primary',
        isActive ? 'border-primary' : 'border-transparent'
      )}
      aria-label={`View ${alt}`}
      aria-current={isActive ? 'true' : undefined}
    >
      <img
        src={image}
        alt={alt}
        className='w-full h-full object-cover object-center'
        loading='lazy'
      />
    </button>
  );
}
