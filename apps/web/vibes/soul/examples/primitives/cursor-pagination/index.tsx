import { CursorPagination } from '@/vibes/soul/primitives/cursor-pagination'

export default function Page() {
  return <CursorPagination info={{ startCursor: '1', endCursor: '2' }} />
}