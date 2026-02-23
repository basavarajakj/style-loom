import { cn } from '@/lib/utils';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Heading({ title, subtitle, className }: Props) {
  return (
    <div className={cn('space-y-6', className)}>
      <h2 className='text-extrabold @6xl:text-5xl text-3xl tracking-tight'>
        {title}
      </h2>
      {subtitle && <p className='max-w-prose text-body-40'>{subtitle}</p>}
    </div>
  );
}
