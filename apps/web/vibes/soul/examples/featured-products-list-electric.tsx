import FeaturedProductList from '@/vibes/soul/components/featured-products-list'
import { Product } from '@/vibes/soul/components/product-card'

export const featuredProducts: {
  title: string
  description: string
  cta: { label: string; href: string }
  list: Product[]
} = {
  title: 'Our Plants',
  description: '',
  cta: {
    label: 'Shop Now',
    href: '#',
  },
  list: [
    {
      id: '1',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'Indestructible',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '2',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '3',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '4',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '6',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/gfGRQi5pHeJ',
        altText: 'Product Name',
      },
      href: '#',
    },
    {
      id: '5',
      name: 'Product Name',
      subtitle: 'Blue/Black/Green',
      // badge: 'New',
      price: '$24.99',
      image: {
        src: 'https://rstr.in/monogram/vibes/lJg081kQqvc',
        altText: 'Product Name',
      },
      href: '#',
    },
  ],
}

export default function Preview() {
  return (
    <FeaturedProductList
      title={featuredProducts.title}
      description={featuredProducts.description}
      cta={{
        label: featuredProducts.cta.label,
        href: featuredProducts.cta.href,
      }}
      products={featuredProducts.list}
    />
  )
}
