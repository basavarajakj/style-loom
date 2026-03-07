import AccountLayout from '@/components/containers/store/accounts/account-layout';
import WishlistList from '@/components/containers/store/accounts/wishlist';


export default function OrderTemplate() {
  return (
    <AccountLayout>
      <div className='space-y-6'>
        <div className='flex items-start justify-between'>
          <h1 className='font-bold text-2xl tracking-tight'>My Orders</h1>
        </div>
        <div className='rounded-lg border bg-card p-6 text-card-foreground shadow-sm'>
          <WishlistList />
        </div>
      </div>
    </AccountLayout>
  );
}
