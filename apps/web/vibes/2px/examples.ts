import { lazy } from 'react'

import { Components } from '@/vibes/schema'

export const examples = [
  {
    name: 'dropdown-example',
    dependencies: [],
    registryDependencies: ['dropdown'],
    files: ['examples/dropdown.tsx'],
    component: lazy(() => import('./examples/dropdown')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'file-uploader-example',
    dependencies: [],
    registryDependencies: ['file-uploader'],
    files: ['examples/file-uploader.tsx'],
    component: lazy(() => import('./examples/file-uploader')),
  },
  {
    name: 'input-example',
    dependencies: [],
    registryDependencies: ['input'],
    files: ['examples/input.tsx'],
    component: lazy(() => import('./examples/input')),
  },
  {
    name: 'radio-button-example',
    dependencies: [],
    registryDependencies: ['radio-button'],
    files: ['examples/radio-button.tsx'],
    component: lazy(() => import('./examples/radio-button')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'text-area-example',
    dependencies: [],
    registryDependencies: ['text-area'],
    files: ['examples/text-area.tsx'],
    component: lazy(() => import('./examples/text-area')),
  },
  {
    name: 'skeleton-example',
    dependencies: [],
    registryDependencies: ['skeleton'],
    files: ['examples/skeleton.tsx'],
    component: lazy(() => import('./examples/skeleton')),
  },
  {
    name: 'option-selector-example',
    dependencies: [],
    registryDependencies: ['option-selector'],
    files: ['examples/option-selector.tsx'],
    component: lazy(() => import('./examples/option-selector')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'alert-box-example',
    dependencies: [],
    registryDependencies: ['alert-box'],
    files: ['examples/alert-box.tsx'],
    component: lazy(() => import('./examples/alert-box')),
  },
  {
    name: 'callout-section-example',
    dependencies: [],
    registryDependencies: ['callout-section'],
    files: ['examples/callout-section.tsx'],
    component: lazy(() => import('./examples/callout-section')),
  },
  {
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'calendar-example',
    dependencies: [],
    registryDependencies: ['calendar'],
    files: ['examples/calendar.tsx'],
    component: lazy(() => import('./examples/calendar')),
  },
  {
    name: 'blog-list-section-example',
    dependencies: [],
    registryDependencies: ['blog-list-section'],
    files: ['examples/blog-list-section.tsx'],
    component: lazy(() => import('./examples/blog-list-section')),
  },
  {
    name: 'breadcrumbs-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
  {
    name: 'carousel-section-example',
    dependencies: [],
    registryDependencies: ['carousel-section', 'product-card'],
    files: ['examples/carousel-section.tsx'],
    component: lazy(() => import('./examples/carousel-section')),
  },
  {
    name: 'media-and-text-section-example',
    dependencies: [],
    registryDependencies: ['media-and-text-section'],
    files: ['examples/media-and-text-section.tsx'],
    component: lazy(() => import('./examples/media-and-text-section')),
  },
  {
    name: 'footer-section-example',
    dependencies: [],
    registryDependencies: ['footer-section'],
    files: [
      'examples/footer-section.tsx',
      '../components/icons/FacebookIcon',
      '../components/icons/InstagramIcon',
      '../components/icons/PinterestIcon',
      '../components/icons/TwitterIcon',
    ],
    component: lazy(() => import('./examples/footer-section')),
  },
  {
    name: 'fullscreen-product-card-section-example',
    dependencies: [],
    registryDependencies: ['fullscreen-product-card-section'],
    files: ['examples/fullscreen-product-card-section.tsx'],
    component: lazy(() => import('./examples/fullscreen-product-card-section')),
  },
  {
    name: 'section-header-example',
    dependencies: [],
    registryDependencies: ['section-header'],
    files: ['examples/section-header.tsx'],
    component: lazy(() => import('./examples/section-header')),
  },
  {
    name: 'hero-header-example',
    dependencies: [],
    registryDependencies: ['hero-header'],
    files: ['examples/hero-header.tsx'],
    component: lazy(() => import('./examples/hero-header')),
  },
  {
    name: 'blog-post-card-example',
    dependencies: [],
    registryDependencies: ['blog-post-card'],
    files: ['examples/blog-post-card.tsx'],
    component: lazy(() => import('./examples/blog-post-card')),
  },
  {
    name: 'tabs-example',
    dependencies: [],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
  {
    name: 'scratch-to-reveal-section-example',
    dependencies: [],
    registryDependencies: ['scratch-to-reveal-section'],
    files: ['examples/scratch-to-reveal-section.tsx'],
    component: lazy(() => import('./examples/scratch-to-reveal-section')),
  },
  {
    name: 'text-section-example',
    dependencies: [],
    registryDependencies: ['text-section'],
    files: ['examples/text-section.tsx'],
    component: lazy(() => import('./examples/text-section')),
  },
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'faq-section-example',
    dependencies: ['@/vibes/2px/components/accordions'],
    registryDependencies: ['faq-section'],
    files: ['examples/faq-section.tsx'],
    component: lazy(() => import('./examples/faq-section')),
  },
  {
    name: 'alert-box-example',
    dependencies: [],
    registryDependencies: ['alert-box'],
    files: ['examples/alert-box.tsx'],
    component: lazy(() => import('./examples/alert-box')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: ['badge'],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
  {
    name: 'breadcrumbs-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'calendar-example',
    dependencies: [],
    registryDependencies: ['calendar'],
    files: ['examples/calendar.tsx'],
    component: lazy(() => import('./examples/calendar')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'marquee-section-example',
    dependencies: [],
    registryDependencies: ['marquee-section'],
    files: ['examples/marquee-section.tsx'],
    component: lazy(() => import('./examples/marquee-section')),
  },
  {
    name: 'tabs-example',
    dependencies: [],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
  {
    name: 'swatch-example',
    dependencies: [],
    registryDependencies: ['swatch'],
    files: ['examples/swatch.tsx'],
    component: lazy(() => import('./examples/swatch')),
  },
  {
    name: 'product-card-example',
    dependencies: [],
    registryDependencies: ['product-card'],
    files: ['examples/product-card.tsx'],
    component: lazy(() => import('./examples/product-card')),
  },
  {
    name: 'slideshow-section-example',
    dependencies: [],
    registryDependencies: ['slideshow-section'],
    files: ['examples/slideshow-section.tsx'],
    component: lazy(() => import('./examples/slideshow-section')),
  },
] satisfies Components
