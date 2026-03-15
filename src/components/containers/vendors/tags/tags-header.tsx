import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorPageHeader from "@/components/base/common/vendor-page-header";

interface TagsHeaderProps {
  onAddTag: () => void;
  className?: string;
}

export default function TagsHeader({
  onAddTag,
  className,
}: TagsHeaderProps) {
  return (
    <VendorPageHeader
      title="Tags"
      description="Manage your product tags and labels"
      className={className}
    >
      <Button onClick={onAddTag}>
        <Plus className="mr-2 size-4" />
        Add Tag
      </Button>
    </VendorPageHeader>
  );
}