'use client'

import { useState } from 'react'
import { ReactNode } from 'react'

import clsx from 'clsx'
import { X } from 'lucide-react'

type Props = {
  className?: string
  children?: ReactNode
}

export const AnnouncementBar = function AnnouncementBar({ className, children }: Props) {
  const [dismissed, setDismissed] = useState(false)
  // TODO: Use local storage for announcement bar state

  return (
    <div
      className={clsx(
        'relative w-full overflow-hidden bg-primary transition-all duration-300 ease-out @container',
        dismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
        className
      )}
    >
      <p className="p-2.5 pr-14 text-foreground @lg:text-center">{children}</p>
      <button
        role="button"
        aria-label="Dismiss banner"
        onClick={e => {
          e.preventDefault()
          setDismissed(true)
        }}
        className="absolute right-2.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-transform duration-300 hover:scale-125"
      >
        <X />
      </button>
    </div>
  )
}

export default AnnouncementBar
