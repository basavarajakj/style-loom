import ProductCard from '@/components/base/products/product-card';
import ProductGridSkeleton from '@/components/base/products/product-grid-skeleton';
import ProductNotfound from '@/components/base/products/product-notfound';
import type { DisplayProduct } from '@/types/store-types';

interface ProductGridProps {
  products: DisplayProduct[];
  isLoading?: boolean;
  viewMode?: 'grid' | 'list';
}

export default function ProductGrid({
  products,
  isLoading,
  viewMode = 'grid',
}: ProductGridProps) {
  if (isLoading) {
    return <ProductGridSkeleton />;
  }

  if (products.length === 0) {
    return <ProductNotfound />;
  }
  return (
    <div className='grid grid-cols-2 @4xl:grid-cols-4 @7xl:grid-cols-7 gap-3'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
