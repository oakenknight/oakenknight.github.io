import blogData from '@/data/blog.json';

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts() {
  return blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts() {
  return getAllPosts().filter(post => post.featured);
}

/**
 * Get recent blog posts (limit specified)
 */
export function getRecentPosts(limit = 5) {
  return getAllPosts().slice(0, limit);
}

/**
 * Get blog post by slug
 */
export function getPostBySlug(slug) {
  return blogData.find(post => post.slug === slug);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag) {
  return getAllPosts().filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

/**
 * Get all unique tags
 */
export function getAllTags() {
  const tags = new Set();
  blogData.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}
