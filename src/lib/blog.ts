import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

// File-based blog for the Affinity SEO publisher.
// Posts live in src/content/blog/*.md (or .mdx). New publisher posts arrive as drafts
// (`draft: true` or `published: false`) and stay out of public routes and the sitemap
// until the publish state is changed in review.
export const BLOG_DIRECTORY = path.join(process.cwd(), 'src', 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags: string[];
  draft: boolean;
};

export type BlogPost = BlogPostMeta & { html: string };

function readPostFile(fileName: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIRECTORY, fileName), 'utf8');
  const { data, content } = matter(raw);
  const slug = String(data.slug || fileName.replace(/\.mdx?$/, ''));
  const draft = data.draft === true || data.published === false;
  return {
    slug,
    title: String(data.title || slug),
    description: String(data.description || data.excerpt || ''),
    date: data.date ? new Date(data.date).toISOString().slice(0, 10) : '',
    author: data.author ? String(data.author) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    draft,
    html: marked.parse(content, { async: false }) as string,
  };
}

function allPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) return [];
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((name) => /\.mdx?$/.test(name))
    .map(readPostFile);
}

export function getPublishedPosts(): BlogPost[] {
  return allPosts()
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((post) => post.slug === slug);
}
