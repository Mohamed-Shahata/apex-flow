import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPosts } from "@/lib/actions/posts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on backend architecture, Next.js, and shipping production SaaS.",
};

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <main id="main" className="flex-1 px-6 py-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#8b96a8]">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#ededed]">
            Notes on building production software
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="text-[#8b96a8]">No posts published yet — check back soon.</p>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:bg-white/[0.05] hover:border-white/20"
              >
                <span className="text-xs text-[#8b96a8]">
                  {post.publishedAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h2 className="text-xl font-semibold text-[#ededed] group-hover:text-[#06b6d4] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#8b96a8] leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}