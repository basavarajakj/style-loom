import AddAttributeDialog from '@/components/containers/vendors/attributes/add-attribute-dialog';
import ShopAttributeTemplate from '@/components/templates/vendor/shop-attribute-template';
import { mockAttributes } from '@/data/attributes';
import type { Attribute } from '@/types/attributes-types';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/(vendor)/shop/$slug/attributes')({
  component: RouteComponent,
});

function RouteComponent() {
  const [attributes, setAttributes] = useState<Attribute[]>(mockAttributes);
  const [isAttributeDialogOpen, setIsAttributeDialogOpen] = useState(false);

  const handleAddAttribute = () => {
    setIsAttributeDialogOpen(true);
  };

  const handleAddAttributeSubmit = (data: any) => {
    const newAttribute: Attribute = {
      id: String(attributes.length + 1),
      name: data.name,
      slug: data.slug,
      values: data.values.map((v: any, i: number) => ({
        ...v,
        id: `${attributes.length + 1}- ${i}`,
      })),
      type: data.type,
    };
    setAttributes([...attributes, newAttribute]);
  };
  return (
    <>
      <ShopAttributeTemplate
        attributes={attributes}
        onAddAttribute={handleAddAttribute}
      />

      <AddAttributeDialog
        open={isAttributeDialogOpen}
        onOpenChange={setIsAttributeDialogOpen}
        onSubmit={handleAddAttributeSubmit}
      />
    </>
  );
}
