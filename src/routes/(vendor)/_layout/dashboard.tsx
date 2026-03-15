import VendorDashboardSkeleton from '@/components/base/vendors/skeleton/vendor-dashboard-skeleton';
import VendorDashboardTemplate from '@/components/templates/vendor/vendor-dashboard-template';
import { createFileRoute } from '@tanstack/react-router';
import {
  ChartColumnIcon,
  IndianRupeeIcon,
  PackageIcon,
  ShoppingBagIcon,
} from 'lucide-react';

export const Route = createFileRoute('/(vendor)/_layout/dashboard')({
  component: VendorDashboardPage,
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return {};
  },
  pendingComponent: VendorDashboardSkeleton,
});

function VendorDashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹56,789.90',
      change: '+20.1% from last month',
      icon: IndianRupeeIcon,
    },
    {
      title: 'Total Shop',
      value: '3',
      change: '+1% from last month',
      icon: ShoppingBagIcon,
    },
    {
      title: 'Total Product',
      value: '245',
      change: '+23 new products',
      icon: PackageIcon,
    },
    {
      title: 'Total Orders',
      value: '245',
      change: '+203 from last months',
      icon: ChartColumnIcon,
    },
  ];
  return <VendorDashboardTemplate stats={stats} />;
}
