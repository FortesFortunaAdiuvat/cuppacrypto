"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-xl font-bold">
            CuppaCrypto
          </Link>
          <button
            className="ml-4 rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden items-center space-x-6 md:flex">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/learn" className="text-gray-700 hover:text-gray-900">
            Learn
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-gray-900">
            News
          </Link>
        </div>

        <div className="hidden items-center space-x-4 md:flex">
          <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
          <button aria-label="Account" className="text-gray-700 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 20a8 8 0 1116 0H2z" />
            </svg>
          </button>
          <button aria-label="Cart" className="text-gray-700 hover:text-gray-900">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="space-y-2 px-4 pb-4 md:hidden">
          <Link href="/" className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/shop" className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100">
            Shop
          </Link>
          <Link href="/learn" className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100">
            Learn
          </Link>
          <Link href="/news" className="block rounded-md px-2 py-1 text-gray-700 hover:bg-gray-100">
            News
          </Link>
          <div className="flex space-x-4 pt-2">
            <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
            <button aria-label="Account" className="text-gray-700 hover:text-gray-900">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2 20a8 8 0 1116 0H2z"
                />
              </svg>
            </button>
            <button aria-label="Cart" className="text-gray-700 hover:text-gray-900">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
