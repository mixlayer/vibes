import Link from 'next/link'

import { posts } from '@/vibes/soul/examples/sections/blog-post-list'
import { headerLinks } from '@/vibes/soul/examples/sections/header/electric'
import { AnnouncementBar } from '@/vibes/soul/primitives/announcement-bar'
import { BlogPostCard } from '@/vibes/soul/primitives/blog-post-card'
import {
  Carousel,
  CarouselContent,
  CarouselControls,
  CarouselItem,
} from '@/vibes/soul/primitives/carousel'
import { BlogPostContent } from '@/vibes/soul/sections/blog-post-content'
import { Footer } from '@/vibes/soul/sections/footer'
import {
  Amex,
  ApplePay,
  Bitcoin,
  GooglePay,
  Mastercard,
  Paypal,
  Visa,
} from '@/vibes/soul/sections/footer/payment-icons'
import { Facebook, Instagram, X, Youtube } from '@/vibes/soul/sections/footer/social-icons'
import { Header } from '@/vibes/soul/sections/header'
import { Subscribe } from '@/vibes/soul/sections/subscribe'

interface Link {
  label: string
  href: string
}

interface Image {
  src: string
  alt: string
}

interface BlogPostPageProps {
  id: string
  title: string
  author: string
  date: string
  image: Image
  content: string
  relatedPostsTitle: string
  cta?: Link
}

const socialMediaLinks = [
  {
    href: '#',
    icon: <Facebook />,
  },
  {
    href: '#',
    icon: <X />,
  },
  {
    href: '#',
    icon: <Instagram />,
  },
  {
    href: '#',
    icon: <Youtube />,
  },
]

const paymentIconsArray: React.ReactNode[] = [
  <Visa key="Visa" />,
  <Amex key="Amex" />,
  <Mastercard key="Mastercard" />,
  <Paypal key="Paypal" />,
  <GooglePay key="GooglePay" />,
  <ApplePay key="ApplePay" />,
  <Bitcoin key="Bitcoin" />,
]

const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export const BlogPostPage = function BlogPostPage({
  id,
  title,
  author,
  date,
  content,
  image,
  relatedPostsTitle,
  cta,
}: BlogPostPageProps) {
  return (
    <>
      <AnnouncementBar>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;welcome&quot;</strong>
      </AnnouncementBar>

      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />

      <BlogPostContent
        id={id}
        title={title}
        author={author}
        date={date}
        image={image}
        content={content}
      />

      <section className="mb-6 @container @xl:mb-8">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap justify-between gap-5 px-3 @xl:px-6 @4xl:items-end @5xl:px-20">
          <h2 className="font-heading text-2xl font-medium leading-none">{relatedPostsTitle}</h2>
          {cta != null && cta.href !== '' && cta.label !== '' && (
            <Link
              href={cta.href}
              className="rounded-lg font-semibold text-foreground ring-primary focus-visible:outline-0 focus-visible:ring-2"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </section>

      <Carousel className="mb-10 @4xl:mb-20">
        <CarouselContent className="mb-20 px-3 @xl:px-6 @5xl:px-20">
          {posts.map(
            ({
              id: postId,
              title: postTitle,
              date: postDate,
              content: postContent,
              href: postHref,
              image: postImage,
            }) => {
              return (
                <CarouselItem className="basis-full @md:basis-1/2 @xl:basis-1/3">
                  <BlogPostCard
                    key={postId}
                    id={postId}
                    title={postTitle}
                    date={postDate}
                    content={postContent}
                    href={postHref}
                    image={postImage}
                  />
                </CarouselItem>
              )
            }
          )}
        </CarouselContent>
        <CarouselControls className="px-3 @xl:px-6 @5xl:px-20" />
      </Carousel>

      <Subscribe
        title="Sign up for our newsletter"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      />

      <Footer
        logo="SOUL"
        sections={[
          {
            title: 'Categories',
            links: [
              { label: 'Coats & Jackets', href: '#' },
              { label: 'T-Shirts', href: '#' },
              { label: 'Sweatshirts', href: '#' },
              { label: 'Pants', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Stories', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Stores', href: '#' },
            ],
          },
          {
            title: 'Help & Support',
            links: [
              { label: 'FAQs', href: '#' },
              { label: 'Contact Us', href: '#' },
              { label: 'Returns', href: '#' },
              { label: 'Shipping', href: '#' },
            ],
          },
        ]}
        contactInformation={{
          address: 'info@mywebsite.com',
          phone: '+(1)408 123 4567',
        }}
        copyright={`© ${new Date().getFullYear().toString()} SOUL - Powered by Monogram`}
        paymentIcons={paymentIconsArray}
        socialMediaLinks={socialMediaLinks}
      />
    </>
  )
}
