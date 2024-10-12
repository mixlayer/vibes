import { Suspense } from 'react'

import { CompareDrawer } from '@/vibes/soul/components/compare-drawer'
import { Product } from '@/vibes/soul/components/product-card'
import { ProductsList } from '@/vibes/soul/components/products-list'

import { Filter, Filters, FiltersSkeleton } from './filters'
import { Pagination, Props as PaginationProps } from './pagination'
import { Option as SortOption, Sorting, SortingSkeleton } from './sorting'

interface Props {
  title?: Promise<string> | string
  totalCount: Promise<number> | number
  products: Promise<Product[]> | Product[]
  compareProducts: Promise<Product[]> | Product[]
  sortOptions: Promise<SortOption[]> | SortOption[]
  filters: Promise<Filter[]> | Filter[]
  pagination?: Promise<PaginationProps> | PaginationProps
  compareLabel?: string
  filterLabel?: string
  sortLabel?: string
}

export function ProductsListSection({
  title,
  totalCount,
  products,
  compareProducts,
  sortOptions,
  filters,
  compareLabel,
  pagination,
  filterLabel,
  sortLabel,
}: Props) {
  return (
    <div>
      <div className="relative pb-10 @container">
        {/* Products Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-background text-foreground">
          <h1 className="pl-3 font-heading text-xl font-medium leading-none @xl:pl-6 @2xl:text-5xl @5xl:pl-20">
            {title} <span className="text-contrast-200">{totalCount}</span>
          </h1>
          <div className="ml-auto flex gap-2 pr-3 @xl:pr-6 @5xl:pr-20">
            <Filters filters={filters} label={filterLabel} />
            <Sorting options={sortOptions} label={sortLabel} />
          </div>
        </div>
      </div>
      <ProductsList products={products} compareLabel={compareLabel} showCompare />
      <CompareDrawer products={compareProducts} />
    </div>
  )
}
