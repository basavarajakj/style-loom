import { cn } from '@/lib/utils';
import ShippingInfoItem from './Shipping-info-item';
import { ClockIcon, RotateCcwIcon, TruckIcon } from 'lucide-react';

interface ShippingInfoSectionProps {
  shipping: {
    freeShipping: boolean;
    deliveryTime: string;
    policy: string;
  };
  className?: string;
}

export default function ShippingInfoSection({
  shipping,
  className,
}: ShippingInfoSectionProps) {
  return (
    <div className={cn('space-y-4 border-t pt-4', className)}>
      {shipping.freeShipping && (
        <ShippingInfoItem
          icon={TruckIcon}
          label='Free Shipping & Returns'
          value='On all orders over ₹ 299'
          detailsLink='/shipping-policy'
        />
      )}

      <ShippingInfoItem
        icon={ClockIcon}
        label='Delivery'
        value={`Estimated delivery: ${shipping.deliveryTime}`}
      />

      <ShippingInfoItem
        icon={RotateCcwIcon}
        label='Return Policy'
        value={shipping.policy}
        detailsLink='/return-policy'
      />
    </div>
  );
}
