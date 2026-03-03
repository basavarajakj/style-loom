import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface RatingSummaryProps {
  averageRating: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  totalRatings: number;
  className?: string;
}

export default function RatingSummary({
  averageRating,
  ratingBreakdown,
  totalRatings,
  className,
}: RatingSummaryProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 sm:flex-row sm:items-start @5xl:items-center',
        className
      )}
    >
      <div className='flex flex-col items-center justify-center gap-2 text-center sm:items-start sm:text-left'>
        <div className='font-bold text-5xl text-foreground'>
          {averageRating.toFixed(2)}
        </div>
        <div className='flex text-yellow-400'>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                'h-5 w-5',
                i < Math.round(averageRating) ? 'fill-current' : 'text-muted'
              )}
            />
          ))}
        </div>
        <p className='text-muted-foreground'>{totalRatings} Product Ratings</p>
      </div>

      <div className='w-full flex-1 space-y-2'>
        {[5, 4, 3, 2, 1].map((star) => {
          const count =
            ratingBreakdown[star as keyof typeof ratingBreakdown] || 0;
          const percentage =
            totalRatings > 0 ? (count / totalRatings) * 100 : 0;

          return (
            <div
              key={star}
              className='flex items-center gap-3 text-sm'
            >
              <div className='flex w-12 shrink-0 items-center gap-1'>
                <span className='font-medium'>{star}</span>
                <StarIcon className='h-3 w-3 fill-yellow-400 text-yellow-400' />
              </div>
              <Progress
                value={percentage}
                className='h-2 w-auto min-w-0 flex-1'
              />
              <span className='w-10 shrink-0 text-right text-muted-foreground'>
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
