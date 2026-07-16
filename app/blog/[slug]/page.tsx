import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/actions/posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) notFound();

  return (
    <main id="main" className="flex-1 px-6 py-24">
      <article className="max-w-3xl mx-auto flex flex-col gap-8">
        <Link href="/blog" className="text-sm text-[#8b96a8] hover:text-[#06b6d4] transition-colors">
          &larr; Back to blog
        </Link>

        <div className="flex flex-col gap-4">
          <span className="text-xs text-[#8b96a8]">
            {post.publishedAt.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#ededed]">
            {post.title}
          </h1>
        </div>

        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl border border-white/10"
          />
        )}

        <div className="prose prose-invert max-w-none text-[#c4cbd6] leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </main>
  );
}