export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 animate-pulse space-y-6">
      <div className="h-8 w-1/2 bg-gray-200 rounded" />
      <div className="h-4 w-3/4 bg-gray-200 rounded" />
      <div className="space-y-4 mt-8">
        <div className="h-24 w-full bg-gray-200 rounded" />
        <div className="h-24 w-full bg-gray-200 rounded" />
        <div className="h-24 w-full bg-gray-200 rounded" />
      </div>
    </div>
  )
}