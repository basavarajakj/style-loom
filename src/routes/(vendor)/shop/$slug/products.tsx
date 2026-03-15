import ShopProductsPageSkeleton from '@/components/base/vendors/skeleton/shop-products-page-skeleton';
import { AddProductDialog } from '@/components/containers/vendors/products/add-product-dialog';
import ShopProductsTemplate from '@/components/templates/vendor/shop-products-template';
import { mockAttributes } from '@/data/attributes';
import { mockBrands } from '@/data/brand';
import { mockCategories } from '@/data/categories';
import { mockProducts } from '@/data/products';
import { mockShippingMethods } from '@/data/shipping-method';
import { mockTags } from '@/data/tags';
import { mockTaxes } from '@/data/taxes';
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
    mockProducts.map(mapToVendorProduct)
  );
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);

  const handleAddProduct = () => {
    setIsAddProductDialogOpen(true);
  };

  const handleAddProductSubmit = (data: any) => {
    console.log('Adding product:', data);

    // Resolve names from IDs for the mock table
    const categoryName = mockCategories.find(
      (c) => c.id === data.categoryId
    )?.name;
    const brandName = mockBrands.find((b) => b.id === data.brandId)?.name;
    const tagNames = data.tagIds
      .map((id: string) => mockTags.find((t) => t.id === id)?.name)
      .filter(Boolean);

    const newProduct = {
      id: String(products.length + 1),
      name: data.name,
      sku: data.sku,
      shop: 'Tech Gadgets Store',
      price: `$${data.price}`,
      stock: Number(data.stock),
      status: 'active' as const,
      image: 'https://placehold.co/100?text=NP',
      productType: 'Simple', // Default for now
      category: categoryName || '',
      brand: brandName || '',
      tags: tagNames,
    };
    setProducts([...products, newProduct]);
  };

  const handleSearch = (query: string) => {
    console.log('Search query: ', query);
  };

  return (
    <>
      <ShopProductsTemplate
        products={products}
        onAddProduct={handleAddProduct}
        onSearch={handleSearch}
      />

      <AddProductDialog
        open={isAddProductDialogOpen}
        onOpenChange={setIsAddProductDialogOpen}
        onSubmit={handleAddProductSubmit}
        categories={mockCategories}
        brands={mockBrands}
        tags={mockTags}
        availableAttributes={mockAttributes}
        taxes={mockTaxes}
        shippingMethods={mockShippingMethods}
      />
    </>
  );
}
