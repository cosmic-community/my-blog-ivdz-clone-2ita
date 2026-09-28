// app/categories/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getCategories,
  getCategoryBySlug,
  getPostsByCategory,
  getMetafieldValue,
} from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export const revalidate = 60

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)
  if (!category) return { title: 'Category Not Found' }
  const name = getMetafieldValue(category.metadata?.name) || category.title
  return {
    title: name,
    description: getMetafieldValue(category.metadata?.description) || `Posts in ${name}`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900">{name}</h1>
      {description && <p className="mt-2 text-gray-600 max-w-prose">{description}</p>}
      <div className="mt-8">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts in this category yet.</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </div>
  )
}