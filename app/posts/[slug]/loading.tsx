// app/posts/[slug]/loading.tsx
export default function PostLoading() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
      <div className="h-8 w-3/4 bg-gray-200 rounded mb-3" />
      <div className="h-4 w-32 bg-gray-200 rounded mb-8" />
      <div className="h-64 w-full bg-gray-200 rounded mb-8" />
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
      </div>
    </div>
  )
}