import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
        >
          My Blog
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/tags"
                className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
              >
                Tags
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}