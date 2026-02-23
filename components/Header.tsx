'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            EduEvent
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/explore" className="text-gray-600 hover:text-blue-600 transition-colors">
              Explore
            </Link>
            <Link href="/student-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
              Admin
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link href="/explore" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Explore
              </Link>
              <Link href="/student-dashboard" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Dashboard
              </Link>
              <Link href="/admin" className="text-gray-600 hover:text-blue-600 transition-colors py-2">
                Admin
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
