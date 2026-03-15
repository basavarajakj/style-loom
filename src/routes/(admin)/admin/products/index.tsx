import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { mockProducts } from '@/data/products';
import AdminProductsTemplate from '@/components/templates/admin/admin-product-template';

export const Route = createFileRoute('/(admin)/admin/products/')({
  component: AdminProductsPage,
});

function AdminProductsPage() {
  const [products] = useState<Product[]>(mockProducts);

  return <AdminProductsTemplate products={products} />;
}