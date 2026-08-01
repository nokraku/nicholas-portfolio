import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { getPostsByCategory, type Post } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Ideas | Nicholas Osorio-Okraku",
};

function Section({ label, posts }: { label: string; posts: Post[] }) {
  return (
    <section>
      <h3 className="text-base md:text-lg font-bold text-[#B3050A]">{label}</h3>
      <hr className="border-t border-[#B3050A] mt-2" />
      <ul className="mt-8 space-y-4">
        {posts.length === 0 ? (
          <li className="text-sm text-[#B3050A]">[Example title name]</li>
        ) : (
          posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm md:text-base text-[#B3050A] hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

export default function BlogIndex() {
  const experiences = getPostsByCategory("Experience");
  const ideas = getPostsByCategory("Idea");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Content sections */}
      <div className="flex-1 px-6 md:px-10 pt-6 pb-8 space-y-12">
        <Section label="Experiences" posts={experiences} />
        <Section label="Ideas" posts={ideas} />
      </div>

      {/* Back navigation */}
      <Link
        href="/"
        className="bg-[#B3050A] px-6 md:px-10 py-6 flex items-center gap-3"
      >
        <span aria-hidden="true" className="text-white text-lg">←</span>
        <span className="text-white font-bold text-base md:text-lg tracking-wide">Home</span>
      </Link>
    </main>
  );
}
