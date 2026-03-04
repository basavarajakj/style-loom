import { BreadcrumbNav } from '@/components/base/common/bread-crumb-nav';
import CheckoutOrderSummary from '@/components/base/store/checkout/checkout-order-summary';
import ShippingAddressForm from '@/components/base/store/checkout/shipping-address-form';
import ShippingMethodSelector from '@/components/base/store/checkout/shipping-method';

export default function CheckoutTemplate() {
  const checkoutSteps = [
    { label: 'Cart', href: '/cart' },
    { label: 'Shipping', href: '/#', isActive: true },
  ];
  return (
    <div className='@container container mx-auto px-4 py-8'>
      <BreadcrumbNav
        items={checkoutSteps}
        className='mb-4'
      />
      <h2 className='font-semibold text-xl mb-3'>Shipping Address</h2>
      <div className='grid @5xl:grid-cols-12 gap-8'>
        <div className='@5xl:col-span-7 space-y-2'>
          <ShippingAddressForm />
          <ShippingMethodSelector />
        </div>
        <div className='@5xl:col-span-5'>
          <CheckoutOrderSummary />
        </div>
      </div>
    </div>
  );
}
