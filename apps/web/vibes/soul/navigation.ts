import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [
      { title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' },
      { title: 'Installation', slug: 'installation', file: 'docs/installation.mdx' },
    ],
  },
  {
    title: 'Styles',
    pages: [
      { title: 'Electric', slug: 'electric', file: 'docs/electric.mdx' },
      { title: 'Warm', slug: 'warm', file: 'docs/warm.mdx' },
      { title: 'Luxury', slug: 'luxury', file: 'docs/luxury.mdx' },
    ],
  },
  {
    title: 'Components',
    pages: [
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },
      {
        title: 'Alert',
        slug: 'alert',
        file: 'docs/alert.mdx',
        component: 'alert',
      },
      {
        title: 'Animated Link',
        slug: 'animated-link',
        file: 'docs/animated-link.mdx',
        component: 'animated-link',
      },
      {
        title: 'Announcement Bar',
        slug: 'announcement-bar',
        file: 'docs/announcement-bar.mdx',
        component: 'announcement-bar',
      },
      { title: 'Badge', slug: 'badge', file: 'docs/badge.mdx', component: 'badge' },
      {
        title: 'Blog Post Card',
        slug: 'blog-post-card',
        file: 'docs/blog-post-card.mdx',
        component: 'blog-post-card',
      },
      {
        title: 'Blog Post List',
        slug: 'blog-post-list',
        file: 'docs/blog-post-list.mdx',
        component: 'blog-post-list',
      },
      {
        title: 'Breadcrumbs',
        slug: 'breadcrumbs',
        file: 'docs/breadcrumbs.mdx',
        component: 'breadcrumbs',
      },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx', component: 'button' },
      {
        title: 'Button Link',
        slug: 'button-link',
        file: 'docs/button-link.mdx',
        component: 'button-link',
      },
      {
        title: 'Calendar',
        slug: 'calendar',
        file: 'docs/calendar.mdx',
        component: 'calendar',
      },
      {
        title: 'Card',
        slug: 'card',
        file: 'docs/card.mdx',
        component: 'card',
      },
      {
        title: 'Card Carousel',
        slug: 'card-carousel',
        file: 'docs/card-carousel.mdx',
        component: 'card-carousel',
      },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx', component: 'checkbox' },
      { title: 'Countdown', slug: 'countdown', file: 'docs/countdown.mdx', component: 'countdown' },
      { title: 'Counter', slug: 'counter', file: 'docs/counter.mdx', component: 'counter' },
      { title: 'Discount', slug: 'discount', file: 'docs/discount.mdx', component: 'discount' },
      { title: 'Dropdown', slug: 'dropdown', file: 'docs/dropdown.mdx', component: 'dropdown' },
      { title: 'Favorite', slug: 'favorite', file: 'docs/favorite.mdx', component: 'favorite' },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx', component: 'input' },
      {
        title: 'Navigation',
        slug: 'navigation',
        file: 'docs/navigation.mdx',
        component: 'navigation',
      },
      {
        title: 'Pagination',
        slug: 'pagination',
        file: 'docs/pagination.mdx',
        component: 'pagination',
      },
      {
        title: 'Product Card',
        slug: 'product-card',
        file: 'docs/product-card.mdx',
        component: 'product-card',
      },
      {
        title: 'Product Carousel',
        slug: 'product-carousel',
        file: 'docs/products-carousel.mdx',
        component: 'products-carousel',
      },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
        component: 'product-description',
      },
      {
        title: 'Product List',
        slug: 'product-list',
        file: 'docs/products-list.mdx',
        component: 'products-list',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },

      {
        title: 'Spinner',
        slug: 'spinner',
        file: 'docs/spinner.mdx',
        component: 'spinner',
      },
      {
        title: 'Text Area',
        slug: 'textarea',
        file: 'docs/textarea.mdx',
        component: 'textarea',
      },
    ],
  },
  {
    title: 'Sections',
    pages: [
      { title: 'Cart', slug: 'cart', file: 'docs/cart.mdx', component: 'cart' },
      { title: 'Checkout', slug: 'checkout', file: 'docs/checkout.mdx', component: 'checkout' },
      {
        title: 'Create Account',
        slug: 'create-account',
        file: 'docs/create-account.mdx',
        component: 'create-account',
      },
      { title: 'Discount', slug: 'discount', file: 'docs/discount.mdx', component: 'discount' },
      { title: 'Feature', slug: 'feature', file: 'docs/feature.mdx', component: 'feature-grid' },
      {
        title: 'Featured Blog Post List',
        slug: 'featured-blog-post-list',
        file: 'docs/featured-blog-post-list.mdx',
        component: 'featured-blog-post-list',
      },
      {
        title: 'Featured Image',
        slug: 'featured-image',
        file: 'docs/featured-image.mdx',
        component: 'featured-image',
      },
      {
        title: 'Featured Products Carousel',
        slug: 'featured-products-carousel',
        file: 'docs/featured-products-carousel.mdx',
        component: 'featured-products-carousel',
      },
      {
        title: 'Featured Product List',
        slug: 'featured-products-list',
        file: 'docs/featured-products-list.mdx',
        component: 'featured-products-list',
      },
      {
        title: 'Featured Video',
        slug: 'featured-video',
        file: 'docs/featured-video.mdx',
        component: 'featured-video',
      },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx', component: 'footer' },
      {
        title: 'Icon Block',
        slug: 'icon-block',
        file: 'docs/icon-block.mdx',
        component: 'icon-block',
      },
      {
        title: 'Log In',
        slug: 'log-in',
        file: 'docs/log-in.mdx',
        component: 'log-in',
      },
      {
        title: 'Order History Section',
        slug: 'order-history-section',
        file: 'docs/order-history-section.mdx',
        component: 'order-history-section',
      },
      {
        title: 'Product List',
        slug: 'product-list-section',
        file: 'docs/products-list-section.mdx',
        component: 'products-list-section',
      },
      {
        title: 'Product Detail',
        slug: 'product-detail',
        file: 'docs/product-detail.mdx',
        component: 'product-detail',
      },
      { title: 'Reviews', slug: 'reviews', file: 'docs/reviews.mdx', component: 'reviews' },
      {
        title: 'Slideshow',
        slug: 'slideshow',
        file: 'docs/slideshow.mdx',
        component: 'slideshow',
      },
      {
        title: 'Subscribe',
        slug: 'subscribe',
        file: 'docs/subscribe.mdx',
        component: 'subscribe',
      },
    ],
  },
  {
    title: 'Pages',
    pages: [
      {
        title: 'Home',
        slug: 'page-home',
        file: 'docs/page-home.mdx',
      },
      {
        title: 'Products',
        slug: 'page-products',
        file: 'docs/page-products.mdx',
      },
      {
        title: 'Product',
        slug: 'page-product',
        file: 'docs/page-product.mdx',
      },
      {
        title: 'Cart',
        slug: 'page-cart',
        file: 'docs/page-cart.mdx',
      },
      {
        title: 'Blog',
        slug: 'page-blog',
        file: 'docs/page-blog.mdx',
      },
      {
        title: 'Blog Post',
        slug: 'page-blog-post',
        file: 'docs/page-blog-post.mdx',
      },
      {
        title: 'Not Found',
        slug: 'page-not-found',
        file: 'docs/page-not-found.mdx',
      },
    ],
  },
  {
    title: 'Form',
    pages: [{ title: 'Example', slug: 'form', file: 'docs/form.mdx' }],
  },
] satisfies Navigation
