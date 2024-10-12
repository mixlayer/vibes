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
    name: 'alert-example',
    dependencies: [],
    registryDependencies: ['alert'],
    files: ['examples/alert.tsx'],
    component: lazy(() => import('./examples/alert')),
  },
  {
    name: 'animated-link-example',
    dependencies: [],
    registryDependencies: ['animated-link'],
    files: ['examples/animated-link.tsx'],
    component: lazy(() => import('./examples/animated-link')),
  },
  {
    name: 'announcement-bar-example',
    dependencies: [],
    registryDependencies: ['announcement-bar'],
    files: ['examples/announcement-bar.tsx'],
    component: lazy(() => import('./examples/announcement-bar')),
  },
  {
    name: 'badge-example',
    dependencies: [],
    registryDependencies: ['badge'],
    files: ['examples/badge.tsx'],
    component: lazy(() => import('./examples/badge')),
  },
  {
    name: 'blog-post-card-example',
    dependencies: [],
    registryDependencies: ['blog-post-card'],
    files: ['examples/blog-post-card.tsx'],
    component: lazy(() => import('./examples/blog-post-card')),
  },
  {
    name: 'blog-post-list-example',
    dependencies: [],
    registryDependencies: ['blog-post-list'],
    files: ['examples/blog-post-list.tsx'],
    component: lazy(() => import('./examples/blog-post-list')),
  },
  {
    name: 'breadcrumbs-electric-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-electric'],
    files: ['examples/breadcrumbs-electric.tsx'],
    component: lazy(() => import('./examples/breadcrumbs-electric')),
  },
  {
    name: 'breadcrumbs-warm-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-warm'],
    files: ['examples/breadcrumbs-warm.tsx'],
    component: lazy(() => import('./examples/breadcrumbs-warm')),
  },
  {
    name: 'breadcrumbs-luxury-example',
    dependencies: [],
    registryDependencies: ['breadcrumbs-luxury'],
    files: ['examples/breadcrumbs-luxury.tsx'],
    component: lazy(() => import('./examples/breadcrumbs-luxury')),
  },
  {
    name: 'button-example',
    dependencies: [],
    registryDependencies: ['button'],
    files: ['examples/button.tsx'],
    component: lazy(() => import('./examples/button')),
  },
  {
    name: 'card-example',
    dependencies: [],
    registryDependencies: ['card'],
    files: ['examples/card.tsx'],
    component: lazy(() => import('./examples/card')),
  },
  {
    name: 'cart-electric-example',
    dependencies: [],
    registryDependencies: ['cart-electric'],
    files: ['examples/cart-electric.tsx'],
    component: lazy(() => import('./examples/cart-electric')),
  },
  {
    name: 'cart-warm-example',
    dependencies: [],
    registryDependencies: ['cart-warm'],
    files: ['examples/cart-warm.tsx'],
    component: lazy(() => import('./examples/cart-warm')),
  },
  {
    name: 'cart-luxury-example',
    dependencies: [],
    registryDependencies: ['cart-luxury'],
    files: ['examples/cart-luxury.tsx'],
    component: lazy(() => import('./examples/cart-luxury')),
  },
  {
    name: 'card-carousel-electric-example',
    dependencies: [],
    registryDependencies: ['card-carousel-electric'],
    files: ['examples/card-carousel-electric.tsx'],
    component: lazy(() => import('./examples/card-carousel-electric')),
  },
  {
    name: 'card-carousel-warm-example',
    dependencies: [],
    registryDependencies: ['card-carousel-warm'],
    files: ['examples/card-carousel-warm.tsx'],
    component: lazy(() => import('./examples/card-carousel-warm')),
  },
  {
    name: 'card-carousel-luxury-example',
    dependencies: [],
    registryDependencies: ['card-carousel-luxury'],
    files: ['examples/card-carousel-luxury.tsx'],
    component: lazy(() => import('./examples/card-carousel-luxury')),
  },
  {
    name: 'checkbox-example',
    dependencies: [],
    registryDependencies: ['checkbox'],
    files: ['examples/checkbox.tsx'],
    component: lazy(() => import('./examples/checkbox')),
  },
  {
    name: 'checkout-example',
    dependencies: [],
    registryDependencies: ['checkout'],
    files: ['examples/checkout.tsx'],
    component: lazy(() => import('./examples/checkout')),
  },
  {
    name: 'counter-example',
    dependencies: [],
    registryDependencies: ['counter'],
    files: ['examples/counter.tsx'],
    component: lazy(() => import('./examples/counter')),
  },
  {
    name: 'create-account-example',
    dependencies: [],
    registryDependencies: ['create-account'],
    files: ['examples/create-account.tsx'],
    component: lazy(() => import('./examples/create-account')),
  },
  {
    name: 'discount-example',
    dependencies: [],
    registryDependencies: ['discount'],
    files: ['examples/discount.tsx'],
    component: lazy(() => import('./examples/discount')),
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
    name: 'feature-electric-example',
    dependencies: [],
    registryDependencies: ['feature-electric'],
    files: ['examples/feature-electric.tsx'],
    component: lazy(() => import('./examples/feature-electric')),
  },
  {
    name: 'feature-warm-example',
    dependencies: [],
    registryDependencies: ['feature-warm'],
    files: ['examples/feature-warm.tsx'],
    component: lazy(() => import('./examples/feature-warm')),
  },
  {
    name: 'feature-luxury-example',
    dependencies: [],
    registryDependencies: ['feature-luxury'],
    files: ['examples/feature-luxury.tsx'],
    component: lazy(() => import('./examples/feature-luxury')),
  },
  {
    name: 'featured-blog-post-list-example',
    dependencies: [],
    registryDependencies: ['featured-blog-post-list'],
    files: ['examples/featured-blog-post-list.tsx'],
    component: lazy(() => import('./examples/featured-blog-post-list')),
  },
  {
    name: 'featured-image-electric-example',
    dependencies: [],
    registryDependencies: ['featured-image-electric'],
    files: ['examples/featured-image-electric.tsx'],
    component: lazy(() => import('./examples/featured-image-electric')),
  },
  {
    name: 'featured-image-warm-example',
    dependencies: [],
    registryDependencies: ['featured-image-warm'],
    files: ['examples/featured-image-warm.tsx'],
    component: lazy(() => import('./examples/featured-image-warm')),
  },
  {
    name: 'featured-image-luxury-example',
    dependencies: [],
    registryDependencies: ['featured-image-luxury'],
    files: ['examples/featured-image-luxury.tsx'],
    component: lazy(() => import('./examples/featured-image-luxury')),
  },
  {
    name: 'featured-products-carousel-example',
    dependencies: [],
    registryDependencies: ['featured-products-carousel'],
    files: ['examples/featured-products-carousel.tsx'],
    component: lazy(() => import('./examples/featured-products-carousel')),
  },
  {
    name: 'featured-products-list-electric-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-electric'],
    files: ['examples/featured-products-list-electric.tsx'],
    component: lazy(() => import('./examples/featured-products-list-electric')),
  },
  {
    name: 'featured-products-list-warm-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-warm'],
    files: ['examples/featured-products-list-warm.tsx'],
    component: lazy(() => import('./examples/featured-products-list-warm')),
  },
  {
    name: 'featured-products-list-luxury-example',
    dependencies: [],
    registryDependencies: ['featured-products-list-luxury'],
    files: ['examples/featured-products-list-luxury.tsx'],
    component: lazy(() => import('./examples/featured-products-list-luxury')),
  },
  {
    name: 'featured-video-example',
    dependencies: [],
    registryDependencies: ['featured-video'],
    files: ['examples/featured-video.tsx'],
    component: lazy(() => import('./examples/featured-video')),
  },
  {
    name: 'footer-electric-example',
    dependencies: [],
    registryDependencies: ['footer-electric'],
    files: ['examples/footer-electric.tsx'],
    component: lazy(() => import('./examples/footer-electric')),
  },
  {
    name: 'footer-warm-example',
    dependencies: [],
    registryDependencies: ['footer-warm'],
    files: ['examples/footer-warm.tsx'],
    component: lazy(() => import('./examples/footer-warm')),
  },
  {
    name: 'footer-luxury-example',
    dependencies: [],
    registryDependencies: ['footer-luxury'],
    files: ['examples/footer-luxury.tsx'],
    component: lazy(() => import('./examples/footer-luxury')),
  },
  {
    name: 'header-electric-example',
    dependencies: [],
    registryDependencies: ['header-electric'],
    files: ['examples/header-electric.tsx'],
    component: lazy(() => import('./examples/header-electric')),
  },
  {
    name: 'header-warm-example',
    dependencies: [],
    registryDependencies: ['header-warm'],
    files: ['examples/header-warm.tsx'],
    component: lazy(() => import('./examples/header-warm')),
  },
  {
    name: 'header-luxury-example',
    dependencies: [],
    registryDependencies: ['header-luxury'],
    files: ['examples/header-luxury.tsx'],
    component: lazy(() => import('./examples/header-luxury')),
  },
  {
    name: 'icon-block-example',
    dependencies: [],
    registryDependencies: ['icon-block'],
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
    name: 'log-in-example',
    dependencies: [],
    registryDependencies: ['log-in'],
    files: ['examples/log-in.tsx'],
    component: lazy(() => import('./examples/log-in')),
  },
  {
    name: 'page-blog-example',
    dependencies: [],
    registryDependencies: ['page-blog'],
    files: ['examples/page-blog.tsx'],
    component: lazy(() => import('./examples/page-blog')),
  },
  {
    name: 'page-cart-electric-example',
    dependencies: [],
    registryDependencies: ['page-cart-electric'],
    files: ['examples/page-cart-electric.tsx'],
    component: lazy(() => import('./examples/page-cart-electric')),
  },
  {
    name: 'page-cart-warm-example',
    dependencies: [],
    registryDependencies: ['page-cart-warm'],
    files: ['examples/page-cart-warm.tsx'],
    component: lazy(() => import('./examples/page-cart-warm')),
  },
  {
    name: 'page-cart-luxury-example',
    dependencies: [],
    registryDependencies: ['page-cart-luxury'],
    files: ['examples/page-cart-luxury.tsx'],
    component: lazy(() => import('./examples/page-cart-luxury')),
  },
  {
    name: 'page-home-electric-example',
    dependencies: [],
    registryDependencies: ['page-home-electric'],
    files: ['examples/page-home-electric.tsx'],
    component: lazy(() => import('./examples/page-home-electric')),
  },
  {
    name: 'page-home-warm-example',
    dependencies: [],
    registryDependencies: ['page-home-warm'],
    files: ['examples/page-home-warm.tsx'],
    component: lazy(() => import('./examples/page-home-warm')),
  },
  {
    name: 'page-home-luxury-example',
    dependencies: [],
    registryDependencies: ['page-home-luxury'],
    files: ['examples/page-home-luxury.tsx'],
    component: lazy(() => import('./examples/page-home-luxury')),
  },
  {
    name: 'page-product-electric-example',
    dependencies: [],
    registryDependencies: ['page-product-electric'],
    files: ['examples/page-product-electric.tsx'],
    component: lazy(() => import('./examples/page-product-electric')),
  },
  {
    name: 'page-product-warm-example',
    dependencies: [],
    registryDependencies: ['page-product-warm'],
    files: ['examples/page-product-warm.tsx'],
    component: lazy(() => import('./examples/page-product-warm')),
  },
  {
    name: 'page-product-luxury-example',
    dependencies: [],
    registryDependencies: ['page-product-luxury'],
    files: ['examples/page-product-luxury.tsx'],
    component: lazy(() => import('./examples/page-product-luxury')),
  },
  {
    name: 'page-products-electric-example',
    dependencies: [],
    registryDependencies: ['page-products-electric'],
    files: ['examples/page-products-electric.tsx'],
    component: lazy(() => import('./examples/page-products-electric')),
  },
  {
    name: 'page-products-warm-example',
    dependencies: [],
    registryDependencies: ['page-products-warm'],
    files: ['examples/page-products-warm.tsx'],
    component: lazy(() => import('./examples/page-products-warm')),
  },
  {
    name: 'page-products-luxury-example',
    dependencies: [],
    registryDependencies: ['page-products-luxury'],
    files: ['examples/page-products-luxury.tsx'],
    component: lazy(() => import('./examples/page-products-luxury')),
  },
  //
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
    name: 'products-carousel-example',
    dependencies: [],
    registryDependencies: ['products-carousel'],
    files: ['examples/products-carousel.tsx'],
    component: lazy(() => import('./examples/products-carousel')),
  },
  {
    name: 'product-detail-electric-example',
    dependencies: [],
    registryDependencies: ['product-detail-electric'],
    files: ['examples/product-detail-electric.tsx'],
    component: lazy(() => import('./examples/product-detail-electric')),
  },
  {
    name: 'product-detail-warm-example',
    dependencies: [],
    registryDependencies: ['product-detail-warm'],
    files: ['examples/product-detail-warm.tsx'],
    component: lazy(() => import('./examples/product-detail-warm')),
  },
  {
    name: 'product-detail-luxury-example',
    dependencies: [],
    registryDependencies: ['product-detail-luxury'],
    files: ['examples/product-detail-luxury.tsx'],
    component: lazy(() => import('./examples/product-detail-luxury')),
  },
  {
    name: 'products-list-electric-example',
    dependencies: [],
    registryDependencies: ['products-list-electric'],
    files: ['examples/products-list-electric.tsx'],
    component: lazy(() => import('./examples/products-list-electric')),
  },
  {
    name: 'products-list-warm-example',
    dependencies: [],
    registryDependencies: ['products-list-warm'],
    files: ['examples/products-list-warm.tsx'],
    component: lazy(() => import('./examples/products-list-warm')),
  },
  {
    name: 'products-list-luxury-example',
    dependencies: [],
    registryDependencies: ['products-list-luxury'],
    files: ['examples/products-list-luxury.tsx'],
    component: lazy(() => import('./examples/products-list-luxury')),
  },
  {
    name: 'product-description-electric-example',
    dependencies: [],
    registryDependencies: ['product-description-electric'],
    files: ['examples/product-description-electric.tsx'],
    component: lazy(() => import('./examples/product-description-electric')),
  },
  {
    name: 'product-description-warm-example',
    dependencies: [],
    registryDependencies: ['product-description-warm'],
    files: ['examples/product-description-warm.tsx'],
    component: lazy(() => import('./examples/product-description-warm')),
  },
  {
    name: 'product-description-luxury-example',
    dependencies: [],
    registryDependencies: ['product-description-luxury'],
    files: ['examples/product-description-luxury.tsx'],
    component: lazy(() => import('./examples/product-description-luxury')),
  },
  {
    name: 'products-header-example',
    dependencies: [],
    registryDependencies: ['products-header'],
    files: ['examples/products-header.tsx'],
    component: lazy(() => import('./examples/products-header')),
  },
  {
    name: 'rating-example',
    dependencies: [],
    registryDependencies: ['rating'],
    files: ['examples/rating.tsx'],
    component: lazy(() => import('./examples/rating')),
  },
  {
    name: 'reviews-example',
    dependencies: [],
    registryDependencies: ['reviews'],
    files: ['examples/reviews.tsx'],
    component: lazy(() => import('./examples/reviews')),
  },
  {
    name: 'slide-carousel-example',
    dependencies: [],
    registryDependencies: ['slide-carousel'],
    files: ['examples/slide-carousel.tsx'],
    component: lazy(() => import('./examples/slide-carousel')),
  },
  {
    name: 'slideshow-electric-example',
    dependencies: [],
    registryDependencies: ['slideshow-electric'],
    files: ['examples/slideshow-electric.tsx'],
    component: lazy(() => import('./examples/slideshow-electric')),
  },
  {
    name: 'slideshow-warm-example',
    dependencies: [],
    registryDependencies: ['slideshow-warm'],
    files: ['examples/slideshow-warm.tsx'],
    component: lazy(() => import('./examples/slideshow-warm')),
  },
  {
    name: 'slideshow-luxury-example',
    dependencies: [],
    registryDependencies: ['slideshow-luxury'],
    files: ['examples/slideshow-luxury.tsx'],
    component: lazy(() => import('./examples/slideshow-luxury')),
  },
  {
    name: 'spinner-example',
    dependencies: [],
    registryDependencies: ['spinner'],
    files: ['examples/spinner.tsx'],
    component: lazy(() => import('./examples/spinner')),
  },
  {
    name: 'subscribe-example',
    dependencies: [],
    registryDependencies: ['subscribe'],
    files: ['examples/subscribe.tsx'],
    component: lazy(() => import('./examples/subscribe')),
  },
  {
    name: 'textarea-example',
    dependencies: [],
    registryDependencies: ['textarea'],
    files: ['examples/textarea.tsx'],
    component: lazy(() => import('./examples/textarea')),
  },
] satisfies Components
