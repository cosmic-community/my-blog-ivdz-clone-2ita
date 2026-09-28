import type { Metadata } from 'next'
import { getAuthor, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About',
  description: 'About Robert DeRosa, the writer behind My Blog.',
}

export default async function AboutPage() {
  const author = await getAuthor()
  const name = author
    ? getMetafieldValue(author.metadata?.name) || author.title
    : 'Robert DeRosa'
  const bio = author ? getMetafieldValue(author.metadata?.bio) : ''
  const avatar = author?.metadata?.avatar
  const website = author ? getMetafieldValue(author.metadata?.website) : ''

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        About
      </h1>
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {avatar?.imgix_url && (
          <img
            src={`${avatar.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={avatar.alt_text || name}
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover flex-shrink-0"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          {bio ? (
            <p className="mt-3 text-gray-700 leading-relaxed max-w-prose whitespace-pre-line">
              {bio}
            </p>
          ) : (
            <p className="mt-3 text-gray-500">Bio coming soon.</p>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-gray-600 underline underline-offset-2 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
            >
              {website.replace(/^https?:\/\//, '')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}