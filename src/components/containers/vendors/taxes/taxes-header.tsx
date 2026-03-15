import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import VendorPageHeader from "@/components/base/common/vendor-page-header";

interface TaxesHeaderProps {
  onAddTax: () => void;
  className?: string;
}

export default function TaxesHeader({
  onAddTax,
  className,
}: TaxesHeaderProps) {
  return (
    <VendorPageHeader
      title="Taxes"
      description="Manage your tax rates and configurations"
      className={className}
    >
      <Button onClick={onAddTax}>
        <Plus className="mr-2 size-4" />
        Add Tax Rate
      </Button>
    </VendorPageHeader>
  );
}