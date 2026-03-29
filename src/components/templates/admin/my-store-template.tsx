import VendorPageHeader from '@/components/base/common/page-header';
import ShopCard from '@/components/base/vendors/my-shop/shop-card';
import { Button } from '@/components/ui/button';
import type { Shop } from '@/lib/db/schema/shop-schema';

interface MyStoreTemplateProps {
  shops: Shop[];
  onCreateShop: () => void;
  currentVendorId?: string | null;
  title?: string;
  description?: string;
}

export default function MyStoreTemplate({
  shops,
  onCreateShop,
}: MyStoreTemplateProps) {
  return (
    <div className="space-y-6">
      <VendorPageHeader
        title="My Stores"
        description="Manage your own store directly from the admin panel."
      >
        <Button onClick={onCreateShop}>Add New Store</Button>
      </VendorPageHeader>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
}