import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'My Blog — Robert DeRosa',
    template: '%s — My Blog',
  },
  description:
    'A personal blog by Robert DeRosa on Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.',
  openGraph: {
    title: 'My Blog — Robert DeRosa',
    description:
      'A personal blog by Robert DeRosa on Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.',
    url: siteUrl,
    siteName: 'My Blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Blog — Robert DeRosa',
    description:
      'A personal blog by Robert DeRosa on Long COVID, science and healthcare, public policy, advocacy, technology, personal projects, and everyday life.',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📝</text></svg>"
        />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a8a35dcb38644920ec91906"></script>
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}