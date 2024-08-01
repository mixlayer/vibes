import clsx from 'clsx'

import Heart from '@/vibes/soul/components/icons/Heart'

type Props = {
  favorited?: boolean
  setFavorited: (liked: boolean) => void
}

export const Favorite = function Favorite({ favorited, setFavorited }: Props) {
  return (
    <label
      className={clsx(
        'group relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-contrast-100 text-foreground transition-[colors,transform] duration-300 focus-within:ring-1',
        favorited ? 'bg-contrast-100' : 'hover:border-contrast-200'
      )}
    >
      <input
        type="checkbox"
        checked={favorited}
        onChange={() => setFavorited(!favorited)}
        className="absolute h-0 w-0 opacity-0"
      />
      <Heart filled={favorited} />
    </label>
  )
}

export default Favorite
