import type { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorBioProps {
  author?: Author | null
  compact?: boolean
}

export default function AuthorBio({ author, compact = false }: AuthorBioProps) {
  if (!author) return null
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.avatar
  const website = getMetafieldValue(author.metadata?.website)

  return (
    <div className={`flex items-start gap-4 ${compact ? '' : 'py-6'}`}>
      {avatar?.imgix_url && (
        <img
          src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt={avatar.alt_text || name}
          width={compact ? 48 : 64}
          height={compact ? 48 : 64}
          className={`rounded-full object-cover flex-shrink-0 ${compact ? 'w-12 h-12' : 'w-16 h-16'}`}
        />
      )}
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        {bio && <p className="mt-1 text-sm text-gray-600 leading-relaxed">{bio}</p>}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-gray-500 underline underline-offset-2 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
          >
            {website.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
    </div>
  )
}