import { getAllPosts, getMetafieldValue } from '@/lib/cosmic'

export const revalidate = 60

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const posts = await getAllPosts()

  const items = posts
    .map((post) => {
      const excerpt = getMetafieldValue(post.metadata?.excerpt)
      const link = `${siteUrl}/posts/${post.slug}`
      const pubDate = post.metadata?.published_date
        ? new Date(post.metadata.published_date).toUTCString()
        : new Date(post.created_at).toUTCString()

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
      ${excerpt ? `<description>${escapeXml(excerpt)}</description>` : ''}
    </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>My Blog — Robert DeRosa</title>
    <link>${siteUrl}</link>
    <description>Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.</description>
    <language>en-us</language>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}