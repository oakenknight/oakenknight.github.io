import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post
export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Navigation */}
      <div className="mb-8">
        <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold mono mb-4 leading-tight">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mono mb-6">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-gray-400">·</span>
          <span>{post.readTime}</span>
          {post.featured && (
            <>
              <span className="text-gray-400">·</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                Featured
              </span>
            </>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full mono"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
          <p className="text-gray-600 dark:text-gray-400 text-center italic mb-0">
            This is a placeholder blog post. In a real implementation, you would load the full content 
            from your CMS, markdown files, or database.
          </p>
        </div>

        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {post.excerpt}
          </p>
          
          <p>
            This blog post would contain the full content for "{post.title}". In a production 
            implementation, you might store the full content in:
          </p>
          
          <ul className="space-y-2">
            <li>Markdown files in your repository</li>
            <li>A headless CMS like Contentful or Strapi</li>
            <li>A database with rich text content</li>
            <li>MDX files for interactive content</li>
          </ul>

          <p>
            The blog infrastructure is now complete with proper routing, metadata generation, 
            and SEO optimization. You can start adding real content by extending the data 
            structure and content management approach.
          </p>

          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 italic text-gray-600 dark:text-gray-400">
            "The blog system supports all the modern features you'd expect: dynamic routing, 
            SEO metadata, responsive design, and dark mode support."
          </blockquote>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
          
          <p>
            To add real content, you can extend the blog.json structure to include full content, 
            or implement a more sophisticated content management system based on your needs.
          </p>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← All posts
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            Back to portfolio →
          </Link>
        </div>
      </footer>
    </main>
  );
}
