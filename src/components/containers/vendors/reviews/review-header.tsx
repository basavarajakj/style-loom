import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorPageHeader from "@/components/base/common/page-header";

interface ReviewHeaderProps {
  onAddReview: () => void;
  className?: string;
}

export default function ReviewHeader({
  onAddReview,
  className,
}: ReviewHeaderProps) {
  return (
    <VendorPageHeader
      title="Reviews"
      description="Manage customer reviews and ratings"
      className={className}
    >
      <Button onClick={onAddReview}>
        <Plus className="mr-2 size-4" />
        Add Review
      </Button>
    </VendorPageHeader>
  );
}