'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Select } from '@/vibes/soul/form/select'

export function AccountLayoutLinkSelect({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Select
      name="account-layout-link-select"
      value={pathname}
      onValueChange={value => {
        router.push(value)
      }}
      options={links.map(link => ({ value: link.href, label: link.label }))}
    />
  )
}