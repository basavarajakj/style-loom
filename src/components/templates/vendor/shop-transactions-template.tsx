import TransactionsHeader from "@/components/containers/vendors/transactions/transaction-header";
import TransactionsTable from "@/components/containers/vendors/transactions/transaction-table";
import type { Transaction } from "@/types/transaction-types";

interface ShopTransactionsTemplateProps {
  transactions: Transaction[];
}

export default function ShopTransactionsTemplate({
  transactions,
}: ShopTransactionsTemplateProps) {
  return (
    <div className="space-y-6">
      <TransactionsHeader />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}