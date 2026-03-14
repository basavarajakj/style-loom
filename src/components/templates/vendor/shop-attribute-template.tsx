import AttributeHeader from '@/components/containers/vendors/attributes/attribute-header';
import AttributeTable from '@/components/containers/vendors/attributes/attribute-table';
import type { Attribute } from '@/types/attributes-types';

interface ShopAttributeTemplateProps {
  attributes: Attribute[];
  onAddAttribute: () => void;
}

export default function ShopAttributeTemplate({
  attributes,
  onAddAttribute,
}: ShopAttributeTemplateProps) {
  return (
    <div className='space-y-6'>
      <AttributeHeader onAddAttribute={onAddAttribute} />
      <AttributeTable attributes={attributes} />
    </div>
  );
}
