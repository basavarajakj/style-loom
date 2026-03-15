import VendorPageHeader from '@/components/base/common/vendor-page-header';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

interface ProductHeaderProps {
  onAddProduct: () => void;
  className?: string;
}

export default function ProductHeader({
  onAddProduct,
  className,
}: ProductHeaderProps) {
  return (
    <VendorPageHeader
      title='Product'
      description='Manage products across all your shops'
      className={className}
    >
      <Button onClick={onAddProduct}>
        <PlusIcon className='mr-2 size-4' />
        Add Product
      </Button>
    </VendorPageHeader>
  );
}
