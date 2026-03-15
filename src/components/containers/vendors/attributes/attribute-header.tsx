import VendorPageHeader from '@/components/base/common/vendor-page-header';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

interface AttributeHeaderProps {
  onAddAttribute: () => void;
  className?: string;
}

export default function AttributeHeader({
  onAddAttribute,
  className,
}: AttributeHeaderProps) {
  return (
    <VendorPageHeader
      title='Attribute'
      description='Manage product attributes and variations'
      className={className}
    >
      <Button onClick={onAddAttribute}>
        <PlusIcon className='mr-2 size-4' />
        Add Attribute
      </Button>
    </VendorPageHeader>
  );
}
