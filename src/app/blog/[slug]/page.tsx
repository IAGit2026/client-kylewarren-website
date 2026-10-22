import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleLayout from '../../../components/blog/ArticleLayout';
import { getPublishedPost, getPublishedPosts } from '../../../lib/blog';
import '../../../styles/blog.css';

// Static export needs at least one param. Until a post is published, a placeholder
// slug is exported and renders the 404 page (noindex, not in the sitemap).
const PLACEHOLDER_SLUG = '_no-posts-yet';

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.length > 0 ? posts.map((post) => ({ slug: post.slug })) : [{ slug: PLACEHOLDER_SLUG }];
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return { robots: { index: false, follow: false } };
  return {
    title: `${post.title} | Kyle Warren`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: { type: 'article', url: `/blog/${post.slug}/`, title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();
  return <ArticleLayout post={post} />;
}
