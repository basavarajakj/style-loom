import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  Icon: LucideIcon;
  className?: string;
}

export default function StatsCard({
  title,
  value,
  change,
  Icon,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className='flex flex-row items-center justify-between skew-y-0 pb-2'>
        <CardTitle className='font-medium text-sm'>{title}</CardTitle>
        <Icon className='size-4 text-muted-foreground' />
      </CardHeader>
      <CardContent>
        <h2 className='font-bold text-2xl'>{value}</h2>
        <p className='text-muted-foreground text-xs '>{change}</p>
      </CardContent>
    </Card>
  );
}
