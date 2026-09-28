import { getMetafieldValue } from '@/lib/cosmic'

interface PostKindBadgeProps {
  kind?: string
  className?: string
}

const KIND_STYLES: Record<string, string> = {
  Essay: 'bg-stone-100 text-stone-700 border-stone-300',
  Note: 'bg-sky-50 text-sky-700 border-sky-200',
  'Research Commentary': 'bg-amber-50 text-amber-800 border-amber-200',
  'Project Update': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Personal: 'bg-rose-50 text-rose-700 border-rose-200',
}

export default function PostKindBadge({ kind, className = '' }: PostKindBadgeProps) {
  const label = getMetafieldValue(kind)
  if (!label) return null
  const styles = KIND_STYLES[label] || 'bg-gray-100 text-gray-700 border-gray-300'
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${styles} ${className}`}
    >
      {label}
    </span>
  )
}