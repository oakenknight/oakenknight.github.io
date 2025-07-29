import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import BlogItem from '@/components/BlogItem';

export const metadata = {
  title: 'Blog - Aleksandar Ignjatijevic',
  description: 'Thoughts on security engineering, blockchain protocols, and software development',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to home
          </Link>
        </div>
        <h1 className="text-3xl font-bold mono mb-4">Writing</h1>
        <p className="text-lg text-gray-600">
          Collection of blogposts written for Informal Systems and my own thoughts on security engineering, blockchain protocols, and software development.
        </p>
      </header>

      {/* Posts */}
      <section className="prose">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogItem key={post.id} {...post} />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600">No posts published yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Footer Navigation */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to home
          </Link>
        </div>
      </footer>
    </main>
  );
}
