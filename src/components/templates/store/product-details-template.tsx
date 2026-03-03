import ProductBreadcrumb from '@/components/base/products/details/product-breadcrumb';
import ProductDetailsTabs from '@/components/containers/store/product-details/product-details-tabs';
import ProductMainSection from '@/components/containers/store/product-details/product-main-section';
import SimilarProductsSection from '@/components/containers/store/product-details/similar-products-section';
import type { Product } from '@/data/products';

interface ProductDetailsTemplateProps {
  product: Product;
}

export default function ProductDetailsTemplate({
  product,
}: ProductDetailsTemplateProps) {
  return (
    <div className='@container container mx-auto @4xl:px-6 px-2 @5xl:py-12 py-8'>
      <ProductBreadcrumb items={product.breadcrumbs} />

      <div className='space-y-16'>
        {/* Left Column - Image Gallery */}
        <ProductMainSection product={product} />

        <ProductDetailsTabs product={product} />

        <SimilarProductsSection products={product.similarProducts} />
      </div>
    </div>
  );
}
