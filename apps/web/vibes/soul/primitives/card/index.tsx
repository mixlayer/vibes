import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  className?: string;
  title: string;
  image?: { src: string; alt: string };
  href: string;
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
}

export function Card({
  className,
  title,
  image,
  href,
  textColorScheme = 'light',
  iconColorScheme = 'light',
  aspectRatio = '5:6',
}: CardProps) {
  return (
    <Link
      className={clsx(
        'group relative flex min-w-0 cursor-pointer flex-col gap-2 rounded-[var(--card-border-radius)] focus:outline-0 focus-visible:outline-0',
        className,
      )}
      href={href}
    >
      <ArrowUpRight
        className={clsx(
          'absolute right-5 top-5 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5',
          {
            light: 'text-[var(--card-light-icon)]',
            dark: 'text-[var(--card-dark-icon)]',
          }[iconColorScheme],
        )}
        strokeWidth={1.5}
      />
      <div
        className={clsx(
          'relative overflow-hidden rounded-[inherit] group-focus:ring-[var(--card-focus)] group-focus-visible:ring-2',
          {
            light: 'bg-[var(--card-light-background)]',
            dark: 'bg-[var(--card-dark-background)]',
          }[textColorScheme],
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      >
        {image != null ? (
          <Image
            alt={image.alt}
            className={clsx(
              'w-full scale-100 select-none object-cover transition-transform duration-500 ease-out group-hover:scale-110',
              {
                light: 'bg-[var(--card-light-background)]',
                dark: 'bg-[var(--card-dark-background)]',
              }[textColorScheme],
            )}
            fill
            sizes="(max-width: 768px) 70vw, 33vw"
            src={image.src}
          />
        ) : (
          <div
            className={clsx(
              'break-words pl-5 pt-5 text-4xl font-bold leading-[0.8] tracking-tighter opacity-25 transition-transform duration-500 ease-out group-hover:scale-105 @2xl:text-7xl',
              {
                light: 'text-[var(--card-light-text)]',
                dark: 'text-[var(--card-dark-text)]',
              }[textColorScheme],
            )}
          >
            {title}
          </div>
        )}
      </div>
      <span
        className={clsx(
          'line-clamp-1 text-lg font-medium',
          {
            light: 'text-[var(--card-light-text)]',
            dark: 'text-[var(--card-dark-text)]',
          }[textColorScheme],
        )}
      >
        {title}
      </span>
    </Link>
  );
}

export function CardSkeleton() {
  return (
    <div className="relative flex aspect-[3/4] w-full animate-pulse flex-col gap-2 @4xl:min-w-72">
      {/* Image */}
      <div className="h-full w-full overflow-hidden rounded-lg bg-contrast-100 @4xl:rounded-xl" />
      {/* Title */}
      <div className="mb-1 line-clamp-1 h-6 w-20 rounded-lg bg-contrast-100 @4xl:absolute @4xl:bottom-5 @4xl:left-5" />
    </div>
  );
}
