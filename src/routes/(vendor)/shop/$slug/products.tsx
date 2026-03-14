import ShopProductsPageSkeleton from '@/components/base/vendors/skeleton/shop-products-page-skeleton';
import ShopProductsTemplate from '@/components/templates/vendor/shop-products-template';
import { mockProducts } from '@/data/products';
import type { Product } from '@/types/products-types';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/(vendor)/shop/$slug/products')({
  component: ProductsPage,
  loader: async () => {
    // Simulate loading delay for skeleton demonstration
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {};
  },
  pendingComponent: ShopProductsPageSkeleton,
});

function mapToVendorProduct(p: (typeof mockProducts)[number]): Product {
  return {
    id: p.id,
    name: p.name,
    sku: p.id,
    shop: p.store.name,
    price: `$${p.price.current.toFixed(2)}`,
    stock: p.stock.quantity,
    status: p.stock.inStock ? 'active' : 'out_of_stock',
    image: p.images[0]?.url ?? '/placeholder.svg',
    productType: p.category.name,
    category: p.category.name,
    brand: p.brand,
    tags: p.colors,
  };
}

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>(
    mockProducts.map(mapToVendorProduct),
  );
  const [isAddProductDialogOpen, setAddIsProductDialogOpen] = useState(false);

  const handleAddProduct = () => {
    setAddIsProductDialogOpen(true);
  };

  const handleSearch = (query: string) => {
    console.log('Search query: ', query);
  };

  return (
    <ShopProductsTemplate
      products={products}
      onAddProduct={handleAddProduct}
      onSearch={handleSearch}
    />
  );
}
