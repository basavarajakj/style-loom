import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorPageHeader from "@/components/base/common/page-header";

interface CouponHeaderProps {
  onAddCoupon: () => void;
  className?: string;
}

export default function CouponHeader({
  onAddCoupon,
  className,
}: CouponHeaderProps) {
  return (
    <VendorPageHeader
      title="Coupons"
      description="Manage your discount coupons and promotional codes"
      className={className}
    >
      <Button onClick={onAddCoupon}>
        <Plus className="mr-2 size-4" />
        Add Coupon
      </Button>
    </VendorPageHeader>
  );
}