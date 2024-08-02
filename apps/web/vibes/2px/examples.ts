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
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'calendar-example',
    dependencies: ['react-day-picker', '@/vibes/2px/components/icons'],
    registryDependencies: ['calendar'],
    files: ['examples/calendar.tsx'],
    component: lazy(() => import('./examples/calendar')),
  },
  {
    name: 'breadcrumbs-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs'],
    files: ['examples/breadcrumbs.tsx'],
    component: lazy(() => import('./examples/breadcrumbs')),
  },
  {
    name: 'footer-section-example',
    dependencies: [],
    registryDependencies: ['footer-section'],
    files: ['examples/footer-section.tsx'],
    component: lazy(() => import('./examples/footer-section')),
  },
  {
    name: 'tabs-example',
    dependencies: [],
    registryDependencies: ['tabs'],
    files: ['examples/tabs.tsx'],
    component: lazy(() => import('./examples/tabs')),
  },
  {
    name: 'accordions-example',
    dependencies: [],
    registryDependencies: ['accordions'],
    files: ['examples/accordions.tsx'],
    component: lazy(() => import('./examples/accordions')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: ['badge'],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
] satisfies Components
