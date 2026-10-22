import type { Metadata } from 'next';
import BlogIndex from '../../components/blog/BlogIndex';
import { getPublishedPosts } from '../../lib/blog';
import '../../styles/blog.css';

const posts = getPublishedPosts();

export const metadata: Metadata = {
  title: 'Writing | Kyle Warren',
  description: 'Writing from Kyle Warren, Modern Initiator.',
  alternates: { canonical: '/blog/' },
  // Kept out of search until the first article is published.
  robots: posts.length === 0 ? { index: false, follow: true } : undefined,
};

export default function BlogPage() {
  return <BlogIndex posts={posts} />;
}
