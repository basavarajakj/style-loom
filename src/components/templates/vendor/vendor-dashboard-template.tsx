import StatsCard from '@/components/base/vendors/stats-card';
import DashboardChart from '@/components/containers/vendors/dashboard-chart';
import RecentSales from '@/components/containers/vendors/recent-sales';
import type { LucideIcon } from 'lucide-react';

interface VendorDashboardTemplateProps {
  stats: {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
  }[];
}

export default function VendorDashboardTemplate({
  stats,
}: VendorDashboardTemplateProps) {
  return (
    <div className='space-y-2 lg:space-y-6'>
      <div>
        <h2 className='font-bold text-3xl'>Welcome back!</h2>
        <p className='text-muted-foreground'>
          Here's what's happening with your shops today.
        </p>
      </div>

      <div className='grid gap-3 lg:gap-4 grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            Icon={stat.icon}
          />
        ))}
      </div>

      <div className='grid gap-3 lg:gap-4 @2xl:grid-cols-2 @3xl:grid-cols-7'>
        <DashboardChart className='@3xl:col-span-4' />
        <RecentSales className='@3xl:col-span-3' />
      </div>
    </div>
  );
}
