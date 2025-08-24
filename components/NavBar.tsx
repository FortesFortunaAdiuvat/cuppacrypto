import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold">CuppaCrypto</Link>
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
          <Link href="/learn" className="text-gray-700 hover:text-gray-900">Learn</Link>
          <Link href="/news" className="text-gray-700 hover:text-gray-900">News</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </button>
          <button aria-label="Account" className="text-gray-700 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 20a8 8 0 1116 0H2z" />
            </svg>
          </button>
          <button aria-label="Cart" className="text-gray-700 hover:text-gray-900">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
