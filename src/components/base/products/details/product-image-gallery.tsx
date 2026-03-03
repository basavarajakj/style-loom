import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Maximize2Icon, PackageSearchIcon } from 'lucide-react';
import { useState } from 'react';
import ProductThumbnail from './product-thumbnail';

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}
interface ProductImageGalleryProps {
  images: ProductImage[];
  className?: string;
}

export default function ProductImageGallery({
  images,
  className,
}: ProductImageGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = images[activeImageIndex];

  if (!images || images.length === 0) {
    return (
      <div className='flex flex-col aspect-square w-full items-center justify-center rounded-lg bg-muted'>
        <PackageSearchIcon className='size-50' />
        <h2 className='text-muted-foreground text-xl'>No Images available</h2>
      </div>
    );
  }
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Main image */}
      <div className='group relative aspect-square overflow-hidden rounded-lg border bg-white'>
        <button
          type='button'
          onClick={() => setIsZoomed(!isZoomed)}
          className='relative h-full w-full overflow-hidden border-0 bg-transparent p-0'
          aria-label={isZoomed ? 'Zoom out image' : 'Zoom in image'}
        >
          <img
            src={activeImage.url}
            alt={activeImage.alt}
            className={cn(
              'h-full w-full object-cover object-center transition-transform duration-500',
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            )}
          />
        </button>

        <Button
          variant='secondary'
          size='icon'
          className='absolute top-4 right-4 opacity-0 transition-opacity group-hover:opacity-100'
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
          title={isZoomed ? 'Zoom out' : 'Zoom in'}
        >
          <Maximize2Icon className='size-4' />
        </Button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className='grid grid-cols-5 @4xl:gap-4 gap-2'>
          {images.map((image, index) => (
            <ProductThumbnail
              key={image.id}
              image={image.url}
              alt={image.alt}
              isActive={index === activeImageIndex}
              onClick={() => {
                setActiveImageIndex(index);
                setIsZoomed(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
