interface PostContentProps {
  content?: string
}

export default function PostContent({ content }: PostContentProps) {
  if (!content) return null
  return (
    <div
      className="prose prose-stone max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-2 prose-blockquote:border-gray-300 prose-blockquote:text-gray-600 prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}