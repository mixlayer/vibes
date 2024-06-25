import * as React from 'react'

import clsx from 'clsx'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'default' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          'relative z-0 ring-offset-2 ring-offset-docs-background focus-visible:rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-docs-ring',
          className
        )}
        ref={ref}
        {...props}
      >
        <span
          className={clsx(
            'inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-semibold outline-none ring-offset-docs-background transition-colors',
            {
              default:
                'pattern-shadow pattern-shadow-sm hover:pattern-shadow-hover border-docs-foreground bg-docs-background text-docs-foreground',
              ghost: 'border-transparent hover:bg-docs-foreground/5',
              link: 'text-primary underline-offset-4 hover:underline',
            }[variant],
            {
              default: 'h-10 px-4 py-2',
              sm: 'h-9 rounded-md px-3',
              icon: 'h-10 w-10',
            }[size]
          )}
        >
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }