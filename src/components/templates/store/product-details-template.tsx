import ProductBreadcrumb from '@/components/base/products/details/product-breadcrumb';
import ProductDetailsTabs from '@/components/containers/store/product-details/product-details-tabs';
import ProductMainSection from '@/components/containers/store/product-details/product-main-section';
import SimilarProductsSection from '@/components/containers/store/product-details/similar-products-section';
import type { StoreProduct } from '@/types/store-types';

interface ProductDetailsTemplateProps {
  product: StoreProduct;
  similarProducts?: StoreProduct[];
}

export default function ProductDetailsTemplate({
  product,
  similarProducts = [],
}: ProductDetailsTemplateProps) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Store', href: '/store' },
    {
      label: product.categoryName || 'Product',
      href: product.categoryId ? `/store?category=${product.categoryId}` : '#',
    },
    { label: product.name, href: `/store/product/${product.slug}` },
  ];

  return (
    <div className='@container container mx-auto @4xl:px-6 px-2 @5xl:py-12 py-8'>
      <ProductBreadcrumb items={breadcrumbs} />

      <div className='space-y-16'>
        {/* Left Column - Image Gallery */}
        <ProductMainSection product={product} />

        <ProductDetailsTabs product={product} />

        <SimilarProductsSection products={similarProducts} />
      </div>
    </div>
  );
}
