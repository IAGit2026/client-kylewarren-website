import type { BlogPostMeta } from '../../lib/blog';

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="blog-card">
      <h2 className="blog-card-title">
        <a href={`/blog/${post.slug}/`}>{post.title}</a>
      </h2>
      {post.date ? <p className="blog-card-date">{post.date}</p> : null}
      {post.description ? <p className="blog-card-excerpt">{post.description}</p> : null}
      <a className="blog-card-link" href={`/blog/${post.slug}/`}>Read the article</a>
    </article>
  );
}
