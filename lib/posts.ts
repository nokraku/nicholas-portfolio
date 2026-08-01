import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostCategory = "Experience" | "Idea";

export type Post = {
  slug: string;
  title: string;
  category: PostCategory;
  date: string;
  excerpt?: string;
  content: string;
};

function readPost(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    category: data.category,
    date: data.date,
    excerpt: data.excerpt,
    content,
  };
}

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  return filenames
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
