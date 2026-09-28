import Link from 'next/link'
import { tagToSlug } from '@/lib/utils'

interface TagListProps {
  tags: string[]
  className?: string
}

export default function TagList({ tags, className = '' }: TagListProps) {
  if (!tags || tags.length === 0) return null
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            href={`/tags/${tagToSlug(tag)}`}
            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            #{tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}