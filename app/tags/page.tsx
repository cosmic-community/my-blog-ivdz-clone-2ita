import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTags } from '@/lib/cosmic'
import { tagToSlug } from '@/lib/utils'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Browse posts by tag.',
}

export default async function TagsPage() {
  const tags = await getAllTags()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">Tags</h1>
      {tags.length === 0 ? (
        <p className="text-gray-500">No tags yet.</p>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/tags/${tagToSlug(tag)}`}
                className="inline-block rounded-full bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}