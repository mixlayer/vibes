import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Components',

    pages: [
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx' },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx' },
    ],
  },
] satisfies Navigation
