// Posts page code

import Link from "next/link";

export default async function PostPage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold">Post Detail</h1>
        <Link href="/contact" className="text-white-600 dark:text-white-400 hover:underline text-2xl">
         Contact
        </Link>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </header>

      <main className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
        <p className="whitespace-pre-line">{post.body}</p>
      </main>
    </div>
  );
}
