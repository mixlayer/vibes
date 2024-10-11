'use client'

import { useState } from 'react'

import { Checkbox } from '@/vibes/soul/components/checkbox'

export default function Preview() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex h-screen flex-col justify-center gap-4 p-10">
      <Checkbox checked={checked} setChecked={setChecked} label="Checkbox" />
      <Checkbox
        checked={checked}
        setChecked={setChecked}
        label="Accept Terms & Conditions"
        error="You must accept the Terms & Conditions"
      />
    </div>
  )
}
