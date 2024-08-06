import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const components = [
  {
    name: 'accordions',
    dependencies: [],
    registryDependencies: [],
    files: ['components/accordions/index.tsx'],
    component: lazy(() => import('./components/accordions')),
  },
  {
    name: 'announcement-bar',
    dependencies: [],
    registryDependencies: [],
    files: ['components/announcement-bar/index.tsx'],
    component: lazy(() => import('./components/announcement-bar')),
  },
  {
    name: 'blog-post-card',
    dependencies: [],
    registryDependencies: [],
    files: ['components/blog-post-card/index.tsx'],
    component: lazy(() => import('./components/blog-post-card')),
  },
  {
    name: 'button',
    dependencies: [],
    registryDependencies: [],
    files: ['components/button/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/button')),
  },
  {
    name: 'carousel',
    dependencies: [],
    registryDependencies: [],
    files: ['components/carousel/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/carousel')),
  },
  {
    name: 'category-card',
    dependencies: [],
    registryDependencies: [],
    files: ['components/category-card/index.tsx'],
    component: lazy(() => import('./components/category-card')),
  },
  {
    name: 'checkbox',
    dependencies: [],
    registryDependencies: [],
    files: ['components/checkbox/index.tsx'],
    component: lazy(() => import('./components/checkbox')),
  },
  {
    name: 'compare-drawer',
    dependencies: [],
    registryDependencies: [],
    files: ['components/compare-drawer/index.tsx'],
    component: lazy(() => import('./components/compare-drawer')),
  },
  {
    name: 'dropdown',
    dependencies: [],
    registryDependencies: [],
    files: ['components/dropdown/index.tsx'],
    component: lazy(() => import('./components/dropdown')),
  },
  {
    name: 'favorite',
    dependencies: [],
    registryDependencies: [],
    files: ['components/favorite/index.tsx', 'components/icons/styles.css'],
    component: lazy(() => import('./components/favorite')),
  },
  {
    name: 'feature',
    dependencies: [],
    registryDependencies: [],
    files: ['components/feature/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/feature')),
  },
  {
    name: 'featured-product-list',
    dependencies: [],
    registryDependencies: [],
    files: ['components/featured-product-list/index.tsx'],
    component: lazy(() => import('./components/featured-product-list')),
  },
  {
    name: 'footer',
    dependencies: [],
    registryDependencies: [],
    files: ['components/footer/index.tsx'],
    component: lazy(() => import('./components/footer')),
  },
  {
    name: 'header',
    dependencies: [],
    registryDependencies: [],
    files: ['components/header/index.tsx'],
    component: lazy(() => import('./components/header')),
  },
  {
    name: 'hero',
    dependencies: [],
    registryDependencies: [
      './components/hero/ProgressSection.tsx',
      './components/hero/Slideshow.tsx',
    ],
    files: ['components/hero/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/hero')),
  },
  {
    name: 'hero-contained',
    dependencies: [],
    registryDependencies: [
      './components/hero/ProgressSection.tsx',
      './components/hero/Slideshow.tsx',
    ],
    files: ['components/hero/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/hero')),
  },
  {
    name: 'icon-block',
    dependencies: [],
    registryDependencies: [],
    files: ['components/icon-block/index.tsx'],
    component: lazy(() => import('./components/icon-block')),
  },
  {
    name: 'input',
    dependencies: [],
    registryDependencies: [],
    files: ['components/input/index.tsx'],
    component: lazy(() => import('./components/input')),
  },
  {
    name: 'label',
    dependencies: [],
    registryDependencies: [],
    files: ['components/label/index.tsx'],
    component: lazy(() => import('./components/label')),
  },
  {
    name: 'media-section',
    dependencies: [],
    registryDependencies: [],
    files: ['components/media-section/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/media-section')),
  },
  {
    name: 'newsletter',
    dependencies: [],
    registryDependencies: [],
    files: ['components/newsletter/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/newsletter')),
  },
  {
    name: 'page-home',
    dependencies: [],
    registryDependencies: [
      './components/announcement-bar/index.tsx',
      './components/carousel/index.tsx',
      './components/category-card/index.tsx',
      './components/feature/index.tsx',
      './components/featured-product-list/index.tsx',
      './components/footer/index.tsx',
      './components/header/index.tsx',
      './components/hero/index.tsx',
      './components/media-section/index.tsx',
      './components/newsletter/index.tsx',
    ],
    files: ['components/page-home/index.tsx'],
    component: lazy(() => import('./components/page-home')),
  },
  {
    name: 'page-product',
    dependencies: [],
    registryDependencies: [
      './components/announcement-bar/index.tsx',
      './components/carousel/index.tsx',
      './components/category-card/index.tsx',
      './components/footer/index.tsx',
      './components/header/index.tsx',
      './components/icon-block/index.tsx',
      './components/newsletter/index.tsx',
      './components/product-description/index.tsx',
      './components/product-detail/index.tsx',
    ],
    files: ['components/page-product/index.tsx'],
    component: lazy(() => import('./components/page-product')),
  },
  {
    name: 'page-products',
    dependencies: [],
    registryDependencies: [
      './components/announcement-bar/index.tsx',
      './components/footer/index.tsx',
      './components/header/index.tsx',
      './components/product-list/index.tsx',
      './components/products-header/index.tsx',
    ],
    files: ['components/page-products/index.tsx'],
    component: lazy(() => import('./components/page-products')),
  },
  {
    name: 'pagination',
    dependencies: [],
    registryDependencies: [],
    files: ['components/pagination/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/pagination')),
  },
  {
    name: 'product-card',
    dependencies: [],
    registryDependencies: [],
    files: ['components/product-card/index.tsx', 'styles.css'],
    component: lazy(() => import('./components/product-card')),
  },
  {
    name: 'product-detail',
    dependencies: [],
    registryDependencies: [],
    files: ['components/product-detail/index.tsx'],
    component: lazy(() => import('./components/product-detail')),
  },
  {
    name: 'product-list',
    dependencies: [],
    registryDependencies: [],
    files: ['components/product-list/index.tsx'],
    component: lazy(() => import('./components/product-list')),
  },
  {
    name: 'product-description',
    dependencies: [],
    registryDependencies: [],
    files: ['components/product-description/index.tsx'],
    component: lazy(() => import('./components/product-description')),
  },
  {
    name: 'products-header',
    dependencies: [],
    registryDependencies: ['components/button.tsx', 'components/dropdown.tsx'],
    files: ['components/products-header/index.tsx'],
    component: lazy(() => import('./components/products-header')),
  },
  {
    name: 'rating',
    dependencies: [],
    registryDependencies: [],
    files: ['components/rating/index.tsx'],
    component: lazy(() => import('./components/rating')),
  },
] satisfies Components
