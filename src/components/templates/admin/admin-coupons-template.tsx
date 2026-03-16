import CouponHeader from '@/components/containers/shared/coupons/coupon-header';
import CouponTable from '@/components/containers/shared/coupons/coupon-tables';
import { ADMIN_COUPON_PERMISSIONS } from '@/lib/config/coupon-permissions';
import type { Coupon, CouponFormValues } from '@/types/coupon-types';

interface AdminCouponsTemplateProps {
  coupons: Coupon[];
  onCouponStatusChange: (
    couponId: string,
    newStatus: 'active' | 'expired' | 'inactive'
  ) => void;
  onAddCoupon?: (data: CouponFormValues) => void;
}

export default function AdminCouponsTemplate({
  coupons,
  onCouponStatusChange,
  onAddCoupon,
}: AdminCouponsTemplateProps) {
  const handleToggleStatus = (couponId: string, currentStatus: string) => {
    const newStatus: 'active' | 'expired' | 'inactive' =
      currentStatus === 'active' ? 'inactive' : 'active';
    onCouponStatusChange(couponId, newStatus);
  };

  return (
    <div className='space-y-6'>
      <CouponHeader
        role='admin'
        onAddCoupon={onAddCoupon}
        showAddButton={!!onAddCoupon}
      />
      <CouponTable
        coupons={coupons}
        permissions={ADMIN_COUPON_PERMISSIONS}
        onToggleStatus={handleToggleStatus}
      />
    </div>
  );
}
