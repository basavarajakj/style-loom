import { type StoreStats as StoreStatsType } from '@/types/store-types';
import { format } from 'date-fns';
import { CalendarIcon, PackageIcon, StarIcon, UsersIcon } from 'lucide-react';

interface StoreStatsProps {
  stats: StoreStatsType;
  className?: string;
}

export default function StoreStats({ stats, className }: StoreStatsProps) {
  const formattedDate = format(stats.memberSince, 'MMMM yyyy');

  const statsData = [
    {
      icon: PackageIcon,
      label: 'Products',
      value: stats.totalProducts.toLocaleString(),
      color: 'text-blue-500',
    },
    {
      icon: UsersIcon,
      label: 'Followers',
      value:
        stats.followers >= 1000
          ? `${(stats.followers / 1000).toFixed(2)}K`
          : stats.followers.toString(),
      color: 'text-green-500',
    },
    {
      icon: StarIcon,
      label: 'Rating',
      value: stats.rating.toFixed(1),
      color: 'text-yellow-500',
    },
    {
      icon: CalendarIcon,
      label: 'Member Since',
      value: formattedDate,
      color: 'text-purple-500',
    },
  ];
  return (
    <div className={className}>
      <div className='grid @2xl:grid-cols-4 grid-cols-2 gap-4'>
        {statsData.map((stat) => (
          <div className='flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm'>
            <div className={`rounded-full bg-muted p-2.5 ${stat.color}`}>
              <stat.icon className='size-5' />
            </div>
            <div className='min-w-0 flex-1'>
              <p className='font-bold text-lg leading-none capitalize'>
                {stat.value}
              </p>
              <p className='text-muted-foreground text-sm'>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
