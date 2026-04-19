import Section from '@/components/base/common/section';
import CollectionContainer from '@/components/containers/store/collection-container';
import { Button } from '@/components/ui/button';
import StarSolidIcon from '@/components/ui/icons/star-solid';
import { useStoreProducts } from '@/hooks/store/use-store-product';
import { toDisplayProducts } from '@/lib/helper/products-query-helpers';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

const MAX_CATEGORY_TABS = 4;

export default function Collection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { productsQueryOptions } = useStoreProducts();

  const { data: productsData, isLoading } = useQuery(
    productsQueryOptions({
      limit: 12,
      sortBy: 'createdAt',
      sortDirection: 'desc',
    })
  );

  // Transform API products to display format
  const products = useMemo(() => {
    if (!productsData?.data) return [];
    return toDisplayProducts(productsData.data);
  }, [productsData]);

  // Extract unique categories from products (max 2 + 'All' = 3 totals)
  const categoryTabs = useMemo(() => {
    const categories = new Map<string, string>();

    for (const product of products) {
      if (product.category.name && product.category.name !== 'Uncategorized') {
        categories.set(product.category.id, product.category.name);
      }
      // Stop when we have enough categories
      if (categories.size >= MAX_CATEGORY_TABS - 1) break;
    }

    return ['All', ...Array.from(categories.values())];
  }, [products]);

  const handleCategoryChange = (category: string) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  return (
    <Section
      title='Elevate Your STyle with Our Latest collections'
      description='Each piece is crafted to enhance your fashion statement'
      rightAsset={
        <StarSolidIcon className='@5xl:h-[316px] @6xl:h-[386px] h-20 @5xl:w-[310px] @6xl:w-[246px]' />
      }
    >
      <div className='@4xl:px-12 @6xl:px-[60px] @7xl:px-20 px-5 pb-8'>
        <div className='flex flex-wrap gap-3'>
          {categoryTabs.map((tab) => (
            <Button
              key={tab}
              variant={activeCategory === tab ? 'default' : 'ghost'}
              className='@6xl:h-14 h-12 @6xl:px-6 py-3 text-lg border-2 border-dashed'
              type='button'
              onClick={() => handleCategoryChange(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      <div
        key={activeCategory}
        className='fade-in-0 animate-in duration-300'
      >
        <CollectionContainer
          products={products}
          isLoading={isLoading}
          activeCategory={activeCategory}
        />
      </div>
    </Section>
  );
}
