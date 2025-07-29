import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mono mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Post Not Found</h2>
        <p className="text-gray-600 mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Posts
          </Link>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
