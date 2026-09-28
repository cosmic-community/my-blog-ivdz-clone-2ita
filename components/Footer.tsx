export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
        <p>&copy; {year} Robert DeRosa. All rights reserved.</p>
        <a
          href="/rss.xml"
          className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
        >
          RSS Feed
        </a>
      </div>
    </footer>
  )
}