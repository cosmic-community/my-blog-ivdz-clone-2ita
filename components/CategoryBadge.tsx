import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryBadgeProps {
  category?: Category
  className?: string
}

export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  if (!category) return null
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const accent = category.metadata?.accent_color

  const style = accent ? { color: accent, borderColor: accent } : undefined

  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`inline-flex items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors ${className}`}
      style={style}
    >
      {name}
    </Link>
  )
}