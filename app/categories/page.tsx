import type { Metadata } from 'next'
import Link from 'next/link'
import { getCategories, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse posts by category.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
        Categories
      </h1>
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories yet.</p>
      ) : (
        <ul className="space-y-4">
          {categories.map((category) => {
            const name = getMetafieldValue(category.metadata?.name) || category.title
            const description = getMetafieldValue(category.metadata?.description)
            return (
              <li key={category.id} className="border-b border-gray-200 pb-4">
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-lg font-medium text-gray-900 hover:underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
                >
                  {name}
                </Link>
                {description && <p className="mt-1 text-gray-600">{description}</p>}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}