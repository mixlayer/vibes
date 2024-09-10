import { clsx } from 'clsx'

import { Heart } from '@/vibes/soul/components/favorite/heart'

interface Props {
  checked?: boolean
  setChecked: (liked: boolean) => void
}

export const Favorite = function Favorite({ checked, setChecked }: Props) {
  return (
    <label
      className={clsx(
        'group relative flex h-[50px] w-[50px] shrink-0 cursor-pointer items-center justify-center rounded-full border border-contrast-100 text-foreground ring-primary transition-[colors,transform] duration-300 focus-within:outline-0 focus-within:ring-2',
        checked === true ? 'bg-contrast-100' : 'hover:border-contrast-200'
      )}
    >
      <input
        id="favorite-checkbox"
        type="checkbox"
        checked={checked}
        aria-label="Favorite"
        onChange={() => {
          setChecked(checked === true ? false : true)
        }}
        className="absolute h-0 w-0 opacity-0"
      />
      <Heart filled={checked} />
    </label>
  )
}
