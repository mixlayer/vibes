import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'announcement-bar-example',
    dependencies: [],
    registryDependencies: ['announcement-bar'],
    files: ['examples/announcement-bar.tsx'],
    component: lazy(() => import('./examples/announcement-bar')),
  },
  {
    name: 'blog-post-card-example',
    dependencies: [],
    registryDependencies: ['blog-post-card'],
    files: ['examples/blog-post-card.tsx'],
    component: lazy(() => import('./examples/blog-post-card')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'carousel-example',
    dependencies: [],
    registryDependencies: ['categories'],
    files: ['examples/carousel.tsx'],
    component: lazy(() => import('./examples/carousel')),
  },
  {
    name: 'category-card-example',
    dependencies: [],
    registryDependencies: ['category-card'],
    files: ['examples/category-card.tsx'],
    component: lazy(() => import('./examples/category-card')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'compare-bar-example',
    dependencies: [],
    registryDependencies: ['compare-bar'],
    files: ['examples/compare-bar.tsx'],
    component: lazy(() => import('./examples/compare-bar')),
  },
  {
    name: 'dropdown-example',
    dependencies: [],
    registryDependencies: ['dropdown'],
    files: ['examples/dropdown.tsx'],
    component: lazy(() => import('./examples/dropdown')),
  },
  {
    name: 'favorite-example',
    dependencies: [],
    registryDependencies: ['favorite'],
    files: ['examples/favorite.tsx'],
    component: lazy(() => import('./examples/favorite')),
  },
  {
    name: 'feature-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/feature.tsx'],
    component: lazy(() => import('./examples/feature')),
  },
  {
    name: 'feature-grid-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/feature.tsx'],
    component: lazy(() => import('./examples/feature-grid')),
  },
  {
    name: 'featured-product-list-example',
    dependencies: [],
    registryDependencies: ['featured-product-list'],
    files: ['examples/featured-product-list.tsx'],
    component: lazy(() => import('./examples/featured-product-list')),
  },
  {
    name: 'footer-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/footer.tsx'],
    component: lazy(() => import('./examples/footer')),
  },
  {
    name: 'header-example',
    dependencies: [],
    registryDependencies: ['header'],
    files: ['examples/header.tsx'],
    component: lazy(() => import('./examples/header')),
  },
  {
    name: 'hero-example',
    dependencies: [],
    registryDependencies: [
      './components/hero/ProgressSection.tsx',
      './components/hero/Slideshow.tsx',
    ],
    files: ['examples/hero.tsx'],
    component: lazy(() => import('./examples/hero')),
  },
  {
    name: 'hero-contained-example',
    dependencies: [],
    registryDependencies: [
      './components/hero/ProgressSection.tsx',
      './components/hero/Slideshow.tsx',
    ],
    files: ['examples/hero-contained.tsx'],
    component: lazy(() => import('./examples/hero-contained')),
  },

  {
    name: 'icon-block-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/icon-block.tsx'],
    component: lazy(() => import('./examples/icon-block')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/input.tsx'],
    component: lazy(() => import('./examples/input')),
  },
  {
    name: 'media-section-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/media-section.tsx'],
    component: lazy(() => import('./examples/media-section')),
  },
  {
    name: 'media-section-left-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/media-section.tsx'],
    component: lazy(() => import('./examples/media-section-left')),
  },
  {
    name: 'media-section-right-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/media-section.tsx'],
    component: lazy(() => import('./examples/media-section-right')),
  },
  {
    name: 'newsletter-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/newsletter.tsx'],
    component: lazy(() => import('./examples/newsletter')),
  },
  {
    name: 'page-home-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-home.tsx'],
    component: lazy(() => import('./examples/page-home')),
  },
  {
    name: 'page-product-example',
    dependencies: [],
    registryDependencies: [],
    files: ['examples/page-product.tsx'],
    component: lazy(() => import('./examples/page-product')),
  },
  {
    name: 'pagination-example',
    dependencies: [],
    registryDependencies: ['pagination'],
    files: ['examples/pagination.tsx'],
    component: lazy(() => import('./examples/pagination')),
  },
  {
    name: 'product-card-example',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['examples/product-card.tsx'],
    component: lazy(() => import('./examples/product-card')),
  },
  {
    name: 'product-detail-example',
    dependencies: [],
    registryDependencies: ['product-detail'],
    files: ['examples/product-detail.tsx'],
    component: lazy(() => import('./examples/product-detail')),
  },
  {
    name: 'product-list-example',
    dependencies: [],
    registryDependencies: ['product-list'],
    files: ['examples/product-list.tsx'],
    component: lazy(() => import('./examples/product-list')),
  },
  {
    name: 'product-description-example',
    dependencies: [],
    registryDependencies: ['product-description'],
    files: ['examples/product-description.tsx'],
    component: lazy(() => import('./examples/product-description')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
] satisfies Components
