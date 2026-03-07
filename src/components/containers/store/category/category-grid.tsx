import CategoryCard from '@/components/base/store/category/category-card';
import { getGridColsClass } from '@/lib/grid-utils';
import { cn } from '@/lib/utils';
import type { Category } from '@/types/category-types';

interface CategoryGridProps {
  categories: Category[];
  variant?: 'default' | 'compact' | 'featured' | 'list';
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  className?: string;
  showProductCount?: boolean;
}

export default function CategoryGrid({
  categories,
  variant = 'default',
  columns = { default: 1, sm: 3, md: 4, lg: 5, xl: 6 },
  className,
  showProductCount,
}: CategoryGridProps) {
  const gridClasses = cn(
    'grid gap-4',
    columns.default && getGridColsClass(columns.default),
    columns.sm && getGridColsClass(columns.sm),
    columns.md && getGridColsClass(columns.md),
    columns.lg && getGridColsClass(columns.lg),
    columns.xl && getGridColsClass(columns.xl),
    className
  );
  return (
    <div className={gridClasses}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          variant={variant}
          showProductCount={showProductCount}
        />
      ))}
    </div>
  );
}
