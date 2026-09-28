import Link from 'next/link'
import type { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'
import PostKindBadge from '@/components/PostKindBadge'
import CategoryBadge from '@/components/CategoryBadge'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const image = post.metadata?.featured_image
  const date = post.metadata?.published_date

  return (
    <article className="border-b border-gray-200 py-8 first:pt-0 last:border-b-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        {image?.imgix_url && (
          <Link
            href={`/posts/${post.slug}`}
            className="block sm:w-40 sm:flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
          >
            <img
              src={`${image.imgix_url}?w=320&h=240&fit=crop&auto=format,compress`}
              alt={image.alt_text || post.title}
              width={160}
              height={120}
              className="w-full h-40 sm:h-28 rounded object-cover"
            />
          </Link>
        )}
        <div className="flex-1 min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <PostKindBadge kind={post.metadata?.post_kind} />
            <CategoryBadge category={post.metadata?.category} />
            {date && (
              <time dateTime={date} className="text-xs text-gray-500">
                {formatDate(date)}
              </time>
            )}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 leading-snug">
            <Link
              href={`/posts/${post.slug}`}
              className="hover:underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
            >
              {post.title}
            </Link>
          </h2>
          {excerpt && <p className="mt-2 text-gray-600 leading-relaxed">{excerpt}</p>}
        </div>
      </div>
    </article>
  )
}