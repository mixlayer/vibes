import { Components } from '@/vibes/schema';

export const sections = [
  {
    name: 'account-layout',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/account-layout/index.tsx'],
  },
  {
    name: 'account-settings-section',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/account-settings-section/index.tsx'],
  },
  {
    name: 'address-list-section',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/address-list-section/index.tsx'],
  },
  {
    name: 'blog-post-list',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/blog-post-list/index.tsx'],
  },
  {
    name: 'cart',
    dependencies: ['clsx'],
    registryDependencies: ['button', 'counter'],
    files: ['sections/cart/index.tsx'],
  },
  {
    name: 'checkout',
    dependencies: [],
    registryDependencies: [],
    files: ['sections/checkout/index.tsx'],
  },
  {
    name: 'countdown',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/countdown/index.tsx'],
  },
  {
    name: 'compare-section',
    dependencies: [],
    registryDependencies: [],
    files: ['sections/compare-section/index.tsx'],
  },
  {
    name: 'discount',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/discount/index.tsx'],
  },
  {
    name: 'featured-blog-post-list',
    dependencies: [],
    registryDependencies: ['button', 'blog-post-card'],
    files: ['sections/featured-blog-post-list/index.tsx'],
  },
  {
    name: 'featured-image',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['sections/featured-image/index.tsx'],
  },
  {
    name: 'featured-products-carousel',
    dependencies: [],
    registryDependencies: ['products-carousel'],
    files: ['sections/featured-products-carousel/index.tsx'],
  },
  {
    name: 'featured-products-list',
    dependencies: [],
    registryDependencies: ['button', 'product-card'],
    files: ['sections/featured-products-list/index.tsx'],
  },
  {
    name: 'featured-video',
    dependencies: ['clsx'],
    registryDependencies: ['button'],
    files: ['sections/featured-video/index.tsx'],
  },
  {
    name: 'footer',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/footer/index.tsx'],
  },
  {
    name: 'forgot-password-section',
    dependencies: [],
    registryDependencies: ['button', 'input'],
    files: [
      'sections/forgot-password-section/index.tsx',
      'sections/forgot-password-section/forgot-password-form.tsx',
      'sections/forgot-password-section/schema.ts',
    ],
  },
  {
    name: 'header-section',
    dependencies: ['clsx', 'react-headroom'],
    registryDependencies: ['banner', 'navigation'],
    files: ['sections/header-section/index.tsx'],
  },
  {
    name: 'icon-block',
    dependencies: ['clsx', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/icon-block/index.tsx', 'primitives/icon/index.tsx'],
  },
  {
    name: 'order-history-section',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/order-history-section/index.tsx'],
  },
  {
    name: 'product-detail',
    dependencies: ['clsx', 'embla-carousel-react'],
    registryDependencies: ['button', 'favorite', 'product-card', 'rating'],
    files: ['sections/product-detail/index.tsx', 'sections/product-detail/product-gallery.tsx'],
  },
  {
    name: 'products-list-section',
    dependencies: ['nuqs'],
    registryDependencies: ['products-list', 'button', 'toggle-group', 'cursor-pagination'],
    files: [
      'sections/products-list-section/index.tsx',
      'sections/products-list-section/filters-panel.tsx',
      'sections/products-list-section/sorting.tsx',
    ],
  },
  {
    name: 'reset-password-section',
    dependencies: [],
    registryDependencies: ['button', 'input'],
    files: [
      'sections/reset-password-section/index.tsx',
      'sections/reset-password-section/reset-password-form.tsx',
      'sections/reset-password-section/schema.ts',
    ],
  },
  {
    name: 'reviews',
    dependencies: [],
    registryDependencies: [],
    files: ['sections/reviews/index.tsx'],
  },
  {
    name: 'sign-in-section',
    dependencies: ['clsx'],
    registryDependencies: ['button', 'input'],
    files: [
      'sections/sign-in-section/index.tsx',
      'sections/sign-in-section/sign-in-form.tsx',
      'sections/sign-in-section/schema.ts',
    ],
  },
  {
    name: 'sign-up-section',
    dependencies: ['clsx'],
    registryDependencies: ['button', 'input'],
    files: ['sections/sign-up-section/index.tsx'],
  },
  {
    name: 'slide-carousel',
    dependencies: ['clsx', 'embla-carousel-react', 'lucide-react'],
    registryDependencies: [],
    files: ['sections/slide-carousel/index.tsx'],
  },
  {
    name: 'slideshow',
    dependencies: ['clsx'],
    registryDependencies: [],
    files: ['sections/slideshow/index.tsx'],
  },
  {
    name: 'subscribe',
    dependencies: ['clsx'],
    registryDependencies: ['input'],
    files: ['sections/subscribe/index.tsx'],
  },
] satisfies Components;
