import ProductDetail from '@/vibes/soul/components/product-detail'

export const product = {
  id: '1',
  name: 'ELBA PENNY LOAFER',
  price: '$19.95',
  image: {
    src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
    altText:
      'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
  },
  images: [
    {
      src: 'https://rstr.in/monogram/vibes/JCwYbAk9Nhi',
      altText:
        'A woman wearing a white crocheted cardigan with green trim and orange flowers, green pants, and brown suede loafers.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Qrk6pJMoWwZ',
      altText: 'A brown suede loafer with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/ozMaktUeiPy',
      altText: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/Pk6sizxQWc5',
      altText: 'A pair of brown suede loafers with a leather sole.',
    },
    {
      src: 'https://rstr.in/monogram/vibes/cLe51lBiEUD',
      altText: 'A brown suede loafer with a leather sole.',
    },
  ],
  href: '#',
  rating: 4.8,
  description:
    'Our modern take on a classic penny loafer. Handcrafted in a cumin suede, the ELBA updates the timeless style with our signature notched welt and angled leather heel. We’ll live in these loafers with everything from oversized suits, to cuffed jeans and socks to long skirts.',
  options: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
  swatches: [
    {
      id: '1',
      name: 'Espresso Spazzolato',
      image: {
        src: 'https://rstr.in/monogram/vibes/RFj64LJfm2W',
        altText: 'Espresso Spazzolato',
      },
    },
    {
      id: '2',
      name: 'Black Spazzolato',
      image: {
        src: 'https://rstr.in/monogram/vibes/hUfyHZBL60V',
        altText: 'Black Spazzolato',
      },
    },
    {
      id: '3',
      name: 'Hickory Embossed Croc with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/gdktSq34nrI',
        altText: 'Hickory Embossed Croc with Hardware',
      },
    },
    {
      id: '4',
      name: 'Black Embossed Croc',
      image: {
        src: 'https://rstr.in/monogram/vibes/HYmNAiU6Z5Y',
        altText: 'Black Embossed Croc',
      },
    },
    {
      id: '5',
      name: 'Bark Suede Stain Resistant with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/oyhxIY4PpNI',
        altText: 'Bark Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '6',
      name: 'Cumin Suede Stain Resistant with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/ZmZQ9_i62ph',
        altText: 'Cumin Suede Stain Resistant with Hardware',
      },
    },
    {
      id: '7',
      name: 'Cherry Embossed Croc with Hardware',
      image: {
        src: 'https://rstr.in/monogram/vibes/Y_cqEwBGS2f',
        altText: 'Cherry Embossed Croc with Hardware',
      },
    },
  ],
}

export default function Preview() {
  return <ProductDetail product={product} />
}
