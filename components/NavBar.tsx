"use client";

import Link from 'next/link';
import { FaHome, FaShoppingBag, FaBookOpen, FaNewspaper, FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

export default function NavBar() {
  return (
    <nav className="w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-fuchsia-900 text-fuchsia-200 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold drop-shadow-[0_0_0.3rem_#e879f9]">
          CuppaCrypto
        </Link>
        <div className="flex items-center space-x-6 text-lg">
          <Link href="/" className="flex items-center gap-2 hover:text-cyan-300">
            <FaHome />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link href="/shop" className="flex items-center gap-2 hover:text-cyan-300">
            <FaShoppingBag />
            <span className="hidden sm:inline">Shop</span>
          </Link>
          <Link href="/learn" className="flex items-center gap-2 hover:text-cyan-300">
            <FaBookOpen />
            <span className="hidden sm:inline">Learn</span>
          </Link>
          <Link href="/news" className="flex items-center gap-2 hover:text-cyan-300">
            <FaNewspaper />
            <span className="hidden sm:inline">News</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-xl">
          <button aria-label="Search" className="hover:text-cyan-300">
            <FaSearch />
          </button>
          <button aria-label="Account" className="hover:text-cyan-300">
            <FaUser />
          </button>
          <button aria-label="Cart" className="hover:text-cyan-300">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
}
