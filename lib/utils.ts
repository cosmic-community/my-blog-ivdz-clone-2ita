export function formatDate(dateString?: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateISO(dateString?: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return ''
  return date.toISOString()
}

export function tagToSlug(tag: string): string {
  return encodeURIComponent(tag.toLowerCase().trim())
}

export function slugToTag(slug: string): string {
  return decodeURIComponent(slug)
}