'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  images: { alt: string; src: string }[]
  className?: string
}

export const ProductGallery = ({ images, className }: Props) => {
  const [previewImage, setPreviewImage] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setPreviewImage(emblaApi.selectedScrollSnap())

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const selectImage = (index: number) => {
    setPreviewImage(index)
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <div className={clsx('@container', className)}>
      <div className="w-full overflow-hidden rounded-xl @xl:rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, idx) => (
            <div key={idx} className="relative aspect-[4/5] w-full shrink-0 grow-0 basis-full ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex max-w-full justify-center gap-2 overflow-x-auto @md:mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            aria-label={`View image number ${index + 1}`}
            className={clsx(
              'relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 hover:opacity-100 @md:h-16 @md:w-16',
              index === previewImage
                ? 'border-foreground opacity-100'
                : 'border-transparent opacity-50'
            )}
            onClick={() => selectImage(index)}
          >
            <Image src={image.src} alt={image.alt} fill className="bg-contrast-100 object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
