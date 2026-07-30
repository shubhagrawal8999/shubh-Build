import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-slate max-w-3xl">
      <p className="text-sm font-semibold text-accent">{formatDate(post.date)} · {post.readingTime}</p>
      <h1 className="mt-4 text-5xl font-black text-ink">{post.title}</h1>
      {post.body.map((paragraph) => (
        <p className="text-lg leading-8 text-slate-600" key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}
