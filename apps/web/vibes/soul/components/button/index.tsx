import Link from 'next/link'
import { ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

export interface Props {
  className?: string
  link?: { href: string; target?: string }
  variant?: 'primary' | 'dark' | 'light'
  size?: 'default' | 'small'
  onClick?: () => void
  children?: ReactNode
}

function ctaStyles(
  className = '',
  link: Props['link'] = { href: '' },
  variant: Props['variant'] = 'primary',
  size: Props['size'] = 'default'
) {
  return clsx(
    'relative flex w-fit shrink-0 overflow-hidden rounded-full',
    'text-center font-medium leading-normal select-none',
    'border border-transparent focus:outline-none focus:ring-1 transition-colors',
    {
      primary: 'bg-primary text-foreground',
      dark: 'bg-foreground text-foreground hover:border-foreground hover:text-background',
      light: 'bg-background text-background hover:border-background hover:text-foreground',
    }[variant],
    {
      default: 'px-6 py-[13px] text-base',
      small: 'px-4 py-2 text-sm',
    }[size],
    // After Pseudo Element / Animated Background Styles
    'after:absolute after:inset-0 after:h-full after:z-0 after:w-full after:rounded-full',
    'after:-translate-x-[110%] hover:after:translate-x-0',
    'after:transition-[opacity,transform] after:duration-300 after:ease-out',
    {
      primary: 'after:bg-white/40',
      dark: 'after:bg-background',
      light: 'after:bg-foreground',
    }[variant],
    {
      default: 'after:h-[50px]',
      small: 'after:h-[37px]',
    }[size],
    // Link Styles
    link?.href === '#' && 'after:pointer-events-none after:opacity-20',
    link?.href === '#' && 'pointer-events-none opacity-20',
    // TODO: InnerSpan / Children Styles to replace InnerSpan?
    // '[&>*]:'
    className
  )
}

export const Button = forwardRef(function Button(
  { className, link, variant = 'primary', size = 'default', onClick, children = 'Button' }: Props,
  ref: Ref<HTMLAnchorElement>
) {
  const InnerSpan = () => {
    return (
      <span
        className={clsx(
          'relative z-10 flex h-full items-center justify-center gap-2 transition-colors',
          { invert: variant !== 'primary' }
        )}
      >
        {children}
      </span>
    )
  }

  if (link?.href) {
    return (
      <Link
        ref={ref}
        className={ctaStyles(className, link, variant, size)}
        href={link?.href ?? '#'}
        target={link?.target}
      >
        <InnerSpan />
      </Link>
    )
  } else {
    return (
      <button className={ctaStyles(className, undefined, variant, size)} onClick={onClick}>
        <InnerSpan />
      </button>
    )
  }
})

export default Button
