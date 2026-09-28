import type { Metadata } from 'next'
import { getAllPosts, getAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Home',
  description:
    'A personal blog by Robert DeRosa on Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.',
}

export default async function HomePage() {
  const [posts, author] = await Promise.all([getAllPosts(), getAuthor()])
  const authorName = author
    ? getMetafieldValue(author.metadata?.name) || author.title
    : 'Robert DeRosa'

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <section className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          {authorName}
        </h1>
        <p className="mt-3 text-lg text-gray-600 leading-relaxed max-w-prose">
          Notes and essays on Long COVID, science, healthcare, public policy,
          advocacy, technology, personal projects, and everyday life.
        </p>
      </section>

      <section aria-label="Posts">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts published yet. Check back soon.</p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}