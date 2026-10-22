import type { BlogPostMeta } from '../../lib/blog';
import BlogCard from './BlogCard';

export default function BlogIndex({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <main className="blog-shell">
      <a className="blog-home" href="/">Kyle Warren · Modern Initiator</a>
      <h1 className="blog-heading">Writing</h1>
      {posts.length === 0 ? (
        <p className="blog-empty">New writing is on its way.</p>
      ) : (
        <div className="blog-list">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
