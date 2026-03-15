import type { ReactNode } from 'react';

interface VendorPageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({
  className,
  title,
  description,
  children,
}: VendorPageHeaderProps) {
  return (
    <div className={className}>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='font-bold text-3xl'>{title}</h2>
          {description && (
            <p className='text-muted-foreground line-clamp-1'>{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
