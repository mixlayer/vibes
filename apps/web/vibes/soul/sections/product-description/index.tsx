import Image from 'next/image'

import { Accordion, Accordions } from '@/vibes/soul/primitives/accordions'

export type AccordionItem = {
  title: string
  content: React.ReactNode
}

type Props = {
  accordions: AccordionItem[]
  image?: {
    src: string
    alt: string
  }
}

export function ProductDescription({ accordions, image }: Props) {
  return (
    <div className="@container">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-stretch px-4 py-10 @xl:px-6 @xl:py-14 @2xl:flex-row @4xl:px-8 @4xl:py-20">
        <div className="w-full pb-5 @2xl:w-1/2 @2xl:basis-1/2 @2xl:pr-6 @4xl:pr-8">
          <Accordions type="multiple" className="sticky top-6">
            {accordions.map((accordion, index) => (
              <Accordion key={index} title={accordion.title} value={index.toString()}>
                {accordion.content}
              </Accordion>
            ))}
          </Accordions>
        </div>

        <div className="w-full self-start pt-5 @2xl:w-1/2 @2xl:basis-1/2 @2xl:pl-6 @4xl:pl-8">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl @2xl:aspect-[4/5]">
            {image && (
              <Image
                src={image.src}
                fill
                alt={image.alt}
                sizes="(max-width: 500px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
