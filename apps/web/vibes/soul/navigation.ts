import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
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
        title: 'Announcement Bar',
        slug: 'announcement-bar',
        file: 'docs/announcement-bar.mdx',
        component: 'announcement-bar',
      },
      {
        title: 'Blog Post Card',
        slug: 'blog-post-card',
        file: 'docs/blog-post-card.mdx',
        component: 'blog-post-card',
      },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx', component: 'button' },
      {
        title: 'Category Card',
        slug: 'category-card',
        file: 'docs/category-card.mdx',
        component: 'category-card',
      },
      {
        title: 'Carousel',
        slug: 'carousel',
        file: 'docs/carousel.mdx',
        component: 'carousel',
      },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx', component: 'checkbox' },
      {
        title: 'Compare Bar',
        slug: 'compare-bar',
        file: 'docs/compare-bar.mdx',
        component: 'compare-bar',
      },
      { title: 'Dropdown', slug: 'dropdown', file: 'docs/dropdown.mdx', component: 'dropdown' },
      { title: 'Favorite', slug: 'favorite', file: 'docs/favorite.mdx', component: 'favorite' },
      { title: 'Feature', slug: 'feature', file: 'docs/feature.mdx', component: 'feature-grid' },
      {
        title: 'Feature (Grid)',
        slug: 'feature-grid',
        file: 'docs/feature-grid.mdx',
        component: 'feature',
      },
      {
        title: 'Featured Product List',
        slug: 'featured-product-list',
        file: 'docs/featured-product-list.mdx',
        component: 'featured-product-list',
      },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx', component: 'footer' },
      {
        title: 'Header',
        slug: 'header',
        file: 'docs/header.mdx',
        component: 'header',
      },
      { title: 'Hero', slug: 'hero', file: 'docs/hero.mdx', component: 'hero' },
      {
        title: 'Hero (Contained)',
        slug: 'hero-contained',
        file: 'docs/hero-contained.mdx',
        component: 'hero',
      },

      {
        title: 'Icon Block',
        slug: 'icon-block',
        file: 'docs/icon-block.mdx',
        component: 'icon-block',
      },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx', component: 'input' },
      { title: 'Label', slug: 'label', file: 'docs/label.mdx', component: 'label' },
      {
        title: 'Media Section',
        slug: 'media-section',
        file: 'docs/media-section.mdx',
        component: 'media-section',
      },
      {
        title: 'Media Section (Left)',
        slug: 'media-section-left',
        file: 'docs/media-section-left.mdx',
        component: 'media-section-left',
      },
      {
        title: 'Media Section (Right)',
        slug: 'media-section-right',
        file: 'docs/media-section-right.mdx',
        component: 'media-section-right',
      },
      {
        title: 'Newsletter',
        slug: 'newsletter',
        file: 'docs/newsletter.mdx',
        component: 'newsletter',
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
        title: 'Product Detail',
        slug: 'product-detail',
        file: 'docs/product-detail.mdx',
        component: 'product-detail',
      },
      {
        title: 'Product List',
        slug: 'product-list',
        file: 'docs/product-list.mdx',
        component: 'product-list',
      },
      {
        title: 'Product Description',
        slug: 'product-description',
        file: 'docs/product-description.mdx',
        component: 'product-description',
      },
      {
        title: 'Products Header',
        slug: 'products-header',
        file: 'docs/products-header.mdx',
        component: 'products-header',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },

      // Page Components
      {
        title: 'Page - Home',
        slug: 'page-home',
        file: 'docs/page-home.mdx',
        component: 'page-home',
      },
      {
        title: 'Page - Product',
        slug: 'page-product',
        file: 'docs/page-product.mdx',
        component: 'page-product',
      },
      {
        title: 'Page - Products',
        slug: 'page-products',
        file: 'docs/page-products.mdx',
        component: 'page-products',
      },
    ],
  },
] satisfies Navigation
