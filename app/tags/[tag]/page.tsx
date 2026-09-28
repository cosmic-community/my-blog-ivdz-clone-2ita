// app/tags/[tag]/page.tsx
import type { Metadata } from 'next'
import { getAllTags, getPostsByTag } from '@/lib/cosmic'
import { slugToTag, tagToSlug } from '@/lib/utils'
import PostCard from '@/components/PostCard'

export const revalidate = 60

interface TagPageProps {
  params: Promise<{ tag: string }>
}

export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({ tag: tagToSlug(tag) }))
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params
  const decoded = slugToTag(tag)
  return {
    title: `#${decoded}`,
    description: `Posts tagged #${decoded}`,
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params
  const decoded = slugToTag(tag)
  const posts = await getPostsByTag(decoded)

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">#{decoded}</h1>
      <div className="mt-8">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts with this tag yet.</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  )
}