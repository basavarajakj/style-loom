import { AddTaxDialog } from "@/components/containers/shared/taxes/add-tax-dialog";
import ShopTaxesTemplate from "@/components/templates/vendor/shop-taxes-template";
import { mockTaxes } from "@/data/taxes";
import type { Taxes as Tax, TaxFormValues } from "@/types/taxes-types";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/(vendor)/shop/$slug/taxes")({
  component: TaxesPage,
});

function TaxesPage() {
  const [taxes, setTaxes] = useState<Tax[]>(mockTaxes);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddTax = () => {
    setIsDialogOpen(true);
  };

  const handleTaxSubmit = (data: TaxFormValues) => {
    const newTax: Tax = {
      id: String(taxes.length + 1),
      name: data.name,
      rate: data.rate,
      country: data.country,
      state: data.state,
      zip: data.zip,
      priority: data.priority,
    };

    setTaxes([...taxes, newTax]);
    console.log("Created tax:", newTax);
  };

  return (
    <>
      <ShopTaxesTemplate taxes={taxes} onAddTax={handleAddTax} />

      <AddTaxDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleTaxSubmit}
      />
    </>
  );
}