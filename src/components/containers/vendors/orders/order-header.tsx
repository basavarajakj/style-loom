import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VendorPageHeader from '@/components/base/common/vendor-page-header';

interface OrderHeaderProps {
  className?: string;
}

export default function OrderHeader({ className }: OrderHeaderProps) {
  return (
    <VendorPageHeader
      title='Orders'
      description='Manage and track your shop orders'
      className={className}
    >
      <Button variant='outline'>
        <Download className='mr-2 size-4' />
        Export Orders
      </Button>
    </VendorPageHeader>
  );
}
