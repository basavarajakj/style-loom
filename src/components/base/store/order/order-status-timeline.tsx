import { cn } from '@/lib/utils';
import { CheckIcon, CircleIcon, PackageIcon } from 'lucide-react';

interface TimelineStages {
  id: string;
  label: string;
  date?: string;
  status: 'completed' | 'active' | 'pending';
}
interface OrderStatusTimelineProps {
  stages: TimelineStages[];
}

export default function OrderStatusTimeline({
  stages,
}: OrderStatusTimelineProps) {
  return (
    <div className='relative w-full'>
      <div className='absolute left-6 top-0 bottom-0 lg:left-0 lg:right-0 lg:-top-16 flex flex-col items-center lg:flex-row lg:items-center'>
        {stages.map(
          (stage, index) =>
            index < stages.length - 1 && (
              <div
                key={`line-${stage.id}`}
                className={cn(
                  'bg-muted transition-colors w-0.5 flex-1 lg:h-0.5 lg:w-auto',
                  stage.status === 'completed' && 'bg-primary'
                )}
              />
            )
        )}
      </div>
      {/* Stages */}
      <div className='relative flex flex-col gap-8 lg:flex-row lg:gap-0 lg:items-start lg:justify-between'>
        {stages.map((stage) => (
          <div
            key={stage.id}
            className='flex flex-row items-center gap-4 lg:flex-1 lg:flex-col lg:items-center'
          >
            {/* Icon */}
            <div
              className={cn(
                'relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background transition-colors',
                stage.status === 'completed' &&
                  'border-primary bg-primary text-popover-foreground',
                stage.status === 'active' && 'border-primary text-primary',
                stage.status === 'pending' &&
                  'border-muted text-muted-foreground'
              )}
            >
              {stage.status === 'completed' ? (
                <CheckIcon className='size-6' />
              ) : stage.status === 'active' ? (
                <PackageIcon className='size-6' />
              ) : (
                <CircleIcon className='size-6' />
              )}
            </div>

            {/* Label */}
            <div className='text-left lg:mt-4 lg:text-center'>
              <p
                className={cn(
                  'font-medium text-sm',
                  stage.status === 'pending' && 'text-muted-foreground'
                )}
              >
                {stage.label}
              </p>
              {stage.date && (
                <p className='mt-1 text-muted-foreground text-xs'>
                  {stage.date}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
