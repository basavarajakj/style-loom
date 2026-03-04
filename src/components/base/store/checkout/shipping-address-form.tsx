import { ShippingAddressFields } from '@/components/containers/store/checkout/shipping-address-fields';
import {
  shippingAddressSchema,
  type ShippingAddressInput,
} from '@/lib/validators/shipping-address';
import { useForm } from '@tanstack/react-form';

interface ShippingAddressFormProps {
  onSubmit?: (data: ShippingAddressInput) => void;
}

export default function ShippingAddressForm({
  onSubmit,
}: ShippingAddressFormProps) {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: 'IN',
      city: '',
      state: '',
      zipCode: '',
      description: '',
    } as ShippingAddressInput,
    validators: {
      onSubmit: shippingAddressSchema,
    },
    onSubmit: async ({ value }) => {
      onSubmit?.(value);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit;
      }}
      className='space-y-6'
    >
      <ShippingAddressFields form={form as any} />
    </form>
  );
}
