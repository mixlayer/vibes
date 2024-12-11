import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { Breadcrumb, Breadcrumbs, BreadcrumbsSkeleton } from '@/vibes/soul/primitives/breadcrumbs';
import { Price, PriceLabel } from '@/vibes/soul/primitives/price-label';
import { Rating } from '@/vibes/soul/primitives/rating';
import { ProductGallery } from '@/vibes/soul/sections/product-detail/product-gallery';

import { ProductDetailForm, ProductDetailFormAction } from './product-detail-form';
import { Field } from './schema';

interface ProductDetailProduct {
  id: string;
  title: string;
  href: string;
  images: Streamable<{ src: string; alt: string }[]>;
  price?: Streamable<Price | null>;
  subtitle?: string;
  badge?: string;
  rating?: Streamable<number | null>;
  description?: Streamable<string | React.ReactNode | null>;
}

interface Props<F extends Field> {
  breadcrumbs?: Streamable<Breadcrumb[]>;
  product: Streamable<ProductDetailProduct | null>;
  action: ProductDetailFormAction<F>;
  fields: Streamable<F[]>;
}

export function ProductDetail<F extends Field>({
  product: streamableProduct,
  action,
  fields: streamableFields,
  breadcrumbs: streamableBreadcrumbs,
}: Props<F>) {
  return (
    <section className="@container">
      <div className="mx-auto w-full max-w-screen-lg px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20">
        <Stream fallback={<BreadcrumbsSkeleton />} value={streamableBreadcrumbs}>
          {(breadcrumbs) =>
            breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} className="mb-6" />
          }
        </Stream>

        <Stream fallback={<ProductDetailSkeleton />} value={streamableProduct}>
          {(product) =>
            product && (
              <div className="grid grid-cols-1 items-stretch gap-x-6 gap-y-8 @2xl:grid-cols-2 @5xl:gap-x-12">
                <div className="hidden @2xl:block">
                  <Stream fallback={<ProductGallerySkeleton />} value={product.images}>
                    {(images) => <ProductGallery images={images} />}
                  </Stream>
                </div>

                {/* Product Details */}
                <div className="text-foreground">
                  {product.subtitle != null && product.subtitle !== '' && (
                    <p className="font-mono text-sm uppercase">{product.subtitle}</p>
                  )}

                  <h1 className="mb-3 mt-2 font-heading text-2xl font-medium leading-none @xl:mb-4 @xl:text-3xl @4xl:text-4xl">
                    {product.title}
                  </h1>

                  <Stream fallback={<RatingSkeleton />} value={product.rating}>
                    {(rating) => <Rating rating={rating ?? 0} />}
                  </Stream>

                  <Stream fallback={<PriceLabelSkeleton />} value={product.price}>
                    {(price) => (
                      <PriceLabel className="my-3 text-xl @xl:text-2xl" price={price ?? ''} />
                    )}
                  </Stream>

                  <div className="mb-8 @2xl:hidden">
                    <Stream fallback={<ProductGallerySkeleton />} value={product.images}>
                      {(images) => <ProductGallery images={images} />}
                    </Stream>
                  </div>

                  <Stream fallback={<ProductDescriptionSkeleton />} value={product.description}>
                    {(description) =>
                      description != null &&
                      description !== '' &&
                      (typeof product.description === 'string' ? (
                        <p className="mb-6 text-contrast-500">{description}</p>
                      ) : (
                        <div className="mb-6 text-contrast-500">{description}</div>
                      ))
                    }
                  </Stream>

                  <Stream fallback={<ProductDetailFormSkeleton />} value={streamableFields}>
                    {(fields) => (
                      <ProductDetailForm action={action} fields={fields} productId={product.id} />
                    )}
                  </Stream>
                </div>
              </div>
            )
          }
        </Stream>
      </div>
    </section>
  );
}

const ImageSkeleton = () => (
  <div className="aspect-[4/5] h-full w-full shrink-0 grow-0 basis-full animate-pulse bg-contrast-100" />
);

const ThumbnailsSkeleton = () => (
  <>
    <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-contrast-100 @md:h-16 @md:w-16"></div>
    <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-contrast-100 @md:h-16 @md:w-16"></div>
    <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-contrast-100 @md:h-16 @md:w-16"></div>
    <div className="h-12 w-12 shrink-0 animate-pulse rounded-lg bg-contrast-100 @md:h-16 @md:w-16"></div>
  </>
);

const ProductGallerySkeleton = () => (
  <div className={'@container'}>
    <div className="w-full overflow-hidden rounded-xl @xl:rounded-2xl">
      <div className="flex">
        <ImageSkeleton />
      </div>
    </div>

    <div className="mt-2 flex max-w-full gap-2 overflow-x-auto">
      <ThumbnailsSkeleton />
    </div>
  </div>
);

const PriceLabelSkeleton = () => (
  <div className="my-4 h-4 w-20 animate-pulse rounded-md bg-contrast-100"></div>
);

const RatingSkeleton = () => (
  <div className="flex w-[136px] animate-pulse items-center gap-1">
    <div className="h-4 w-[100px] rounded-md bg-contrast-100" />
    <div className="h-6 w-8 rounded-xl bg-contrast-100" />
  </div>
);

const ProductDescriptionSkeleton = () => (
  <div className="flex w-full animate-pulse flex-col gap-3.5 pb-6">
    <div className="h-2.5 w-full bg-contrast-100"></div>
    <div className="h-2.5 w-full bg-contrast-100"></div>
    <div className="h-2.5 w-3/4 bg-contrast-100"></div>
  </div>
);

const ProductDetailFormSkeleton = () => (
  <div className="flex animate-pulse flex-col gap-8">
    <div className="flex flex-col gap-5">
      <div className="h-2 w-10 rounded-md bg-contrast-100"></div>
      <div className="flex gap-2">
        <div className="h-11 w-[72px] rounded-full bg-contrast-100"></div>
        <div className="h-11 w-[72px] rounded-full bg-contrast-100"></div>
        <div className="h-11 w-[72px] rounded-full bg-contrast-100"></div>
      </div>
    </div>
    <div className="flex flex-col gap-5">
      <div className="h-2 w-16 rounded-md bg-contrast-100"></div>
      <div className="flex gap-4">
        <div className="h-10 w-10 rounded-full bg-contrast-100"></div>
        <div className="h-10 w-10 rounded-full bg-contrast-100"></div>
        <div className="h-10 w-10 rounded-full bg-contrast-100"></div>
        <div className="h-10 w-10 rounded-full bg-contrast-100"></div>
        <div className="h-10 w-10 rounded-full bg-contrast-100"></div>
      </div>
    </div>
    <div className="flex gap-2">
      <div className="h-12 w-[120px] rounded-lg bg-contrast-100"></div>
      <div className="h-12 w-[216px] rounded-full bg-contrast-100"></div>
    </div>
  </div>
);

const ProductDetailSkeleton = () => (
  <div className="grid animate-pulse grid-cols-1 items-stretch gap-x-6 gap-y-8 @2xl:grid-cols-2 @5xl:gap-x-12">
    <div className="hidden @2xl:block">
      <ProductGallerySkeleton />
    </div>

    <div>
      <div className="mb-6 h-4 w-20 rounded-lg bg-contrast-100"></div>

      <div className="mb-6 h-6 w-72 rounded-lg bg-contrast-100"></div>

      <RatingSkeleton />

      <PriceLabelSkeleton />

      <div className="mb-8 @2xl:hidden">
        <ProductGallerySkeleton />
      </div>

      <ProductDetailFormSkeleton />
    </div>
  </div>
);
