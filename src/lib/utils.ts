import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function gridCellBorderClasses(
  index: number,
  column2 = 2,
  column3 = 3,
  includeTop = true
) {
  const left4 = index % column2 !== 0;
  const left6 = index % column3 !== 0;

  return twMerge(
    clsx(
      'border-dashed border-r-0 border-b-0',
      includeTop ? 'border-t-2' : 'border-t-0',
      left4 ? '@4xl:border-l-2' : '@4xl:border-l-0',
      left6 ? '@6xl:border-l-2' : '@4xl:border-l-0'
    )
  );
}
