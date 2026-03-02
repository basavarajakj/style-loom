import { ColorRadioItem } from '@/components/base/products/color-radio-item';
import FilterGroup from '@/components/base/products/filter-group';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import {
  AVAILABILITY,
  BRANDS,
  CATEGORIES,
  COLORS,
  SIZES,
} from '@/data/products';
import type { FilterState } from '@/lib/store/product-filter-store';
import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  updateFilter: (
    key: keyof FilterState,
    value: string | number | string[] | [number, number] | null
  ) => void;
  className?: string;
}

export default function FilterSidebar({
  filters,
  updateFilter,
  className,
}: FilterSidebarProps) {
  const handleCheckboxChange = (
    checked: boolean,
    item: string,
    key: keyof FilterState
  ) => {
    const current = filters[key] as string[];

    if (checked) {
      updateFilter(key, [...current, item]);
    } else {
      updateFilter(
        key,
        current.filter((i) => i !== item)
      );
    }
  };

  const handlePriceChange = (value: [number, number]) => {
    updateFilter('priceRange', value);
  };

  return (
    <div className={cn('space-y-1 px-4', className)}>
      <div className='mb-4 font-semibold text-lg'>Filters</div>

      {/* Category */}
      <FilterGroup
        id='categories'
        title='Category'
      >
        <div className='space-y-2'>
          {Object.keys(CATEGORIES).map((category) => (
            <div
              key={category}
              className='flex items-center space-x-2'
            >
              <Checkbox
                id={`cat-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    checked as boolean,
                    category,
                    'categories'
                  )
                }
              />
              <Label
                htmlFor={`cat-${category}`}
                className='cursor-pointer font-normal text-sm'
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </FilterGroup>

      {/* Price range */}
      <FilterGroup
        id='price'
        title='Price'
      >
        <div className='p-2'>
          <Slider
            defaultValue={[0, 1000]}
            value={[filters.priceRange[0], filters.priceRange[1]]}
            max={1000}
            step={10}
            onValueChange={handlePriceChange}
            className='mb-4'
          />
          <div className='flex justify-between text-muted-foreground text-sm'>
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </FilterGroup>

      {/* Brand */}
      <FilterGroup
        id='brands'
        title='Brand'
      >
        <div className='space-y-2'>
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className='flex items-center space-x-2'
            >
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.categories.includes(brand)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(checked as boolean, brand, 'categories')
                }
              />
              <Label
                htmlFor={`brand-${brand}`}
                className='cursor-pointer font-normal text-sm'
              >
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </FilterGroup>

      {/* Colors */}
      <FilterGroup
        id='colors'
        title='Colors'
      >
        <div className='space-y-2'>
          <RadioGroup
            value={filters.colors[0] || ''}
            onValueChange={(value) =>
              updateFilter('colors', value ? [value] : [])
            }
            className='flex flex-wrap gap-2'
          >
            {COLORS.map((color) => (
              <ColorRadioItem
                key={color}
                color={color}
                value={color}
                id={`color-${color}`}
                className='cursor-pointer'
              />
            ))}
          </RadioGroup>
        </div>
      </FilterGroup>

      {/* Size */}
      <FilterGroup
        id='sizes'
        title='Size'
      >
        <div className='flex flex-wrap gap-2'>
          {SIZES.map((size) => (
            <Button
              key={size}
              variant={filters.sizes.includes(size) ? 'default' : 'outline'}
              size='sm'
              onClick={() => {
                const isSelected = filters.sizes.includes(size);
                handleCheckboxChange(!isSelected, size, 'sizes');
              }}
              className='h-10 w-10 p-0'
            >
              {size}
            </Button>
          ))}
        </div>
      </FilterGroup>

      {/* Ratings */}
      <FilterGroup
        id='ratings'
        title='Ratings'
      >
        <div className='space-y-2'>
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              type='button'
              className='flex w-full cursor-pointer items-center space-x-2 rounded border-0 bg-transparent p-1 hover:bg-muted/50'
              onClick={() =>
                updateFilter(
                  'rating',
                  filters.rating === rating ? null : rating
                )
              }
            >
              <div
                className={`h-4 w-4 rounded-full border ${filters.rating === rating ? 'border-primary bg-primary' : 'border-gray-300'}`}
              />
              <div className='flex items-center'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className='ml-2 text-muted-foreground text-sm'>& Up</span>
              </div>
            </button>
          ))}
        </div>
      </FilterGroup>

      {/* Availability */}
      <FilterGroup
        id='availability'
        title='Availability'
      >
        <div className='space-y-2'>
          {AVAILABILITY.map((status) => (
            <div
              key={status}
              className='flex items-center space-x-2'
            >
              <Checkbox
                id={`avail-${status}`}
                checked={filters.availability.includes(status)}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(
                    checked as boolean,
                    status,
                    'availability'
                  )
                }
              />
              <Label
                htmlFor={`avail-${status}`}
                className='cursor-pointer font-normal text-sm'
              >
                {status}
              </Label>
            </div>
          ))}
        </div>
      </FilterGroup>
    </div>
  );
}
