import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <article className="flex-1 px-6 md:px-10 py-8 max-w-3xl">
        <p className="text-sm font-bold text-[#B3050A] uppercase tracking-wide">
          {post.category}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#B3050A] mt-2">
          {post.title}
        </h1>
        <div
          className="mt-8 text-sm md:text-base text-[#B3050A] leading-relaxed [&_p]:mb-4 [&_strong]:font-bold [&_em]:italic [&_a]:underline [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_img]:my-6 [&_img]:max-w-full [&_img]:h-auto"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <Link
        href="/blog"
        className="bg-[#B3050A] px-6 md:px-10 py-6 flex items-center gap-3"
      >
        <span aria-hidden="true" className="text-white text-lg">←</span>
        <span className="text-white font-bold text-base md:text-lg tracking-wide">Ideas</span>
      </Link>
    </main>
  );
}
