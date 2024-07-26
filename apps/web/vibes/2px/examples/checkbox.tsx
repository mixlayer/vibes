'use client'

import { useState } from 'react'

import Checkbox from '@/vibes/2px/components/checkbox'

export default function Preview() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex min-h-48 items-center justify-center bg-background p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Checkbox checked={checked} setChecked={setChecked} />
    </div>
  )
}
