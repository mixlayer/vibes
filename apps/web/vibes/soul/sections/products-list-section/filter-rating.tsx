import { parseAsArrayOf, parseAsString, useQueryState } from 'nuqs'

import { Checkbox } from '@/vibes/soul/form/checkbox'
import { Rating } from '@/vibes/soul/primitives/rating'

interface Props {
  paramName: string
}

export function FilterRating({ paramName }: Props) {
  const [param, setParam] = useQueryState(paramName, parseAsArrayOf(parseAsString))

  return (
    <div className="space-y-3">
      {[5, 4, 3, 2, 1].map(rating => (
        <Checkbox
          key={rating}
          id={`${paramName}-${rating}`}
          label={<Rating rating={rating} />}
          checked={param?.includes(rating.toString()) ?? false}
          onCheckedChange={value =>
            void setParam(p =>
              value === true
                ? [...(p ?? []), rating.toString()]
                : (p ?? []).filter(v => v !== rating.toString())
            )
          }
        />
      ))}
    </div>
  )
}
