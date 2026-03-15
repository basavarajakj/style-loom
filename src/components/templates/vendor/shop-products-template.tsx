import ProductHeader from '@/components/containers/vendors/products/product-header';
import ProductTable from '@/components/containers/vendors/products/product-table';
import type { Product } from '@/types/products-types';


interface ShopProductsTemplateProps {
  products: Product[];
  onAddProduct: () => void;
  onSearch?: (q: string) => void;
}

export default function ShopProductsTemplate({
  products,
  onAddProduct,
  onSearch,
}: ShopProductsTemplateProps) {
  return (
    <div className='space-y-6 font-geist'>
      <ProductHeader onAddProduct={onAddProduct} />
      <ProductTable products={products}/>
    </div>
  );
}
