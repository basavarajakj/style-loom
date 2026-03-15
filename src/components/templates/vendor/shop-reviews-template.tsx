import ReviewHeader from "@/components/containers/vendors/reviews/review-header";
import ReviewTable from "@/components/containers/vendors/reviews/review-table";
import type { Review } from "@/types/review-types";

interface ShopReviewsTemplateProps {
  reviews: Review[];
  onAddReview: () => void;
}

export default function ShopReviewsTemplate({
  reviews,
  onAddReview,
}: ShopReviewsTemplateProps) {
  return (
    <div className="space-y-6">
      <ReviewHeader onAddReview={onAddReview} />
      <ReviewTable reviews={reviews} />
    </div>
  );
}