import type { BlogPost } from '../../lib/blog';

export default function ArticleLayout({ post }: { post: BlogPost }) {
  return (
    <main className="blog-shell">
      <a className="blog-home" href="/blog/">All writing</a>
      <article className="blog-article">
        <h1 className="blog-heading">{post.title}</h1>
        {post.date ? <p className="blog-card-date">{post.date}</p> : null}
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </main>
  );
}
