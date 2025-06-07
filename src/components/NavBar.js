// Navbar code 

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
      <nav className="flex space-x-4">
        <Link href="/">
          <a className="font-bold text-xl text-gray-900 dark:text-gray-100">My Blog</a>
        </Link>
        <Link href="/contact">
          <a className="text-gray-700 dark:text-gray-300 hover:underline">Contact</a>
        </Link>
      </nav>
      <DarkModeToggle />
    </header>
  );
}
