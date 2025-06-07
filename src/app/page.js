// Main page code

import Link from 'next/link';
import DarkModeToggle from '../components/DarkModeToggle';
import './globals.css';

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();

  return (
    <div className="min-h-screen"style={{
    backgroundColor: 'var(--background)',
    color: 'var(--foreground)',
    transition: 'background-color 0.3s, color 0.3s',
  }}>
      <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-700">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <Link href="/contact" className="text-white-600 dark:text-white-400 hover:underline text-2xl">
        Contact
        </Link>
        <DarkModeToggle />
        
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
          {posts.map((post) => (
            <Link key={post.id} href={`/post/${post.id}`}>
              <div className="cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-5 hover:shadow-lg transition">
                <h3 className="text-xl dark:text-gray-200 font-bold mb-2 hover:underline">{post.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                  {post.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
