import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

import { clsx } from 'clsx'
import { Trash2 } from 'lucide-react'

import { Button } from '@/vibes/soul/components/button'
import { Counter } from '@/vibes/soul/components/counter'

interface Image {
  altText: string
  src: string
}

export interface CartLineItem {
  id: string
  image: Image
  title: string
  subtitle: string
  quantity: number
  price: string
}

interface CartSummary {
  title?: string
  subtotal: string | Promise<string>
  caption?: string
  subtotalLabel?: string
  shippingLabel?: string
  taxLabel?: string
  tax: string | Promise<string>
  grandTotalLabel?: string
  grandTotal: number | Promise<string>
}

// TODO: Labels
// TODO: Shipping & Tax TBD
// TODO: use single line or icon (?)
// Counter receive name prop & type submit
// TODO: Counter as input and Counter as submit buttons
// How to test loading state?

interface CartEmptyState {
  title: string
  subtitle: string
  cta: {
    label: string
    href: string
  }
}

interface CartProps {
  title?: string
  lineItems: CartLineItem[] | Promise<CartLineItem[]>
  summary: CartSummary
  emptyState: CartEmptyState
  removeLineItemAction(id: string): Promise<void> //formData.get('id')
  updateLineItemQuantityAction({ id, quantity }: { id: string; quantity: number }): Promise<void> //formData.get('id'), formData.get('quantity')
  redirectToCheckoutAction(): Promise<void>
}

export const Cart = async function Cart({
  title = 'Cart',
  lineItems,
  emptyState,
  removeLineItemAction,
}: CartProps) {
  // TODO: create a component to render in suspense and get resolved items in there
  const resolvedLineItems = await Promise.resolve(lineItems)

  return (
    <Suspense fallback={<CartSkeleton title={title} />}>
      <div className="mx-auto max-w-screen-2xl @container">
        <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
          {/* Cart Side */}
          <div className={clsx(resolvedLineItems.length > 0 && '@4xl:w-2/3', 'w-full')}>
            <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
              {title}
              {resolvedLineItems.length > 0 && (
                <span className="ml-4 text-contrast-200">{resolvedLineItems.length}</span>
              )}
            </h1>

            {/* Cart Items */}
            <ul className="flex flex-col gap-5 gap-y-10">
              {resolvedLineItems.map(
                ({ id, title: lineItemTitle, image, price, subtitle, quantity }) => (
                  <li
                    className="flex flex-col items-start gap-x-5 gap-y-6 @sm:flex-row @sm:items-center @sm:gap-y-4"
                    key={id}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 @sm:max-w-36">
                      <Image fill src={image.src} alt={image.altText} className="object-cover" />
                    </div>
                    <div className="flex flex-grow flex-wrap justify-between gap-y-2">
                      <div className="flex flex-col @xl:w-1/2 @xl:pr-4">
                        <span className="font-medium">{lineItemTitle}</span>
                        <span className="text-contrast-300">{subtitle}</span>
                      </div>
                      <div className="flex w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 @sm:justify-start @xl:w-1/2 @xl:flex-nowrap">
                        <span className="font-medium @xl:ml-auto">{price}</span>
                        <Counter current={quantity} />
                        {/* Remove Item Button & Confirmation Modal */}

                        <form action={removeLineItemAction.bind(null, id)}>
                          {/* TODO: useFormStatus to show spinner */}
                          <input type="hidden" name="line-item-id" value={id} />
                          <button
                            type="submit"
                            aria-label="Remove Item"
                            className="-ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 hover:bg-contrast-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                          >
                            <Trash2 strokeWidth={1} size={18} />
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                )
              )}

              {resolvedLineItems.length === 0 && (
                <div className="flex min-h-96 flex-col items-center justify-center">
                  <span className="mb-3 text-center font-heading text-5xl font-medium leading-none text-foreground">
                    {emptyState.title}
                  </span>
                  <h2 className="mb-10 text-center text-lg leading-none text-contrast-300">
                    {emptyState.subtitle}
                  </h2>
                  <Button asChild>
                    <Link href={emptyState.cta.href}>{emptyState.cta.label}</Link>
                  </Button>
                </div>
              )}
            </ul>
          </div>

          {/* Summary Side */}
          {resolvedLineItems.length > 0 && (
            <div className="@4xl:w-1/3">
              <h2 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
                Summary
              </h2>
              <table aria-label="Receipt Summary" className="w-full">
                <caption className="sr-only">Receipt Summary</caption>
                <tbody>
                  <tr className="border-b border-contrast-100">
                    <td>Subtotal</td>
                    <td className="py-4 text-right">$50.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="text-xl">
                    <th scope="row" className="text-left">
                      Grand Total
                    </th>
                    <td className="py-10 text-right">$59.50</td>
                  </tr>
                </tfoot>
              </table>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </Suspense>
  )
}

function CartSkeleton({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-screen-2xl @container">
      <div className="flex w-full flex-col gap-10 px-3 pb-10 pt-24 @xl:px-6 @4xl:flex-row @4xl:gap-20 @4xl:pb-20 @4xl:pt-32 @5xl:px-20">
        {/* Cart Side */}
        <div className="w-full">
          <h1 className="mb-10 font-heading text-4xl font-medium leading-none @xl:text-5xl">
            {title}
          </h1>
          {/* Cart Items */}
          <ul className="flex flex-col gap-5 gap-y-10">
            <div className="flex animate-pulse items-center gap-x-5">
              <div className="h-96 w-full rounded-lg bg-contrast-100" />
            </div>
          </ul>
        </div>

        {/* Summary Side */}
        <div className="mt-1 animate-pulse @4xl:w-1/3">
          <div className="mt-20 h-96 w-full rounded bg-contrast-100" />
        </div>
      </div>
    </div>
  )
}
