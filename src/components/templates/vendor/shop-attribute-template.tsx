import AttributeHeader from '@/components/containers/shared/attributes/attribute-header';
import AttributeTable from '@/components/containers/shared/attributes/attribute-table';
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
