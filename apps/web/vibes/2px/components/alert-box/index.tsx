'use client'

import { cn } from '@/lib/utils'

import { AlertIcon, CheckIcon, CrossIcon, InfoIcon } from '../icons'

interface Props {
  message: string
  type: 'success' | 'error' | 'info'
  onClose?: () => void
}

export default function AlertBox({ message, type, onClose }: Props) {
  const Icon = type === 'success' ? CheckIcon : type === 'error' ? AlertIcon : InfoIcon

  const textColor =
    type === 'success' ? 'text-[#00AD11]' : type === 'error' ? 'text-[#FF0000]' : 'text-foreground'

  return (
    <div className="w-full @container">
      <div
        className={cn(
          'relative mx-auto flex min-h-[3.75rem] w-full max-w-[30.3125rem] items-center gap-4 border-[2px] border-foreground p-4 font-body text-sm !leading-[var(--line-height-base)]',
          textColor
        )}
      >
        <div>
          <Icon className="h-4 w-4" />
        </div>
        <div className="max-w-[24.3125rem]">{message}</div>
        <button className="absolute right-4 top-4 h-4 w-4 text-foreground" onClick={onClose}>
          <CrossIcon />
        </button>
      </div>
    </div>
  )
}
