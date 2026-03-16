import { useState } from 'react';
import type { AttributeFormValues } from '@/types/attributes-types';
import { AddAttributeDialog } from './add-attribute-dialog';
import PageHeader from '@/components/base/common/page-header';

export interface AttributeHeaderProps {
  onAddAttribute?: (data: AttributeFormValues) => void;
  role?: 'admin' | 'vendor';
  showAddButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function AttributeHeader({
  onAddAttribute,
  role = 'vendor',
  showAddButton = true,
  children,
  className,
}: AttributeHeaderProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddAttribute = (data: AttributeFormValues) => {
    onAddAttribute?.(data);
  };

  return (
    <PageHeader
      title="Attributes"
      description={
        role === 'admin'
          ? 'Manage product attributes across the platform'
          : 'Manage product attributes and variations for your shop'
      }
      className={className}
    >
      {children}
      {showAddButton && (
        <AddAttributeDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onSubmit={handleAddAttribute}
          role={role}
        />
      )}
    </PageHeader>
  );
}