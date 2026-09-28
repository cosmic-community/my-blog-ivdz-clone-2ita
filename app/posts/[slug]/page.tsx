// app/posts/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, getMetafieldValue, getPostTags } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'
import PostKindBadge from '@/components/PostKindBadge'
import CategoryBadge from '@/components/CategoryBadge'
import TagList from '@/components/TagList'
import AuthorBio from '@/components/AuthorBio'
import PostContent from '@/components/PostContent'

export const revalidate = 60

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const excerpt = getMetafieldValue(post.metadata?.excerpt)
  const image = post.metadata?.featured_image

  return {
    title: post.title,
    description: excerpt || undefined,
    openGraph: {
      title: post.title,
      description: excerpt || undefined,
      type: 'article',
      publishedTime: post.metadata?.published_date,
      images: image?.imgix_url
        ? [{ url: `${image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress` }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: excerpt || undefined,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const image = post.metadata?.featured_image
  const date = post.metadata?.published_date
  const tags = getPostTags(post)
  const author = post.metadata?.author

  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <PostKindBadge kind={post.metadata?.post_kind} />
          <CategoryBadge category={post.metadata?.category} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
          {post.title}
        </h1>
        {date && (
          <time dateTime={date} className="mt-3 block text-sm text-gray-500">
            {formatDate(date)}
          </time>
        )}
      </header>

      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1400&h=800&fit=crop&auto=format,compress`}
          alt={image.alt_text || post.title}
          width={700}
          height={400}
          className="w-full h-auto rounded mb-10 object-cover"
        />
      )}

      <PostContent content={post.metadata?.content} />

      {tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <TagList tags={tags} />
        </div>
      )}

      {author && (
        <div className="mt-10 pt-6 border-t border-gray-200">
          <AuthorBio author={author} />
        </div>
      )}
    </article>
  )
}